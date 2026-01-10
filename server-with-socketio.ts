import { createServer } from "http"
import { parse } from "url"
import next from "next"
import { Server as SocketIOServer } from "socket.io"

const dev = process.env.NODE_ENV !== "production"
const hostname = "localhost"
const port = parseInt(process.env.PORT || "3000", 10)

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

// In-memory storage (replace with database in production)
const waitingClients = new Map()
const activeChats = new Map()
const onlineAdmins = new Set()
const chatHistory = new Map()

app.prepare().then(() => {
    const server = createServer(async (req, res) => {
        try {
            const parsedUrl = parse(req.url!, true)
            await handle(req, res, parsedUrl)
        } catch (err) {
            console.error("Error occurred handling", req.url, err)
            res.statusCode = 500
            res.end("internal server error")
        }
    })

    const io = new SocketIOServer(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"],
        },
    })

    io.on("connection", (socket) => {
        console.log("✅ User connected:", socket.id)

        // CLIENT EVENTS
        socket.on("client:join", (data) => {
            const { clientId, name } = data

            waitingClients.set(clientId, {
                id: clientId,
                name: name,
                socketId: socket.id,
                joinedAt: Date.now(),
                status: "waiting",
            })

            socket.join(`client-${clientId}`)
            console.log(`👤 Client ${name} (${clientId}) joined and waiting`)

            io.to("admins").emit("admin:new-client", waitingClients.get(clientId))
            broadcastWaitingClients()
        })

        socket.on("client:leave", (data) => {
            const { clientId } = data
            
            // Notify admin that client left & chat ended
            io.to(`admin-${clientId}`).emit("chat:client-left")
            io.to(`admin-${clientId}`).emit("chat:ended")
            
            // Clean up
            waitingClients.delete(clientId)
            activeChats.delete(clientId)
            chatHistory.delete(clientId)
            
            console.log(`👋 Client ${clientId} left`)
            broadcastWaitingClients()
        })

        // ADMIN EVENTS
        socket.on("admin:register", (data) => {
            const { adminId } = data
            onlineAdmins.add(socket.id)
            socket.join("admins")
            console.log(`🔐 Admin ${adminId} registered`)
            socket.emit("admin:waiting-clients", Array.from(waitingClients.values()))
        })

        socket.on("admin:unregister", () => {
            onlineAdmins.delete(socket.id)
            socket.leave("admins")
            console.log("🚪 Admin unregistered")
        })

        socket.on("admin:get-waiting-clients", () => {
            socket.emit("admin:waiting-clients", Array.from(waitingClients.values()))
        })

        socket.on("admin:take-client", (data) => {
            const { clientId, adminId } = data
            const client = waitingClients.get(clientId)
            if (client) {
                client.status = "chatting"
                waitingClients.set(clientId, client)
                activeChats.set(clientId, {
                    clientId,
                    adminId,
                    adminSocketId: socket.id,
                    clientSocketId: client.socketId,
                    startedAt: Date.now(),
                })
                console.log(`🤝 Admin ${adminId} took client ${clientId}`)
                broadcastWaitingClients()
            }
        })

        socket.on("admin:join-chat", (data) => {
            const { clientId, adminId } = data
            
            // Admin joins the chat room
            socket.join(`chat-${clientId}`)
            socket.join(`admin-${clientId}`)
            
            // Make sure client is also in the chat room
            const client = waitingClients.get(clientId)
            if (client && client.socketId) {
                const clientSocket = io.sockets.sockets.get(client.socketId)
                if (clientSocket) {
                    clientSocket.join(`chat-${clientId}`)
                }
            }
            
            // Get chat history
            const history = chatHistory.get(clientId) || []
            
            // If this is the first time admin joins (no history), send welcome message
            if (history.length === 0) {
                const welcomeMessage = {
                    id: `msg-${Date.now()}-welcome`,
                    senderId: adminId,
                    senderName: adminId,
                    senderType: "admin",
                    message: `Merhaba! Ben tadilat uzmanınız ${adminId}. Size nasıl yardımcı olabilirim?`,
                    timestamp: Date.now(),
                }
                
                // Add to history
                if (!chatHistory.has(clientId)) {
                    chatHistory.set(clientId, [])
                }
                chatHistory.get(clientId).push(welcomeMessage)
                
                // Broadcast welcome message to chat room
                io.to(`chat-${clientId}`).emit("chat:message", welcomeMessage)
                
                console.log(`👋 Welcome message sent to ${clientId}`)
            }
            
            // Send chat history to admin
            socket.emit("chat:history", chatHistory.get(clientId) || [])
            
            // Send chat history to client (so they don't lose messages on admin refresh)
            if (client && client.socketId) {
                const clientSocket = io.sockets.sockets.get(client.socketId)
                if (clientSocket) {
                    clientSocket.emit("chat:history", chatHistory.get(clientId) || [])
                }
            }
            
            // Notify client that admin joined
            io.to(`client-${clientId}`).emit("chat:admin-joined", { adminName: adminId })
            
            // Send client info to admin
            if (client) {
                socket.emit("chat:client-info", { name: client.name })
            }
            
            console.log(`💬 Admin ${adminId} joined chat with ${clientId}`)
        })

        socket.on("admin:leave-chat", (data) => {
            const { clientId } = data
            socket.leave(`chat-${clientId}`)
            socket.leave(`admin-${clientId}`)
            io.to(`client-${clientId}`).emit("chat:admin-left")
            const client = waitingClients.get(clientId)
            if (client) {
                client.status = "waiting"
                waitingClients.set(clientId, client)
            }
            activeChats.delete(clientId)
            broadcastWaitingClients()
            console.log(`👋 Admin left chat with ${clientId}`)
        })

        socket.on("admin:end-chat", (data) => {
            const { clientId } = data
            io.to(`client-${clientId}`).emit("chat:ended")
            socket.leave(`chat-${clientId}`)
            socket.leave(`admin-${clientId}`)
            waitingClients.delete(clientId)
            activeChats.delete(clientId)
            chatHistory.delete(clientId)
            broadcastWaitingClients()
            console.log(`❌ Admin ended chat with ${clientId}`)
        })

        // CHAT MESSAGES
        socket.on("chat:send-message", (data) => {
            const { clientId, ...messageData } = data
            if (!chatHistory.has(clientId)) {
                chatHistory.set(clientId, [])
            }
            chatHistory.get(clientId).push(messageData)
            
            // Send message to the chat room (both admin and client are in this room)
            // This ensures everyone in the conversation receives it exactly once
            io.to(`chat-${clientId}`).emit("chat:message", messageData)
            
            console.log(`📨 Message in chat ${clientId} from ${messageData.senderType}:`, messageData.message.substring(0, 50))
        })

        socket.on("chat:admin-typing", (data) => {
            const { clientId } = data
            io.to(`client-${clientId}`).emit("chat:admin-typing")
        })

        // DISCONNECT
        socket.on("disconnect", () => {
            console.log("❌ User disconnected:", socket.id)
            onlineAdmins.delete(socket.id)
            for (const [clientId, client] of waitingClients.entries()) {
                if (client.socketId === socket.id) {
                    waitingClients.delete(clientId)
                    activeChats.delete(clientId)
                    broadcastWaitingClients()
                    break
                }
            }
        })
    })

    function broadcastWaitingClients() {
        io.to("admins").emit("admin:waiting-clients", Array.from(waitingClients.values()))
    }

    server
        .once("error", (err) => {
            console.error(err)
            process.exit(1)
        })
        .listen(port, () => {
            console.log(`
🚀 Server ready!
📍 Local: http://${hostname}:${port}
🔌 Socket.IO: Connected
⚡ Environment: ${dev ? "development" : "production"}
            `)
        })
})

/**
 * Socket.IO Server Integration with Next.js
 * This initializes Socket.IO on the Next.js server
 */

import { Server as SocketIOServer } from "socket.io"
import type { NextApiRequest, NextApiResponse } from "next"
import type { Server as HTTPServer } from "http"
import type { Socket as NetSocket } from "net"

interface SocketServer extends HTTPServer {
    io?: SocketIOServer | undefined
}

interface SocketWithIO extends NetSocket {
    server: SocketServer
}

interface NextApiResponseWithSocket extends NextApiResponse {
    socket: SocketWithIO
}

// In-memory storage (replace with database in production)
const waitingClients = new Map()
const activeChats = new Map()
const onlineAdmins = new Set()
const chatHistory = new Map()

export const config = {
    api: {
        bodyParser: false,
    },
}

const SocketHandler = (req: NextApiRequest, res: NextApiResponseWithSocket) => {
    if (res.socket.server.io) {
        console.log("Socket.IO already initialized")
        res.end()
        return
    }

    console.log("Initializing Socket.IO server...")

    const io = new SocketIOServer(res.socket.server as unknown as HTTPServer, {
        path: "/api/socketio",
        addTrailingSlash: false,
        cors: {
            origin: "*",
            methods: ["GET", "POST"],
        },
    })

    res.socket.server.io = io

    io.on("connection", (socket) => {
        console.log("User connected:", socket.id)

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

            console.log(`Client ${name} (${clientId}) joined and waiting`)

            io.to("admins").emit("admin:new-client", waitingClients.get(clientId))
            broadcastWaitingClients(io)
        })

        socket.on("client:leave", (data) => {
            const { clientId } = data

            waitingClients.delete(clientId)
            activeChats.delete(clientId)

            console.log(`Client ${clientId} left`)

            io.to(`admin-${clientId}`).emit("chat:client-left")
            broadcastWaitingClients(io)
        })

        // ADMIN EVENTS

        socket.on("admin:register", (data) => {
            const { adminId } = data

            onlineAdmins.add(socket.id)
            socket.join("admins")

            console.log(`Admin ${adminId} registered`)

            socket.emit("admin:waiting-clients", Array.from(waitingClients.values()))
        })

        socket.on("admin:unregister", () => {
            onlineAdmins.delete(socket.id)
            socket.leave("admins")
            console.log("Admin unregistered")
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

                console.log(`Admin ${adminId} took client ${clientId}`)

                broadcastWaitingClients(io)
            }
        })

        socket.on("admin:join-chat", (data) => {
            const { clientId, adminId } = data

            socket.join(`chat-${clientId}`)
            socket.join(`admin-${clientId}`)

            io.to(`client-${clientId}`).emit("chat:admin-joined", {
                adminName: adminId,
            })

            const history = chatHistory.get(clientId) || []
            socket.emit("chat:history", history)

            const client = waitingClients.get(clientId)
            if (client) {
                socket.emit("chat:client-info", { name: client.name })
            }

            console.log(`Admin ${adminId} joined chat with ${clientId}`)
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
            broadcastWaitingClients(io)

            console.log(`Admin left chat with ${clientId}`)
        })

        socket.on("admin:end-chat", (data) => {
            const { clientId } = data

            io.to(`client-${clientId}`).emit("chat:ended")

            socket.leave(`chat-${clientId}`)
            socket.leave(`admin-${clientId}`)
            waitingClients.delete(clientId)
            activeChats.delete(clientId)
            chatHistory.delete(clientId)

            broadcastWaitingClients(io)

            console.log(`Admin ended chat with ${clientId}`)
        })

        // CHAT MESSAGES

        socket.on("chat:send-message", (data) => {
            const { clientId, ...messageData } = data

            if (!chatHistory.has(clientId)) {
                chatHistory.set(clientId, [])
            }
            chatHistory.get(clientId).push(messageData)

            io.to(`chat-${clientId}`).emit("chat:message", messageData)
            io.to(`client-${clientId}`).emit("chat:message", messageData)
            io.to(`admin-${clientId}`).emit("chat:message", messageData)

            console.log(`Message in chat ${clientId}:`, messageData.message.substring(0, 50))
        })

        socket.on("chat:admin-typing", (data) => {
            const { clientId } = data
            io.to(`client-${clientId}`).emit("chat:admin-typing")
        })

        // DISCONNECT

        socket.on("disconnect", () => {
            console.log("User disconnected:", socket.id)

            onlineAdmins.delete(socket.id)

            for (const [clientId, client] of waitingClients.entries()) {
                if (client.socketId === socket.id) {
                    waitingClients.delete(clientId)
                    activeChats.delete(clientId)
                    broadcastWaitingClients(io)
                    break
                }
            }
        })
    })

    console.log("Socket.IO server initialized successfully")

    res.end()
}

function broadcastWaitingClients(io: SocketIOServer) {
    io.to("admins").emit("admin:waiting-clients", Array.from(waitingClients.values()))
}

export default SocketHandler

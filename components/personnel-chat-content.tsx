"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Send, User } from "lucide-react"
import { connectSocket, getSocket, ChatMessage } from "@/lib/socket"
import { toast } from "sonner"

interface Message {
    id: string
    text: string
    sender: "user" | "professional"
    timestamp: Date
}

interface PersonnelChatContentProps {
    onMessagesChange?: (messageCount: number) => void
}

export function PersonnelChatContent({ onMessagesChange }: PersonnelChatContentProps) {
    const [messages, setMessages] = useState<Message[]>([])
    const [inputMessage, setInputMessage] = useState("")
    const [isConnecting, setIsConnecting] = useState(true)
    const [isConnected, setIsConnected] = useState(false)
    const [isTyping, setIsTyping] = useState(false)
    const [clientId, setClientId] = useState<string>("")
    const [clientName, setClientName] = useState<string>("")
    const [adminName, setAdminName] = useState<string>("")
    const [waitingForAdmin, setWaitingForAdmin] = useState(true)
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const sentMessageIdsRef = useRef<Set<string>>(new Set())
    const hasJoinedRef = useRef(false)

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" })
    }

    // Mesaj sayısını parent component'e bildir
    useEffect(() => {
        onMessagesChange?.(messages.length)
    }, [messages.length, onMessagesChange])

    // Socket connection and event handlers
    useEffect(() => {
        // Generate unique client ID
        const newClientId = `client-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
        setClientId(newClientId)

        // Get or create client name
        let name = localStorage.getItem("clientName")
        if (!name) {
            name = `Müşteri ${Math.floor(Math.random() * 1000)}`
            localStorage.setItem("clientName", name)
        }
        setClientName(name)

        // Connect to socket server
        const socket = connectSocket()

        // Handle page unload/refresh - notify server that client is leaving
        const handleBeforeUnload = () => {
            console.log("🚪 Client page unloading - notifying server")
            socket.emit("client:leave", { clientId: newClientId })
        }

        window.addEventListener("beforeunload", handleBeforeUnload)

        // Setup event handlers
        const setupSocketListeners = () => {
            // Remove existing listeners first
            socket.off("connect")
            socket.off("disconnect")
            socket.off("chat:admin-joined")
            socket.off("chat:message")
            socket.off("chat:admin-typing")
            socket.off("chat:admin-left")
            socket.off("chat:ended")

            socket.on("connect", () => {
                console.log("🔌 Client chat connected to socket")
                setIsConnected(true)
                setIsConnecting(false)

                // Register as waiting client on connect/reconnect
                if (!hasJoinedRef.current) {
                    socket.emit("client:join", {
                        clientId: newClientId,
                        name: name,
                    })
                    hasJoinedRef.current = true
                    console.log("👤 Client joined:", newClientId)
                    
                    toast.success("Bağlantı kuruldu", {
                        description: "Uzmanımız yakında sizinle iletişime geçecek",
                    })
                }
            })

            socket.on("disconnect", (reason) => {
                console.log("❌ Client chat disconnected:", reason)
                setIsConnected(false)
                hasJoinedRef.current = false
                
                if (reason !== "io client disconnect") {
                    toast.error("Bağlantı kesildi", {
                        description: "Sunucuya yeniden bağlanılıyor...",
                    })
                }
            })

            // Admin joined the chat
            socket.on("chat:admin-joined", (data: { adminName: string }) => {
                console.log("👔 Admin joined:", data.adminName)
                setAdminName(data.adminName)
                setWaitingForAdmin(false)

                toast.success("Uzman bağlandı", {
                    description: `${data.adminName} sohbete katıldı`,
                })
            })

            // Receive chat history
            socket.on("chat:history", (history: ChatMessage[]) => {
                console.log("📜 Client received chat history:", history.length, "messages")
                const convertedMessages: Message[] = history.map((msg) => ({
                    id: msg.id,
                    text: msg.message,
                    sender: msg.senderType === "admin" ? "professional" : "user",
                    timestamp: new Date(msg.timestamp),
                }))
                setMessages(convertedMessages)
            })

            // Receive chat messages
            socket.on("chat:message", (message: ChatMessage) => {
                // Ignore messages we just sent (optimistic update already added them)
                if (sentMessageIdsRef.current.has(message.id)) {
                    sentMessageIdsRef.current.delete(message.id)
                    return
                }
                
                console.log("💬 Message received:", message.senderType, message.message.substring(0, 20))
                const newMessage: Message = {
                    id: message.id,
                    text: message.message,
                    sender: message.senderType === "admin" ? "professional" : "user",
                    timestamp: new Date(message.timestamp),
                }
                setMessages((prev) => [...prev, newMessage])

                // Show typing indicator briefly before message
                if (message.senderType === "admin") {
                    setIsTyping(false)
                }
            })

            // Admin is typing
            socket.on("chat:admin-typing", () => {
                setIsTyping(true)
                setTimeout(() => setIsTyping(false), 3000)
            })

            // Admin left the chat
            socket.on("chat:admin-left", () => {
                console.log("👋 Admin left notification")
                setWaitingForAdmin(true)
                setAdminName("")
                toast.info("Uzman sohbetten ayrıldı", {
                    description: "Başka bir uzman sizinle iletişime geçecek",
                })
            })

            // Chat ended
            socket.on("chat:ended", () => {
                console.log("🔚 Chat ended notification")
                toast.info("Sohbet sonlandırıldı", {
                    description: "Ekibimiz en kısa sürede sizinle iletişime geçecek",
                })
            })
        }

        setupSocketListeners()
        
        // If already connected, join immediately
        if (socket.connected && !hasJoinedRef.current) {
            socket.emit("client:join", {
                clientId: newClientId,
                name: name,
            })
            hasJoinedRef.current = true
            setIsConnected(true)
            setIsConnecting(false)
        }

        return () => {
            console.log("🧹 Cleaning up client chat listeners")
            // Remove page unload listener
            window.removeEventListener("beforeunload", handleBeforeUnload)
            
            // Remove listeners
            socket.off("connect")
            socket.off("disconnect")
            socket.off("chat:admin-joined")
            socket.off("chat:message")
            socket.off("chat:history")
            socket.off("chat:admin-typing")
            socket.off("chat:admin-left")
            socket.off("chat:ended")
            
            // Notify server that client is leaving
            if (hasJoinedRef.current) {
                socket.emit("client:leave", { clientId: newClientId })
                hasJoinedRef.current = false
            }
        }
    }, [])

    // Auto scroll to bottom when new messages arrive
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    const handleSendMessage = useCallback(() => {
        if (!inputMessage.trim() || !isConnected || !clientId) {
            return
        }

        const messageData: ChatMessage = {
            id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            senderId: clientId,
            senderName: clientName,
            senderType: "client",
            message: inputMessage.trim(),
            timestamp: Date.now(),
        }

        // Mark this message as sent by us
        sentMessageIdsRef.current.add(messageData.id)

        const socket = getSocket()
        socket.emit("chat:send-message", {
            clientId: clientId,
            ...messageData,
        })

        // Add message to local state immediately (optimistic update)
        const newMessage: Message = {
            id: messageData.id,
            text: messageData.message,
            sender: "user",
            timestamp: new Date(messageData.timestamp),
        }

        setMessages((prev) => [...prev, newMessage])
        setInputMessage("")

        // Reset textarea height
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto"
        }
    }, [inputMessage, isConnected, clientId, clientName])

    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSendMessage()
        }
    }, [handleSendMessage])

    const handleTextareaChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputMessage(e.target.value)
        
        // Auto resize textarea
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto'
            textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`
        }
    }, [])

    if (isConnecting) {
        return (
            <div className="flex items-center justify-center py-20">
                <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center">
                        <div className="w-8 h-8 border-4 border-orange-600 border-t-transparent rounded-full animate-spin" />
                    </div>
                    <div>
                        <p className="text-lg font-semibold text-gray-900">Sunucuya Bağlanıyor...</p>
                        <p className="text-sm text-gray-500 mt-2">Lütfen bekleyin</p>
                    </div>
                </div>
            </div>
        )
    }

    if (waitingForAdmin) {
        return (
            <div className="flex items-center justify-center py-20">
                <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center">
                        <div className="w-8 h-8 border-4 border-orange-600 border-t-transparent rounded-full animate-spin" />
                    </div>
                    <div>
                        <p className="text-lg font-semibold text-gray-900">Uzmanımıza Bağlanıyor...</p>
                        <p className="text-sm text-gray-500 mt-2">
                            Sırada {clientName} olarak bekliyorsunuz
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                            İlk müsait uzman size atanacak
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col max-h-[55vh] overflow-hidden">
            {/* Chat Header */}
            <div className="border-b bg-linear-to-r from-orange-50 to-amber-50 p-2 shrink-0">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 border-2 border-orange-600 rounded-full flex items-center justify-center">
                        <span className="text-xl">🧑‍🔧</span>
                    </div>
                    <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">
                            {adminName || "Tadilat Uzmanı"}
                        </h4>
                        <p className="text-xs text-green-600 flex items-center gap-1">
                            <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                            {isConnected ? "Çevrimiçi" : "Bağlantı Kesildi"}
                        </p>
                    </div>
                </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 min-h-40 max-h-70">
                {messages.length === 0 ? (
                    <div className="text-center py-8">
                        <p className="text-gray-500 text-sm">
                            Uzmanınız size mesaj gönderdiğinde burada görünecek
                        </p>
                    </div>
                ) : (
                    messages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex gap-3 ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}
                        >
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                                message.sender === 'user' 
                                    ? 'bg-blue-600' 
                                    : 'bg-orange-600'
                            }`}>
                                {message.sender === 'user' ? (
                                    <User className="h-4 w-4 text-white" />
                                ) : (
                                    <span className="text-white text-sm font-semibold">
                                        {adminName.charAt(0).toUpperCase() || 'A'}
                                    </span>
                                )}
                            </div>
                            <div className={`flex flex-col max-w-[75%] ${
                                message.sender === 'user' ? 'items-end' : 'items-start'
                            }`}>
                                <div className={`rounded-2xl px-4 py-2 ${
                                    message.sender === 'user'
                                        ? 'bg-blue-600 text-white rounded-tr-sm'
                                        : 'bg-white text-gray-900 rounded-tl-sm shadow-sm'
                                }`}>
                                    <p className="text-sm leading-relaxed">{message.text}</p>
                                </div>
                                <span className="text-xs text-gray-400 mt-1">
                                    {formatTime(message.timestamp)}
                                </span>
                            </div>
                        </div>
                    ))
                )}

                {/* Typing Indicator */}
                {isTyping && (
                    <div className="flex gap-3">
                        <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center shrink-0">
                            <span className="text-white text-sm font-semibold">
                                {adminName.charAt(0).toUpperCase() || 'A'}
                            </span>
                        </div>
                        <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                            <div className="flex gap-1">
                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                            </div>
                        </div>
                    </div>
                )}
                
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t bg-white p-2 shrink-0">
                <div className="flex gap-3 items-end">
                    <Textarea
                        ref={textareaRef}
                        value={inputMessage}
                        onChange={handleTextareaChange}
                        onKeyDown={handleKeyDown}
                        placeholder="Mesajınızı yazın..."
                        className="resize-none min-h-11 max-h-[120px]"
                        rows={1}
                    />
                    <Button
                        onClick={handleSendMessage}
                        disabled={!inputMessage.trim()}
                        className="bg-orange-600 hover:bg-orange-700 shrink-0"
                        size="icon"
                    >
                        <Send className="h-4 w-4" />
                    </Button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                    Enter ile gönderin, Shift+Enter ile yeni satır ekleyin
                </p>
            </div>
        </div>
    )
}

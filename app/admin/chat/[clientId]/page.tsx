"use client"

import { useEffect, useState, useRef } from "react"
import { useRouter, useParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Send, Phone, Loader2 } from "lucide-react"
import { connectSocket, getSocket, ChatMessage } from "@/lib/socket"
import { toast } from "sonner"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

/**
 * Admin Chat Page
 * Real-time chat interface between admin and client
 */
export default function AdminChatPage() {
    const router = useRouter()
    const params = useParams()
    const clientId = (params?.clientId as string) || ""

    const [messages, setMessages] = useState<ChatMessage[]>([])
    const [newMessage, setNewMessage] = useState("")
    const [clientName, setClientName] = useState("Müşteri")
    const [isConnected, setIsConnected] = useState(false)
    const [isSending, setIsSending] = useState(false)
    const adminUsernameRef = useRef<string>("")
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const sentMessageIdsRef = useRef<Set<string>>(new Set())
    const hasJoinedChatRef = useRef(false)

    useEffect(() => {
        // Check authentication and get username once
        const isAuthenticated = localStorage.getItem("adminAuth")
        const username = localStorage.getItem("adminUsername") || "Admin"
        adminUsernameRef.current = username

        if (!isAuthenticated) {
            router.push("/admin/login")
            return
        }

        // Connect to socket server
        const socket = connectSocket()

        // Define event handlers
        const onConnect = () => {
            console.log("🔌 Admin chat connected to socket")
            setIsConnected(true)

            // Join the chat room on connect/reconnect
            if (!hasJoinedChatRef.current) {
                socket.emit("admin:join-chat", {
                    clientId,
                    adminId: adminUsernameRef.current,
                })
                hasJoinedChatRef.current = true
                console.log("💬 Admin joined chat:", clientId)
            }
        }

        const onDisconnect = (reason: any) => {
            console.log("❌ Admin chat disconnected:", reason)
            setIsConnected(false)
            hasJoinedChatRef.current = false
        }

        const onClientInfo = (data: { name: string }) => {
            console.log("👤 Client info received:", data.name)
            setClientName(data.name)
        }

        const onMessage = (message: ChatMessage) => {
            // Ignore messages we just sent (optimistic update already added them)
            if (sentMessageIdsRef.current.has(message.id)) {
                sentMessageIdsRef.current.delete(message.id)
                return
            }
            console.log("💬 Message received:", message.senderType, message.message.substring(0, 20))
            setMessages((prev) => [...prev, message])
        }

        const onHistory = (history: ChatMessage[]) => {
            console.log("📜 Chat history received:", history.length, "messages")
            setMessages(history)
        }

        const onClientLeft = () => {
            console.log("👋 Client left notification")
            toast.info("Müşteri sohbetten ayrıldı")
        }

        const onChatEnded = () => {
            console.log("🔚 Chat ended - redirecting to dashboard")
            toast.info("Sohbet sonlandırıldı", {
                description: "Dashboard'a yönlendiriliyorsunuz...",
            })
            // Redirect to dashboard after a short delay
            setTimeout(() => {
                router.push("/admin/dashboard")
            }, 1500)
        }

        // Setup event handlers
        socket.on("connect", onConnect)
        socket.on("disconnect", onDisconnect)
        socket.on("chat:client-info", onClientInfo)
        socket.on("chat:message", onMessage)
        socket.on("chat:history", onHistory)
        socket.on("chat:client-left", onClientLeft)
        socket.on("chat:ended", onChatEnded)

        // If already connected, join immediately
        if (socket.connected) {
            onConnect()
        }

        return () => {
            console.log("🧹 Cleaning up admin chat listeners")
            // Remove listeners (specific handlers only)
            socket.off("connect", onConnect)
            socket.off("disconnect", onDisconnect)
            socket.off("chat:client-info", onClientInfo)
            socket.off("chat:message", onMessage)
            socket.off("chat:history", onHistory)
            socket.off("chat:client-left", onClientLeft)
            socket.off("chat:ended", onChatEnded)

            // Leave chat room
            if (hasJoinedChatRef.current) {
                socket.emit("admin:leave-chat", { clientId })
                hasJoinedChatRef.current = false
            }
        }
    }, [router, clientId])

    // Auto-scroll to bottom when new messages arrive
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!newMessage.trim() || !isConnected) return

        setIsSending(true)

        const messageData: ChatMessage = {
            id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            senderId: adminUsernameRef.current,
            senderName: adminUsernameRef.current,
            senderType: "admin",
            message: newMessage.trim(),
            timestamp: Date.now(),
        }

        // Mark this message as sent by us
        sentMessageIdsRef.current.add(messageData.id)

        const socket = getSocket()
        socket.emit("chat:send-message", {
            clientId,
            ...messageData,
        })

        // Add message to local state immediately (optimistic update)
        setMessages((prev) => [...prev, messageData])
        setNewMessage("")
        setIsSending(false)
    }

    const handleEndChat = () => {
        const socket = getSocket()
        socket.emit("admin:end-chat", { clientId })

        toast.success("Sohbet sonlandırıldı")
        router.push("/admin/dashboard")
    }

    const handleBackToDashboard = () => {
        router.push("/admin/dashboard")
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-orange-50 via-white to-amber-50 p-6">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-4">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={handleBackToDashboard}
                        >
                            <ArrowLeft className="h-4 w-4" />
                        </Button>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">
                                {clientName}
                            </h1>
                            <p className="text-sm text-gray-600">Müşteri ID: {clientId}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Badge variant={isConnected ? "default" : "destructive"}>
                            {isConnected ? "● Aktif" : "○ Bağlantı Kesildi"}
                        </Badge>
                        <Button
                            variant="destructive"
                            onClick={handleEndChat}
                            className="gap-2"
                        >
                            <Phone className="h-4 w-4" />
                            Sohbeti Bitir
                        </Button>
                    </div>
                </div>

                {/* Chat Card */}
                <Card className="h-[calc(100vh-200px)] flex flex-col overflow-hidden">
                    <CardHeader className="border-b shrink-0">
                        <CardTitle>Sohbet</CardTitle>
                        <CardDescription>
                            Müşteriyle gerçek zamanlı iletişim kurun
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-4 min-h-0">
                            {messages.length === 0 ? (
                                <div className="text-center py-12">
                                    <p className="text-gray-500">
                                        Henüz mesaj yok. Sohbete başlamak için bir mesaj gönderin.
                                    </p>
                                </div>
                            ) : (
                                messages.map((message) => (
                                    <div
                                        key={message.id}
                                        className={`flex ${message.senderType === "admin"
                                            ? "justify-end"
                                            : "justify-start"
                                            }`}
                                    >
                                        <div
                                            className={`max-w-[70%] rounded-lg p-4 break-words ${message.senderType === "admin"
                                                ? "bg-orange-600 text-white"
                                                : "bg-gray-100 text-gray-900"
                                                }`}
                                        >
                                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                                                <span className="text-xs font-semibold">
                                                    {message.senderName}
                                                </span>
                                                <span className="text-xs opacity-70">
                                                    {new Date(message.timestamp).toLocaleTimeString("tr-TR", {
                                                        hour: "2-digit",
                                                        minute: "2-digit",
                                                    })}
                                                </span>
                                            </div>
                                            {message.imageUrl ? (
                                                <div className="mt-2">
                                                    <Dialog>
                                                        <DialogTrigger asChild>
                                                            <img
                                                                src={message.imageUrl}
                                                                alt="Gönderilen fotoğraf"
                                                                className="max-w-full max-h-64 rounded-lg object-contain cursor-pointer hover:opacity-90 transition-opacity"
                                                            />
                                                        </DialogTrigger>
                                                        <DialogContent className="max-w-4xl w-full h-auto max-h-[90vh] p-0 overflow-hidden bg-transparent border-none shadow-none flex items-center justify-center">
                                                            <img
                                                                src={message.imageUrl}
                                                                alt="Gönderilen fotoğraf"
                                                                className="w-full h-full object-contain max-h-[90vh]"
                                                            />
                                                        </DialogContent>
                                                    </Dialog>
                                                </div>
                                            ) : (
                                                <p className="text-sm whitespace-pre-wrap break-words">
                                                    {message.message}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ))
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Message Input */}
                        <div className="border-t p-4 shrink-0">
                            <form onSubmit={handleSendMessage} className="flex gap-2">
                                <Input
                                    placeholder="Mesajınızı yazın..."
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    disabled={!isConnected || isSending}
                                    className="flex-1"
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' && !e.shiftKey) {
                                            e.preventDefault()
                                            handleSendMessage(e as any)
                                        }
                                    }}
                                />
                                <Button
                                    type="submit"
                                    disabled={!isConnected || isSending || !newMessage.trim()}
                                    className="bg-orange-600 hover:bg-orange-700 shrink-0"
                                >
                                    {isSending ? (
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                    ) : (
                                        <>
                                            <Send className="h-4 w-4 mr-2" />
                                            Gönder
                                        </>
                                    )}
                                </Button>
                            </form>
                        </div>
                    </CardContent>
                </Card>

                {/* Connection Status */}
                {!isConnected && (
                    <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-center gap-3">
                        <Loader2 className="h-5 w-5 text-yellow-600 animate-spin" />
                        <p className="text-yellow-800">
                            Sunucuya bağlanılıyor... Lütfen bekleyin.
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

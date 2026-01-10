"use client"

import { useEffect, useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, MessageSquare, LogOut, Loader2 } from "lucide-react"
import { connectSocket, getSocket, WaitingClient } from "@/lib/socket"
import { toast } from "sonner"

/**
 * Admin Dashboard Page
 * Displays waiting clients and allows admin to start chat sessions
 */
export default function AdminDashboardPage() {
    const router = useRouter()
    const [waitingClients, setWaitingClients] = useState<WaitingClient[]>([])
    const [isConnected, setIsConnected] = useState(false)
    const adminUsernameRef = useRef<string>("")
    const isRegisteredRef = useRef(false)
    const [displayName] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem("adminUsername") || "Admin"
        }
        return "Admin"
    })

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
            console.log("🔌 Admin dashboard connected to socket")
            setIsConnected(true)
            
            // Register as admin on connect/reconnect
            if (!isRegisteredRef.current) {
                socket.emit("admin:register", { adminId: adminUsernameRef.current })
                isRegisteredRef.current = true
                console.log("🔐 Admin registered:", adminUsernameRef.current)
            }
            
            // Request waiting clients
            socket.emit("admin:get-waiting-clients")
            
            toast.success("Bağlantı kuruldu", {
                description: "Gerçek zamanlı bildirimler aktif",
            })
        }

        const onDisconnect = (reason: any) => {
            console.log("❌ Admin dashboard disconnected:", reason)
            setIsConnected(false)
            isRegisteredRef.current = false
            
            if (reason !== "io client disconnect") {
                toast.error("Bağlantı kesildi", {
                    description: "Sunucuya yeniden bağlanılıyor...",
                })
            }
        }

        const onWaitingClients = (clients: WaitingClient[]) => {
            console.log("📋 Received waiting clients:", clients.length)
            setWaitingClients(clients)
        }

        const onNewClient = (client: WaitingClient) => {
            console.log("👤 New client notification:", client.name)
            toast.info("Yeni müşteri", {
                description: `${client.name} sohbet için bekliyor`,
            })
        }

        // Setup event handlers
        socket.on("connect", onConnect)
        socket.on("disconnect", onDisconnect)
        socket.on("admin:waiting-clients", onWaitingClients)
        socket.on("admin:new-client", onNewClient)
        
        // If already connected, trigger connect handler manually
        if (socket.connected && !isRegisteredRef.current) {
            onConnect()
        }

        return () => {
            console.log("🧹 Cleaning up admin dashboard listeners")
            // Remove listeners (specific handlers only to avoid removing lib/socket.ts state listeners)
            socket.off("connect", onConnect)
            socket.off("disconnect", onDisconnect)
            socket.off("admin:waiting-clients", onWaitingClients)
            socket.off("admin:new-client", onNewClient)
            
            // Mark as unregistered for next mount
            isRegisteredRef.current = false
        }
    }, [router])

    const handleStartChat = (clientId: string) => {
        const socket = getSocket()
        
        // Notify backend that admin is taking this client
        socket.emit("admin:take-client", { clientId, adminId: adminUsernameRef.current })
        
        // Navigate to chat page
        router.push(`/admin/chat/${clientId}`)
    }

    const handleLogout = () => {
        localStorage.removeItem("adminAuth")
        localStorage.removeItem("adminUsername")
        
        const socket = getSocket()
        socket.emit("admin:unregister", { adminId: adminUsernameRef.current })
        socket.disconnect()
        
        toast.success("Çıkış yapıldı")
        router.push("/admin/login")
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-orange-50 via-white to-amber-50 p-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            Yönetim Paneli
                        </h1>
                        <p className="text-gray-600">
                            Hoş geldiniz, <span className="font-semibold">{displayName}</span>
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Badge variant={isConnected ? "default" : "destructive"} className="text-sm">
                            {isConnected ? "● Bağlı" : "○ Bağlantı Kesildi"}
                        </Badge>
                        <Button
                            variant="outline"
                            onClick={handleLogout}
                            className="gap-2"
                        >
                            <LogOut className="h-4 w-4" />
                            Çıkış Yap
                        </Button>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-gray-600">
                                Bekleyen Müşteriler
                            </CardTitle>
                            <Users className="h-5 w-5 text-orange-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-gray-900">
                                {waitingClients.filter(c => c.status === "waiting").length}
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-gray-600">
                                Devam Eden Sohbetler
                            </CardTitle>
                            <MessageSquare className="h-5 w-5 text-green-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-gray-900">
                                {waitingClients.filter(c => c.status === "chatting").length}
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-gray-600">
                                Toplam Müşteri
                            </CardTitle>
                            <Users className="h-5 w-5 text-blue-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-gray-900">
                                {waitingClients.length}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Waiting Clients List */}
                <Card>
                    <CardHeader>
                        <CardTitle>Bekleyen Müşteriler</CardTitle>
                        <CardDescription>
                            Sohbet için bekleyen müşterileri görüntüleyin ve sohbet başlatın
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {waitingClients.length === 0 ? (
                            <div className="text-center py-12">
                                <Users className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                                <p className="text-gray-500 text-lg mb-2">
                                    Bekleyen müşteri yok
                                </p>
                                <p className="text-gray-400 text-sm">
                                    Yeni müşteriler katıldığında burada görünecekler
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {waitingClients.map((client) => (
                                    <div
                                        key={client.id}
                                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-orange-50 transition-colors"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="h-12 w-12 rounded-full bg-linear-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-semibold text-lg">
                                                {client.name.charAt(0).toUpperCase()}
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900">
                                                    {client.name}
                                                </h3>
                                                <p className="text-sm text-gray-500">
                                                    Katıldı:{" "}
                                                    {new Date(client.joinedAt).toLocaleTimeString("tr-TR")}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Badge
                                                variant={client.status === "waiting" ? "secondary" : "default"}
                                            >
                                                {client.status === "waiting" ? "Bekliyor" : "Sohbet Ediyor"}
                                            </Badge>
                                            {client.status === "waiting" && (
                                                <Button
                                                    onClick={() => handleStartChat(client.id)}
                                                    className="bg-orange-600 hover:bg-orange-700"
                                                >
                                                    <MessageSquare className="h-4 w-4 mr-2" />
                                                    Sohbet Başlat
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* Connection Status Footer */}
                {!isConnected && (
                    <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-center gap-3">
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

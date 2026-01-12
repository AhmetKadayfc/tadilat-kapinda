"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"

/**
 * Admin Login Page
 * Simple authentication for admin users to access the dashboard
 */
export default function AdminLoginPage() {
    const router = useRouter()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        // Simple authentication check
        // In production, this should connect to your backend API
        if (username === "admin" && password === "admin123") {
            // Store admin session
            localStorage.setItem("adminAuth", "true")
            localStorage.setItem("adminUsername", "Müşteri Temsilcisi")

            toast.success("Giriş başarılı!", {
                description: "Yönetim paneline yönlendiriliyorsunuz...",
            })

            setTimeout(() => {
                router.push("/admin/dashboard")
            }, 1000)
        } else {
            toast.error("Giriş başarısız!", {
                description: "Kullanıcı adı veya şifre hatalı.",
            })
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-orange-50 via-white to-amber-50 p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-3xl font-bold text-center">
                        Admin Girişi
                    </CardTitle>
                    <CardDescription className="text-center">
                        Yönetim paneline erişim için giriş yapın
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="username">Kullanıcı Adı</Label>
                            <Input
                                id="username"
                                type="text"
                                placeholder="admin"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Şifre</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full bg-orange-600 hover:bg-orange-700"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Giriş yapılıyor...
                                </>
                            ) : (
                                "Giriş Yap"
                            )}
                        </Button>
                        <p className="text-xs text-center text-gray-500 mt-4">
                            Demo: admin / admin123
                        </p>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

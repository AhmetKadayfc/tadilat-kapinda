"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

/**
 * Admin root page - redirects to login
 */
export default function AdminPage() {
    const router = useRouter()

    useEffect(() => {
        // Check if user is already authenticated
        const isAuthenticated = localStorage.getItem("adminAuth")
        
        if (isAuthenticated) {
            router.push("/admin/dashboard")
        } else {
            router.push("/admin/login")
        }
    }, [router])

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-orange-50 via-white to-amber-50">
            <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <div className="w-8 h-8 border-4 border-orange-600 border-t-transparent rounded-full animate-spin" />
                </div>
                <p className="text-gray-600">Yönlendiriliyor...</p>
            </div>
        </div>
    )
}

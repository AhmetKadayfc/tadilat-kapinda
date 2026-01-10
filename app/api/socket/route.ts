import { NextRequest } from "next/server"

export async function GET(req: NextRequest) {
    return new Response(JSON.stringify({ message: "Socket.IO server is running via Next.js server" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    })
}

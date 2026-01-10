import { io, Socket } from "socket.io-client"

// Socket.IO connection configuration
// Use NEXT_PUBLIC_SOCKET_URL env var if available, otherwise default to window.location.origin
const SOCKET_URL = process.env.NEXT_PUBLIC_SOCKET_URL || (typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000')

let socket: Socket | null = null
let isConnecting = false

/**
 * Get or create socket instance
 */
export const getSocket = (): Socket => {
    if (!socket) {
        socket = io(SOCKET_URL, {
            autoConnect: true,
            reconnection: true,
            reconnectionDelay: 1000,
            reconnectionAttempts: 5,
            transports: ['websocket', 'polling'],
        })
        
        socket.on('connect', () => {
            console.log('🔌 Socket connected:', socket?.id)
            isConnecting = false
        })
        
        socket.on('disconnect', (reason) => {
            console.log('❌ Socket disconnected:', reason)
            isConnecting = false
        })
        
        socket.on('connect_error', (error) => {
            console.error('🚨 Socket connection error:', error)
            isConnecting = false
        })
    }
    return socket
}

/**
 * Connect to socket server (returns existing connection if already connected)
 */
export const connectSocket = () => {
    const socketInstance = getSocket()
    
    // Don't reconnect if already connected or connecting
    if (socketInstance.connected || isConnecting) {
        return socketInstance
    }
    
    isConnecting = true
    socketInstance.connect()
    return socketInstance
}

/**
 * Disconnect from socket server
 */
export const disconnectSocket = () => {
    if (socket && socket.connected) {
        socket.disconnect()
    }
}

/**
 * Remove all event listeners from socket
 */
export const removeAllListeners = (events?: string[]) => {
    if (socket) {
        if (events && events.length > 0) {
            events.forEach(event => socket?.off(event))
        } else {
            socket.removeAllListeners()
        }
    }
}

/**
 * Check if socket is connected
 */
export const isSocketConnected = () => {
    return socket?.connected || false
}

/**
 * Socket event types
 */
export type ChatMessage = {
    id: string
    senderId: string
    senderName: string
    senderType: "client" | "admin"
    message: string
    timestamp: number
}

export type WaitingClient = {
    id: string
    name: string
    joinedAt: number
    status: "waiting" | "chatting"
}

/**
 * Emit events
 */
export const emitEvent = (event: string, data: unknown) => {
    const socketInstance = getSocket()
    if (socketInstance.connected) {
        socketInstance.emit(event, data)
    }
}

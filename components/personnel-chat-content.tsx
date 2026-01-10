"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Send, User } from "lucide-react"

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
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            text: "Merhaba! Ben tadilat uzmanınız Ahmet. Size nasıl yardımcı olabilirim?",
            sender: "professional",
            timestamp: new Date()
        }
    ])
    const [inputMessage, setInputMessage] = useState("")
    const [isConnecting, setIsConnecting] = useState(true)
    const [isTyping, setIsTyping] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const textareaRef = useRef<HTMLTextAreaElement>(null)

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" })
    }

    // Mesaj sayısını parent component'e bildir
    useEffect(() => {
        onMessagesChange?.(messages.length)
    }, [messages.length, onMessagesChange])

    // Simulate connection
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsConnecting(false)
        }, 1500)
        return () => clearTimeout(timer)
    }, [])

    // Auto scroll to bottom when new messages arrive
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    const simulateProfessionalResponse = useCallback((userMessage: string) => {
        setIsTyping(true)
        
        // Simulate thinking time
        setTimeout(() => {
            setIsTyping(false)
            
            const responses: Record<string, string> = {
                default: "Anlıyorum. Daha detaylı bilgi verebilir misiniz? Tadilat yapılacak alanın ölçüleri ve mevcut durumu hakkında bilgi alabilir miyim?",
                banyo: "Banyo tadilatı için randevu oluşturalım. Hangi gün size uygun? Ekibimiz ücretsiz keşif için gelebilir.",
                mutfak: "Mutfak yenileme projesi için size yardımcı olabiliriz. Hangi tarihte evde olacaksınız?",
                boya: "Boya işleri için metrekare bilgisi ve tercih ettiğiniz renk tonu hakkında bilgi verebilir misiniz?",
                fiyat: "Fiyat teklifi için önce ücretsiz keşif yapmamız gerekiyor. Size uygun bir randevu günü belirleyelim mi?"
            }

            let responseText = responses.default
            const lowerMessage = userMessage.toLowerCase()

            if (lowerMessage.includes("banyo")) responseText = responses.banyo
            else if (lowerMessage.includes("mutfak")) responseText = responses.mutfak
            else if (lowerMessage.includes("boya") || lowerMessage.includes("boyama")) responseText = responses.boya
            else if (lowerMessage.includes("fiyat") || lowerMessage.includes("ücret")) responseText = responses.fiyat

            const newMessage: Message = {
                id: Date.now().toString(),
                text: responseText,
                sender: "professional",
                timestamp: new Date()
            }

            setMessages(prev => [...prev, newMessage])
        }, 1000 + Math.random() * 1500)
    }, [])

    const handleSendMessage = useCallback(() => {
        if (!inputMessage.trim()) {
            return
        }

        const newMessage: Message = {
            id: Date.now().toString(),
            text: inputMessage,
            sender: "user",
            timestamp: new Date()
        }

        setMessages(prev => [...prev, newMessage])
        setInputMessage("")
        
        // Simulate professional response
        simulateProfessionalResponse(inputMessage)
        
        // Reset textarea height
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto'
        }
    }, [inputMessage, simulateProfessionalResponse])

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
                        <p className="text-lg font-semibold text-gray-900">Uzmanımıza Bağlanıyor...</p>
                        <p className="text-sm text-gray-500 mt-2">Lütfen bekleyin</p>
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
                        <h4 className="font-semibold text-gray-900">Tadilat Uzmanı - Ahmet</h4>
                        <p className="text-xs text-green-600 flex items-center gap-1">
                            <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                            Çevrimiçi
                        </p>
                    </div>
                </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 min-h-40 max-h-70">
                {messages.map((message) => (
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
                                <span className="text-white text-lg">A</span>
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
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                    <div className="flex gap-3">
                        <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center shrink-0">
                            <span className="text-white text-lg">A</span>
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

"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Video, VideoOff, Mic, MicOff, PhoneOff } from "lucide-react"

interface VideoCallContentProps {
    remainingTime: number
    onEndCall?: () => void
}

export function VideoCallContent({ remainingTime, onEndCall }: VideoCallContentProps) {
    const [isConnecting, setIsConnecting] = useState(true)
    const [isConnected, setIsConnected] = useState(false)
    const [isCameraOn, setIsCameraOn] = useState(true)
    const [isMicOn, setIsMicOn] = useState(true)
    const [callDuration, setCallDuration] = useState(0)
    const videoRef = useRef<HTMLVideoElement>(null)
    const streamRef = useRef<MediaStream | null>(null)

    const formatCallDuration = (seconds: number) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
    }

    const formatRemainingTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60)
        return `${mins} dakika`
    }

    // Simulate connection
    useEffect(() => {
        const connectTimer = setTimeout(() => {
            setIsConnecting(false)
            setIsConnected(true)
        }, 2500)

        return () => clearTimeout(connectTimer)
    }, [])

    // Get user camera stream
    useEffect(() => {
        if (!isConnected || !isCameraOn) return

        let mounted = true

        const getUserCamera = async () => {
            try {
                const mediaStream = await navigator.mediaDevices.getUserMedia({
                    video: { width: 1280, height: 720 },
                    audio: false
                })

                if (mounted && videoRef.current) {
                    streamRef.current = mediaStream
                    videoRef.current.srcObject = mediaStream
                }
            } catch (error) {
                console.error("Kamera erişimi reddedildi:", error)
            }
        }

        getUserCamera()

        return () => {
            mounted = false
        }
    }, [isConnected, isCameraOn])

    // Stop stream when camera is turned off or component unmounts
    useEffect(() => {
        const currentVideo = videoRef.current
        
        return () => {
            if (streamRef.current) {
                streamRef.current.getTracks().forEach(track => track.stop())
                streamRef.current = null
                if (currentVideo) {
                    currentVideo.srcObject = null
                }
            }
        }
    }, [isCameraOn])

    // Call duration counter
    useEffect(() => {
        if (!isConnected) return

        const interval = setInterval(() => {
            setCallDuration(prev => prev + 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [isConnected])

    const toggleCamera = useCallback(() => {
        setIsCameraOn(prev => !prev)
    }, [])

    const toggleMic = useCallback(() => {
        setIsMicOn(prev => !prev)
    }, [])

    if (isConnecting) {
        return (
            <div className="flex items-center justify-center py-20">
                <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center">
                        <div className="w-8 h-8 border-4 border-orange-600 border-t-transparent rounded-full animate-spin" />
                    </div>
                    <div>
                        <p className="text-lg font-semibold text-gray-900">Uzmana Bağlanıyor...</p>
                        <p className="text-sm text-gray-500 mt-2">Lütfen bekleyin, görüntülü görüşme başlatılıyor</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col h-[70vh] pb-4">
            {/* Call Header */}
            <div className="border-b bg-linear-to-r from-orange-50 to-amber-50 p-4 shrink-0">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 border-2 border-orange-600 rounded-full flex items-center justify-center">
                            <span className="text-xl">🧑‍🔧</span>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900">Tadilat Uzmanı - Ahmet</h4>
                            <p className="text-xs text-green-600 flex items-center gap-1">
                                <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
                                Aramada • {formatCallDuration(callDuration)}
                            </p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-xs text-gray-500">Kalan süre</p>
                        <p className="text-sm font-semibold text-orange-600">{formatRemainingTime(remainingTime)}</p>
                    </div>
                </div>
            </div>

            {/* Video Area */}
            <div className="flex-1 relative bg-gray-900 overflow-hidden group">
                {/* Professional's Video (Main) */}
                <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-gray-800 to-gray-900">
                    <div className="text-center">
                        <div className="w-32 h-32 mx-auto bg-orange-600 rounded-full flex items-center justify-center mb-4 shadow-2xl">
                            <span className="text-6xl text-white">A</span>
                        </div>
                        <p className="text-white text-lg font-medium">Tadilat Uzmanı - Ahmet</p>
                        {/* <p className="text-gray-400 text-sm mt-1">Sizi dinliyor...</p> */}
                    </div>
                </div>

                {/* User's Video (Picture-in-Picture) */}
                <div className="absolute top-4 right-4 w-48 h-36 bg-gray-800 rounded-lg overflow-hidden border-2 border-white shadow-lg">
                    {isCameraOn ? (
                        <video
                            ref={videoRef}
                            autoPlay
                            playsInline
                            muted
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-900">
                            <div className="text-center">
                                <VideoOff className="w-10 h-10 mx-auto text-gray-500 mb-2" />
                                <p className="text-gray-400 text-xs">Kamera kapalı</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Connection Quality Indicator */}
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-2 rounded-lg">
                    <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                            <div className="w-1 h-3 bg-green-500 rounded"></div>
                            <div className="w-1 h-4 bg-green-500 rounded"></div>
                            <div className="w-1 h-5 bg-green-500 rounded"></div>
                            <div className="w-1 h-6 bg-green-500 rounded"></div>
                        </div>
                        <span className="text-white text-xs font-medium">Mükemmel Bağlantı</span>
                    </div>
                </div>

                {/* Call Controls - Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center justify-center gap-4 mb-3">
                        {/* Microphone Toggle */}
                        <Button
                            variant={isMicOn ? "outline" : "destructive"}
                            size="lg"
                            onClick={toggleMic}
                            className={`w-14 h-14 rounded-full shadow-lg transition-all ${
                                isMicOn 
                                    ? "bg-white/90 border-2 border-white/50 hover:border-orange-600 hover:bg-orange-50" 
                                    : "bg-red-600 hover:bg-red-700"
                            }`}
                            title={isMicOn ? "Mikrofonu kapat" : "Mikrofonu aç"}
                        >
                            {isMicOn ? (
                                <Mic className="h-5 w-5" />
                            ) : (
                                <MicOff className="h-5 w-5" />
                            )}
                        </Button>

                        {/* Camera Toggle */}
                        <Button
                            variant={isCameraOn ? "outline" : "destructive"}
                            size="lg"
                            onClick={toggleCamera}
                            className={`w-14 h-14 rounded-full shadow-lg transition-all ${
                                isCameraOn 
                                    ? "bg-white/90 border-2 border-white/50 hover:border-orange-600 hover:bg-orange-50" 
                                    : "bg-red-600 hover:bg-red-700"
                            }`}
                            title={isCameraOn ? "Kamerayı kapat" : "Kamerayı aç"}
                        >
                            {isCameraOn ? (
                                <Video className="h-5 w-5" />
                            ) : (
                                <VideoOff className="h-5 w-5" />
                            )}
                        </Button>

                        {/* End Call Button */}
                        <Button
                            variant="destructive"
                            size="lg"
                            onClick={onEndCall}
                            className="w-14 h-14 rounded-full bg-red-600 hover:bg-red-700 shadow-lg"
                            title="Aramayı sonlandır"
                        >
                            <PhoneOff className="h-5 w-5" />
                        </Button>
                    </div>
                    
                    <p className="text-center text-xs text-white drop-shadow-lg">
                        Tadilat ihtiyacınızı uzmanımıza anlatın. Size en uygun çözümü bulacağız.
                    </p>
                </div>
            </div>
        </div>
    )
}

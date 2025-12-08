"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { useState, useRef } from "react"

export function VideoSection() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(true)
    const videoRef = useRef<HTMLVideoElement>(null)

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted
            setIsMuted(!isMuted)
        }
    }

    return (
        <section id="nasil-calisir" className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Nasıl Kullanılır?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Cihan Esen platformumuzu nasıl kullanacağınızı anlatıyor.
                            <br />
                            30-40 saniyede her şeyi öğrenin!
                        </p>
                    </div>

                    {/* Video Card */}
                    <Card className="overflow-hidden shadow-2xl border-2 border-gray-200 p-0">
                        <CardContent className="p-0 relative group">
                            {/* Video Player */}
                            <div className="relative aspect-video bg-gradient-to-br from-emerald-900 to-blue-900">
                                {/* Thumbnail/Placeholder */}
                                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-emerald-600 to-blue-600">
                                    <div className="text-center text-white">
                                        <div className="mb-4">
                                            <div className="inline-flex h-32 w-32 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                                                <Play className="h-16 w-16 ml-2" />
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2">Cihan Esen</h3>
                                        <p className="text-white/90">Tadilat Kapında Kullanım Rehberi</p>
                                        <p className="text-sm text-white/70 mt-2">30-40 saniye</p>
                                    </div>
                                </div>

                                {/* Video element (hidden, placeholder) */}
                                <video
                                    ref={videoRef}
                                    className="hidden w-full h-full object-cover"
                                    muted={isMuted}
                                    loop
                                >
                                    {/* Video source buraya eklenecek */}
                                </video>

                                {/* Play/Pause Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Button
                                        size="lg"
                                        onClick={togglePlay}
                                        className="h-20 w-20 rounded-full bg-white/90 hover:bg-white text-emerald-600 shadow-2xl"
                                    >
                                        {isPlaying ? (
                                            <Pause className="h-10 w-10" />
                                        ) : (
                                            <Play className="h-10 w-10 ml-1" />
                                        )}
                                    </Button>
                                </div>

                                {/* Controls */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="flex items-center justify-between text-white">
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={togglePlay}
                                            className="text-white hover:bg-white/20"
                                        >
                                            {isPlaying ? (
                                                <Pause className="h-5 w-5" />
                                            ) : (
                                                <Play className="h-5 w-5" />
                                            )}
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={toggleMute}
                                            className="text-white hover:bg-white/20"
                                        >
                                            {isMuted ? (
                                                <VolumeX className="h-5 w-5" />
                                            ) : (
                                                <Volume2 className="h-5 w-5" />
                                            )}
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* Video Info */}
                            {/* <div className="p-6 bg-white">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white font-bold text-xl">
                                            CE
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-lg text-gray-900 mb-1">
                                            Cihan Esen - Kurucu
                                        </h4>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            Bu videoda, Tadilat Kapında platformunu nasıl kullanacağınızı,
                                            nasıl fiyat teklifi alacağınızı ve hizmetlerimizden nasıl
                                            faydalanacağınızı adım adım anlatıyorum.
                                        </p>
                                    </div>
                                </div>
                            </div> */}
                        </CardContent>
                    </Card>

                    {/* Key Points */}
                    <div className="grid md:grid-cols-3 gap-6 mt-12">
                        {[
                            {
                                number: "1",
                                title: "Fotoğraf Yükle",
                                description: "Tadilat yapılacak alanın fotoğraflarını yükleyin",
                            },
                            {
                                number: "2",
                                title: "Teklif Al",
                                description: "30 dakika içinde uzmanlardan fiyat teklifleri alın",
                            },
                            {
                                number: "3",
                                title: "İşlemi Başlat",
                                description: "En uygun teklifi seçin ve işe başlayın",
                            },
                        ].map((step, index) => (
                            <div
                                key={index}
                                className="text-center p-6 rounded-lg bg-white border-2 border-gray-100 hover:border-emerald-200 transition-colors"
                            >
                                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 text-white font-bold text-2xl mb-4">
                                    {step.number}
                                </div>
                                <h4 className="font-bold text-lg text-gray-900 mb-2">
                                    {step.title}
                                </h4>
                                <p className="text-gray-600 text-sm">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

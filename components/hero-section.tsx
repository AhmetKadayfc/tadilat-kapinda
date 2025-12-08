"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Camera, Phone, Video, MessageCircle } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function HeroSection() {
    const [chatOpen, setChatOpen] = useState(false)

    const actionBoxes = [
        {
            icon: Camera,
            title: "Fotoğraf / Video Yükle",
            description: "Tadilat alanınızın fotoğrafını yükleyin",
            color: "from-blue-500 to-blue-600",
        },
        {
            icon: Phone,
            title: "Personel Evime Gelsin",
            description: "Uzman ekibimiz evinize gelsin",
            color: "from-emerald-500 to-emerald-600",
        },
        {
            icon: Video,
            title: "Görüntülü Görüşme Başlat",
            description: "Hemen online görüşme yapın",
            color: "from-purple-500 to-purple-600",
        },
    ]

    const handleActionClick = (title: string) => {
        setChatOpen(true)
        // Burada canlı mesaj paneli açılacak
        console.log(`${title} tıklandı - Canlı mesaj paneli açılıyor...`)
    }

    return (
        <>
            <div id="hakkimizda"></div>
            <div id="surdurulebilirlik"></div>
            <section id="hizmetlerimiz" className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-emerald-50 via-white to-blue-50">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-5" />

                <div className="container mx-auto px-4 py-16 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        {/* Hero Text */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="text-center mb-12"
                        >
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
                            >
                                <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                                    Bir fotoğrafla başla,
                                </span>
                                <br />
                                <span className="text-emerald-800">bir telefonla bitir.</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="text-xl md:text-2xl text-gray-600 font-medium mb-4"
                            >
                                30 dakikada gerçek uzmanlardan fiyat al.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                className="text-lg text-gray-500 max-w-2xl mx-auto"
                            >
                                Tadilat ihtiyacınız için profesyonel çözümler, hızlı fiyat teklifi ve güvenilir hizmet.
                            </motion.p>
                        </motion.div>

                        {/* Action Boxes */}
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            {actionBoxes.map((box, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ delay: index * 0.15, duration: 0.5 }}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    >
                                        <Card
                                            className="group cursor-pointer border-2 border-transparent hover:border-emerald-200 hover:shadow-2xl transition-all duration-300"
                                            onClick={() => handleActionClick(box.title)}
                                        >
                                            <CardContent className="p-8 text-center">
                                                <motion.div
                                                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                                                    transition={{ duration: 0.5 }}
                                                    className={`inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${box.color} mb-6`}
                                                >
                                                    <box.icon className="h-10 w-10 text-white" />
                                                </motion.div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                                    {box.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                                    {box.description}
                                                </p>
                                                <Button
                                                    variant="outline"
                                                    className="w-full group-hover:bg-emerald-600 group-hover:text-white transition-colors"
                                                >
                                                    Hemen Başla
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Chat Panel Indicator */}
                <AnimatePresence>
                    {chatOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 50, scale: 0.8 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            className="fixed bottom-4 right-4 z-50"
                        >
                            <div className="bg-white rounded-lg shadow-2xl p-4 max-w-sm border-2 border-emerald-500">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <MessageCircle className="h-5 w-5 text-emerald-600" />
                                        <span className="font-semibold text-gray-900">Canlı Destek</span>
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.1, rotate: 90 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => setChatOpen(false)}
                                        className="text-gray-500 hover:text-gray-700"
                                    >
                                        ×
                                    </motion.button>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Mesajınızı yazın, size yardımcı olalım...
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>
        </>
    )
}

"use client"

import { Target, Eye, Users, Award, Heart, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function HakkimizdaPage() {
    return (
        <div className="bg-gradient-to-b from-orange-50 to-white">
            <div className="container mx-auto px-4 py-12 max-w-5xl">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center my-20"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                    >
                        Hakkımızda
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        Türkiye'nin en güvenilir ev tadilat platformu olarak, kalite ve müşteri memnuniyetini
                        ön planda tutuyoruz.
                    </motion.p>
                </motion.div>

                {/* Values Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {[
                        { icon: Users, title: "5000+", subtitle: "Mutlu Müşteri", color: "from-orange-500 to-orange-600" },
                        { icon: Award, title: "500+", subtitle: "Profesyonel Usta", color: "from-amber-500 to-orange-500" },
                        { icon: Heart, title: "%98", subtitle: "Memnuniyet Oranı", color: "from-red-500 to-orange-600" },
                    ].map((stat, index) => (
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
                                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
                            >
                                <div className={`inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color} mb-4`}>
                                    <stat.icon className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.title}</h3>
                                <p className="text-gray-600">{stat.subtitle}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Mission Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <motion.div
                            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                            className="p-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl"
                        >
                            <Target className="text-white" size={32} />
                        </motion.div>
                        <h2 className="text-3xl font-bold text-gray-900">
                            Misyonumuz
                        </h2>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Tadilat Cebimde olarak misyonumuz, ev sahiplerinin tadilat süreçlerinde yaşadığı
                            zorlukları ortadan kaldırmak ve herkes için erişilebilir, güvenilir ve kaliteli
                            tadilat hizmetleri sunmaktır.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { icon: Sparkles, title: "Kalite Odaklı", desc: "Her projede en yüksek kalite standartlarını koruyarak, müşterilerimize mükemmel sonuçlar sunmayı hedefliyoruz." },
                                { icon: Heart, title: "Müşteri Öncelikli", desc: "Müşteri memnuniyeti bizim için her şeyden önemlidir. Her adımda şeffaf iletişim ve güven esastır." }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-orange-50 rounded-xl p-6 border border-orange-100"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <item.icon className="text-orange-600" size={24} />
                                        <h3 className="font-semibold text-gray-900 text-lg">{item.title}</h3>
                                    </div>
                                    <p className="text-gray-700">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Vision Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-lg p-8 md:p-12 text-white"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <motion.div
                            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                            className="p-4 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl"
                        >
                            <Eye className="text-white" size={32} />
                        </motion.div>
                        <h2 className="text-3xl font-bold">
                            Vizyonumuz
                        </h2>
                    </div>

                    <div className="prose prose-lg prose-invert max-w-none">
                        <p className="text-gray-300 leading-relaxed mb-6">
                            Türkiye'nin lider dijital tadilat platformu olarak, teknoloji ve inovasyonla
                            sektörü dönüştürmeyi hedefliyoruz.
                        </p>

                        <div className="space-y-4">
                            {[
                                "2025 yılına kadar Türkiye'nin her ilinde hizmet sunmak",
                                "Yapay zeka destekli fiyatlandırma ve proje yönetimi",
                                "Sürdürülebilir ve çevre dostu tadilat çözümleri",
                                "Sektörde şeffaflık ve güven standartlarını belirlemek"
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                                    className="flex items-start gap-3"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.2 }}
                                        className="h-6 w-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5"
                                    >
                                        <span className="text-white text-sm font-bold">{index + 1}</span>
                                    </motion.div>
                                    <p className="text-gray-300">{item}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

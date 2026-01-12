"use client"

import { Video, Camera, Shield, FileText, CheckCircle, AlertCircle, Lock, Eye } from "lucide-react"
import { motion } from "framer-motion"

export default function GoProBilgilendirmePage() {
    return (
        <div className="bg-gradient-to-b from-slate-50 to-white">
            <div className="container mx-auto px-4 py-12 max-w-5xl">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center my-20"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-slate-700 to-slate-900 mb-6"
                    >
                        <Video className="h-10 w-10 text-white" />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                    >
                        GoPro ile Görüntü Kaydı ve İçerik Kullanımı
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        Tadilat süreçlerimizde şeffaflık ve kalite güvencesi için uygulanan
                        görüntü kayıt sistemimiz hakkında bilgilendirme.
                    </motion.p>
                </motion.div>

                {/* Info Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {[
                        { icon: Camera, title: "Profesyonel Kayıt", subtitle: "GoPro Teknolojisi", color: "from-slate-600 to-slate-800" },
                        { icon: Shield, title: "Güvenli Saklama", subtitle: "Şifreli Depolama", color: "from-blue-600 to-blue-800" },
                        { icon: Lock, title: "Gizlilik Güvencesi", subtitle: "KVKK Uyumlu", color: "from-green-600 to-green-800" },
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
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{stat.title}</h3>
                                <p className="text-gray-600">{stat.subtitle}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Neden Görüntü Kaydı Section */}
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
                            className="p-4 bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl"
                        >
                            <Camera className="text-white" size={32} />
                        </motion.div>
                        <h2 className="text-3xl font-bold text-gray-900">
                            Neden Görüntü Kaydı Yapıyoruz?
                        </h2>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Tadilat Cebimde olarak, müşterilerimize en yüksek kalitede hizmet sunmak
                            ve şeffaflığı sağlamak amacıyla tadilat süreçlerinde GoPro kameralar ile
                            görüntü kaydı yapıyoruz. Bu uygulama hem sizin hem de ekibimizin güvencesi
                            için tasarlanmıştır.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                {
                                    icon: CheckCircle,
                                    title: "Kalite Kontrolü",
                                    desc: "Yapılan işlerin standartlara uygunluğunu kontrol etmek ve kalite güvencesi sağlamak için kayıtları değerlendiriyoruz."
                                },
                                {
                                    icon: Shield,
                                    title: "İş Güvenliği",
                                    desc: "Çalışma alanlarında iş güvenliği protokollerinin uygulandığını takip ediyoruz."
                                },
                                {
                                    icon: FileText,
                                    title: "Dokümantasyon",
                                    desc: "Projenin tüm aşamalarını kayıt altına alarak, size detaylı bir proje dosyası sunuyoruz."
                                },
                                {
                                    icon: Eye,
                                    title: "Şeffaflık",
                                    desc: "Talep ettiğinizde, tadilat sürecinin tüm aşamalarını görüntüleyebilirsiniz."
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-slate-50 rounded-xl p-6 border border-slate-200"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <item.icon className="text-slate-700" size={24} />
                                        <h3 className="font-semibold text-gray-900 text-lg">{item.title}</h3>
                                    </div>
                                    <p className="text-gray-700">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* İçerik Kullanımı Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-lg p-8 md:p-12 text-white mb-8"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <motion.div
                            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                            className="p-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl"
                        >
                            <Video className="text-white" size={32} />
                        </motion.div>
                        <h2 className="text-3xl font-bold">
                            İçerik Kullanımı Hakkında
                        </h2>
                    </div>

                    <div className="prose prose-lg prose-invert max-w-none">
                        <p className="text-gray-300 leading-relaxed mb-6">
                            Kaydedilen görüntüler aşağıdaki amaçlarla kullanılabilir. Tüm kullanımlar
                            için önceden yazılı onayınız alınacaktır.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Proje dokümantasyonu ve kalite kontrolü için iç kullanım",
                                "Müşteri talebi üzerine proje görüntülerinin paylaşılması",
                                "Onayınız ile tanıtım ve pazarlama materyallerinde kullanım",
                                "Eğitim amaçlı iç kaynak olarak kullanım (kimlik bilgileri gizlenerek)"
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

                {/* Gizlilik ve Güvenlik Section */}
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
                            className="p-4 bg-gradient-to-br from-green-600 to-green-700 rounded-xl"
                        >
                            <Lock className="text-white" size={32} />
                        </motion.div>
                        <h2 className="text-3xl font-bold text-gray-900">
                            Gizlilik ve Güvenlik
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                icon: Shield,
                                title: "KVKK Uyumluluğu",
                                desc: "Tüm görüntü kayıtları 6698 sayılı Kişisel Verilerin Korunması Kanunu'na uygun olarak işlenmektedir."
                            },
                            {
                                icon: Lock,
                                title: "Şifreli Depolama",
                                desc: "Kayıtlar şifreli sunucularda güvenli bir şekilde saklanmakta ve yetkisiz erişime karşı korunmaktadır."
                            },
                            {
                                icon: FileText,
                                title: "Saklama Süresi",
                                desc: "Görüntüler proje tamamlandıktan sonra belirli bir süre saklanır ve ardından güvenli bir şekilde silinir."
                            },
                            {
                                icon: AlertCircle,
                                title: "Onay Hakkı",
                                desc: "Görüntü kaydının yapılmasına veya kullanılmasına istediğiniz zaman itiraz edebilirsiniz."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                                whileHover={{ scale: 1.03 }}
                                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100"
                            >
                                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-green-700 mb-4">
                                    <item.icon className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="font-semibold text-gray-900 text-lg mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* İletişim CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl shadow-lg p-8 md:p-12 text-center text-white"
                >
                    <h2 className="text-2xl font-bold mb-4">Sorularınız mı var?</h2>
                    <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
                        Görüntü kaydı ve içerik kullanımı hakkında daha fazla bilgi almak veya
                        sorularınızı iletmek için bizimle iletişime geçebilirsiniz.
                    </p>
                    <motion.a
                        href="#iletisim"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-block bg-white text-orange-600 font-semibold px-8 py-3 rounded-lg hover:bg-orange-50 transition-colors"
                    >
                        İletişime Geçin
                    </motion.a>
                </motion.div>
            </div>
        </div>
    )
}

"use client"

import Link from "next/link"
import { Building2, Star, CheckCircle, Quote } from "lucide-react"
import { motion } from "framer-motion"

const references = [
    {
        name: "Dekare Altyapı Görüntüleme Ltd. Şti.",
        description: "Altyapı görüntüleme ve harita sistemleri alanında lider firma. 15 yıllık tecrübesiyle sektörün öncü kuruluşlarından biri.",
        projects: 12,
        feedback: "Tadilat Cebimde ile çalışmak büyük bir kolaylık sağladı. Ofis tadilatımız hızlı ve profesyonel şekilde tamamlandı.",
        color: "from-blue-500 to-blue-600"
    },
    {
        name: "İHSA Mobilya",
        description: "Özel tasarım mobilya üretimi ve iç mekan düzenlemesi alanında uzman firma.",
        projects: 8,
        feedback: "Showroom alanlarımızın tadilatında gösterdikleri özen ve kalite için teşekkür ederiz. Sonuçtan çok memnun kaldık.",
        color: "from-amber-500 to-orange-500"
    },
    {
        name: "Mekan 360 Mimarlık",
        description: "Yenilikçi mimari tasarımlar ve mekan çözümleri sunan butik mimarlık ofisi.",
        projects: 15,
        feedback: "Projelerimizin uygulama aşamasında güvenilir bir iş ortağı bulduk. İşçilikleri ve zamanlama konusunda çok başarılılar.",
        color: "from-purple-500 to-purple-600"
    },
    {
        name: "Zeplin İnşaat Ltd. Şti.",
        description: "Konut ve ticari projeler geliştiren, kaliteyi ön planda tutan inşaat şirketi.",
        projects: 20,
        feedback: "Tamamlanan dairelerimizin iç tadilatlarında kaliteli hizmet aldık. Kesinlikle iş birliğimize devam edeceğiz.",
        color: "from-green-500 to-green-600"
    }
]

export default function ReferanslarimizPage() {
    return (
        <div className="bg-gradient-to-b from-orange-50 to-white">
            <div className="container mx-auto px-4 py-12 max-w-6xl">
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
                        Referanslarımız
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        Güvenilir iş ortaklarımız ve başarıyla tamamladığımız kurumsal projeler.
                        Sektörün önde gelen firmaları bize güveniyor.
                    </motion.p>
                </motion.div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {[
                        { value: "55+", label: "Kurumsal Proje" },
                        { value: "30+", label: "İş Ortağı" },
                        { value: "%100", label: "Zamanında Teslimat" },
                        { value: "%98", label: "Memnuniyet" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="bg-white rounded-xl shadow-lg p-6 text-center"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
                                    className="text-3xl font-bold text-orange-600 mb-1"
                                >
                                    {stat.value}
                                </motion.div>
                                <div className="text-sm text-gray-600">{stat.label}</div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* References Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {references.map((reference, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.02, y: -5 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                            >
                                {/* Header */}
                                <div className={`bg-gradient-to-br ${reference.color} p-6`}>
                                    <div className="flex items-center gap-4">
                                        <motion.div
                                            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                                            transition={{ duration: 0.5 }}
                                            className="h-14 w-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center"
                                        >
                                            <Building2 className="h-8 w-8 text-white" />
                                        </motion.div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">
                                                {reference.name}
                                            </h3>
                                            <div className="flex items-center gap-1 mt-1">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <motion.div
                                                        key={star}
                                                        initial={{ opacity: 0, scale: 0 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: 0.4 + star * 0.05 }}
                                                    >
                                                        <Star className="h-4 w-4 fill-white text-white" />
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <p className="text-gray-600 mb-4">
                                        {reference.description}
                                    </p>

                                    {/* Feedback Quote */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4, duration: 0.5 }}
                                        className="bg-gray-50 rounded-xl p-4 mb-4 relative"
                                    >
                                        <Quote className="absolute top-2 left-2 h-6 w-6 text-orange-200" />
                                        <p className="text-gray-700 italic pl-6 text-sm">
                                            &quot;{reference.feedback}&quot;
                                        </p>
                                    </motion.div>

                                    {/* Project Count */}
                                    <div className="flex items-center justify-between pt-4 border-t">
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <CheckCircle className="h-5 w-5 text-green-500" />
                                            <span className="text-sm">
                                                <strong className="text-gray-900">{reference.projects}</strong> tamamlanmış proje
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Trusted By Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12"
                >
                    <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
                        Neden Kurumsal Firmalar Bizi Tercih Ediyor?
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Profesyonel Ekip",
                                desc: "Deneyimli ve uzman kadromuzla her projeye aynı özeni gösteriyoruz."
                            },
                            {
                                title: "Zamanında Teslimat",
                                desc: "Kurumsal projelerinizi belirlenen sürede teslim ediyoruz."
                            },
                            {
                                title: "Kalite Garantisi",
                                desc: "Tüm işlerimiz için kalite garantisi sunuyoruz."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
                                className="text-center"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 360 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                    className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4"
                                >
                                    <CheckCircle className="h-6 w-6 text-orange-600" />
                                </motion.div>
                                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-center text-white"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-3xl font-bold mb-4"
                    >
                        Kurumsal Projeleriniz İçin Bizimle Çalışın
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="text-gray-300 mb-8 max-w-xl mx-auto"
                    >
                        Ofisiniz, mağazanız veya ticari alanınız için profesyonel tadilat çözümleri sunuyoruz.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            href="#iletisim"
                            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all"
                        >
                            Teklif Alın
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

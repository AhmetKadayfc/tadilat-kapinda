"use client"

import { Leaf, Recycle, Droplets, Sun, Wind, TreePine, Home, Zap } from "lucide-react"
import { motion } from "framer-motion"

export default function SurdurulebilirlikPage() {
    return (
        <div className="bg-gradient-to-b from-green-50 to-white">
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
                        className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 mb-6"
                    >
                        <Leaf className="h-10 w-10 text-white" />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                    >
                        Sürdürülebilirlik
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        Geleceğe daha yeşil bir dünya bırakmak için çevre dostu tadilat çözümleri sunuyoruz.
                    </motion.p>
                </motion.div>

                {/* Stats Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {[
                        { icon: Recycle, title: "%85", subtitle: "Geri Dönüştürülmüş Malzeme", color: "from-green-500 to-emerald-600" },
                        { icon: Sun, title: "%40", subtitle: "Enerji Tasarrufu", color: "from-yellow-500 to-orange-500" },
                        { icon: Droplets, title: "%30", subtitle: "Su Tasarrufu", color: "from-blue-500 to-cyan-600" },
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

                {/* Sürdürülebilirlik Yaklaşımımız Section */}
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
                            className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl"
                        >
                            <Leaf className="text-white" size={32} />
                        </motion.div>
                        <h2 className="text-3xl font-bold text-gray-900">
                            Sürdürülebilirlik Yaklaşımımız
                        </h2>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Tadilat Cebimde olarak, çevre dostu uygulamalar ve sürdürülebilir malzemeler kullanarak
                            hem müşterilerimizin hem de gezegenimizin geleceğine yatırım yapıyoruz. Her projede
                            çevresel etkimizi en aza indirmeyi hedefliyoruz.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                {
                                    icon: Recycle,
                                    title: "Geri Dönüşüm ve Atık Yönetimi",
                                    desc: "Tadilat atıklarını minimize ediyor, geri dönüştürülebilir malzemeleri ayrıştırarak çevreye olan etkimizi azaltıyoruz."
                                },
                                {
                                    icon: Zap,
                                    title: "Enerji Verimliliği",
                                    desc: "Enerji verimli sistemler ve yalıtım çözümleri ile müşterilerimizin enerji tüketimini düşürmeye yardımcı oluyoruz."
                                },
                                {
                                    icon: TreePine,
                                    title: "Çevre Dostu Malzemeler",
                                    desc: "FSC sertifikalı ahşap, düşük VOC boyalar ve geri dönüştürülmüş içerikli malzemeler tercih ediyoruz."
                                },
                                {
                                    icon: Droplets,
                                    title: "Su Tasarruflu Çözümler",
                                    desc: "Su tasarruflu armatürler ve sistemler kurarak doğal kaynakların korunmasına katkıda bulunuyoruz."
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-green-50 rounded-xl p-6 border border-green-100"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <item.icon className="text-green-600" size={24} />
                                        <h3 className="font-semibold text-gray-900 text-lg">{item.title}</h3>
                                    </div>
                                    <p className="text-gray-700">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Our Commitment Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-green-800 to-emerald-900 rounded-2xl shadow-lg p-8 md:p-12 text-white mb-8"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <motion.div
                            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                            className="p-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl"
                        >
                            <Home className="text-white" size={32} />
                        </motion.div>
                        <h2 className="text-3xl font-bold">
                            Yeşil Gelecek Taahhüdümüz
                        </h2>
                    </div>

                    <div className="prose prose-lg prose-invert max-w-none">
                        <p className="text-gray-300 leading-relaxed mb-6">
                            Daha yaşanabilir bir dünya için somut adımlar atıyor, sürdürülebilirliği
                            iş modelimizin merkezine koyuyoruz.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Her projede karbon ayak izimizi ölçüyor ve azaltmaya çalışıyoruz",
                                "Yerel ve çevre dostu tedarikçilerle çalışıyoruz",
                                "Müşterilerimize sürdürülebilir seçenekler hakkında danışmanlık veriyoruz",
                                "2030 yılına kadar karbon-nötr operasyonlar hedefliyoruz"
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
                                        className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5"
                                    >
                                        <span className="text-white text-sm font-bold">{index + 1}</span>
                                    </motion.div>
                                    <p className="text-gray-300">{item}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Eco Tips Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <motion.div
                            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                            className="p-4 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl"
                        >
                            <Wind className="text-white" size={32} />
                        </motion.div>
                        <h2 className="text-3xl font-bold text-gray-900">
                            Sürdürülebilir Ev İpuçları
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: Sun,
                                title: "LED Aydınlatma",
                                desc: "LED lambalar %80 daha az enerji tüketir ve 25 kat daha uzun ömürlüdür."
                            },
                            {
                                icon: Droplets,
                                title: "Su Tasarrufu",
                                desc: "Tasarruflu musluk başlıkları ile su tüketiminizi yarıya indirebilirsiniz."
                            },
                            {
                                icon: TreePine,
                                title: "Doğal Malzemeler",
                                desc: "Doğal ve geri dönüştürülmüş malzemeler hem sağlıklı hem çevre dostudur."
                            }
                        ].map((tip, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                                whileHover={{ scale: 1.03 }}
                                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100"
                            >
                                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 mb-4">
                                    <tip.icon className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="font-semibold text-gray-900 text-lg mb-2">{tip.title}</h3>
                                <p className="text-gray-600 text-sm">{tip.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

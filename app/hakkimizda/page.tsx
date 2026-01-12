import { Target, Eye, Users, Award, Heart, Sparkles } from "lucide-react"

export default function HakkimizdaPage() {
    return (
        <div className="bg-gradient-to-b from-orange-50 to-white">
            <div className="container mx-auto px-4 py-12 max-w-5xl">
                {/* Hero Section */}
                <div className="text-center my-20">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Hakkımızda
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Türkiye'nin en güvenilir ev tadilat platformu olarak, kalite ve müşteri memnuniyetini
                        ön planda tutuyoruz.
                    </p>
                </div>

                {/* Values Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {[
                        { icon: Users, title: "5000+", subtitle: "Mutlu Müşteri", color: "from-orange-500 to-orange-600" },
                        { icon: Award, title: "500+", subtitle: "Profesyonel Usta", color: "from-amber-500 to-orange-500" },
                        { icon: Heart, title: "%98", subtitle: "Memnuniyet Oranı", color: "from-red-500 to-orange-600" },
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
                        >
                            <div className={`inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color} mb-4`}>
                                <stat.icon className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.title}</h3>
                            <p className="text-gray-600">{stat.subtitle}</p>
                        </div>
                    ))}
                </div>

                {/* Mission Section */}
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl">
                            <Target className="text-white" size={32} />
                        </div>
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
                            <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
                                <div className="flex items-center gap-3 mb-3">
                                    <Sparkles className="text-orange-600" size={24} />
                                    <h3 className="font-semibold text-gray-900 text-lg">Kalite Odaklı</h3>
                                </div>
                                <p className="text-gray-700">
                                    Her projede en yüksek kalite standartlarını koruyarak, müşterilerimize
                                    mükemmel sonuçlar sunmayı hedefliyoruz.
                                </p>
                            </div>
                            <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
                                <div className="flex items-center gap-3 mb-3">
                                    <Heart className="text-orange-600" size={24} />
                                    <h3 className="font-semibold text-gray-900 text-lg">Müşteri Öncelikli</h3>
                                </div>
                                <p className="text-gray-700">
                                    Müşteri memnuniyeti bizim için her şeyden önemlidir. Her adımda
                                    şeffaf iletişim ve güven esastır.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Vision Section */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-lg p-8 md:p-12 text-white">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-4 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl">
                            <Eye className="text-white" size={32} />
                        </div>
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
                                <div key={index} className="flex items-start gap-3">
                                    <div className="h-6 w-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-white text-sm font-bold">{index + 1}</span>
                                    </div>
                                    <p className="text-gray-300">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

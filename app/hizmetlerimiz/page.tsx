import Link from "next/link"
import { Wrench, ChefHat, Bath, Paintbrush, Zap, Hammer, CheckCircle } from "lucide-react"

const services = [
    {
        icon: Wrench,
        title: "Genel Tadilat Hizmetleri",
        description: "Evinizin tüm tadilat ihtiyaçlarını karşılayan kapsamlı çözümler sunuyoruz.",
        features: ["Komple ev tadilatı", "Daire yenileme", "Zemin kaplama", "Duvar işlemleri"],
        color: "from-orange-500 to-orange-600"
    },
    {
        icon: ChefHat,
        title: "Mutfak Yenileme",
        description: "Modern ve fonksiyonel mutfaklar için profesyonel tasarım ve uygulama hizmetleri.",
        features: ["Dolap yenileme", "Tezgah değişimi", "Ankastre kurulum", "Aydınlatma"],
        color: "from-amber-500 to-orange-500"
    },
    {
        icon: Bath,
        title: "Banyo Yenileme",
        description: "Banyonuzu konforlu ve şık bir yaşam alanına dönüştürüyoruz.",
        features: ["Seramik döşeme", "Vitrifiye değişimi", "Duşakabin montajı", "Su tesisatı"],
        color: "from-blue-500 to-blue-600"
    },
    {
        icon: Paintbrush,
        title: "Boya ve Badana",
        description: "Profesyonel boyama teknikleriyle duvarlarınıza yeni bir hayat veriyoruz.",
        features: ["İç cephe boya", "Dış cephe boya", "Dekoratif boya", "Ahşap boyama"],
        color: "from-purple-500 to-purple-600"
    },
    {
        icon: Zap,
        title: "Elektrik ve Tesisat İşleri",
        description: "Güvenli ve verimli elektrik ve su tesisatı hizmetleri sunuyoruz.",
        features: ["Elektrik tesisatı", "Su tesisatı", "Kombi bakımı", "Panel değişimi"],
        color: "from-yellow-500 to-orange-500"
    },
    {
        icon: Hammer,
        title: "Küçük Onarım ve Tamiratlar",
        description: "Evinizin küçük sorunlarını hızlı ve etkili şekilde çözüyoruz.",
        features: ["Kapı tamiratı", "Mobilya montajı", "Perde takma", "Raf montajı"],
        color: "from-green-500 to-green-600"
    }
]

export default function HizmetlerimizPage() {
    return (
        <div className="bg-gradient-to-b from-orange-50 to-white">
            <div className="container mx-auto px-4 py-12 max-w-6xl">
                {/* Hero Section */}
                <div className="text-center my-20">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Hizmetlerimiz
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Evinizin her köşesi için profesyonel tadilat çözümleri.
                        Deneyimli ekibimizle hayallerinizdeki eve kavuşun.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className={`bg-gradient-to-br ${service.color} p-6`}>
                                <service.icon className="h-12 w-12 text-white" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {service.description}
                                </p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-700">
                                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Process Section */}
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                        Nasıl Çalışıyoruz?
                    </h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "1", title: "İletişim", desc: "Bize ulaşın ve ihtiyacınızı anlatın" },
                            { step: "2", title: "Keşif", desc: "Ücretsiz keşif ve değerlendirme" },
                            { step: "3", title: "Teklif", desc: "Detaylı fiyat teklifi alın" },
                            { step: "4", title: "Uygulama", desc: "Profesyonel uygulama ve teslimat" }
                        ].map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-white">{item.step}</span>
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">
                        Projeniz İçin Teklif Alın
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                        Ücretsiz keşif ve fiyat teklifi için hemen bizimle iletişime geçin.
                        30 dakika içinde size dönüş yapalım.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all"
                        >
                            Hemen Başla
                        </Link>
                        <Link
                            href="#iletisim"
                            className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20"
                        >
                            İletişime Geç
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

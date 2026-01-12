import Link from "next/link"
import { ArrowLeft, Cookie } from "lucide-react"

export default function CerezPolitikasiPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-8 transition-colors"
                >
                    <ArrowLeft size={20} />
                    Ana Sayfaya Dön
                </Link>

                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-3 bg-amber-100 rounded-lg">
                            <Cookie className="text-amber-600" size={32} />
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900">
                            Çerez Politikası
                        </h1>
                    </div>
                    <p className="text-gray-500 mb-8">Son Güncelleme: 12 Ocak 2026</p>

                    <div className="prose prose-lg max-w-none">
                        <section className="mb-8">
                            <p className="text-gray-700 leading-relaxed">
                                Tadilat Cebimde ("Şirket", "biz") olarak, web sitemizde çerez ve benzeri teknolojiler
                                kullanmaktayız. Bu politika, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK")
                                kapsamında çerez kullanımımız hakkında sizi bilgilendirmek amacıyla hazırlanmıştır.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Çerez Kullanım Amaçlarımız</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Web sitemizde çerezleri aşağıdaki amaçlarla kullanmaktayız:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Web sitesinin işlevselliğini sağlamak ve güvenliğini korumak</li>
                                <li>Oturum yönetimi ve kullanıcı kimlik doğrulaması</li>
                                <li>Tercihlerinizi ve ayarlarınızı hatırlamak</li>
                                <li>Site performansını analiz etmek ve iyileştirmek</li>
                                <li>Size özelleştirilmiş içerik ve reklamlar sunmak</li>
                                <li>Pazarlama faaliyetlerimizi optimize etmek</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Kullandığımız Çerez Kategorileri</h2>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">2.1. Zorunlu Çerezler</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Web sitesinin temel işlevlerini yerine getirmek için zorunludur. Bu çerezler devre dışı
                                bırakılamaz. Oturum yönetimi, form güvenliği ve yük dengeleme için kullanılır.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">2.2. Analitik Çerezler</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Ziyaretçi davranışlarını anonim olarak analiz etmek için kullanılır. Google Analytics
                                ve benzeri araçlar aracılığıyla site performansını ölçmemize yardımcı olur.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">2.3. İşlevsel Çerezler</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Dil tercihi, konum ve arayüz ayarlarınızı hatırlamak için kullanılır.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">2.4. Pazarlama Çerezleri</h3>
                            <p className="text-gray-700 leading-relaxed">
                                İlgi alanlarınıza uygun reklamlar sunmak amacıyla kullanılır. Reklam ağları ve sosyal
                                medya platformları tarafından yerleştirilebilir.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Üçüncü Taraf Çerezleri</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Aşağıdaki üçüncü taraf hizmet sağlayıcılarının çerezleri web sitemizde kullanılmaktadır:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Google Analytics (analitik)</li>
                                <li>Google Ads (pazarlama)</li>
                                <li>Facebook/Meta Pixel (pazarlama)</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mt-4">
                                Bu hizmet sağlayıcıların kendi gizlilik politikaları geçerlidir.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Çerez Tercihleriniz ve Haklarınız</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                KVKK kapsamında aşağıdaki haklara sahipsiniz:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Zorunlu olmayan çerezleri reddetme hakkı</li>
                                <li>Verilen onayı geri çekme hakkı</li>
                                <li>Çerez verilerinize erişim ve silme talep etme hakkı</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mt-4">
                                Çerez tercihlerinizi tarayıcı ayarlarınızdan yönetebilirsiniz. Zorunlu olmayan çerezleri
                                devre dışı bırakmanız halinde bazı site özelliklerinin çalışmayabileceğini belirtiriz.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Saklama Süreleri</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Oturum çerezleri tarayıcı kapatıldığında silinir. Kalıcı çerezler türüne göre
                                1 ila 24 ay arasında saklanır.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Politika Değişiklikleri</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Bu politikayı güncelleme hakkımız saklıdır. Değişiklikler bu sayfada yayınlanacaktır.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. İletişim</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Çerez kullanımımız hakkında sorularınız için:
                            </p>
                            <div className="p-6 bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-xl border border-amber-200">
                                <div className="space-y-2 text-gray-700">
                                    <p><strong>E-posta:</strong> info@tadilatcebimde.com</p>
                                    <p><strong>Telefon:</strong> +90 (212) 123 45 67</p>
                                </div>
                            </div>
                        </section>

                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <div className="flex gap-4 flex-wrap">
                                <Link
                                    href="/kvkk"
                                    className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
                                >
                                    KVKK Politikası →
                                </Link>
                                <Link
                                    href="/gizlilik"
                                    className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
                                >
                                    Gizlilik Politikası →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

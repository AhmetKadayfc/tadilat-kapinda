import Link from "next/link"
import { ArrowLeft, Shield, Lock, Eye, Database } from "lucide-react"

export default function GizlilikPage() {
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
                        <div className="p-3 bg-emerald-100 rounded-lg">
                            <Shield className="text-emerald-600" size={32} />
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900">
                            Gizlilik Politikası
                        </h1>
                    </div>
                    <p className="text-gray-500 mb-8">Son Güncelleme: 8 Aralık 2025</p>

                    <div className="prose prose-lg max-w-none">
                        <section className="mb-8">
                            <p className="text-gray-700 leading-relaxed">
                                Tadilat Cebimde olarak gizliliğinize önem veriyor ve kişisel verilerinizin korunması konusunda
                                azami hassasiyet gösteriyoruz. Bu Gizlilik Politikası, web sitemizi ziyaret ettiğinizde ve
                                hizmetlerimizi kullandığınızda toplanan bilgilerin nasıl kullanıldığını açıklamaktadır.
                            </p>
                        </section>

                        <section className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <Database className="text-emerald-600" size={24} />
                                <h2 className="text-2xl font-semibold text-gray-900 m-0">1. Topladığımız Bilgiler</h2>
                            </div>

                            <div className="ml-9">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">1.1. Doğrudan Sağladığınız Bilgiler</h3>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    Hizmetlerimizi kullanırken bizimle paylaştığınız bilgiler:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Ad, soyad ve iletişim bilgileri (e-posta, telefon)</li>
                                    <li>Adres bilgileri</li>
                                    <li>Talep ettiğiniz tadilat hizmetlerine dair detaylar</li>
                                    <li>Ödeme ve fatura bilgileri</li>
                                    <li>Müşteri destek görüşmeleri ve yazışmalar</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">1.2. Otomatik Olarak Toplanan Bilgiler</h3>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    Web sitemizi kullanırken otomatik olarak toplanan bilgiler:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>IP adresi ve konum bilgileri</li>
                                    <li>Tarayıcı türü ve işletim sistemi</li>
                                    <li>Erişim tarihleri ve saatleri</li>
                                    <li>Ziyaret edilen sayfalar</li>
                                    <li>Çerezler ve benzeri teknolojiler aracılığıyla toplanan veriler</li>
                                </ul>
                            </div>
                        </section>

                        <section className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <Eye className="text-emerald-600" size={24} />
                                <h2 className="text-2xl font-semibold text-gray-900 m-0">2. Bilgilerinizi Nasıl Kullanıyoruz</h2>
                            </div>

                            <div className="ml-9">
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Topladığımız bilgileri şu amaçlarla kullanıyoruz:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Tadilat hizmetlerini sunmak ve yönetmek</li>
                                    <li>Müşteri desteği sağlamak ve taleplerinize yanıt vermek</li>
                                    <li>Hizmet kalitemizi geliştirmek ve kişiselleştirmek</li>
                                    <li>Ödeme işlemlerini gerçekleştirmek</li>
                                    <li>Size özel teklifler ve güncellemeler göndermek (onayınız dahilinde)</li>
                                    <li>Yasal yükümlülüklerimizi yerine getirmek</li>
                                    <li>Dolandırıcılığı önlemek ve güvenlik sağlamak</li>
                                    <li>Web sitesi kullanımını analiz etmek ve iyileştirmek</li>
                                </ul>
                            </div>
                        </section>

                        <section className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <Lock className="text-emerald-600" size={24} />
                                <h2 className="text-2xl font-semibold text-gray-900 m-0">3. Bilgi Güvenliği</h2>
                            </div>

                            <div className="ml-9">
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Kişisel bilgilerinizin güvenliğini sağlamak için teknik ve idari önlemler alıyoruz:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>SSL şifreleme ile veri aktarımı</li>
                                    <li>Güvenli sunucularda veri depolama</li>
                                    <li>Erişim kontrolü ve yetkilendirme sistemleri</li>
                                    <li>Düzenli güvenlik denetimleri</li>
                                    <li>Personel eğitimi ve gizlilik protokolleri</li>
                                </ul>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Bilgilerin Paylaşımı</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Kişisel bilgilerinizi aşağıdaki durumlar dışında üçüncü kişilerle paylaşmıyoruz:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li><strong>Hizmet Sağlayıcılar:</strong> Ödeme işlemleri, lojistik ve teknolojik altyapı sağlayıcıları</li>
                                <li><strong>İş Ortakları:</strong> Tadilat hizmetlerini sunmak için anlaşmalı ustalar ve tedarikçiler</li>
                                <li><strong>Yasal Zorunluluklar:</strong> Kanuni yükümlülüklerimiz veya resmi talep durumunda</li>
                                <li><strong>Onayınız:</strong> Açık rızanızı aldığımız diğer durumlar</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Çerezler (Cookies)</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Web sitemiz, kullanıcı deneyimini geliştirmek için çerezler kullanmaktadır. Çerezler şu amaçlarla kullanılır:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Oturum yönetimi ve tercihlerinizi hatırlama</li>
                                <li>Web sitesi trafiğini ve kullanım kalıplarını analiz etme</li>
                                <li>Kişiselleştirilmiş içerik sunma</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mt-4">
                                Tarayıcı ayarlarınızdan çerezleri reddedebilir veya silebilirsiniz.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Veri Saklama Süresi</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Kişisel verilerinizi, toplama amacının gerektirdiği süre boyunca ve yasal yükümlülüklerimiz
                                çerçevesinde saklıyoruz. Artık gerekli olmayan veriler güvenli bir şekilde silinir veya anonim hale getirilir.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Haklarınız</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Kişisel verilerinizle ilgili olarak aşağıdaki haklara sahipsiniz:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Kişisel verilerinize erişim ve kopyasını alma</li>
                                <li>Yanlış veya eksik bilgilerin düzeltilmesini isteme</li>
                                <li>Belirli koşullarda verilerinizin silinmesini talep etme</li>
                                <li>Veri işleme faaliyetlerine itiraz etme</li>
                                <li>Pazarlama iletişimlerinden çıkma</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Üçüncü Taraf Bağlantılar</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Web sitemiz üçüncü taraf web sitelerine bağlantılar içerebilir. Bu sitelerin gizlilik
                                uygulamalarından sorumlu değiliz. Başka siteleri ziyaret ederken gizlilik politikalarını
                                incelemenizi öneririz.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Değişiklikler</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Önemli değişiklikler olduğunda
                                sizi bilgilendireceğiz. Güncel versiyonu düzenli olarak kontrol etmenizi öneririz.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. İletişim</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Gizlilik politikamız veya kişisel verilerinizle ilgili sorularınız için bizimle iletişime geçebilirsiniz:
                            </p>
                            <div className="p-6 bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-xl border border-emerald-200">
                                <div className="space-y-2 text-gray-700">
                                    <p><strong>E-posta:</strong> info@tadilatcebimde.com</p>
                                    <p><strong>Telefon:</strong> +90 (212) XXX XX XX</p>
                                    <p><strong>Adres:</strong> Tadilat Cebimde, [Şirket Adresi], İstanbul, Türkiye</p>
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
                                    href="/kullanim-kosullari"
                                    className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
                                >
                                    Kullanım Koşulları →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

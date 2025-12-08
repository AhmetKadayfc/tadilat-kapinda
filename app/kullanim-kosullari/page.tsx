import Link from "next/link"
import { ArrowLeft, FileText, AlertCircle, CheckCircle } from "lucide-react"

export default function KullanimKosullariPage() {
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
                            <FileText className="text-emerald-600" size={32} />
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900">
                            Kullanım Koşulları
                        </h1>
                    </div>
                    <p className="text-gray-500 mb-8">Son Güncelleme: 8 Aralık 2025</p>

                    <div className="mb-8 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                        <div className="flex items-start gap-3">
                            <AlertCircle className="text-blue-600 mt-0.5 flex-shrink-0" size={20} />
                            <p className="text-blue-800 text-sm leading-relaxed">
                                <strong>Önemli:</strong> Bu web sitesini kullanarak, aşağıdaki kullanım koşullarını kabul etmiş sayılırsınız.
                                Koşulları kabul etmiyorsanız, lütfen siteyi kullanmayınız.
                            </p>
                        </div>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Genel Koşullar</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Bu kullanım koşulları, Tadilat Kapında web sitesi ve sunduğumuz hizmetler için geçerlidir.
                                Web sitemizi ziyaret ederek veya hizmetlerimizi kullanarak, bu koşullara uymayı kabul edersiniz.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Hizmetlerimiz</h2>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">2.1. Hizmet Kapsamı</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Tadilat Kapında, ev tadilat hizmetleri konusunda aracılık platformudur. Sunduğumuz hizmetler:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Tadilat taleplerinizi değerlendirme ve uygun ustalarla eşleştirme</li>
                                <li>Fiyat tekliflerinin alınması ve karşılaştırılması</li>
                                <li>Proje yönetimi ve takibi</li>
                                <li>Müşteri destek hizmetleri</li>
                                <li>Kalite kontrolü ve garanti yönetimi</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">2.2. Hizmet Sınırlamaları</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Tadilat Kapında, hizmet sağlayıcılar ile müşteriler arasında bir platform görevi görmektedir.
                                Fiili tadilat işleri, anlaşmalı ustalar ve firmalar tarafından gerçekleştirilmektedir.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Kullanıcı Yükümlülükleri</h2>

                            <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200 mb-6">
                                <div className="flex items-start gap-3 mb-4">
                                    <CheckCircle className="text-emerald-600 mt-0.5 flex-shrink-0" size={20} />
                                    <h3 className="text-lg font-semibold text-gray-800 m-0">Yapılması Gerekenler</h3>
                                </div>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Doğru ve güncel bilgi sağlamak</li>
                                    <li>Hesap bilgilerinizi güvende tutmak</li>
                                    <li>Yasal ve etik kurallara uymak</li>
                                    <li>Anlaşmalı ustalara saygılı davranmak</li>
                                    <li>Ödeme taahhütlerinizi yerine getirmek</li>
                                </ul>
                            </div>

                            <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                                <div className="flex items-start gap-3 mb-4">
                                    <AlertCircle className="text-red-600 mt-0.5 flex-shrink-0" size={20} />
                                    <h3 className="text-lg font-semibold text-gray-800 m-0">Yasaklanan Davranışlar</h3>
                                </div>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Sahte veya yanıltıcı bilgi vermek</li>
                                    <li>Platform üzerinden yasadışı faaliyetlerde bulunmak</li>
                                    <li>Başkalarının hesaplarını kullanmak</li>
                                    <li>Platformu kötüye kullanmak veya manipüle etmek</li>
                                    <li>Telif hakkı ihlali veya diğer fikri mülkiyet haklarını ihlal etmek</li>
                                    <li>Virüs, zararlı yazılım veya benzer teknolojileri yaymak</li>
                                </ul>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Ücretlendirme ve Ödeme</h2>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">4.1. Fiyatlandırma</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Tadilat hizmetlerinin fiyatları, iş kapsamına ve seçilen hizmet sağlayıcıya göre değişmektedir.
                                Tüm fiyatlar KDV dahil olarak belirtilmektedir.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">4.2. Ödeme Koşulları</h3>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Ödemeler güvenli ödeme yöntemleri ile yapılır</li>
                                <li>Teklif onaylandıktan sonra avans ödemesi talep edilebilir</li>
                                <li>Kalan ödeme, iş tamamlandıktan ve onaylandıktan sonra yapılır</li>
                                <li>Fatura ve fiş bilgileri elektronik ortamda saklanır</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">4.3. İptal ve İade</h3>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                İptal ve iade koşulları, projenin aşamasına göre değişmektedir:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>İşe başlanmadan önce iptal: Tam iade</li>
                                <li>İş başladıktan sonra iptal: Yapılan işler için ücretlendirme</li>
                                <li>Hatalı veya kusurlu iş: Düzeltme veya iade hakkı</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Garanti ve Sorumluluk</h2>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">5.1. Garanti Kapsamı</h3>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                Tadilat işlerimiz için garanti sunuyoruz:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>İşçilik garantisi: 2 yıl</li>
                                <li>Malzeme garantisi: Üretici garantisi geçerlidir</li>
                                <li>Garanti kapsamındaki kusurlar ücretsiz giderilir</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">5.2. Sorumluluk Sınırlamaları</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Tadilat Kapında, platform hizmetleri için sorumluluk kabul eder. Ancak, üçüncü taraf
                                hizmet sağlayıcıların eylemleri, doğal afetler veya kullanıcı kaynaklı hatalar için
                                sorumluluğumuz sınırlıdır.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Fikri Mülkiyet Hakları</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Web sitemizdeki tüm içerik, tasarım, logo, metin, grafik ve diğer materyaller
                                Tadilat Kapında'nın mülkiyetindedir ve telif hakkı yasaları ile korunmaktadır.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                İçerikleri, yazılı izin almadan kopyalayamaz, çoğaltamaz veya ticari amaçla kullanamazsınız.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Gizlilik</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Kişisel verilerinizin işlenmesi ve korunması hakkında detaylı bilgi için
                                <Link href="/gizlilik" className="text-emerald-600 hover:text-emerald-700 font-medium mx-1">
                                    Gizlilik Politikamızı
                                </Link>
                                ve
                                <Link href="/kvkk" className="text-emerald-600 hover:text-emerald-700 font-medium mx-1">
                                    KVKK Politikamızı
                                </Link>
                                inceleyiniz.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Hesap Askıya Alma ve Sonlandırma</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Aşağıdaki durumlarda hesabınızı askıya alabilir veya sonlandırabiliriz:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Kullanım koşullarının ihlali</li>
                                <li>Sahte veya yanıltıcı bilgi kullanımı</li>
                                <li>Ödeme yükümlülüklerinin yerine getirilmemesi</li>
                                <li>Yasadışı faaliyetler</li>
                                <li>Diğer kullanıcılara zarar verici davranışlar</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Değişiklikler</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Bu kullanım koşullarını dilediğimiz zaman güncelleme hakkını saklı tutarız.
                                Önemli değişiklikler olduğunda, web sitesinde duyuru yaparak veya e-posta göndererek
                                sizi bilgilendireceğiz. Güncellemelerden sonra siteyi kullanmaya devam etmeniz,
                                yeni koşulları kabul ettiğiniz anlamına gelir.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Uyuşmazlık Çözümü</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Bu kullanım koşullarından kaynaklanan uyuşmazlıklarda:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>İlk olarak müşteri hizmetlerimiz ile iletişime geçiniz</li>
                                <li>Alternatif uyuşmazlık çözüm yöntemlerini (arabuluculuk) değerlendirebiliriz</li>
                                <li>Çözülemeyen uyuşmazlıklarda İstanbul Mahkemeleri ve İcra Daireleri yetkilidir</li>
                                <li>Türkiye Cumhuriyeti yasaları uygulanır</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Mücbir Sebepler</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Doğal afetler, savaş, terör, grev, hükümet kararları, elektrik kesintisi, internet
                                altyapı sorunları gibi mücbir sebeplerden kaynaklanan gecikmeler veya aksaklıklar
                                için sorumluluk kabul etmiyoruz.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. İletişim</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Kullanım koşulları hakkında sorularınız için bizimle iletişime geçebilirsiniz:
                            </p>
                            <div className="p-6 bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-xl border border-emerald-200">
                                <div className="space-y-2 text-gray-700">
                                    <p><strong>Şirket:</strong> Tadilat Kapında</p>
                                    <p><strong>E-posta:</strong> info@tadilatkapinda.com</p>
                                    <p><strong>Telefon:</strong> +90 (212) XXX XX XX</p>
                                    <p><strong>Adres:</strong> [Şirket Adresi], İstanbul, Türkiye</p>
                                    <p><strong>Çalışma Saatleri:</strong> Hafta içi 09:00 - 18:00</p>
                                </div>
                            </div>
                        </section>

                        <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
                            <p className="text-sm text-gray-600 mb-4">
                                <strong>Son Güncelleme:</strong> 8 Aralık 2025<br />
                                <strong>Yürürlük Tarihi:</strong> 8 Aralık 2025
                            </p>
                            <p className="text-sm text-gray-700">
                                Bu kullanım koşullarını kabul ederek, Tadilat Kapında hizmetlerini kullanmaya başlayabilirsiniz.
                                Güvenli ve kaliteli hizmet için teşekkür ederiz.
                            </p>
                        </div>

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

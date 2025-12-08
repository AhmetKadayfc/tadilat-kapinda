import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function KVKKPage() {
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
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        Kişisel Verilerin Korunması (KVKK)
                    </h1>
                    <p className="text-gray-500 mb-8">Son Güncelleme: 8 Aralık 2025</p>

                    <div className="prose prose-lg max-w-none">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Veri Sorumlusu</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Tadilat Kapında olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında veri sorumlusu sıfatıyla,
                                kişisel verilerinizi aşağıda açıklanan kapsamda işlemekteyiz.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. İşlenen Kişisel Veriler</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Hizmetlerimizi sunabilmek amacıyla aşağıdaki kişisel verilerinizi işlemekteyiz:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li><strong>Kimlik Bilgileri:</strong> Ad, soyad, T.C. kimlik numarası</li>
                                <li><strong>İletişim Bilgileri:</strong> Telefon numarası, e-posta adresi, adres</li>
                                <li><strong>Müşteri İşlem Bilgileri:</strong> Talep edilen tadilat hizmetleri, fiyat teklifleri, sözleşme bilgileri</li>
                                <li><strong>Finansal Bilgiler:</strong> Ödeme bilgileri, fatura bilgileri</li>
                                <li><strong>Görsel ve İşitsel Kayıtlar:</strong> Tadilat öncesi/sonrası fotoğraflar</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Kişisel Verilerin İşlenme Amaçları</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Tadilat hizmetlerinin sunulması ve yönetilmesi</li>
                                <li>Müşteri talep ve şikayetlerinin değerlendirilmesi</li>
                                <li>Sözleşmesel yükümlülüklerin yerine getirilmesi</li>
                                <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                                <li>İletişim faaliyetlerinin yürütülmesi</li>
                                <li>Hizmet kalitesinin artırılması</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Kişisel Verilerin Aktarılması</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Kişisel verileriniz, yukarıda belirtilen amaçların gerçekleştirilmesi doğrultusunda,
                                iş ortaklarımıza, tedarikçilerimize, yasal yükümlülüklerimiz çerçevesinde resmi kurumlara ve
                                KVKK'nın öngördüğü şartlar dahilinde üçüncü kişilere aktarılabilmektedir.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Kişisel Veri Sahibinin Hakları</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                KVKK'nın 11. maddesi uyarınca, kişisel veri sahipleri olarak aşağıdaki haklara sahipsiniz:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                                <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
                                <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                                <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme</li>
                                <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
                                <li>KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme</li>
                                <li>Kişisel verilerin otomatik sistemler ile analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
                                <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. İletişim</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Kişisel verileriniz ile ilgili taleplerinizi, KVKK kapsamında haklarınızı kullanmak için
                                <strong> info@tadilatkapinda.com</strong> e-posta adresinden veya aşağıdaki adrese yazılı olarak
                                başvurabilirsiniz.
                            </p>
                            <div className="mt-4 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                                <p className="text-gray-700">
                                    <strong>Adres:</strong> Tadilat Kapında<br />
                                    [Şirket Adresi]<br />
                                    İstanbul, Türkiye
                                </p>
                            </div>
                        </section>

                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <div className="flex gap-4 flex-wrap">
                                <Link
                                    href="/gizlilik"
                                    className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
                                >
                                    Gizlilik Politikası →
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

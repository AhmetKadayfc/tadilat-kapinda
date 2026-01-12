"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const faqs = [
    {
        question: "Nasıl fiyat teklifi alabilirim?",
        answer: "Fiyat teklifi almak çok kolay! Ana sayfamızdan fotoğraf/video yükleyebilir, görüntülü görüşme başlatabilir veya ekibimizden birinin evinize gelmesini talep edebilirsiniz. 30 dakika içinde size detaylı bir fiyat teklifi sunuyoruz."
    },
    {
        question: "Tadilat sürecinde evde kalmam gerekiyor mu?",
        answer: "Hayır, sürekli evde olmanıza gerek yok. Başlangıçta bir görüşme yaparak detayları netleştiriyoruz ve günlük ilerleme raporlarını sizinle paylaşıyoruz. Kritik karar noktalarında sizinle iletişime geçiyoruz."
    },
    {
        question: "Ödeme nasıl yapılır?",
        answer: "Esnek ödeme seçenekleri sunuyoruz. Proje başında %30, orta aşamada %40 ve tamamlandığında %30 ödemeli taksit planımız mevcut. Ayrıca kredi kartı ve havale ile tek seferlik ödeme de yapabilirsiniz."
    },
    {
        question: "Malzeme kalitesi nasıl?",
        answer: "Sadece A sınıfı, garantili ve sertifikalı malzemeler kullanıyoruz. Tüm malzemelerimiz Türk Standartları Enstitüsü (TSE) onaylıdır. İsterseniz malzeme seçiminde size danışmanlık da sağlıyoruz."
    },
    {
        question: "Garanti veriyor musunuz?",
        answer: "Evet! Tüm işçilik için 2 yıl, kullanılan malzemeler için üretici garantisi sunuyoruz. Ayrıca tamamlanan projeler için 6 ay ücretsiz bakım hizmeti veriyoruz."
    },
    {
        question: "Hangi illerde hizmet veriyorsunuz?",
        answer: "Şu anda İstanbul, Ankara, İzmir, Bursa ve Antalya'da aktif olarak hizmet veriyoruz. Yakında diğer illerde de hizmet sunmaya başlayacağız. Farklı bir ilde iseniz bizimle iletişime geçin."
    },
    {
        question: "Acil tadilatlar için ne kadar hızlı gelebilirsiniz?",
        answer: "Acil durumlar için aynı gün hizmet verebiliyoruz. Normal projelerde ise keşif için 24-48 saat içinde randevu oluşturuyoruz. İş yoğunluğuna göre projeye başlama süresi 3-7 gün arasında değişmektedir."
    },
    {
        question: "Temizlik hizmeti dahil mi?",
        answer: "Evet, tüm tadilat projelerimize ücretsiz kaba temizlik hizmeti dahildir. İsterseniz ekstra ücret karşılığında profesyonel detaylı temizlik hizmeti de talep edebilirsiniz."
    }
]

export function FAQSection() {
    return (
        <section id="sss" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 mb-4">
                            <HelpCircle className="h-7 w-7 text-white" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Sık Sorulan Sorular
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Merak ettiğiniz soruların cevaplarını burada bulabilirsiniz.
                            Başka sorularınız varsa bizimle iletişime geçin.
                        </p>
                    </div>

                    {/* FAQ Accordion */}
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="bg-gray-50 rounded-xl border border-gray-100 px-6 overflow-hidden"
                            >
                                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-orange-600 py-5">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    {/* Contact CTA */}
                    <div className="mt-12 text-center">
                        <p className="text-gray-600 mb-4">
                            Sorunuza cevap bulamadınız mı?
                        </p>
                        <a
                            href="#iletisim"
                            className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors"
                        >
                            Bize Ulaşın →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

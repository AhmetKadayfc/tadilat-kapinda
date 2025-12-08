"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Star } from "lucide-react"

export function TestimonialsSection() {
    const testimonials = [
        {
            name: "Ayşe Yılmaz",
            location: "İstanbul, Kadıköy",
            rating: 5,
            text: "Banyomun tadilatını yaptırdım. Hem fiyatlar uygundu hem de işçilik çok kaliteliydi. 30 dakikada 3 farklı ustadan teklif aldım!",
            project: "Banyo Tadilatı",
            before: "Eski banyo",
            after: "Yeni banyo",
        },
        {
            name: "Mehmet Demir",
            location: "Ankara, Çankaya",
            rating: 5,
            text: "Mutfak dolabı yaptırmak istiyordum. Platformdan hızlıca teklif aldım ve çok memnun kaldım. Kesinlikle tavsiye ederim!",
            project: "Mutfak Dolapları",
            before: "Eski mutfak",
            after: "Modern mutfak",
        },
        {
            name: "Zeynep Kaya",
            location: "İzmir, Karşıyaka",
            rating: 5,
            text: "Evin tüm boyasını yenilettim. Çok profesyonel bir ekip geldi. Her şey çok düzenli ve temizdi. Fiyatlar da gayet makul.",
            project: "Ev Boyama",
            before: "Eski duvarlar",
            after: "Yeni boyalı",
        },
        {
            name: "Can Özkan",
            location: "Antalya, Muratpaşa",
            rating: 5,
            text: "Balkonumu kapatmak istiyordum. Görüntülü görüşme ile usta geldi, ölçü aldı ve hemen işe başladı. Sonuç mükemmel oldu!",
            project: "Balkon Kapatma",
            before: "Açık balkon",
            after: "Kapalı balkon",
        },
    ]

    return (
        <>
            <div id="musteri-memnuniyeti"></div>
            <section id="referanslar" className="py-20 bg-gradient-to-br from-orange-50 via-white to-amber-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        {/* Section Header */}
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Müşterilerimiz Ne Diyor?
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Binlerce mutlu müşterimizden bazılarının deneyimleri
                            </p>
                        </div>

                        {/* Testimonials Carousel */}
                        <Carousel
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            className="w-full"
                        >
                            <CarouselContent className="-ml-4">
                                {testimonials.map((testimonial, index) => (
                                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                        <Card className="h-full border-2 border-gray-100 hover:border-orange-200 transition-all hover:shadow-xl">
                                            <CardContent className="p-6">
                                                {/* Rating */}
                                                <div className="flex items-center gap-1 mb-4">
                                                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className="h-5 w-5 fill-yellow-400 text-yellow-400"
                                                        />
                                                    ))}
                                                </div>

                                                {/* Review Text */}
                                                <p className="text-gray-700 mb-6 leading-relaxed italic">
                                                    "{testimonial.text}"
                                                </p>

                                                {/* Before/After */}
                                                <div className="mb-6">
                                                    <div className="flex gap-2 text-sm font-medium text-gray-900 mb-2">
                                                        <span className="flex-1 text-center">Önce</span>
                                                        <span className="flex-1 text-center">Sonra</span>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-2">
                                                        <div className="aspect-square rounded-lg bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                                            <span className="text-xs text-gray-600">
                                                                {testimonial.before}
                                                            </span>
                                                        </div>
                                                        <div className="aspect-square rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                                                            <span className="text-xs text-white font-medium">
                                                                {testimonial.after}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Project Type */}
                                                <div className="mb-4">
                                                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-orange-100 text-orange-700 rounded-full">
                                                        {testimonial.project}
                                                    </span>
                                                </div>

                                                {/* Customer Info */}
                                                <div className="border-t pt-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-white font-bold">
                                                            {testimonial.name.charAt(0)}
                                                        </div>
                                                        <div>
                                                            <div className="font-semibold text-gray-900">
                                                                {testimonial.name}
                                                            </div>
                                                            <div className="text-sm text-gray-600">
                                                                {testimonial.location}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <div className="flex justify-center gap-2 mt-8">
                                <CarouselPrevious className="static translate-y-0" />
                                <CarouselNext className="static translate-y-0" />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </section>
        </>
    )
}

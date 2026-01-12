"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"

export function Footer() {
    const [email, setEmail] = useState("")

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Email aboneliği:", email)
        // Burada email abonelik işlemi yapılacak
        setEmail("")
    }

    const menuSections = [
        {
            title: "Hızlı Linkler",
            links: [
                { name: "Anasayfa", href: "/" },
                { name: "Hakkımızda", href: "/hakkimizda" },
                { name: "Hizmetlerimiz", href: "/hizmetlerimiz" },
                { name: "Referanslarımız", href: "/referanslarimiz" },
                { name: "Sürdürülebilirlik", href: "/surdurulebilirlik" },
            ],
        },
        {
            title: "Kurumsal",
            links: [
                { name: "Nasıl Çalışır", href: "/#nasil-calisir" },
                { name: "Müşteri Memnuniyeti", href: "/#musteri-memnuniyeti" },
                { name: "Sık Sorulan Sorular", href: "/#sss" },
                { name: "İletişim", href: "#iletisim" },
            ],
        },
        {
            title: "Yasal",
            links: [
                { name: "KVKK", href: "/kvkk" },
                { name: "Gizlilik Politikası", href: "/gizlilik" },
                { name: "Kullanım Koşulları", href: "/kullanim-kosullari" },
                { name: "Çerez Politikası", href: "#cerez" },
            ],
        },
    ]

    return (
        <footer id="iletisim" className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
                    {/* Logo & About */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center space-x-2 mb-6">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-700">
                                <span className="text-2xl font-bold text-white">TC</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-white">Tadilat Cebimde</span>
                                <span className="text-xs text-gray-400">Ev Tadilat Hizmetleri</span>
                            </div>
                        </Link>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Türkiye'nin en güvenilir ev tadilat platformu.
                            Binlerce profesyonel usta ve müteahhit ile kaliteli,
                            hızlı ve uygun fiyatlı tadilat hizmetleri.
                        </p>

                        {/* Contact Information */}
                        <div className="space-y-3 mb-6">
                            <h4 className="font-semibold text-white mb-3">İletişim Bilgileri</h4>
                            <a href="tel:+902121234567" className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors">
                                <Phone className="h-4 w-4" />
                                <span>+90 (212) 123 45 67</span>
                            </a>
                            <a href="mailto:info@tadilatcebimde.com" className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors">
                                <Mail className="h-4 w-4" />
                                <span>info@tadilatcebimde.com</span>
                            </a>
                            <div className="flex items-start gap-3 text-gray-400">
                                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                                <span>Levent Mah. Caddebostan Sok. No:15<br />Beşiktaş, İstanbul</span>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="flex gap-3">
                            {[
                                { Icon: Facebook, href: "#" },
                                { Icon: Instagram, href: "#" },
                                { Icon: Twitter, href: "#" },
                                { Icon: Linkedin, href: "#" },
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="h-10 w-10 rounded-full bg-gray-800 hover:bg-orange-600 flex items-center justify-center transition-colors">
                                    <social.Icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Menu Sections */}
                    {menuSections.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-bold text-lg mb-4">{section.title}</h3>
                            <ul className="space-y-2">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Newsletter */}
                <div className="border-t border-gray-700 pt-12 mb-12">
                    <div className="max-w-md mx-auto text-center">
                        <Mail className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-2">Bültenimize Abone Olun</h3>
                        <p className="text-gray-400 mb-6">
                            Tadilat fırsatları ve kampanyalardan haberdar olun!
                        </p>
                        <form onSubmit={handleSubscribe} className="flex gap-2">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="E-posta adresiniz"
                                className="flex-1 px-4 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-500 focus:outline-none text-white"
                                required
                            />
                            <Button
                                type="submit"
                                className="bg-orange-600 hover:bg-orange-700 px-8">
                                Abone Ol
                            </Button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                        <p>
                            © {new Date().getFullYear()} Tadilat Cebimde. Tüm hakları saklıdır.
                        </p>
                        <div className="flex gap-6">
                            <Link href="/kvkk" className="hover:text-orange-400 transition-colors">
                                KVKK
                            </Link>
                            <Link href="/gizlilik" className="hover:text-orange-400 transition-colors">
                                Gizlilik
                            </Link>
                            <Link href="/kullanim-kosullari" className="hover:text-orange-400 transition-colors">
                                Kullanım Koşulları
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

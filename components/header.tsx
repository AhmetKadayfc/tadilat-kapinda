"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { handleSmoothScroll } from "@/lib/scroll-utils"

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const menuItems = [
        { name: "Anasayfa", href: "#" },
        { name: "Hakkımızda", href: "#hakkimizda" },
        { name: "Nasıl Çalışır", href: "#nasil-calisir" },
        // { name: "Hizmetlerimiz", href: "#hizmetlerimiz" },
        // { name: "Referanslarımız", href: "#referanslar" },
        { name: "Müşteri Memnuniyeti", href: "#musteri-memnuniyeti" },
        // { name: "Sürdürülebilirlik", href: "#surdurulebilirlik" },
        { name: "İletişim", href: "#iletisim" },
    ]

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        handleSmoothScroll(e, href)
        setMobileMenuOpen(false)
    }

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
            <div className="container mx-auto flex h-20 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700"
                    >
                        <span className="text-2xl font-bold text-white">TK</span>
                    </motion.div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold text-emerald-700">Tadilat Kapında</span>
                        <span className="text-xs text-gray-600">Ev Tadilat Hizmetleri</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-1">
                    {menuItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={(e) => handleClick(e, item.href)}
                            className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-emerald-600 hover:bg-emerald-50 rounded-md relative group"
                        >
                            {item.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300" />
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="lg:hidden p-2 text-gray-700 hover:text-emerald-600"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="lg:hidden border-t bg-white overflow-hidden"
                    >
                        <nav className="container mx-auto flex flex-col px-4 py-4 space-y-2">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => handleClick(e, item.href)}
                                    className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

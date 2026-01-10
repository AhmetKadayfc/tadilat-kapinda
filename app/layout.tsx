import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tadilat Cebimde - Hızlı ve Güvenilir Ev Tadilat Hizmeti",
  description: "Ev tadilatı sürecindeki zaman, güven ve iletişim sorunlarını ortadan kaldıran dijital platform. Sadece fotoğraf veya video yükleyin, 30 dakika içinde uzman fiyat teklifi alın.",
  keywords: [
    "tadilat",
    "ev tadilatı",
    "tamir",
    "ustalar",
    "fiyat teklifi",
    "online tadilat",
    "hızlı tadilat",
    "güvenilir usta",
    "ev yenileme",
    "tadilat platformu",
    "dijital tadilat",
    "usta bul",
    "tamirat hizmeti"
  ],
  authors: [{ name: "Tadilat Cebimde" }],
  creator: "Tadilat Cebimde",
  publisher: "Tadilat Cebimde",
  metadataBase: new URL('https://tadilatcebimde.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://tadilatcebimde.com",
    title: "Tadilat Cebimde - Hızlı ve Güvenilir Ev Tadilat Hizmeti",
    description: "Ev tadilatı sürecindeki zaman, güven ve iletişim sorunlarını ortadan kaldıran dijital platform. Sadece fotoğraf veya video yükleyin, 30 dakika içinde uzman fiyat teklifi alın.",
    siteName: "Tadilat Cebimde",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tadilat Cebimde - Hızlı ve Güvenilir Ev Tadilat Hizmeti",
    description: "Ev tadilatı sürecindeki zaman, güven ve iletişim sorunlarını ortadan kaldıran dijital platform. 30 dakika içinde uzman fiyat teklifi!",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Google Search Console verification code eklenebilir
    // google: 'your-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

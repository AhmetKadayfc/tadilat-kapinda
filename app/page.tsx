import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { VideoSection } from "@/components/video-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <VideoSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}

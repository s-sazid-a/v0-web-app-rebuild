import { Header } from "@/components/landing/header"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { Footer } from "@/components/landing/footer"

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-[#0A0E17]">
      <Header />
      <div className="pt-20">
        <TestimonialsSection />
      </div>
      <Footer />
    </main>
  )
}

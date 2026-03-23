import { Header } from "@/components/landing/header"
import { HowItWorksSection } from "@/components/landing/how-it-works-section"
import { Footer } from "@/components/landing/footer"

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-[#0A0E17]">
      <Header />
      <div className="pt-20">
        <HowItWorksSection />
      </div>
      <Footer />
    </main>
  )
}

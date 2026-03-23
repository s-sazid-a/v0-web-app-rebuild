import { Header } from "@/components/landing/header"
import { PricingSection } from "@/components/landing/pricing-section"
import { Footer } from "@/components/landing/footer"

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#0A0E17]">
      <Header />
      <div className="pt-20">
        <PricingSection />
      </div>
      <Footer />
    </main>
  )
}

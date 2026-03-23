import { Header } from "@/components/landing/header"
import { FeaturesSection } from "@/components/landing/features-section"
import { Footer } from "@/components/landing/footer"

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-[#0A0E17]">
      <Header />
      <div className="pt-20">
        <FeaturesSection />
      </div>
      <Footer />
    </main>
  )
}

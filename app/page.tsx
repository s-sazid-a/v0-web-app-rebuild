import { Header } from "@/components/landing/header"
import { HealthCinematicHero } from "@/components/ui/health-cinematic-hero"
import { Footer } from "@/components/landing/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0A0E17] overflow-x-hidden">
      <Header />
      <HealthCinematicHero 
        brandName="HHAI"
        particleWords={["HHAI", "AI-Powered", "Health Revolution", "HyperHealth AI", "Your Health", "Reimagined"]}
        cardHeading="Your Health, Reimagined."
        cardDescription={
          <>
            <span className="text-white font-semibold">Health Hyper AI</span> transforms 
            your wellness journey with cutting-edge AI that analyzes, personalizes, 
            and optimizes your health in real-time.
          </>
        }
        metricValue={1480}
        metricLabel="Calories Today"
        ctaHeading="Start Your Journey"
        ctaDescription="Transform your wellness with AI-powered health tracking. Join thousands already on their journey."
      />
      <Footer />
    </main>
  )
}

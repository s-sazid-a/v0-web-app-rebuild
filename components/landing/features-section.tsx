"use client"

import { ArrowRight, Barcode, Camera, UserCog, UtensilsCrossed, Users, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const features = [
  {
    icon: Barcode,
    title: "Barcode Scanner",
    description: "Instantly analyze packaged foods for nutritional information, allergens, and health impact with a simple scan.",
    gradient: "from-[#6E00FF] to-[#FF36B9]",
    demo: "Try Scanner",
    href: "/how-it-works"
  },
  {
    icon: Camera,
    title: "AI Food Recognition",
    description: "Point your camera at any meal to get real-time nutritional breakdown and personalized recommendations.",
    gradient: "from-[#00D8FF] to-[#6E00FF]",
    demo: "See It In Action",
    href: "/how-it-works"
  },
  {
    icon: UserCog,
    title: "Health Personalization",
    description: "Receive tailored health insights and recommendations based on your unique profile, goals, and progress.",
    gradient: "from-[#FF36B9] to-[#00D8FF]",
    demo: "Explore Personalization",
    href: "/how-it-works"
  },
  {
    icon: UtensilsCrossed,
    title: "AI Meal Planning",
    description: "Let our AI create perfect meal plans matching your dietary requirements, preferences, and nutritional needs.",
    gradient: "from-[#6E00FF] to-[#00D8FF]",
    demo: "View Sample Plans",
    href: "/dashboard/meals"
  },
  {
    icon: Users,
    title: "Expert Consultations",
    description: "Connect with certified nutritionists and health coaches for personalized guidance and support.",
    gradient: "from-[#00D8FF] to-[#FF36B9]",
    demo: "Meet Our Experts",
    href: "/dashboard/insights"
  },
  {
    icon: BarChart3,
    title: "Data Visualization",
    description: "Track your progress with interactive, beautiful, and easy-to-understand health and nutrition dashboards.",
    gradient: "from-[#FF36B9] to-[#6E00FF]",
    demo: "Explore Dashboards",
    href: "/dashboard/metrics"
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-[#0A0E17] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6E00FF]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00D8FF]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Cutting-Edge <span className="gradient-text">Features</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover how our AI-powered platform revolutionizes your health journey with these next-generation capabilities.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 h-full cursor-pointer">
                {/* Gradient icon background */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} p-0.5 mb-4`}
                >
                  <div className="w-full h-full bg-[#0A0E17] rounded-xl flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{feature.description}</p>

                {/* Interactive demo button */}
                <Link href={feature.href}>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-[#00D8FF] hover:text-[#00D8FF] hover:bg-transparent group-hover:translate-x-1 transition-transform"
                  >
                    {feature.demo}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#6E00FF]/0 to-[#00D8FF]/0 group-hover:from-[#6E00FF]/10 group-hover:to-[#00D8FF]/10 rounded-2xl transition-all -z-10 blur-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

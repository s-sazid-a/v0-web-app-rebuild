"use client"

import { ArrowRight, Barcode, Camera, UserCog, UtensilsCrossed, Users, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Barcode,
    title: "Barcode Scanner",
    description: "Instantly analyze packaged foods for nutritional information with a simple scan.",
    gradient: "from-[#6E00FF] to-[#FF36B9]",
    demo: "Try Scanning",
  },
  {
    icon: Camera,
    title: "AI Food Recognition",
    description: "Point your camera at any meal to get real-time nutritional breakdown powered by AI.",
    gradient: "from-[#00D8FF] to-[#6E00FF]",
    demo: "See It In Action",
  },
  {
    icon: UserCog,
    title: "Health Personalization",
    description: "Get customized health plans based on your unique body metrics and goals.",
    gradient: "from-[#FF36B9] to-[#00D8FF]",
    demo: "Personalize Now",
  },
  {
    icon: UtensilsCrossed,
    title: "AI Meal Planning",
    description: "Receive intelligent meal suggestions that match your dietary preferences and health targets.",
    gradient: "from-[#6E00FF] to-[#00D8FF]",
    demo: "Plan Meals",
  },
  {
    icon: Users,
    title: "Expert Consultations",
    description: "Connect with certified nutritionists and health experts for personalized guidance.",
    gradient: "from-[#00D8FF] to-[#FF36B9]",
    demo: "Book Session",
  },
  {
    icon: BarChart3,
    title: "Data Visualization",
    description: "Track your progress with beautiful charts and actionable insights over time.",
    gradient: "from-[#FF36B9] to-[#6E00FF]",
    demo: "View Analytics",
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
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience the future of health tracking with our comprehensive suite of
            AI-powered tools designed to transform your wellness journey.
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
                <Button
                  variant="ghost"
                  className="p-0 h-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6E00FF] to-[#00D8FF] hover:bg-transparent group-hover:translate-x-1 transition-transform"
                >
                  {feature.demo}
                  <ArrowRight className="ml-2 w-4 h-4 text-[#00D8FF]" />
                </Button>
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

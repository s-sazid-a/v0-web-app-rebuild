"use client"

import { useState } from "react"
import { ArrowRight, Barcode, Camera, UserCog, UtensilsCrossed, Users, BarChart3, Play, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MealPlannerDemo } from "@/components/demos/meal-planner-demo"
import { ExpertConsultationsDemo } from "@/components/demos/expert-consultations-demo"
import { DataVisualizationDemo } from "@/components/demos/data-visualization-demo"

type FeatureType = {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  gradient: string
  // "Try Now" - opens interactive demo modal OR links to How It Works
  tryNowAction: "modal" | "how-it-works"
  tryNowHref?: string // only used if tryNowAction is "how-it-works"
  demoType?: "meal-planner" | "expert-consultations" | "data-visualization" // only used if tryNowAction is "modal"
  // "See Demo" - links to respective section in Demo App (dashboard)
  seeDemoHref: string
}

const features: FeatureType[] = [
  {
    icon: Barcode,
    title: "Smart Barcode Scanner",
    description: "Instantly analyze packaged foods for nutritional information, allergens, and health impact with a simple scan.",
    gradient: "from-[#6E00FF] to-[#FF36B9]",
    tryNowAction: "how-it-works",
    tryNowHref: "/how-it-works#barcode-scanner",
    seeDemoHref: "/dashboard/meals#barcode-scanner"
  },
  {
    icon: Camera,
    title: "AI Food Recognition",
    description: "Point your camera at any meal to get real-time nutritional breakdown and personalized recommendations.",
    gradient: "from-[#00D8FF] to-[#6E00FF]",
    tryNowAction: "how-it-works",
    tryNowHref: "/how-it-works#food-recognition",
    seeDemoHref: "/dashboard/meals#food-recognition"
  },
  {
    icon: UserCog,
    title: "Hyper Personalized Health",
    description: "Receive tailored health insights and recommendations based on your unique profile, goals, and progress.",
    gradient: "from-[#FF36B9] to-[#00D8FF]",
    tryNowAction: "how-it-works",
    tryNowHref: "/how-it-works#health-personalization",
    seeDemoHref: "/dashboard/profile#health-personalization"
  },
  {
    icon: UtensilsCrossed,
    title: "AI Meal Planning",
    description: "Let our AI create perfect meal plans matching your dietary requirements, preferences, and nutritional needs.",
    gradient: "from-[#6E00FF] to-[#00D8FF]",
    tryNowAction: "modal",
    demoType: "meal-planner",
    seeDemoHref: "/dashboard/meals"
  },
  {
    icon: Users,
    title: "Expert Consultations",
    description: "Connect with certified nutritionists and health coaches for personalized guidance and support.",
    gradient: "from-[#00D8FF] to-[#FF36B9]",
    tryNowAction: "modal",
    demoType: "expert-consultations",
    seeDemoHref: "/dashboard/insights"
  },
  {
    icon: BarChart3,
    title: "AI Data Visualization",
    description: "Track your progress with interactive, beautiful, and easy-to-understand health and nutrition dashboards.",
    gradient: "from-[#FF36B9] to-[#6E00FF]",
    tryNowAction: "modal",
    demoType: "data-visualization",
    seeDemoHref: "/dashboard/metrics"
  },
]

export function FeaturesSection() {
  const [mealPlannerOpen, setMealPlannerOpen] = useState(false)
  const [expertConsultationsOpen, setExpertConsultationsOpen] = useState(false)
  const [dataVisualizationOpen, setDataVisualizationOpen] = useState(false)

  const handleTryNowClick = (feature: FeatureType) => {
    if (feature.tryNowAction === "modal" && feature.demoType) {
      switch (feature.demoType) {
        case "meal-planner":
          setMealPlannerOpen(true)
          break
        case "expert-consultations":
          setExpertConsultationsOpen(true)
          break
        case "data-visualization":
          setDataVisualizationOpen(true)
          break
      }
    }
  }

  return (
    <>
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
                <div className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
                  {/* Gradient icon background */}
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} p-0.5 mb-4`}
                  >
                    <div className="w-full h-full bg-[#0A0E17] rounded-xl flex items-center justify-center">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed flex-grow">{feature.description}</p>

                  {/* Two buttons: Try Now and See Demo */}
                  <div className="flex gap-3 mt-auto">
                    {/* Try Now Button - opens modal OR links to How It Works */}
                    {feature.tryNowAction === "modal" ? (
                      <Button
                        onClick={() => handleTryNowClick(feature)}
                        className="flex-1 bg-gradient-to-r from-[#6E00FF] to-[#00D8FF] text-white hover:opacity-90"
                      >
                        <Sparkles className="mr-2 w-4 h-4" />
                        Try Now
                      </Button>
                    ) : (
                      <Link href={feature.tryNowHref || "/how-it-works"} className="flex-1">
                        <Button
                          className="w-full bg-gradient-to-r from-[#6E00FF] to-[#00D8FF] text-white hover:opacity-90"
                        >
                          <Sparkles className="mr-2 w-4 h-4" />
                          Try Now
                        </Button>
                      </Link>
                    )}

                    {/* See Demo Button - links to respective section in Demo App (dashboard) */}
                    <Link href={feature.seeDemoHref} className="flex-1">
                      <Button
                        variant="outline"
                        className="w-full border-white/20 text-white hover:bg-white/10 hover:border-white/30"
                      >
                        <Play className="mr-2 w-4 h-4" />
                        See Demo
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#6E00FF]/0 to-[#00D8FF]/0 group-hover:from-[#6E00FF]/10 group-hover:to-[#00D8FF]/10 rounded-2xl transition-all -z-10 blur-xl" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Modals */}
      <MealPlannerDemo 
        isOpen={mealPlannerOpen} 
        onClose={() => setMealPlannerOpen(false)} 
      />
      <ExpertConsultationsDemo 
        isOpen={expertConsultationsOpen} 
        onClose={() => setExpertConsultationsOpen(false)} 
      />
      <DataVisualizationDemo 
        isOpen={dataVisualizationOpen} 
        onClose={() => setDataVisualizationOpen(false)} 
      />
    </>
  )
}

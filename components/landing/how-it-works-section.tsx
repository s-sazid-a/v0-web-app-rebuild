"use client"

import { Scan, Brain, TrendingUp } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Scan,
    title: "Scan Your Food",
    description:
      "Simply point your camera at any meal or scan a barcode. Our AI instantly recognizes and analyzes the food.",
    gradient: "from-[#6E00FF] to-[#00D8FF]",
  },
  {
    number: "02",
    icon: Brain,
    title: "AI Analyzes",
    description:
      "Our advanced AI processes the data, calculating precise nutritional values and comparing with your goals.",
    gradient: "from-[#00D8FF] to-[#FF36B9]",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Get Insights",
    description:
      "Receive personalized recommendations, track your progress, and achieve your health goals faster.",
    gradient: "from-[#FF36B9] to-[#6E00FF]",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-[#0A0E17] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(110,0,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(110,0,255,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get started in three simple steps and begin your journey to better health today.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#6E00FF]/50 to-[#00D8FF]/50" />
              )}

              <div className="text-center relative">
                {/* Step number */}
                <div className="text-6xl font-bold text-white/5 absolute -top-4 left-1/2 -translate-x-1/2">
                  {step.number}
                </div>

                {/* Icon */}
                <div
                  className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${step.gradient} p-0.5 mb-6 relative z-10`}
                >
                  <div className="w-full h-full bg-[#0A0E17] rounded-2xl flex items-center justify-center">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

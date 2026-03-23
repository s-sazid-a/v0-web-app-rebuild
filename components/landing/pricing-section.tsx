"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for getting started with health tracking",
    features: [
      "Basic food logging",
      "Barcode scanner",
      "Daily calorie tracking",
      "Weekly progress reports",
      "Community access",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "/month",
    description: "Advanced features for serious health enthusiasts",
    features: [
      "Everything in Starter",
      "AI food recognition",
      "Personalized meal plans",
      "Advanced analytics",
      "Priority support",
      "Custom goals tracking",
    ],
    cta: "Start Pro Trial",
    popular: true,
  },
  {
    name: "Premium",
    price: "$19.99",
    period: "/month",
    description: "Complete health transformation suite",
    features: [
      "Everything in Pro",
      "1-on-1 expert consultations",
      "DNA-based recommendations",
      "Family account sharing",
      "API access",
      "White-glove onboarding",
    ],
    cta: "Go Premium",
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-[#0A0E17] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#6E00FF]/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#00D8FF]/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Simple <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose the plan that fits your health journey. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#6E00FF] to-[#00D8FF] rounded-full text-sm font-medium text-white">
                  Most Popular
                </div>
              )}

              <div
                className={`h-full glass rounded-2xl p-8 ${
                  plan.popular
                    ? "border-[#6E00FF]/50 glow-purple"
                    : ""
                }`}
              >
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-400">{plan.period}</span>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#6E00FF] to-[#00D8FF] flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href="/dashboard" className="block">
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-[#6E00FF] to-[#00D8FF] hover:opacity-90 text-white border-0"
                        : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

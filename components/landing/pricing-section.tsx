"use client"

import { Check, X, Shield, Headphones, Monitor, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    subtitle: "Perfect for beginners",
    price: "$0",
    period: "/month",
    features: [
      { name: "Basic food scanning", included: true },
      { name: "Limited meal recommendations", included: true },
      { name: "Standard nutrition tracking", included: true },
      { name: "Advanced health analytics", included: false },
      { name: "Expert consultations", included: false },
    ],
    cta: "Sign Up Free",
    popular: false,
  },
  {
    name: "Pro",
    subtitle: "For health enthusiasts",
    price: "$9.99",
    period: "/month",
    features: [
      { name: "Unlimited food scanning", included: true },
      { name: "Personalized meal plans", included: true },
      { name: "Advanced nutrition insights", included: true },
      { name: "Health trend analytics", included: true },
      { name: "1-on-1 expert consultations", included: true },
    ],
    cta: "Choose Pro",
    popular: true,
  },
  {
    name: "Premium",
    subtitle: "Ultimate health experience",
    price: "$19.99",
    period: "/month",
    features: [
      { name: "Everything in Pro", included: true },
      { name: "Priority updates & features", included: true },
      { name: "Health community access", included: true },
      { name: "Advanced health reporting", included: true },
      { name: "Monthly expert consultation", included: true },
    ],
    cta: "Get Premium",
    popular: false,
  },
]

const benefits = [
  { icon: Shield, text: "Secure Data" },
  { icon: Headphones, text: "24/7 Support" },
  { icon: Monitor, text: "Multiple Devices" },
  { icon: XCircle, text: "Cancel Anytime" },
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
            Choose Your <span className="gradient-text">Plan</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Start your health transformation with a plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#6E00FF] to-[#00D8FF] rounded-full text-sm font-medium text-white z-10">
                  Most Popular
                </div>
              )}

              <div
                className={`h-full glass rounded-2xl p-8 ${
                  plan.popular
                    ? "border border-[#6E00FF]/50 glow-purple"
                    : ""
                }`}
              >
                <h3 className="text-2xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.subtitle}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      {feature.included ? (
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#6E00FF] to-[#00D8FF] flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                          <X className="w-3 h-3 text-gray-500" />
                        </div>
                      )}
                      <span className={feature.included ? "text-gray-300" : "text-gray-500"}>
                        {feature.name}
                      </span>
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

        {/* All plans include */}
        <div className="text-center">
          <p className="text-gray-400 mb-4">All plans include:</p>
          <div className="flex flex-wrap justify-center gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-300">
                <benefit.icon className="w-5 h-5 text-[#00D8FF]" />
                <span>{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

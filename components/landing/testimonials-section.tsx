"use client"

import { Star, TrendingDown, Heart, Sparkles } from "lucide-react"

const testimonials = [
  {
    name: "Emma Rodriguez",
    content:
      "The AI-powered meal recommendations completely changed how I approach nutrition. I've lost 15 pounds and my energy levels are through the roof!",
    badge: "Lost 15 pounds in 8 weeks",
    badgeIcon: TrendingDown,
    badgeColor: "from-[#6E00FF] to-[#00D8FF]",
    avatar: "ER",
  },
  {
    name: "Michael Chen",
    content:
      "As a busy professional, I never had time to plan my meals. The barcode scanner and instant recommendations have made healthy eating effortless.",
    badge: "Improved diet quality score by 68%",
    badgeIcon: Sparkles,
    badgeColor: "from-[#00D8FF] to-[#FF36B9]",
    avatar: "MC",
  },
  {
    name: "Sophia Williams",
    content:
      "The expert consultations combined with AI insights helped me identify food sensitivities I never knew I had. My digestive issues are gone!",
    badge: "Eliminated digestive issues in 3 weeks",
    badgeIcon: Heart,
    badgeColor: "from-[#FF36B9] to-[#6E00FF]",
    avatar: "SW",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-[#0A0E17] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF36B9]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#6E00FF]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hear from our users who have transformed their health journey with HealthHyperAI.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 hover:bg-white/10 transition-all"
            >
              {/* Avatar and Name */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6E00FF] to-[#00D8FF] flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div className="font-semibold text-white">{testimonial.name}</div>
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Badge */}
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${testimonial.badgeColor} bg-opacity-20`}
                   style={{ background: `linear-gradient(to right, rgba(110,0,255,0.2), rgba(0,216,255,0.2))` }}>
                <testimonial.badgeIcon className="w-4 h-4 text-[#00D8FF]" />
                <span className="text-sm text-white">{testimonial.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

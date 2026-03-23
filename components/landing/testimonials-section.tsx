"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Fitness Enthusiast",
    content:
      "HealthHyperAI completely transformed my approach to nutrition. The AI food scanner is incredibly accurate and the personalized recommendations helped me lose 20 pounds!",
    rating: 5,
    avatar: "SC",
  },
  {
    name: "Marcus Johnson",
    role: "Software Developer",
    content:
      "As someone with a busy schedule, the meal planning feature is a lifesaver. It suggests quick, healthy meals that fit my macros perfectly.",
    rating: 5,
    avatar: "MJ",
  },
  {
    name: "Emily Rodriguez",
    role: "Healthcare Professional",
    content:
      "I recommend HealthHyperAI to all my patients. The data visualization and insights are professional-grade and help people stay accountable.",
    rating: 5,
    avatar: "ER",
  },
  {
    name: "David Kim",
    role: "Marathon Runner",
    content:
      "The personalized nutrition insights have optimized my training routine. My recovery time has improved significantly since using the app.",
    rating: 5,
    avatar: "DK",
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
            Loved by <span className="gradient-text">Thousands</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            See what our community has to say about their health transformation journey.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 hover:bg-white/10 transition-all"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6E00FF] to-[#00D8FF] flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

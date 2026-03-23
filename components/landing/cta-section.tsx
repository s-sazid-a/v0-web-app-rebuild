"use client"

import { useState } from "react"
import { ArrowRight, Check, Sparkles, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export function CTASection() {
  const [isLoading, setIsLoading] = useState(false)
  const [agreed, setAgreed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = "/dashboard"
    }, 1500)
  }

  return (
    <section className="py-24 bg-[#0A0E17] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#6E00FF]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#00D8FF]/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF36B9]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Start Your Health <span className="gradient-text">Revolution</span> Today
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Join thousands of users who have transformed their health with our cutting-edge AI technology. Get started for free and experience the future of wellness.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#6E00FF] to-[#00D8FF] flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  7-day free trial of all Premium features
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#6E00FF] to-[#00D8FF] flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  No credit card required to start
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#6E00FF] to-[#00D8FF] flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  Cancel anytime, no obligations
                </li>
              </ul>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link href="/dashboard">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-[#6E00FF] to-[#00D8FF] hover:opacity-90 text-white border-0 px-8"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white/20 bg-white/5 hover:bg-white/10 text-white px-8"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right: Signup Form */}
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-[#00D8FF]" />
                <span className="text-white font-medium">Create Your Account</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Full Name</label>
                  <Input 
                    type="text"
                    placeholder="Enter your name"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#6E00FF]"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Email Address</label>
                  <Input 
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#6E00FF]"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Password</label>
                  <Input 
                    type="password"
                    placeholder="Create a password"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#6E00FF]"
                    required
                  />
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox 
                    id="terms" 
                    checked={agreed}
                    onCheckedChange={(checked) => setAgreed(checked as boolean)}
                    className="border-white/30 data-[state=checked]:bg-[#6E00FF] data-[state=checked]:border-[#6E00FF] mt-1"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-400 cursor-pointer">
                    I agree to the <Link href="#" className="text-[#00D8FF] hover:underline">Terms of Service</Link> and <Link href="#" className="text-[#00D8FF] hover:underline">Privacy Policy</Link>
                  </label>
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#6E00FF] to-[#00D8FF] hover:opacity-90 text-white border-0 h-12"
                  disabled={!agreed || isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Creating Account...
                    </>
                  ) : (
                    "Create Free Account"
                  )}
                </Button>

                <p className="text-center text-gray-400 text-sm">
                  Already have an account?{" "}
                  <Link href="/dashboard" className="text-[#00D8FF] hover:underline">
                    Sign in
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

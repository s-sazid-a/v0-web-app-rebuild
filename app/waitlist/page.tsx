"use client"
import React, { useState } from "react"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check, Sparkles } from "lucide-react"
import Link from "next/link"

export default function WaitlistPage() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsLoading(false)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen w-full bg-[#0A0E17] relative flex flex-col items-center justify-center antialiased overflow-hidden">
      {/* Back to Home */}
      <Link 
        href="/" 
        className="absolute top-6 left-6 z-20 flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm">Back to Home</span>
      </Link>

      {/* Logo */}
      <div className="absolute top-6 right-6 z-20">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6E00FF] to-[#00D8FF] flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="text-white font-bold">HHAI</span>
        </Link>
      </div>

      <div className="max-w-2xl mx-auto p-4 relative z-10">
        {!submitted ? (
          <>
            <h1 className="text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 text-center font-sans font-bold mb-4">
              Join the Waitlist
            </h1>
            
            <p className="text-neutral-400 max-w-lg mx-auto my-6 text-sm md:text-base text-center leading-relaxed">
              Welcome to Health Hyper AI, your intelligent health companion powered by cutting-edge AI. 
              We provide personalized nutrition tracking, smart food scanning, and AI-driven health insights 
              tailored just for you. Whether you&apos;re tracking calories, planning meals, or optimizing your 
              wellness journey, HHAI has got you covered.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 mt-8">
              <Input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#111827]/80 border-neutral-800 text-white placeholder:text-neutral-500 focus:border-[#6E00FF] focus:ring-[#6E00FF]/20 h-12"
              />
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-[#111827]/80 border-neutral-800 text-white placeholder:text-neutral-500 focus:border-[#6E00FF] focus:ring-[#6E00FF]/20 h-12"
              />
              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full h-12 bg-gradient-to-r from-[#6E00FF] to-[#00D8FF] hover:opacity-90 text-white font-semibold text-base transition-all duration-300"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Joining...
                  </span>
                ) : (
                  "Get Early Access"
                )}
              </Button>
            </form>

            <p className="text-neutral-500 text-xs text-center mt-4">
              Be among the first to experience the future of health tracking.
            </p>

            {/* Stats */}
            <div className="flex items-center justify-center gap-8 mt-10">
              <div className="text-center">
                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6E00FF] to-[#00D8FF]">2,500+</div>
                <div className="text-xs text-neutral-500">On Waitlist</div>
              </div>
              <div className="w-px h-8 bg-neutral-800" />
              <div className="text-center">
                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00D8FF] to-[#FF36B9]">Q2 2026</div>
                <div className="text-xs text-neutral-500">Launch Date</div>
              </div>
              <div className="w-px h-8 bg-neutral-800" />
              <div className="text-center">
                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF36B9] to-[#6E00FF]">Free</div>
                <div className="text-xs text-neutral-500">Early Access</div>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#6E00FF] to-[#00D8FF] flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 text-center font-sans font-bold mb-4">
              You&apos;re on the list!
            </h1>
            <p className="text-neutral-400 max-w-md mx-auto my-6 text-base text-center">
              Thank you for joining the Health Hyper AI waitlist. We&apos;ll notify you as soon as we launch.
              Get ready to transform your health journey!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/">
                <Button variant="outline" className="border-neutral-700 text-white hover:bg-neutral-800">
                  Back to Home
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button className="bg-gradient-to-r from-[#6E00FF] to-[#00D8FF] hover:opacity-90 text-white">
                  Try Demo App
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
      
      <BackgroundBeams />
    </div>
  )
}

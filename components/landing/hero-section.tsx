"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Star, Heart, Activity, Scan, Wifi, Battery, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-[#0A0E17] pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,216,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,216,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Floating gradient blobs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#6E00FF]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-[#00D8FF]/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF36B9]/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left: Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm">
              <Zap className="w-4 h-4 text-[#00D8FF]" />
              <span className="text-gray-300">AI-Powered Health Tracking</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="gradient-text">AI-Powered</span>
              <br />
              <span className="text-white">Health Revolution</span>
            </h1>

            <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
              Transform your wellness journey with cutting-edge AI technology that
              analyzes, personalizes, and optimizes your health in real-time.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#6E00FF] to-[#00D8FF] hover:opacity-90 text-white border-0 px-8 py-6 text-lg glow-purple"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>

              <Button
                size="lg"
                variant="outline"
                className="border-[#6E00FF]/30 bg-white/5 hover:bg-white/10 text-white px-8 py-6 text-lg"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-[#0A0E17] bg-gradient-to-r from-[#6E00FF] to-[#00D8FF]"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 font-semibold text-white">4.9/5</span>
                </div>
                <p className="text-sm text-gray-400">From 10,000+ happy users</p>
              </div>
            </div>
          </div>

          {/* Right: Interactive App Preview */}
          <div className="relative hidden lg:block">
            {/* Phone mockup with live app preview */}
            <div className="relative mx-auto max-w-sm">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#6E00FF]/30 to-[#00D8FF]/30 rounded-3xl blur-3xl animate-pulse" />

              {/* Glass card containing app preview */}
              <div className="relative glass rounded-3xl p-4 shadow-2xl">
                {/* Phone notch */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-white/20 rounded-full" />

                {/* App screen */}
                <div className="aspect-[9/19] bg-gradient-to-b from-[#0A0E17] to-[#6E00FF]/10 rounded-2xl overflow-hidden relative">
                  {/* Mini dashboard preview */}
                  <div className="p-4 space-y-4">
                    {/* Header */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#6E00FF] to-[#00D8FF] flex items-center justify-center">
                          <Heart className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-white">
                          Health<span className="text-[#FF36B9]">Hyper</span>
                          <span className="text-[#00D8FF]">AI</span>
                        </span>
                      </div>
                      <div className="flex gap-2 text-white/50 text-xs">
                        <Wifi className="w-3 h-3" />
                        <Battery className="w-3 h-3" />
                      </div>
                    </div>

                    {/* Greeting */}
                    <div className="mt-4">
                      <div className="text-xs text-white/70">Good morning</div>
                      <div className="text-sm text-white font-medium">Alex Johnson</div>
                    </div>

                    {/* Stats grid */}
                    <div className="grid grid-cols-2 gap-2">
                      {/* Calories */}
                      <div className="glass rounded-lg p-3">
                        <div className="text-xs text-white/60 mb-1">Calories</div>
                        <div className="text-sm text-white font-semibold mb-2">
                          1,480 / 2,100
                        </div>
                        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#6E00FF] to-[#00D8FF] rounded-full"
                            style={{ width: "70%" }}
                          />
                        </div>
                      </div>

                      {/* Protein */}
                      <div className="glass rounded-lg p-3">
                        <div className="text-xs text-white/60 mb-1">Protein</div>
                        <div className="text-sm text-white font-semibold mb-2">
                          75g / 120g
                        </div>
                        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#6E00FF] to-[#FF36B9] rounded-full"
                            style={{ width: "62%" }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* AI Scanner button */}
                    <div className="glass rounded-lg p-3 cursor-pointer hover:bg-white/10 transition-colors">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-white/60">AI Food Scanner</div>
                          <div className="text-sm text-white font-medium">
                            Scan your meal
                          </div>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#6E00FF] to-[#00D8FF] flex items-center justify-center">
                          <Scan className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Recommendations */}
                    <div className="text-xs text-white/60 mb-2">AI Recommendations</div>
                    <div className="glass rounded-lg p-3">
                      <div className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-[#FF36B9]" />
                        <div>
                          <div className="text-xs text-white font-medium">
                            Increase water intake
                          </div>
                          <div className="text-xs text-white/60">
                            Help regulate blood pressure
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating icons */}
              <div className="absolute -top-8 -right-8 w-16 h-16 glass rounded-xl flex items-center justify-center animate-bounce">
                <Heart className="w-8 h-8 text-[#FF36B9]" />
              </div>

              <div className="absolute -bottom-8 -left-8 w-20 h-20 glass rounded-xl flex items-center justify-center animate-bounce delay-500">
                <Activity className="w-10 h-10 text-[#00D8FF]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

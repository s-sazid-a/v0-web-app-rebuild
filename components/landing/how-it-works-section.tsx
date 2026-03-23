"use client"

import { useState } from "react"
import { Scan, Brain, UserCog, ArrowRight, Check, Camera, Barcode, Activity, Target, TrendingUp, Dumbbell, Moon, Droplets } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const demos = [
  {
    id: "scanner",
    icon: Scan,
    title: "Smart Barcode Scanner",
    description: "Our AI-powered barcode scanner instantly identifies packaged foods and provides comprehensive nutrition analysis in seconds.",
    features: [
      "Detailed nutritional breakdown with macros and micros",
      "Allergen and sensitivity alerts customized to your profile",
      "Health score based on your personal health goals",
      "Healthier alternative suggestions when available"
    ],
    gradient: "from-[#6E00FF] to-[#00D8FF]",
    buttonText: "Try Scanner Demo",
    learnMore: "Learn more about our scanning technology"
  },
  {
    id: "recognition",
    icon: Camera,
    title: "AI Food Recognition",
    description: "Our advanced computer vision technology identifies food items in real-time, providing instant nutritional analysis of your meals.",
    features: [
      "Identifies multiple food items in a single image",
      "Calculates portion sizes and serving amounts visually",
      "Provides complete nutritional breakdown in seconds",
      "Suggests meal improvements based on your health goals"
    ],
    gradient: "from-[#00D8FF] to-[#FF36B9]",
    buttonText: "Try Food Recognition Demo",
    learnMore: "Learn more about our AI recognition technology"
  },
  {
    id: "personalized",
    icon: UserCog,
    title: "Hyper-Personalized Health",
    description: "Our AI builds a comprehensive health profile that evolves over time, providing increasingly personalized recommendations.",
    features: [
      "Dynamic profile adapting to your changing health status",
      "Personalized insights based on your biometric data",
      "Goal-specific recommendations for weight, fitness, or health",
      "Integration with wearable devices for real-time monitoring"
    ],
    gradient: "from-[#FF36B9] to-[#6E00FF]",
    buttonText: "Try Personalized Health",
    learnMore: "Learn more about our personalization engine"
  }
]

function ScannerDemo({ isActive }: { isActive: boolean }) {
  const [isScanning, setIsScanning] = useState(false)
  const [scanned, setScanned] = useState(false)

  const handleScan = () => {
    setIsScanning(true)
    setTimeout(() => {
      setIsScanning(false)
      setScanned(true)
    }, 2000)
  }

  if (!isActive) return null

  return (
    <div className="glass rounded-2xl p-6 h-full animate-in fade-in duration-300">
      <div className="flex items-center gap-2 mb-4">
        <Barcode className="w-5 h-5 text-[#00D8FF]" />
        <span className="text-sm text-white/70">Barcode Scanner Demo</span>
      </div>
      
      {!scanned ? (
        <div className="relative aspect-video bg-black/50 rounded-xl overflow-hidden flex items-center justify-center">
          {isScanning ? (
            <div className="text-center">
              <div className="w-48 h-1 bg-[#00D8FF] animate-pulse mx-auto mb-4 rounded-full" />
              <div className="w-48 h-32 border-2 border-[#00D8FF] rounded-lg mx-auto relative">
                <div className="absolute inset-0 bg-[#00D8FF]/20 animate-pulse" />
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#00D8FF] animate-bounce" />
              </div>
              <p className="text-white/70 mt-4 text-sm">Scanning barcode...</p>
            </div>
          ) : (
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#6E00FF] to-[#00D8FF] p-0.5">
                <div className="w-full h-full bg-[#0A0E17] rounded-xl flex items-center justify-center">
                  <Barcode className="w-12 h-12 text-white" />
                </div>
              </div>
              <Button 
                onClick={handleScan}
                className="bg-gradient-to-r from-[#6E00FF] to-[#00D8FF] hover:opacity-90 text-white"
              >
                Start Scanning
              </Button>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-3 glass rounded-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-[#6E00FF]/20 to-[#00D8FF]/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🥣</span>
            </div>
            <div>
              <p className="text-white font-medium">Organic Oatmeal</p>
              <p className="text-white/60 text-sm">150 cal per serving</p>
            </div>
            <div className="ml-auto px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">
              Healthy
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="glass rounded-lg p-3">
              <p className="text-[#00D8FF] font-semibold">27g</p>
              <p className="text-white/60 text-xs">Carbs</p>
            </div>
            <div className="glass rounded-lg p-3">
              <p className="text-[#FF36B9] font-semibold">5g</p>
              <p className="text-white/60 text-xs">Protein</p>
            </div>
            <div className="glass rounded-lg p-3">
              <p className="text-[#6E00FF] font-semibold">3g</p>
              <p className="text-white/60 text-xs">Fat</p>
            </div>
          </div>
          <Button 
            variant="ghost" 
            className="w-full text-white/70 hover:text-white"
            onClick={() => setScanned(false)}
          >
            Scan Another
          </Button>
        </div>
      )}
    </div>
  )
}

function FoodRecognitionDemo({ isActive }: { isActive: boolean }) {
  const [analyzing, setAnalyzing] = useState(false)
  const [analyzed, setAnalyzed] = useState(false)

  const handleAnalyze = () => {
    setAnalyzing(true)
    setTimeout(() => {
      setAnalyzing(false)
      setAnalyzed(true)
    }, 2500)
  }

  if (!isActive) return null

  return (
    <div className="glass rounded-2xl p-6 h-full animate-in fade-in duration-300">
      <div className="flex items-center gap-2 mb-4">
        <Camera className="w-5 h-5 text-[#FF36B9]" />
        <span className="text-sm text-white/70">Food Recognition Demo</span>
      </div>
      
      {!analyzed ? (
        <div className="relative aspect-video bg-black/50 rounded-xl overflow-hidden flex items-center justify-center">
          {analyzing ? (
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 relative">
                <div className="absolute inset-0 border-4 border-[#FF36B9]/30 rounded-full animate-ping" />
                <div className="absolute inset-2 border-4 border-[#00D8FF]/30 rounded-full animate-ping" style={{ animationDelay: "200ms" }} />
                <div className="absolute inset-4 border-4 border-[#6E00FF]/30 rounded-full animate-ping" style={{ animationDelay: "500ms" }} />
                <Camera className="w-12 h-12 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <p className="text-white/70 text-sm">Analyzing your meal...</p>
            </div>
          ) : (
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#00D8FF] to-[#FF36B9] p-0.5">
                <div className="w-full h-full bg-[#0A0E17] rounded-xl flex items-center justify-center">
                  <Camera className="w-12 h-12 text-white" />
                </div>
              </div>
              <Button 
                onClick={handleAnalyze}
                className="bg-gradient-to-r from-[#00D8FF] to-[#FF36B9] hover:opacity-90 text-white"
              >
                Analyze Food
              </Button>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-white/70 text-sm">Detected items:</p>
          <div className="space-y-2">
            {[
              { name: "Grilled Chicken", cal: 165, emoji: "🍗" },
              { name: "Brown Rice", cal: 216, emoji: "🍚" },
              { name: "Steamed Broccoli", cal: 55, emoji: "🥦" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-2 glass rounded-lg">
                <span className="text-xl">{item.emoji}</span>
                <span className="text-white text-sm flex-1">{item.name}</span>
                <span className="text-white/60 text-sm">{item.cal} cal</span>
              </div>
            ))}
          </div>
          <div className="p-3 glass rounded-lg text-center">
            <p className="text-white font-semibold">Total: 436 calories</p>
            <p className="text-green-400 text-sm">Great balanced meal!</p>
          </div>
          <Button 
            variant="ghost" 
            className="w-full text-white/70 hover:text-white"
            onClick={() => setAnalyzed(false)}
          >
            Try Another
          </Button>
        </div>
      )}
    </div>
  )
}

function PersonalizedHealthDemo({ isActive }: { isActive: boolean }) {
  const [isGenerating, setIsGenerating] = useState(false)
  const [generated, setGenerated] = useState(false)
  const [activeTab, setActiveTab] = useState<"overview" | "goals" | "insights">("overview")

  const handleGenerate = () => {
    setIsGenerating(true)
    setTimeout(() => {
      setIsGenerating(false)
      setGenerated(true)
    }, 2000)
  }

  if (!isActive) return null

  return (
    <div className="glass rounded-2xl p-6 h-full animate-in fade-in duration-300">
      <div className="flex items-center gap-2 mb-4">
        <UserCog className="w-5 h-5 text-[#6E00FF]" />
        <span className="text-sm text-white/70">Personalized Health Demo</span>
      </div>
      
      {!generated ? (
        <div className="relative aspect-video bg-black/50 rounded-xl overflow-hidden flex items-center justify-center">
          {isGenerating ? (
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 relative">
                {/* Animated health icons orbiting */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: "3s" }}>
                  <Activity className="w-6 h-6 text-[#FF36B9] absolute top-0 left-1/2 -translate-x-1/2" />
                  <Target className="w-6 h-6 text-[#00D8FF] absolute bottom-0 left-1/2 -translate-x-1/2" />
                  <Dumbbell className="w-6 h-6 text-[#6E00FF] absolute left-0 top-1/2 -translate-y-1/2" />
                  <Moon className="w-6 h-6 text-[#FF36B9] absolute right-0 top-1/2 -translate-y-1/2" />
                </div>
                <div className="absolute inset-4 border-4 border-[#6E00FF]/30 rounded-full animate-pulse" />
                <UserCog className="w-10 h-10 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <p className="text-white/70 text-sm">Analyzing your health profile...</p>
              <div className="mt-3 flex justify-center gap-1">
                <div className="w-2 h-2 bg-[#6E00FF] rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-[#FF36B9] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-2 h-2 bg-[#00D8FF] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#FF36B9] to-[#6E00FF] p-0.5">
                <div className="w-full h-full bg-[#0A0E17] rounded-xl flex items-center justify-center">
                  <UserCog className="w-12 h-12 text-white" />
                </div>
              </div>
              <Button 
                onClick={handleGenerate}
                className="bg-gradient-to-r from-[#FF36B9] to-[#6E00FF] hover:opacity-90 text-white"
              >
                Generate My Health Profile
              </Button>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          {/* Tabs */}
          <div className="flex gap-2">
            {[
              { id: "overview", label: "Overview" },
              { id: "goals", label: "Goals" },
              { id: "insights", label: "AI Insights" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-sm transition-all",
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-[#FF36B9] to-[#6E00FF] text-white"
                    : "glass text-white/60 hover:text-white"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === "overview" && (
            <div className="space-y-3 animate-in fade-in duration-200">
              <div className="glass rounded-lg p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white text-sm">Health Score</span>
                  <span className="text-[#00D8FF] font-semibold">87/100</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#6E00FF] to-[#00D8FF] rounded-full transition-all duration-1000" style={{ width: "87%" }} />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <div className="glass rounded-lg p-3 text-center">
                  <Activity className="w-5 h-5 text-[#FF36B9] mx-auto mb-1" />
                  <p className="text-white font-semibold">Active</p>
                  <p className="text-white/60 text-xs">Lifestyle</p>
                </div>
                <div className="glass rounded-lg p-3 text-center">
                  <TrendingUp className="w-5 h-5 text-[#00D8FF] mx-auto mb-1" />
                  <p className="text-white font-semibold">-5 lbs</p>
                  <p className="text-white/60 text-xs">This Month</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "goals" && (
            <div className="space-y-3 animate-in fade-in duration-200">
              {[
                { icon: Target, label: "Weight Goal", progress: 72, target: "Lose 15 lbs", color: "#FF36B9" },
                { icon: Dumbbell, label: "Fitness", progress: 85, target: "4x weekly", color: "#00D8FF" },
                { icon: Droplets, label: "Hydration", progress: 60, target: "8 glasses/day", color: "#6E00FF" }
              ].map((goal, i) => (
                <div key={i} className="glass rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <goal.icon className="w-4 h-4" style={{ color: goal.color }} />
                    <span className="text-white text-sm">{goal.label}</span>
                    <span className="ml-auto text-white/60 text-xs">{goal.target}</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-1000" 
                      style={{ width: `${goal.progress}%`, backgroundColor: goal.color }} 
                    />
                  </div>
                  <p className="text-right text-xs text-white/60 mt-1">{goal.progress}%</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "insights" && (
            <div className="space-y-3 animate-in fade-in duration-200">
              {[
                { text: "Your protein intake is optimal. Keep it up!", type: "success" },
                { text: "Consider adding 15 min morning walks to boost metabolism.", type: "tip" },
                { text: "Sleep quality improved 12% this week!", type: "success" }
              ].map((insight, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "glass rounded-lg p-3 border-l-2",
                    insight.type === "success" ? "border-l-green-400" : "border-l-[#00D8FF]"
                  )}
                >
                  <p className="text-white/80 text-sm">{insight.text}</p>
                </div>
              ))}
            </div>
          )}

          <Button 
            variant="ghost" 
            className="w-full text-white/70 hover:text-white"
            onClick={() => {
              setGenerated(false)
              setActiveTab("overview")
            }}
          >
            Reset Demo
          </Button>
        </div>
      )}
    </div>
  )
}

export function HowItWorksSection() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null)

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
            Experience the future of health monitoring with our advanced technology. See our AI in action.
          </p>
        </div>

        {/* Interactive Demo Sections */}
        <div className="max-w-6xl mx-auto">
          {demos.map((demo, index) => (
            <div 
              key={demo.id}
              className={cn(
                "grid lg:grid-cols-2 gap-8 items-center mb-16 pb-16 border-b border-white/10 last:border-0 last:mb-0 last:pb-0",
                index % 2 === 1 && "lg:flex-row-reverse"
              )}
            >
              {/* Content Side */}
              <div className={cn(index % 2 === 1 && "lg:order-2")}>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${demo.gradient} p-0.5 mb-6`}>
                  <div className="w-full h-full bg-[#0A0E17] rounded-2xl flex items-center justify-center">
                    <demo.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4">{demo.title}</h3>
                <p className="text-gray-400 text-lg mb-6 leading-relaxed">{demo.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {demo.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${demo.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => setActiveDemo(activeDemo === demo.id ? null : demo.id)}
                    className={cn(
                      `bg-gradient-to-r ${demo.gradient} hover:opacity-90 text-white border-0`,
                      activeDemo === demo.id && "ring-2 ring-white/30"
                    )}
                  >
                    {activeDemo === demo.id ? "Close Demo" : demo.buttonText}
                    <ArrowRight className={cn("ml-2 w-4 h-4 transition-transform", activeDemo === demo.id && "rotate-90")} />
                  </Button>
                  <Button variant="ghost" className="text-gray-400 hover:text-white">
                    {demo.learnMore} <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              {/* Demo Side */}
              <div className={cn(index % 2 === 1 && "lg:order-1", "min-h-[400px]")}>
                {activeDemo === demo.id ? (
                  <>
                    <ScannerDemo isActive={demo.id === "scanner"} />
                    <FoodRecognitionDemo isActive={demo.id === "recognition"} />
                    <PersonalizedHealthDemo isActive={demo.id === "personalized"} />
                  </>
                ) : (
                  <div className="glass rounded-2xl p-6 h-full flex flex-col items-center justify-center text-center">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${demo.gradient} p-0.5 mb-4`}>
                      <div className="w-full h-full bg-[#0A0E17] rounded-2xl flex items-center justify-center">
                        <demo.icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <p className="text-white/60 text-sm mb-4">Click "{demo.buttonText}" to see the interactive demo</p>
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-white/20 rounded-full animate-pulse" />
                      <div className="w-2 h-2 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: "200ms" }} />
                      <div className="w-2 h-2 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: "400ms" }} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Brain,
  Sparkles,
  Lightbulb,
  TrendingUp,
  Heart,
  Droplets,
  Moon,
  Utensils,
  Activity,
  Target,
  MessageSquare,
  Send,
  Loader2,
  ChevronRight,
  Zap,
} from "lucide-react"

const insights = [
  {
    id: 1,
    type: "nutrition",
    icon: Utensils,
    priority: "high",
    title: "Protein intake below target",
    description:
      "You've been averaging 62% of your daily protein goal this week. Consider adding more lean proteins like chicken, fish, or legumes to your meals.",
    action: "View meal suggestions",
    gradient: "from-[#00D8FF] to-blue-500",
  },
  {
    id: 2,
    type: "hydration",
    icon: Droplets,
    priority: "high",
    title: "Hydration needs attention",
    description:
      "Your water intake has dropped 25% compared to last week. Proper hydration improves energy, focus, and metabolism.",
    action: "Set water reminders",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: 3,
    type: "sleep",
    icon: Moon,
    priority: "medium",
    title: "Sleep consistency improving",
    description:
      "Great job! Your sleep schedule has become more consistent. Continue maintaining a regular bedtime for optimal recovery.",
    action: "View sleep analysis",
    gradient: "from-[#6E00FF] to-indigo-500",
  },
  {
    id: 4,
    type: "activity",
    icon: Activity,
    priority: "low",
    title: "Activity streak: 7 days",
    description:
      "You've maintained an active lifestyle for a week straight! Keep it up to build lasting healthy habits.",
    action: "Celebrate progress",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: 5,
    type: "weight",
    icon: TrendingUp,
    priority: "low",
    title: "Weight trend on track",
    description:
      "You're on pace to reach your goal weight of 160 lbs in approximately 6 weeks at your current rate.",
    action: "Adjust goal",
    gradient: "from-[#FF36B9] to-pink-500",
  },
]

const healthScore = {
  overall: 78,
  categories: [
    { name: "Nutrition", score: 72, icon: Utensils },
    { name: "Fitness", score: 85, icon: Activity },
    { name: "Sleep", score: 76, icon: Moon },
    { name: "Hydration", score: 68, icon: Droplets },
    { name: "Mental", score: 82, icon: Heart },
  ],
}

const suggestedGoals = [
  { title: "Drink 8 glasses of water daily", category: "Hydration", impact: "High" },
  { title: "Add 20g more protein per day", category: "Nutrition", impact: "High" },
  { title: "Walk 2,000 extra steps", category: "Fitness", impact: "Medium" },
  { title: "Sleep before 11 PM", category: "Sleep", impact: "Medium" },
]

const chatSuggestions = [
  "What should I eat for dinner tonight?",
  "How can I improve my sleep quality?",
  "Create a workout plan for this week",
  "Analyze my nutrition trends",
]

export default function InsightsPage() {
  const [chatMessage, setChatMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [chatHistory, setChatHistory] = useState<
    { role: "user" | "assistant"; content: string }[]
  >([
    {
      role: "assistant",
      content:
        "Hi Alex! I'm your AI health assistant. I've analyzed your recent data and have some personalized insights for you. How can I help you today?",
    },
  ])

  const handleSendMessage = () => {
    if (!chatMessage.trim()) return

    setChatHistory([...chatHistory, { role: "user", content: chatMessage }])
    setChatMessage("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      setIsTyping(false)
      setChatHistory((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Based on your current nutritional data, I recommend focusing on protein-rich foods today. Your morning showed a good start with oatmeal, but adding some eggs or Greek yogurt would help you reach your protein goals. For lunch, consider a grilled chicken salad with quinoa. Would you like me to suggest some specific recipes?",
        },
      ])
    }, 2000)
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      case "medium":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "low":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">AI Insights</h1>
          <p className="text-gray-400">
            Personalized recommendations powered by AI
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#00D8FF]" />
          <span className="text-sm text-gray-400">Updated 5 minutes ago</span>
        </div>
      </div>

      {/* Health Score Card */}
      <div className="glass rounded-2xl p-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Overall Score */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-40 h-40">
              {/* Background circle */}
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="12"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="none"
                  stroke="url(#scoreGradient)"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray={`${healthScore.overall * 4.4} 440`}
                />
                <defs>
                  <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6E00FF" />
                    <stop offset="100%" stopColor="#00D8FF" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-white">{healthScore.overall}</span>
                <span className="text-sm text-gray-400">Health Score</span>
              </div>
            </div>
            <p className="text-center text-gray-400 mt-4 max-w-xs">
              Your health score is <span className="text-white font-semibold">Good</span>. 
              Focus on hydration to improve further.
            </p>
          </div>

          {/* Category Scores */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {healthScore.categories.map((category, index) => (
              <div
                key={index}
                className="glass rounded-xl p-4 text-center hover:bg-white/10 transition-all"
              >
                <category.icon className="w-6 h-6 text-[#00D8FF] mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">{category.score}</div>
                <div className="text-xs text-gray-400">{category.name}</div>
                <div className="h-1 bg-white/10 rounded-full mt-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#6E00FF] to-[#00D8FF] rounded-full"
                    style={{ width: `${category.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* AI Chat */}
        <div className="lg:col-span-2 glass rounded-2xl flex flex-col h-[500px]">
          <div className="p-4 border-b border-white/10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6E00FF] to-[#00D8FF] flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-white">AI Health Assistant</h3>
              <p className="text-xs text-gray-400">Ask me anything about your health</p>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {chatHistory.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.role === "user"
                      ? "bg-gradient-to-r from-[#6E00FF] to-[#00D8FF] text-white"
                      : "glass text-gray-300"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="glass rounded-2xl px-4 py-3">
                  <Loader2 className="w-5 h-5 text-[#00D8FF] animate-spin" />
                </div>
              </div>
            )}
          </div>

          {/* Suggestions */}
          <div className="px-4 pb-2">
            <div className="flex flex-wrap gap-2">
              {chatSuggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => setChatMessage(suggestion)}
                  className="text-xs px-3 py-1.5 glass rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10">
            <div className="flex gap-2">
              <Textarea
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Ask about your health..."
                className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-gray-400 resize-none min-h-[44px] max-h-[120px]"
                rows={1}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    handleSendMessage()
                  }
                }}
              />
              <Button
                onClick={handleSendMessage}
                className="bg-gradient-to-r from-[#6E00FF] to-[#00D8FF] hover:opacity-90 text-white border-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Suggested Goals */}
        <div className="glass rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-6">
            <Target className="w-5 h-5 text-[#FF36B9]" />
            <h3 className="text-lg font-bold text-white">Suggested Goals</h3>
          </div>

          <div className="space-y-3">
            {suggestedGoals.map((goal, index) => (
              <div
                key={index}
                className="glass rounded-xl p-4 hover:bg-white/10 transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#6E00FF]/20 text-[#00D8FF]">
                    {goal.category}
                  </span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      goal.impact === "High"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {goal.impact} Impact
                  </span>
                </div>
                <p className="text-white font-medium mb-2">{goal.title}</p>
                <div className="flex items-center text-[#00D8FF] text-sm group-hover:translate-x-1 transition-transform">
                  <span>Set as goal</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Insights Grid */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <Lightbulb className="w-5 h-5 text-[#00D8FF]" />
          <h2 className="text-xl font-bold text-white">Personalized Insights</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {insights.map((insight) => (
            <div
              key={insight.id}
              className="glass rounded-xl p-5 hover:bg-white/10 transition-all cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${insight.gradient} p-0.5`}
                >
                  <div className="w-full h-full bg-[#0A0E17] rounded-xl flex items-center justify-center group-hover:bg-transparent transition-all">
                    <insight.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded-full border ${getPriorityColor(
                    insight.priority
                  )}`}
                >
                  {insight.priority}
                </span>
              </div>

              <h4 className="text-lg font-semibold text-white mb-2">{insight.title}</h4>
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {insight.description}
              </p>

              <Button
                variant="ghost"
                className="w-full justify-between text-[#00D8FF] hover:bg-[#00D8FF]/10 group-hover:translate-x-1 transition-all"
              >
                {insight.action}
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

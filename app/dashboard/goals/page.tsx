"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Target,
  Plus,
  Check,
  Flame,
  Droplets,
  Footprints,
  Scale,
  Moon,
  Activity,
  Trophy,
  Calendar,
  ChevronRight,
  Sparkles,
} from "lucide-react"

const activeGoals = [
  {
    id: 1,
    title: "Lose 10 pounds",
    category: "Weight",
    icon: Scale,
    current: 168.5,
    target: 160,
    unit: "lbs",
    progress: 65,
    startDate: "Jan 15, 2024",
    endDate: "Mar 15, 2024",
    gradient: "from-[#6E00FF] to-[#00D8FF]",
  },
  {
    id: 2,
    title: "Walk 10,000 steps daily",
    category: "Fitness",
    icon: Footprints,
    current: 8432,
    target: 10000,
    unit: "steps",
    progress: 84,
    startDate: "Daily",
    endDate: "Ongoing",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: 3,
    title: "Drink 8 glasses of water",
    category: "Hydration",
    icon: Droplets,
    current: 6,
    target: 8,
    unit: "glasses",
    progress: 75,
    startDate: "Daily",
    endDate: "Ongoing",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: 4,
    title: "Sleep 8 hours nightly",
    category: "Sleep",
    icon: Moon,
    current: 7.2,
    target: 8,
    unit: "hours",
    progress: 90,
    startDate: "Daily",
    endDate: "Ongoing",
    gradient: "from-[#6E00FF] to-indigo-500",
  },
  {
    id: 5,
    title: "Burn 2,100 calories daily",
    category: "Fitness",
    icon: Flame,
    current: 1800,
    target: 2100,
    unit: "kcal",
    progress: 86,
    startDate: "Daily",
    endDate: "Ongoing",
    gradient: "from-orange-500 to-red-500",
  },
]

const completedGoals = [
  {
    id: 6,
    title: "Complete 30-day workout challenge",
    category: "Fitness",
    icon: Activity,
    completedDate: "Jan 10, 2024",
  },
  {
    id: 7,
    title: "Log meals for 7 consecutive days",
    category: "Nutrition",
    icon: Flame,
    completedDate: "Jan 5, 2024",
  },
]

const achievements = [
  { title: "First Steps", description: "Walked 10,000 steps in a day", icon: Footprints, unlocked: true },
  { title: "Hydration Hero", description: "Met water goal for 7 days", icon: Droplets, unlocked: true },
  { title: "Early Bird", description: "Logged breakfast for 14 days", icon: Flame, unlocked: true },
  { title: "Weight Warrior", description: "Lost 5 pounds", icon: Scale, unlocked: true },
  { title: "Sleep Champion", description: "8+ hours for a week", icon: Moon, unlocked: false },
  { title: "Marathon Mode", description: "Walked 100,000 steps in a week", icon: Activity, unlocked: false },
]

const suggestedGoals = [
  { title: "Meditate for 10 minutes daily", category: "Mental", icon: Sparkles },
  { title: "Eat 5 servings of vegetables", category: "Nutrition", icon: Flame },
  { title: "Exercise for 30 minutes", category: "Fitness", icon: Activity },
]

export default function GoalsPage() {
  const [showAddGoal, setShowAddGoal] = useState(false)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Goals</h1>
          <p className="text-gray-400">Track your health goals and achievements</p>
        </div>

        <Button
          onClick={() => setShowAddGoal(true)}
          className="bg-gradient-to-r from-[#6E00FF] to-[#00D8FF] hover:opacity-90 text-white border-0"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Goal
        </Button>
      </div>

      {/* Progress Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="glass rounded-xl p-4 text-center">
          <div className="text-3xl font-bold text-white mb-1">{activeGoals.length}</div>
          <div className="text-sm text-gray-400">Active Goals</div>
        </div>
        <div className="glass rounded-xl p-4 text-center">
          <div className="text-3xl font-bold text-green-400 mb-1">{completedGoals.length}</div>
          <div className="text-sm text-gray-400">Completed</div>
        </div>
        <div className="glass rounded-xl p-4 text-center">
          <div className="text-3xl font-bold text-[#00D8FF] mb-1">
            {Math.round(activeGoals.reduce((sum, g) => sum + g.progress, 0) / activeGoals.length)}%
          </div>
          <div className="text-sm text-gray-400">Avg Progress</div>
        </div>
        <div className="glass rounded-xl p-4 text-center">
          <div className="text-3xl font-bold text-[#FF36B9] mb-1">
            {achievements.filter((a) => a.unlocked).length}/{achievements.length}
          </div>
          <div className="text-sm text-gray-400">Achievements</div>
        </div>
      </div>

      {/* Active Goals */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-[#00D8FF]" />
          Active Goals
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeGoals.map((goal) => (
            <div
              key={goal.id}
              className="glass rounded-xl p-5 hover:bg-white/10 transition-all cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${goal.gradient} p-0.5`}
                >
                  <div className="w-full h-full bg-[#0A0E17] rounded-xl flex items-center justify-center group-hover:bg-transparent transition-all">
                    <goal.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-[#6E00FF]/20 text-[#00D8FF]">
                  {goal.category}
                </span>
              </div>

              <h4 className="text-lg font-semibold text-white mb-2">{goal.title}</h4>

              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-2xl font-bold text-white">{goal.current}</span>
                <span className="text-gray-400">/ {goal.target} {goal.unit}</span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Progress</span>
                  <span className="text-white">{goal.progress}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${goal.gradient} rounded-full transition-all`}
                    style={{ width: `${goal.progress}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10 text-xs text-gray-400">
                <span>{goal.startDate}</span>
                <ChevronRight className="w-4 h-4" />
                <span>{goal.endDate}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Suggested Goals */}
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-[#FF36B9]" />
          <h3 className="text-lg font-bold text-white">AI Suggested Goals</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {suggestedGoals.map((goal, index) => (
            <div
              key={index}
              className="glass rounded-xl p-4 hover:bg-white/10 transition-all cursor-pointer group flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6E00FF]/30 to-[#00D8FF]/30 flex items-center justify-center">
                  <goal.icon className="w-5 h-5 text-[#00D8FF]" />
                </div>
                <div>
                  <p className="text-white font-medium">{goal.title}</p>
                  <p className="text-xs text-gray-400">{goal.category}</p>
                </div>
              </div>
              <Button size="sm" variant="ghost" className="text-[#00D8FF]">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Trophy className="w-5 h-5 text-yellow-400" />
          Achievements
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`glass rounded-xl p-4 text-center transition-all ${
                achievement.unlocked
                  ? "hover:bg-white/10 cursor-pointer"
                  : "opacity-50"
              }`}
            >
              <div
                className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3 ${
                  achievement.unlocked
                    ? "bg-gradient-to-br from-yellow-500 to-orange-500"
                    : "bg-white/10"
                }`}
              >
                <achievement.icon
                  className={`w-8 h-8 ${
                    achievement.unlocked ? "text-white" : "text-gray-500"
                  }`}
                />
              </div>
              <h4 className="font-semibold text-white text-sm mb-1">
                {achievement.title}
              </h4>
              <p className="text-xs text-gray-400">{achievement.description}</p>
              {achievement.unlocked && (
                <div className="mt-2">
                  <Check className="w-4 h-4 text-green-400 mx-auto" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Completed Goals */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Check className="w-5 h-5 text-green-400" />
          Completed Goals
        </h2>

        <div className="space-y-3">
          {completedGoals.map((goal) => (
            <div
              key={goal.id}
              className="glass rounded-xl p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <goal.icon className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{goal.title}</h4>
                  <p className="text-sm text-gray-400">{goal.category}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>{goal.completedDate}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

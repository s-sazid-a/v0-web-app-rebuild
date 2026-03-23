"use client"

import { Target, Check } from "lucide-react"

const goals = [
  { label: "Drink 8 glasses of water", completed: 6, total: 8, done: false },
  { label: "Walk 10,000 steps", completed: 8432, total: 10000, done: false },
  { label: "Log all meals", completed: 3, total: 3, done: true },
  { label: "30 min exercise", completed: 30, total: 30, done: true },
]

export function QuickGoalsCard() {
  return (
    <div className="glass rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-white">Today&apos;s Goals</h3>
        <Target className="w-5 h-5 text-[#00D8FF]" />
      </div>

      <div className="space-y-3">
        {goals.map((goal, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-all"
          >
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                goal.done
                  ? "bg-gradient-to-r from-[#6E00FF] to-[#00D8FF]"
                  : "border border-white/20"
              }`}
            >
              {goal.done && <Check className="w-4 h-4 text-white" />}
            </div>
            <div className="flex-1 min-w-0">
              <p
                className={`text-sm truncate ${
                  goal.done ? "text-gray-400 line-through" : "text-white"
                }`}
              >
                {goal.label}
              </p>
            </div>
            <span className="text-xs text-gray-400">
              {goal.completed}/{goal.total}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-white/10">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">Daily Progress</span>
          <span className="text-sm font-semibold text-white">
            {goals.filter((g) => g.done).length}/{goals.length} completed
          </span>
        </div>
        <div className="h-2 bg-white/10 rounded-full overflow-hidden mt-2">
          <div
            className="h-full bg-gradient-to-r from-[#6E00FF] to-[#00D8FF] rounded-full"
            style={{
              width: `${(goals.filter((g) => g.done).length / goals.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  )
}

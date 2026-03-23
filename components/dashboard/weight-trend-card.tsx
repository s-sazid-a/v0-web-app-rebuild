"use client"

import { TrendingDown, Scale } from "lucide-react"

export function WeightTrendCard() {
  return (
    <div className="glass rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-white">Weight Trend</h3>
        <Scale className="w-5 h-5 text-[#FF36B9]" />
      </div>

      <div className="flex items-end gap-4 mb-4">
        <div>
          <div className="text-3xl font-bold text-white">168.5</div>
          <div className="text-sm text-gray-400">lbs</div>
        </div>
        <div className="flex items-center gap-1 text-green-400 text-sm pb-1">
          <TrendingDown className="w-4 h-4" />
          <span>-2.3 lbs</span>
        </div>
      </div>

      {/* Mini chart */}
      <div className="h-16 flex items-end gap-1">
        {[72, 85, 65, 78, 90, 70, 60].map((height, index) => (
          <div
            key={index}
            className="flex-1 bg-gradient-to-t from-[#6E00FF] to-[#00D8FF] rounded-t opacity-60 hover:opacity-100 transition-opacity"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>

      <div className="flex justify-between text-xs text-gray-400 mt-2">
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
        <span>Sun</span>
      </div>

      <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
        <span className="text-sm text-gray-400">Goal Weight</span>
        <span className="text-sm font-semibold text-white">160 lbs</span>
      </div>
    </div>
  )
}

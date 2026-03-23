"use client"

import { LucideIcon } from "lucide-react"

interface StatsCardProps {
  title: string
  value: string
  target: string
  unit: string
  progress: number
  icon: LucideIcon
  gradient: string
}

export function StatsCard({
  title,
  value,
  target,
  unit,
  progress,
  icon: Icon,
  gradient,
}: StatsCardProps) {
  return (
    <div className="glass rounded-2xl p-6 hover:bg-white/10 transition-all group">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-gray-400 text-sm mb-1">{title}</p>
          <p className="text-2xl font-bold text-white">
            {value}
            <span className="text-gray-400 text-sm font-normal ml-1">
              / {target} {unit}
            </span>
          </p>
        </div>
        <div
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} p-0.5`}
        >
          <div className="w-full h-full bg-[#0A0E17] rounded-xl flex items-center justify-center group-hover:bg-transparent transition-all">
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="space-y-2">
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${gradient} rounded-full transition-all duration-500`}
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-gray-400">{progress}% completed</span>
          <span className="text-gray-400">
            {Math.round((parseInt(target) - parseInt(value.replace(/,/g, ""))) * 10) / 10} {unit} left
          </span>
        </div>
      </div>
    </div>
  )
}

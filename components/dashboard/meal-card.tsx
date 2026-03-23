"use client"

import { Clock, Flame } from "lucide-react"

interface MealCardProps {
  type: string
  name: string
  time: string
  calories: number
  protein: number
  carbs: number
  fat: number
}

export function MealCard({
  type,
  name,
  time,
  calories,
  protein,
  carbs,
  fat,
}: MealCardProps) {
  return (
    <div className="glass rounded-xl p-4 hover:bg-white/10 transition-all cursor-pointer group">
      <div className="flex items-start gap-4">
        {/* Meal type icon/image placeholder */}
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#6E00FF]/30 to-[#00D8FF]/30 flex items-center justify-center flex-shrink-0">
          <Flame className="w-8 h-8 text-[#FF36B9]" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#6E00FF]/20 text-[#00D8FF] font-medium">
              {type}
            </span>
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {time}
            </span>
          </div>

          <h4 className="font-semibold text-white mb-2 truncate">{name}</h4>

          {/* Macros */}
          <div className="grid grid-cols-4 gap-2">
            <div className="text-center">
              <div className="text-sm font-semibold text-white">{calories}</div>
              <div className="text-xs text-gray-400">kcal</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-[#00D8FF]">{protein}g</div>
              <div className="text-xs text-gray-400">protein</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-[#6E00FF]">{carbs}g</div>
              <div className="text-xs text-gray-400">carbs</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-[#FF36B9]">{fat}g</div>
              <div className="text-xs text-gray-400">fat</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

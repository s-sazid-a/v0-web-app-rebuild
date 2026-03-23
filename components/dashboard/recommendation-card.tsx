"use client"

import { LucideIcon, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface RecommendationCardProps {
  priority: "high" | "medium" | "low"
  title: string
  description: string
  action: string
  icon: LucideIcon
}

const priorityStyles = {
  high: {
    border: "border-red-500/30",
    bg: "bg-red-500/10",
    badge: "bg-red-500/20 text-red-400",
    icon: "text-red-400",
  },
  medium: {
    border: "border-yellow-500/30",
    bg: "bg-yellow-500/10",
    badge: "bg-yellow-500/20 text-yellow-400",
    icon: "text-yellow-400",
  },
  low: {
    border: "border-green-500/30",
    bg: "bg-green-500/10",
    badge: "bg-green-500/20 text-green-400",
    icon: "text-green-400",
  },
}

export function RecommendationCard({
  priority,
  title,
  description,
  action,
  icon: Icon,
}: RecommendationCardProps) {
  const styles = priorityStyles[priority]

  return (
    <div
      className={cn(
        "glass rounded-xl p-4 border hover:bg-white/10 transition-all cursor-pointer group",
        styles.border
      )}
    >
      <div className="flex items-start gap-3">
        <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0", styles.bg)}>
          <Icon className={cn("w-5 h-5", styles.icon)} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className={cn("text-xs px-2 py-0.5 rounded-full font-medium capitalize", styles.badge)}>
              {priority}
            </span>
          </div>
          <h4 className="font-semibold text-white mb-1 truncate">{title}</h4>
          <p className="text-sm text-gray-400 line-clamp-2">{description}</p>
        </div>
      </div>

      <Button
        variant="ghost"
        size="sm"
        className="w-full mt-3 text-[#00D8FF] hover:bg-[#00D8FF]/10 group-hover:translate-x-1 transition-all"
      >
        {action}
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  )
}

"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Heart,
  LayoutDashboard,
  Utensils,
  Activity,
  Target,
  Brain,
  User,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const navigation = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: Utensils, label: "Meals", path: "/dashboard/meals" },
  { icon: Activity, label: "Health Metrics", path: "/dashboard/metrics" },
  { icon: Target, label: "Goals", path: "/dashboard/goals" },
  { icon: Brain, label: "AI Insights", path: "/dashboard/insights" },
  { icon: User, label: "Profile", path: "/dashboard/profile" },
]

const bottomNav = [
  { icon: Settings, label: "Settings", path: "/dashboard/settings" },
]

export function DashboardSidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 h-screen glass border-r border-white/10 flex flex-col transition-all duration-300 z-40",
        collapsed ? "w-20" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="p-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6E00FF] to-[#00D8FF] flex items-center justify-center flex-shrink-0">
            <Heart className="w-5 h-5 text-white" />
          </div>
          {!collapsed && (
            <span className="text-lg font-bold text-white">
              H<span className="text-[#FF36B9]">H</span>
              <span className="text-[#00D8FF]">AI</span>
            </span>
          )}
        </Link>
      </div>

      {/* Collapse button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute -right-3 top-20 w-6 h-6 rounded-full glass border border-white/10 text-gray-400 hover:text-white"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? (
          <ChevronRight className="w-4 h-4" />
        ) : (
          <ChevronLeft className="w-4 h-4" />
        )}
      </Button>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.path
          return (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all group",
                isActive
                  ? "bg-gradient-to-r from-[#6E00FF]/20 to-[#00D8FF]/20 text-white"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              )}
            >
              <item.icon
                className={cn(
                  "w-5 h-5 flex-shrink-0 transition-colors",
                  isActive ? "text-[#00D8FF]" : "group-hover:text-[#6E00FF]"
                )}
              />
              {!collapsed && <span className="font-medium">{item.label}</span>}
            </Link>
          )
        })}
      </nav>

      {/* Bottom Navigation */}
      <div className="px-3 py-4 border-t border-white/10">
        {bottomNav.map((item) => {
          const isActive = pathname === item.path
          return (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all group",
                isActive
                  ? "bg-gradient-to-r from-[#6E00FF]/20 to-[#00D8FF]/20 text-white"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              )}
            >
              <item.icon className="w-5 h-5 flex-shrink-0 group-hover:text-[#6E00FF]" />
              {!collapsed && <span className="font-medium">{item.label}</span>}
            </Link>
          )
        })}

        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-all group mt-2"
        >
          <LogOut className="w-5 h-5 flex-shrink-0" />
          {!collapsed && <span className="font-medium">Log Out</span>}
        </Link>
      </div>

      {/* User Profile */}
      {!collapsed && (
        <div className="p-4 mx-3 mb-4 glass rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6E00FF] to-[#FF36B9] flex items-center justify-center text-white font-semibold">
              AJ
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-white truncate">Alex Johnson</div>
              <div className="text-xs text-gray-400 truncate">Pro Member</div>
            </div>
          </div>
        </div>
      )}
    </aside>
  )
}

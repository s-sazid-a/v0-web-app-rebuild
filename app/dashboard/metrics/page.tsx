"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Activity,
  Heart,
  Scale,
  Moon,
  Droplets,
  Footprints,
  TrendingUp,
  TrendingDown,
  Minus,
  Calendar,
} from "lucide-react"
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

const weightData = [
  { day: "Mon", weight: 171 },
  { day: "Tue", weight: 170.5 },
  { day: "Wed", weight: 170 },
  { day: "Thu", weight: 169.5 },
  { day: "Fri", weight: 169.2 },
  { day: "Sat", weight: 169 },
  { day: "Sun", weight: 168.5 },
]

const caloriesData = [
  { day: "Mon", consumed: 1850, burned: 2100 },
  { day: "Tue", consumed: 2100, burned: 2200 },
  { day: "Wed", consumed: 1900, burned: 1950 },
  { day: "Thu", consumed: 2200, burned: 2400 },
  { day: "Fri", consumed: 1800, burned: 2100 },
  { day: "Sat", consumed: 2300, burned: 2000 },
  { day: "Sun", consumed: 1480, burned: 1800 },
]

const stepsData = [
  { day: "Mon", steps: 8200 },
  { day: "Tue", steps: 10500 },
  { day: "Wed", steps: 7800 },
  { day: "Thu", steps: 12000 },
  { day: "Fri", steps: 9500 },
  { day: "Sat", steps: 11200 },
  { day: "Sun", steps: 8432 },
]

const sleepData = [
  { day: "Mon", hours: 7.5 },
  { day: "Tue", hours: 6.5 },
  { day: "Wed", hours: 8 },
  { day: "Thu", hours: 7 },
  { day: "Fri", hours: 6 },
  { day: "Sat", hours: 8.5 },
  { day: "Sun", hours: 7.2 },
]

const macrosData = [
  { name: "Protein", value: 75, color: "#00D8FF" },
  { name: "Carbs", value: 94, color: "#6E00FF" },
  { name: "Fat", value: 34, color: "#FF36B9" },
]

const metricCards = [
  {
    title: "Weight",
    value: "168.5",
    unit: "lbs",
    change: -2.5,
    icon: Scale,
    gradient: "from-[#6E00FF] to-[#00D8FF]",
  },
  {
    title: "Heart Rate",
    value: "72",
    unit: "bpm",
    change: 0,
    icon: Heart,
    gradient: "from-[#FF36B9] to-[#6E00FF]",
  },
  {
    title: "Sleep",
    value: "7.2",
    unit: "hours",
    change: 0.5,
    icon: Moon,
    gradient: "from-[#00D8FF] to-[#6E00FF]",
  },
  {
    title: "Hydration",
    value: "6",
    unit: "glasses",
    change: -2,
    icon: Droplets,
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Steps",
    value: "8,432",
    unit: "steps",
    change: 1200,
    icon: Footprints,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Activity",
    value: "45",
    unit: "min",
    change: 15,
    icon: Activity,
    gradient: "from-orange-500 to-red-500",
  },
]

const timeRanges = ["Today", "Week", "Month", "Year"]

export default function MetricsPage() {
  const [selectedRange, setSelectedRange] = useState("Week")

  const getTrendIcon = (change: number) => {
    if (change > 0) return <TrendingUp className="w-4 h-4 text-green-400" />
    if (change < 0) return <TrendingDown className="w-4 h-4 text-red-400" />
    return <Minus className="w-4 h-4 text-gray-400" />
  }

  const getTrendColor = (change: number) => {
    if (change > 0) return "text-green-400"
    if (change < 0) return "text-red-400"
    return "text-gray-400"
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Health Metrics</h1>
          <p className="text-gray-400">
            Track and analyze your health data over time
          </p>
        </div>

        <div className="flex items-center gap-2">
          {timeRanges.map((range) => (
            <Button
              key={range}
              variant={selectedRange === range ? "default" : "ghost"}
              size="sm"
              onClick={() => setSelectedRange(range)}
              className={
                selectedRange === range
                  ? "bg-gradient-to-r from-[#6E00FF] to-[#00D8FF] text-white border-0"
                  : "text-gray-400 hover:text-white hover:bg-white/10"
              }
            >
              {range}
            </Button>
          ))}
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {metricCards.map((metric, index) => (
          <div key={index} className="glass rounded-xl p-4 hover:bg-white/10 transition-all">
            <div className="flex items-center justify-between mb-3">
              <div
                className={`w-10 h-10 rounded-lg bg-gradient-to-br ${metric.gradient} p-0.5`}
              >
                <div className="w-full h-full bg-[#0A0E17] rounded-lg flex items-center justify-center">
                  <metric.icon className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className={`flex items-center gap-1 ${getTrendColor(metric.change)}`}>
                {getTrendIcon(metric.change)}
                <span className="text-xs">
                  {metric.change > 0 ? "+" : ""}
                  {metric.change}
                </span>
              </div>
            </div>
            <div className="text-2xl font-bold text-white">{metric.value}</div>
            <div className="text-xs text-gray-400">{metric.unit}</div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Weight Chart */}
        <div className="glass rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-white">Weight Trend</h3>
              <p className="text-sm text-gray-400">Last 7 days</p>
            </div>
            <Scale className="w-5 h-5 text-[#00D8FF]" />
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={weightData}>
                <defs>
                  <linearGradient id="weightGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6E00FF" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#6E00FF" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="day" stroke="#9CA3AF" />
                <YAxis domain={["dataMin - 1", "dataMax + 1"]} stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0A0E17",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "8px",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="weight"
                  stroke="#6E00FF"
                  strokeWidth={2}
                  fill="url(#weightGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Calories Chart */}
        <div className="glass rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-white">Calories In vs Out</h3>
              <p className="text-sm text-gray-400">Daily balance</p>
            </div>
            <Activity className="w-5 h-5 text-[#FF36B9]" />
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={caloriesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="day" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0A0E17",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="consumed" fill="#6E00FF" radius={[4, 4, 0, 0]} />
                <Bar dataKey="burned" fill="#00D8FF" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-[#6E00FF]" />
              <span className="text-sm text-gray-400">Consumed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-[#00D8FF]" />
              <span className="text-sm text-gray-400">Burned</span>
            </div>
          </div>
        </div>

        {/* Steps Chart */}
        <div className="glass rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-white">Daily Steps</h3>
              <p className="text-sm text-gray-400">Goal: 10,000 steps</p>
            </div>
            <Footprints className="w-5 h-5 text-green-400" />
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stepsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="day" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0A0E17",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "8px",
                  }}
                />
                <Bar
                  dataKey="steps"
                  fill="#10B981"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Macros Breakdown */}
        <div className="glass rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-white">Macros Breakdown</h3>
              <p className="text-sm text-gray-400">Today&apos;s distribution</p>
            </div>
            <Calendar className="w-5 h-5 text-[#6E00FF]" />
          </div>
          <div className="h-64 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={macrosData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {macrosData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0A0E17",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "8px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-6">
            {macrosData.map((macro, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded"
                  style={{ backgroundColor: macro.color }}
                />
                <span className="text-sm text-gray-400">
                  {macro.name}: {macro.value}g
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Sleep Chart */}
        <div className="glass rounded-2xl p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-white">Sleep Pattern</h3>
              <p className="text-sm text-gray-400">Hours of sleep per night</p>
            </div>
            <Moon className="w-5 h-5 text-[#00D8FF]" />
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sleepData}>
                <defs>
                  <linearGradient id="sleepGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00D8FF" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#00D8FF" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="day" stroke="#9CA3AF" />
                <YAxis domain={[0, 10]} stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0A0E17",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "8px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="hours"
                  stroke="#00D8FF"
                  strokeWidth={3}
                  dot={{ fill: "#00D8FF", strokeWidth: 0 }}
                  activeDot={{ r: 8, fill: "#00D8FF" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

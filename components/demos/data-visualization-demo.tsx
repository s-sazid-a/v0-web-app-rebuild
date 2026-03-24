"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  PieChart, Pie, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer, Cell, Area, AreaChart, ReferenceLine 
} from "recharts"
import { 
  Activity, Heart, Utensils, Dumbbell, TrendingUp, 
  Zap, Flame, Coffee, Battery, BarChart2, PieChart as PieChartIcon,
  ArrowRight, ArrowUp, ArrowDown, Award
} from "lucide-react"

interface DataVisualizationDemoProps {
  isOpen: boolean
  onClose: () => void
}

const calorieData = [
  { day: "Mon", intake: 2100, burned: 2300, goal: 2000 },
  { day: "Tue", intake: 1950, burned: 2100, goal: 2000 },
  { day: "Wed", intake: 2200, burned: 2000, goal: 2000 },
  { day: "Thu", intake: 1800, burned: 2200, goal: 2000 },
  { day: "Fri", intake: 2300, burned: 2400, goal: 2000 },
  { day: "Sat", intake: 2500, burned: 2200, goal: 2000 },
  { day: "Sun", intake: 1900, burned: 1800, goal: 2000 },
]

const macroData = [
  { name: "Protein", value: 85, goal: 100, unit: "g" },
  { name: "Carbs", value: 210, goal: 250, unit: "g" },
  { name: "Fat", value: 60, goal: 65, unit: "g" },
  { name: "Fiber", value: 22, goal: 30, unit: "g" },
]

const nutrientData = [
  { name: "Vitamin A", value: 85 },
  { name: "Vitamin C", value: 92 },
  { name: "Calcium", value: 70 },
  { name: "Iron", value: 65 },
  { name: "Vitamin D", value: 55 },
  { name: "Potassium", value: 75 },
]

const sleepData = [
  { day: "Mon", hours: 7.2, quality: 85 },
  { day: "Tue", hours: 6.8, quality: 70 },
  { day: "Wed", hours: 7.5, quality: 90 },
  { day: "Thu", hours: 8.1, quality: 95 },
  { day: "Fri", hours: 6.5, quality: 65 },
  { day: "Sat", hours: 8.5, quality: 90 },
  { day: "Sun", hours: 7.9, quality: 85 },
]

const activityData = [
  { day: "Mon", steps: 8500, cardio: 25, strength: 30 },
  { day: "Tue", steps: 10200, cardio: 45, strength: 0 },
  { day: "Wed", steps: 7800, cardio: 0, strength: 45 },
  { day: "Thu", steps: 9300, cardio: 35, strength: 20 },
  { day: "Fri", steps: 11500, cardio: 40, strength: 0 },
  { day: "Sat", steps: 6500, cardio: 60, strength: 50 },
  { day: "Sun", steps: 4200, cardio: 0, strength: 0 },
]

const COLORS = ["#FF4D4D", "#4D79FF", "#4DFFA6", "#FFD74D", "#A64DFF"]

export function DataVisualizationDemo({ isOpen, onClose }: DataVisualizationDemoProps) {
  const [activeTab, setActiveTab] = useState("nutrition")
  
  const calculateCalorieBalance = () => {
    const today = calorieData[calorieData.length - 1]
    return today.burned - today.intake
  }

  const getProgressColor = (value: number, goal: number) => {
    const percentage = (value / goal) * 100
    if (percentage >= 90) return "bg-green-500"
    if (percentage >= 70) return "bg-yellow-500"
    return "bg-red-500"
  }

  const renderNutritionTab = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Calorie Overview Card */}
      <Card className="col-span-1 md:col-span-2 bg-white/5 border-white/10 shadow-lg">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg text-white flex items-center">
              <Flame className="mr-2 h-5 w-5 text-[#FF36B9]" />
              Calorie Balance
            </CardTitle>
            <Badge variant="outline" className={`${calculateCalorieBalance() > 0 ? "bg-green-500/20 text-green-400 border-green-500/30" : "bg-red-500/20 text-red-400 border-red-500/30"}`}>
              {calculateCalorieBalance() > 0 ? (
                <span className="flex items-center"><ArrowDown className="h-3 w-3 mr-1" /> Deficit</span>
              ) : (
                <span className="flex items-center"><ArrowUp className="h-3 w-3 mr-1" /> Surplus</span>
              )}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={180}>
            <AreaChart data={calorieData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorIntake" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF4D4D" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#FF4D4D" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorBurned" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4D79FF" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#4D79FF" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="day" stroke="#888" tick={{ fontSize: 12 }} />
              <YAxis stroke="#888" tick={{ fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "rgba(10, 14, 23, 0.95)", 
                  borderColor: "rgba(255, 255, 255, 0.1)", 
                  color: "#fff",
                  borderRadius: "8px"
                }} 
              />
              <Legend />
              <Area type="monotone" dataKey="intake" stroke="#FF4D4D" fillOpacity={1} fill="url(#colorIntake)" name="Calories In" />
              <Area type="monotone" dataKey="burned" stroke="#4D79FF" fillOpacity={1} fill="url(#colorBurned)" name="Calories Out" />
              <Line type="monotone" dataKey="goal" stroke="#A64DFF" strokeWidth={2} dot={false} name="Calorie Goal" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
        <CardFooter className="flex justify-between text-sm pt-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-bold text-white">Week Avg:</span> 
            <Badge variant="outline" className="bg-white/5 border-white/10 text-gray-300">
              {Math.round(calorieData.reduce((acc, day) => acc + day.intake, 0) / calorieData.length)} in
            </Badge>
            <Badge variant="outline" className="bg-white/5 border-white/10 text-gray-300">
              {Math.round(calorieData.reduce((acc, day) => acc + day.burned, 0) / calorieData.length)} out
            </Badge>
          </div>
        </CardFooter>
      </Card>
      
      {/* Macronutrients Card */}
      <Card className="bg-white/5 border-white/10 shadow-lg">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg text-white flex items-center">
            <PieChartIcon className="mr-2 h-5 w-5 text-[#6E00FF]" />
            Macronutrients
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center">
            <ResponsiveContainer width="100%" height={150}>
              <PieChart>
                <Pie
                  data={macroData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={60}
                  fill="#8884d8"
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}g`}
                  labelLine={false}
                >
                  {macroData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value, name) => [`${value}g`, name]}
                  contentStyle={{ 
                    backgroundColor: "rgba(10, 14, 23, 0.95)", 
                    borderColor: "rgba(255, 255, 255, 0.1)", 
                    color: "#fff",
                    borderRadius: "8px"
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-2 space-y-2">
            {macroData.map((macro, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="flex items-center text-gray-300">
                    <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                    {macro.name}
                  </span>
                  <span className="text-gray-400">{macro.value}/{macro.goal} {macro.unit}</span>
                </div>
                <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${getProgressColor(macro.value, macro.goal)}`} 
                    style={{ width: `${Math.min(100, (macro.value / macro.goal) * 100)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* Vitamins & Minerals Card */}
      <Card className="bg-white/5 border-white/10 shadow-lg">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg text-white flex items-center">
            <Zap className="mr-2 h-5 w-5 text-[#00D8FF]" />
            Vitamins & Minerals
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart
              layout="vertical"
              data={nutrientData}
              margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis type="number" domain={[0, 100]} stroke="#888" tick={{ fontSize: 10 }} />
              <YAxis dataKey="name" type="category" stroke="#888" tick={{ fontSize: 10 }} width={60} />
              <Tooltip
                formatter={(value) => [`${value}%`, "Daily Value"]}
                contentStyle={{ 
                  backgroundColor: "rgba(10, 14, 23, 0.95)", 
                  borderColor: "rgba(255, 255, 255, 0.1)", 
                  color: "#fff",
                  borderRadius: "8px"
                }}
              />
              <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                {nutrientData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
              <ReferenceLine x={100} stroke="#A64DFF" strokeDasharray="3 3" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )

  const renderActivityTab = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Steps & Activity Overview */}
      <Card className="col-span-1 md:col-span-2 bg-white/5 border-white/10 shadow-lg">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg text-white flex items-center">
              <Activity className="mr-2 h-5 w-5 text-[#6E00FF]" />
              Weekly Activity Overview
            </CardTitle>
            <Badge variant="outline" className="bg-white/5 border-white/10 text-gray-300">
              {activityData.reduce((acc, day) => acc + day.steps, 0).toLocaleString()} steps
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={activityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="day" stroke="#888" tick={{ fontSize: 12 }} />
              <YAxis yAxisId="left" orientation="left" stroke="#888" tick={{ fontSize: 10 }} />
              <YAxis yAxisId="right" orientation="right" stroke="#888" tick={{ fontSize: 10 }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "rgba(10, 14, 23, 0.95)", 
                  borderColor: "rgba(255, 255, 255, 0.1)", 
                  color: "#fff",
                  borderRadius: "8px"
                }} 
              />
              <Legend />
              <Bar yAxisId="left" dataKey="steps" fill="#4D79FF" name="Steps" />
              <Bar yAxisId="right" dataKey="cardio" stackId="a" fill="#FF4D4D" name="Cardio (min)" />
              <Bar yAxisId="right" dataKey="strength" stackId="a" fill="#4DFFA6" name="Strength (min)" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
        <CardFooter className="flex justify-between text-sm pt-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-bold text-white">Daily Avg:</span>
            <Badge variant="outline" className="bg-white/5 border-white/10 text-gray-300">
              {Math.round(activityData.reduce((acc, day) => acc + day.steps, 0) / activityData.length)} steps
            </Badge>
            <Badge variant="outline" className="bg-white/5 border-white/10 text-gray-300">
              {Math.round(activityData.reduce((acc, day) => acc + day.cardio, 0) / activityData.length)} min cardio
            </Badge>
          </div>
        </CardFooter>
      </Card>
      
      {/* Sleep Quality Card */}
      <Card className="bg-white/5 border-white/10 shadow-lg">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg text-white flex items-center">
            <Battery className="mr-2 h-5 w-5 text-[#FF36B9]" />
            Sleep Quality
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={160}>
            <LineChart
              data={sleepData}
              margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="day" stroke="#888" tick={{ fontSize: 10 }} />
              <YAxis yAxisId="left" stroke="#FF4D4D" tick={{ fontSize: 10 }} />
              <YAxis yAxisId="right" orientation="right" stroke="#4D79FF" tick={{ fontSize: 10 }} />
              <Tooltip
                contentStyle={{ 
                  backgroundColor: "rgba(10, 14, 23, 0.95)", 
                  borderColor: "rgba(255, 255, 255, 0.1)", 
                  color: "#fff",
                  borderRadius: "8px"
                }}
              />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="hours" stroke="#FF4D4D" strokeWidth={2} activeDot={{ r: 6 }} name="Hours" />
              <Line yAxisId="right" type="monotone" dataKey="quality" stroke="#4D79FF" strokeWidth={2} name="Quality %" />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-3 flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-400">Avg Sleep</p>
              <h4 className="text-xl font-bold text-white">{(sleepData.reduce((acc, day) => acc + day.hours, 0) / sleepData.length).toFixed(1)} hrs</h4>
            </div>
            <div>
              <p className="text-xs text-gray-400">Avg Quality</p>
              <h4 className="text-xl font-bold text-white">{Math.round(sleepData.reduce((acc, day) => acc + day.quality, 0) / sleepData.length)}%</h4>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* AI Recommendations */}
      <Card className="bg-white/5 border-white/10 shadow-lg">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg text-white flex items-center">
            <Award className="mr-2 h-5 w-5 text-[#00D8FF]" />
            AI Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start p-2 bg-gradient-to-r from-[#6E00FF]/10 to-transparent rounded-lg">
              <div className="rounded-full bg-[#6E00FF]/20 p-1.5 mr-2 flex-shrink-0">
                <Heart className="h-4 w-4 text-[#6E00FF]" />
              </div>
              <div>
                <p className="font-medium text-white text-sm">Add more protein</p>
                <p className="text-xs text-gray-400">You're under your protein target</p>
              </div>
            </div>
            
            <div className="flex items-start p-2 bg-gradient-to-r from-yellow-500/10 to-transparent rounded-lg">
              <div className="rounded-full bg-yellow-500/20 p-1.5 mr-2 flex-shrink-0">
                <Coffee className="h-4 w-4 text-yellow-500" />
              </div>
              <div>
                <p className="font-medium text-white text-sm">Hydration alert</p>
                <p className="text-xs text-gray-400">Water intake below recommended</p>
              </div>
            </div>
            
            <div className="flex items-start p-2 bg-gradient-to-r from-green-500/10 to-transparent rounded-lg">
              <div className="rounded-full bg-green-500/20 p-1.5 mr-2 flex-shrink-0">
                <Battery className="h-4 w-4 text-green-500" />
              </div>
              <div>
                <p className="font-medium text-white text-sm">Improve sleep</p>
                <p className="text-xs text-gray-400">Schedule varies too much</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-auto p-0 bg-[#0A0E17]/95 backdrop-blur-xl border-white/10">
        <div className="p-6">
          <DialogHeader className="pb-2">
            <DialogTitle className="text-2xl font-bold">
              <span className="gradient-text flex items-center gap-2">
                <BarChart2 className="w-6 h-6" />
                Health & Nutrition Dashboard
              </span>
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              Your personalized health analytics and insights powered by AI
            </DialogDescription>
          </DialogHeader>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">
            <TabsList className="grid grid-cols-2 mb-4 bg-white/5">
              <TabsTrigger value="nutrition" className="flex items-center data-[state=active]:bg-white/10">
                <Utensils className="mr-2 h-4 w-4" />
                Nutrition
              </TabsTrigger>
              <TabsTrigger value="activity" className="flex items-center data-[state=active]:bg-white/10">
                <Dumbbell className="mr-2 h-4 w-4" />
                Activity
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="nutrition">
              {renderNutritionTab()}
            </TabsContent>
            
            <TabsContent value="activity">
              {renderActivityTab()}
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  )
}

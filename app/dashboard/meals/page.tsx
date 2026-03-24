"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Camera,
  Barcode,
  Plus,
  Search,
  Filter,
  Flame,
  Clock,
  Sparkles,
  X,
  Check,
  Loader2,
} from "lucide-react"
import { MealCard } from "@/components/dashboard/meal-card"

const mealHistory = [
  {
    id: 1,
    type: "Breakfast",
    name: "Oatmeal with berries and honey",
    time: "8:30 AM",
    calories: 320,
    protein: 12,
    carbs: 54,
    fat: 8,
    date: "Today",
  },
  {
    id: 2,
    type: "Lunch",
    name: "Grilled chicken salad",
    time: "12:45 PM",
    calories: 450,
    protein: 38,
    carbs: 22,
    fat: 18,
    date: "Today",
  },
  {
    id: 3,
    type: "Snack",
    name: "Greek yogurt with almonds",
    time: "3:30 PM",
    calories: 210,
    protein: 15,
    carbs: 18,
    fat: 8,
    date: "Today",
  },
  {
    id: 4,
    type: "Dinner",
    name: "Salmon with vegetables",
    time: "7:00 PM",
    calories: 520,
    protein: 42,
    carbs: 28,
    fat: 24,
    date: "Yesterday",
  },
  {
    id: 5,
    type: "Breakfast",
    name: "Avocado toast with eggs",
    time: "9:00 AM",
    calories: 380,
    protein: 18,
    carbs: 32,
    fat: 22,
    date: "Yesterday",
  },
]

const suggestedMeals = [
  { name: "Apple", calories: 95, emoji: "🍎" },
  { name: "Banana", calories: 105, emoji: "🍌" },
  { name: "Chicken Breast", calories: 165, emoji: "🍗" },
  { name: "Brown Rice", calories: 216, emoji: "🍚" },
  { name: "Salmon", calories: 208, emoji: "🐟" },
  { name: "Broccoli", calories: 55, emoji: "🥦" },
]

export default function MealsPage() {
  const [showScanner, setShowScanner] = useState(false)
  const [scanMode, setScanMode] = useState<"camera" | "barcode">("camera")
  const [isScanning, setIsScanning] = useState(false)
  const [scanResult, setScanResult] = useState<{
    name: string
    calories: number
    protein: number
    carbs: number
    fat: number
  } | null>(null)

  const handleScan = () => {
    setIsScanning(true)
    // Simulate AI scanning
    setTimeout(() => {
      setIsScanning(false)
      setScanResult({
        name: scanMode === "camera" ? "Grilled Chicken Breast" : "Organic Protein Bar",
        calories: scanMode === "camera" ? 165 : 210,
        protein: scanMode === "camera" ? 31 : 20,
        carbs: scanMode === "camera" ? 0 : 24,
        fat: scanMode === "camera" ? 3.6 : 8,
      })
    }, 2000)
  }

  const resetScanner = () => {
    setScanResult(null)
    setIsScanning(false)
  }

  const todayMeals = mealHistory.filter((m) => m.date === "Today")
  const yesterdayMeals = mealHistory.filter((m) => m.date === "Yesterday")
  const totalCalories = todayMeals.reduce((sum, m) => sum + m.calories, 0)

  return (
    <div className="space-y-8">
      {/* Header with anchor IDs for deep linking */}
      <div id="barcode-scanner" className="scroll-mt-24" />
      <div id="food-recognition" className="scroll-mt-24" />
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Meals</h1>
          <p className="text-gray-400">
            Track your nutrition and scan food with AI
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            onClick={() => {
              setScanMode("camera")
              setShowScanner(true)
            }}
            className="bg-gradient-to-r from-[#6E00FF] to-[#00D8FF] hover:opacity-90 text-white border-0"
          >
            <Camera className="w-4 h-4 mr-2" />
            Scan Food
          </Button>
          <Button
            onClick={() => {
              setScanMode("barcode")
              setShowScanner(true)
            }}
            variant="outline"
            className="border-white/10 bg-white/5 hover:bg-white/10 text-white"
          >
            <Barcode className="w-4 h-4 mr-2" />
            Scan Barcode
          </Button>
        </div>
      </div>

      {/* Scanner Modal */}
      {showScanner && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass rounded-2xl max-w-lg w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6E00FF] to-[#00D8FF] flex items-center justify-center">
                  {scanMode === "camera" ? (
                    <Camera className="w-5 h-5 text-white" />
                  ) : (
                    <Barcode className="w-5 h-5 text-white" />
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {scanMode === "camera" ? "AI Food Scanner" : "Barcode Scanner"}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {scanMode === "camera"
                      ? "Point camera at your food"
                      : "Scan product barcode"}
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setShowScanner(false)
                  resetScanner()
                }}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Scanner Area */}
            {!scanResult ? (
              <div className="relative aspect-video rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-[#6E00FF]/20 to-[#00D8FF]/20 border border-white/10">
                {isScanning ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <Loader2 className="w-12 h-12 text-[#00D8FF] animate-spin mb-4" />
                    <p className="text-white font-medium">Analyzing with AI...</p>
                    <p className="text-gray-400 text-sm">
                      Identifying nutritional content
                    </p>
                  </div>
                ) : (
                  <>
                    {/* Scanner frame */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-48 h-48">
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00D8FF] rounded-tl" />
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00D8FF] rounded-tr" />
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#00D8FF] rounded-bl" />
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00D8FF] rounded-br" />

                        <div className="absolute inset-0 flex items-center justify-center">
                          {scanMode === "camera" ? (
                            <Camera className="w-16 h-16 text-white/30" />
                          ) : (
                            <Barcode className="w-16 h-16 text-white/30" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Animated scan line */}
                    <div className="absolute left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-[#00D8FF] to-transparent animate-pulse top-1/2" />
                  </>
                )}
              </div>
            ) : (
              <div className="mb-6">
                {/* Scan Result */}
                <div className="glass rounded-xl p-6 border border-green-500/30">
                  <div className="flex items-center gap-2 text-green-400 mb-4">
                    <Check className="w-5 h-5" />
                    <span className="font-medium">Food Identified!</span>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-4">
                    {scanResult.name}
                  </h4>

                  <div className="grid grid-cols-4 gap-4">
                    <div className="text-center p-3 glass rounded-lg">
                      <div className="text-2xl font-bold text-white">
                        {scanResult.calories}
                      </div>
                      <div className="text-xs text-gray-400">kcal</div>
                    </div>
                    <div className="text-center p-3 glass rounded-lg">
                      <div className="text-2xl font-bold text-[#00D8FF]">
                        {scanResult.protein}g
                      </div>
                      <div className="text-xs text-gray-400">protein</div>
                    </div>
                    <div className="text-center p-3 glass rounded-lg">
                      <div className="text-2xl font-bold text-[#6E00FF]">
                        {scanResult.carbs}g
                      </div>
                      <div className="text-xs text-gray-400">carbs</div>
                    </div>
                    <div className="text-center p-3 glass rounded-lg">
                      <div className="text-2xl font-bold text-[#FF36B9]">
                        {scanResult.fat}g
                      </div>
                      <div className="text-xs text-gray-400">fat</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-3">
              {!scanResult ? (
                <Button
                  onClick={handleScan}
                  disabled={isScanning}
                  className="flex-1 bg-gradient-to-r from-[#6E00FF] to-[#00D8FF] hover:opacity-90 text-white border-0"
                >
                  {isScanning ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Scanning...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 mr-2" />
                      Start Scan
                    </>
                  )}
                </Button>
              ) : (
                <>
                  <Button
                    onClick={resetScanner}
                    variant="outline"
                    className="flex-1 border-white/10 bg-white/5 hover:bg-white/10 text-white"
                  >
                    Scan Again
                  </Button>
                  <Button
                    onClick={() => {
                      setShowScanner(false)
                      resetScanner()
                    }}
                    className="flex-1 bg-gradient-to-r from-[#6E00FF] to-[#00D8FF] hover:opacity-90 text-white border-0"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add to Log
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Daily Summary */}
      <div className="glass rounded-2xl p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-bold text-white mb-1">Today&apos;s Nutrition</h2>
            <p className="text-gray-400 text-sm">
              {todayMeals.length} meals logged
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-orange-500" />
            <span className="text-2xl font-bold text-white">{totalCalories}</span>
            <span className="text-gray-400">/ 2,100 kcal</span>
          </div>
        </div>

        {/* Progress bars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-400">Protein</span>
              <span className="text-white">75g / 120g</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#00D8FF] to-blue-500 rounded-full"
                style={{ width: "62%" }}
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-400">Carbs</span>
              <span className="text-white">94g / 250g</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#6E00FF] to-purple-500 rounded-full"
                style={{ width: "38%" }}
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-400">Fat</span>
              <span className="text-white">34g / 70g</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#FF36B9] to-pink-500 rounded-full"
                style={{ width: "49%" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Add */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white mb-4">Quick Add</h3>
        <div className="flex flex-wrap gap-2">
          {suggestedMeals.map((meal, index) => (
            <button
              key={index}
              className="flex items-center gap-2 px-4 py-2 glass rounded-full hover:bg-white/10 transition-all text-sm"
            >
              <span>{meal.emoji}</span>
              <span className="text-white">{meal.name}</span>
              <span className="text-gray-400">({meal.calories} kcal)</span>
            </button>
          ))}
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            placeholder="Search meals..."
            className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
          />
        </div>
        <Button
          variant="outline"
          className="border-white/10 bg-white/5 hover:bg-white/10 text-white"
        >
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Meal History */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4">Today</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {todayMeals.map((meal) => (
            <MealCard key={meal.id} {...meal} />
          ))}
        </div>

        <h2 className="text-xl font-bold text-white mb-4">Yesterday</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {yesterdayMeals.map((meal) => (
            <MealCard key={meal.id} {...meal} />
          ))}
        </div>
      </div>
    </div>
  )
}

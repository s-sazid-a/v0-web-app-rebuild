"use client"

import { Calendar, Flame, Beef, Footprints, Droplets, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StatsCard } from "@/components/dashboard/stats-card"
import { AIScannerCard } from "@/components/dashboard/ai-scanner-card"
import { QuickGoalsCard } from "@/components/dashboard/quick-goals-card"
import { WeightTrendCard } from "@/components/dashboard/weight-trend-card"
import { RecommendationCard } from "@/components/dashboard/recommendation-card"
import { MealCard } from "@/components/dashboard/meal-card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function DashboardPage() {
  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return "Good morning"
    if (hour < 18) return "Good afternoon"
    return "Good evening"
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            {getGreeting()}, Alex
          </h1>
          <p className="text-gray-400">
            Here&apos;s your health overview for today
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="border-white/10 bg-white/5 hover:bg-white/10 text-white"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Today
          </Button>
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#6E00FF] to-[#FF36B9]" />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Calories"
          value="1,480"
          target="2,100"
          unit="kcal"
          progress={70}
          icon={Flame}
          gradient="from-orange-500 to-red-500"
        />
        <StatsCard
          title="Protein"
          value="75"
          target="120"
          unit="g"
          progress={62}
          icon={Beef}
          gradient="from-blue-500 to-cyan-500"
        />
        <StatsCard
          title="Steps"
          value="8,432"
          target="10,000"
          unit="steps"
          progress={84}
          icon={Footprints}
          gradient="from-green-500 to-emerald-500"
        />
        <StatsCard
          title="Water"
          value="6"
          target="8"
          unit="glasses"
          progress={75}
          icon={Droplets}
          gradient="from-cyan-500 to-blue-500"
        />
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* AI Scanner Card */}
        <div className="lg:col-span-2">
          <AIScannerCard />
        </div>

        {/* Quick Stats */}
        <div className="space-y-6">
          <QuickGoalsCard />
        </div>
      </div>

      {/* Second Row */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Weight Trend */}
        <WeightTrendCard />

        {/* AI Recommendations */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold text-white mb-4">AI Recommendations</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <RecommendationCard
              priority="high"
              title="Increase water intake"
              description="You're 25% below your daily target. Staying hydrated improves energy levels."
              action="Track Water"
              icon={Droplets}
            />
            <RecommendationCard
              priority="medium"
              title="10-minute meditation"
              description="Reduce stress hormone levels and improve mental clarity."
              action="Start Session"
              icon={Brain}
            />
            <RecommendationCard
              priority="low"
              title="Evening walk"
              description="Add 2,000 more steps to hit your daily goal."
              action="View Route"
              icon={Footprints}
            />
          </div>
        </div>
      </div>

      {/* Recent Meals */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Recent Meals</h2>
          <Link href="/dashboard/meals">
            <Button
              variant="ghost"
              className="text-[#00D8FF] hover:text-[#00D8FF] hover:bg-[#00D8FF]/10"
            >
              View All
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <MealCard
            type="Breakfast"
            name="Oatmeal with berries and honey"
            time="8:30 AM"
            calories={320}
            protein={12}
            carbs={54}
            fat={8}
          />
          <MealCard
            type="Lunch"
            name="Grilled chicken salad"
            time="12:45 PM"
            calories={450}
            protein={38}
            carbs={22}
            fat={18}
          />
          <MealCard
            type="Snack"
            name="Greek yogurt with almonds"
            time="3:30 PM"
            calories={210}
            protein={15}
            carbs={18}
            fat={8}
          />
        </div>
      </div>
    </div>
  )
}

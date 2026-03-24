"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { ArrowLeft, ArrowRight, Check, Utensils, Target, Calendar } from "lucide-react"

interface MealPlannerDemoProps {
  isOpen: boolean
  onClose: () => void
}

type DietaryPreference = "omnivore" | "vegetarian" | "vegan" | "keto" | "paleo"
type MealCount = 3 | 4 | 5 | 6
type FitnessGoal = "weight-loss" | "maintenance" | "muscle-gain"

interface MealPlan {
  breakfasts: string[]
  lunches: string[]
  dinners: string[]
  snacks: string[]
}

const mealPlans: Record<DietaryPreference, MealPlan> = {
  omnivore: {
    breakfasts: [
      "Scrambled eggs with spinach and whole-grain toast",
      "Greek yogurt with berries and granola",
      "Oatmeal with banana and almond butter"
    ],
    lunches: [
      "Grilled chicken salad with mixed greens",
      "Turkey and avocado wrap with vegetable soup",
      "Quinoa bowl with roasted vegetables and salmon"
    ],
    dinners: [
      "Baked cod with roasted sweet potatoes and broccoli",
      "Lean beef stir-fry with brown rice and vegetables",
      "Herb-roasted chicken with quinoa and green beans"
    ],
    snacks: [
      "Apple with 1 tbsp almond butter",
      "Greek yogurt with berries",
      "Handful of mixed nuts",
      "Carrot sticks with hummus"
    ]
  },
  vegetarian: {
    breakfasts: [
      "Greek yogurt parfait with granola and mixed berries",
      "Avocado toast with poached eggs",
      "Smoothie bowl with fruits, nuts and seeds"
    ],
    lunches: [
      "Mediterranean salad with feta cheese and olives",
      "Vegetable and cheese quesadilla with black beans",
      "Lentil soup with whole grain bread"
    ],
    dinners: [
      "Vegetable stir-fry with tofu and brown rice",
      "Eggplant parmesan with side salad",
      "Black bean and sweet potato enchiladas"
    ],
    snacks: [
      "Cottage cheese with pineapple",
      "Hard-boiled eggs",
      "Trail mix with dried fruits and nuts",
      "Greek yogurt with honey"
    ]
  },
  vegan: {
    breakfasts: [
      "Overnight oats with almond milk, chia seeds and berries",
      "Tofu scramble with vegetables and whole grain toast",
      "Smoothie with spinach, banana, and plant-based protein"
    ],
    lunches: [
      "Quinoa salad with chickpeas and roasted vegetables",
      "Lentil and vegetable soup with crusty bread",
      "Buddha bowl with tahini dressing"
    ],
    dinners: [
      "Chickpea and vegetable curry with brown rice",
      "Lentil bolognese with whole wheat pasta",
      "Stuffed bell peppers with quinoa and black beans"
    ],
    snacks: [
      "Edamame beans",
      "Apple slices with almond butter",
      "Roasted chickpeas",
      "Hummus with vegetable sticks"
    ]
  },
  keto: {
    breakfasts: [
      "Avocado and bacon omelet",
      "Chia pudding with coconut milk and berries",
      "Keto coffee with MCT oil and butter"
    ],
    lunches: [
      "Tuna salad with olive oil mayonnaise in lettuce wraps",
      "Grilled chicken Caesar salad (no croutons)",
      "Zucchini noodles with pesto and grilled salmon"
    ],
    dinners: [
      "Baked salmon with asparagus and hollandaise sauce",
      "Beef and broccoli stir-fry (no rice)",
      "Cauliflower crust pizza with cheese and vegetables"
    ],
    snacks: [
      "Cheese and salami roll-ups",
      "Celery with cream cheese",
      "Hard-boiled eggs with avocado",
      "Handful of macadamia nuts"
    ]
  },
  paleo: {
    breakfasts: [
      "Sweet potato and bacon hash with fried eggs",
      "Grain-free banana pancakes with berries",
      "Avocado and smoked salmon with herbs"
    ],
    lunches: [
      "Cobb salad with grilled chicken and avocado",
      "Lettuce wraps with ground turkey and vegetables",
      "Butternut squash soup with bone broth"
    ],
    dinners: [
      "Baked salmon with roasted Brussels sprouts",
      "Grilled steak with sweet potato and vegetables",
      "Roast chicken with herb-roasted vegetables"
    ],
    snacks: [
      "Beef jerky",
      "Mixed berries with coconut cream",
      "Baked sweet potato wedges",
      "Hard-boiled eggs"
    ]
  }
}

const adjustMealsForFitnessGoal = (plan: MealPlan, fitnessGoal: FitnessGoal, mealCount: MealCount): string[] => {
  const dailyPlans: string[] = []
  
  for (let day = 1; day <= 3; day++) {
    const dayPlan: string[] = []
    const breakfastIndex = (day - 1) % plan.breakfasts.length
    const lunchIndex = (day - 1) % plan.lunches.length
    const dinnerIndex = (day - 1) % plan.dinners.length
    
    dayPlan.push(`Day ${day}`)
    dayPlan.push(`Breakfast: ${plan.breakfasts[breakfastIndex]}`)
    dayPlan.push(`Lunch: ${plan.lunches[lunchIndex]}`)
    dayPlan.push(`Dinner: ${plan.dinners[dinnerIndex]}`)
    
    if (mealCount >= 4) {
      const morningSnackIndex = (day - 1) % plan.snacks.length
      dayPlan.push(`Morning Snack: ${plan.snacks[morningSnackIndex]}`)
    }
    
    if (mealCount >= 5) {
      const afternoonSnackIndex = (day * 2 - 1) % plan.snacks.length
      dayPlan.push(`Afternoon Snack: ${plan.snacks[afternoonSnackIndex]}`)
    }
    
    if (mealCount >= 6) {
      const eveningSnackIndex = (day * 3 - 1) % plan.snacks.length
      dayPlan.push(`Evening Snack: ${plan.snacks[eveningSnackIndex]}`)
    }
    
    if (fitnessGoal === "weight-loss") {
      dayPlan.push("Note: Reduced portion sizes recommended. Aim for 500 calorie deficit per day.")
    } else if (fitnessGoal === "muscle-gain") {
      dayPlan.push("Note: Increase protein portions by 25%. Add 300-500 calories per day.")
    }
    
    dailyPlans.push(dayPlan.join("\n"))
  }
  
  return dailyPlans
}

export function MealPlannerDemo({ isOpen, onClose }: MealPlannerDemoProps) {
  const [step, setStep] = useState(1)
  const [dietaryPreference, setDietaryPreference] = useState<DietaryPreference>("omnivore")
  const [mealCount, setMealCount] = useState<MealCount>(3)
  const [fitnessGoal, setFitnessGoal] = useState<FitnessGoal>("maintenance")
  const [mealPlan, setMealPlan] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  
  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1)
    } else {
      generateMealPlan()
    }
  }
  
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }
  
  const generateMealPlan = () => {
    setLoading(true)
    
    setTimeout(() => {
      const generatedPlan = adjustMealsForFitnessGoal(
        mealPlans[dietaryPreference],
        fitnessGoal,
        mealCount
      )
      setMealPlan(generatedPlan)
      setStep(4)
      setLoading(false)
    }, 2500)
  }
  
  const resetAndClose = () => {
    setStep(1)
    setDietaryPreference("omnivore")
    setMealCount(3)
    setFitnessGoal("maintenance")
    setMealPlan([])
    onClose()
  }
  
  return (
    <Dialog open={isOpen} onOpenChange={resetAndClose}>
      <DialogContent className="bg-[#0A0E17]/95 backdrop-blur-xl border border-white/10 shadow-2xl max-w-xl mx-auto max-h-[90vh] overflow-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold gradient-text pb-1 flex items-center gap-2">
            <Utensils className="w-6 h-6" />
            AI Meal Planner
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Let our AI create a personalized meal plan for you based on your preferences and goals.
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-6 relative">
          {/* Step indicators */}
          <div className="flex mb-8 relative">
            <div className="absolute top-[9px] left-0 right-0 h-[2px] bg-white/10 -z-10"></div>
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex-1 flex flex-col items-center">
                <div 
                  className={`w-6 h-6 rounded-full mb-2 flex items-center justify-center text-xs ${
                    s < step ? "bg-[#6E00FF] text-white" : 
                    s === step ? "bg-gradient-to-r from-[#6E00FF] to-[#00D8FF] text-white" : 
                    "bg-white/10 text-white/50"
                  }`}
                >
                  {s < step ? <Check className="w-3 h-3" /> : s}
                </div>
                <span className={`text-xs ${s <= step ? "text-white/80" : "text-white/40"}`}>
                  {s === 1 ? "Diet" : s === 2 ? "Meals" : s === 3 ? "Goals" : "Plan"}
                </span>
              </div>
            ))}
          </div>
          
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-medium text-white mb-4">What is your dietary preference?</h3>
                <RadioGroup 
                  value={dietaryPreference} 
                  onValueChange={(value) => setDietaryPreference(value as DietaryPreference)}
                  className="space-y-3"
                >
                  {[
                    { value: "omnivore", label: "Omnivore (Includes all food groups)" },
                    { value: "vegetarian", label: "Vegetarian (No meat)" },
                    { value: "vegan", label: "Vegan (No animal products)" },
                    { value: "keto", label: "Keto (Low carb, high fat)" },
                    { value: "paleo", label: "Paleo (Ancestral diet)" }
                  ].map((option) => (
                    <div key={option.value} className="flex items-center space-x-2 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                      <RadioGroupItem value={option.value} id={option.value} />
                      <Label htmlFor={option.value} className="text-white cursor-pointer flex-1">{option.label}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </motion.div>
            )}
            
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-medium text-white mb-4">How many meals per day?</h3>
                <div className="mb-8">
                  <div className="flex justify-between mb-2 text-gray-400 text-sm">
                    <span>3 meals</span>
                    <span>6 meals</span>
                  </div>
                  <Slider
                    defaultValue={[mealCount]}
                    min={3}
                    max={6}
                    step={1}
                    onValueChange={(value) => setMealCount(value[0] as MealCount)}
                    className="mb-4"
                  />
                  <div className="text-center font-medium text-white text-xl">
                    {mealCount} meals per day
                  </div>
                </div>
                
                <div className="p-4 bg-[#6E00FF]/10 rounded-lg border border-[#6E00FF]/20">
                  <p className="text-sm text-gray-300">
                    Multiple smaller meals can help maintain stable blood sugar and energy levels throughout the day.
                  </p>
                </div>
              </motion.div>
            )}
            
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-medium text-white mb-4">What is your fitness goal?</h3>
                <RadioGroup 
                  value={fitnessGoal} 
                  onValueChange={(value) => setFitnessGoal(value as FitnessGoal)}
                  className="space-y-4"
                >
                  {[
                    { value: "weight-loss", label: "Weight Loss", desc: "Caloric deficit with higher protein", icon: "scale" },
                    { value: "maintenance", label: "Maintenance", desc: "Balanced nutrition to maintain weight", icon: "balance" },
                    { value: "muscle-gain", label: "Muscle Gain", desc: "Caloric surplus with higher protein", icon: "dumbbell" }
                  ].map((option) => (
                    <div key={option.value} className="flex p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                      <div className="flex items-center space-x-3 flex-1">
                        <RadioGroupItem value={option.value} id={option.value} />
                        <div>
                          <Label htmlFor={option.value} className="font-medium text-white cursor-pointer">{option.label}</Label>
                          <p className="text-sm text-gray-400">{option.desc}</p>
                        </div>
                      </div>
                      <Target className="w-6 h-6 text-[#6E00FF]" />
                    </div>
                  ))}
                </RadioGroup>
              </motion.div>
            )}
            
            {step === 4 && !loading && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="max-h-[350px] overflow-y-auto pr-2"
              >
                <h3 className="text-xl font-medium text-white mb-4">Your Personalized Meal Plan</h3>
                <div className="mb-4 p-3 rounded-lg bg-[#6E00FF]/10 border border-[#6E00FF]/20">
                  <p className="text-sm text-gray-300">
                    <span className="font-medium text-white">{dietaryPreference.charAt(0).toUpperCase() + dietaryPreference.slice(1)}</span> diet with {mealCount} meals per day, optimized for <span className="font-medium text-white">{fitnessGoal.replace("-", " ")}</span>
                  </p>
                </div>
                
                {mealPlan.map((dayPlan, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.3 }}
                    className="mb-4 p-4 rounded-lg bg-white/5 border border-white/10"
                  >
                    <pre className="whitespace-pre-wrap font-sans text-sm text-gray-300">{dayPlan}</pre>
                  </motion.div>
                ))}
                
                <div className="p-4 rounded-lg bg-gradient-to-r from-[#6E00FF]/20 to-[#00D8FF]/20 mt-4">
                  <h4 className="font-medium text-white mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    AI Nutritionist Note
                  </h4>
                  <p className="text-sm text-gray-300">
                    This plan has been customized based on your preferences. For optimal results, make sure to stay hydrated and adjust portion sizes to match your specific caloric needs.
                  </p>
                </div>
              </motion.div>
            )}
            
            {loading && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-10"
              >
                <div className="w-20 h-20 relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#6E00FF] via-[#00D8FF] to-[#FF36B9] rounded-full opacity-30 blur-md"></div>
                  <motion.div 
                    className="absolute inset-0 border-4 border-[#6E00FF] rounded-full border-t-transparent"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div 
                    className="absolute inset-2 border-4 border-[#00D8FF] rounded-full border-b-transparent"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div 
                    className="absolute inset-4 border-4 border-[#FF36B9] rounded-full border-l-transparent"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                <h3 className="text-xl font-medium text-white mb-2">Generating Your Meal Plan</h3>
                <p className="text-gray-400 text-sm text-center max-w-md">
                  Our AI is analyzing your preferences and creating a personalized meal plan optimized for your goals...
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <div className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={step === 1 ? resetAndClose : handleBack} 
            className="border-white/10 text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {step === 1 ? "Close" : "Back"}
          </Button>
          {step < 4 && !loading && (
            <Button 
              onClick={handleNext}
              className="bg-gradient-to-r from-[#6E00FF] to-[#00D8FF] text-white"
            >
              {step === 3 ? "Generate Plan" : "Next"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
          {step === 4 && !loading && (
            <Button 
              onClick={resetAndClose}
              className="bg-gradient-to-r from-[#6E00FF] to-[#00D8FF] text-white"
            >
              Done
              <Check className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

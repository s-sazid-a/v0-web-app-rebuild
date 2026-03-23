"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Scale,
  Ruler,
  Target,
  Activity,
  Heart,
  Edit2,
  Camera,
  Bell,
  Shield,
  Palette,
  Globe,
  ChevronRight,
} from "lucide-react"

const userProfile = {
  name: "Alex Johnson",
  email: "alex.johnson@email.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  joined: "January 2024",
  avatar: "AJ",
}

const healthInfo = {
  age: 28,
  gender: "Male",
  height: "5'10\"",
  currentWeight: 168.5,
  goalWeight: 160,
  activityLevel: "Moderate",
  dietaryPreferences: ["Low Carb", "High Protein"],
  allergies: ["Peanuts"],
}

const stats = [
  { label: "Days Active", value: "47", icon: Calendar },
  { label: "Meals Logged", value: "286", icon: Activity },
  { label: "Goals Completed", value: "12", icon: Target },
  { label: "Avg Health Score", value: "78", icon: Heart },
]

const settingsCategories = [
  { icon: Bell, label: "Notifications", description: "Manage alerts and reminders" },
  { icon: Shield, label: "Privacy & Security", description: "Account protection settings" },
  { icon: Palette, label: "Appearance", description: "Theme and display options" },
  { icon: Globe, label: "Language & Region", description: "Localization preferences" },
]

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Profile</h1>
          <p className="text-gray-400">Manage your account and preferences</p>
        </div>

        <Button
          onClick={() => setIsEditing(!isEditing)}
          variant="outline"
          className="border-white/10 bg-white/5 hover:bg-white/10 text-white"
        >
          <Edit2 className="w-4 h-4 mr-2" />
          {isEditing ? "Save Changes" : "Edit Profile"}
        </Button>
      </div>

      {/* Profile Card */}
      <div className="glass rounded-2xl p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          {/* Avatar */}
          <div className="relative">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#6E00FF] to-[#FF36B9] flex items-center justify-center text-3xl font-bold text-white">
              {userProfile.avatar}
            </div>
            {isEditing && (
              <button className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-[#00D8FF] flex items-center justify-center text-white hover:opacity-90 transition-opacity">
                <Camera className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Info */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white mb-1">{userProfile.name}</h2>
            <p className="text-gray-400 mb-4">Pro Member since {userProfile.joined}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-4 h-4 text-gray-400" />
                {isEditing ? (
                  <Input
                    defaultValue={userProfile.email}
                    className="bg-white/5 border-white/10 text-white h-8"
                  />
                ) : (
                  <span>{userProfile.email}</span>
                )}
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-4 h-4 text-gray-400" />
                {isEditing ? (
                  <Input
                    defaultValue={userProfile.phone}
                    className="bg-white/5 border-white/10 text-white h-8"
                  />
                ) : (
                  <span>{userProfile.phone}</span>
                )}
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-4 h-4 text-gray-400" />
                {isEditing ? (
                  <Input
                    defaultValue={userProfile.location}
                    className="bg-white/5 border-white/10 text-white h-8"
                  />
                ) : (
                  <span>{userProfile.location}</span>
                )}
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span>Member since {userProfile.joined}</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
            {stats.map((stat, index) => (
              <div key={index} className="glass rounded-xl p-4 text-center min-w-[100px]">
                <stat.icon className="w-5 h-5 text-[#00D8FF] mx-auto mb-2" />
                <div className="text-xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Health Information */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
          <Heart className="w-5 h-5 text-[#FF36B9]" />
          Health Information
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-400 block mb-1">Age</label>
              {isEditing ? (
                <Input
                  type="number"
                  defaultValue={healthInfo.age}
                  className="bg-white/5 border-white/10 text-white"
                />
              ) : (
                <p className="text-white font-medium">{healthInfo.age} years old</p>
              )}
            </div>
            <div>
              <label className="text-sm text-gray-400 block mb-1">Gender</label>
              {isEditing ? (
                <Input
                  defaultValue={healthInfo.gender}
                  className="bg-white/5 border-white/10 text-white"
                />
              ) : (
                <p className="text-white font-medium">{healthInfo.gender}</p>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-400 block mb-1">Height</label>
              <div className="flex items-center gap-2">
                <Ruler className="w-4 h-4 text-[#00D8FF]" />
                {isEditing ? (
                  <Input
                    defaultValue={healthInfo.height}
                    className="bg-white/5 border-white/10 text-white"
                  />
                ) : (
                  <p className="text-white font-medium">{healthInfo.height}</p>
                )}
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-400 block mb-1">Activity Level</label>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-green-400" />
                {isEditing ? (
                  <Input
                    defaultValue={healthInfo.activityLevel}
                    className="bg-white/5 border-white/10 text-white"
                  />
                ) : (
                  <p className="text-white font-medium">{healthInfo.activityLevel}</p>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-400 block mb-1">Current Weight</label>
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-[#6E00FF]" />
                {isEditing ? (
                  <Input
                    type="number"
                    defaultValue={healthInfo.currentWeight}
                    className="bg-white/5 border-white/10 text-white"
                  />
                ) : (
                  <p className="text-white font-medium">{healthInfo.currentWeight} lbs</p>
                )}
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-400 block mb-1">Goal Weight</label>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-[#FF36B9]" />
                {isEditing ? (
                  <Input
                    type="number"
                    defaultValue={healthInfo.goalWeight}
                    className="bg-white/5 border-white/10 text-white"
                  />
                ) : (
                  <p className="text-white font-medium">{healthInfo.goalWeight} lbs</p>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-400 block mb-2">Dietary Preferences</label>
              <div className="flex flex-wrap gap-2">
                {healthInfo.dietaryPreferences.map((pref, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full bg-[#6E00FF]/20 text-[#00D8FF] text-sm"
                  >
                    {pref}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-400 block mb-2">Allergies</label>
              <div className="flex flex-wrap gap-2">
                {healthInfo.allergies.map((allergy, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-sm"
                  >
                    {allergy}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Settings */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white mb-6">Settings</h3>

        <div className="grid md:grid-cols-2 gap-4">
          {settingsCategories.map((setting, index) => (
            <button
              key={index}
              className="glass rounded-xl p-4 flex items-center justify-between hover:bg-white/10 transition-all text-left w-full"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6E00FF]/30 to-[#00D8FF]/30 flex items-center justify-center">
                  <setting.icon className="w-5 h-5 text-[#00D8FF]" />
                </div>
                <div>
                  <p className="text-white font-medium">{setting.label}</p>
                  <p className="text-sm text-gray-400">{setting.description}</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          ))}
        </div>
      </div>

      {/* Danger Zone */}
      <div className="glass rounded-2xl p-6 border border-red-500/20">
        <h3 className="text-lg font-bold text-red-400 mb-4">Danger Zone</h3>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-white font-medium">Delete Account</p>
            <p className="text-sm text-gray-400">
              Permanently delete your account and all associated data
            </p>
          </div>
          <Button variant="destructive" className="bg-red-500/20 text-red-400 hover:bg-red-500/30 border border-red-500/30">
            Delete Account
          </Button>
        </div>
      </div>
    </div>
  )
}

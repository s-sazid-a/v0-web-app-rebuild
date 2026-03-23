"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Bell,
  Moon,
  Globe,
  Shield,
  Smartphone,
  Mail,
  Key,
  Trash2,
  Download,
  Save,
  User,
  Palette,
  Database,
  HelpCircle,
} from "lucide-react"

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    mealReminders: true,
    weeklyReports: true,
    aiInsights: true,
  })

  const [preferences, setPreferences] = useState({
    darkMode: true,
    language: "en",
    units: "metric",
    timezone: "auto",
  })

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
        <p className="text-gray-400">
          Manage your account settings and preferences
        </p>
      </div>

      {/* Settings Tabs */}
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="bg-white/5 border border-white/10 p-1 mb-6">
          <TabsTrigger
            value="general"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#6E00FF] data-[state=active]:to-[#00D8FF] data-[state=active]:text-white"
          >
            General
          </TabsTrigger>
          <TabsTrigger
            value="notifications"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#6E00FF] data-[state=active]:to-[#00D8FF] data-[state=active]:text-white"
          >
            Notifications
          </TabsTrigger>
          <TabsTrigger
            value="privacy"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#6E00FF] data-[state=active]:to-[#00D8FF] data-[state=active]:text-white"
          >
            Privacy
          </TabsTrigger>
          <TabsTrigger
            value="account"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#6E00FF] data-[state=active]:to-[#00D8FF] data-[state=active]:text-white"
          >
            Account
          </TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general" className="space-y-6">
          {/* Appearance */}
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Palette className="w-5 h-5 text-[#6E00FF]" />
                Appearance
              </CardTitle>
              <CardDescription className="text-gray-400">
                Customize how HHAI looks on your device
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-white">Dark Mode</Label>
                  <p className="text-sm text-gray-400">Use dark theme across the app</p>
                </div>
                <Switch
                  checked={preferences.darkMode}
                  onCheckedChange={(checked) =>
                    setPreferences({ ...preferences, darkMode: checked })
                  }
                />
              </div>
            </CardContent>
          </Card>

          {/* Language & Region */}
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Globe className="w-5 h-5 text-[#00D8FF]" />
                Language & Region
              </CardTitle>
              <CardDescription className="text-gray-400">
                Set your preferred language and regional settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label className="text-white">Language</Label>
                  <Select
                    value={preferences.language}
                    onValueChange={(value) =>
                      setPreferences({ ...preferences, language: value })
                    }
                  >
                    <SelectTrigger className="bg-white/5 border-white/10 text-white">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0F1419] border-white/10">
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                      <SelectItem value="ja">Japanese</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-white">Units</Label>
                  <Select
                    value={preferences.units}
                    onValueChange={(value) =>
                      setPreferences({ ...preferences, units: value })
                    }
                  >
                    <SelectTrigger className="bg-white/5 border-white/10 text-white">
                      <SelectValue placeholder="Select units" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0F1419] border-white/10">
                      <SelectItem value="metric">Metric (kg, cm)</SelectItem>
                      <SelectItem value="imperial">Imperial (lb, in)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Connected Devices */}
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-[#FF36B9]" />
                Connected Devices
              </CardTitle>
              <CardDescription className="text-gray-400">
                Manage devices connected to your HHAI account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#6E00FF] to-[#00D8FF] flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">iPhone 15 Pro</p>
                    <p className="text-sm text-gray-400">Last active: 2 hours ago</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">
                  Current
                </span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">MacBook Pro</p>
                    <p className="text-sm text-gray-400">Last active: Yesterday</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300 hover:bg-red-500/10">
                  Remove
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Settings */}
        <TabsContent value="notifications" className="space-y-6">
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Bell className="w-5 h-5 text-[#6E00FF]" />
                Notification Preferences
              </CardTitle>
              <CardDescription className="text-gray-400">
                Choose what notifications you want to receive
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-white">Email Notifications</Label>
                  <p className="text-sm text-gray-400">Receive updates via email</p>
                </div>
                <Switch
                  checked={notifications.email}
                  onCheckedChange={(checked) =>
                    setNotifications({ ...notifications, email: checked })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-white">Push Notifications</Label>
                  <p className="text-sm text-gray-400">Receive push notifications on your device</p>
                </div>
                <Switch
                  checked={notifications.push}
                  onCheckedChange={(checked) =>
                    setNotifications({ ...notifications, push: checked })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-white">Meal Reminders</Label>
                  <p className="text-sm text-gray-400">Get reminded to log your meals</p>
                </div>
                <Switch
                  checked={notifications.mealReminders}
                  onCheckedChange={(checked) =>
                    setNotifications({ ...notifications, mealReminders: checked })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-white">Weekly Reports</Label>
                  <p className="text-sm text-gray-400">Receive weekly health summary</p>
                </div>
                <Switch
                  checked={notifications.weeklyReports}
                  onCheckedChange={(checked) =>
                    setNotifications({ ...notifications, weeklyReports: checked })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-white">AI Insights</Label>
                  <p className="text-sm text-gray-400">Get notified about new AI-generated insights</p>
                </div>
                <Switch
                  checked={notifications.aiInsights}
                  onCheckedChange={(checked) =>
                    setNotifications({ ...notifications, aiInsights: checked })
                  }
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Privacy Settings */}
        <TabsContent value="privacy" className="space-y-6">
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#00D8FF]" />
                Privacy & Security
              </CardTitle>
              <CardDescription className="text-gray-400">
                Control your privacy settings and data
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-white">Share Data for Research</Label>
                  <p className="text-sm text-gray-400">Help improve HHAI by sharing anonymized data</p>
                </div>
                <Switch defaultChecked={false} />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-white">Activity Status</Label>
                  <p className="text-sm text-gray-400">Show when you're active</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Database className="w-5 h-5 text-[#FF36B9]" />
                Your Data
              </CardTitle>
              <CardDescription className="text-gray-400">
                Manage and export your health data
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                variant="outline"
                className="w-full justify-start border-white/10 bg-white/5 hover:bg-white/10 text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Export All Data
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start border-red-500/30 bg-red-500/10 hover:bg-red-500/20 text-red-400"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Delete All Data
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Account Settings */}
        <TabsContent value="account" className="space-y-6">
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <User className="w-5 h-5 text-[#6E00FF]" />
                Account Information
              </CardTitle>
              <CardDescription className="text-gray-400">
                Update your account details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label className="text-white">Email</Label>
                  <Input
                    type="email"
                    defaultValue="alex.johnson@email.com"
                    className="bg-white/5 border-white/10 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-white">Username</Label>
                  <Input
                    defaultValue="alex_johnson"
                    className="bg-white/5 border-white/10 text-white"
                  />
                </div>
              </div>
              <Button className="bg-gradient-to-r from-[#6E00FF] to-[#00D8FF] hover:opacity-90 text-white">
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Key className="w-5 h-5 text-[#00D8FF]" />
                Security
              </CardTitle>
              <CardDescription className="text-gray-400">
                Manage your password and security settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                variant="outline"
                className="w-full justify-start border-white/10 bg-white/5 hover:bg-white/10 text-white"
              >
                <Key className="w-4 h-4 mr-2" />
                Change Password
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start border-white/10 bg-white/5 hover:bg-white/10 text-white"
              >
                <Shield className="w-4 h-4 mr-2" />
                Enable Two-Factor Authentication
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 border-red-500/30">
            <CardHeader>
              <CardTitle className="text-red-400 flex items-center gap-2">
                <Trash2 className="w-5 h-5" />
                Danger Zone
              </CardTitle>
              <CardDescription className="text-gray-400">
                Irreversible actions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                className="w-full justify-start border-red-500/30 bg-red-500/10 hover:bg-red-500/20 text-red-400"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Delete Account
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Help Section */}
      <Card className="bg-white/5 border-white/10">
        <CardContent className="flex items-center justify-between p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#6E00FF] to-[#00D8FF] flex items-center justify-center">
              <HelpCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold">Need Help?</h3>
              <p className="text-gray-400 text-sm">Contact our support team for assistance</p>
            </div>
          </div>
          <Button
            variant="outline"
            className="border-white/10 bg-white/5 hover:bg-white/10 text-white"
          >
            <Mail className="w-4 h-4 mr-2" />
            Contact Support
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

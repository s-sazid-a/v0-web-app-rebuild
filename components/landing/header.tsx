"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Heart } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/features" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Pricing", href: "/pricing" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "DemoApp", href: "/dashboard" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6E00FF] to-[#00D8FF] flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">
              Health<span className="text-[#FF36B9]">Hyper</span>
              <span className="text-[#00D8FF]">AI</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "text-[#00D8FF]"
                    : "text-gray-300 hover:text-white",
                  item.name === "DemoApp" && "px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#6E00FF]/20 to-[#00D8FF]/20 border border-[#6E00FF]/30"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/dashboard">
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white hover:bg-white/10"
              >
                Sign In
              </Button>
            </Link>
            <Link href="/waitlist">
              <Button className="bg-gradient-to-r from-[#6E00FF] to-[#00D8FF] hover:opacity-90 text-white border-0">
                Get Started Free
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "transition-colors",
                    pathname === item.href
                      ? "text-[#00D8FF]"
                      : "text-gray-300 hover:text-white",
                    item.name === "DemoApp" && "text-[#00D8FF] font-medium"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-4">
                <Link href="/dashboard">
                  <Button
                    variant="ghost"
                    className="w-full text-gray-300 hover:text-white hover:bg-white/10"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link href="/waitlist">
                  <Button className="w-full bg-gradient-to-r from-[#6E00FF] to-[#00D8FF] hover:opacity-90 text-white border-0">
                    Get Started Free
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

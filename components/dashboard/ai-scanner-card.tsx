"use client"

import { Camera, Barcode, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AIScannerCard() {
  return (
    <div className="glass rounded-2xl p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">AI Food Scanner</h3>
          <p className="text-gray-400 text-sm">
            Scan any food to instantly track nutrition
          </p>
        </div>
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6E00FF] to-[#00D8FF] flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Scanner Preview */}
      <div className="relative aspect-video rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-[#6E00FF]/20 to-[#00D8FF]/20 border border-white/10">
        {/* Scanner overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Scanning animation */}
            <div className="w-48 h-48 rounded-xl border-2 border-dashed border-[#00D8FF]/50 animate-pulse" />
            <div className="absolute inset-4 border border-[#6E00FF]/30 rounded-lg" />
            
            {/* Corner markers */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#00D8FF] rounded-tl" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#00D8FF] rounded-tr" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#00D8FF] rounded-bl" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#00D8FF] rounded-br" />

            {/* Center icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Camera className="w-12 h-12 text-white/50" />
            </div>
          </div>
        </div>

        {/* Scan line animation */}
        <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00D8FF] to-transparent animate-scan" />
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-4">
        <Link href="/dashboard/meals?scan=camera">
          <Button className="w-full bg-gradient-to-r from-[#6E00FF] to-[#00D8FF] hover:opacity-90 text-white border-0">
            <Camera className="w-4 h-4 mr-2" />
            Scan Food
          </Button>
        </Link>
        <Link href="/dashboard/meals?scan=barcode">
          <Button
            variant="outline"
            className="w-full border-white/10 bg-white/5 hover:bg-white/10 text-white"
          >
            <Barcode className="w-4 h-4 mr-2" />
            Scan Barcode
          </Button>
        </Link>
      </div>

      <style jsx>{`
        @keyframes scan {
          0%, 100% {
            top: 10%;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            top: 90%;
          }
        }
        .animate-scan {
          animation: scan 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

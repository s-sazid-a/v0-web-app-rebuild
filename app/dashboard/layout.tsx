import { DashboardSidebar } from "@/components/dashboard/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#0A0E17]">
      <DashboardSidebar />
      <main className="pl-64 min-h-screen">
        <div className="p-8">{children}</div>
      </main>
    </div>
  )
}

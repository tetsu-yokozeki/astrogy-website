"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Calendar, Star, Info } from "lucide-react"
import { cn } from "@/lib/utils"

export function MobileBottomNav() {
  const pathname = usePathname()

  const navItems = [
    {
      href: "/daily",
      label: "今日の運勢",
      icon: Star,
      isActive: pathname.startsWith("/daily"),
    },
    {
      href: "/monthly",
      label: "今月の運勢",
      icon: Calendar,
      isActive: pathname.startsWith("/monthly"),
    },
    {
      href: "/about",
      label: "占い植物園とは？",
      icon: Info,
      isActive: pathname.startsWith("/about"),
    },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-green-200 md:hidden">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center px-3 py-2 rounded-lg transition-all duration-200 min-h-[60px] min-w-[80px]",
                "active:scale-95 hover:bg-green-50",
                item.isActive ? "bg-green-100 text-green-700 shadow-sm" : "text-green-600 hover:text-green-700",
              )}
            >
              <Icon
                className={cn("w-5 h-5 mb-1 transition-colors", item.isActive ? "text-green-700" : "text-green-600")}
              />
              <span
                className={cn(
                  "text-xs font-medium text-center leading-tight",
                  item.isActive ? "text-green-700" : "text-green-600",
                )}
              >
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

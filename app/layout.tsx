import type React from "react"
import type { Metadata } from "next"
import { Zen_Kurenaido } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { MobileBottomNav } from "@/components/mobile-bottom-nav"
import "./globals.css"

const zenKurenaido = Zen_Kurenaido({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-zen-kurenaido",
})

export const metadata: Metadata = {
  title: "占い植物園 | ラフレシアのペルナちゃんと一緒",
  description: "占い植物園の説明",
    generator: 'v0.app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={zenKurenaido.className}>
      <body>
        <Suspense fallback={null}>
          <div className="min-h-screen pb-20 md:pb-0">{children}</div>
          <MobileBottomNav />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}

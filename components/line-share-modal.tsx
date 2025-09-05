"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface LineShareModalProps {
  signName: string
  signEmoji: string
  signSvgPath?: string
  shareUrl: string
  shareText: string
  fortuneType: "daily" | "monthly"
  fortuneData: {
    totalScore?: number
    summary: string
    luckyColor: string
    luckyItem: string
    advice: string
  }
  date: string
}

export function LineShareModal({
  signName,
  signEmoji,
  signSvgPath,
  shareUrl,
  shareText,
  fortuneType,
  fortuneData,
  date,
}: LineShareModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleLineShare = () => {
    const fullShareText = `${shareText}\n\n${fortuneData.summary}\n\n詳しくはこちら👇`
    window.open(
      `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(fullShareText)}`,
      "_blank",
    )
    setIsOpen(false)
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600"
    if (score >= 80) return "text-blue-600"
    if (score >= 70) return "text-yellow-600"
    if (score >= 60) return "text-orange-600"
    return "text-red-600"
  }

  const getScoreStars = (score: number) => {
    const stars = Math.round(score / 20)
    return "★".repeat(stars) + "☆".repeat(5 - stars)
  }

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        className="rounded-full bg-transparent hover:bg-green-50 border-green-500 text-green-600 hover:text-green-700"
        onClick={() => setIsOpen(true)}
      >
        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
        </svg>
        LINEでシェア
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="fixed inset-0 bg-black/20" 
            onClick={() => setIsOpen(false)}
          />
          <div className="relative bg-background rounded-lg border shadow-lg max-w-sm w-full">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="sr-only">Close</span>
            </button>

            <div className="p-4">
              <div className="text-center mb-4">
                <h2 className="text-lg font-bold text-primary mb-2">占い結果をシェア</h2>
              </div>

              <div className="space-y-3">
                {/* Character Image */}
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center hand-drawn-shadow wavy-border">
                    {signSvgPath ? (
                      <Image 
                        src={signSvgPath} 
                        alt={signName} 
                        width={40} 
                        height={40} 
                        className="w-10 h-10 object-contain" 
                      />
                    ) : (
                      <span className="text-2xl">{signEmoji}</span>
                    )}
                  </div>
                  <Badge variant="secondary" className="mb-1 text-xs">
                    {date}
                  </Badge>
                  <h3 className="text-sm font-bold text-primary">{signName}</h3>
                  <p className="text-xs text-muted-foreground">{fortuneType === "daily" ? "今日の運勢" : "今月の運勢"}</p>
                </div>

                {/* Fortune Summary Card */}
                <Card className="wavy-border hand-drawn-shadow">
                  <CardContent className="p-3 space-y-2">
                    <div className="text-xs leading-relaxed text-center">{fortuneData.summary}</div>
                  </CardContent>
                </Card>

                {/* Share Button */}
                <Button
                  onClick={handleLineShare}
                  className="w-full bg-green-500 hover:bg-green-600 text-white rounded-full py-2 text-sm"
                  size="sm"
                >
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                  </svg>
                  LINEで友達にシェア
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

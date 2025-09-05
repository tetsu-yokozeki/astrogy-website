'use client'

import { Clock } from 'lucide-react'

export default function UpdateScheduleBanner() {
  return (
    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          {/* 今日の運勢の吹き出し */}
          <div className="relative">
            <div className="bg-white dark:bg-gray-800 rounded-2xl px-6 py-4 shadow-lg border border-primary/20 relative">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <div className="text-center">
                  <div className="text-muted-foreground text-sm">今日の運勢は</div>
                  <div className="font-bold text-primary text-lg">毎日朝7:00ごろに更新</div>
                </div>
              </div>
              {/* 吹き出しの矢印 */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white dark:border-t-gray-800"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

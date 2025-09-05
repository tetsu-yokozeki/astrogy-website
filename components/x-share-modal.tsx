'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { X, Send } from 'lucide-react'

interface XShareModalProps {
  isOpen: boolean
  onClose: () => void
  signName: string
  signSvgPath: string
  fortuneText: string
  shareUrl: string
}

export default function XShareModal({
  isOpen,
  onClose,
  signName,
  signSvgPath,
  fortuneText,
  shareUrl
}: XShareModalProps) {
  const [isSharing, setIsSharing] = useState(false)

  if (!isOpen) return null

  const handleXShare = async () => {
    setIsSharing(true)
    
    const text = `${signName}の運勢をチェック！\n\n${fortuneText}\n\n#占い植物園 #ペルナちゃん #${signName}`
    const encodedText = encodeURIComponent(text)
    const encodedUrl = encodeURIComponent(shareUrl)
    
    const xUrl = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`
    
    // 新しいタブでXを開く
    window.open(xUrl, '_blank', 'width=600,height=400')
    
    setTimeout(() => {
      setIsSharing(false)
      onClose()
    }, 1000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 背景オーバーレイ */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* モーダルコンテンツ */}
      <div className="relative bg-background rounded-2xl shadow-2xl max-w-sm w-full mx-4 max-h-[80vh] overflow-hidden">
        {/* X風のヘッダー */}
        <div className="bg-black text-white px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <X className="w-5 h-5" />
            <span className="font-semibold">Xでシェア</span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>

        {/* コンテンツ */}
        <div className="p-4 space-y-4">
          {/* 星座情報 */}
          <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-xl">
            <div className="w-12 h-12 relative">
              <Image
                src={signSvgPath}
                alt={signName}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="font-semibold text-sm">{signName}</h3>
              <p className="text-xs text-muted-foreground">今日の運勢</p>
            </div>
          </div>

          {/* 運勢テキスト */}
          <Card className="wavy-border">
            <CardContent className="p-4">
              <p className="text-sm leading-relaxed text-foreground">
                {fortuneText}
              </p>
            </CardContent>
          </Card>

          {/* ハッシュタグ */}
          <div className="flex flex-wrap gap-1">
            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
              #占い植物園
            </span>
            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
              #ペルナちゃん
            </span>
            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
              #{signName}
            </span>
          </div>

          {/* シェアボタン */}
          <Button
            onClick={handleXShare}
            disabled={isSharing}
            className="w-full bg-black hover:bg-gray-800 text-white rounded-full"
          >
            {isSharing ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                シェア中...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <X className="w-4 h-4" />
                Xでポスト
              </div>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}
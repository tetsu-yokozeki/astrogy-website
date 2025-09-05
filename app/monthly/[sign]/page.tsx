"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { notFound } from "next/navigation"
import Image from "next/image"
import { LineShareModal } from "@/components/line-share-modal"
import XShareModal from "@/components/x-share-modal"
import { processMonthlyFortuneData } from "@/lib/fortune-processor"
import { use, useState } from "react"
import { ChevronDown, Menu } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Footer from "@/components/footer"
import Header from "@/components/header"

const zodiacSigns = [
  { name: "牡羊座", slug: "aries", period: "3/21-4/19", emoji: "♈", svgPath: "/zodiac-1.svg" },
  { name: "牡牛座", slug: "taurus", period: "4/20-5/20", emoji: "♉", svgPath: "/zodiac-2.svg" },
  { name: "双子座", slug: "gemini", period: "5/21-6/21", emoji: "♊", svgPath: "/zodiac-3.svg" },
  { name: "蟹座", slug: "cancer", period: "6/22-7/22", emoji: "♋", svgPath: "/zodiac-4.svg" },
  { name: "獅子座", slug: "leo", period: "7/23-8/22", emoji: "♌", svgPath: "/zodiac-5.svg" },
  { name: "乙女座", slug: "virgo", period: "8/23-9/22", emoji: "♍", svgPath: "/zodiac-6.svg" },
  { name: "天秤座", slug: "libra", period: "9/23-10/23", emoji: "♎", svgPath: "/zodiac-7.png" },
  { name: "蠍座", slug: "scorpio", period: "10/24-11/22", emoji: "♏", svgPath: "/zodiac-8.png" },
  { name: "射手座", slug: "sagittarius", period: "11/23-12/21", emoji: "♐", svgPath: "/zodiac-9.png" },
  { name: "山羊座", slug: "capricorn", period: "12/22-1/19", emoji: "♑", svgPath: "/zodiac-10.png" },
  { name: "水瓶座", slug: "aquarius", period: "1/20-2/18", emoji: "♒", svgPath: "/zodiac-11.png" },
  { name: "魚座", slug: "pisces", period: "2/19-3/20", emoji: "♓", svgPath: "/zodiac-12.png" },
]

// Mock monthly horoscope data
const getMonthlyHoroscopeData = (sign: string) => {
  try {
    // Sample monthly fortune data - in production this would come from your API
    const sampleMonthlyData = {
      status: true,
      sun_sign: sign === "aries" ? "牡羊座" : "牡羊座", // This would be dynamic based on sign
      prediction_month: "1月",
      prediction: [
        "牡羊座の支配星である火星が第1ハウスにあるため、新年を始めるのに理想的な方法です。火星があなたの第1ハウスを通過する際に、冥王星と土星からスクエアによる強い対立に遭遇しますが、これらの惑星があなたのコミットメントと強さについて投げかける問いに対処するエネルギーを持っているでしょう。",
        "これは軽薄な目標を立てる時期ではありません。そのような目標はすぐに道端に捨て置かれることになるでしょう。これは最も重要な目標を優先事項にしなければならない時期です。",
        "行動への強い呼びかけを感じながらも、あなたが設定しようとしていることにはコミットメントが必要で、あなたの人格が試されることになると感じています。あなたの人生における権力者たちは、あなたが意図していることに抵抗するでしょう。",
        "もしあなたが歩んでいる道に満足しているなら、木星の影響があなたの行動を強化し、重要な瞬間にエネルギーと幸運を加えてくれるでしょう。",
        "牡羊座はとても開放的です。これは恋愛関係において、あなたがより深い感情や恐れを共有することに積極的であり、それが実質的な共有への扉を開き、進展をもたらすことを意味します。",
        "これは他者との前向きな体験の時期です。表面的に楽しむという意味だけでなく、意味のある交流という意味で、あなたの深い部分に到達します。",
      ],
    }

    const processedData = processMonthlyFortuneData(sampleMonthlyData)

  return {
    overview: processedData.overview,
    theme: processedData.theme,
    caution: processedData.caution,
    bestWeeks: ["第2週", "第4週"], // These could be derived from the predictions
    luckyDays: ["5日", "12日", "18日", "25日"], // These could be derived from the predictions
    monthlyAdvice: processedData.advice,
    keyInsights: processedData.keyInsights,
    luckyColor: processedData.luckyColor,
    luckyItem: processedData.luckyItem,
    keyPoints: [
      {
        title: "恋愛運",
        content:
          processedData.keyInsights[4] ||
          "新しい出会いのチャンス。既にパートナーがいる方は、関係がより深まる時期です。",
        icon: "💕",
      },
      {
        title: "仕事運",
        content: processedData.keyInsights[1] || "プロジェクトの成功や昇進の可能性。積極的な姿勢が評価されるでしょう。",
        icon: "💼",
      },
      {
        title: "成長運",
        content: processedData.keyInsights[0] || "体調は安定していますが、規則正しい生活を心がけることが大切です。",
        icon: "🌟",
      },
      {
        title: "人間関係運",
        content: processedData.keyInsights[5] || "投資や副業に良い時期。ただし、無理のない範囲で計画的に進めましょう。",
        icon: "🤝",
      },
    ],
  }
  } catch (error) {
    console.error("Error processing monthly fortune data:", error)
    // Return fallback data if processing fails
    return {
      overview: "今月は新しい可能性に満ちた月となるでしょう。",
      theme: "成長と発展の時期",
      caution: "急がず、着実に進むことを心がけましょう。",
      bestWeeks: ["第2週", "第4週"],
      luckyDays: ["5日", "12日", "18日", "25日"],
      monthlyAdvice: "自分の内なる声に耳を傾け、真の願いに向かって着実に歩を進めることが大切です。",
      keyInsights: [
        "今月は新しい可能性に満ちた月となるでしょう。",
        "目標設定と行動計画が重要です。",
        "注意深く行動することが必要です。",
        "積極的に新しいことに挑戦しましょう。",
      ],
      luckyColor: "金色",
      luckyItem: "手帳",
      keyPoints: [
        {
          title: "恋愛運",
          content: "新しい出会いのチャンス。既にパートナーがいる方は、関係がより深まる時期です。",
          icon: "💕",
        },
        {
          title: "仕事運",
          content: "プロジェクトの成功や昇進の可能性。積極的な姿勢が評価されるでしょう。",
          icon: "💼",
        },
        {
          title: "成長運",
          content: "体調は安定していますが、規則正しい生活を心がけることが大切です。",
          icon: "🌟",
        },
        {
          title: "人間関係運",
          content: "投資や副業に良い時期。ただし、無理のない範囲で計画的に進めましょう。",
          icon: "🤝",
        },
      ],
    }
  }
}

export default function MonthlySignPage({ params }: { params: Promise<{ sign: string }> }) {
  const resolvedParams = use(params)
  const sign = zodiacSigns.find((z) => z.slug === resolvedParams.sign)
  const [isXShareOpen, setIsXShareOpen] = useState(false)
  
  if (!sign) {
    notFound()
  }

  const horoscope = getMonthlyHoroscopeData(resolvedParams.sign)
  const currentMonth = new Date().toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
  })

  const shareText = `${sign.name}の${currentMonth}の運勢をチェック！ #占い植物園 #ペルナちゃん`
  const shareUrl = `https://fortune-plant-garden.vercel.app/monthly/${resolvedParams.sign}`

  return (
    <div className="min-h-screen">
      <Header />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">
            ホーム
          </Link>
          <span>→</span>
          <Link href="/monthly" className="hover:text-primary">
            今月の運勢
          </Link>
          <span>→</span>
          <span className="text-primary">{sign.name}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 px-4 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container mx-auto text-center">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center hand-drawn-shadow wavy-border">
            {sign.svgPath ? (
              <Image src={sign.svgPath} alt={sign.name} width={80} height={80} className="w-20 h-20 object-contain" />
            ) : (
              <span className="text-6xl">{sign.emoji}</span>
            )}
          </div>
          <Badge variant="secondary" className="mb-4 text-lg px-4 py-2 rounded-full">
            {currentMonth}
          </Badge>
          <h2 className="text-4xl font-bold text-primary mb-2">{sign.name}</h2>
          <p className="text-lg text-muted-foreground mb-6">{sign.period}</p>

          {/* Share Buttons */}
          <div className="flex gap-4 justify-center">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full bg-transparent"
              onClick={() => setIsXShareOpen(true)}
            >
              Xでシェア
            </Button>
            <XShareModal
              isOpen={isXShareOpen}
              onClose={() => setIsXShareOpen(false)}
              signName={sign.name}
              signSvgPath={sign.svgPath}
              fortuneText={horoscope.overview}
              shareUrl={shareUrl}
            />
            <LineShareModal
              signName={sign.name}
              signEmoji={sign.emoji}
              signSvgPath={sign.svgPath}
              shareUrl={shareUrl}
              shareText={shareText}
              fortuneType="monthly"
              fortuneData={{
                summary: horoscope.overview,
                luckyColor: horoscope.luckyColor || "金色",
                luckyItem: horoscope.luckyItem || "手帳",
                advice: horoscope.monthlyAdvice,
              }}
              date={currentMonth}
            />
          </div>
        </div>
      </section>

      {/* Monthly Horoscope Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl space-y-8">
          {/* Overview */}
          <Card className="wavy-border hand-drawn-shadow">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-3">
                <span className="text-3xl">🌟</span>
                今月の総評
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">{horoscope.overview}</p>
            </CardContent>
          </Card>

        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold text-primary mb-6">他の星座もチェック</h3>
          <div className="flex gap-2 justify-center flex-wrap">
            {zodiacSigns.map((otherSign) => (
              <Link key={otherSign.slug} href={`/monthly/${otherSign.slug}`}>
                <Button
                  variant={otherSign.slug === resolvedParams.sign ? "default" : "outline"}
                  size="sm"
                  className="rounded-full"
                >
                  {otherSign.emoji} {otherSign.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LINE CTA */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <div className="text-6xl mb-6">📱</div>
            <h3 className="text-3xl font-bold text-primary mb-4">月次レポートをLINEで受け取ろう</h3>
            <p className="text-muted-foreground mb-8">
              LINE公式アカウントに登録すると、{sign.name}の詳しい月次レポートが毎月届きます。
              <br />
              ペルナちゃんからの月初めの特別メッセージもお楽しみに。
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
              LINE公式アカウントを追加
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

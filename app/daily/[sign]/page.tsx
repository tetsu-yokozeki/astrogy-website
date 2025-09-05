"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { notFound } from "next/navigation"
import Image from "next/image"
import { LineShareModal } from "@/components/line-share-modal"
import XShareModal from "@/components/x-share-modal"
import { processFortuneDataWithLLM, sampleFortuneData } from "@/lib/fortune-processor"
import { useEffect, useState, use } from "react"
import { Flower2, ChevronDown, Menu } from "lucide-react"
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

// Mock horoscope data
const getHoroscopeData = async (sign: string) => {
  try {
    // In a real app, this would fetch data from an API based on the sign and date
    // For now, using sample data for all signs with LLM processing
    const processedData = await processFortuneDataWithLLM(sampleFortuneData)

    // Convert processed data to the expected format
    const fortuneMap: { [key: string]: any } = {}

    processedData.forEach((fortune) => {
      fortuneMap[fortune.category] = {
        text: fortune.content,
        advice: fortune.advice,
        luckyColor: fortune.luckyColor,
        luckyItem: fortune.luckyItem,
        luckyAction: fortune.luckyAction,
      }
    })

  // Map to existing structure for compatibility
  return {
    total: fortuneMap.luck || {
      text: "全体的に良い運気に恵まれています。",
      advice: "前向きな気持ちで過ごしましょう",
      luckyColor: "金色",
      luckyItem: "アクセサリー",
      luckyAction: "深呼吸をする",
    },
    love: fortuneMap.personal_life || {
      text: "恋愛運は安定しています。",
      advice: "素直な気持ちを大切に",
      luckyColor: "ピンク",
      luckyItem: "香水",
      luckyAction: "笑顔を心がける",
    },
    work: fortuneMap.profession || {
      text: "仕事運は良好です。",
      advice: "計画的に行動しましょう",
      luckyColor: "青",
      luckyItem: "手帳",
      luckyAction: "整理整頓する",
    },
    relationships: fortuneMap.personal_life || {
      text: "人間関係は順調です。",
      advice: "コミュニケーションを大切に",
      luckyColor: "オレンジ",
      luckyItem: "ペン",
      luckyAction: "友人に連絡する",
    },
    health: fortuneMap.health || {
      text: "健康運は良好です。",
      advice: "バランスを心がけて",
      luckyColor: "緑",
      luckyItem: "タオル",
      luckyAction: "深呼吸をする",
    },
    emotions: fortuneMap.emotions || {
      text: "感情面は安定しています。",
      advice: "リラックスを心がけて",
      luckyColor: "紫",
      luckyItem: "音楽",
      luckyAction: "瞑想する",
    },
    travel: fortuneMap.travel || {
      text: "旅行運は普通です。",
      advice: "計画を確認しましょう",
      luckyColor: "黄色",
      luckyItem: "地図",
      luckyAction: "準備を整える",
    },
  }
  } catch (error) {
    console.error("Error processing fortune data:", error)
    // Return fallback data if processing fails
    return {
      total: {
        text: "今日は全体的に良い運気に恵まれています。",
        advice: "前向きな気持ちで過ごしましょう",
        luckyColor: "金色",
        luckyItem: "アクセサリー",
        luckyAction: "深呼吸をする",
      },
      love: {
        text: "恋愛運は安定しています。",
        advice: "素直な気持ちを大切に",
        luckyColor: "ピンク",
        luckyItem: "香水",
        luckyAction: "笑顔を心がける",
      },
      work: {
        text: "仕事運は良好です。",
        advice: "計画的に行動しましょう",
        luckyColor: "青",
        luckyItem: "手帳",
        luckyAction: "整理整頓する",
      },
      relationships: {
        text: "人間関係は順調です。",
        advice: "コミュニケーションを大切に",
        luckyColor: "オレンジ",
        luckyItem: "ペン",
        luckyAction: "友人に連絡する",
      },
      health: {
        text: "健康運は良好です。",
        advice: "バランスを心がけて",
        luckyColor: "緑",
        luckyItem: "タオル",
        luckyAction: "深呼吸をする",
      },
      emotions: {
        text: "感情面は安定しています。",
        advice: "リラックスを心がけて",
        luckyColor: "紫",
        luckyItem: "音楽",
        luckyAction: "瞑想する",
      },
      travel: {
        text: "旅行運は普通です。",
        advice: "計画を確認しましょう",
        luckyColor: "黄色",
        luckyItem: "地図",
        luckyAction: "準備を整える",
      },
    }
  }
}

export default function DailySignPage({ params }: { params: Promise<{ sign: string }> }) {
  const resolvedParams = use(params)
  const sign = zodiacSigns.find((z) => z.slug === resolvedParams.sign)
  const [horoscope, setHoroscope] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isXShareOpen, setIsXShareOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('total')

  if (!sign) {
    notFound()
  }

  useEffect(() => {
    const loadHoroscope = async () => {
      setIsLoading(true)
      try {
        const data = await getHoroscopeData(resolvedParams.sign)
        setHoroscope(data)
      } catch (error) {
        console.error("Failed to load horoscope data:", error)
        // Fallback to basic data structure
        setHoroscope({
          total: {
            text: "運勢を読み込み中です...",
            advice: "しばらくお待ちください",
            luckyColor: "白",
            luckyItem: "お守り",
            luckyAction: "深呼吸する",
          },
          love: {
            text: "恋愛運を読み込み中です...",
            advice: "しばらくお待ちください",
            luckyColor: "ピンク",
            luckyItem: "花",
            luckyAction: "笑顔を心がける",
          },
          work: {
            text: "仕事運を読み込み中です...",
            advice: "しばらくお待ちください",
            luckyColor: "青",
            luckyItem: "ペン",
            luckyAction: "計画を立てる",
          },
          relationships: {
            text: "人間関係運を読み込み中です...",
            advice: "しばらくお待ちください",
            luckyColor: "オレンジ",
            luckyItem: "手紙",
            luckyAction: "挨拶する",
          },
          health: {
            text: "健康運を読み込み中です...",
            advice: "しばらくお待ちください",
            luckyColor: "緑",
            luckyItem: "タオル",
            luckyAction: "ストレッチする",
          },
          emotions: {
            text: "感情運を読み込み中です...",
            advice: "しばらくお待ちください",
            luckyColor: "紫",
            luckyItem: "音楽",
            luckyAction: "瞑想する",
          },
          travel: {
            text: "旅行運を読み込み中です...",
            advice: "しばらくお待ちください",
            luckyColor: "黄色",
            luckyItem: "地図",
            luckyAction: "準備する",
          },
        })
      } finally {
        setIsLoading(false)
      }
    }

    loadHoroscope()
  }, [resolvedParams.sign])

  const today = new Date().toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  })

  const shareText = `${sign.name}の今日の運勢をチェック！ #占い植物園 #ピルナちゃん`
  const shareUrl = `https://fortune-plant-garden.vercel.app/daily/${resolvedParams.sign}`

  if (isLoading || !horoscope) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground">運勢を読み込み中...</p>
        </div>
      </div>
    )
  }

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
          <Link href="/daily" className="hover:text-primary">
            今日の運勢
          </Link>
          <span>→</span>
          <span className="text-primary">{sign.name}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto text-center">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center hand-drawn-shadow wavy-border">
            {sign.svgPath ? (
              <Image src={sign.svgPath} alt={sign.name} width={80} height={80} className="w-20 h-20 object-contain" />
            ) : (
              <span className="text-6xl">{sign.emoji}</span>
            )}
          </div>
          <Badge variant="secondary" className="mb-4 text-lg px-4 py-2 rounded-full">
            {today}
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
              fortuneText={horoscope?.total?.text || "運勢を読み込み中..."}
              shareUrl={shareUrl}
            />
            <LineShareModal
              signName={sign.name}
              signEmoji={sign.emoji}
              signSvgPath={sign.svgPath}
              shareUrl={shareUrl}
              shareText={shareText}
              fortuneType="daily"
              fortuneData={{
                summary: horoscope?.total?.text || "運勢を読み込み中...",
                luckyColor: horoscope?.total?.luckyColor || "",
                luckyItem: horoscope?.total?.luckyItem || "",
                advice: horoscope?.total?.advice || "",
              }}
              date={today}
            />
          </div>
        </div>
      </section>

      {/* Horoscope Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Tabs defaultValue="total" className="w-full">
            <TabsList className="grid w-full grid-cols-6 mb-8 overflow-x-auto bg-muted/30 p-1 rounded-2xl">
              <TabsTrigger 
                value="total" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-orange-500/25 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                総合運
              </TabsTrigger>
              <TabsTrigger 
                value="love" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-rose-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-pink-500/25 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                恋愛
              </TabsTrigger>
              <TabsTrigger 
                value="work" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-blue-500/25 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                仕事
              </TabsTrigger>
              <TabsTrigger 
                value="health" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-green-500/25 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                健康
              </TabsTrigger>
              <TabsTrigger 
                value="emotions" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-violet-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-purple-500/25 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                感情
              </TabsTrigger>
              <TabsTrigger 
                value="travel" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-teal-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-cyan-500/25 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                旅行
              </TabsTrigger>
            </TabsList>

            <TabsContent value="total">
              <Card className="wavy-border hand-drawn-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-primary">総合運</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg leading-relaxed">{horoscope.total.text}</p>
                </CardContent>
              </Card>
            </TabsContent>

            {["love", "work", "health", "emotions", "travel"].map((category) => {
              const categoryNames = {
                love: "恋愛運",
                work: "仕事運",
                health: "健康運",
                emotions: "感情・メンタル",
                travel: "旅行・移動",
              }

              return (
                <TabsContent key={category} value={category}>
                  <Card
                    className={
                      category === "love" || category === "emotions"
                        ? "wavy-border-alt hand-drawn-shadow"
                        : "wavy-border hand-drawn-shadow"
                    }
                  >
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl text-primary">
                        {categoryNames[category as keyof typeof categoryNames]}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-lg leading-relaxed">{horoscope[category].text}</p>
                    </CardContent>
                  </Card>
                </TabsContent>
              )
            })}
          </Tabs>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold text-primary mb-6">他の星座もチェック</h3>
          <div className="flex gap-2 justify-center flex-wrap">
            {zodiacSigns.map((otherSign) => (
              <Link key={otherSign.slug} href={`/daily/${otherSign.slug}`}>
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
            <div className="text-6xl mb-6">💬</div>
            <h3 className="text-3xl font-bold text-primary mb-4">もっと詳しい占いをLINEで</h3>
            <p className="text-muted-foreground mb-8">
              LINE公式アカウントに登録すると、{sign.name}の週次・月次の詳しいレポートが届きます。
              <br />
              ペルナちゃんからの特別なメッセージも受け取れますよ。
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

'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Menu, Flower2, Heart, Waves, Leaf, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { useState, useEffect } from "react"

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

const characters = [
  {
    name: "ペルナ",
    plant: "ラフレシア",
    description: "めっちゃくさいけど、実はすごく綺麗好き。\n専門は四柱推命で、恋愛相談になると変身する。",
    specialty: "四柱推命・恋愛相談",
    color: "赤",
    image: "/perna-character-illustration.png",
  },
]

export default function HomePage() {
  const [currentDate, setCurrentDate] = useState({
    date: "",
    dayOfWeek: ""
  })

  useEffect(() => {
    const updateDate = () => {
      const now = new Date()
      const date = now.toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
      const dayOfWeek = now.toLocaleDateString("ja-JP", {
        weekday: "long",
      })
      setCurrentDate({ date, dayOfWeek })
    }

    // 初回実行
    updateDate()

    // 毎分更新（日付が変わる可能性があるため）
    const interval = setInterval(updateDate, 60000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-3 sm:px-4">
        <div className="container mx-auto text-center">
          <div className="mb-6 sm:mb-8">
            <div className="w-64 h-48 sm:w-80 sm:h-60 mx-auto mb-4 sm:mb-6 relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/E875F837-5C8F-4537-9C0D-EF8F4F27E5ED-bB6nDOT8K31I5Z8JWVVQZyntwZUnid.png"
                alt="占い植物園のキャラクターたち - ペルナちゃんと仲間たち"
                fill
                className="object-contain"
                priority
              />
            </div>
            <h2 className="title-text text-primary mb-3 sm:mb-4">ようこそ、占い植物園へ</h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto px-2">
              ラフレシアのペルナちゃんと仲間たちがあなたの運勢を占います。
              <br className="hidden sm:block" />
              今日のあなたの星座はどんな一日になるでしょうか？
            </p>
            <div className="flex flex-col gap-3 sm:gap-4 justify-center max-w-sm mx-auto sm:max-w-none sm:flex-row">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-6 sm:px-8 bg-transparent mobile-touch-target"
                onClick={() => {
                  document.getElementById('characters')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  })
                }}
              >
                占い植物園とは？
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Today's Fortune Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 text-lg px-4 py-2 rounded-full">
              {currentDate.date}（{currentDate.dayOfWeek}）
            </Badge>
            <h3 className="text-3xl font-bold text-primary mb-4">今日の運勢</h3>
            <p className="text-muted-foreground mb-2">あなたの星座をクリックして、今日の運勢をチェックしましょう</p>
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 px-4 py-2 rounded-full">
              <Clock className="w-4 h-4 text-primary" />
              <span>毎日朝7:00ごろに更新</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {zodiacSigns.map((sign, index) => (
              <Link key={sign.slug} href={`/daily/${sign.slug}`}>
                <Card
                  className={`hover:shadow-lg transition-all duration-300 cursor-pointer hand-drawn-shadow ${
                    index % 2 === 0 ? "wavy-border" : "wavy-border-alt"
                  } hover:scale-105`}
                >
                  <CardHeader className="text-center pb-2">
                    <div className="flex justify-center mb-2">
                      <Image
                        src={sign.svgPath}
                        alt={sign.name}
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </div>
                    <CardTitle className="text-lg text-primary">{sign.name}</CardTitle>
                    <CardDescription className="text-sm">{sign.period}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                      <span>運勢を見る</span>
                      <span>→</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Character Section */}
      <section id="characters" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">植物園の仲間たち</h3>
            <p className="text-muted-foreground">占い植物園のメインキャラクターをご紹介</p>
          </div>

          <div className="max-w-2xl mx-auto">
            {characters.map((character, index) => (
              <Card
                key={character.name}
                className="text-center hand-drawn-shadow wavy-border hover:scale-105 transition-transform duration-300"
              >
                <CardHeader>
                  <div className="w-48 h-48 mx-auto mb-6 relative">
                    <Image
                      src={character.image || "/perna-character-illustration.png"}
                      alt={character.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <CardTitle className="text-2xl text-primary mb-2">{character.name}</CardTitle>
                  <CardDescription className="text-lg">({character.plant})</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-muted-foreground mb-4 leading-relaxed whitespace-pre-line">{character.description}</p>
                  <Badge variant="outline" className="text-sm px-4 py-2 bg-muted/50 border-primary/20 text-primary">
                    得意: {character.specialty}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">NEWS</h3>
            <p className="text-muted-foreground">占い植物園の最新情報をお届けします</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* モバイルでは最初の2つのみ表示、デスクトップでは全て表示 */}
            <div className="block md:block">
              <Link href="/news/2025/01/winter-solstice-fortune">
                <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer hand-drawn-shadow wavy-border hover:scale-105">
                  <div className="aspect-video relative mb-4 overflow-hidden rounded-t-lg">
                    <Image
                      src="/winter-solstice-candles-spiritual.png"
                      alt="冬至の特別占い"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="pt-0">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        占い
                      </Badge>
                      <span className="text-xs text-muted-foreground">2025.01.15</span>
                    </div>
                    <CardTitle className="text-lg text-primary">冬至の特別占い - 新年の運勢を占おう</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground">
                      冬至の特別な日に、ペルナちゃんが新年の運勢を特別に占います。
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>

            <div className="block md:block">
              <Link href="/news/2025/01/new-character-introduction">
                <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer hand-drawn-shadow wavy-border-alt hover:scale-105">
                  <div className="aspect-video relative mb-4 overflow-hidden rounded-t-lg">
                    <Image
                      src="/pitcher-plant-character-cute.png"
                      alt="新キャラクター紹介"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="pt-0">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        キャラクター
                      </Badge>
                      <span className="text-xs text-muted-foreground">2025.01.10</span>
                    </div>
                    <CardTitle className="text-lg text-primary">新キャラクター「グリップちゃん」登場！</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground">
                      ウツボカズラの新キャラクター「グリップちゃん」が仲間に加わりました。
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>

            {/* デスクトップでのみ表示 */}
            <div className="hidden md:block">
              <Link href="/news/2025/01/love-fortune-special">
                <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer hand-drawn-shadow wavy-border hover:scale-105">
                  <div className="aspect-video relative mb-4 overflow-hidden rounded-t-lg">
                    <Image src="/rafflesia-flower-love-romance.png" alt="恋愛運特集" fill className="object-cover" />
                  </div>
                  <CardHeader className="pt-0">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        恋愛
                      </Badge>
                      <span className="text-xs text-muted-foreground">2025.01.05</span>
                    </div>
                    <CardTitle className="text-lg text-primary">バレンタイン特集 - 恋愛運アップの秘訣</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground">
                      バレンタインに向けて、恋愛運をアップさせる方法をペルナちゃんが教えます。
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="rounded-full px-8 bg-transparent" asChild>
              <Link href="/news">すべてのNEWSを見る</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* LINE Official Account Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">もっと詳しい占いをLINEで</h3>
            <p className="text-lg text-muted-foreground mb-8">
              LINE公式アカウントに登録すると、天秤座の週次・月次の詳しいレポートが届きます。<br />
              ペルナちゃんからの特別なメッセージも受け取れますよ。
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-green-200 dark:border-green-800">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-4xl">📱</span>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-2xl font-bold text-primary mb-2">LINE公式アカウント</h4>
                <p className="text-muted-foreground mb-4">
                  週次・月次の詳しいレポートとペルナちゃんからの特別メッセージをお届け
                </p>
                <Button 
                  size="lg" 
                  className="bg-green-500 hover:bg-green-600 text-white rounded-full px-8"
                  onClick={() => {
                    // LINE公式アカウントのURLを開く
                    window.open('https://line.me/R/ti/p/@your-line-account', '_blank')
                  }}
                >
                  LINE公式アカウントを追加
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

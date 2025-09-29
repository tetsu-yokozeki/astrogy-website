import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/footer"

const zodiacSigns = [
  {
    name: "牡羊座",
    slug: "aries",
    period: "3/21-4/19",
    emoji: "♈",
    svgPath: "/zodiac-1.svg",
    monthlyTheme: "新しい挑戦",
  },
  {
    name: "牡牛座",
    slug: "taurus",
    period: "4/20-5/20",
    emoji: "♉",
    svgPath: "/zodiac-2.svg",
    monthlyTheme: "安定と成長",
  },
  {
    name: "双子座",
    slug: "gemini",
    period: "5/21-6/21",
    emoji: "♊",
    svgPath: "/zodiac-3.svg",
    monthlyTheme: "コミュニケーション",
  },
  {
    name: "蟹座",
    slug: "cancer",
    period: "6/22-7/22",
    emoji: "♋",
    svgPath: "/zodiac-4.svg",
    monthlyTheme: "家族との絆",
  },
  { name: "獅子座", slug: "leo", period: "7/23-8/22", emoji: "♌", svgPath: "/zodiac-5.svg", monthlyTheme: "自己表現" },
  {
    name: "乙女座",
    slug: "virgo",
    period: "8/23-9/22",
    emoji: "♍",
    svgPath: "/zodiac-6.svg",
    monthlyTheme: "完璧を目指す",
  },
  {
    name: "天秤座",
    slug: "libra",
    period: "9/23-10/23",
    emoji: "♎",
    svgPath: "/zodiac-7.png",
    monthlyTheme: "バランスと調和",
  },
  {
    name: "蠍座",
    slug: "scorpio",
    period: "10/24-11/22",
    emoji: "♏",
    svgPath: "/zodiac-8.png",
    monthlyTheme: "深い変化",
  },
  {
    name: "射手座",
    slug: "sagittarius",
    period: "11/23-12/21",
    emoji: "♐",
    svgPath: "/zodiac-9.png",
    monthlyTheme: "冒険と学び",
  },
  {
    name: "山羊座",
    slug: "capricorn",
    period: "12/22-1/19",
    emoji: "♑",
    svgPath: "/zodiac-10.png",
    monthlyTheme: "目標達成",
  },
  {
    name: "水瓶座",
    slug: "aquarius",
    period: "1/20-2/18",
    emoji: "♒",
    svgPath: "/zodiac-11.png",
    monthlyTheme: "革新と友情",
  },
  {
    name: "魚座",
    slug: "pisces",
    period: "2/19-3/20",
    emoji: "♓",
    svgPath: "/zodiac-12.png",
    monthlyTheme: "直感と癒し",
  },
]

export default function MonthlyPage() {
  const currentMonth = new Date().toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
  })

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-3 py-3 sm:px-4 sm:py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center text-xl sm:text-2xl mobile-touch-target">
                🌺
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-primary">占い植物園</h1>
                <p className="text-xs sm:text-sm text-muted-foreground">ペルナちゃんの占い</p>
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-8 sm:py-12 px-3 sm:px-4 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container mx-auto text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl hand-drawn-shadow wavy-border">
            📅
          </div>
          <Badge variant="secondary" className="mb-3 sm:mb-4 text-sm sm:text-lg px-3 sm:px-4 py-1 sm:py-2 rounded-full">
            {currentMonth}
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-3 sm:mb-4">今月の運勢</h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto px-2">
            ペルナちゃんが占う、あなたの今月の運勢をチェックしましょう。
            <br className="hidden sm:block" />
            月全体の流れを把握して、素敵な一ヶ月を過ごしてくださいね。
          </p>
        </div>
      </section>

      {/* Zodiac Grid */}
      <section className="py-8 sm:py-12 lg:py-16 px-3 sm:px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-7xl mx-auto">
            {zodiacSigns.map((sign, index) => (
              <Link key={sign.slug} href={`/monthly/${sign.slug}`}>
                <Card
                  className={`hover:shadow-lg transition-all duration-300 cursor-pointer hand-drawn-shadow ${
                    index % 2 === 0 ? "wavy-border" : "wavy-border-alt"
                  } hover:scale-105 bg-card/80 backdrop-blur-sm mobile-touch-target`}
                >
                  <CardHeader className="text-center pb-2 sm:pb-3 p-3 sm:p-4">
                    <div className="mb-2 sm:mb-3 flex justify-center">
                      {sign.svgPath ? (
                        <Image
                          src={sign.svgPath || "/placeholder.svg"}
                          alt={sign.name}
                          width={60}
                          height={60}
                          className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
                        />
                      ) : (
                        <div className="text-3xl sm:text-4xl lg:text-5xl">{sign.emoji}</div>
                      )}
                    </div>
                    <CardTitle className="text-sm sm:text-lg lg:text-xl text-primary">{sign.name}</CardTitle>
                    <CardDescription className="text-xs sm:text-sm text-muted-foreground">
                      {sign.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center pt-0 p-3 sm:p-4">
                    <div className="mb-2 sm:mb-3">
                      <div className="text-xs sm:text-sm text-muted-foreground mb-1">今月のテーマ</div>
                      <div className="text-sm sm:text-base lg:text-lg font-semibold text-primary">
                        {sign.monthlyTheme}
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm text-primary font-medium">
                      <span>詳しく見る</span>
                      <span>→</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 sm:py-12 px-3 sm:px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">他の占いもチェック</h3>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center max-w-sm mx-auto sm:max-w-none">
            <Link href="/daily" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-6 sm:px-8 bg-transparent w-full sm:w-auto mobile-touch-target"
              >
                今日の運勢
              </Button>
            </Link>
            <Link href="/news" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-6 sm:px-8 bg-transparent w-full sm:w-auto mobile-touch-target"
              >
                占いNEWS
              </Button>
            </Link>
            <Link href="/world/perna" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-6 sm:px-8 bg-transparent w-full sm:w-auto mobile-touch-target"
              >
                ペルナちゃんの世界観
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

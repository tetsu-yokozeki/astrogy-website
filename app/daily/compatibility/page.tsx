import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

const zodiacSigns = [
  { name: "牡羊座", slug: "aries", period: "3/21-4/19", svgPath: "/zodiac-1.svg" },
  { name: "牡牛座", slug: "taurus", period: "4/20-5/20", svgPath: "/zodiac-2.svg" },
  { name: "双子座", slug: "gemini", period: "5/21-6/21", svgPath: "/zodiac-3.svg" },
  { name: "蟹座", slug: "cancer", period: "6/22-7/22", svgPath: "/zodiac-4.svg" },
  { name: "獅子座", slug: "leo", period: "7/23-8/22", svgPath: "/zodiac-5.svg" },
  { name: "乙女座", slug: "virgo", period: "8/23-9/22", svgPath: "/zodiac-6.svg" },
  { name: "天秤座", slug: "libra", period: "9/23-10/23", svgPath: "/zodiac-7.png" },
  { name: "蠍座", slug: "scorpio", period: "10/24-11/22", svgPath: "/zodiac-8.png" },
  { name: "射手座", slug: "sagittarius", period: "11/23-12/21", svgPath: "/zodiac-9.png" },
  { name: "山羊座", slug: "capricorn", period: "12/22-1/19", svgPath: "/zodiac-10.png" },
  { name: "水瓶座", slug: "aquarius", period: "1/20-2/18", svgPath: "/zodiac-11.png" },
  { name: "魚座", slug: "pisces", period: "2/19-3/20", svgPath: "/zodiac-12.png" },
]

const compatibilityData = {
  aries: { best: ["leo", "sagittarius", "gemini"], good: ["aquarius", "aries"], challenging: ["cancer", "capricorn"] },
  taurus: { best: ["virgo", "capricorn", "cancer"], good: ["pisces", "taurus"], challenging: ["leo", "aquarius"] },
  gemini: { best: ["libra", "aquarius", "aries"], good: ["leo", "gemini"], challenging: ["virgo", "pisces"] },
  cancer: { best: ["scorpio", "pisces", "taurus"], good: ["virgo", "cancer"], challenging: ["aries", "libra"] },
  leo: { best: ["aries", "sagittarius", "gemini"], good: ["libra", "leo"], challenging: ["taurus", "scorpio"] },
  virgo: {
    best: ["taurus", "capricorn", "cancer"],
    good: ["scorpio", "virgo"],
    challenging: ["gemini", "sagittarius"],
  },
  libra: { best: ["gemini", "aquarius", "leo"], good: ["sagittarius", "libra"], challenging: ["cancer", "capricorn"] },
  scorpio: { best: ["cancer", "pisces", "virgo"], good: ["capricorn", "scorpio"], challenging: ["leo", "aquarius"] },
  sagittarius: { best: ["aries", "leo", "libra"], good: ["aquarius", "sagittarius"], challenging: ["virgo", "pisces"] },
  capricorn: { best: ["taurus", "virgo", "scorpio"], good: ["pisces", "capricorn"], challenging: ["aries", "libra"] },
  aquarius: {
    best: ["gemini", "libra", "sagittarius"],
    good: ["aries", "aquarius"],
    challenging: ["taurus", "scorpio"],
  },
  pisces: {
    best: ["cancer", "scorpio", "capricorn"],
    good: ["taurus", "pisces"],
    challenging: ["gemini", "sagittarius"],
  },
}

const todayCompatibility = [
  { sign1: "牡羊座", sign2: "獅子座", compatibility: 95, type: "恋愛", description: "情熱的な一日になりそう" },
  { sign1: "牡牛座", sign2: "乙女座", compatibility: 88, type: "仕事", description: "協力して成果を上げられる" },
  { sign1: "双子座", sign2: "天秤座", compatibility: 92, type: "友情", description: "楽しい会話が弾む日" },
  { sign1: "蟹座", sign2: "蠍座", compatibility: 90, type: "恋愛", description: "深い絆を感じられる" },
  { sign1: "獅子座", sign2: "射手座", compatibility: 87, type: "仕事", description: "お互いを高め合える" },
  { sign1: "乙女座", sign2: "山羊座", compatibility: 85, type: "友情", description: "信頼関係が深まる" },
]

function getCompatibilityColor(score: number) {
  if (score >= 90) return "text-green-600"
  if (score >= 80) return "text-blue-600"
  if (score >= 70) return "text-yellow-600"
  return "text-orange-600"
}

function getCompatibilityLevel(score: number) {
  if (score >= 90) return "最高"
  if (score >= 80) return "良好"
  if (score >= 70) return "普通"
  return "注意"
}

export default function CompatibilityPage() {
  const today = new Date().toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-3 py-3 sm:px-4 sm:py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center text-xl sm:text-2xl mobile-touch-target">
                🌺
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-primary">占い植物園</h1>
                <p className="text-xs sm:text-sm text-muted-foreground">今日の相性占い</p>
              </div>
            </Link>
            <Link href="/daily" className="text-sm text-muted-foreground hover:text-primary">
              ← 戻る
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-3 sm:px-4">
        <div className="container mx-auto text-center">
          <h2 className="title-text text-primary mb-3 sm:mb-4">今日の相性占い</h2>
          <Badge variant="secondary" className="mb-4 text-lg px-4 py-2 rounded-full">
            {today}
          </Badge>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-3xl mx-auto px-2">
            今日特に相性の良い星座同士をペルナちゃんが占いました。
            <br className="hidden sm:block" />
            恋愛、仕事、友情など、様々な関係性での相性をチェックしましょう。
          </p>
        </div>
      </section>

      {/* Today's Best Compatibility */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">今日の注目相性</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {todayCompatibility.map((comp, index) => (
                <Card
                  key={`${comp.sign1}-${comp.sign2}`}
                  className={`hand-drawn-shadow ${index % 2 === 0 ? "wavy-border" : "wavy-border-alt"}`}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-primary">{comp.sign1}</span>
                        <span className="text-2xl">💕</span>
                        <span className="font-bold text-primary">{comp.sign2}</span>
                      </div>
                      <Badge variant="secondary">{comp.type}</Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`text-2xl font-bold ${getCompatibilityColor(comp.compatibility)}`}>
                        {comp.compatibility}%
                      </div>
                      <Badge variant="outline" className={getCompatibilityColor(comp.compatibility)}>
                        {getCompatibilityLevel(comp.compatibility)}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{comp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Zodiac Compatibility Chart */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">星座相性チャート</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {zodiacSigns.map((sign, index) => (
                <Card
                  key={sign.slug}
                  className={`hand-drawn-shadow ${index % 2 === 0 ? "wavy-border" : "wavy-border-alt"} hover:scale-105 transition-transform cursor-pointer`}
                >
                  <CardHeader className="text-center pb-2">
                    <div className="flex justify-center mb-2">
                      <Image
                        src={sign.svgPath || "/placeholder.svg"}
                        alt={sign.name}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <CardTitle className="text-lg text-primary">{sign.name}</CardTitle>
                    <CardDescription className="text-xs">{sign.period}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <div className="space-y-2">
                      <div>
                        <span className="text-xs font-semibold text-green-600">最高の相性:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {compatibilityData[sign.slug as keyof typeof compatibilityData]?.best
                            .slice(0, 2)
                            .map((compatSign) => {
                              const compatZodiac = zodiacSigns.find((z) => z.slug === compatSign)
                              return (
                                <Badge key={compatSign} variant="default" className="text-xs bg-green-500">
                                  {compatZodiac?.name.slice(0, 2)}
                                </Badge>
                              )
                            })}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compatibility Tips */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">相性を良くするコツ</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hand-drawn-shadow wavy-border">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-2">
                    <span>💝</span>
                    恋愛関係
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• お互いの星座の特徴を理解する</li>
                    <li>• 相手のラッキーカラーを身につける</li>
                    <li>• 相性の良い日にデートを計画</li>
                    <li>• 星座の話題で会話を楽しむ</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hand-drawn-shadow wavy-border-alt">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-2">
                    <span>🤝</span>
                    仕事関係
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 相手の得意分野を活かす</li>
                    <li>• コミュニケーションスタイルを合わせる</li>
                    <li>• 相性の良い日に重要な会議を設定</li>
                    <li>• お互いの強みを認め合う</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hand-drawn-shadow wavy-border">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-2">
                    <span>👫</span>
                    友人関係
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 共通の趣味を見つける</li>
                    <li>• 相手のペースに合わせる</li>
                    <li>• 一緒に占いを楽しむ</li>
                    <li>• お互いの違いを楽しむ</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hand-drawn-shadow wavy-border-alt">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-2">
                    <span>👨‍👩‍👧‍👦</span>
                    家族関係
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 家族の星座を把握する</li>
                    <li>• 相性の良い日に家族時間を作る</li>
                    <li>• お互いの性格を理解し合う</li>
                    <li>• 星座の特徴を活かした役割分担</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">他の占いもチェック</h3>
          <div className="flex flex-col gap-3 sm:gap-4 justify-center max-w-sm mx-auto sm:max-w-none sm:flex-row">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link href="/daily">今日の運勢</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent" asChild>
              <Link href="/about/zodiac-guide">星座ガイド</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

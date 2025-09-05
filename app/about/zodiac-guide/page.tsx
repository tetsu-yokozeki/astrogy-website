import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

const zodiacSigns = [
  {
    name: "牡羊座",
    slug: "aries",
    period: "3/21-4/19",
    emoji: "♈",
    svgPath: "/zodiac-1.svg",
    element: "火",
    quality: "活動宮",
    rulingPlanet: "火星",
    characteristics: ["積極的", "リーダーシップ", "情熱的", "行動力がある"],
    strengths: ["決断力", "勇気", "開拓精神", "正直さ"],
    weaknesses: ["短気", "衝動的", "自己中心的", "飽きっぽい"],
    compatibility: {
      best: ["獅子座", "射手座", "双子座"],
      good: ["水瓶座", "牡羊座"],
      challenging: ["蟹座", "山羊座"],
    },
    luckyItems: ["赤いアイテム", "鉄製品", "スポーツ用品"],
    advice: "行動力を活かして新しいことにチャレンジしましょう。ただし、計画性も大切にしてください。",
  },
  {
    name: "牡牛座",
    slug: "taurus",
    period: "4/20-5/20",
    emoji: "♉",
    svgPath: "/zodiac-2.svg",
    element: "地",
    quality: "固定宮",
    rulingPlanet: "金星",
    characteristics: ["安定志向", "忍耐強い", "美的センス", "現実的"],
    strengths: ["持続力", "信頼性", "芸術的才能", "経済感覚"],
    weaknesses: ["頑固", "変化を嫌う", "物欲が強い", "怠惰"],
    compatibility: {
      best: ["乙女座", "山羊座", "蟹座"],
      good: ["魚座", "牡牛座"],
      challenging: ["獅子座", "水瓶座"],
    },
    luckyItems: ["緑色のアイテム", "植物", "美しい装飾品"],
    advice: "安定した環境で才能を発揮できます。美しいものに囲まれて過ごしましょう。",
  },
  {
    name: "双子座",
    slug: "gemini",
    period: "5/21-6/21",
    emoji: "♊",
    svgPath: "/zodiac-3.svg",
    element: "風",
    quality: "柔軟宮",
    rulingPlanet: "水星",
    characteristics: ["好奇心旺盛", "コミュニケーション上手", "多才", "適応力がある"],
    strengths: ["知的", "機転が利く", "社交的", "情報収集力"],
    weaknesses: ["飽きっぽい", "表面的", "優柔不断", "神経質"],
    compatibility: {
      best: ["天秤座", "水瓶座", "牡羊座"],
      good: ["獅子座", "双子座"],
      challenging: ["乙女座", "魚座"],
    },
    luckyItems: ["本", "通信機器", "黄色いアイテム"],
    advice: "好奇心を大切にして、様々な分野に挑戦してみましょう。情報交換を楽しんでください。",
  },
  {
    name: "蟹座",
    slug: "cancer",
    period: "6/22-7/22",
    emoji: "♋",
    svgPath: "/zodiac-4.svg",
    element: "水",
    quality: "活動宮",
    rulingPlanet: "月",
    characteristics: ["家族思い", "感情豊か", "保護本能", "直感力"],
    strengths: ["共感力", "母性本能", "記憶力", "想像力"],
    weaknesses: ["感情的", "内向的", "心配性", "過保護"],
    compatibility: {
      best: ["蠍座", "魚座", "牡牛座"],
      good: ["乙女座", "蟹座"],
      challenging: ["牡羊座", "天秤座"],
    },
    luckyItems: ["銀色のアイテム", "貝殻", "家族の写真"],
    advice: "家族や親しい人との時間を大切にしましょう。直感を信じて行動してください。",
  },
  {
    name: "獅子座",
    slug: "leo",
    period: "7/23-8/22",
    emoji: "♌",
    svgPath: "/zodiac-5.svg",
    element: "火",
    quality: "固定宮",
    rulingPlanet: "太陽",
    characteristics: ["自信に満ちている", "創造的", "寛大", "華やか"],
    strengths: ["リーダーシップ", "創造力", "楽観的", "忠実"],
    weaknesses: ["プライドが高い", "支配的", "見栄っ張り", "頑固"],
    compatibility: {
      best: ["牡羊座", "射手座", "双子座"],
      good: ["天秤座", "獅子座"],
      challenging: ["牡牛座", "蠍座"],
    },
    luckyItems: ["金色のアイテム", "太陽のモチーフ", "華やかな装飾品"],
    advice: "自信を持って自分らしさを表現しましょう。創造的な活動に取り組むと良いでしょう。",
  },
  {
    name: "乙女座",
    slug: "virgo",
    period: "8/23-9/22",
    emoji: "♍",
    svgPath: "/zodiac-6.svg",
    element: "地",
    quality: "柔軟宮",
    rulingPlanet: "水星",
    characteristics: ["完璧主義", "分析力", "実用的", "奉仕精神"],
    strengths: ["几帳面", "責任感", "分析力", "実務能力"],
    weaknesses: ["神経質", "批判的", "心配性", "完璧主義"],
    compatibility: {
      best: ["牡牛座", "山羊座", "蟹座"],
      good: ["蠍座", "乙女座"],
      challenging: ["双子座", "射手座"],
    },
    luckyItems: ["整理用品", "健康グッズ", "ナチュラルなアイテム"],
    advice: "細かい作業や分析が得意です。健康管理にも気を配りましょう。",
  },
]

export default function ZodiacGuidePage() {
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
                <p className="text-xs sm:text-sm text-muted-foreground">星座ガイド</p>
              </div>
            </Link>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
              ← 戻る
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-3 sm:px-4">
        <div className="container mx-auto text-center">
          <h2 className="title-text text-primary mb-3 sm:mb-4">12星座ガイド</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-3xl mx-auto px-2">
            各星座の特徴や性格、相性について詳しく解説します。
            <br className="hidden sm:block" />
            あなたの星座や気になる人の星座について学んでみましょう。
          </p>
        </div>
      </section>

      {/* Zodiac Signs */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="space-y-8 max-w-6xl mx-auto">
            {zodiacSigns.map((sign, index) => (
              <Card
                key={sign.slug}
                className={`hand-drawn-shadow ${index % 2 === 0 ? "wavy-border" : "wavy-border-alt"} overflow-hidden`}
              >
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                        {sign.svgPath ? (
                          <Image
                            src={sign.svgPath || "/placeholder.svg"}
                            alt={sign.name}
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        ) : (
                          <span className="text-3xl">{sign.emoji}</span>
                        )}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary">{sign.name}</h3>
                        <p className="text-muted-foreground">{sign.period}</p>
                        <div className="flex gap-2 mt-2">
                          <Badge variant="secondary" className="text-xs">
                            {sign.element}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {sign.quality}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-sm text-primary mb-1">支配星</h4>
                        <p className="text-sm text-muted-foreground">{sign.rulingPlanet}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-primary mb-1">基本的な特徴</h4>
                        <div className="flex flex-wrap gap-1">
                          {sign.characteristics.map((char) => (
                            <Badge key={char} variant="outline" className="text-xs">
                              {char}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-muted/30">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm text-primary mb-2">長所</h4>
                        <ul className="space-y-1">
                          {sign.strengths.map((strength) => (
                            <li key={strength} className="text-xs text-muted-foreground flex items-center gap-2">
                              <span className="text-green-500">+</span>
                              {strength}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-primary mb-2">注意点</h4>
                        <ul className="space-y-1">
                          {sign.weaknesses.map((weakness) => (
                            <li key={weakness} className="text-xs text-muted-foreground flex items-center gap-2">
                              <span className="text-orange-500">!</span>
                              {weakness}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm text-primary mb-2">相性</h4>
                        <div className="space-y-2">
                          <div>
                            <span className="text-xs font-medium">最高:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {sign.compatibility.best.map((comp) => (
                                <Badge key={comp} variant="default" className="text-xs bg-green-500">
                                  {comp}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <span className="text-xs font-medium">良好:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {sign.compatibility.good.map((comp) => (
                                <Badge key={comp} variant="secondary" className="text-xs">
                                  {comp}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm text-primary mb-2">ラッキーアイテム</h4>
                        <ul className="space-y-1">
                          {sign.luckyItems.map((item) => (
                            <li key={item} className="text-xs text-muted-foreground flex items-center gap-2">
                              <span className="text-primary">✦</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2 border-t border-border">
                        <h4 className="font-semibold text-sm text-primary mb-2">アドバイス</h4>
                        <p className="text-xs text-muted-foreground">{sign.advice}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compatibility Chart */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-primary mb-6">星座の相性について</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hand-drawn-shadow wavy-border">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">エレメント（元素）</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <Badge variant="default" className="bg-red-500 mb-2">
                        火
                      </Badge>
                      <p className="text-muted-foreground">牡羊座、獅子座、射手座 - 情熱的で行動力がある</p>
                    </div>
                    <div>
                      <Badge variant="default" className="bg-green-500 mb-2">
                        地
                      </Badge>
                      <p className="text-muted-foreground">牡牛座、乙女座、山羊座 - 現実的で安定志向</p>
                    </div>
                    <div>
                      <Badge variant="default" className="bg-blue-500 mb-2">
                        風
                      </Badge>
                      <p className="text-muted-foreground">双子座、天秤座、水瓶座 - 知的で社交的</p>
                    </div>
                    <div>
                      <Badge variant="default" className="bg-cyan-500 mb-2">
                        水
                      </Badge>
                      <p className="text-muted-foreground">蟹座、蠍座、魚座 - 感情豊かで直感的</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hand-drawn-shadow wavy-border-alt">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">相性の基本ルール</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 同じエレメント同士は理解し合いやすい</li>
                    <li>• 火と風、地と水は補完し合う関係</li>
                    <li>• 対極の星座は刺激し合う関係</li>
                    <li>• 隣り合う星座は学び合う関係</li>
                    <li>• 個人の出生時間も重要な要素</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">あなたの星座の運勢をチェック</h3>
          <div className="flex flex-col gap-3 sm:gap-4 justify-center max-w-sm mx-auto sm:max-w-none sm:flex-row">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link href="/daily">今日の運勢</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent" asChild>
              <Link href="/monthly">今月の運勢</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

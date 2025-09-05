import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const dailyTips = [
  {
    category: "朝の習慣",
    icon: "🌅",
    tips: [
      {
        title: "運勢チェックから始める",
        description: "起床後すぐに今日の運勢をチェックして、一日の心構えを整えましょう。",
        difficulty: "簡単",
        time: "2分",
      },
      {
        title: "ラッキーカラーを身につける",
        description: "その日のラッキーカラーを服装や小物に取り入れて、運気をアップさせましょう。",
        difficulty: "簡単",
        time: "5分",
      },
      {
        title: "ポジティブな言葉を口にする",
        description: "鏡を見ながら「今日も良い一日になる」など、前向きな言葉を声に出しましょう。",
        difficulty: "簡単",
        time: "1分",
      },
    ],
  },
  {
    category: "日中の行動",
    icon: "☀️",
    tips: [
      {
        title: "ラッキーアイテムを持参",
        description: "その日のラッキーアイテムを持ち歩いて、重要な場面で力を発揮させましょう。",
        difficulty: "簡単",
        time: "継続",
      },
      {
        title: "直感を大切にする",
        description: "迷った時は直感を信じて行動してみましょう。運勢の良い日は特に効果的です。",
        difficulty: "普通",
        time: "随時",
      },
      {
        title: "感謝の気持ちを表現",
        description: "小さなことにも感謝の気持ちを持ち、周囲の人に伝えることで運気が循環します。",
        difficulty: "普通",
        time: "随時",
      },
    ],
  },
  {
    category: "夜の振り返り",
    icon: "🌙",
    tips: [
      {
        title: "一日の良かったことを記録",
        description: "その日に起こった良いことを3つ書き出して、ポジティブなエネルギーを蓄積しましょう。",
        difficulty: "簡単",
        time: "5分",
      },
      {
        title: "明日の準備をする",
        description: "翌日の運勢をチェックして、必要な準備や心構えを整えておきましょう。",
        difficulty: "簡単",
        time: "3分",
      },
      {
        title: "リラックスタイムを作る",
        description: "ハーブティーを飲んだり、好きな音楽を聴いたりして、心を落ち着かせましょう。",
        difficulty: "簡単",
        time: "15分",
      },
    ],
  },
]

const zodiacSpecificTips = [
  {
    signs: ["牡羊座", "獅子座", "射手座"],
    element: "火",
    color: "text-red-600",
    tips: [
      "積極的に行動することで運気アップ",
      "新しいチャレンジを恐れない",
      "リーダーシップを発揮する機会を作る",
      "情熱的な気持ちを大切にする",
    ],
  },
  {
    signs: ["牡牛座", "乙女座", "山羊座"],
    element: "地",
    color: "text-green-600",
    tips: ["計画的に物事を進める", "着実な努力を継続する", "実用的なアイテムを活用する", "安定した環境を整える"],
  },
  {
    signs: ["双子座", "天秤座", "水瓶座"],
    element: "風",
    color: "text-blue-600",
    tips: [
      "コミュニケーションを活発にする",
      "新しい情報を積極的に収集",
      "社交的な場に参加する",
      "知的な活動に取り組む",
    ],
  },
  {
    signs: ["蟹座", "蠍座", "魚座"],
    element: "水",
    color: "text-cyan-600",
    tips: ["直感や感情を大切にする", "家族や親しい人との時間を作る", "創造的な活動に取り組む", "心の声に耳を傾ける"],
  },
]

const weeklyTips = [
  { day: "月曜日", tip: "新しい週の始まり。目標を設定して前向きにスタート", icon: "🚀" },
  { day: "火曜日", tip: "エネルギッシュな日。積極的な行動で成果を上げよう", icon: "💪" },
  { day: "水曜日", tip: "週の中間点。バランスを取りながら着実に進もう", icon: "⚖️" },
  { day: "木曜日", tip: "成長の日。学びや自己啓発に時間を使おう", icon: "📚" },
  { day: "金曜日", tip: "創造性の日。アイデアを形にする活動がおすすめ", icon: "🎨" },
  { day: "土曜日", tip: "リラックスの日。趣味や好きなことに時間を使おう", icon: "🎵" },
  { day: "日曜日", tip: "準備の日。来週に向けて心と体を整えよう", icon: "🧘" },
]

export default function TipsPage() {
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
                <p className="text-xs sm:text-sm text-muted-foreground">運勢アップのコツ</p>
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
          <h2 className="title-text text-primary mb-3 sm:mb-4">運勢アップのコツ</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-3xl mx-auto px-2">
            ペルナちゃんが教える、毎日の運勢をより良くするための実践的なコツをご紹介します。
            <br className="hidden sm:block" />
            簡単にできることから始めて、幸運体質を身につけましょう。
          </p>
        </div>
      </section>

      {/* Daily Tips by Time */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">時間帯別運勢アップ法</h3>
            <div className="space-y-8">
              {dailyTips.map((timeCategory, categoryIndex) => (
                <Card
                  key={timeCategory.category}
                  className={`hand-drawn-shadow ${categoryIndex % 2 === 0 ? "wavy-border" : "wavy-border-alt"}`}
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-primary flex items-center gap-3">
                      <span className="text-3xl">{timeCategory.icon}</span>
                      {timeCategory.category}
                    </CardTitle>
                    <CardDescription>{timeCategory.category}にできる運勢アップの方法</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      {timeCategory.tips.map((tip, tipIndex) => (
                        <div
                          key={tip.title}
                          className="p-4 bg-muted/30 rounded-lg border border-border hover:shadow-md transition-shadow"
                        >
                          <h4 className="font-semibold text-primary mb-2">{tip.title}</h4>
                          <p className="text-sm text-muted-foreground mb-3">{tip.description}</p>
                          <div className="flex gap-2">
                            <Badge variant="outline" className="text-xs">
                              {tip.difficulty}
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              {tip.time}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Zodiac Specific Tips */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">星座別運勢アップ法</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {zodiacSpecificTips.map((elementGroup, index) => (
                <Card
                  key={elementGroup.element}
                  className={`hand-drawn-shadow ${index % 2 === 0 ? "wavy-border" : "wavy-border-alt"}`}
                >
                  <CardHeader>
                    <CardTitle className={`text-xl ${elementGroup.color} flex items-center gap-2`}>
                      <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm">
                        {elementGroup.element}
                      </span>
                      {elementGroup.element}の星座
                    </CardTitle>
                    <CardDescription>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {elementGroup.signs.map((sign) => (
                          <Badge key={sign} variant="secondary" className="text-xs">
                            {sign}
                          </Badge>
                        ))}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {elementGroup.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary">•</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Tips */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">曜日別開運アクション</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
              {weeklyTips.map((dayTip, index) => (
                <Card
                  key={dayTip.day}
                  className={`hand-drawn-shadow ${index % 2 === 0 ? "wavy-border" : "wavy-border-alt"} text-center`}
                >
                  <CardHeader className="pb-2">
                    <div className="text-3xl mb-2">{dayTip.icon}</div>
                    <CardTitle className="text-lg text-primary">{dayTip.day}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{dayTip.tip}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Tips */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">上級者向けテクニック</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hand-drawn-shadow wavy-border">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-2">
                    <span>🔮</span>
                    エネルギーの調整
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 満月の夜に願い事を書く</li>
                    <li>• 新月の日に新しいことを始める</li>
                    <li>• クリスタルを身につける</li>
                    <li>• 瞑想で内なる声を聞く</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hand-drawn-shadow wavy-border-alt">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-2">
                    <span>📊</span>
                    運勢の記録
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 毎日の運勢スコアを記録</li>
                    <li>• 良いことが起きた日の共通点を探す</li>
                    <li>• 月末に振り返りをする</li>
                    <li>• パターンを見つけて活用する</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hand-drawn-shadow wavy-border">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-2">
                    <span>🌟</span>
                    環境の整備
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 部屋を清潔に保つ</li>
                    <li>• 観葉植物を置く</li>
                    <li>• 自然光を取り入れる</li>
                    <li>• 好きな香りで空間を整える</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hand-drawn-shadow wavy-border-alt">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-2">
                    <span>🤝</span>
                    人間関係の活用
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 相性の良い人と過ごす時間を増やす</li>
                    <li>• ポジティブな人との交流を大切に</li>
                    <li>• 占いの話題で盛り上がる</li>
                    <li>• お互いの運勢をシェアする</li>
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
          <h3 className="text-2xl font-bold text-primary mb-4">実践してみましょう</h3>
          <div className="flex flex-col gap-3 sm:gap-4 justify-center max-w-sm mx-auto sm:max-w-none sm:flex-row">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link href="/daily">今日の運勢</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent" asChild>
              <Link href="/daily/lucky-items">ラッキーアイテム</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

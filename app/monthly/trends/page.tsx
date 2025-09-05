import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const monthlyTrends = [
  {
    trend: "新しい始まり",
    description: "多くの星座で新しいプロジェクトや関係性がスタートする月",
    affectedSigns: ["牡羊座", "獅子座", "射手座", "双子座"],
    advice: "積極的に新しいことにチャレンジしてみましょう",
    color: "text-green-600",
    icon: "🌱",
  },
  {
    trend: "人間関係の深化",
    description: "既存の関係がより深まり、信頼関係が築かれる時期",
    affectedSigns: ["蟹座", "蠍座", "魚座", "天秤座"],
    advice: "大切な人との時間を意識的に作ることが重要です",
    color: "text-blue-600",
    icon: "🤝",
  },
  {
    trend: "安定と成長",
    description: "着実な努力が実を結び、安定した成果が期待できる",
    affectedSigns: ["牡牛座", "乙女座", "山羊座"],
    advice: "継続的な努力を怠らず、地道に取り組みましょう",
    color: "text-orange-600",
    icon: "📈",
  },
  {
    trend: "創造性の開花",
    description: "アイデアや創造力が豊かになり、表現力が高まる",
    affectedSigns: ["水瓶座", "双子座", "天秤座"],
    advice: "クリエイティブな活動に時間を割いてみてください",
    color: "text-purple-600",
    icon: "🎨",
  },
]

const weeklyHighlights = [
  {
    week: "第1週",
    theme: "計画と準備",
    description: "新しい月の始まり。目標設定と計画立案に最適な時期",
    bestActions: ["月間目標の設定", "スケジュール調整", "新しい習慣の開始"],
    caution: "急ぎすぎず、しっかりと基盤を作ることが大切",
  },
  {
    week: "第2週",
    theme: "積極的な行動",
    description: "エネルギーが高まり、積極的な行動が成果につながる",
    bestActions: ["重要な会議や面談", "新しい人との出会い", "チャレンジ精神を発揮"],
    caution: "勢いに任せすぎず、冷静な判断も忘れずに",
  },
  {
    week: "第3週",
    theme: "調整と改善",
    description: "これまでの取り組みを見直し、必要な調整を行う時期",
    bestActions: ["進捗の確認", "方向性の修正", "効率化の検討"],
    caution: "完璧を求めすぎず、柔軟性を保つことが重要",
  },
  {
    week: "第4週",
    theme: "収穫と準備",
    description: "成果をまとめ、来月への準備を整える時期",
    bestActions: ["成果の振り返り", "来月の計画", "リラックスタイム"],
    caution: "無理をせず、心身の回復にも時間を使いましょう",
  },
]

const seasonalInfluences = [
  {
    season: "春 (3-5月)",
    influence: "新生活と成長のエネルギー",
    characteristics: ["新しい始まり", "成長意欲の高まり", "活動的な気分"],
    bestFor: ["転職・転居", "新しい関係性", "学習・スキルアップ"],
  },
  {
    season: "夏 (6-8月)",
    influence: "情熱と表現のエネルギー",
    characteristics: ["情熱的な気持ち", "表現力の向上", "社交性の高まり"],
    bestFor: ["恋愛関係", "創造的活動", "アウトドア活動"],
  },
  {
    season: "秋 (9-11月)",
    influence: "収穫と深化のエネルギー",
    characteristics: ["成果の実感", "深い思考", "安定志向"],
    bestFor: ["成果のまとめ", "深い関係性", "内省・振り返り"],
  },
  {
    season: "冬 (12-2月)",
    influence: "内省と準備のエネルギー",
    characteristics: ["内面の充実", "準備期間", "家族との時間"],
    bestFor: ["自己啓発", "家族関係", "来年の計画"],
  },
]

export default function TrendsPage() {
  const currentMonth = new Date().toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
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
                <p className="text-xs sm:text-sm text-muted-foreground">月間トレンド</p>
              </div>
            </Link>
            <Link href="/monthly" className="text-sm text-muted-foreground hover:text-primary">
              ← 戻る
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-3 sm:px-4">
        <div className="container mx-auto text-center">
          <h2 className="title-text text-primary mb-3 sm:mb-4">月間トレンド</h2>
          <Badge variant="secondary" className="mb-4 text-lg px-4 py-2 rounded-full">
            {currentMonth}
          </Badge>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-3xl mx-auto px-2">
            今月の全体的な運勢の流れと傾向をペルナちゃんが分析しました。
            <br className="hidden sm:block" />
            星座を超えた大きなエネルギーの動きを把握しましょう。
          </p>
        </div>
      </section>

      {/* Monthly Trends */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">今月の主要トレンド</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {monthlyTrends.map((trend, index) => (
                <Card
                  key={trend.trend}
                  className={`hand-drawn-shadow ${index % 2 === 0 ? "wavy-border" : "wavy-border-alt"}`}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-2xl">
                        {trend.icon}
                      </div>
                      <CardTitle className={`text-xl ${trend.color}`}>{trend.trend}</CardTitle>
                    </div>
                    <CardDescription>{trend.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-sm text-primary mb-2">影響を受けやすい星座:</h4>
                        <div className="flex flex-wrap gap-1">
                          {trend.affectedSigns.map((sign) => (
                            <Badge key={sign} variant="secondary" className="text-xs">
                              {sign}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-primary mb-1">アドバイス:</h4>
                        <p className="text-sm text-muted-foreground">{trend.advice}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Highlights */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">週別ハイライト</h3>
            <div className="space-y-6">
              {weeklyHighlights.map((week, index) => (
                <Card
                  key={week.week}
                  className={`hand-drawn-shadow ${index % 2 === 0 ? "wavy-border" : "wavy-border-alt"}`}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="default" className="text-lg px-3 py-1">
                        {week.week}
                      </Badge>
                      <CardTitle className="text-xl text-primary">{week.theme}</CardTitle>
                    </div>
                    <CardDescription>{week.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-sm text-primary mb-2">おすすめの行動:</h4>
                        <ul className="space-y-1">
                          {week.bestActions.map((action, actionIndex) => (
                            <li key={actionIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary">•</span>
                              {action}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-primary mb-2">注意点:</h4>
                        <p className="text-sm text-muted-foreground">{week.caution}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Influences */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">季節の影響</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {seasonalInfluences.map((season, index) => (
                <Card
                  key={season.season}
                  className={`hand-drawn-shadow ${index % 2 === 0 ? "wavy-border" : "wavy-border-alt"}`}
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{season.season}</CardTitle>
                    <CardDescription>{season.influence}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-sm text-primary mb-2">特徴:</h4>
                        <div className="flex flex-wrap gap-1">
                          {season.characteristics.map((char, charIndex) => (
                            <Badge key={charIndex} variant="outline" className="text-xs">
                              {char}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-primary mb-2">適している活動:</h4>
                        <ul className="space-y-1">
                          {season.bestFor.map((activity, activityIndex) => (
                            <li key={activityIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary">•</span>
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">詳しい運勢をチェック</h3>
          <div className="flex flex-col gap-3 sm:gap-4 justify-center max-w-sm mx-auto sm:max-w-none sm:flex-row">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link href="/monthly">今月の運勢</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent" asChild>
              <Link href="/monthly/advice">月間アドバイス</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

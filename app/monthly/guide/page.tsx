import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const monthlyPhases = [
  {
    phase: "月初 (1-7日)",
    icon: "🌱",
    description: "新しい月の始まり。計画を立てて目標を設定する時期",
    advice: ["新しい目標を設定する", "月間計画を立てる", "前月の振り返りをする", "エネルギーを蓄える"],
    bestFor: "計画立案・目標設定",
  },
  {
    phase: "月中 (8-22日)",
    icon: "🌿",
    description: "最も活動的な時期。積極的に行動し、成果を上げる",
    advice: ["積極的に行動する", "重要な決断をする", "人との交流を増やす", "チャンスを掴む"],
    bestFor: "実行・行動・決断",
  },
  {
    phase: "月末 (23-31日)",
    icon: "🌸",
    description: "収穫と振り返りの時期。成果をまとめ、次月への準備",
    advice: ["成果をまとめる", "振り返りをする", "来月の準備をする", "リラックスする"],
    bestFor: "振り返り・準備・休息",
  },
]

const monthlyCategories = [
  {
    name: "全体運",
    icon: "🌟",
    description: "月全体の運勢の流れ",
    details:
      "仕事、恋愛、健康、人間関係など、すべての分野を総合した月間の運勢です。月の大きな流れと傾向を把握できます。",
  },
  {
    name: "恋愛運",
    icon: "💖",
    description: "恋愛関係の月間傾向",
    details:
      "パートナーとの関係の発展、新しい出会いの可能性、恋愛における注意点など、月を通じた恋愛運の変化を占います。",
  },
  {
    name: "仕事運",
    icon: "💼",
    description: "キャリアと仕事の月間展望",
    details: "プロジェクトの進行、昇進の可能性、転職のタイミング、職場での人間関係など、仕事に関する月間の運勢です。",
  },
  {
    name: "金運",
    icon: "💰",
    description: "お金に関する月間運勢",
    details: "収入の変化、投資のタイミング、支出の注意点、副業の可能性など、金銭面での月間の運勢を占います。",
  },
]

const monthlyTips = [
  {
    category: "運勢の活用法",
    tips: [
      "月初に運勢をチェックして月間計画を立てる",
      "運勢の良い週に重要な決断をする",
      "注意が必要な時期は慎重に行動する",
      "月末に振り返りをして次月に活かす",
    ],
  },
  {
    category: "効果的な読み方",
    tips: [
      "全体運から大きな流れを把握する",
      "各分野の運勢を具体的な行動に結びつける",
      "注意点は事前の準備で対策する",
      "ラッキーデイを重要な予定に活用する",
    ],
  },
]

export default function MonthlyGuidePage() {
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
                <p className="text-xs sm:text-sm text-muted-foreground">今月の運勢ガイド</p>
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
          <h2 className="title-text text-primary mb-3 sm:mb-4">今月の運勢ガイド</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-3xl mx-auto px-2">
            月間運勢をより効果的に活用するためのガイドです。
            <br className="hidden sm:block" />
            ペルナちゃんからのメッセージを月全体の計画に活かしましょう。
          </p>
        </div>
      </section>

      {/* Monthly Phases */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">月の流れと活用法</h3>
            <div className="space-y-6">
              {monthlyPhases.map((phase, index) => (
                <Card
                  key={phase.phase}
                  className={`hand-drawn-shadow ${index % 2 === 0 ? "wavy-border" : "wavy-border-alt"}`}
                >
                  <div className="flex gap-6 p-6">
                    <div className="flex-shrink-0 text-center">
                      <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-3xl mb-2">
                        {phase.icon}
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {phase.bestFor}
                      </Badge>
                    </div>
                    <div className="flex-1">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-xl text-primary">{phase.phase}</CardTitle>
                        <CardDescription>{phase.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-0">
                        <div className="grid grid-cols-2 gap-2">
                          {phase.advice.map((tip, tipIndex) => (
                            <div key={tipIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                              <span className="text-primary">•</span>
                              {tip}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Categories */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">月間運勢の種類について</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {monthlyCategories.map((category, index) => (
                <Card
                  key={category.name}
                  className={`hand-drawn-shadow ${index % 2 === 0 ? "wavy-border" : "wavy-border-alt"}`}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-2xl">
                        {category.icon}
                      </div>
                      <CardTitle className="text-xl text-primary">{category.name}</CardTitle>
                    </div>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{category.details}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">月間運勢の活用のコツ</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {monthlyTips.map((tipCategory, index) => (
                <Card
                  key={tipCategory.category}
                  className={`hand-drawn-shadow ${index % 2 === 0 ? "wavy-border" : "wavy-border-alt"}`}
                >
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{tipCategory.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tipCategory.tips.map((tip, tipIndex) => (
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

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">今月の運勢をチェックしましょう</h3>
          <p className="text-muted-foreground mb-6">ペルナちゃんがあなたの今月の運勢を占います</p>
          <div className="flex flex-col gap-3 sm:gap-4 justify-center max-w-sm mx-auto sm:max-w-none sm:flex-row">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link href="/monthly">今月の運勢</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent" asChild>
              <Link href="/monthly/trends">月間トレンド</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

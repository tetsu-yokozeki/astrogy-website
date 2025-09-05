import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const monthlyAdviceCategories = [
  {
    category: "恋愛・人間関係",
    icon: "💕",
    advice: [
      {
        title: "新しい出会いを大切に",
        description: "今月は新しい人との出会いが多い時期。第一印象を大切にし、オープンな気持ちで接しましょう。",
        actionItems: ["積極的に外出する", "新しいコミュニティに参加", "笑顔を心がける"],
      },
      {
        title: "既存の関係を深める",
        description: "パートナーや友人との関係をより深めるチャンス。時間を作って、じっくり話し合いましょう。",
        actionItems: ["デートの計画を立てる", "深い話をする時間を作る", "相手の話をよく聞く"],
      },
    ],
  },
  {
    category: "仕事・キャリア",
    icon: "💼",
    advice: [
      {
        title: "スキルアップに投資",
        description: "今月は学習や自己啓発に適した時期。将来のキャリアに役立つスキルを身につけましょう。",
        actionItems: ["オンライン講座を受講", "資格取得の準備", "専門書を読む"],
      },
      {
        title: "チームワークを重視",
        description: "一人で頑張るより、チームで協力することで大きな成果が期待できます。",
        actionItems: ["同僚との連携を強化", "情報共有を積極的に", "他部署との交流"],
      },
    ],
  },
  {
    category: "健康・ライフスタイル",
    icon: "🌟",
    advice: [
      {
        title: "規則正しい生活リズム",
        description: "体調管理が運気アップの基本。規則正しい生活を心がけ、十分な睡眠を取りましょう。",
        actionItems: ["早寝早起きを心がける", "バランスの良い食事", "適度な運動を取り入れる"],
      },
      {
        title: "ストレス解消法を見つける",
        description: "忙しい日々の中でも、自分なりのリラックス方法を見つけて実践しましょう。",
        actionItems: ["趣味の時間を作る", "自然に触れる", "瞑想やヨガを試す"],
      },
    ],
  },
  {
    category: "金運・財運",
    icon: "💰",
    advice: [
      {
        title: "計画的な支出管理",
        description: "今月は支出を見直し、無駄遣いを控えて計画的にお金を使いましょう。",
        actionItems: ["家計簿をつける", "固定費を見直す", "貯蓄目標を設定"],
      },
      {
        title: "投資の勉強を始める",
        description: "将来の資産形成のために、投資について学び始めるのに良い時期です。",
        actionItems: ["投資の基礎を学ぶ", "少額から始める", "専門家に相談する"],
      },
    ],
  },
]

const weeklyActionPlan = [
  {
    week: "第1週",
    focus: "計画と目標設定",
    actions: ["月間目標を明確にする", "優先順位を決める", "必要なリソースを準備する", "スケジュールを調整する"],
  },
  {
    week: "第2週",
    focus: "積極的な実行",
    actions: [
      "重要なタスクから着手",
      "新しいチャレンジを始める",
      "人とのコミュニケーションを増やす",
      "フィードバックを積極的に求める",
    ],
  },
  {
    week: "第3週",
    focus: "調整と改善",
    actions: ["進捗状況を確認する", "必要な修正を行う", "効率化できる点を探す", "新しいアイデアを試す"],
  },
  {
    week: "第4週",
    focus: "まとめと準備",
    actions: ["成果を振り返る", "学んだことを整理する", "来月の計画を立てる", "リフレッシュの時間を作る"],
  },
]

const mindsetTips = [
  {
    title: "ポジティブ思考を維持",
    description: "困難な状況でも前向きな面を見つけ、成長の機会として捉えましょう。",
    practices: ["毎日3つの良いことを見つける", "感謝の気持ちを表現する", "失敗を学習の機会と考える"],
  },
  {
    title: "柔軟性を保つ",
    description: "計画通りにいかないことがあっても、柔軟に対応することで新しい可能性が開けます。",
    practices: ["複数の選択肢を用意する", "変化を楽しむ", "他人の意見に耳を傾ける"],
  },
  {
    title: "自分を信じる",
    description: "自分の能力と直感を信じ、自信を持って行動することが成功への鍵です。",
    practices: ["過去の成功体験を思い出す", "小さな達成を積み重ねる", "自分の強みを活かす"],
  },
]

export default function AdvicePage() {
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
                <p className="text-xs sm:text-sm text-muted-foreground">月間アドバイス</p>
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
          <h2 className="title-text text-primary mb-3 sm:mb-4">月間アドバイス</h2>
          <Badge variant="secondary" className="mb-4 text-lg px-4 py-2 rounded-full">
            {currentMonth}
          </Badge>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-3xl mx-auto px-2">
            今月をより良く過ごすための具体的なアドバイスをペルナちゃんがお届けします。
            <br className="hidden sm:block" />
            分野別のアドバイスを参考に、充実した一ヶ月を過ごしましょう。
          </p>
        </div>
      </section>

      {/* Category-based Advice */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">分野別アドバイス</h3>
            <div className="space-y-8">
              {monthlyAdviceCategories.map((category, categoryIndex) => (
                <Card
                  key={category.category}
                  className={`hand-drawn-shadow ${categoryIndex % 2 === 0 ? "wavy-border" : "wavy-border-alt"}`}
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-primary flex items-center gap-3">
                      <span className="text-3xl">{category.icon}</span>
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      {category.advice.map((advice, adviceIndex) => (
                        <div key={advice.title} className="p-4 bg-muted/30 rounded-lg border border-border">
                          <h4 className="font-semibold text-primary mb-2">{advice.title}</h4>
                          <p className="text-sm text-muted-foreground mb-3">{advice.description}</p>
                          <div>
                            <span className="text-xs font-semibold text-primary">実践ポイント:</span>
                            <ul className="mt-1 space-y-1">
                              {advice.actionItems.map((item, itemIndex) => (
                                <li key={itemIndex} className="text-xs text-muted-foreground flex items-start gap-2">
                                  <span className="text-primary">•</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
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

      {/* Weekly Action Plan */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">週別アクションプラン</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {weeklyActionPlan.map((week, index) => (
                <Card
                  key={week.week}
                  className={`hand-drawn-shadow ${index % 2 === 0 ? "wavy-border" : "wavy-border-alt"}`}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="default" className="text-lg px-3 py-1">
                        {week.week}
                      </Badge>
                      <CardTitle className="text-lg text-primary">{week.focus}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {week.actions.map((action, actionIndex) => (
                        <li key={actionIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary">•</span>
                          {action}
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

      {/* Mindset Tips */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">心構えとマインドセット</h3>
            <div className="space-y-6">
              {mindsetTips.map((tip, index) => (
                <Card
                  key={tip.title}
                  className={`hand-drawn-shadow ${index % 2 === 0 ? "wavy-border" : "wavy-border-alt"}`}
                >
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{tip.title}</CardTitle>
                    <CardDescription>{tip.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <span className="text-sm font-semibold text-primary">実践方法:</span>
                      <ul className="mt-2 space-y-1">
                        {tip.practices.map((practice, practiceIndex) => (
                          <li key={practiceIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary">•</span>
                            {practice}
                          </li>
                        ))}
                      </ul>
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
          <h3 className="text-2xl font-bold text-primary mb-4">運勢をチェックして実践しましょう</h3>
          <div className="flex flex-col gap-3 sm:gap-4 justify-center max-w-sm mx-auto sm:max-w-none sm:flex-row">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link href="/monthly">今月の運勢</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent" asChild>
              <Link href="/monthly/guide">運勢ガイド</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

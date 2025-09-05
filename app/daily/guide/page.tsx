import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const scoreRanges = [
  {
    range: "90-100点",
    level: "絶好調",
    color: "text-green-600",
    stars: "★★★★★",
    description: "今日は最高の一日になりそうです！積極的に行動して、チャンスを掴みましょう。",
    advice: ["新しいことにチャレンジ", "重要な決断をする", "人との出会いを大切に", "直感を信じて行動"],
  },
  {
    range: "80-89点",
    level: "好調",
    color: "text-blue-600",
    stars: "★★★★☆",
    description: "運勢は良好です。計画していたことを実行に移すのに適した日です。",
    advice: ["計画を実行に移す", "コミュニケーションを活発に", "学習や自己啓発", "健康管理に注意"],
  },
  {
    range: "70-79点",
    level: "普通",
    color: "text-yellow-600",
    stars: "★★★☆☆",
    description: "平均的な運勢です。無理をせず、着実に物事を進めていきましょう。",
    advice: ["着実に物事を進める", "周囲との調和を大切に", "小さな幸せを見つける", "準備や整理整頓"],
  },
  {
    range: "60-69点",
    level: "注意",
    color: "text-orange-600",
    stars: "★★☆☆☆",
    description: "少し注意が必要な日です。慎重に行動し、無理は禁物です。",
    advice: ["慎重に行動する", "急がず焦らず", "周囲の意見を聞く", "リラックスを心がける"],
  },
  {
    range: "0-59点",
    level: "要注意",
    color: "text-red-600",
    stars: "★☆☆☆☆",
    description: "今日は控えめに過ごすのがおすすめ。無理をせず、休息を取りましょう。",
    advice: ["無理をしない", "休息を十分に取る", "ネガティブ思考を避ける", "明日に期待する"],
  },
]

const fortuneCategories = [
  {
    name: "総合運",
    icon: "🌟",
    description: "その日全体の運勢を表します",
    details: "仕事、恋愛、健康、人間関係など、すべての分野を総合した運勢です。一日の基本的な流れを知ることができます。",
  },
  {
    name: "恋愛運",
    icon: "💖",
    description: "恋愛に関する運勢です",
    details: "パートナーとの関係、新しい出会い、片思いの進展など、恋愛に関するすべての運勢を占います。",
  },
  {
    name: "仕事運",
    icon: "💼",
    description: "仕事や学業に関する運勢です",
    details: "職場での人間関係、プロジェクトの進行、昇進や転職、学業成績など、仕事に関する運勢です。",
  },
  {
    name: "人間関係",
    icon: "👥",
    description: "周囲の人との関係性を占います",
    details: "家族、友人、同僚との関係性や、新しい人脈の形成、コミュニケーションの取り方などを占います。",
  },
]

export default function DailyGuidePage() {
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
                <p className="text-xs sm:text-sm text-muted-foreground">今日の運勢ガイド</p>
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
          <h2 className="title-text text-primary mb-3 sm:mb-4">今日の運勢ガイド</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-3xl mx-auto px-2">
            占い結果をより良く理解し、効果的に活用するためのガイドです。
            <br className="hidden sm:block" />
            ペルナちゃんからのメッセージを正しく受け取りましょう。
          </p>
        </div>
      </section>

      {/* Score Guide */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">運勢スコアの見方</h3>
            <div className="space-y-6">
              {scoreRanges.map((range, index) => (
                <Card
                  key={range.range}
                  className={`hand-drawn-shadow ${index % 2 === 0 ? "wavy-border" : "wavy-border-alt"}`}
                >
                  <div className="flex gap-6 p-6">
                    <div className="flex-shrink-0 text-center">
                      <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">
                        {range.range.split("-")[0]}
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {range.level}
                      </Badge>
                    </div>
                    <div className="flex-1">
                      <CardHeader className="p-0 mb-4">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-xl text-primary">{range.range}</CardTitle>
                          <div className={`text-2xl ${range.color}`}>{range.stars}</div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-0">
                        <p className="text-muted-foreground mb-4">{range.description}</p>
                        <div>
                          <h4 className="font-semibold text-sm text-primary mb-2">おすすめの行動:</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {range.advice.map((tip) => (
                              <div key={tip} className="text-sm text-muted-foreground flex items-center gap-2">
                                <span className="text-primary">•</span>
                                {tip}
                              </div>
                            ))}
                          </div>
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

      {/* Fortune Categories */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">運勢の種類について</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {fortuneCategories.map((category, index) => (
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
            <h3 className="text-2xl font-bold text-primary text-center mb-12">占いを活用するコツ</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hand-drawn-shadow wavy-border">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-2">
                    <span>🌅</span>
                    朝の習慣
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 起床後すぐに今日の運勢をチェック</li>
                    <li>• ラッキーカラーを身につける</li>
                    <li>• ラッキーアイテムを持参する</li>
                    <li>• ポジティブな気持ちで一日をスタート</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hand-drawn-shadow wavy-border-alt">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-2">
                    <span>🌙</span>
                    夜の振り返り
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 占い結果と実際の出来事を比較</li>
                    <li>• 良かったことを記録する</li>
                    <li>• 明日への準備をする</li>
                    <li>• 感謝の気持ちを持つ</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hand-drawn-shadow wavy-border">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-2">
                    <span>💡</span>
                    効果的な活用法
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 重要な決断前には必ずチェック</li>
                    <li>• 友人や家族と結果をシェア</li>
                    <li>• 低い運勢の日は無理をしない</li>
                    <li>• 高い運勢の日は積極的に行動</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hand-drawn-shadow wavy-border-alt">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-2">
                    <span>⚠️</span>
                    注意点
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 占い結果に依存しすぎない</li>
                    <li>• 自分の判断力も大切にする</li>
                    <li>• 悪い結果でも落ち込まない</li>
                    <li>• 参考程度に楽しむ気持ちで</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">今日の運勢をチェックしましょう</h3>
          <p className="text-muted-foreground mb-6">ペルナちゃんがあなたの今日の運勢を占います</p>
          <div className="flex flex-col gap-3 sm:gap-4 justify-center max-w-sm mx-auto sm:max-w-none sm:flex-row">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link href="/daily">今日の運勢</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent" asChild>
              <Link href="/daily/tips">運勢アップのコツ</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

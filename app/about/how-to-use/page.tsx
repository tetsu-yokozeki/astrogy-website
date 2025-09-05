import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const steps = [
  {
    step: 1,
    title: "星座を選択",
    description:
      "まずはあなたの生年月日から星座を選択してください。正確な星座を選ぶことで、より精度の高い占い結果を得ることができます。",
    tips: ["生年月日を正確に入力しましょう", "星座の境界日は時間も重要です"],
  },
  {
    step: 2,
    title: "占いの種類を選択",
    description:
      "今日の運勢、今月の運勢、恋愛運など、知りたい運勢の種類を選択します。それぞれ専門のキャラクターが占いを行います。",
    tips: ["具体的な悩みがある場合は専門分野を選びましょう", "総合運勢から始めるのもおすすめです"],
  },
  {
    step: 3,
    title: "結果を確認",
    description: "ペルナちゃんと仲間たちからのメッセージを読んで、今日や今月の過ごし方の参考にしてください。",
    tips: ["アドバイスは前向きに受け取りましょう", "気になる点があれば何度でも確認できます"],
  },
  {
    step: 4,
    title: "日常に活用",
    description: "占い結果を参考に、日常生活をより良いものにしていきましょう。小さな変化から始めることが大切です。",
    tips: ["無理をせず、できることから始めましょう", "定期的にチェックして変化を楽しみましょう"],
  },
]

const fortuneTypes = [
  {
    name: "今日の運勢",
    character: "ペルナちゃん",
    description: "その日の全体的な運勢を占います",
    bestTime: "朝起きた時",
    frequency: "毎日",
  },
  {
    name: "今月の運勢",
    character: "ペルナちゃん",
    description: "月全体の流れと重要なポイントを占います",
    bestTime: "月初め",
    frequency: "月1回",
  },
  {
    name: "恋愛運",
    character: "ハートちゃん",
    description: "恋愛に関する運勢とアドバイス",
    bestTime: "デート前や気になる人がいる時",
    frequency: "必要に応じて",
  },
  {
    name: "仕事運",
    character: "フローラちゃん",
    description: "仕事や人間関係に関する運勢",
    bestTime: "仕事で悩みがある時",
    frequency: "週1回程度",
  },
  {
    name: "金運・健康運",
    character: "グリップちゃん",
    description: "お金と健康に関する実用的なアドバイス",
    bestTime: "月初めや体調が気になる時",
    frequency: "月2-3回",
  },
]

export default function HowToUsePage() {
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
                <p className="text-xs sm:text-sm text-muted-foreground">占いの使い方</p>
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
          <h2 className="title-text text-primary mb-3 sm:mb-4">占いの使い方</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-3xl mx-auto px-2">
            占い植物園を効果的に活用するための方法をご紹介します。
            <br className="hidden sm:block" />
            ペルナちゃんたちからのアドバイスをより良く活用しましょう。
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">基本的な使い方</h3>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <Card
                  key={step.step}
                  className={`hand-drawn-shadow ${index % 2 === 0 ? "wavy-border" : "wavy-border-alt"}`}
                >
                  <div className="flex gap-6 p-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-xl text-primary">{step.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <p className="text-muted-foreground mb-4">{step.description}</p>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm text-primary">コツ:</h4>
                          <ul className="space-y-1">
                            {step.tips.map((tip, tipIndex) => (
                              <li key={tipIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-primary">•</span>
                                {tip}
                              </li>
                            ))}
                          </ul>
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

      {/* Fortune Types */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">占いの種類と活用法</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fortuneTypes.map((type, index) => (
                <Card
                  key={type.name}
                  className={`hand-drawn-shadow ${index % 2 === 0 ? "wavy-border" : "wavy-border-alt"}`}
                >
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{type.name}</CardTitle>
                    <CardDescription>担当: {type.character}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{type.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold">おすすめタイミング:</span>
                        <Badge variant="secondary" className="text-xs">
                          {type.bestTime}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold">頻度:</span>
                        <Badge variant="outline" className="text-xs">
                          {type.frequency}
                        </Badge>
                      </div>
                    </div>
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
            <h3 className="text-2xl font-bold text-primary text-center mb-12">より良い占い体験のために</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hand-drawn-shadow wavy-border">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-2">
                    <span>🌟</span>
                    心構え
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 占い結果は参考として活用しましょう</li>
                    <li>• ポジティブな気持ちで受け取りましょう</li>
                    <li>• 自分の直感も大切にしてください</li>
                    <li>• 結果に一喜一憂しすぎないようにしましょう</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hand-drawn-shadow wavy-border-alt">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-2">
                    <span>💡</span>
                    活用のコツ
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 定期的にチェックして変化を楽しみましょう</li>
                    <li>• 気になる結果は記録しておくと良いでしょう</li>
                    <li>• 友達や家族と結果をシェアしてみましょう</li>
                    <li>• アドバイスを実践してみましょう</li>
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
          <h3 className="text-2xl font-bold text-primary mb-4">さあ、占いを始めましょう！</h3>
          <p className="text-muted-foreground mb-6">ペルナちゃんたちがあなたをお待ちしています</p>
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

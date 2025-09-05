import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const plants = [
  {
    name: "ラフレシア",
    character: "ペルナちゃん",
    scientificName: "Rafflesia arnoldii",
    description:
      "世界最大の花として知られるラフレシア。その巨大な花は直径1メートルにも達し、強烈な存在感を放ちます。占いにおいては、総合的な運勢を見通す力を持っています。",
    powers: ["総合運占い", "人生の大きな流れを読む", "重要な決断のサポート"],
    habitat: "東南アジアの熱帯雨林",
    symbolism: "生命力、神秘性、包容力",
    fortuneAspect: "人生全般の運勢、重要な転機の予測",
  },
  {
    name: "ハートリーフ",
    character: "ハートちゃん",
    scientificName: "Philodendron hederaceum",
    description:
      "美しいハート型の葉が特徴的な観葉植物。その愛らしい形から、恋愛運を高める特別な力を持つとされています。愛情深い性質で、人間関係の悩みを解決します。",
    powers: ["恋愛運占い", "人間関係の改善", "相性診断"],
    habitat: "中南米の熱帯地域",
    symbolism: "愛情、調和、成長",
    fortuneAspect: "恋愛関係、友人関係、家族との絆",
  },
  {
    name: "触手系植物",
    character: "フローラちゃん",
    scientificName: "Various carnivorous plants",
    description:
      "触手のような蔓や葉を持つ神秘的な植物群。複雑に絡み合った問題を解きほぐす能力に長けており、仕事や人間関係の複雑な悩みを整理してくれます。",
    powers: ["仕事運占い", "複雑な問題の解決", "論理的分析"],
    habitat: "世界各地の湿地帯",
    symbolism: "知恵、分析力、解決力",
    fortuneAspect: "仕事関係、学業、複雑な人間関係",
  },
  {
    name: "ウツボカズラ",
    character: "グリップちゃん",
    scientificName: "Nepenthes",
    description:
      "特徴的な捕虫袋を持つ食虫植物。その袋のように幸運をしっかりとキャッチし、実用的なアドバイスを提供します。金運や健康運に関する占いが得意です。",
    powers: ["金運占い", "健康運占い", "実用的アドバイス"],
    habitat: "東南アジア、マダガスカル",
    symbolism: "蓄積、安定、実用性",
    fortuneAspect: "金銭管理、健康維持、日常生活の改善",
  },
]

const plantCare = [
  {
    aspect: "環境",
    description: "占い植物たちは神秘的なエネルギーに満ちた温室で大切に育てられています。",
    details: ["適切な温度と湿度の管理", "清浄な空気の循環", "自然光と人工光のバランス"],
  },
  {
    aspect: "栄養",
    description: "特別な栄養素と愛情をたっぷりと与えて、占いの力を高めています。",
    details: ["オーガニック肥料の使用", "月の満ち欠けに合わせた水やり", "愛情込めたお世話"],
  },
  {
    aspect: "エネルギー",
    description: "星座の動きや自然のリズムに合わせて、植物たちのエネルギーを調整しています。",
    details: ["満月の夜の特別なケア", "季節の変わり目の浄化", "クリスタルによるエネルギー調整"],
  },
]

export default function PlantsPage() {
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
                <p className="text-xs sm:text-sm text-muted-foreground">植物について</p>
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
          <h2 className="title-text text-primary mb-3 sm:mb-4">占いの植物たち</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-3xl mx-auto px-2">
            占い植物園で活躍する神秘的な植物たちをご紹介します。
            <br className="hidden sm:block" />
            それぞれが持つ特別な力と、占いにおける役割について学びましょう。
          </p>
        </div>
      </section>

      {/* Plants Detail */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="space-y-12 max-w-6xl mx-auto">
            {plants.map((plant, index) => (
              <Card
                key={plant.name}
                className={`hand-drawn-shadow ${index % 2 === 0 ? "wavy-border" : "wavy-border-alt"} overflow-hidden`}
              >
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-4xl">
                        {plant.name === "ラフレシア"
                          ? "🌺"
                          : plant.name === "ハートリーフ"
                            ? "💖"
                            : plant.name === "触手系植物"
                              ? "🌀"
                              : "🌿"}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary">{plant.name}</h3>
                        <p className="text-muted-foreground italic">{plant.scientificName}</p>
                        <Badge variant="secondary" className="mt-2">
                          担当: {plant.character}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6">{plant.description}</p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-bold text-primary mb-2">占いの力</h4>
                        <ul className="space-y-1">
                          {plant.powers.map((power) => (
                            <li key={power} className="text-sm text-muted-foreground flex items-center gap-2">
                              <span className="text-primary">•</span>
                              {power}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-2">基本情報</h4>
                        <div className="space-y-2 text-sm">
                          <div>
                            <span className="font-semibold">生息地:</span>
                            <span className="text-muted-foreground ml-2">{plant.habitat}</span>
                          </div>
                          <div>
                            <span className="font-semibold">象徴:</span>
                            <span className="text-muted-foreground ml-2">{plant.symbolism}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-muted/30">
                    <h4 className="font-bold text-primary mb-3">占いの専門分野</h4>
                    <p className="text-sm text-muted-foreground">{plant.fortuneAspect}</p>

                    <div className="mt-6">
                      <Button size="sm" variant="outline" className="w-full bg-transparent" asChild>
                        <Link href={`/about/characters`}>{plant.character}について詳しく</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Plant Care Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">植物たちのお世話</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {plantCare.map((care, index) => (
                <Card
                  key={care.aspect}
                  className={`hand-drawn-shadow ${index % 2 === 0 ? "wavy-border" : "wavy-border-alt"}`}
                >
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{care.aspect}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{care.description}</p>
                    <ul className="space-y-1">
                      {care.details.map((detail) => (
                        <li key={detail} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="text-primary">•</span>
                          {detail}
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

      {/* Navigation */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">植物たちの力を体験しましょう</h3>
          <div className="flex flex-col gap-3 sm:gap-4 justify-center max-w-sm mx-auto sm:max-w-none sm:flex-row">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link href="/daily">今日の運勢</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent" asChild>
              <Link href="/about/characters">キャラクター紹介</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

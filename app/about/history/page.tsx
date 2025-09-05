import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

const historyTimeline = [
  {
    year: "2020年",
    title: "占い植物園の誕生",
    description:
      "ペルナちゃんが小さな温室で占いを始めました。最初は近所の友達だけに占いをしていましたが、その的中率の高さが話題になりました。",
    milestone: "創設",
  },
  {
    year: "2021年",
    title: "仲間たちとの出会い",
    description:
      "ハートちゃん、フローラちゃんが仲間に加わりました。それぞれの専門分野を活かして、より幅広い占いサービスを提供できるようになりました。",
    milestone: "拡大",
  },
  {
    year: "2022年",
    title: "植物園の本格オープン",
    description:
      "正式に「占い植物園」として開園しました。多くの方々に愛され、毎日たくさんの相談が寄せられるようになりました。",
    milestone: "開園",
  },
  {
    year: "2023年",
    title: "グリップちゃん参加",
    description:
      "ウツボカズラのグリップちゃんが新たに仲間に加わり、金運・健康運の占いが充実しました。4人体制でより専門的なサービスを提供しています。",
    milestone: "完成",
  },
  {
    year: "2024年",
    title: "オンライン展開",
    description:
      "インターネットを通じて、世界中の人々に占いサービスを提供開始。24時間いつでもアクセスできるようになりました。",
    milestone: "革新",
  },
  {
    year: "2025年",
    title: "新たな挑戦",
    description: "AI技術と植物の力を組み合わせた新しい占いシステムを開発中。より精度の高い占いを目指しています。",
    milestone: "未来",
  },
]

export default function HistoryPage() {
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
                <p className="text-xs sm:text-sm text-muted-foreground">植物園の歴史</p>
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
          <div className="w-64 h-48 sm:w-80 sm:h-60 mx-auto mb-4 sm:mb-6 relative">
            <Image
              src="/fortune-telling-crystals-and-stars.png"
              alt="占い植物園の歴史"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h2 className="title-text text-primary mb-3 sm:mb-4">植物園の歴史</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-3xl mx-auto px-2">
            占い植物園がどのように始まり、どのような歩みを重ねてきたかをご紹介します。
            <br className="hidden sm:block" />
            ペルナちゃんと仲間たちの成長の物語をお楽しみください。
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {historyTimeline.map((item, index) => (
                <div key={item.year} className="relative">
                  {/* Timeline line */}
                  {index < historyTimeline.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-16 bg-primary/30"></div>
                  )}

                  <Card className={`hand-drawn-shadow ${index % 2 === 0 ? "wavy-border" : "wavy-border-alt"}`}>
                    <div className="flex gap-6 p-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                          {item.year.slice(0, 4)}
                        </div>
                        <Badge variant="secondary" className="mt-2 text-xs">
                          {item.milestone}
                        </Badge>
                      </div>
                      <div className="flex-1">
                        <CardHeader className="p-0 mb-4">
                          <CardTitle className="text-xl text-primary">{item.title}</CardTitle>
                          <CardDescription className="text-muted-foreground font-semibold">{item.year}</CardDescription>
                        </CardHeader>
                        <CardContent className="p-0">
                          <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-primary mb-6">占い植物園の理念</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hand-drawn-shadow wavy-border">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center text-3xl">
                    💚
                  </div>
                  <CardTitle className="text-lg text-primary">愛と思いやり</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    すべての相談者に対して愛情深く、思いやりを持って接することを大切にしています。
                  </p>
                </CardContent>
              </Card>

              <Card className="hand-drawn-shadow wavy-border-alt">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-secondary rounded-full flex items-center justify-center text-3xl">
                    🌱
                  </div>
                  <CardTitle className="text-lg text-primary">成長と発展</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    植物のように、相談者の皆さんが健やかに成長できるようサポートします。
                  </p>
                </CardContent>
              </Card>

              <Card className="hand-drawn-shadow wavy-border">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center text-3xl">
                    ✨
                  </div>
                  <CardTitle className="text-lg text-primary">希望と光</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    どんな困難な状況でも、希望の光を見つけられるよう導きます。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">他の情報も見てみましょう</h3>
          <div className="flex flex-col gap-3 sm:gap-4 justify-center max-w-sm mx-auto sm:max-w-none sm:flex-row">
            <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent" asChild>
              <Link href="/about/characters">キャラクター紹介</Link>
            </Button>
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link href="/daily">今日の運勢</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

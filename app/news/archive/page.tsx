import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const archiveData = [
  {
    year: "2025",
    months: [
      {
        month: "1月",
        articleCount: 5,
        highlights: ["2025年の星座別開運アクション", "新年の運勢特集", "冬の健康管理術"],
      },
    ],
  },
  {
    year: "2024",
    months: [
      {
        month: "12月",
        articleCount: 8,
        highlights: ["年末年始の運気アップ", "冬至のスピリチュアルパワー", "恋愛運アップの秘訣"],
      },
      {
        month: "11月",
        articleCount: 6,
        highlights: ["秋の転職運", "感謝の気持ちで運気アップ", "植物園の新キャラクター"],
      },
      {
        month: "10月",
        articleCount: 7,
        highlights: ["ハロウィンの魔法", "秋の恋愛運", "仕事運向上のコツ"],
      },
      {
        month: "9月",
        articleCount: 5,
        highlights: ["秋分の日の開運法", "新学期の運勢", "健康運アップの食事"],
      },
      {
        month: "8月",
        articleCount: 9,
        highlights: ["夏の恋愛特集", "お盆のスピリチュアル", "夏バテ対策の占い"],
      },
      {
        month: "7月",
        articleCount: 6,
        highlights: ["七夕の願い事", "夏至のパワー", "夏の開運ファッション"],
      },
    ],
  },
]

const yearlyStats = [
  {
    year: "2025",
    totalArticles: 5,
    mostPopularCategory: "開運・運勢",
    topTag: "2025年",
    readingTime: "平均5分",
  },
  {
    year: "2024",
    totalArticles: 41,
    mostPopularCategory: "恋愛・人間関係",
    topTag: "開運",
    readingTime: "平均6分",
  },
]

const milestones = [
  {
    date: "2025年1月",
    event: "占い植物園ニュース開始",
    description: "ペルナちゃんによる記事配信がスタート",
  },
  {
    date: "2024年12月",
    event: "記事数50本達成",
    description: "おかげさまで50本の記事を公開しました",
  },
  {
    date: "2024年10月",
    event: "新キャラクター登場",
    description: "ウツボカズラのウッツくんが仲間に加わりました",
  },
  {
    date: "2024年8月",
    event: "夏の特集企画開始",
    description: "季節に合わせた特集記事の配信を開始",
  },
]

export default function ArchivePage() {
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
                <p className="text-xs sm:text-sm text-muted-foreground">記事アーカイブ</p>
              </div>
            </Link>
            <Link href="/news" className="text-sm text-muted-foreground hover:text-primary">
              ← 戻る
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-3 sm:px-4">
        <div className="container mx-auto text-center">
          <h2 className="title-text text-primary mb-3 sm:mb-4">記事アーカイブ</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-3xl mx-auto px-2">
            これまでに公開された記事を年月別に整理しました。
            <br className="hidden sm:block" />
            過去の記事もぜひお楽しみください。
          </p>
        </div>
      </section>

      {/* Yearly Stats */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">年別統計</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {yearlyStats.map((stats, index) => (
                <Card
                  key={stats.year}
                  className={`hand-drawn-shadow ${index % 2 === 0 ? "wavy-border" : "wavy-border-alt"}`}
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-primary flex items-center gap-2">
                      <span className="text-2xl">📊</span>
                      {stats.year}年
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-muted/30 rounded-lg">
                        <div className="text-2xl font-bold text-primary">{stats.totalArticles}</div>
                        <div className="text-sm text-muted-foreground">記事数</div>
                      </div>
                      <div className="text-center p-3 bg-muted/30 rounded-lg">
                        <div className="text-sm font-semibold text-primary">{stats.mostPopularCategory}</div>
                        <div className="text-xs text-muted-foreground">人気カテゴリ</div>
                      </div>
                      <div className="text-center p-3 bg-muted/30 rounded-lg">
                        <div className="text-sm font-semibold text-primary">{stats.topTag}</div>
                        <div className="text-xs text-muted-foreground">人気タグ</div>
                      </div>
                      <div className="text-center p-3 bg-muted/30 rounded-lg">
                        <div className="text-sm font-semibold text-primary">{stats.readingTime}</div>
                        <div className="text-xs text-muted-foreground">読了時間</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Archives */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">月別アーカイブ</h3>
            <div className="space-y-8">
              {archiveData.map((yearData, yearIndex) => (
                <Card
                  key={yearData.year}
                  className={`hand-drawn-shadow ${yearIndex % 2 === 0 ? "wavy-border" : "wavy-border-alt"}`}
                >
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">{yearData.year}年</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {yearData.months.map((monthData, monthIndex) => (
                        <div key={monthData.month} className="p-4 bg-muted/30 rounded-lg border border-border">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-semibold text-primary">{monthData.month}</h4>
                            <Badge variant="secondary" className="text-xs">
                              {monthData.articleCount}記事
                            </Badge>
                          </div>
                          <div>
                            <span className="text-xs font-semibold text-primary">注目記事:</span>
                            <ul className="mt-1 space-y-1">
                              {monthData.highlights.map((highlight, highlightIndex) => (
                                <li
                                  key={highlightIndex}
                                  className="text-xs text-muted-foreground flex items-start gap-2"
                                >
                                  <span className="text-primary">•</span>
                                  <span className="line-clamp-1">{highlight}</span>
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

      {/* Milestones */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">占い植物園ニュースの歩み</h3>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <Card
                  key={milestone.date}
                  className={`hand-drawn-shadow ${index % 2 === 0 ? "wavy-border" : "wavy-border-alt"}`}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Badge variant="default" className="text-sm px-3 py-1">
                        {milestone.date}
                      </Badge>
                      <CardTitle className="text-lg text-primary">{milestone.event}</CardTitle>
                    </div>
                    <CardDescription>{milestone.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">記事を探してみましょう</h3>
          <div className="flex flex-col gap-3 sm:gap-4 justify-center max-w-sm mx-auto sm:max-w-none sm:flex-row">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link href="/news">最新記事</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent" asChild>
              <Link href="/news/categories">カテゴリ別</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

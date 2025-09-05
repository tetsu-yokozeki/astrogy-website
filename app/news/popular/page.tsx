import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const popularArticles = [
  {
    rank: 1,
    title: "2025年の星座別開運アクション大公開！",
    summary: "新年を迎えるにあたって、各星座におすすめの開運アクションをペルナちゃんが詳しく解説します。",
    slug: "2025-lucky-actions",
    year: "2025",
    month: "01",
    publishDate: "2025-01-01",
    author: "ペルナちゃん",
    tags: ["開運", "2025年", "星座"],
    views: 15420,
    likes: 892,
    shares: 234,
    image: "/fortune-telling-crystals-and-stars.png",
  },
  {
    rank: 2,
    title: "恋愛運アップの秘訣：ラフレシアの花言葉から学ぶ",
    summary: "ラフレシアの花言葉に隠された恋愛成就の秘密を、植物園の住人たちと一緒に探ってみましょう。",
    slug: "love-fortune-rafflesia",
    year: "2024",
    month: "12",
    publishDate: "2024-12-28",
    author: "ペルナちゃん",
    tags: ["恋愛", "ラフレシア", "花言葉"],
    views: 12350,
    likes: 756,
    shares: 189,
    image: "/rafflesia-flower-love-romance.png",
  },
  {
    rank: 3,
    title: "年末年始の運気アップ！お掃除風水のススメ",
    summary: "新年を迎える前に、お部屋の運気を整えて良いスタートを切りましょう。簡単にできる風水テクニックをご紹介。",
    slug: "year-end-feng-shui",
    year: "2024",
    month: "12",
    publishDate: "2024-12-25",
    author: "ペルナちゃん",
    tags: ["風水", "年末年始", "運気アップ"],
    views: 9870,
    likes: 543,
    shares: 156,
    image: "/feng-shui-cleaning-new-year.png",
  },
  {
    rank: 4,
    title: "12月の満月パワーで願いを叶える方法",
    summary: "今月の満月は特別なエネルギーに満ちています。この機会を活用して、あなたの願いを現実にしてみませんか？",
    slug: "december-full-moon-power",
    year: "2024",
    month: "12",
    publishDate: "2024-12-20",
    author: "ペルナちゃん",
    tags: ["満月", "願い事", "パワー"],
    views: 8650,
    likes: 467,
    shares: 123,
    image: "/full-moon-night-sky-magical.png",
  },
  {
    rank: 5,
    title: "植物園の仲間たち紹介：ウツボカズラのウッツくん",
    summary: "占い植物園の新しい仲間、ウツボカズラのウッツくんをご紹介。彼の特技は仕事運アップのアドバイスです！",
    slug: "introducing-utsu-kun",
    year: "2024",
    month: "12",
    publishDate: "2024-12-15",
    author: "ペルナちゃん",
    tags: ["キャラクター", "仕事運", "植物園"],
    views: 7230,
    likes: 398,
    shares: 89,
    image: "/pitcher-plant-character-cute.png",
  },
]

const trendingTopics = [
  { topic: "2025年の運勢", articles: 8, totalViews: 45000 },
  { topic: "恋愛運アップ", articles: 12, totalViews: 38000 },
  { topic: "開運アクション", articles: 15, totalViews: 52000 },
  { topic: "風水", articles: 6, totalViews: 28000 },
  { topic: "満月パワー", articles: 4, totalViews: 22000 },
  { topic: "植物園キャラクター", articles: 7, totalViews: 31000 },
]

const readingStats = [
  {
    period: "今週",
    totalViews: 25430,
    totalLikes: 1250,
    totalShares: 340,
    topCategory: "開運・運勢",
  },
  {
    period: "今月",
    totalViews: 89650,
    totalLikes: 4320,
    totalShares: 1180,
    topCategory: "恋愛・人間関係",
  },
  {
    period: "全期間",
    totalViews: 234500,
    totalLikes: 12800,
    totalShares: 3450,
    topCategory: "開運・運勢",
  },
]

function getRankColor(rank: number) {
  if (rank === 1) return "text-yellow-600"
  if (rank === 2) return "text-gray-500"
  if (rank === 3) return "text-orange-600"
  return "text-muted-foreground"
}

function getRankIcon(rank: number) {
  if (rank === 1) return "🥇"
  if (rank === 2) return "🥈"
  if (rank === 3) return "🥉"
  return `${rank}`
}

export default function PopularPage() {
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
                <p className="text-xs sm:text-sm text-muted-foreground">人気記事</p>
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
          <h2 className="title-text text-primary mb-3 sm:mb-4">人気記事ランキング</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-3xl mx-auto px-2">
            読者の皆さんに最も愛されている記事をランキング形式でご紹介します。
            <br className="hidden sm:block" />
            まだ読んでいない記事があれば、ぜひチェックしてみてくださいね。
          </p>
        </div>
      </section>

      {/* Reading Stats */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">読者統計</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {readingStats.map((stats, index) => (
                <Card
                  key={stats.period}
                  className={`hand-drawn-shadow ${index % 2 === 0 ? "wavy-border" : "wavy-border-alt"} text-center`}
                >
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{stats.period}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <div className="text-2xl font-bold text-primary">{stats.totalViews.toLocaleString()}</div>
                        <div className="text-sm text-muted-foreground">総閲覧数</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <div className="font-semibold text-primary">{stats.totalLikes.toLocaleString()}</div>
                          <div className="text-xs text-muted-foreground">いいね</div>
                        </div>
                        <div>
                          <div className="font-semibold text-primary">{stats.totalShares.toLocaleString()}</div>
                          <div className="text-xs text-muted-foreground">シェア</div>
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">人気カテゴリ</div>
                        <Badge variant="secondary" className="text-xs">
                          {stats.topCategory}
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

      {/* Popular Articles Ranking */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">TOP 5 人気記事</h3>
            <div className="space-y-6">
              {popularArticles.map((article, index) => (
                <Link key={article.rank} href={`/news/${article.year}/${article.month}/${article.slug}`}>
                  <Card
                    className={`hand-drawn-shadow ${index % 2 === 0 ? "wavy-border" : "wavy-border-alt"} hover:scale-105 transition-transform cursor-pointer`}
                  >
                    <div className="flex gap-6 p-6">
                      <div className="flex-shrink-0 text-center">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl mb-2">
                          {getRankIcon(article.rank)}
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {article.rank}位
                        </Badge>
                      </div>
                      <div className="flex-1">
                        <CardHeader className="p-0 mb-4">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                            <span>{new Date(article.publishDate).toLocaleDateString("ja-JP")}</span>
                            <span>•</span>
                            <span>{article.author}</span>
                          </div>
                          <CardTitle className="text-xl text-primary line-clamp-2">{article.title}</CardTitle>
                          <CardDescription className="line-clamp-2">{article.summary}</CardDescription>
                        </CardHeader>
                        <CardContent className="p-0">
                          <div className="flex flex-wrap gap-1 mb-3">
                            {article.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>👀 {article.views.toLocaleString()}</span>
                            <span>❤️ {article.likes.toLocaleString()}</span>
                            <span>📤 {article.shares.toLocaleString()}</span>
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trending Topics */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">トレンドトピック</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {trendingTopics.map((topic, index) => (
                <Card
                  key={topic.topic}
                  className={`hand-drawn-shadow ${index % 2 === 0 ? "wavy-border" : "wavy-border-alt"}`}
                >
                  <CardHeader>
                    <CardTitle className="text-lg text-primary flex items-center gap-2">
                      <span className="text-2xl">🔥</span>
                      {topic.topic}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm text-muted-foreground">{topic.articles}記事</div>
                        <div className="text-lg font-semibold text-primary">
                          {topic.totalViews.toLocaleString()}回閲覧
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        トレンド
                      </Badge>
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
          <h3 className="text-2xl font-bold text-primary mb-4">他の記事も読んでみましょう</h3>
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

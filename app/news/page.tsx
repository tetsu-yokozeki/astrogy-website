import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const newsArticles = [
  {
    id: 1,
    title: "2025年の星座別開運アクション大公開！",
    summary: "新年を迎えるにあたって、各星座におすすめの開運アクションをペルナちゃんが詳しく解説します。",
    slug: "2025-lucky-actions",
    year: "2025",
    month: "01",
    publishDate: "2025-01-01",
    updateDate: "2025-01-01",
    author: "ペルナちゃん",
    tags: ["開運", "2025年", "星座"],
    isNew: true,
    image: "/fortune-telling-crystals-and-stars.png",
  },
  {
    id: 2,
    title: "恋愛運アップの秘訣：ラフレシアの花言葉から学ぶ",
    summary: "ラフレシアの花言葉に隠された恋愛成就の秘密を、植物園の住人たちと一緒に探ってみましょう。",
    slug: "love-fortune-rafflesia",
    year: "2024",
    month: "12",
    publishDate: "2024-12-28",
    updateDate: "2024-12-28",
    author: "ペルナちゃん",
    tags: ["恋愛", "ラフレシア", "花言葉"],
    isNew: true,
    image: "/rafflesia-flower-love-romance.png",
  },
  {
    id: 3,
    title: "年末年始の運気アップ！お掃除風水のススメ",
    summary: "新年を迎える前に、お部屋の運気を整えて良いスタートを切りましょう。簡単にできる風水テクニックをご紹介。",
    slug: "year-end-feng-shui",
    year: "2024",
    month: "12",
    publishDate: "2024-12-25",
    updateDate: "2024-12-25",
    author: "ペルナちゃん",
    tags: ["風水", "年末年始", "運気アップ"],
    isNew: false,
    image: "/feng-shui-cleaning-new-year.png",
  },
  {
    id: 4,
    title: "12月の満月パワーで願いを叶える方法",
    summary: "今月の満月は特別なエネルギーに満ちています。この機会を活用して、あなたの願いを現実にしてみませんか？",
    slug: "december-full-moon-power",
    year: "2024",
    month: "12",
    publishDate: "2024-12-20",
    updateDate: "2024-12-20",
    author: "ペルナちゃん",
    tags: ["満月", "願い事", "パワー"],
    isNew: false,
    image: "/full-moon-night-sky-magical.png",
  },
  {
    id: 5,
    title: "植物園の仲間たち紹介：ウツボカズラのウッツくん",
    summary: "占い植物園の新しい仲間、ウツボカズラのウッツくんをご紹介。彼の特技は仕事運アップのアドバイスです！",
    slug: "introducing-utsu-kun",
    year: "2024",
    month: "12",
    publishDate: "2024-12-15",
    updateDate: "2024-12-15",
    author: "ペルナちゃん",
    tags: ["キャラクター", "仕事運", "植物園"],
    isNew: false,
    image: "/pitcher-plant-character-cute.png",
  },
  {
    id: 6,
    title: "冬至のスピリチュアルパワーを活用しよう",
    summary: "一年で最も夜が長い冬至の日。この特別な日のエネルギーを使って、内面を見つめ直してみませんか？",
    slug: "winter-solstice-spiritual",
    year: "2024",
    month: "12",
    publishDate: "2024-12-10",
    updateDate: "2024-12-10",
    author: "ペルナちゃん",
    tags: ["冬至", "スピリチュアル", "内面"],
    isNew: false,
    image: "/winter-solstice-candles-spiritual.png",
  },
]

const allTags = Array.from(new Set(newsArticles.flatMap((article) => article.tags)))

export default function NewsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-2xl">🌺</div>
              <div>
                <h1 className="text-xl font-bold text-primary">占い植物園</h1>
                <p className="text-sm text-muted-foreground">ペルナちゃんの占い</p>
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto text-center">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-4xl hand-drawn-shadow wavy-border">
            📰
          </div>
          <h2 className="text-4xl font-bold text-primary mb-4">占いNEWS</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            ペルナちゃんと植物園の仲間たちが、占いや開運に関する
            <br />
            最新情報をお届けします。
          </p>
        </div>
      </section>

      {/* Tags Filter */}
      <section className="py-8 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            <Badge variant="default" className="cursor-pointer rounded-full px-4 py-2">
              すべて
            </Badge>
            {allTags.map((tag) => (
              <Badge key={tag} variant="outline" className="cursor-pointer rounded-full px-4 py-2 hover:bg-primary/10">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => (
              <Link key={article.id} href={`/news/${article.year}/${article.month}/${article.slug}`}>
                <Card
                  className={`hover:shadow-lg transition-all duration-300 cursor-pointer hand-drawn-shadow ${
                    index % 2 === 0 ? "wavy-border" : "wavy-border-alt"
                  } hover:scale-105 bg-card/80 backdrop-blur-sm h-full`}
                >
                  <div className="relative">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    {article.isNew && (
                      <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground">NEW</Badge>
                    )}
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <span>{new Date(article.publishDate).toLocaleDateString("ja-JP")}</span>
                      <span>•</span>
                      <span>{article.author}</span>
                    </div>
                    <CardTitle className="text-lg text-primary line-clamp-2">{article.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{article.summary}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {article.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-primary font-medium">続きを読む →</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold text-primary mb-6">他のコンテンツもチェック</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/daily">
              <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent">
                今日の運勢
              </Button>
            </Link>
            <Link href="/monthly">
              <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent">
                今月の運勢
              </Button>
            </Link>
            <Link href="/world/perna">
              <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent">
                ペルナちゃんの世界観
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* LINE CTA */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <div className="text-6xl mb-6">📱</div>
            <h3 className="text-3xl font-bold text-primary mb-4">最新情報をLINEで受け取ろう</h3>
            <p className="text-muted-foreground mb-8">
              LINE公式アカウントに登録すると、新しい記事の更新情報や
              <br />
              ペルナちゃんからの特別なお知らせが届きます。
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
              LINE公式アカウントを追加
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

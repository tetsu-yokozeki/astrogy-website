import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const newsCategories = [
  {
    name: "開運・運勢",
    description: "運気アップの方法や開運アクションに関する記事",
    icon: "🌟",
    articleCount: 15,
    tags: ["開運", "運勢", "ラッキーアイテム", "パワースポット"],
    color: "text-yellow-600",
    recentArticles: [
      "2025年の星座別開運アクション大公開！",
      "年末年始の運気アップ！お掃除風水のススメ",
      "12月の満月パワーで願いを叶える方法",
    ],
  },
  {
    name: "恋愛・人間関係",
    description: "恋愛運アップや人間関係改善のアドバイス",
    icon: "💕",
    articleCount: 12,
    tags: ["恋愛", "人間関係", "相性", "コミュニケーション"],
    color: "text-pink-600",
    recentArticles: [
      "恋愛運アップの秘訣：ラフレシアの花言葉から学ぶ",
      "バレンタイン特集 - 恋愛運アップの秘訣",
      "相性占いで理想のパートナーを見つける方法",
    ],
  },
  {
    name: "仕事・キャリア",
    description: "仕事運向上やキャリアアップに関する情報",
    icon: "💼",
    articleCount: 8,
    tags: ["仕事運", "キャリア", "転職", "昇進"],
    color: "text-blue-600",
    recentArticles: [
      "転職に最適なタイミングを星座で見極める",
      "仕事運アップの植物風水",
      "職場での人間関係を改善する方法",
    ],
  },
  {
    name: "健康・ライフスタイル",
    description: "健康運や日常生活の改善に関するアドバイス",
    icon: "🌿",
    articleCount: 10,
    tags: ["健康運", "ライフスタイル", "食事", "運動"],
    color: "text-green-600",
    recentArticles: ["星座別健康管理のポイント", "季節の変わり目の体調管理術", "ストレス解消に効果的な植物療法"],
  },
  {
    name: "スピリチュアル",
    description: "スピリチュアルな話題や精神的な成長について",
    icon: "🔮",
    articleCount: 7,
    tags: ["スピリチュアル", "瞑想", "チャクラ", "エネルギー"],
    color: "text-purple-600",
    recentArticles: [
      "冬至のスピリチュアルパワーを活用しよう",
      "満月・新月のエネルギーワーク",
      "チャクラバランスを整える方法",
    ],
  },
  {
    name: "植物園ニュース",
    description: "占い植物園の最新情報やキャラクター紹介",
    icon: "🌺",
    articleCount: 9,
    tags: ["植物園", "キャラクター", "イベント", "お知らせ"],
    color: "text-orange-600",
    recentArticles: [
      "植物園の仲間たち紹介：ウツボカズラのウッツくん",
      "新キャラクター「グリップちゃん」登場！",
      "占い植物園の春のイベント情報",
    ],
  },
]

const popularTags = [
  { name: "開運", count: 25 },
  { name: "恋愛", count: 18 },
  { name: "2025年", count: 15 },
  { name: "星座", count: 22 },
  { name: "運勢", count: 20 },
  { name: "ラッキーアイテム", count: 12 },
  { name: "風水", count: 10 },
  { name: "満月", count: 8 },
  { name: "スピリチュアル", count: 14 },
  { name: "植物園", count: 16 },
]

export default function CategoriesPage() {
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
                <p className="text-xs sm:text-sm text-muted-foreground">記事カテゴリ</p>
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
          <h2 className="title-text text-primary mb-3 sm:mb-4">記事カテゴリ</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-3xl mx-auto px-2">
            興味のあるテーマから記事を探してみましょう。
            <br className="hidden sm:block" />
            ペルナちゃんと仲間たちが様々な分野の情報をお届けしています。
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsCategories.map((category, index) => (
                <Card
                  key={category.name}
                  className={`hand-drawn-shadow ${index % 2 === 0 ? "wavy-border" : "wavy-border-alt"} hover:scale-105 transition-transform cursor-pointer`}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-2xl">
                        {category.icon}
                      </div>
                      <div>
                        <CardTitle className={`text-lg ${category.color}`}>{category.name}</CardTitle>
                        <Badge variant="secondary" className="text-xs">
                          {category.articleCount}記事
                        </Badge>
                      </div>
                    </div>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-sm text-primary mb-2">関連タグ:</h4>
                        <div className="flex flex-wrap gap-1">
                          {category.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-primary mb-2">最新記事:</h4>
                        <ul className="space-y-1">
                          {category.recentArticles.slice(0, 2).map((article, articleIndex) => (
                            <li key={articleIndex} className="text-xs text-muted-foreground flex items-start gap-2">
                              <span className="text-primary">•</span>
                              <span className="line-clamp-1">{article}</span>
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

      {/* Popular Tags */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">人気のタグ</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {popularTags.map((tag) => (
                <Link key={tag.name} href={`/news?tag=${encodeURIComponent(tag.name)}`}>
                  <Badge
                    variant="outline"
                    className="cursor-pointer hover:bg-primary/10 transition-colors px-4 py-2 text-sm"
                  >
                    {tag.name} ({tag.count})
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">記事を読んでみましょう</h3>
          <div className="flex flex-col gap-3 sm:gap-4 justify-center max-w-sm mx-auto sm:max-w-none sm:flex-row">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link href="/news">すべての記事</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent" asChild>
              <Link href="/news/archive">記事アーカイブ</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

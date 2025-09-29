import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Heart, BookOpen, Users, Star } from "lucide-react"
import Footer from "@/components/footer"

// サンプル記事データ（実際のCMSやAPIから取得する想定）
const articles = [
  {
    id: 1,
    title: "ペルナちゃんの今日の日記",
    excerpt: "今日は新しい占いの方法を勉強しました！みなさんに楽しい運勢をお届けできるよう、頑張っています。",
    content: "今日は新しい占いの方法を勉強しました！みなさんに楽しい運勢をお届けできるよう、頑張っています。特に、植物のエネルギーを感じる方法について学びました。",
    category: "日記",
    date: "2025-01-29",
    image: "/perna-character-illustration.png",
    author: "ペルナ",
    readTime: "2分",
    featured: true
  },
  {
    id: 2,
    title: "占い植物園の新機能について",
    excerpt: "占い植物園に新しい機能を追加しました！月別運勢の詳細がより見やすくなりました。",
    content: "占い植物園に新しい機能を追加しました！月別運勢の詳細がより見やすくなりました。みなさんのご意見を参考に、さらに使いやすくしていきます。",
    category: "お知らせ",
    date: "2025-01-28",
    image: "/fortune-telling-crystals-and-stars.png",
    author: "ペルナ",
    readTime: "3分",
    featured: false
  },
  {
    id: 3,
    title: "12星座の特徴について",
    excerpt: "12星座それぞれの特徴と、植物との関係について詳しく解説します。",
    content: "12星座それぞれの特徴と、植物との関係について詳しく解説します。星座によって好みの植物も違うんですよ！",
    category: "解説",
    date: "2025-01-27",
    image: "/zodiac-1.svg",
    author: "ペルナ",
    readTime: "5分",
    featured: false
  },
  {
    id: 4,
    title: "ペルナちゃんの占いのコツ",
    excerpt: "占いをするときのコツや、運勢を良くするためのヒントをお教えします。",
    content: "占いをするときのコツや、運勢を良くするためのヒントをお教えします。ポジティブな気持ちで占いを受けることが大切です。",
    category: "コツ",
    date: "2025-01-26",
    image: "/full-moon-night-sky-magical.png",
    author: "ペルナ",
    readTime: "4分",
    featured: false
  }
]

const categories = [
  { name: "すべて", count: articles.length },
  { name: "日記", count: articles.filter(a => a.category === "日記").length },
  { name: "お知らせ", count: articles.filter(a => a.category === "お知らせ").length },
  { name: "解説", count: articles.filter(a => a.category === "解説").length },
  { name: "コツ", count: articles.filter(a => a.category === "コツ").length }
]

export default function WorldPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-3 py-3 sm:px-4 sm:py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center text-xl sm:text-2xl mobile-touch-target">
                🌺
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-primary">占い植物園</h1>
                <p className="text-xs sm:text-sm text-muted-foreground">ペルナちゃんの世界観</p>
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-8 sm:py-12 px-3 sm:px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl hand-drawn-shadow wavy-border">
            <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-3 sm:mb-4">ペルナちゃんの世界観</h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto px-2">
            ペルナちゃんの日記や活動報告、占いのコツなどをお届けします。
            <br className="hidden sm:block" />
            みなさんと一緒に楽しい占いの世界を探求していきましょう！
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 px-3 sm:px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge
                key={category.name}
                variant={category.name === "すべて" ? "default" : "secondary"}
                className="px-4 py-2 text-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors mobile-touch-target"
              >
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-8 sm:py-12 px-3 sm:px-4">
        <div className="container mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-primary mb-6 text-center">注目の記事</h3>
          {articles.filter(article => article.featured).map((article) => (
            <Card key={article.id} className="mb-8 hover:shadow-lg transition-shadow hand-drawn-shadow wavy-border">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="relative">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={600}
                    height={400}
                    className="w-full h-48 lg:h-full object-cover rounded-t-lg lg:rounded-l-lg lg:rounded-t-none"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      <Star className="w-3 h-3 mr-1" />
                      注目
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline">{article.category}</Badge>
                    <span className="text-sm text-muted-foreground">{article.readTime}</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-primary mb-3">{article.title}</h4>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.author}</span>
                    </div>
                    <Button variant="outline" size="sm">
                      続きを読む
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-8 sm:py-12 px-3 sm:px-4 bg-muted/30">
        <div className="container mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-primary mb-6 text-center">最新記事</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.filter(article => !article.featured).map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-all duration-300 cursor-pointer hand-drawn-shadow wavy-border hover:scale-105">
                <div className="relative">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary">{article.category}</Badge>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{article.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Heart className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      読む →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 sm:py-12 px-3 sm:px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">他のページもチェック</h3>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center max-w-sm mx-auto sm:max-w-none">
            <Link href="/daily" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-6 sm:px-8 bg-transparent w-full sm:w-auto mobile-touch-target"
              >
                今日の運勢
              </Button>
            </Link>
            <Link href="/monthly" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-6 sm:px-8 bg-transparent w-full sm:w-auto mobile-touch-target"
              >
                今月の運勢
              </Button>
            </Link>
            <Link href="/news" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-6 sm:px-8 bg-transparent w-full sm:w-auto mobile-touch-target"
              >
                占いNEWS
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

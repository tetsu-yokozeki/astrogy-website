import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
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
                <p className="text-xs sm:text-sm text-muted-foreground">ペルナちゃんの占い</p>
              </div>
            </Link>
            <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
              ← ホームに戻る
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-3 sm:px-4">
        <div className="container mx-auto text-center">
          <div className="w-64 h-48 sm:w-80 sm:h-60 mx-auto mb-4 sm:mb-6 relative">
            <Image src="/characters-hero.png" alt="占い植物園について" fill className="object-contain" priority />
          </div>
          <h2 className="title-text text-primary mb-3 sm:mb-4">占い植物園とは？</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-3xl mx-auto px-2">
            占い植物園は、ラフレシアのペルナちゃんと仲間たちが運営する特別な占いの世界です。
            <br className="hidden sm:block" />
            植物の持つ神秘的な力と星座の運行を組み合わせて、あなたの運勢をお伝えします。
          </p>
        </div>
      </section>

      {/* About Sections */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Link href="/about/characters">
              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer hand-drawn-shadow wavy-border hover:scale-105">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center text-3xl">
                    🌺
                  </div>
                  <CardTitle className="text-xl text-primary text-center">キャラクター紹介</CardTitle>
                  <CardDescription className="text-center">ペルナちゃんと仲間たちの詳しい情報</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    それぞれのキャラクターの特徴や得意な占い、性格について詳しく知ることができます。
                  </p>
                  <Badge variant="secondary">詳細を見る →</Badge>
                </CardContent>
              </Card>
            </Link>

            <Link href="/about/history">
              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer hand-drawn-shadow wavy-border-alt hover:scale-105">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-secondary rounded-full flex items-center justify-center text-3xl">
                    📚
                  </div>
                  <CardTitle className="text-xl text-primary text-center">植物園の歴史</CardTitle>
                  <CardDescription className="text-center">占い植物園の成り立ちと歩み</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    占い植物園がどのように始まり、どのような想いで運営されているかをご紹介します。
                  </p>
                  <Badge variant="secondary">詳細を見る →</Badge>
                </CardContent>
              </Card>
            </Link>

            <Link href="/about/how-to-use">
              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer hand-drawn-shadow wavy-border hover:scale-105">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center text-3xl">
                    ✨
                  </div>
                  <CardTitle className="text-xl text-primary text-center">占いの使い方</CardTitle>
                  <CardDescription className="text-center">効果的な占いの活用方法</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    占い結果をより良く活用するためのコツやアドバイスをお教えします。
                  </p>
                  <Badge variant="secondary">詳細を見る →</Badge>
                </CardContent>
              </Card>
            </Link>

            <Link href="/about/plants">
              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer hand-drawn-shadow wavy-border-alt hover:scale-105">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center text-3xl">
                    🌿
                  </div>
                  <CardTitle className="text-xl text-primary text-center">植物について</CardTitle>
                  <CardDescription className="text-center">占いに使われる植物の秘密</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    ラフレシアやウツボカズラなど、占いに使われる植物の特徴と力について学べます。
                  </p>
                  <Badge variant="secondary">詳細を見る →</Badge>
                </CardContent>
              </Card>
            </Link>

            <Link href="/about/zodiac-guide">
              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer hand-drawn-shadow wavy-border hover:scale-105">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-500 rounded-full flex items-center justify-center text-3xl">
                    ⭐
                  </div>
                  <CardTitle className="text-xl text-primary text-center">星座ガイド</CardTitle>
                  <CardDescription className="text-center">12星座の特徴と相性</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    各星座の基本的な特徴や他の星座との相性について詳しく解説します。
                  </p>
                  <Badge variant="secondary">詳細を見る →</Badge>
                </CardContent>
              </Card>
            </Link>

            <Link href="/about/faq">
              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer hand-drawn-shadow wavy-border-alt hover:scale-105">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-purple-500 rounded-full flex items-center justify-center text-3xl">
                    ❓
                  </div>
                  <CardTitle className="text-xl text-primary text-center">よくある質問</CardTitle>
                  <CardDescription className="text-center">FAQ・お問い合わせ</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    占い植物園についてよくいただく質問とその回答をまとめました。
                  </p>
                  <Badge variant="secondary">詳細を見る →</Badge>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">今すぐ占いを始めましょう</h3>
          <p className="text-muted-foreground mb-6">ペルナちゃんがあなたの運勢を占います</p>
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

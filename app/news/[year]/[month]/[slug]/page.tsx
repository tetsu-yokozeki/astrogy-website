"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { notFound } from "next/navigation"

// Mock article data - in a real app, this would come from a CMS or database
const getArticleData = (year: string, month: string, slug: string) => {
  const articles = {
    "2025-01-2025-lucky-actions": {
      title: "2025年の星座別開運アクション大公開！",
      summary: "新年を迎えるにあたって、各星座におすすめの開運アクションをペルナちゃんが詳しく解説します。",
      content: `
        <p>みなさん、新年あけましておめでとうございます！ペルナちゃんです🌺</p>
        
        <p>2025年がスタートしましたね。今年はどんな年にしたいですか？新しい年を迎えるにあたって、各星座におすすめの開運アクションをご紹介します。</p>
        
        <h3>牡羊座（3/21-4/19）</h3>
        <p>今年の牡羊座さんは、新しいことにチャレンジする絶好の年です。特に春頃から運気が上昇するので、3月までに準備を整えておきましょう。おすすめの開運アクションは「朝の散歩」です。朝の新鮮な空気を吸いながら、今日一日の目標を心の中で唱えてみてください。</p>
        
        <h3>牡牛座（4/20-5/20）</h3>
        <p>牡牛座さんは今年、安定した成長を遂げる年になりそうです。焦らずじっくりと取り組むことが成功の鍵。おすすめの開運アクションは「植物を育てる」こと。小さな観葉植物でも構いません。毎日水をあげながら、自分の成長も願ってみてくださいね。</p>
        
        <h3>双子座（5/21-6/21）</h3>
        <p>双子座さんは今年、コミュニケーション運が絶好調！新しい出会いや学びの機会に恵まれるでしょう。おすすめの開運アクションは「日記を書く」こと。その日感じたことや学んだことを記録することで、運気がさらにアップします。</p>
        
        <p>他の星座の開運アクションも気になる方は、ぜひLINE公式アカウントに登録してくださいね。詳しい情報をお届けします！</p>
        
        <p>それでは、みなさんにとって素晴らしい一年になりますように✨</p>
        
        <p>ペルナちゃんより</p>
      `,
      publishDate: "2025-01-01",
      updateDate: "2025-01-01",
      author: "ペルナちゃん",
      tags: ["開運", "2025年", "星座"],
      image: "/fortune-telling-crystals-and-stars.png",
    },
    "2024-12-love-fortune-rafflesia": {
      title: "恋愛運アップの秘訣：ラフレシアの花言葉から学ぶ",
      summary: "ラフレシアの花言葉に隠された恋愛成就の秘密を、植物園の住人たちと一緒に探ってみましょう。",
      content: `
        <p>こんにちは、ペルナちゃんです🌺</p>
        
        <p>今日は私の故郷でもあるラフレシアの花言葉について、恋愛運の観点からお話ししたいと思います。</p>
        
        <h3>ラフレシアの花言葉</h3>
        <p>ラフレシアの花言葉は「夢中」「情熱」「一途な愛」です。世界最大の花として知られるラフレシアは、その大きさだけでなく、愛の深さも表現しているんですね。</p>
        
        <h3>恋愛運アップの秘訣</h3>
        <p>ラフレシアの花言葉から学べる恋愛成就の秘訣は以下の通りです：</p>
        
        <ul>
        <li><strong>情熱を持つ</strong>：好きな人への気持ちを大切にしましょう</li>
        <li><strong>一途でいる</strong>：浮気心は禁物。真剣な気持ちが相手に伝わります</li>
        <li><strong>夢中になる</strong>：恋愛だけでなく、自分の趣味や仕事にも夢中になることで魅力がアップ</li>
        </ul>
        
        <p>植物園の仲間たちも、みんなそれぞれの恋愛観を持っています。今度、他の植物たちの恋愛アドバイスもご紹介しますね。</p>
        
        <p>素敵な恋愛ができますように💕</p>
      `,
      publishDate: "2024-12-28",
      updateDate: "2024-12-28",
      author: "ペルナちゃん",
      tags: ["恋愛", "ラフレシア", "花言葉"],
      image: "/rafflesia-flower-love-romance.png",
    },
  }

  const key = `${year}-${month}-${slug}`
  return articles[key as keyof typeof articles] || null
}

export default function NewsArticlePage({
  params,
}: {
  params: { year: string; month: string; slug: string }
}) {
  const article = getArticleData(params.year, params.month, params.slug)

  if (!article) {
    notFound()
  }

  const shareText = `${article.title} #占い植物園 #ペルナちゃん`
  const shareUrl = `https://fortune-plant-garden.vercel.app/news/${params.year}/${params.month}/${params.slug}`

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

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">
            ホーム
          </Link>
          <span>→</span>
          <Link href="/news" className="hover:text-primary">
            NEWS
          </Link>
          <span>→</span>
          <span className="text-primary line-clamp-1">{article.title}</span>
        </div>
      </div>

      {/* Article Header */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
              <span>{new Date(article.publishDate).toLocaleDateString("ja-JP")}</span>
              <span>•</span>
              <span>{article.author}</span>
              {article.updateDate !== article.publishDate && (
                <>
                  <span>•</span>
                  <span>更新: {new Date(article.updateDate).toLocaleDateString("ja-JP")}</span>
                </>
              )}
            </div>
            <h1 className="text-4xl font-bold text-primary mb-4 text-balance">{article.title}</h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">{article.summary}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="rounded-full">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Share Buttons */}
            <div className="flex gap-4 justify-center">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full bg-transparent"
                onClick={() =>
                  window.open(
                    `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
                    "_blank",
                  )
                }
              >
                Xでシェア
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full bg-transparent"
                onClick={() =>
                  window.open(
                    `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}`,
                    "_blank",
                  )
                }
              >
                LINEでシェア
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-12">
            <img
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg hand-drawn-shadow wavy-border"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-3xl">
          <Card className="wavy-border hand-drawn-shadow">
            <CardContent className="p-8">
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
                style={{
                  lineHeight: "1.8",
                }}
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Author Info */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <Card className="wavy-border-alt hand-drawn-shadow">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-3xl">🌺</div>
                <div>
                  <CardTitle className="text-xl text-primary">{article.author}</CardTitle>
                  <p className="text-muted-foreground">
                    占い植物園の案内人。ラフレシアの妖精として、みなさんの運勢をサポートしています。
                  </p>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">関連記事</h3>
          <div className="text-center">
            <Link href="/news">
              <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent">
                他の記事を見る
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
            <h3 className="text-3xl font-bold text-primary mb-4">最新記事をLINEで受け取ろう</h3>
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

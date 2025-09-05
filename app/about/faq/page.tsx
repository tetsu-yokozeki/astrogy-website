import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

const faqCategories = [
  {
    category: "占いについて",
    questions: [
      {
        question: "占いの結果はどのくらい正確ですか？",
        answer:
          "占い植物園の占いは、植物の神秘的な力と星座の運行を組み合わせた独自の方法で行っています。結果は参考として活用していただき、最終的な判断はご自身で行ってください。多くの方から「当たっている」とのお声をいただいています。",
      },
      {
        question: "毎日占いをチェックしても大丈夫ですか？",
        answer:
          "はい、毎日チェックしていただいて構いません。ただし、占い結果に一喜一憂しすぎず、前向きな気持ちで参考程度に活用することをおすすめします。",
      },
      {
        question: "占いの結果が悪い時はどうすればいいですか？",
        answer:
          "悪い結果が出た時こそ、注意深く行動することで困難を回避できる可能性があります。ペルナちゃんたちからのアドバイスを参考に、ポジティブに過ごしましょう。",
      },
      {
        question: "星座の境界日生まれですが、どちらの星座を選べばいいですか？",
        answer:
          "星座の境界日（カスプ）生まれの方は、生まれた時間によって星座が決まります。正確な出生時間がわからない場合は、両方の星座の占いを参考にしてみてください。",
      },
    ],
  },
  {
    category: "キャラクターについて",
    questions: [
      {
        question: "ペルナちゃんはどんなキャラクターですか？",
        answer:
          "ペルナちゃんは占い植物園のメインキャラクターで、ラフレシアの力を持っています。優しくて面倒見が良く、総合運や恋愛運の占いが得意です。みんなのことを第一に考える母性的な性格をしています。",
      },
      {
        question: "どのキャラクターに相談すればいいですか？",
        answer:
          "お悩みの内容によって選んでください。恋愛関係はハートちゃん、仕事や人間関係はフローラちゃん、お金や健康はグリップちゃん、総合的な相談はペルナちゃんがおすすめです。",
      },
      {
        question: "キャラクターたちは実在しますか？",
        answer:
          "キャラクターたちは占い植物園の世界に住む特別な存在です。実際の植物の力と神秘的なエネルギーを組み合わせて、皆さんに占いをお届けしています。",
      },
    ],
  },
  {
    category: "サイトの使い方",
    questions: [
      {
        question: "スマートフォンでも利用できますか？",
        answer:
          "はい、スマートフォンやタブレットでも快適にご利用いただけるよう設計されています。いつでもどこでも占いをお楽しみください。",
      },
      {
        question: "会員登録は必要ですか？",
        answer: "いいえ、会員登録なしでご利用いただけます。気軽に占いをお楽しみください。",
      },
      {
        question: "占い結果を保存することはできますか？",
        answer:
          "現在、占い結果の保存機能はありませんが、スクリーンショットを撮って保存していただくことをおすすめします。将来的には保存機能の追加も検討しています。",
      },
      {
        question: "サイトが正しく表示されません",
        answer:
          "ブラウザのキャッシュをクリアするか、別のブラウザでお試しください。それでも解決しない場合は、お問い合わせフォームからご連絡ください。",
      },
    ],
  },
  {
    category: "その他",
    questions: [
      {
        question: "占い植物園はいつから始まったのですか？",
        answer:
          "占い植物園は2020年にペルナちゃんが小さな温室で占いを始めたのがきっかけです。詳しい歴史については「植物園の歴史」ページをご覧ください。",
      },
      {
        question: "新しい機能の追加予定はありますか？",
        answer:
          "はい、常により良いサービスを提供するため、新機能の開発を進めています。最新情報はNEWSページでお知らせします。",
      },
      {
        question: "占い以外のコンテンツはありますか？",
        answer:
          "占い以外にも、キャラクター紹介、植物の解説、星座ガイドなど、楽しいコンテンツをご用意しています。ぜひ色々なページを探索してみてください。",
      },
      {
        question: "お問い合わせ方法を教えてください",
        answer:
          "現在、直接的なお問い合わせフォームはありませんが、サイトに関するご質問やご要望がございましたら、各ページのコメント欄やSNSを通じてお気軽にお声かけください。",
      },
    ],
  },
]

export default function FAQPage() {
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
                <p className="text-xs sm:text-sm text-muted-foreground">よくある質問</p>
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
          <h2 className="title-text text-primary mb-3 sm:mb-4">よくある質問</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-3xl mx-auto px-2">
            占い植物園についてよくいただく質問とその回答をまとめました。
            <br className="hidden sm:block" />
            お探しの情報が見つからない場合は、お気軽にお問い合わせください。
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <Card
                key={category.category}
                className={`hand-drawn-shadow ${categoryIndex % 2 === 0 ? "wavy-border" : "wavy-border-alt"}`}
              >
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center gap-2">
                    <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm">
                      {categoryIndex + 1}
                    </span>
                    {category.category}
                  </CardTitle>
                  <CardDescription>{category.category}に関するよくある質問</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, questionIndex) => (
                      <AccordionItem key={questionIndex} value={`item-${categoryIndex}-${questionIndex}`}>
                        <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">他にご質問はありませんか？</h3>
            <p className="text-muted-foreground mb-6">
              上記で解決しない疑問やご要望がございましたら、
              <br className="hidden sm:block" />
              ペルナちゃんたちがお手伝いします。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="hand-drawn-shadow wavy-border">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">サイトについて</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">サイトの使い方や技術的な問題について</p>
                  <Button size="sm" variant="outline" className="w-full bg-transparent" disabled>
                    お問い合わせフォーム（準備中）
                  </Button>
                </CardContent>
              </Card>

              <Card className="hand-drawn-shadow wavy-border-alt">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">占いについて</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">占いの内容や結果についてのご質問</p>
                  <Button size="sm" variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="/about/how-to-use">占いの使い方を見る</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">占い植物園を楽しみましょう</h3>
          <div className="flex flex-col gap-3 sm:gap-4 justify-center max-w-sm mx-auto sm:max-w-none sm:flex-row">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link href="/daily">今日の運勢</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent" asChild>
              <Link href="/about">占い植物園とは？</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

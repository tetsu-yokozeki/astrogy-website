import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const storyChapters = [
  {
    chapter: 1,
    title: "植物園の誕生",
    content: `遠い昔、世界のどこかに小さな種が落ちました。その種は普通の種ではありませんでした。愛と希望、そして人々の幸せを願う気持ちが込められた、特別な種だったのです。

やがて種は芽を出し、美しい庭園へと成長しました。そこには不思議な力を持つ植物たちが次々と根を下ろし、やがて小さな妖精たちが生まれました。

最初に生まれたのは、世界最大の花ラフレシアの妖精「ペルナちゃん」でした。彼女は生まれながらにして、人々の心を読み、未来を見通す力を持っていました。`,
    illustration: "🌱",
    mood: "神秘的で希望に満ちた",
  },
  {
    chapter: 2,
    title: "仲間たちとの出会い",
    content: `ペルナちゃんが一人で庭園を守っていたある日、新しい仲間たちが次々と現れました。

まず現れたのは、几帳面で責任感の強いウツボカズラの妖精「ウッツくん」。彼は庭園の管理と、訪れる人々の仕事の悩みを解決する役割を担いました。

次に、愛に満ちたハートカズラの妖精「ハートちゃん」が加わりました。彼女の優しさと恋愛への深い理解は、多くの人々の心を癒しました。

太陽のように明るいひまわりの妖精「サニーくん」は、疲れた人々にエネルギーを与える役割を。神秘的なムーンフラワーの妖精「ミスティちゃん」は、深い洞察力で人々の心の奥底を見つめました。

最後に、希少な四つ葉のクローバーの妖精「ラッキーくん」が仲間に加わり、幸運を運ぶ役割を担いました。`,
    illustration: "👥",
    mood: "温かく賑やかな",
  },
  {
    chapter: 3,
    title: "占い植物園の完成",
    content: `6人の妖精が揃った時、庭園は「占い植物園」として完成しました。

中央には「願いの泉」が現れ、満月の夜に願い事をすると叶うと言われるようになりました。園の奥には古い「時の樹」が根を下ろし、過去・現在・未来を映し出す神聖な場所となりました。

それぞれの妖精たちは自分の専門エリアを持ち、訪れる人々の様々な悩みに寄り添うようになりました。ペルナちゃんはエントランスで案内人として、みんなを温かく迎え入れました。

こうして占い植物園は、人々の心の支えとなる特別な場所として、多くの人に愛されるようになったのです。`,
    illustration: "🏛️",
    mood: "完成の喜びと希望",
  },
  {
    chapter: 4,
    title: "現在の植物園",
    content: `今日も占い植物園では、妖精たちが訪れる人々を温かく迎えています。

朝早くから夜遅くまで、様々な悩みを抱えた人々が園を訪れます。恋に悩む人、仕事で困っている人、健康を気にする人、将来に不安を感じる人...

妖精たちはそれぞれの専門分野で、一人一人に寄り添い、希望の光を示してくれます。時には厳しいアドバイスもありますが、それは全て訪れる人の幸せを願ってのこと。

占い植物園は今日も、人々の心の支えとなり続けています。そして、あなたもその一人として、いつでも温かく迎えられることでしょう。`,
    illustration: "🌈",
    mood: "現在進行形の温かさ",
  },
]

const worldLore = [
  {
    title: "植物園の魔法",
    description:
      "占い植物園には特別な魔法がかかっています。この魔法により、植物たちは人間の言葉を理解し、妖精たちは人々の心を読むことができます。",
    details: [
      "愛と希望のエネルギーが園全体を包んでいる",
      "訪れる人の心に応じて園の景色が微妙に変化する",
      "植物たちは季節に関係なく美しく咲き続ける",
      "時間の流れが外の世界とは少し異なる",
    ],
  },
  {
    title: "妖精たちの力の源",
    description: "妖精たちの占いの力は、それぞれの植物が持つ自然のエネルギーと、人々への愛情から生まれています。",
    details: [
      "植物の特性が妖精の能力に直結している",
      "人々の幸せを願う気持ちが力を増幅させる",
      "月の満ち欠けや季節の変化が力に影響する",
      "仲間同士の絆が個々の力を高める",
    ],
  },
  {
    title: "園を訪れる人々",
    description: "占い植物園には、世界中から様々な人々が訪れます。年齢、性別、職業を問わず、すべての人が歓迎されます。",
    details: [
      "初回訪問者には特別な歓迎の儀式がある",
      "リピーターには個別の成長記録が保管される",
      "緊急時には24時間いつでも相談可能",
      "言語の壁は園の魔法により自動的に解決される",
    ],
  },
]

export default function StoryPage() {
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
                <p className="text-xs sm:text-sm text-muted-foreground">物語と世界観</p>
              </div>
            </Link>
            <Link href="/world/perna" className="text-sm text-muted-foreground hover:text-primary">
              ← 戻る
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-3 sm:px-4">
        <div className="container mx-auto text-center">
          <h2 className="title-text text-primary mb-3 sm:mb-4">占い植物園の物語</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-3xl mx-auto px-2">
            愛と希望に満ちた占い植物園の誕生から現在まで。
            <br className="hidden sm:block" />
            妖精たちと園の歴史を詳しくご紹介します。
          </p>
        </div>
      </section>

      {/* Story Chapters */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">物語の章立て</h3>
            <div className="space-y-8">
              {storyChapters.map((chapter, index) => (
                <Card
                  key={chapter.chapter}
                  className={`hand-drawn-shadow ${index % 2 === 0 ? "wavy-border" : "wavy-border-alt"}`}
                >
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-3xl">
                        {chapter.illustration}
                      </div>
                      <div>
                        <Badge variant="secondary" className="mb-2">
                          第{chapter.chapter}章
                        </Badge>
                        <CardTitle className="text-xl text-primary">{chapter.title}</CardTitle>
                        <CardDescription className="italic">{chapter.mood}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-lg max-w-none">
                      {chapter.content.split("\n\n").map((paragraph, paragraphIndex) => (
                        <p key={paragraphIndex} className="mb-4 leading-relaxed text-muted-foreground">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* World Lore */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">世界観の詳細設定</h3>
            <div className="space-y-6">
              {worldLore.map((lore, index) => (
                <Card
                  key={lore.title}
                  className={`hand-drawn-shadow ${index % 2 === 0 ? "wavy-border" : "wavy-border-alt"}`}
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{lore.title}</CardTitle>
                    <CardDescription>{lore.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {lore.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-sm text-muted-foreground flex items-start gap-2">
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

      {/* Timeline */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">植物園の歴史年表</h3>
            <Card className="hand-drawn-shadow wavy-border">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Badge variant="default" className="text-sm px-3 py-1">
                      太古の昔
                    </Badge>
                    <p className="text-sm text-muted-foreground">特別な種が大地に落ちる</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge variant="default" className="text-sm px-3 py-1">
                      数百年前
                    </Badge>
                    <p className="text-sm text-muted-foreground">庭園が形成され、ペルナちゃんが誕生</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge variant="default" className="text-sm px-3 py-1">
                      数十年前
                    </Badge>
                    <p className="text-sm text-muted-foreground">他の妖精たちが次々と仲間に加わる</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge variant="default" className="text-sm px-3 py-1">
                      現在
                    </Badge>
                    <p className="text-sm text-muted-foreground">占い植物園として多くの人々に愛される</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge variant="outline" className="text-sm px-3 py-1">
                      未来
                    </Badge>
                    <p className="text-sm text-muted-foreground">さらなる発展と新しい仲間の加入予定</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">物語の世界を体験しよう</h3>
          <div className="flex flex-col gap-3 sm:gap-4 justify-center max-w-sm mx-auto sm:max-w-none sm:flex-row">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link href="/world/characters">キャラクター図鑑</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent" asChild>
              <Link href="/world/locations">園内マップ</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

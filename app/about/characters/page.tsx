import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const characters = [
  {
    name: "ペルナちゃん",
    plant: "ラフレシア",
    description:
      "占い植物園のメインキャラクター。大きな赤い花が特徴的で、みんなの運勢を占ってくれる優しい性格。世界最大の花として知られるラフレシアの力を借りて、総合的な運勢を見通すことができます。",
    specialty: "総合運・恋愛運",
    color: "赤",
    personality: "優しくて面倒見が良い。みんなのことを第一に考える母性的な性格。",
    hobby: "花の手入れ、星空観察",
    favoriteFood: "甘い蜜、フルーツ",
    skills: ["総合運占い", "恋愛相談", "人生アドバイス"],
  },
  {
    name: "ハートちゃん",
    plant: "ハートリーフ",
    description:
      "愛情深くて情熱的なキャラクター。恋愛関係の悩みを解決するのが得意で、いつも元気いっぱい。ハート型の葉っぱが特徴的で、恋愛運を高める特別な力を持っています。",
    specialty: "恋愛運・人間関係",
    color: "赤・ピンク",
    personality: "明るくて積極的。恋愛に関してはとても情熱的で、みんなの恋を応援したがる。",
    hobby: "恋愛映画鑑賞、お菓子作り",
    favoriteFood: "チョコレート、イチゴ",
    skills: ["恋愛運占い", "相性診断", "デートアドバイス"],
  },
  {
    name: "フローラちゃん",
    plant: "触手系植物",
    description:
      "神秘的で知的なキャラクター。複雑な人間関係や仕事の悩みを的確にアドバイスしてくれる。触手のような蔓を使って、複雑に絡み合った問題を解きほぐすのが得意です。",
    specialty: "仕事運・人間関係",
    color: "青・水色",
    personality: "冷静で分析力が高い。論理的に物事を考えるのが得意で、客観的なアドバイスをくれる。",
    hobby: "読書、パズル解き",
    favoriteFood: "ハーブティー、野菜",
    skills: ["仕事運占い", "人間関係分析", "問題解決アドバイス"],
  },
  {
    name: "グリップちゃん",
    plant: "ウツボカズラ",
    description:
      "しっかり者で頼りになるキャラクター。お金や健康に関する運勢を教えてくれる実用的な性格。ウツボカズラの捕虫袋のように、幸運をしっかりとキャッチする力があります。",
    specialty: "金運・健康運",
    color: "緑",
    personality: "真面目で責任感が強い。実用的なアドバイスが得意で、現実的な解決策を提案してくれる。",
    hobby: "貯金、健康管理",
    favoriteFood: "栄養ドリンク、サラダ",
    skills: ["金運占い", "健康運占い", "実用的アドバイス"],
  },
]

export default function CharactersPage() {
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
                <p className="text-xs sm:text-sm text-muted-foreground">キャラクター紹介</p>
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
          <h2 className="title-text text-primary mb-3 sm:mb-4">キャラクター紹介</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-3xl mx-auto px-2">
            占い植物園で活躍する個性豊かなキャラクターたちをご紹介します。
            <br className="hidden sm:block" />
            それぞれが異なる植物の力を持ち、専門分野で皆さんをサポートします。
          </p>
        </div>
      </section>

      {/* Characters Detail */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="space-y-12 max-w-4xl mx-auto">
            {characters.map((character, index) => (
              <Card
                key={character.name}
                className={`hand-drawn-shadow ${index % 2 === 0 ? "wavy-border" : "wavy-border-alt"} overflow-hidden`}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center text-4xl"
                        style={{
                          backgroundColor:
                            character.color === "赤"
                              ? "#ea580c"
                              : character.color === "青・水色"
                                ? "#3b82f6"
                                : character.color === "緑"
                                  ? "#10b981"
                                  : "#f97316",
                        }}
                      >
                        {character.name === "ペルナちゃん"
                          ? "🌺"
                          : character.name === "ハートちゃん"
                            ? "💖"
                            : character.name === "フローラちゃん"
                              ? "🌀"
                              : "🌿"}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary">{character.name}</h3>
                        <p className="text-muted-foreground">({character.plant})</p>
                        <Badge variant="secondary" className="mt-2">
                          {character.specialty}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{character.description}</p>
                  </div>

                  <div className="p-6 bg-muted/30">
                    <h4 className="font-bold text-primary mb-3">詳細プロフィール</h4>
                    <div className="space-y-3">
                      <div>
                        <span className="font-semibold text-sm">性格:</span>
                        <p className="text-sm text-muted-foreground">{character.personality}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-sm">趣味:</span>
                        <p className="text-sm text-muted-foreground">{character.hobby}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-sm">好きな食べ物:</span>
                        <p className="text-sm text-muted-foreground">{character.favoriteFood}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-sm">得意なスキル:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {character.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">他の情報も見てみましょう</h3>
          <div className="flex flex-col gap-3 sm:gap-4 justify-center max-w-sm mx-auto sm:max-w-none sm:flex-row">
            <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent" asChild>
              <Link href="/about/plants">植物について</Link>
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

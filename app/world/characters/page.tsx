import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

const characters = [
  {
    id: 1,
    name: "ペルナちゃん",
    plant: "ラフレシア",
    personality: "明るくて優しい、みんなのお姉さん的存在",
    catchphrase: "今日も素敵な一日になりますように〜",
    themeColor: "#ea580c",
    specialty: "総合運勢占い",
    description: "占い植物園の案内人。世界最大の花ラフレシアの妖精として、訪れる人々の運勢を占っています。",
    backstory: "遠い南国の森で生まれたペルナちゃんは、ラフレシアの花の中で眠っていました。ある日、占い植物園の創設者に発見され、園の案内人として迎えられました。",
    abilities: ["総合運勢占い", "未来予知", "心の癒し", "植物との会話"],
    favoriteThings: ["朝の散歩", "花の香り", "みんなの笑顔", "温かいお茶"],
    weaknesses: ["寒い場所", "騒がしい環境"],
  },
  {
    id: 2,
    name: "ウッツくん",
    plant: "ウツボカズラ",
    personality: "真面目で責任感が強い、仕事熱心",
    catchphrase: "効率よく行きましょう！",
    themeColor: "#16a34a",
    specialty: "仕事運・キャリア占い",
    description: "植物園の秘書的存在。ウツボカズラの特性を活かして、仕事運アップのアドバイスが得意です。",
    backstory: "もともとは研究所で育てられていたウッツくん。几帳面な性格と優秀な能力を買われて、植物園の運営を任されるようになりました。",
    abilities: ["キャリア診断", "効率化提案", "目標設定サポート", "ストレス管理"],
    favoriteThings: ["整理整頓", "スケジュール管理", "成果の確認", "静かな環境"],
    weaknesses: ["予定の変更", "曖昧な指示"],
  },
  {
    id: 3,
    name: "ハートちゃん",
    plant: "ハートカズラ",
    personality: "ロマンチックで感情豊か、恋愛に詳しい",
    catchphrase: "愛は世界を救うのよ",
    themeColor: "#ec4899",
    specialty: "恋愛運・人間関係占い",
    description: "ハート型の葉っぱが特徴的な恋愛の専門家。恋の悩みなら何でもお任せください。",
    backstory: "愛に満ちた家庭で育ったハートちゃんは、幼い頃から人々の恋愛を応援することが大好きでした。その優しさが認められ、恋愛専門の占い師になりました。",
    abilities: ["相性診断", "恋愛アドバイス", "関係修復", "魅力アップ指導"],
    favoriteThings: ["ロマンチックな映画", "花束", "カップルの幸せ", "甘いお菓子"],
    weaknesses: ["悲しい別れ話", "冷たい態度"],
  },
  {
    id: 4,
    name: "サニーくん",
    plant: "サンフラワー",
    personality: "元気いっぱい、ポジティブ思考",
    catchphrase: "太陽のように輝こう！",
    themeColor: "#eab308",
    specialty: "健康運・エネルギー占い",
    description: "いつも太陽の方を向いているひまわりの精神で、みんなを元気づけてくれます。",
    backstory: "広い畑で太陽の光をたっぷり浴びて育ったサニーくん。その明るいエネルギーで、疲れた人々を癒し、元気を与える使命を持っています。",
    abilities: ["エネルギー診断", "健康アドバイス", "気分転換提案", "モチベーション向上"],
    favoriteThings: ["晴れた日", "運動", "みんなの笑い声", "新鮮な空気"],
    weaknesses: ["雨の日", "暗い場所"],
  },
  {
    id: 5,
    name: "ミスティちゃん",
    plant: "ムーンフラワー",
    personality: "神秘的で直感力が鋭い、夜型",
    catchphrase: "月の光が教えてくれるの...",
    themeColor: "#8b5cf6",
    specialty: "スピリチュアル・直感占い",
    description: "夜に咲く花の妖精。月のエネルギーを使って、深層心理や未来を読み取ります。",
    backstory: "満月の夜に生まれたミスティちゃんは、月の女神から特別な力を授かりました。夜の静寂の中で、人々の心の奥底を見つめ、真実を伝えます。",
    abilities: ["深層心理分析", "未来透視", "スピリチュアル指導", "瞑想サポート"],
    favoriteThings: ["満月の夜", "静寂", "神秘的な音楽", "クリスタル"],
    weaknesses: ["騒がしい昼間", "強い光"],
  },
  {
    id: 6,
    name: "ラッキーくん",
    plant: "四つ葉のクローバー",
    personality: "のんびり屋だけど幸運を呼ぶ",
    catchphrase: "ラッキー♪",
    themeColor: "#22c55e",
    specialty: "金運・幸運占い",
    description: "希少な四つ葉のクローバーの妖精。出会えただけで幸運が訪れると言われています。",
    backstory: "数万本に一本しかない四つ葉のクローバーとして生まれたラッキーくん。その希少性から幸運の象徴とされ、多くの人々に愛されています。",
    abilities: ["幸運予測", "金運アップ", "チャンス発見", "ポジティブ思考"],
    favoriteThings: ["のんびりした時間", "緑の芝生", "みんなの幸せ", "お昼寝"],
    weaknesses: ["急かされること", "プレッシャー"],
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
                <p className="text-xs sm:text-sm text-muted-foreground">キャラクター図鑑</p>
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
          <h2 className="title-text text-primary mb-3 sm:mb-4">キャラクター図鑑</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-3xl mx-auto px-2">
            占い植物園で暮らす愛らしい妖精たちを詳しくご紹介します。
            <br className="hidden sm:block" />
            それぞれの個性や特技を知って、より深く占いを楽しみましょう。
          </p>
        </div>
      </section>

      {/* Characters Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-12">
              {characters.map((character, index) => (
                <Card
                  key={character.id}
                  className={`hand-drawn-shadow ${
                    index % 2 === 0 ? "wavy-border" : "wavy-border-alt"
                  }`}
                >
                  <div className="grid md:grid-cols-3 gap-6 p-6">
                    {/* Character Avatar */}
                    <div className="text-center">
                      <div
                        className="w-32 h-32 mx-auto mb-4 rounded-full flex items-center justify-center text-6xl font-bold text-white hand-drawn-shadow"
                        style={{ backgroundColor: character.themeColor }}
                      >
                        {character.name.charAt(0)}
                      </div>
                      <h3 className="text-2xl font-bold mb-2" style={{ color: character.themeColor }}>
                        {character.name}
                      </h3>
                      <Badge
                        className="mb-4"
                        style={{ backgroundColor: character.themeColor, color: "white" }}
                      >
                        {character.plant}
                      </Badge>
                      <p className="text-sm italic text-muted-foreground">
                        「{character.catchphrase}」
                      </p>
                    </div>

                    {/* Character Details */}
                    <div className="md:col-span-2 space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">プロフィール</h4>
                        <p className="text-sm text-muted-foreground mb-2">{character.description}</p>
                        <p className="text-sm text-muted-foreground">{character.backstory}</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-primary mb-2">性格</h4>
                          <p className="text-sm text-muted-foreground">{character.personality}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary mb-2">得意分野</h4>
                          <Badge variant="outline" className="text-sm">
                            {character.specialty}
                          </Badge>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-primary mb-2">特殊能力</h4>
                        <div className="flex flex-wrap gap-1">
                          {character.abilities.map((ability, abilityIndex) => (
                            <Badge key={abilityIndex} variant="secondary" className="text-xs">
                              {ability}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-primary mb-2">好きなもの</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {character.favoriteThings.map((thing, thingIndex) => (
                              <li key={thingIndex} className="flex items-start gap-2">
                                <span className="text-primary">•</span>
                                {thing}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary mb-2">苦手なもの</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {character.weaknesses.map((weakness, weaknessIndex) => (
                              <li key={weaknessIndex} className="flex items-start gap-2">
                                <span className="text-primary">•</span>
                                {weakness}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Character Relationships */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">キャラクター相関図</h3>
            <Card className="hand-drawn-shadow wavy-border">
              <CardHeader>
                <CardTitle className="text-xl text-primary">植物園での関係性</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">リーダーシップ</h4>
                    <p className="text-sm text-muted-foreground">
                      ペルナちゃんが園全体のリーダーとして、みんなをまとめています。ウッツくんが実務面でサポート。
                    </p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">専門分野での協力</h4>
                    <p className="text-sm text-muted-foreground">
                      ハートちゃんとミスティちゃんは感情面で、サニーくんとラッキーくんはポジティブエネルギーで連携。
                    </p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">日常の交流</h4>
                    <p className="text-sm text-muted-foreground">
                      みんな仲良しで、お茶の時間には中央広場に集まって情報交換をしています。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">キャラクターたちに会いに行こう</h3>
          <div className="flex flex-col gap-3 sm:gap-4 justify-center max-w-sm mx-auto sm:max-w-none sm:flex-row">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link href="/daily">今日の運勢</Link>
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


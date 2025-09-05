import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
  },
]

const worldTerms = [
  {
    term: "占い植物園",
    description: "様々な植物の妖精たちが住む不思議な庭園。訪れる人々の運勢を占ってくれる。",
  },
  {
    term: "植物の妖精",
    description: "それぞれの植物の特性を持った小さな妖精たち。人間の言葉を話し、占いができる。",
  },
  {
    term: "運勢の花",
    description: "その日の運勢によって色や形が変わる不思議な花。園内のあちこちに咲いている。",
  },
  {
    term: "願いの泉",
    description: "園の中央にある泉。満月の夜に願い事をすると叶うと言われている。",
  },
  {
    term: "時の樹",
    description: "過去・現在・未来を映し出す古い樹。重要な決断の時に相談に乗ってくれる。",
  },
]

export default function WorldPernaPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/F62C34D2-A8EB-4835-A306-B93B24844F12-GMR9rdfB9YDdyF5ZAwdBJyqlKRaloU.png"
                  alt="ペルナちゃん"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
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
          <span className="text-primary">ペルナちゃんの世界観</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto text-center">
          <div className="w-80 h-80 mx-auto mb-8 flex items-center justify-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/F62C34D2-A8EB-4835-A306-B93B24844F12-GMR9rdfB9YDdyF5ZAwdBJyqlKRaloU.png"
              alt="ペルナちゃんと仲間たち"
              width={320}
              height={320}
              className="object-contain hand-drawn-shadow wavy-border rounded-2xl bg-white/50 p-4"
            />
          </div>
          <h2 className="text-5xl font-bold text-primary mb-4">ペルナちゃんの世界観</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            不思議な占い植物園で暮らす、愛らしい植物の妖精たちをご紹介します。
            <br />
            それぞれが持つ特別な力で、あなたの人生をサポートしてくれますよ。
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="story" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-12">
              <TabsTrigger value="story">ストーリー</TabsTrigger>
              <TabsTrigger value="characters">キャラクター</TabsTrigger>
              <TabsTrigger value="world">世界観</TabsTrigger>
              <TabsTrigger value="glossary">用語集</TabsTrigger>
              <TabsTrigger value="credits">クレジット</TabsTrigger>
            </TabsList>

            <TabsContent value="story">
              <Card className="wavy-border hand-drawn-shadow">
                <CardHeader>
                  <CardTitle className="text-3xl text-primary">占い植物園の物語</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <p>
                      遠い昔、世界のどこかに不思議な庭園がありました。そこは「占い植物園」と呼ばれ、様々な植物の妖精たちが暮らしていました。
                    </p>
                    <p>
                      園の案内人は、世界最大の花ラフレシアの妖精「ペルナちゃん」。彼女は明るく優しい性格で、訪れる人々の運勢を占い、幸せへと導いてくれます。
                    </p>
                    <p>
                      植物園には他にも個性豊かな妖精たちが住んでいます。仕事運が得意なウツボカズラの「ウッツくん」、恋愛の専門家ハートカズラの「ハートちゃん」、元気いっぱいのひまわりの「サニーくん」、神秘的なムーンフラワーの「ミスティちゃん」、そして幸運を呼ぶ四つ葉のクローバーの「ラッキーくん」。
                    </p>
                    <p>
                      それぞれが持つ植物の特性を活かして、訪れる人々の悩みに寄り添い、明るい未来への道筋を示してくれます。
                    </p>
                    <p>あなたも占い植物園を訪れて、妖精たちと一緒に素敵な毎日を過ごしてみませんか？</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="characters">
              <div className="grid md:grid-cols-2 gap-8">
                {characters.map((character, index) => (
                  <Card
                    key={character.id}
                    className={`${index % 2 === 0 ? "wavy-border" : "wavy-border-alt"} hand-drawn-shadow`}
                  >
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center text-4xl font-bold text-white"
                          style={{ backgroundColor: character.themeColor }}
                        >
                          {character.name.charAt(0)}
                        </div>
                        <div>
                          <CardTitle className="text-2xl" style={{ color: character.themeColor }}>
                            {character.name}
                          </CardTitle>
                          <CardDescription className="text-lg">{character.plant}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">性格</h4>
                        <p>{character.personality}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">口癖</h4>
                        <p className="italic">「{character.catchphrase}」</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">得意分野</h4>
                        <Badge style={{ backgroundColor: character.themeColor, color: "white" }}>
                          {character.specialty}
                        </Badge>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">紹介</h4>
                        <p>{character.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="world">
              <div className="space-y-8">
                <Card className="wavy-border hand-drawn-shadow">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">占い植物園の構造</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-primary">エントランス</h4>
                        <p>ペルナちゃんがお出迎えしてくれる入り口。運勢の花が咲き誇っています。</p>

                        <h4 className="font-semibold text-primary">中央広場</h4>
                        <p>願いの泉を中心とした憩いの場。妖精たちがよく集まっています。</p>

                        <h4 className="font-semibold text-primary">占いの小径</h4>
                        <p>各専門分野の妖精たちが住むエリアへと続く美しい小径。</p>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-primary">時の樹の丘</h4>
                        <p>園の奥にある神聖な場所。重要な占いが行われます。</p>

                        <h4 className="font-semibold text-primary">月光の庭</h4>
                        <p>夜に美しく光る花々が咲く、ミスティちゃんのお気に入りの場所。</p>

                        <h4 className="font-semibold text-primary">幸運の芝生</h4>
                        <p>ラッキーくんが住む四つ葉のクローバーが一面に広がる芝生。</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="wavy-border-alt hand-drawn-shadow">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">特別な場所とアイテム</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center p-4 bg-primary/5 rounded-lg">
                        <h4 className="font-semibold text-primary mb-2">願いの泉</h4>
                        <p className="text-sm">満月の夜に願い事をすると叶う不思議な泉</p>
                      </div>
                      <div className="text-center p-4 bg-secondary/5 rounded-lg">
                        <h4 className="font-semibold text-primary mb-2">時の樹</h4>
                        <p className="text-sm">過去・現在・未来を映し出す古い樹</p>
                      </div>
                      <div className="text-center p-4 bg-primary/5 rounded-lg">
                        <h4 className="font-semibold text-primary mb-2">占いの水晶</h4>
                        <p className="text-sm">妖精たちが占いに使う特別な水晶</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="glossary">
              <Card className="wavy-border hand-drawn-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">用語集</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {worldTerms.map((term, index) => (
                      <div key={index} className="border-l-4 border-primary pl-4">
                        <h4 className="font-semibold text-primary text-lg mb-2">{term.term}</h4>
                        <p className="text-muted-foreground">{term.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="credits">
              <Card className="wavy-border-alt hand-drawn-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">制作クレジット</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-primary mb-4">キャラクターデザイン</h4>
                      <p className="mb-2">ペルナちゃん - 占い植物園チーム</p>
                      <p className="mb-2">ウッツくん - 占い植物園チーム</p>
                      <p className="mb-2">ハートちゃん - 占い植物園チーム</p>
                      <p className="mb-2">サニーくん - 占い植物園チーム</p>
                      <p className="mb-2">ミスティちゃん - 占い植物園チーム</p>
                      <p>ラッキーくん - 占い植物園チーム</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-4">世界観設定</h4>
                      <p className="mb-2">ストーリー - 占い植物園チーム</p>
                      <p className="mb-2">世界観デザイン - 占い植物園チーム</p>
                      <p className="mb-2">用語設定 - 占い植物園チーム</p>
                      <p className="mb-4">占い監修 - ペルナちゃん</p>

                      <h4 className="font-semibold text-primary mb-4">技術協力</h4>
                      <p className="mb-2">Webサイト開発 - v0 by Vercel</p>
                      <p>デザインシステム - shadcn/ui</p>
                    </div>
                  </div>

                  <div className="border-t border-border pt-6">
                    <p className="text-center text-muted-foreground">
                      © 2025 占い植物園. All rights reserved.
                      <br />
                      すべてのキャラクターと世界観は占い植物園の創作です。
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold text-primary mb-6">占い植物園を体験しよう</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/daily">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
                今日の運勢を見る
              </Button>
            </Link>
            <Link href="/monthly">
              <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent">
                今月の運勢
              </Button>
            </Link>
            <Link href="/news">
              <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent">
                占いNEWS
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const locations = [
  {
    id: 1,
    name: "エントランス",
    description: "占い植物園の正面入り口。ペルナちゃんがお出迎えしてくれます。",
    features: ["歓迎の花壇", "案内板", "運勢の花"],
    atmosphere: "明るく開放的",
    residents: ["ペルナちゃん"],
    specialEvents: ["新規来園者の歓迎", "季節の花の展示"],
    visitTips: "初めての方はここでペルナちゃんに挨拶しましょう",
    icon: "🌸",
    color: "text-pink-600",
  },
  {
    id: 2,
    name: "中央広場",
    description: "願いの泉を中心とした憩いの場。妖精たちがよく集まる社交の場です。",
    features: ["願いの泉", "ベンチ", "花時計", "掲示板"],
    atmosphere: "賑やかで温かい",
    residents: ["全キャラクター（集合場所）"],
    specialEvents: ["お茶会", "季節のお祭り", "満月の願い事"],
    visitTips: "満月の夜に願い事をすると叶うと言われています",
    icon: "⛲",
    color: "text-blue-600",
  },
  {
    id: 3,
    name: "仕事運の温室",
    description: "ウッツくんが管理する効率的で整理された温室。キャリア相談ができます。",
    features: ["整理棚", "スケジュール表", "成長記録", "参考書"],
    atmosphere: "静かで集中できる",
    residents: ["ウッツくん"],
    specialEvents: ["キャリア相談会", "効率化セミナー"],
    visitTips: "仕事の悩みがある時は予約を取って相談しましょう",
    icon: "🏢",
    color: "text-green-600",
  },
  {
    id: 4,
    name: "恋愛の花園",
    description: "ハート型の花々が咲き誇る、ロマンチックな雰囲気の花園です。",
    features: ["ハート型花壇", "恋愛の小径", "カップルベンチ", "愛の鐘"],
    atmosphere: "ロマンチックで甘い香り",
    residents: ["ハートちゃん"],
    specialEvents: ["恋愛相談", "カップル祝福式", "バレンタイン特別企画"],
    visitTips: "恋の悩みがある方は、愛の鐘を鳴らしてハートちゃんを呼びましょう",
    icon: "💕",
    color: "text-pink-600",
  },
  {
    id: 5,
    name: "太陽の丘",
    description: "サニーくんが住む、一日中太陽の光が降り注ぐ明るい丘です。",
    features: ["ひまわり畑", "展望台", "健康の小径", "エネルギースポット"],
    atmosphere: "明るく元気いっぱい",
    residents: ["サニーくん"],
    specialEvents: ["朝の体操", "健康相談", "夏至祭り"],
    visitTips: "疲れた時や元気が欲しい時に訪れると良いでしょう",
    icon: "☀️",
    color: "text-yellow-600",
  },
  {
    id: 6,
    name: "月光の庭",
    description: "夜に美しく光る花々が咲く、ミスティちゃんのお気に入りの神秘的な場所。",
    features: ["夜光花", "瞑想スペース", "クリスタルの泉", "星座観測台"],
    atmosphere: "神秘的で静寂",
    residents: ["ミスティちゃん"],
    specialEvents: ["満月の瞑想会", "スピリチュアル相談", "星座観察会"],
    visitTips: "夜間の訪問がおすすめ。心を落ち着けて訪れましょう",
    icon: "🌙",
    color: "text-purple-600",
  },
  {
    id: 7,
    name: "幸運の芝生",
    description: "四つ葉のクローバーが一面に広がる、ラッキーくんの住処です。",
    features: ["クローバー畑", "幸運の木", "のんびりベンチ", "ラッキーアイテム展示"],
    atmosphere: "のどかで平和",
    residents: ["ラッキーくん"],
    specialEvents: ["四つ葉探し", "幸運祈願", "のんびりタイム"],
    visitTips: "四つ葉のクローバーを見つけると幸運が訪れます",
    icon: "🍀",
    color: "text-green-600",
  },
  {
    id: 8,
    name: "時の樹の丘",
    description: "園の奥にある神聖な場所。過去・現在・未来を映し出す古い樹があります。",
    features: ["時の樹", "古代の石碑", "瞑想の円", "時空の扉"],
    atmosphere: "神聖で厳かな",
    residents: ["時の樹の精霊"],
    specialEvents: ["重要な占い", "人生相談", "時の儀式"],
    visitTips: "重要な決断の前に訪れると良い導きが得られます",
    icon: "🌳",
    color: "text-amber-600",
  },
]

const gardenMap = [
  { area: "北エリア", locations: ["エントランス", "中央広場"] },
  { area: "東エリア", locations: ["仕事運の温室", "太陽の丘"] },
  { area: "西エリア", locations: ["恋愛の花園", "月光の庭"] },
  { area: "南エリア", locations: ["幸運の芝生", "時の樹の丘"] },
]

export default function LocationsPage() {
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
                <p className="text-xs sm:text-sm text-muted-foreground">園内マップ</p>
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
          <h2 className="title-text text-primary mb-3 sm:mb-4">園内マップ</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-3xl mx-auto px-2">
            占い植物園の各エリアをご案内します。
            <br className="hidden sm:block" />
            それぞれの場所には特別な力と魅力があります。
          </p>
        </div>
      </section>

      {/* Garden Map Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">園内エリア構成</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {gardenMap.map((area, index) => (
                <Card
                  key={area.area}
                  className={`hand-drawn-shadow ${index % 2 === 0 ? "wavy-border" : "wavy-border-alt"} text-center`}
                >
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{area.area}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {area.locations.map((location, locationIndex) => (
                        <Badge key={locationIndex} variant="secondary" className="mx-1">
                          {location}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Locations */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">各エリア詳細</h3>
            <div className="space-y-8">
              {locations.map((location, index) => (
                <Card
                  key={location.id}
                  className={`hand-drawn-shadow ${index % 2 === 0 ? "wavy-border" : "wavy-border-alt"}`}
                >
                  <div className="grid md:grid-cols-4 gap-6 p-6">
                    {/* Location Icon */}
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center text-4xl">
                        {location.icon}
                      </div>
                      <h3 className={`text-xl font-bold mb-2 ${location.color}`}>{location.name}</h3>
                      <p className="text-sm text-muted-foreground">{location.atmosphere}</p>
                    </div>

                    {/* Location Details */}
                    <div className="md:col-span-3 space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">概要</h4>
                        <p className="text-sm text-muted-foreground">{location.description}</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-primary mb-2">主な設備</h4>
                          <div className="flex flex-wrap gap-1">
                            {location.features.map((feature, featureIndex) => (
                              <Badge key={featureIndex} variant="outline" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary mb-2">住人</h4>
                          <div className="flex flex-wrap gap-1">
                            {location.residents.map((resident, residentIndex) => (
                              <Badge key={residentIndex} variant="secondary" className="text-xs">
                                {resident}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-primary mb-2">特別イベント</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {location.specialEvents.map((event, eventIndex) => (
                            <li key={eventIndex} className="flex items-start gap-2">
                              <span className="text-primary">•</span>
                              {event}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-3 bg-primary/5 rounded-lg">
                        <h4 className="font-semibold text-primary mb-1">訪問のコツ</h4>
                        <p className="text-sm text-muted-foreground">{location.visitTips}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visiting Guidelines */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">園内利用ガイド</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hand-drawn-shadow wavy-border">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-2">
                    <span>🕐</span>
                    開園時間
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 平日: 9:00 - 18:00</li>
                    <li>• 土日祝: 8:00 - 19:00</li>
                    <li>• 月光の庭: 19:00 - 23:00（夜間営業）</li>
                    <li>• 満月の夜: 特別延長営業</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hand-drawn-shadow wavy-border-alt">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-2">
                    <span>📋</span>
                    利用マナー
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 植物を大切に扱いましょう</li>
                    <li>• 妖精たちに優しく接しましょう</li>
                    <li>• 他の来園者への配慮を忘れずに</li>
                    <li>• 写真撮影は許可を得てから</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hand-drawn-shadow wavy-border">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-2">
                    <span>🎯</span>
                    おすすめルート
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 初回: エントランス → 中央広場 → お好みのエリア</li>
                    <li>• 恋愛相談: 恋愛の花園 → 月光の庭</li>
                    <li>• 仕事の悩み: 仕事運の温室 → 時の樹の丘</li>
                    <li>• 総合運: 全エリア巡回コース</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hand-drawn-shadow wavy-border-alt">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-2">
                    <span>💡</span>
                    特別な日
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 満月の夜: 願いの泉で特別な願い事</li>
                    <li>• 新月の日: 新しい始まりの占い</li>
                    <li>• 春分・秋分: バランス調整の日</li>
                    <li>• 夏至・冬至: エネルギー充電の日</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">園内を探索してみましょう</h3>
          <div className="flex flex-col gap-3 sm:gap-4 justify-center max-w-sm mx-auto sm:max-w-none sm:flex-row">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link href="/daily">今日の運勢</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent" asChild>
              <Link href="/world/characters">キャラクター図鑑</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

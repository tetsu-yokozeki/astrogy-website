import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const todayLuckyItems = [
  {
    category: "アクセサリー",
    items: [
      { name: "シルバーリング", effect: "直感力アップ", zodiac: ["蟹座", "蠍座", "魚座"] },
      { name: "ゴールドネックレス", effect: "自信向上", zodiac: ["獅子座", "牡羊座", "射手座"] },
      { name: "パールのイヤリング", effect: "優雅さ向上", zodiac: ["牡牛座", "乙女座", "山羊座"] },
    ],
  },
  {
    category: "ファッション",
    items: [
      { name: "赤いスカーフ", effect: "情熱的な魅力", zodiac: ["牡羊座", "獅子座"] },
      { name: "青いシャツ", effect: "冷静な判断力", zodiac: ["双子座", "天秤座", "水瓶座"] },
      { name: "緑のバッグ", effect: "安定感と成長", zodiac: ["牡牛座", "乙女座", "山羊座"] },
    ],
  },
  {
    category: "小物",
    items: [
      { name: "手帳", effect: "計画性向上", zodiac: ["乙女座", "山羊座"] },
      { name: "ペン", effect: "コミュニケーション力", zodiac: ["双子座", "天秤座"] },
      { name: "ハンカチ", effect: "清潔感と品格", zodiac: ["乙女座", "天秤座"] },
    ],
  },
  {
    category: "食べ物",
    items: [
      { name: "チョコレート", effect: "幸福感アップ", zodiac: ["牡牛座", "蟹座"] },
      { name: "フルーツ", effect: "エネルギー補給", zodiac: ["双子座", "獅子座"] },
      { name: "ハーブティー", effect: "リラックス効果", zodiac: ["蟹座", "蠍座", "魚座"] },
    ],
  },
]

const luckyColors = [
  { color: "赤", hex: "#ef4444", effect: "情熱・行動力", bestFor: ["牡羊座", "獅子座", "射手座"] },
  { color: "青", hex: "#3b82f6", effect: "冷静・知性", bestFor: ["双子座", "天秤座", "水瓶座"] },
  { color: "緑", hex: "#10b981", effect: "安定・成長", bestFor: ["牡牛座", "乙女座", "山羊座"] },
  { color: "水色", hex: "#06b6d4", effect: "直感・癒し", bestFor: ["蟹座", "蠍座", "魚座"] },
  { color: "オレンジ", hex: "#f97316", effect: "創造・楽観", bestFor: ["獅子座", "射手座"] },
  { color: "ピンク", hex: "#ec4899", effect: "愛情・優しさ", bestFor: ["牡牛座", "蟹座", "天秤座"] },
]

const luckyNumbers = [
  { number: 3, meaning: "創造性と表現力", goodFor: "新しいアイデアを形にする" },
  { number: 7, meaning: "神秘性と直感", goodFor: "重要な決断をする" },
  { number: 9, meaning: "完成と達成", goodFor: "プロジェクトを完了させる" },
  { number: 12, meaning: "調和とバランス", goodFor: "人間関係を改善する" },
  { number: 21, meaning: "成功と幸運", goodFor: "新しいチャレンジをする" },
  { number: 33, meaning: "愛と奉仕", goodFor: "他人を助ける行動をする" },
]

export default function LuckyItemsPage() {
  const today = new Date().toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  })

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
                <p className="text-xs sm:text-sm text-muted-foreground">今日のラッキーアイテム</p>
              </div>
            </Link>
            <Link href="/daily" className="text-sm text-muted-foreground hover:text-primary">
              ← 戻る
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-3 sm:px-4">
        <div className="container mx-auto text-center">
          <h2 className="title-text text-primary mb-3 sm:mb-4">今日のラッキーアイテム</h2>
          <Badge variant="secondary" className="mb-4 text-lg px-4 py-2 rounded-full">
            {today}
          </Badge>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-3xl mx-auto px-2">
            今日の運勢をアップさせるラッキーアイテムをペルナちゃんが選びました。
            <br className="hidden sm:block" />
            身につけたり持ち歩いたりして、幸運を引き寄せましょう。
          </p>
        </div>
      </section>

      {/* Lucky Items by Category */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">カテゴリ別ラッキーアイテム</h3>
            <div className="space-y-8">
              {todayLuckyItems.map((category, categoryIndex) => (
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
                    <CardDescription>今日特におすすめの{category.category}アイテム</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      {category.items.map((item, itemIndex) => (
                        <div
                          key={item.name}
                          className="p-4 bg-muted/30 rounded-lg border border-border hover:shadow-md transition-shadow"
                        >
                          <h4 className="font-semibold text-primary mb-2">{item.name}</h4>
                          <p className="text-sm text-muted-foreground mb-3">{item.effect}</p>
                          <div>
                            <span className="text-xs font-semibold">特におすすめ:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {item.zodiac.map((zodiac) => (
                                <Badge key={zodiac} variant="outline" className="text-xs">
                                  {zodiac}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lucky Colors */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">今日のラッキーカラー</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {luckyColors.map((colorInfo, index) => (
                <Card
                  key={colorInfo.color}
                  className={`hand-drawn-shadow ${index % 2 === 0 ? "wavy-border" : "wavy-border-alt"}`}
                >
                  <CardHeader className="text-center">
                    <div
                      className="w-16 h-16 mx-auto mb-3 rounded-full border-4 border-white shadow-lg"
                      style={{ backgroundColor: colorInfo.hex }}
                    ></div>
                    <CardTitle className="text-lg text-primary">{colorInfo.color}</CardTitle>
                    <CardDescription>{colorInfo.effect}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div>
                      <span className="text-xs font-semibold">特におすすめ:</span>
                      <div className="flex flex-wrap gap-1 mt-1 justify-center">
                        {colorInfo.bestFor.map((zodiac) => (
                          <Badge key={zodiac} variant="secondary" className="text-xs">
                            {zodiac}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lucky Numbers */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">今日のラッキーナンバー</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {luckyNumbers.map((numberInfo, index) => (
                <Card
                  key={numberInfo.number}
                  className={`hand-drawn-shadow ${index % 2 === 0 ? "wavy-border" : "wavy-border-alt"} text-center`}
                >
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-3 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {numberInfo.number}
                    </div>
                    <CardTitle className="text-lg text-primary">{numberInfo.meaning}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{numberInfo.goodFor}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Usage Tips */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">ラッキーアイテムの活用法</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hand-drawn-shadow wavy-border">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-2">
                    <span>✨</span>
                    身につける
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• アクセサリーは肌に直接触れるように</li>
                    <li>• ラッキーカラーを服装に取り入れる</li>
                    <li>• 小物は目につく場所に置く</li>
                    <li>• 一日中持ち歩く</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hand-drawn-shadow wavy-border-alt">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-2">
                    <span>🎯</span>
                    意識する
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• ラッキーナンバーを意識して行動</li>
                    <li>• 重要な決断の時に思い出す</li>
                    <li>• ポジティブな気持ちで使用</li>
                    <li>• 感謝の気持ちを持つ</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hand-drawn-shadow wavy-border">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-2">
                    <span>🔄</span>
                    組み合わせる
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 複数のアイテムを組み合わせる</li>
                    <li>• 色と数字を意識したコーディネート</li>
                    <li>• 星座に合わせて選択</li>
                    <li>• 直感で選ぶことも大切</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hand-drawn-shadow wavy-border-alt">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-2">
                    <span>💫</span>
                    効果を高める
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 朝一番に身につける</li>
                    <li>• 願い事を込めて使用</li>
                    <li>• 清潔に保つ</li>
                    <li>• 他人にも教えてあげる</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">運勢をもっと詳しく</h3>
          <div className="flex flex-col gap-3 sm:gap-4 justify-center max-w-sm mx-auto sm:max-w-none sm:flex-row">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link href="/daily">今日の運勢</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent" asChild>
              <Link href="/daily/tips">運勢アップのコツ</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* サイト情報 */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">占い植物園</h3>
            <p className="text-muted-foreground mb-4">
              ラフレシアのペルナちゃんが主役の占いサイトです。<br />
              12星座の日次・月次運勢を提供し、ユーザーに楽しい占い体験をお届けします。
            </p>
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-2xl">🌺</span>
              </div>
            </div>
          </div>

          {/* ナビゲーション */}
          <div>
            <h4 className="text-lg font-semibold mb-4">サイトマップ</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="/daily" className="text-muted-foreground hover:text-primary transition-colors">
                  今日の運勢
                </Link>
              </li>
              <li>
                <Link href="/monthly" className="text-muted-foreground hover:text-primary transition-colors">
                  今月の運勢
                </Link>
              </li>
            </ul>
          </div>

          {/* お問い合わせ・法的事項 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">お問い合わせ・法的事項</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact/individual" className="text-muted-foreground hover:text-primary transition-colors">
                  個人のお問い合わせ
                </Link>
              </li>
              <li>
                <Link href="/contact/corporate" className="text-muted-foreground hover:text-primary transition-colors">
                  法人のお問い合わせ
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* コピーライト */}
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 占い植物園. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

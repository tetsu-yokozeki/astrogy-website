import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold text-center mb-8">プライバシーポリシー</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground text-center mb-12">
                最終更新日: 2024年12月19日
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">1. 個人情報の収集について</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    占い植物園では、サービス提供のために以下の情報を収集する場合があります：
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2 text-muted-foreground">
                    <li>お問い合わせフォームから送信された情報（お名前、メールアドレス、お問い合わせ内容）</li>
                    <li>アクセスログ情報（IPアドレス、ブラウザ情報、アクセス日時）</li>
                    <li>Cookieを使用した利用状況の分析データ</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">2. 個人情報の利用目的</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    収集した個人情報は、以下の目的で利用いたします：
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2 text-muted-foreground">
                    <li>お問い合わせへの回答・対応</li>
                    <li>サービスの改善・向上</li>
                    <li>利用状況の分析</li>
                    <li>不正利用の防止</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">3. 個人情報の第三者提供</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    当サイトでは、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">4. 個人情報の管理</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    個人情報の漏洩、滅失、毀損の防止その他個人情報の安全管理のため、必要かつ適切な措置を講じます。
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">5. Cookieの使用について</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    当サイトでは、サービス向上のためCookieを使用しています。Cookieの使用を希望されない場合は、ブラウザの設定で無効にすることができます。
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">6. 個人情報の開示・訂正・削除</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    お客様ご本人から個人情報の開示、訂正、削除のご請求があった場合は、速やかに対応いたします。
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">7. プライバシーポリシーの変更</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    本プライバシーポリシーは、必要に応じて変更することがあります。変更後のプライバシーポリシーは、当サイトに掲載した時点で効力を生じるものとします。
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">8. お問い合わせ</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    個人情報の取扱いに関するお問い合わせは、以下の連絡先までご連絡ください。
                  </p>
                  <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                    <p className="text-muted-foreground">
                      <strong>占い植物園</strong><br />
                      お問い合わせ: <a href="/contact/individual" className="text-primary hover:underline">個人のお問い合わせ</a> / <a href="/contact/corporate" className="text-primary hover:underline">法人のお問い合わせ</a>
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

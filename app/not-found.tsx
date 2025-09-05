import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { Flower2, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md wavy-border hand-drawn-shadow">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Flower2 className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-2xl text-primary">ページが見つかりません</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground">
            お探しのページは存在しないか、移動された可能性があります。
          </p>
          <Button asChild className="flex items-center gap-2">
            <Link href="/">
              <Home className="w-4 h-4" />
              ホームに戻る
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

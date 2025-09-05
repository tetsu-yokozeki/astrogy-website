'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { ChevronDown, Menu, Flower2 } from 'lucide-react'

const zodiacSigns = [
  { name: "牡羊座", slug: "aries", svgPath: "/zodiac-1.svg" },
  { name: "牡牛座", slug: "taurus", svgPath: "/zodiac-2.svg" },
  { name: "双子座", slug: "gemini", svgPath: "/zodiac-3.svg" },
  { name: "蟹座", slug: "cancer", svgPath: "/zodiac-4.svg" },
  { name: "獅子座", slug: "leo", svgPath: "/zodiac-5.svg" },
  { name: "乙女座", slug: "virgo", svgPath: "/zodiac-6.svg" },
  { name: "天秤座", slug: "libra", svgPath: "/zodiac-7.png" },
  { name: "蠍座", slug: "scorpio", svgPath: "/zodiac-8.png" },
  { name: "射手座", slug: "sagittarius", svgPath: "/zodiac-9.png" },
  { name: "山羊座", slug: "capricorn", svgPath: "/zodiac-10.png" },
  { name: "水瓶座", slug: "aquarius", svgPath: "/zodiac-11.png" },
  { name: "魚座", slug: "pisces", svgPath: "/zodiac-12.png" },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-3 py-3 sm:px-4 sm:py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center mobile-touch-target">
              <Flower2 className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-primary">占い植物園</h1>
              <p className="text-xs sm:text-sm text-muted-foreground">ペルナちゃんの占い</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1 text-sm lg:text-base text-foreground hover:text-primary transition-colors mobile-touch-target px-3 py-2">
                  今日の運勢 <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <div className="p-2">
                  <div className="text-xs font-medium text-muted-foreground mb-2 px-2">星座を選択してください</div>
                  {zodiacSigns.map((sign) => (
                    <DropdownMenuItem key={sign.slug} asChild>
                      <Link href={`/daily/${sign.slug}`} className="flex items-center gap-3 mobile-touch-target px-2 py-2">
                        <Image
                          src={sign.svgPath}
                          alt={sign.name}
                          width={24}
                          height={24}
                          className="flex-shrink-0"
                        />
                        <span className="text-sm">{sign.name}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1 text-sm lg:text-base text-foreground hover:text-primary transition-colors mobile-touch-target px-3 py-2">
                  今月の運勢 <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <div className="p-2">
                  <div className="text-xs font-medium text-muted-foreground mb-2 px-2">星座を選択してください</div>
                  {zodiacSigns.map((sign) => (
                    <DropdownMenuItem key={sign.slug} asChild>
                      <Link href={`/monthly/${sign.slug}`} className="flex items-center gap-3 mobile-touch-target px-2 py-2">
                        <Image
                          src={sign.svgPath}
                          alt={sign.name}
                          width={24}
                          height={24}
                          className="flex-shrink-0"
                        />
                        <span className="text-sm">{sign.name}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile Menu Button */}
          <DropdownMenu open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="md:hidden mobile-touch-target p-2">
                <Menu className="w-6 h-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
              <div className="p-2">
                <div className="text-xs font-medium text-muted-foreground mb-3 px-2">今日の運勢</div>
                {zodiacSigns.map((sign) => (
                  <DropdownMenuItem key={`daily-${sign.slug}`} asChild>
                    <Link href={`/daily/${sign.slug}`} className="flex items-center gap-3 mobile-touch-target px-2 py-2">
                      <Image
                        src={sign.svgPath}
                        alt={sign.name}
                        width={20}
                        height={20}
                        className="flex-shrink-0"
                      />
                      <span className="text-sm">{sign.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
                
                <div className="border-t border-border my-2"></div>
                
                <div className="text-xs font-medium text-muted-foreground mb-3 px-2">今月の運勢</div>
                {zodiacSigns.map((sign) => (
                  <DropdownMenuItem key={`monthly-${sign.slug}`} asChild>
                    <Link href={`/monthly/${sign.slug}`} className="flex items-center gap-3 mobile-touch-target px-2 py-2">
                      <Image
                        src={sign.svgPath}
                        alt={sign.name}
                        width={20}
                        height={20}
                        className="flex-shrink-0"
                      />
                      <span className="text-sm">{sign.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

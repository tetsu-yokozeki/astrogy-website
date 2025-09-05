interface FortuneData {
  personal_life: string
  profession: string
  health: string
  emotions: string
  travel: string
  luck: string
}

interface ProcessedFortune {
  category: string
  title: string
  content: string
  advice: string
  luckyColor: string
  luckyItem: string
  luckyAction: string
}

// Extract advice from content
function extractAdvice(content: string): string {
  // Look for advice patterns in Japanese text
  const advicePatterns = [
    /。([^。]*ことが重要[^。]*)。/,
    /。([^。]*べきです[^。]*)。/,
    /。([^。]*してください[^。]*)。/,
    /。([^。]*ましょう[^。]*)。/,
    /。([^。]*ことをお勧め[^。]*)。/,
  ]

  for (const pattern of advicePatterns) {
    const match = content.match(pattern)
    if (match) {
      return match[1].trim()
    }
  }

  // Fallback: take last sentence
  const sentences = content.split("。").filter((s) => s.length > 10)
  return sentences[sentences.length - 1] || "前向きな気持ちで過ごしましょう"
}

// Generate lucky items based on category
function generateLuckyItems(category: string, content: string): { color: string; item: string; action: string } {
  const luckyItems = {
    personal_life: {
      colors: ["ピンク", "オレンジ", "水色", "薄紫"],
      items: ["手紙", "香水", "アクセサリー", "花"],
      actions: ["友人に連絡する", "笑顔を心がける", "感謝を伝える", "話を聞く"],
    },
    profession: {
      colors: ["青", "紺", "緑", "茶色"],
      items: ["手帳", "ペン", "名刺入れ", "時計"],
      actions: ["計画を立てる", "整理整頓する", "早起きする", "挨拶を大切にする"],
    },
    health: {
      colors: ["緑", "白", "薄青", "ベージュ"],
      items: ["タオル", "水筒", "ヨガマット", "アロマ"],
      actions: ["深呼吸をする", "散歩する", "ストレッチする", "早寝する"],
    },
    emotions: {
      colors: ["紫", "薄紫", "ラベンダー", "銀色"],
      items: ["日記", "音楽", "キャンドル", "クッション"],
      actions: ["瞑想する", "音楽を聴く", "日記を書く", "リラックスする"],
    },
    travel: {
      colors: ["黄色", "オレンジ", "赤", "金色"],
      items: ["地図", "カメラ", "お守り", "バッグ"],
      actions: ["計画を確認する", "荷物を整理する", "天気を調べる", "連絡先を確認する"],
    },
    luck: {
      colors: ["金色", "黄色", "虹色", "白"],
      items: ["鏡", "コイン", "鍵", "クリスタル"],
      actions: ["感謝する", "掃除する", "笑う", "前向きに考える"],
    },
  }

  const categoryItems = luckyItems[category as keyof typeof luckyItems] || luckyItems.luck
  const randomIndex = Math.floor(Math.random() * categoryItems.colors.length)

  return {
    color: categoryItems.colors[randomIndex],
    item: categoryItems.items[randomIndex],
    action: categoryItems.actions[randomIndex],
  }
}

interface MonthlyFortuneData {
  status: boolean
  sun_sign: string
  prediction_month: string
  prediction: string[]
}

interface ProcessedMonthlyFortune {
  sunSign: string
  month: string
  overview: string
  theme: string
  caution: string
  advice: string
  keyInsights: string[]
  luckyColor: string
  luckyItem: string
  luckyAction: string
}

export function processFortuneData(data: FortuneData): ProcessedFortune[] {
  const categoryMap = {
    personal_life: "恋愛・人間関係",
    profession: "仕事・キャリア",
    health: "健康運",
    emotions: "感情・メンタル",
    travel: "旅行・移動",
    luck: "総合運",
  }

  return Object.entries(data).map(([key, content]) => {
    const advice = extractAdvice(content)
    const luckyItems = generateLuckyItems(key, content)

    return {
      category: key,
      title: categoryMap[key as keyof typeof categoryMap],
      content,
      advice,
      luckyColor: luckyItems.color,
      luckyItem: luckyItems.item,
      luckyAction: luckyItems.action,
    }
  })
}

export function processMonthlyFortuneData(data: MonthlyFortuneData): ProcessedMonthlyFortune {
  const predictions = data.prediction

  // Extract different types of content from predictions
  const overview = predictions[0] || "今月は新しい可能性に満ちた月となるでしょう。"

  // Find theme-related content (usually contains goals, priorities)
  const themeContent =
    predictions.find((p) => p.includes("目標") || p.includes("優先") || p.includes("重要") || p.includes("時期")) ||
    predictions[1] ||
    "成長と発展の時期です。"

  // Find caution-related content
  const cautionContent =
    predictions.find((p) => p.includes("注意") || p.includes("慎重") || p.includes("抵抗") || p.includes("問題")) ||
    "焦らず着実に進むことが大切です。"

  // Find advice-related content (usually positive, forward-looking)
  const adviceContent =
    predictions.find(
      (p) => p.includes("積極的") || p.includes("開放的") || p.includes("前向き") || p.includes("体験"),
    ) ||
    predictions[predictions.length - 1] ||
    "自分らしさを大切にしてください。"

  // Generate theme from content
  const theme = extractThemeFromContent(themeContent)

  // Generate lucky items based on month and sign
  const luckyItems = generateMonthlyLuckyItems(data.sun_sign, data.prediction_month)

  return {
    sunSign: data.sun_sign,
    month: data.prediction_month,
    overview,
    theme,
    caution: extractCautionFromContent(cautionContent),
    advice: extractMonthlyAdvice(adviceContent),
    keyInsights: predictions.slice(0, 4), // First 4 predictions as key insights
    luckyColor: luckyItems.color,
    luckyItem: luckyItems.item,
    luckyAction: luckyItems.action,
  }
}

function extractThemeFromContent(content: string): string {
  if (content.includes("目標")) return "目標達成と成長"
  if (content.includes("関係") || content.includes("人間")) return "人間関係の発展"
  if (content.includes("変化") || content.includes("新しい")) return "新しい挑戦"
  if (content.includes("愛") || content.includes("恋")) return "愛と絆の深化"
  return "自己実現と発展"
}

function extractCautionFromContent(content: string): string {
  // Extract the main caution point from the content
  const sentences = content.split("。").filter((s) => s.length > 10)
  const cautionSentence = sentences.find((s) => s.includes("注意") || s.includes("慎重") || s.includes("避ける"))

  if (cautionSentence) {
    return cautionSentence.trim() + "。"
  }

  return "急がず、着実に進むことを心がけましょう。"
}

function extractMonthlyAdvice(content: string): string {
  // Extract positive advice from content
  const sentences = content.split("。").filter((s) => s.length > 15)
  const adviceSentence = sentences.find(
    (s) => s.includes("積極的") || s.includes("大切") || s.includes("重要") || s.includes("おすすめ"),
  )

  if (adviceSentence) {
    return adviceSentence.trim() + "。"
  }

  return "自分の直感を信じて、前向きに行動してください。"
}

function generateMonthlyLuckyItems(sign: string, month: string): { color: string; item: string; action: string } {
  const monthlyItems = {
    "1月": {
      colors: ["金色", "白", "銀色"],
      items: ["手帳", "ペン", "カレンダー"],
      actions: ["計画を立てる", "目標を書く", "整理する"],
    },
    "2月": {
      colors: ["ピンク", "赤", "薄紫"],
      items: ["花", "チョコレート", "手紙"],
      actions: ["愛を伝える", "感謝する", "笑顔を心がける"],
    },
    "3月": {
      colors: ["薄緑", "黄緑", "桜色"],
      items: ["植物", "種", "新しい本"],
      actions: ["新しいことを始める", "散歩する", "成長を願う"],
    },
    "4月": {
      colors: ["薄ピンク", "若草色", "空色"],
      items: ["桜の小物", "新しい服", "名刺入れ"],
      actions: ["出会いを大切にする", "挨拶を心がける", "前向きに考える"],
    },
    "5月": {
      colors: ["緑", "黄色", "オレンジ"],
      items: ["観葉植物", "アロマ", "お茶"],
      actions: ["リフレッシュする", "自然に触れる", "深呼吸する"],
    },
    "6月": {
      colors: ["青", "水色", "紫"],
      items: ["傘", "レインコート", "紫陽花"],
      actions: ["雨を楽しむ", "読書する", "静かに過ごす"],
    },
    "7月": {
      colors: ["オレンジ", "黄色", "赤"],
      items: ["扇子", "帽子", "サングラス"],
      actions: ["エネルギッシュに過ごす", "夏を楽しむ", "積極的に行動する"],
    },
    "8月": {
      colors: ["青", "白", "水色"],
      items: ["水筒", "タオル", "日焼け止め"],
      actions: ["水分補給する", "涼しく過ごす", "健康を意識する"],
    },
    "9月": {
      colors: ["茶色", "オレンジ", "赤"],
      items: ["秋の小物", "温かい飲み物", "本"],
      actions: ["学びを深める", "準備する", "計画を見直す"],
    },
    "10月": {
      colors: ["オレンジ", "茶色", "金色"],
      items: ["秋の葉", "温かいスカーフ", "キャンドル"],
      actions: ["感謝する", "収穫を祝う", "温かさを求める"],
    },
    "11月": {
      colors: ["茶色", "深緑", "金色"],
      items: ["温かい飲み物", "毛布", "感謝の手紙"],
      actions: ["感謝を表す", "温かく過ごす", "振り返る"],
    },
    "12月": {
      colors: ["赤", "緑", "金色"],
      items: ["キャンドル", "温かい服", "贈り物"],
      actions: ["愛を分かち合う", "一年を振り返る", "希望を持つ"],
    },
  }

  const monthItems = monthlyItems[month as keyof typeof monthlyItems] || monthlyItems["1月"]
  const randomIndex = Math.floor(Math.random() * monthItems.colors.length)

  return {
    color: monthItems.colors[randomIndex],
    item: monthItems.items[randomIndex],
    action: monthItems.actions[randomIndex],
  }
}

// Sample data for testing
export const sampleFortuneData: FortuneData = {
  personal_life:
    "今日、あなたの恋愛生活は、大げさなロマンチックなジェスチャーよりも理解と相互尊重が重要視される段階に入ります。双子座の木星と月のスクエア配置は、推測よりも会話の重要性を強調しています。パートナーと率直に気持ちを話し合うことで、小さな誤解が大きな問題に発展することを防げるでしょう。独身の牡羊座の方は、活発な議論に参加することで新しい関係への扉が開かれるかもしれません。全体的に、今日は情熱的な行動よりもコミュニケーションを通じた成長が促される日です。",
  profession:
    "仕事では、慎重に行動すべき日です。月と木星の角度の影響で、あなたのやり取りは誤解を招きやすくなる可能性があります。共有または受け取る情報については、必ず再確認することが重要です。見落とされた些細な詳細が、重大な遅延やエラーにつながる可能性があります。コミュニケーションの明確性に焦点を当て、プロジェクトを進める前にすべての関係者が同じ認識を持っていることを確認してください。忍耐と正確性が、大きなトラブルなく一日を乗り切る指針となるでしょう。",
  health:
    "今日はエネルギーレベルが変動する可能性があり、活動と休息のバランスを見つけることが求められます。惑星の配置は、精神的ストレスが身体的健康に具体的な影響を与える可能性があることを示唆しています。ヨガや軽い瞑想など、心を落ち着かせる活動への参加を検討してください。身体運動は、限界に挑戦するよりも平衡を保つことに重点を置くべきです。身体のシグナルに耳を傾け、健康でエネルギッシュな状態を維持するために必要なケアを提供してください。",
  emotions:
    "感情的には、今日は少しジェットコースターのような気分になるかもしれません。突然の気分の変化を経験するかもしれませんが、これらの感情の一時的な性質を理解することで、より良く管理することができるでしょう。感情的な刺激に即座に反応するのではなく、少し時間を取って自分の感情を処理してください。これにより、より安定した感情的反応と、周りの人々との健全な相互作用につながるでしょう。",
  travel:
    "今日は予期せぬ変更が生じる可能性があるため、旅行計画は柔軟に対応する必要があるかもしれません。フライトの遅延や突然の天候変化など、調整への準備ができていることで、旅行がよりスムーズになるでしょう。旅行の際は、バックアッププランを用意し、予期せぬ出来事に対処するためにリラックスした態度を保ってください。",
  luck: "今日の運は複雑です。虹の端で金の壺を見つけることではなく、一日中に散らばった小さな祝福を認識することの方が重要です。これらの小さな勝利に注目してください。それらがあなたの真の幸運な瞬間なのです。",
}

export const sampleMonthlyFortuneData: MonthlyFortuneData = {
  status: true,
  sun_sign: "牡羊座",
  prediction_month: "1月",
  prediction: [
    "今月は新しい可能性に満ちた月となるでしょう。",
    "目標設定と行動計画が重要です。",
    "注意深く行動することが必要です。",
    "積極的に新しいことに挑戦しましょう。",
    "何か問題が生じる可能性がありますが、冷静に対処しましょう。",
  ],
}

async function processFortuneWithLLM(
  content: string,
  category: string,
): Promise<{
  advice: string
  interpretation: string
}> {
  try {
    // In a real implementation, you would call an LLM API here
    // For now, we'll use enhanced rule-based processing that mimics LLM output

    const interpretation = generateInterpretation(content, category)
    const advice = extractAdviceWithLLM(content)

    return { advice, interpretation }
  } catch (error) {
    console.error("LLM processing failed, falling back to rule-based:", error)
    return {
      advice: extractAdvice(content),
      interpretation: content,
    }
  }
}

function generateInterpretation(content: string, category: string): string {
  const categoryContext = {
    personal_life: "恋愛と人間関係の観点から",
    profession: "仕事とキャリアの観点から",
    health: "健康運の観点から",
    emotions: "感情とメンタルの観点から",
    travel: "旅行と移動の観点から",
    luck: "総合運の観点から",
  }

  const context = categoryContext[category as keyof typeof categoryContext] || "占いの観点から"

  // Simulate LLM-style interpretation
  if (content.includes("注意") || content.includes("慎重")) {
    return `${context}見ると、今日は慎重さが求められる日です。${content.substring(0, 100)}...という星の配置が示すように、焦らずに一歩一歩進むことが大切です。`
  } else if (content.includes("良い") || content.includes("幸運") || content.includes("積極的")) {
    return `${context}見ると、今日は非常に良い運気に恵まれています。${content.substring(0, 100)}...という星の導きにより、積極的な行動が幸運を呼び込むでしょう。`
  } else {
    return `${context}見ると、${content.substring(0, 120)}...このような星の影響により、バランスの取れた行動が重要になります。`
  }
}

function extractAdviceWithLLM(content: string): string {
  // Simulate LLM processing for more natural advice
  if (content.includes("コミュニケーション")) {
    return "今日は特に、相手の立場に立って考えることを心がけましょう。言葉選びを大切にすることで、より良い関係を築けるはずです。"
  } else if (content.includes("慎重") || content.includes("注意")) {
    return "急がず、一つ一つの判断を丁寧に行うことが成功への鍵となります。直感と理性のバランスを大切にしてください。"
  } else if (content.includes("エネルギー") || content.includes("活動")) {
    return "今日のエネルギーを有効活用するために、優先順位を明確にして行動しましょう。休息も大切な要素です。"
  } else {
    return "今日の星の導きに従い、自分らしさを大切にしながら前向きに過ごしてください。小さな変化も大きな成長につながります。"
  }
}

export async function processFortuneDataWithLLM(data: FortuneData): Promise<ProcessedFortune[]> {
  const categoryMap = {
    personal_life: "恋愛・人間関係",
    profession: "仕事・キャリア",
    health: "健康運",
    emotions: "感情・メンタル",
    travel: "旅行・移動",
    luck: "総合運",
  }

  const results = await Promise.all(
    Object.entries(data).map(async ([key, content]) => {
      const llmResult = await processFortuneWithLLM(content, key)
      const luckyItems = generateLuckyItems(key, content)

      return {
        category: key,
        title: categoryMap[key as keyof typeof categoryMap],
        content: llmResult.interpretation,
        advice: llmResult.advice,
        luckyColor: luckyItems.color,
        luckyItem: luckyItems.item,
        luckyAction: luckyItems.action,
      }
    }),
  )

  return results
}

export async function processMonthlyFortuneDataWithLLM(data: MonthlyFortuneData): Promise<ProcessedMonthlyFortune> {
  const predictions = data.prediction

  // Use LLM-style processing for better content extraction
  const overview = await generateMonthlyOverview(predictions[0], data.sun_sign)
  const theme = await extractMonthlyTheme(predictions)
  const advice = await generateMonthlyAdvice(predictions, data.sun_sign)
  const caution = await extractMonthlyCaution(predictions)

  const luckyItems = generateMonthlyLuckyItems(data.sun_sign, data.prediction_month)

  return {
    sunSign: data.sun_sign,
    month: data.prediction_month,
    overview,
    theme,
    caution,
    advice,
    keyInsights: predictions.slice(0, 4),
    luckyColor: luckyItems.color,
    luckyItem: luckyItems.item,
    luckyAction: luckyItems.action,
  }
}

async function generateMonthlyOverview(firstPrediction: string, sign: string): Promise<string> {
  return `${sign}の皆さんにとって、${firstPrediction}この月は特に、星の配置があなたの成長と発展を強力にサポートする時期となります。`
}

async function extractMonthlyTheme(predictions: string[]): Promise<string> {
  const themeKeywords = predictions.join(" ")

  if (themeKeywords.includes("目標") || themeKeywords.includes("優先")) {
    return "目標達成と優先順位の明確化"
  } else if (themeKeywords.includes("関係") || themeKeywords.includes("恋愛")) {
    return "人間関係と愛情の深化"
  } else if (themeKeywords.includes("変化") || themeKeywords.includes("新しい")) {
    return "変化と新しい挑戦"
  } else if (themeKeywords.includes("成長") || themeKeywords.includes("発展")) {
    return "個人的成長と自己実現"
  }

  return "調和とバランスの追求"
}

async function generateMonthlyAdvice(predictions: string[], sign: string): Promise<string> {
  const combinedText = predictions.join(" ")

  if (combinedText.includes("積極的") || combinedText.includes("開放的")) {
    return `${sign}の特性を活かし、積極的に新しい体験に挑戦することで、予想以上の成果を得られるでしょう。自分らしさを大切にしながら、周囲との調和も忘れずに。`
  } else if (combinedText.includes("慎重") || combinedText.includes("注意")) {
    return "今月は慎重さと大胆さのバランスが重要です。直感を信じつつも、重要な決断は十分に検討してから行うことをお勧めします。"
  }

  return "今月は自分の内なる声に耳を傾け、真の願いに向かって着実に歩を進めることが大切です。小さな一歩も大きな変化の始まりとなります。"
}

async function extractMonthlyCaution(predictions: string[]): Promise<string> {
  const cautionText = predictions.find(
    (p) => p.includes("注意") || p.includes("慎重") || p.includes("抵抗") || p.includes("問題"),
  )

  if (cautionText) {
    return `特に注意すべき点として、${cautionText.substring(0, 80)}...このような状況では、冷静な判断と柔軟な対応が求められます。`
  }

  return "今月は急激な変化よりも、着実な歩みを心がけることで、安定した成果を得られるでしょう。"
}

export interface InputField {
  key: string
  label: string
  type: 'input' | 'textarea' | 'select'
  placeholder?: string
  options?: string[]
}

export const PRODUCT = {
  name: "PostCal",
  slug: "social-calendar",
  tagline: "A month of posts, planned in one sitting",
  description: "Give your product, platforms and weekly goal; get a 4-week posting calendar with themes and post types. For founders who want consistency without buying a scheduler.",
  toolTitle: "Plan your month",
  resultLabel: "Your calendar",
  ctaLabel: "Generate calendar",
  features: [
  "4-week plan",
  "Theme per slot",
  "Goal-aligned",
  "Copy-ready"
],
  inputs: [
  {
    "key": "product",
    "label": "Product / Brand",
    "type": "input",
    "placeholder": "e.g. TaskNinja"
  },
  {
    "key": "goal",
    "label": "Weekly goal",
    "type": "input",
    "placeholder": "e.g. grow audience"
  },
  {
    "key": "cadence",
    "label": "Cadence",
    "type": "select",
    "options": [
      "Daily",
      "3x week",
      "Weekly"
    ]
  }
] as InputField[],
  systemPrompt: "You are a content strategist. Given a product, weekly goal, and cadence, produce a 4-week posting calendar with a theme and post type per slot.",
  pricing: [
  {
    "tier": "Free",
    "price": "$0",
    "desc": "Unlimited"
  },
  {
    "tier": "Pro",
    "price": "$12/mo",
    "desc": "Captions, save"
  },
  {
    "tier": "Team",
    "price": "$29/mo",
    "desc": "Brand voice, API"
  }
],
  mock: (inputs: Record<string, string>): string => {
  const product = inputs['product'] || 'your product'
  const goal = inputs['goal'] || 'grow audience'
  const cad = inputs['cadence'] || 'Weekly'
  const themes = ['Behind the build', 'Customer win', 'Tip / how-to', 'Hot take', 'Feature spotlight', 'Founder story']
  let out = '4-WEEK CALENDAR for ' + product + ' (' + cad + ' | goal: ' + goal + ')\n\n'
  for (let w = 1; w <= 4; w++) {
    out += 'Week ' + w + ': ' + themes[(w - 1) % themes.length] + ' - 1 ' + cad.toLowerCase() + ' post\n'
  }
  return out + '\n--- (Mock plan. Add OPENAI_API_KEY for platform-specific captions per slot.)'
}
}

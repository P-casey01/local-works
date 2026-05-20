# ServiceMatch — Component Library

Every reusable UI component documented with purpose, structure, variants, and tokens used. Build from these — no one-off components that duplicate behaviour.

---

## Atoms

### Button
**Variants:** `primary` | `secondary` | `outline` | `ghost` | `danger`

| Variant | Background | Text | Border | Shadow |
|---|---|---|---|---|
| `primary` | `--color-primary` | `--color-text-inverse` | none | `--shadow-primary` |
| `secondary` | `--color-secondary` | `--color-text-inverse` | none | none |
| `outline` | transparent | `--color-primary` | 1.5px `--color-primary` | none |
| `ghost` | transparent | `--color-primary` | none | none |
| `danger` | `--color-danger` | `--color-text-inverse` | none | none |

**Sizing:**
| Size | Padding Y | Padding X | Font | Radius |
|---|---|---|---|---|
| `sm` | 8px | 12px | `--font-caption-bold` | `--radius-button` |
| `md` | 12px | 20px | `--font-body-bold` | `--radius-button` |
| `lg` | 14px | 24px | `--font-body-bold` | `--radius-button` |

**States:** hover (opacity 0.9), active (`--scale-press`), focus (2px ring `--color-primary-light`), disabled (opacity 0.5, no pointer)

**With icon:** icon left of text, 8px gap. Icon-only: square aspect ratio.

---

### Badge / Pill
**Variants:** `default` | `success` | `warning` | `info` | `danger`

| Variant | Background | Text | Border |
|---|---|---|---|
| `default` | `--color-surface-variant` | `--color-text-tertiary` | none |
| `success` | `--color-success-light` | `--color-success` | none |
| `warning` | `--color-warning-light` | `--color-warning` | none |
| `info` | `--color-info-light` | `--color-primary` | none |
| `danger` | `--color-danger-light` | `--color-danger` | none |

**Sizing:** `--font-label` or `--font-overline`, padding 2px 12px, radius `--radius-pill`.

---

### TradeBadge
Extends Badge with trade-specific colour from `--color-trade-*`.

**Structure:** coloured dot (8px circle) + trade name text

---

### Chip (Selectable)
Used in chat options, trade multi-select, skill tags.

**States:** `unselected` (border `--color-border`, bg white, text `--color-text-secondary`) → `selected` (bg trade colour, border trade colour, text `--color-text-inverse`)

**Sizing:** padding 6px 12px, `--font-caption-bold`, radius `--radius-pill`, border 1.5px.

---

### StatCard
Compact number + label block.

**Structure:**
```
┌──────────────┐
│   2,400+     │  ← --font-h3, --color-primary
│ Verified Pros │  ← --font-overline, --color-text-muted
└──────────────┘
```
Background `--color-surface`, radius `--radius-md`, shadow `--shadow-sm`, padding 12px, centred.

---

### Rating
Star display: `⭐ {value}` + review count in `--font-caption`, `--color-text-tertiary`.

---

### AvailabilityTag
| Availability | Text | Colour |
|---|---|---|
| `immediate` | ⚡ Available Now | `--color-success` |
| `this-week` | 📅 This Week | `--color-warning` |
| `next-week` | 📋 Next Week | `--color-info` |
| `flexible` | 🔄 Flexible | `--color-text-tertiary` |

Font: `--font-caption-bold`.

---

### Input
**Variants:** `text` | `email` | `tel` | `textarea`

| Property | Value |
|---|---|
| Border | 1px `--color-border` |
| Border focus | 1.5px `--color-primary` |
| Background | `--color-surface` |
| Text | `--font-body` |
| Label | `--font-label`, `--color-text-tertiary` |
| Error | `--font-caption`, `--color-danger` (below input) |
| Radius | `--radius-input` |
| Padding | 10px 12px |

---

## Molecules

### ProviderCard
**Used on:** Results page, trade landing pages

**Structure:**
```
┌────────────────────────────────────────────┐
│ ┌──┐ ┌─────┐                    £45  /hr  │  ← border-left: 4px trade colour
│ │#1│ │Icon │ Name ✓ Verified    £45  /hr  │
│ └──┘ └─────┘ Plumber • Gas Engineer       │
│                                            │
│ ⚡ Available Now    📍 Belfast • 25mi      │
│                                            │
│ 20+ years experience in domestic and       │  ← 2 line clamp
│ commercial plumbing...                    │
│                                            │
│ [Leak repair] [Bathroom fitting] [Boiler]  │  ← max 4 skill pills
│                                            │
│ ─────────────────────────────────────────  │
│ ⭐ 4.8    ✅ 890    £45/hr                 │
│ 124 rev   jobs done   rate                  │
│                                            │
│ [    View Profile & Contact →    ]         │
└────────────────────────────────────────────┘
```

**Tokens:** bg `--color-surface`, radius `--radius-lg`, shadow `--shadow-md`, padding `--space-lg`, border-left 4px trade colour.

**Click:** navigates to provider detail page.

---

### TradeCard
**Used on:** Homepage trades grid, trade listing

**Structure:**
```
┌──────────┐
│  ┌────┐  │  ← 48×48 circle, trade colour at 10% opacity bg
│  │Icon│  │  ← icon in trade colour
│  └────┘  │
│ Plumber  │  ← --font-caption, weight 600, --color-text-secondary
└──────────┘
```
Background `--color-surface`, radius `--radius-md`, shadow `--shadow-sm`, padding 12px 4px, centred.

**Click:** opens chat with trade pre-selected.

---

### StepCard
**Used on:** "How It Works" section

**Structure:**
```
┌──────────────┐
│  ┌────────┐  │  ← 52×52 circle, primary at 8% opacity bg
│  │  Icon  │  │  ← primary colour
│  └────────┘  │
│   1. Chat    │  ← --font-caption-bold
│  Tell our... │  ← --font-caption, --color-text-tertiary
└──────────────┘
```
Background `--color-surface`, radius `--radius-lg`, shadow `--shadow-sm`, flex 1 in row.

---

### SummaryBar
**Used on:** Chat screen (shows selections made so far)

**Structure:** horizontal bar, bg `--color-surface`, border-top 1px `--color-border`, padding 8px 12px.

Content: "Your choices:" label + chips for each completed step. Each chip: green bg (`--color-success-light`), pill, step label + value.

---

### ChatBubble
**Variants:** `bot` | `user`

| | Bot | User |
|---|---|---|
| Background | `--color-surface` | `--color-primary` |
| Text | `--color-text-primary` | `--color-text-inverse` |
| Border radius | `--radius-lg` (bottom-left `--radius-sm`) | `--radius-lg` (bottom-right `--radius-sm`) |
| Shadow | `--shadow-sm` | none |
| Alignment | left | right |
| Avatar | 32px robot icon, primary bg | none |
| Max width | 75% | 75% |

---

### TypingIndicator
Three dots (8px circles, `--color-primary`) bouncing vertically in a bot-style bubble. Staggered 150ms each, 300ms cycle.

---

## Organisms

### HeroSection
**Used on:** Homepage

**Structure:**
```
┌────────────────────────────────────────────┐
│              (subtle glow circle)           │  ← position absolute, top-right
│                                            │
│          Find the Right Pro                │  ← --font-h1, white
│                                            │
│   Tell our chatbot what you need — we'll   │  ← --font-body, #BFDBFE
│   match you with vetted local professionals │
│                                            │
│     [💬  Start Chat → Find a Pro]         │  ← white bg, primary text, shadow-primary
│                                            │
└────────────────────────────────────────────┘
```
Background `--color-primary`, radius `--radius-xl`, padding `--space-xxl`.

**Responsive:** Full-width on mobile, max-width 720px centred on desktop.

---

### TrustStatsBar
**Used on:** Homepage (below hero)

3 stat cards in a row (flex, gap `--space-sm`):
- "2,400+" Verified Pros
- "98%" Satisfaction
- "<2hr" Avg Response

Each card: `StatCard` atom.

---

### ProviderCTA
**Used on:** Homepage (tradesperson recruitment)

Background `#EFF6FF`, border 1px `#DBEAFE`, radius `--radius-xl`, padding `--space-xxl`, centred.

Content: hard-hat icon, "Are you a tradesperson?" (h3), description (body), outline button "Create Your Profile".

---

### Footer
Centred text: "ServiceMatch • Connecting NI with trusted local pros", `--font-caption`, `--color-text-muted`.

---

### ChatInterface (React Island)
Full chatbot component. Must be hydrated client-side only.

**Contains:** message list (FlatList/scrollable div), ChatBubble molecules, TypingIndicator, SummaryBar, option chips area, text input + send button.

**Flow state machine:** greeting → location → urgency → jobSize → description → budget → confirm → results redirect.

---

### ProviderDetailPage
Full provider profile. Sections: header, stats row, availability, skills, about, contact buttons, disclaimer.

---

### SignupForm (React Island)
Multi-section form matching CreateProfileScreen. Hydrated client-side for validation + submission.

**Sections:** Personal Info, Your Trades, Skills, Location & Rates, Availability, Bio.

**Validation rules:**
- Name: required
- Trades: at least 1 selected
- Location: required
- Hourly rate: required
- Phone or email: at least one required
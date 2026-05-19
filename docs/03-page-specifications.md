# ServiceMatch — Page Specifications

Exact structure, sections, and content for every page. Build pages from these specs — no ambiguity, no guessing.

---

## `/` — Homepage

### Meta
- **Title:** ServiceMatch — Find Trusted Local Pros in Northern Ireland
- **Description:** Connect with vetted tradespeople in NI. Chat with our bot, get matched with verified plumbers, electricians, carpenters and more.
- **OG Image:** hero section screenshot or branded graphic

### Sections (top to bottom)

#### 1. HeroSection
- **Headline:** Find the Right Pro
- **Subtitle:** Tell our chatbot what you need — we'll match you with vetted local professionals
- **CTA button:** "Start Chat → Find a Pro" → links to `/chat`
- **Background:** `--color-primary`
- **Decoration:** subtle 160px white glow circle, top-right, 8% opacity

#### 2. TrustStatsBar
Three `StatCard` atoms in a row:
| Value | Label |
|---|---|
| 2,400+ | Verified Pros |
| 98% | Satisfaction |
| <2hr | Avg Response |

#### 3. How It Works
**Section header:** "How It Works" (h3, left-aligned)

Three `StepCard` atoms in a row:
| # | Icon | Title | Description |
|---|---|---|---|
| 1 | `chat-processing-outline` | 1. Chat | Tell our bot what you need — trade, location, urgency |
| 2 | `account-search-outline` | 2. Match | We find the best local pros for your specific job |
| 3 | `phone-in-talk-outline` | 3. Connect | Contact your matched pro directly and get it sorted |

#### 4. Popular Trades
**Section header:** "Popular Trades" (h3, left) + "See all →" link (right, `--font-caption-bold`, primary)

12 `TradeCard` atoms in a 3-column grid (2-column on mobile):
| Trade | Icon | Colour |
|---|---|---|
| Plumber | `water` | `--color-trade-plumber` |
| Electrician | `flash` | `--color-trade-electrician` |
| Carpenter | `hammer` | `--color-trade-carpenter` |
| Gas Engineer | `fire` | `--color-trade-gas-engineer` |
| Painter & Decorator | `format-paint` | `--color-trade-painter` |
| Locksmith | `key-variant` | `--color-trade-locksmith` |
| HVAC Technician | `fan` | `--color-trade-hvac` |
| Roofer | `home` | `--color-trade-roofer` |
| Tiler | `grid` | `--color-trade-tiler` |
| Landscaper | `tree` | `--color-trade-landscaper` |
| Cleaner | `broom` | `--color-trade-cleaner` |
| Handyman | `wrench` | `--color-trade-handyman` |

Each card → `/chat?trade={slug}`

#### 5. ProviderCTA
- **Icon:** `account-hard-hat`, `--color-secondary` bg
- **Title:** Are you a tradesperson?
- **Description:** Create your free profile and get matched with customers in your area
- **Button:** "Create Your Profile" (outline, primary) → `/signup`

#### 6. Footer
- **Text:** ServiceMatch • Connecting NI with trusted local pros
- **Alignment:** centred
- **Style:** `--font-caption`, `--color-text-muted`

### Page Layout
- Container max-width: 1200px, centred, padding `--space-lg` (mobile), `--space-xxl` (desktop)
- Section gap: `--space-section`
- Staggered entrance animations on: hero (fade + slide up 30px, 500ms), stats (200ms delay), trade cards (60ms stagger), CTA (400ms delay)

---

## `/chat` — Chat Interface

### Meta
- **Title:** Find a Pro — ServiceMatch
- **Description:** Chat with our bot to find the right tradesperson for your job in Northern Ireland.
- **Hydration:** React island (full client-side interactivity required)

### Layout
- Full viewport height chat interface
- Header: same as app header, title "Find a Pro"
- Background: `--color-surface-variant`

### Chat Flow (state machine)

| Step | Bot Message | Input Type | Options |
|---|---|---|---|
| `greeting` | "👋 Hi! I'm ServiceMatch bot. I'll help you find the right professional for your job. Let's get started — what trade do you need?" | Chip select | All 15 trades |
| `location` | "{emoji} You selected {trade}. Great choice! Where are you located? (Town or postcode)" | Text input | — |
| `urgency` | "📍 Got it, {location}. How urgent is this job?" | Chip select | Immediate / Emergency, This Week, Next Week, Flexible |
| `jobSize` | "How urgent is this job? … Roughly how big is the job?" | Chip select | Small (under 2 hours), Medium (2-4 hours), Large (full day+), Not sure yet |
| `description` | "Briefly describe what you need done (e.g., 'leaking pipe under kitchen sink')" | Text input | — |
| `budget` | "📝 Noted: "{description}". What's your budget range?" | Chip select | Under £100, £100-£300, £300-£500, £500+, Not sure |
| `confirm` | "Perfect! I've found some matches for you. Let me show you the best professionals for your job. 🎉" | Chip select | Show me my matches! |

### Matching Algorithm (on confirm)
1. Filter providers by trade (primary or secondary)
2. Filter by urgency availability:
   - "Immediate / Emergency" → only `immediate`
   - "This Week" → `immediate` or `this-week`
   - "Next Week" → `immediate`, `this-week`, or `next-week`
   - "Flexible" → all
3. Sort by rating (desc), then reviewCount (desc)
4. Redirect to `/results?trade={}&location={}&urgency={}`

### Trade Emoji Map
| Trade | Emoji |
|---|---|
| Plumber | 🔧 |
| Electrician | ⚡ |
| Carpenter | 🪚 |
| Painter & Decorator | 🎨 |
| Gas Engineer | 🔥 |
| HVAC Technician | ❄️ |
| Locksmith | 🔑 |
| Roofer | 🏠 |
| Tiler | 🔲 |
| Plasterer | 🧱 |
| Bricklayer | 🏗️ |
| Landscaper | 🌿 |
| Cleaner | ✨ |
| Handyman | 🛠️ |
| Appliance Repair | 🔌 |

### Summary Bar
Shows below message list when at least 1 choice made (hidden on `confirm` step).
Chips: green bg, pill, "Label: Value" format.

### Pre-selected Trade Support
URL param `?trade=Plumber` → skip greeting step, start at location with trade pre-selected.

### Typing Delay
600ms between user message and bot response. Show TypingIndicator during delay.

---

## `/results` — Provider Results

### Meta
- **Title:** {N} Pros Found — ServiceMatch
- **Description:** Browse matched tradespeople for your job in Northern Ireland.

### Summary Card (top)
Background `--color-info-light`, border 1px `#DBEAFE`, radius `--radius-lg`, padding `--space-lg`.
- Title: "{N} Pros Found" (h3)
- Detail: "{trade} • {location} • {urgency}" (body-bold, primary)
- Description: quoted user description if provided (caption, tertiary, italic)

### Provider List
`ProviderCard` organisms, stacked vertically, gap `--space-sm`.

### Empty State
- 🔍 emoji (48px)
- "No matches found" (h2, tertiary)
- "Try adjusting your requirements or searching a different trade" (body, muted)
- "Try a different search →" link (body-bold, primary) → `/chat`

---

## `/provider/:id` — Provider Detail

### Meta
- **Title:** {name} — {trades} in {location} — ServiceMatch
- **Description:** {bio}
- **Structured Data:** `LocalBusiness` schema (name, trade, addressLocality, telephone, email, aggregateRating)

### Sections

#### Header
- 80px avatar circle (trade colour at 10% bg, trade icon 40px)
- Name (h1)
- Verified badge (if verified): "✓ Verified Professional", green pill
- Trades (body-bold, primary)

#### Quick Stats (3 columns)
| Stat | Style |
|---|---|
| ⭐ {rating} | h4, primary |
| {reviewCount} reviews | overline, muted |
| £{rate}/hr | h4, primary |
| Hourly rate | overline, muted |
| {completedJobs} | h4 |
| Jobs done | overline, muted |

#### Availability Section
Card: bg `--color-surface`, radius `--radius-lg`, shadow `--shadow-sm`.
- Availability tag (colour-coded)
- Location: "📍 {location} • {radius} mile radius"

#### Skills Section
Same card style. Skill pills: bg `--color-info-light`, text `--color-primary`, weight 600.

#### About Section
Same card style. Bio text (body, secondary, line-height 22px).

#### Contact Buttons (2 columns)
| Button | Background | Text | Action |
|---|---|---|---|
| 📞 Call Now | `--color-primary` | `--color-text-inverse` | `tel:{phone}` |
| ✉️ Send Email | white, border 1.5px primary | `--color-primary` | `mailto:{email}` |

#### Disclaimer
"Always verify credentials and qualifications before hiring. ServiceMatch connects you — you choose."
Caption, muted, centred.

---

## `/trades/[trade]` — Trade Landing Pages (×15)

### Meta
- **Title:** Find a {Trade} in Northern Ireland — ServiceMatch
- **Description:** Connect with verified {trade}s across NI. Chat with our bot for instant matching.
- **OG Image:** trade-colour branded graphic

### Sections

#### Hero
- Background: trade colour gradient (trade colour at 15% → white)
- Left-aligned 48px trade icon in trade colour
- H1: "Find a {Trade} in Northern Ireland"
- Body: brief description of what ServiceMatch offers for this trade
- CTA: "Find a {Trade} Now →" primary button → `/chat?trade={slug}`

#### Trust Stats Bar
Same 3 stats as homepage.

#### How It Works
Same 3 steps as homepage.

#### Sample Providers
Filter `SAMPLE_PROVIDERS` by this trade, show as `ProviderCard` list (max 6).
If no sample providers, show: "Join as the first {trade} on ServiceMatch →" CTA to `/signup`.

#### Tradesperson CTA
"Are you a {trade}?" variant of ProviderCTA. Links to `/signup`.

#### Footer
Same as homepage.

### Trade Slugs
| Trade | Slug |
|---|---|
| Plumber | `plumber` |
| Electrician | `electrician` |
| Carpenter | `carpenter` |
| Painter & Decorator | `painter-and-decorator` |
| Gas Engineer | `gas-engineer` |
| HVAC Technician | `hvac-technician` |
| Locksmith | `locksmith` |
| Roofer | `roofer` |
| Tiler | `tiler` |
| Plasterer | `plasterer` |
| Bricklayer | `bricklayer` |
| Landscaper | `landscaper` |
| Cleaner | `cleaner` |
| Handyman | `handyman` |
| Appliance Repair | `appliance-repair` |

---

## `/signup` — Tradesperson Registration

### Meta
- **Title:** Create Your Profile — ServiceMatch
- **Description:** Join ServiceMatch and get matched with customers looking for your trade in Northern Ireland.
- **Hydration:** React island (form validation + submission)

### Intro Card
- Icon: 👷
- Text: "Create your professional profile so customers can find you"
- Background: `--color-info-light`, border `#DBEAFE`

### Form Sections

#### Personal Info
| Field | Type | Required | Validation |
|---|---|---|---|
| Full Name | text | ✅ | non-empty |
| Phone | tel | conditional | — |
| Email | email | conditional | valid email format |
| *At least one of phone/email required* | | | |

#### Your Trades
Multi-select chip grid (all 15 trades). Required: at least 1.

Skills: text input, comma-separated, placeholder "e.g., Leak repair, Boiler service, Rewiring"

#### Location & Rates
| Field | Type | Required |
|---|---|---|
| Location / Town | text | ✅ |
| Service radius (miles) | number | default: 20 |
| Hourly Rate (£) | number | ✅ |

#### Availability
Radio group: Immediate / Emergency, This Week, Next Week, Flexible. Required.

#### Bio
Textarea, placeholder "Tell customers about your experience and expertise..."

### Submit
Button: "Create Profile", primary, full-width.
On success: confirmation alert → redirect to `/profile`.

---

## `/profile` — My Profile

### Meta
- **Title:** My Profile — ServiceMatch
- **Hydration:** React island (edit actions)

### Empty State (no profile)
- 80px icon circle (`account-plus`, primary)
- "No Profile Yet" (h2)
- "Create your professional profile to start getting matched with customers" (body, tertiary)
- "Create Profile" primary button → `/signup`

### Profile View
#### Header
- 80px avatar circle (primary-light bg, account icon)
- Name (h1)
- Trades (body-bold, primary)
- Verification badge: ✓ Verified (green) or ⏳ Verification Pending (amber)

#### Stats Row (2 columns)
| Stat | Style |
|---|---|
| £{rate}/hr | h4, primary |
| Availability | h4, availability-coloured |

#### Details Sections (cards)
- 📍 Location: "{location} • {radius} mile radius"
- Skills: pill list
- About: bio text
- Contact: phone + email

#### Edit Button
Outline button: "✏️ Edit Profile" → `/signup?edit={profileId}`
# ServiceMatch — Astro Architecture

Tech stack, project structure, rendering strategy, and deployment plan.

---

## Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | Astro 5.x | Content-first, zero JS default, perfect Lighthouse scores |
| UI Islands | React 19 | Chatbot, signup form, profile — interactive components |
| Styling | Tailwind CSS 4.x | Maps directly to design tokens, purged automatically |
| Font | Inter (`@fontsource/inter`) | Clean, professional, matches app typography |
| Icons | Material Symbols (web font) or SVGs | Matches app's Material Community Icons set |
| Content | Astro Content Collections (trades) | Markdown + frontmatter for 15 trade landing pages |
| Data | Static JSON (v1) → Supabase (v2) | Start with sample data, migrate to DB later |
| Deployment | Cloudflare Pages | Edge delivery, Astro adapter available |
| Analytics | Plausible | Privacy-first, lightweight |
| Sitemap | `@astrojs/sitemap` | Auto-generates from all routes |

---

## Project Structure

```
servicematch-site/
├── astro.config.mjs
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── og/
│       ├── home.png
│       └── trades/
│           ├── plumber.png
│           ├── electrician.png
│           └── ... (15 trade OG images)
├── src/
│   ├── content/
│   │   └── trades/
│   │       ├── plumber.md
│   │       ├── electrician.md
│   │       └── ... (15 trade markdown files)
│   ├── data/
│   │   └── providers.json          ← sample provider data (v1)
│   ├── layouts/
│   │   └── BaseLayout.astro         ← <head>, nav, footer, global styles
│   ├── components/
│   │   ├── atoms/
│   │   │   ├── Button.astro
│   │   │   ├── Badge.astro
│   │   │   ├── TradeBadge.astro
│   │   │   ├── Chip.astro
│   │   │   ├── StatCard.astro
│   │   │   ├── Rating.astro
│   │   │   ├── AvailabilityTag.astro
│   │   │   └── Input.astro
│   │   ├── molecules/
│   │   │   ├── ProviderCard.astro
│   │   │   ├── TradeCard.astro
│   │   │   ├── StepCard.astro
│   │   │   ├── SummaryBar.astro
│   │   │   └── ChatBubble.astro
│   │   ├── organisms/
│   │   │   ├── HeroSection.astro
│   │   │   ├── TrustStatsBar.astro
│   │   │   ├── HowItWorks.astro
│   │   │   ├── TradesGrid.astro
│   │   │   ├── ProviderCTA.astro
│   │   │   └── Footer.astro
│   │   └── islands/                 ← React (hydrated client-side)
│   │       ├── ChatBot.tsx
│   │       ├── SignupForm.tsx
│   │       └── ProfileView.tsx
│   ├── pages/
│   │   ├── index.astro              ← Homepage
│   │   ├── chat.astro               ← Chat page (wraps React island)
│   │   ├── results.astro            ← Results page
│   │   ├── provider/
│   │   │   └── [id].astro           ← Provider detail
│   │   ├── trades/
│   │   │   └── [slug].astro         ← Trade landing pages (15)
│   │   ├── signup.astro             ← Tradesperson signup (wraps React island)
│   │   └── profile.astro            ← My profile (wraps React island)
│   ├── styles/
│   │   └── global.css               ← Tailwind directives + custom properties
│   └── lib/
│       ├── trades.ts                 ← TRADES enum, slugs, colours, icons, descriptions
│       ├── matching.ts               ← filterProviders(), sortProviders()
│       └── types.ts                  ← ServiceProvider, JobRequirements, etc.
```

---

## Rendering Strategy

| Page | Rendering | JS | Reason |
|---|---|---|---|
| `/` (Homepage) | Static (SSG) | Zero | Pure HTML, instant load, SEO |
| `/trades/[slug]` (15 pages) | Static (SSG) | Zero | SEO-critical, no interactivity |
| `/provider/[id]` | Static (SSG) | Zero | SEO for provider names, structured data |
| `/chat` | Static shell + React island | Client:chatbot | Interactive chatbot requires JS |
| `/signup` | Static shell + React island | Client:signup | Form validation + submission |
| `/profile` | Static shell + React island | Client:profile | Dynamic user data |
| `/results` | Client-side | Client:matching | Dynamic based on chat selections |

### Hydration Directives
- **Astro components:** zero JS (default)
- **ChatBot.tsx:** `client:load` (needed immediately on page visit)
- **SignupForm.tsx:** `client:load` (needed immediately)
- **ProfileView.tsx:** `client:load` (needed immediately)

---

## Route Generation

### Static Routes (build time)
- `/` — single page
- `/trades/*` — generated from content collection (15 pages)
- `/provider/*` — generated from `providers.json` (12 pages for v1)
- `/chat` — single page with island
- `/signup` — single page with island
- `/profile` — single page with island

### Dynamic Routes (runtime, client-side only)
- `/results` — populated client-side after chat completion

---

## Tailwind Configuration

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          light: '#3B82F6',
          dark: '#1D4ED8',
        },
        secondary: {
          DEFAULT: '#10B981',
          light: '#34D399',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          variant: '#F1F5F9',
        },
        background: '#F8FAFC',
        trade: {
          plumber: '#0EA5E9',
          electrician: '#F59E0B',
          carpenter: '#8B5CF6',
          painter: '#10B981',
          'gas-engineer': '#EF4444',
          hvac: '#6366F1',
          locksmith: '#F97316',
          roofer: '#78716C',
          tiler: '#14B8A6',
          plasterer: '#A78BFA',
          bricklayer: '#D97706',
          landscaper: '#22C55E',
          cleaner: '#06B6D4',
          handyman: '#8B5CF6',
          appliance: '#EC4899',
        },
        semantic: {
          success: '#10B981',
          'success-light': '#ECFDF5',
          warning: '#F59E0B',
          'warning-light': '#FEF3C7',
          danger: '#EF4444',
          'danger-light': '#FEF2F2',
          info: '#0EA5E9',
          'info-light': '#F0F9FF',
        },
        text: {
          primary: '#0F172A',
          secondary: '#475569',
          tertiary: '#64748B',
          muted: '#94A3B8',
          inverse: '#FFFFFF',
        },
        border: {
          DEFAULT: '#E2E8F0',
          light: '#F1F5F9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero: ['2rem', { lineHeight: '2.375rem', fontWeight: '800', letterSpacing: '-0.5px' }],
        h1: ['1.75rem', { lineHeight: '2.125rem', fontWeight: '700', letterSpacing: '-0.3px' }],
        h2: ['1.375rem', { lineHeight: '1.75rem', fontWeight: '700' }],
        h3: ['1.125rem', { lineHeight: '1.5rem', fontWeight: '600' }],
        h4: ['1rem', { lineHeight: '1.375rem', fontWeight: '600' }],
        body: ['0.9375rem', { lineHeight: '1.375rem', fontWeight: '400' }],
        'body-bold': ['0.9375rem', { lineHeight: '1.375rem', fontWeight: '600' }],
        caption: ['0.8125rem', { lineHeight: '1.125rem', fontWeight: '400' }],
        'caption-bold': ['0.8125rem', { lineHeight: '1.125rem', fontWeight: '600' }],
        label: ['0.75rem', { lineHeight: '1rem', fontWeight: '600', letterSpacing: '0.5px' }],
        overline: ['0.6875rem', { lineHeight: '0.875rem', fontWeight: '700', letterSpacing: '1.5px' }],
        price: ['1.5rem', { lineHeight: '1.75rem', fontWeight: '800' }],
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '32px',
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
        pill: '999px',
        button: '12px',
        input: '8px',
      },
      boxShadow: {
        sm: '0 1px 3px rgba(15,23,42,0.05)',
        md: '0 2px 8px rgba(15,23,42,0.08)',
        lg: '0 4px 16px rgba(15,23,42,0.12)',
        xl: '0 8px 24px rgba(15,23,42,0.16)',
        primary: '0 4px 12px rgba(37,99,235,0.3)',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## Astro Config

```javascript
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://servicematch.co.uk',
  output: 'static',
  adapter: cloudflare(),
  integrations: [
    react(),
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/results') && !page.includes('/profile'),
    }),
  ],
  content: {
    collections: {
      trades: /* defined in src/content/config.ts */,
    },
  },
});
```

---

## Dependencies

```json
{
  "dependencies": {
    "astro": "^5.x",
    "@astrojs/react": "^4.x",
    "@astrojs/tailwind": "^6.x",
    "@astrojs/sitemap": "^3.x",
    "@astrojs/cloudflare": "^12.x",
    "react": "^19.x",
    "react-dom": "^19.x",
    "tailwindcss": "^4.x",
    "@fontsource/inter": "^5.x"
  }
}
```

---

## Build & Deploy

### Local Development
```bash
npm run dev          # Astro dev server (localhost:4321)
npm run build        # Static build to dist/
npm run preview      # Preview built site
```

### Deployment (Cloudflare Pages)
- **Build command:** `npm run build`
- **Output directory:** `dist/`
- **Node version:** 22
- **Environment:** production

---

## Phase Plan

### Phase 1 — Static Marketing Site (this build)
- [x] Project scaffolding (Astro + Tailwind + React)
- [ ] Design tokens in Tailwind config
- [ ] BaseLayout (head, nav, footer)
- [ ] Atom components (Button, Badge, Chip, StatCard, etc.)
- [ ] Molecule components (ProviderCard, TradeCard, StepCard)
- [ ] Organism components (Hero, TrustStats, HowItWorks, TradesGrid, ProviderCTA)
- [ ] Homepage (`/`)
- [ ] 15 trade landing pages (`/trades/[slug]`)
- [ ] 12 provider detail pages (`/provider/[id]`)
- [ ] Signup page with React island form (`/signup`)
- [ ] Lighthouse audit: all 95+
- [ ] Cloudflare Pages deployment

### Phase 2 — Chatbot Integration
- [ ] ChatBot React island (`/chat`)
- [ ] Results page (`/results`)
- [ ] Matching algorithm (client-side)
- [ ] Pre-selected trade URL param support

### Phase 3 — Full Platform
- [ ] Profile page with React island (`/profile`)
- [ ] Supabase integration for real provider data
- [ ] Auth for tradespeople
- [ ] Verification workflow
- [ ] Reviews system
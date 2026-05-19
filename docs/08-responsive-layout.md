# ServiceMatch — Responsive Breakpoints & Layout Rules

Consistent layout system across all pages. No magic numbers — everything references tokens.

---

## Breakpoints

| Name | Min Width | Columns | Gutter | Container Max |
|---|---|---|---|---|
| `xs` (mobile) | 0 | 1 | 16px | 100% |
| `sm` (large mobile) | 640px | 2 | 16px | 100% |
| `md` (tablet) | 768px | 2–3 | 20px | 720px |
| `lg` (desktop) | 1024px | 3–4 | 24px | 1200px |
| `xl` (wide) | 1280px | 3–4 | 24px | 1200px |

### Tailwind Mapping
```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
```

---

## Container

```
.container {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;   /* --space-lg on mobile */
  padding-right: 16px;
}

@media (min-width: 768px) {
  .container {
    padding-left: 24px;  /* --space-xxl */
    padding-right: 24px;
  }
}
```

Tailwind: `max-w-container mx-auto px-lg md:px-2xl`

---

## Grid Patterns

### Trades Grid
| Breakpoint | Columns | Gap |
|---|---|---|
| xs | 2 | 8px |
| sm | 3 | 8px |
| md | 4 | 12px |
| lg | 6 | 12px |

Tailwind: `grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-sm md:gap-md`

### Stats Row
| Breakpoint | Columns | Gap |
|---|---|---|
| xs | 3 (compact) | 8px |
| md | 3 | 12px |

Tailwind: `grid grid-cols-3 gap-sm md:gap-md`

### How It Works
| Breakpoint | Columns | Gap |
|---|---|---|
| xs | 1 (stacked) | 12px |
| md | 3 | 12px |

Tailwind: `flex flex-col md:flex-row gap-md`

### Provider Detail Stats
| Breakpoint | Columns | Gap |
|---|---|---|
| xs | 3 | 8px |
| md | 3 | 12px |

Same as Stats Row.

### Contact Buttons
| Breakpoint | Layout | Gap |
|---|---|---|
| xs | stacked | 12px |
| md | side by side | 16px |

Tailwind: `flex flex-col md:flex-row gap-md`

---

## Responsive Typography

| Token | Mobile | Tablet+ | Desktop+ |
|---|---|---|---|
| Hero | 28px / 800 | 32px / 800 | 36px / 800 |
| H1 | 24px / 700 | 28px / 700 | 30px / 700 |
| H2 | 20px / 700 | 22px / 700 | 24px / 700 |
| Body | 15px / 400 | 15px / 400 | 16px / 400 |

Tailwind: `text-[28px] md:text-[32px] lg:text-[36px] font-extrabold tracking-tight`

---

## Component Responsive Rules

### HeroSection
- Mobile: full-width, padding 20px
- Desktop: max-width 720px centred within hero

### ProviderCard
- Mobile: full-width, 4px margin horizontal
- Desktop: full-width within container, no grid (single column list)

### TradeCard
- Mobile: each card takes 50% width (2-col grid)
- Tablet: 33% (3-col)
- Desktop: 16.6% (6-col) — but auto-fill also works

### StepCard
- Mobile: stack vertically, each full-width
- Desktop: 3 in a row, flex

### ChatBot
- Full viewport height on all breakpoints
- Chat bubbles: max-width 75% on all sizes
- Options chips: wrap naturally

---

## Spacing Scale (Responsive)

| Context | Mobile | Tablet+ |
|---|---|---|
| Page padding | 16px | 24px |
| Section gap | 20px | 24px |
| Card padding | 16px | 16px (same) |
| Hero padding | 24px | 24px (same) |

---

## Touch Targets

All interactive elements minimum 44×44px tap area.

- Buttons: min-height 44px (sm: 36px acceptable for non-primary)
- Trade cards: min-height 80px
- Chips: min-height 36px
- Input fields: min-height 44px

---

## Navigation (Future)

Not in Phase 1, but planned:

| Breakpoint | Nav Style |
|---|---|
| xs–sm | Hamburger menu |
| md+ | Horizontal top bar |

Links: Home, Trades (dropdown), Chat, Signup
# ServiceMatch — Design Tokens

Canonical source of truth for all visual constants. Every page, component, and stylesheet must reference these tokens — never hardcode values.

---

## Colours

### Brand
| Token | Hex | Usage |
|---|---|---|
| `--color-primary` | `#2563EB` | Buttons, links, headers, active states |
| `--color-primary-light` | `#3B82F6` | Hover states, lighter accents |
| `--color-primary-dark` | `#1D4ED8` | Pressed states, gradients |
| `--color-secondary` | `#10B981` | Success, verified badges, tradesperson CTA |
| `--color-secondary-light` | `#34D399` | Hover on secondary elements |

### Surfaces
| Token | Hex | Usage |
|---|---|---|
| `--color-background` | `#F8FAFC` | Page background |
| `--color-surface` | `#FFFFFF` | Cards, modals, elevated containers |
| `--color-surface-elevated` | `#FFFFFF` | Dropdowns, popovers |
| `--color-surface-variant` | `#F1F5F9` | Chat background, subtle sections |

### Text
| Token | Hex | Usage |
|---|---|---|
| `--color-text-primary` | `#0F172A` | Headings, body text |
| `--color-text-secondary` | `#475569` | Descriptions, secondary info |
| `--color-text-tertiary` | `#64748B` | Captions, helper text |
| `--color-text-muted` | `#94A3B8` | Placeholders, disabled text |
| `--color-text-inverse` | `#FFFFFF` | Text on primary/secondary backgrounds |

### Semantic
| Token | Hex | Usage |
|---|---|---|
| `--color-success` | `#10B981` | Verified badges, positive states |
| `--color-success-light` | `#ECFDF5` | Success badge background |
| `--color-warning` | `#F59E0B` | "This Week" availability |
| `--color-warning-light` | `#FEF3C7` | Warning badge background |
| `--color-danger` | `#EF4444` | Gas Engineer trade, errors |
| `--color-danger-light` | `#FEF2F2` | Error background |
| `--color-info` | `#0EA5E9` | Info banners, Plumber trade |
| `--color-info-light` | `#F0F9FF` | Info banner background |

### Borders
| Token | Hex | Usage |
|---|---|---|
| `--color-border` | `#E2E8F0` | Card borders, dividers |
| `--color-border-light` | `#F1F5F9` | Subtle separators |

### Gradients
| Name | Stops | Usage |
|---|---|---|
| `gradient-primary` | `#2563EB` → `#1D4ED8` | Primary buttons, hero accents |
| `gradient-hero` | `#1E40AF` → `#2563EB` → `#3B82F6` | Hero section background |
| `gradient-success` | `#059669` → `#10B981` | Tradesperson CTA accents |

---

## Trade Colours

Each trade gets a unique accent used for icons, borders, and highlights.

| Trade | CSS Variable | Hex |
|---|---|---|
| Plumber | `--color-trade-plumber` | `#0EA5E9` |
| Electrician | `--color-trade-electrician` | `#F59E0B` |
| Carpenter | `--color-trade-carpenter` | `#8B5CF6` |
| Painter & Decorator | `--color-trade-painter` | `#10B981` |
| Gas Engineer | `--color-trade-gas-engineer` | `#EF4444` |
| HVAC Technician | `--color-trade-hvac` | `#6366F1` |
| Locksmith | `--color-trade-locksmith` | `#F97316` |
| Roofer | `--color-trade-roofer` | `#78716C` |
| Tiler | `--color-trade-tiler` | `#14B8A6` |
| Plasterer | `--color-trade-plasterer` | `#A78BFA` |
| Bricklayer | `--color-trade-bricklayer` | `#D97706` |
| Landscaper | `--color-trade-landscaper` | `#22C55E` |
| Cleaner | `--color-trade-cleaner` | `#06B6D4` |
| Handyman | `--color-trade-handyman` | `#8B5CF6` |
| Appliance Repair | `--color-trade-appliance` | `#EC4899` |

### Trade Icons (Material Community Icons)
| Trade | Icon Name |
|---|---|
| Plumber | `water` |
| Electrician | `flash` |
| Carpenter | `hammer` |
| Painter & Decorator | `format-paint` |
| Gas Engineer | `fire` |
| HVAC Technician | `fan` |
| Locksmith | `key-variant` |
| Roofer | `home` |
| Tiler | `grid` |
| Plasterer | `wall` |
| Bricklayer | `domain` |
| Landscaper | `tree` |
| Cleaner | `broom` |
| Handyman | `wrench` |
| Appliance Repair | `washing-machine` |

---

## Typography

Font stack: `Inter, ui-sans-serif, system-ui, -apple-system, sans-serif`

| Token | Size | Weight | Line Height | Letter Spacing | Usage |
|---|---|---|---|---|---|
| `--font-hero` | 32px / 2rem | 800 | 38px | -0.5px | Hero headline |
| `--font-h1` | 28px / 1.75rem | 700 | 34px | -0.3px | Page titles |
| `--font-h2` | 22px / 1.375rem | 700 | 28px | 0 | Section titles |
| `--font-h3` | 18px / 1.125rem | 600 | 24px | 0 | Card titles, subsections |
| `--font-h4` | 16px / 1rem | 600 | 22px | 0 | Labels, small titles |
| `--font-body` | 15px / 0.9375rem | 400 | 22px | 0 | Paragraphs, descriptions |
| `--font-body-bold` | 15px / 0.9375rem | 600 | 22px | 0 | Emphasised body text |
| `--font-caption` | 13px / 0.8125rem | 400 | 18px | 0 | Small text, metadata |
| `--font-caption-bold` | 13px / 0.8125rem | 600 | 18px | 0 | Bold small text |
| `--font-label` | 12px / 0.75rem | 600 | 16px | 0.5px | Overlines, tags |
| `--font-overline` | 11px / 0.6875rem | 700 | 14px | 1.5px | Tiny caps labels |
| `--font-price` | 24px / 1.5rem | 800 | 28px | 0 | Hourly rate display |

### Responsive Breakpoints for Type
| Breakpoint | Hero | H1 | H2 | Body |
|---|---|---|---|---|
| Mobile (<640px) | 28px | 24px | 20px | 15px |
| Tablet (640–1024px) | 32px | 28px | 22px | 15px |
| Desktop (>1024px) | 36px | 30px | 24px | 16px |

---

## Spacing

Base unit: 4px. All spacing must be multiples of 4.

| Token | Value | Usage |
|---|---|---|
| `--space-xs` | 4px | Tight gaps between pills/chips |
| `--space-sm` | 8px | Inner card padding, small gaps |
| `--space-md` | 12px | Medium gaps, input spacing |
| `--space-lg` | 16px | Card padding, section margins |
| `--space-xl` | 20px | Between sections |
| `--space-xxl` | 24px | Hero padding, major sections |
| `--space-xxxl` | 32px | Page-level spacing |
| `--space-section` | 24px | Standard section gap |

---

## Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | 8px | Inputs, radio buttons |
| `--radius-md` | 12px | Small cards, stat cards |
| `--radius-lg` | 16px | Cards, chat bubbles |
| `--radius-xl` | 20px | Hero, large sections |
| `--radius-pill` | 999px | Pills, badges, chips |
| `--radius-button` | 12px | All buttons |
| `--radius-input` | 8px | Text inputs |

---

## Shadows

| Token | CSS | Usage |
|---|---|---|
| `--shadow-sm` | `0 1px 3px rgba(15,23,42,0.05)` | Subtle cards |
| `--shadow-md` | `0 2px 8px rgba(15,23,42,0.08)` | Provider cards |
| `--shadow-lg` | `0 4px 16px rgba(15,23,42,0.12)` | Modals, elevated panels |
| `--shadow-xl` | `0 8px 24px rgba(15,23,42,0.16)` | Hero CTA |
| `--shadow-primary` | `0 4px 12px rgba(37,99,235,0.3)` | Primary button glow |

---

## Animation

| Token | Value | Usage |
|---|---|---|
| `--spring-damping` | 15 | Standard spring |
| `--spring-stiffness` | 120 | Standard spring |
| `--duration-fast` | 200ms | Hover, focus transitions |
| `--duration-normal` | 350ms | Entrance animations |
| `--duration-slow` | 400ms | Page transitions |
| `--stagger-delay` | 80ms | Staggered list entrance |
| `--scale-press` | 0.97 | Button press feedback |

### Easing
| Name | Value |
|---|---|
| `--ease-out-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` |

---

## Tailwind Mapping

When using Tailwind, map tokens to `tailwind.config.ts`:

```ts
import type { Config } from 'tailwindcss';

const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#2563EB', light: '#3B82F6', dark: '#1D4ED8' },
        secondary: { DEFAULT: '#10B981', light: '#34D399' },
        surface: { DEFAULT: '#FFFFFF', variant: '#F1F5F9' },
        background: '#F8FAFC',
        // ... semantic + trade colours
      },
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      fontSize: {
        hero: ['2rem', { lineHeight: '2.375rem', fontWeight: '800', letterSpacing: '-0.5px' }],
        // ... all type tokens
      },
      borderRadius: { sm: '8px', md: '12px', lg: '16px', xl: '20px', pill: '999px' },
      spacing: { xs: '4px', sm: '8px', md: '12px', lg: '16px', xl: '20px', xxl: '24px', xxxl: '32px' },
      boxShadow: { sm: '0 1px 3px rgba(15,23,42,0.05)', /* ... */ },
    },
  },
};
export default config;
```
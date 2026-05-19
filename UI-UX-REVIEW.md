# ServiceMatch — UI/UX Design Review

**Date:** 2026-05-19  
**Reviewer:** UI/UX Agent (Auto-mate)  
**URL:** https://remarkable-flan-1c7099.netlify.app  
**Stack:** Astro 6 + Tailwind CSS 4  
**Pages reviewed:** Homepage, /trades/plumber, /provider/1  

---

## Methodology

1. Searched UI/UX Pro Max for product type, style, colour, typography, and UX best practices
2. Fetched and audited live page HTML from all 3 page types
3. Reviewed against the 9 design docs in `/docs/`
4. Cross-referenced with WCAG 2.1 AA and marketplace landing page patterns

---

## Executive Summary

The site has solid foundations — clean structure, semantic HTML, correct meta tags, JSON-LD. The core issue is **Material Symbols icons are not rendering** because the icon font is never loaded. This breaks the visual identity across every page. Beyond that, there are spacing, contrast, and layout inconsistencies that need polish to match the quality bar of a trust-focused marketplace.

---

## Findings

### 🔴 Critical

#### 1. Material Symbols font not loaded — all icons broken
**Pages:** All  
**Impact:** Every trade card, step card, provider card, and the CTA section shows blank squares or nothing instead of icons. The site uses `class="material-symbols-rounded"` everywhere but the Google Fonts CSS for Material Symbols is never included in `<head>`.

**Fix:** Add to `BaseLayout.astro` `<head>`:
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
```

**Reference:** UI/UX Pro Max — Trust & Authority style requires "shield icons, lock icons for security" which are invisible without the font.

---

#### 2. Hero CTA button has conflicting classes
**Page:** Homepage  
**Impact:** The hero CTA renders with `bg-[var(--color-primary)]` AND `bg-white` — the white override works by cascade but is fragile and the primary class is wasted bytes. The shadow also applies the blue glow (`--shadow-primary`) which looks wrong on a white button.

**Fix:** In `HeroSection.astro`, the Button component should use `variant="outline"` or a custom class, not override with `bg-white`:
```astro
<a href="/chat" class="inline-flex items-center justify-center gap-2 font-semibold rounded-button 
   bg-white text-[var(--color-primary)] hover:bg-gray-100 
   shadow-[0_2px_8px_rgba(15,23,42,0.08)] 
   px-6 py-3.5 text-[15px] transition-all duration-200 
   focus-visible:ring-2 focus-visible:ring-[var(--color-primary-light)] focus-visible:ring-offset-2">
  💬 Start Chat → Find a Pro
</a>
```

---

### 🟡 Warning

#### 3. `<2hr` stat uses HTML entity in source
**Page:** Homepage (trust stats bar)  
**Impact:** The rendered output shows `<2hr` correctly in browser, but the HTML source has `&lt;2hr` which could cause issues with screen readers reading "less than 2hr" instead of "under 2 hours".

**Fix:** Change stat value to "Under 2hr" for clarity:
```astro
<StatCard value="Under 2hr" label="Avg Response" />
```

---

#### 4. Trade colour hex appended with "18" for opacity — not a valid CSS colour
**Page:** All trade pages, trade grid on homepage  
**Impact:** Inline styles like `style="background: #0EA5E918"` are using 8-digit hex which *does* work in modern browsers, but Tailwind's arbitrary values and design tokens expect 6-digit hex + opacity modifier. This is inconsistent with the token system.

**Fix:** Use Tailwind opacity syntax or proper CSS:
```html
<!-- Instead of style="background: #0EA5E918" -->
<div class="bg-[#0EA5E9]/[0.09]">
```
Or define in the trade data and use a computed class.

---

#### 5. "Find a Electrician" — grammar error in aria-label
**Page:** Homepage trade grid  
**Impact:** Accessibility — screen readers announce "Find a Electrician" instead of "Find an Electrician".

**Fix:** Add article logic to TradeGrid or adjust the `getTradeInfo` to include proper article:
```ts
// Simple check: if trade starts with vowel, use "an"
const article = 'AEIOU'.includes(trade.name[0]) ? 'an' : 'a';
aria-label={`Find ${article} ${trade.name}`}
```

---

#### 6. Hero section too narrow on desktop
**Page:** Homepage  
**Impact:** The hero section is constrained to the container width (1200px) but the content inside is only `max-w-[90%]` centred — on a 1920px screen this leaves excessive white space on the sides. Marketplaces typically use full-width hero sections.

**Fix:** Make hero full-width within the container, or increase max-width for the hero section. UI/UX Pro Max — Marketplace/Directory pattern specifies "Hero (Search focused)" as the primary section.

---

#### 7. No social proof / testimonials section
**Page:** Homepage  
**Impact:** UI/UX Pro Max — Social Proof-Focused and Trust & Authority styles both rank "Testimonials prominent, client logos displayed, reviews/ratings" as high priority. The current homepage has no testimonials or review quotes — only the trust stats bar.

**Fix:** Add a testimonials section between "How It Works" and "Popular Trades":
```html
<section>
  <h2>What People Say</h2>
  <!-- 3 testimonial cards with name, trade, quote, rating -->
</section>
```

---

#### 8. Plumber trade page shows no provider cards
**Page:** /trades/plumber  
**Impact:** The plumber trade page should show 3 sample providers (Mike O'Brien, James Murphy, Tom Hamilton) but the rendered content only shows the section heading "Our Plumbers" with no cards visible in the readability extraction. This may be a rendering issue or the providers are not being passed correctly to the page.

**Fix:** Verify `getProvidersByTrade` returns results for "Plumber" and that the ProviderCard rendering loop works. Check the `trades` filter — Tom Hamilton has `trades: ['Gas Engineer', 'Plumber']` so his primary trade is "Gas Engineer" — the filter should catch him via `p.trades.includes(trade)`.

---

#### 9. Missing "back to results" / breadcrumb navigation on provider detail
**Page:** /provider/1  
**Impact:** Users land on a provider page with no way to navigate back. No breadcrumbs, no back link. UI/UX Pro Max — Trust & Authority checklist: "Contact info accessible".

**Fix:** Add breadcrumbs to BaseLayout or provider detail page:
```html
<nav aria-label="Breadcrumb">
  <ol class="flex gap-2 text-sm text-[var(--color-text-tertiary)]">
    <li><a href="/">Home</a></li>
    <li>/</li>
    <li><a href="/trades/plumber">Plumbers</a></li>
    <li>/</li>
    <li aria-current="page">Mike O'Brien</li>
  </ol>
</nav>
```

---

#### 10. Footer is minimal — missing important links
**Page:** All  
**Impact:** The footer only has the tagline. Marketplace sites need footer links for: About, Contact, Privacy, Terms, Trades directory. UI/UX Pro Max — Trust & Authority: "Guarantee clearly stated, Contact info accessible".

**Fix:** Expand footer:
```html
<footer>
  <div class="grid md:grid-cols-3 gap-6">
    <div>
      <p class="font-bold">ServiceMatch</p>
      <p class="text-sm">Connecting NI with trusted local pros</p>
    </div>
    <div>
      <h4>Quick Links</h4>
      <a href="/chat">Find a Pro</a>
      <a href="/signup">Join as a Pro</a>
      <a href="/trades">All Trades</a>
    </div>
    <div>
      <h4>Legal</h4>
      <a href="/privacy">Privacy Policy</a>
      <a href="/terms">Terms of Service</a>
    </div>
  </div>
</footer>
```

---

### 🟢 OK

#### 11. ✅ Semantic HTML structure
- `<header role="banner">`, `<main id="main">`, `<footer role="contentinfo">` — correct
- Skip link present and functional
- Headings follow proper hierarchy (h1 → h2 → h3)

#### 12. ✅ Meta tags and SEO
- Title, description, canonical, OG, Twitter cards all present and correct
- JSON-LD Organization schema included
- `lang="en-GB"` set correctly

#### 13. ✅ Accessibility foundations
- `aria-hidden="true"` on decorative icons
- `aria-label` on interactive elements
- Focus visible ring defined in CSS
- Reduced motion media query in global CSS

#### 14. ✅ Colour palette matches design tokens
- Primary blue (#2563EB) — trust-focused, matches "Professional colors (blue/grey)" from Trust & Authority pattern
- Secondary green (#10B981) — matches "success/growth colors (green)" recommendation
- Trade-specific colours add visual variety without chaos

#### 15. ✅ Typography — Inter is a strong choice
- UI/UX Pro Max "Modern Professional" pairing recommends geometric sans-serif for headings
- Inter matches "Corporate Trust" pairing criteria: "accessible, readable, professional"
- Weight range (400-800) supports the design token hierarchy

#### 16. ✅ Build performance
- 30 pages in 3.5s — excellent
- Zero JS on static pages — meets Astro best practices
- Sitemap auto-generated

---

## Prioritised Action Items

| # | Priority | Item | Effort |
|---|---|---|---|
| 1 | 🔴 P0 | Load Material Symbols icon font | 1 line |
| 2 | 🔴 P0 | Fix hero CTA button classes | 5 min |
| 3 | 🟡 P1 | Fix "Find a Electrician" grammar | 10 min |
| 4 | 🟡 P1 | Verify plumber trade page renders providers | 15 min |
| 5 | 🟡 P1 | Add breadcrumbs to provider detail | 20 min |
| 6 | 🟡 P1 | Change "<2hr" to "Under 2hr" | 1 min |
| 7 | 🟡 P2 | Add testimonials section to homepage | 1-2 hrs |
| 8 | 🟡 P2 | Expand footer with links | 30 min |
| 9 | 🟡 P2 | Fix trade colour opacity syntax consistency | 30 min |
| 10 | 🟡 P3 | Widen hero on desktop | 15 min |

---

## Downstream Feedback

- **Coding agent:** [Load Material Symbols font in BaseLayout head, fix hero CTA conflicting classes, fix aria-label grammar for "an" vs "a", verify plumber page provider rendering, add breadcrumbs to provider detail, change stat text, standardise trade colour opacity syntax]
- **Testing agent:** [visual regression test for all 3 page types after icon font fix, test provider detail back navigation, test trade pages render at least 1 provider card, responsive test at 375px/768px/1280px/1920px]
- **SEO agent:** [Add breadcrumb structured data (BreadcrumbList) to provider detail and trade pages, expand footer for internal linking density, add FAQ schema to trade pages]
- **Architect:** [component abstractions needed: Breadcrumb component, Testimonials organism, Footer with columns; design system gaps: no icon font loading strategy, no article resolver for trade names]
- **General:** [No social proof on homepage — high-impact conversion gap; Material Symbols not loading breaks the entire visual identity — this is the single highest-priority fix]
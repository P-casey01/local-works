# ServiceMatch — UI/UX Design Review

**Date:** 2026-05-19  
**Reviewer:** UI/UX Agent (ollama/glm-5.1:cloud)  
**URL:** https://remarkable-flan-1c7099.netlify.app  
**Stack:** Astro 6 + Tailwind CSS 4  
**Pages reviewed:** Homepage, /trades/plumber, /trades/electrician, /provider/1, /chat, /signup  

---

## Overall Grade: C+

Visual foundation is solid (design tokens, accessibility basics, component structure all good), but the site is critically incomplete. Core conversion funnels are broken.

---

## 🔴 Critical (4)

### 1. `/chat` is a placeholder — core conversion funnel broken
The primary CTA across the entire site ("Start Chat → Find a Pro") leads to "Chatbot coming soon." This kills the demand-side funnel completely.

**Fix:** Build ChatBot React island with trade selection flow → results page, or add working interim (WhatsApp link, contact form).

### 2. `/signup` is a placeholder — supply-side funnel broken
"Are you a tradesperson? → Create Your Profile" leads to "Signup form coming soon." No way for tradespeople to join.

**Fix:** Build SignupForm React island or add interim (Google Form, Typeform embed).

### 3. `/results` returns 404
Chat redirect has nowhere to go — the /chat placeholder mentions redirecting to results but the page doesn't exist.

**Fix:** Create /results page that shows matched providers based on URL params (trade, location).

### 4. `/privacy` + `/terms` return 404 — footer links broken
The expanded footer links to /privacy and /terms but neither page exists. Legal risk.

**Fix:** Create privacy policy and terms of service pages (even placeholder templates).

---

## 🟡 Warning (14)

### 5. Hero lacks urgency/differentiation
UI/UX Pro Max — Marketplace/Directory pattern requires "Hero (Search focused)" with search bar as CTA. Current hero is text + button, no search, no urgency text (e.g., "12 plumbers available in Belfast today").

### 6. Wrong shadow on hero CTA button
Hero CTA uses `shadow-[var(--shadow-md)]` but the design spec calls for `shadow-[var(--shadow-primary)]` — the primary glow shadow that reinforces brand colour.

### 7. "See all →" links to /chat (broken)
Homepage "Popular Trades → See all →" links to /chat which is a placeholder. Should link to a trades listing page.

### 8. Mobile nav hides "Find a Pro" link
On screens < 768px, the header hides the "Find a Pro" nav link. Only "Join as a Pro" shows. The primary CTA is invisible on mobile.

### 9. No testimonials/social proof section
UI/UX Pro Max — Trust & Authority and Social Proof patterns require testimonials. Only stats bar exists — no real user quotes.

### 10. Invalid Tailwind classes in HowItWorks
`gap-section` is not a standard Tailwind class. Should be `gap-6` or `space-y-6`.

### 11. Phone href formatting
Provider detail uses `href="tel:+44 XXXX XXXXXX"` with spaces — should be `href="tel:+44XXXXXXXXXX"` (no spaces in tel: URIs).

### 12. Skills pills not accessible
Skills are rendered as decorative spans with no semantic meaning. Screen readers skip them. Should use `<ul>` + `<li>` structure with `aria-label="Skills"`.

### 13. Missing entrance animations
UI/UX Pro Max — Professional style recommends "Subtle entrance animations" for section transitions. Currently no scroll-triggered animations at all.

### 14. Wrong ProviderCTA icon
ProviderCTA uses `person_add` icon but spec calls for `badge` icon for the "Join as a pro" CTA.

### 15. Trade pages use generic ProviderCTA
All trade pages show "Are you a tradesperson?" instead of trade-specific "Are you a Plumber?"

### 16. Only 12 of 15 trades shown on homepage
Cleaner, Handyman, Appliance Repair are cut off by `limit={12}`. No way to discover them from homepage.

### 17. No /trades index page
Missing trades directory page — high SEO value, needed for "See all →" link.

### 18. Missing FAQ sections on trade pages
Spec requires FAQPage structured data. No FAQ sections anywhere — missed SEO opportunity for Google rich results.

---

## 🟢 OK (19)

- Semantic HTML (header, main, footer landmarks)
- Skip link functional
- Meta tags, OG, Twitter cards correct
- JSON-LD Organization schema on homepage
- LocalBusiness schema on provider pages
- `lang="en-GB"` correct
- Breadcrumbs on provider detail
- Material Symbols font loaded
- Hero CTA button clean (no class conflicts)
- Trust stats values rendering correctly
- ARIA labels on interactive elements
- Focus visible rings defined
- Reduced motion media query
- Colour palette matches Trust & Authority pattern
- Inter typography strong match
- Build performance excellent (30 pages, 3-6s)
- Responsive grid working
- Trade colour coding correct
- Provider cards rendering with data

---

## Spec Compliance: ~30%

Weighted by page importance — core funnel pages (/chat, /signup, /results) are missing entirely.

---

## Prioritised Action Items

| # | Priority | Item | Effort |
|---|---|---|---|
| 1 | 🔴 P0 | Build /chat ChatBot React island | 2-4 hrs |
| 2 | 🔴 P0 | Build /signup form or interim | 1-2 hrs |
| 3 | 🔴 P0 | Create /results page | 1-2 hrs |
| 4 | 🔴 P0 | Create /privacy + /terms pages | 30 min |
| 5 | 🟡 P1 | Fix mobile nav — show "Find a Pro" | 10 min |
| 6 | 🟡 P1 | Fix "See all →" link to /trades index | 15 min |
| 7 | 🟡 P1 | Create /trades index page | 30 min |
| 8 | 🟡 P1 | Show all 15 trades or fix limit | 5 min |
| 9 | 🟡 P1 | Fix hero CTA shadow | 5 min |
| 10 | 🟡 P1 | Trade-specific ProviderCTA | 15 min |
| 11 | 🟡 P2 | Add testimonials section | 1-2 hrs |
| 12 | 🟡 P2 | Fix tel: href formatting | 5 min |
| 13 | 🟡 P2 | Make skills accessible (ul/li) | 15 min |
| 14 | 🟡 P2 | Add FAQ sections to trade pages | 1 hr |
| 15 | 🟡 P3 | Add entrance animations | 30 min |
| 16 | 🟡 P3 | Search-focused hero (Phase 2) | 2-3 hrs |
| 17 | 🟡 P3 | Fix ProviderCTA icon | 5 min |
| 18 | 🟡 P3 | Fix invalid Tailwind gap class | 5 min |

---

## Downstream Feedback

- **Coding agent:** [Build ChatBot React island for /chat, Build signup form for /signup, Create /results page, Create /privacy + /terms pages, Fix mobile nav to show "Find a Pro", Create /trades index page, Fix hero CTA shadow to use --shadow-primary, Make ProviderCTA accept trade-specific props, Fix tel: href no spaces, Make skills semantically accessible with ul/li, Fix invalid Tailwind gap-section class, Fix ProviderCTA icon to badge]
- **Testing agent:** [Test /chat and /signup are functional, Test /results page with URL params, Test /privacy and /terms render, Test mobile nav shows primary CTA, Test all 15 trades accessible, Test tel: links work on mobile, Test skills read by screen readers]
- **SEO agent:** [Create /trades/ index for internal linking, Add FAQPage JSON-LD to trade pages, Add Service JSON-LD, Ensure new pages in sitemap]
- **Architect:** [ChatBot React island architecture (state machine, trade selection, location input, matching), SignupForm island, Results page with URL param routing, Testimonials organism, FAQ component, Search-focused hero (Phase 2)]
- **General:** [Two broken conversion funnels are the highest-impact issues. The site is a solid marketing shell that can't convert yet. Fix /chat and /signup first, then fill the spec compliance gaps.]
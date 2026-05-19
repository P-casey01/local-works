# ServiceMatch — Accessibility Requirements

WCAG 2.1 AA compliance for the entire site. No exceptions.

---

## Principles

1. **Perceivable** — all content available in text, sufficient contrast
2. **Operable** — keyboard navigable, no time limits, no motion-only interactions
3. **Understandable** — predictable navigation, clear labels, error messages
4. **Robust** — valid HTML, ARIA where needed, tested with assistive tech

---

## Colour Contrast

All text/background combinations must meet WCAG AA:

| Combination | Ratio Required | Status |
|---|---|---|
| `--color-text-primary` on `--color-background` | 4.5:1 | ✅ (#0F172A on #F8FAFC = ~17:1) |
| `--color-text-secondary` on `--color-background` | 4.5:1 | ✅ (#475569 on #F8FAFC = ~8:1) |
| `--color-text-tertiary` on `--color-background` | 4.5:1 | ✅ (#64748B on #F8FAFC = ~5.5:1) |
| `--color-text-inverse` on `--color-primary` | 4.5:1 | ✅ (#FFF on #2563EB = ~5.5:1) |
| `--color-primary` on `--color-background` | 3:1 (large text) | ✅ (#2563EB on #F8FAFC = ~5:1) |

### Trade Colours on White
Some trade colours fail 4.5:1 on white for small text. Rule: **never use trade colours alone for body text**. Use them only for:
- Icons (decorative, not informative)
- Borders and backgrounds
- Large text (18px+ bold) where 3:1 suffices

If trade colour text is needed, pair with `--color-text-primary` nearby or use darker shade.

---

## Keyboard Navigation

### Tab Order
Must follow visual reading order: top→bottom, left→right.

### Focus Indicators
- **Visible:** 2px ring, `--color-primary-light` offset 2px from element
- **Never:** `outline: none` without replacement
- Tailwind: `focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-2`

### Skip Link
First focusable element on every page:
```html
<a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 ...">
  Skip to main content
</a>
```

---

## Semantic HTML

### Page Landmarks
```html
<header role="banner">
  <!-- nav -->
</header>
<main id="main">
  <!-- content -->
</main>
<footer role="contentinfo">
  <!-- footer -->
</footer>
```

### Headings
- Exactly one `<h1>` per page
- No skipped levels (h1 → h2 → h3, never h1 → h3)
- See `06-seo-metadata.md` for heading hierarchy per page

### Lists
- Trade grid: `<ul>` with `<li>` per card
- Skills pills: `<ul>` with `<li>` per pill
- Chat messages: `<ol>` or `<ul>` with `<li>` per message

---

## Interactive Elements

### Buttons
- **Never** use `<div>` or `<span>` for buttons — always `<button>` or `<a>`
- All buttons must have accessible name (text content or `aria-label`)

### Links
- Descriptive text: "Find a Plumber" not "Click here"
- External links: `rel="noopener"` if opening new window

### Chat Bot
- Bot messages: `role="log"` or `aria-live="polite"` container
- New messages announced: `aria-live="polite"` on message list
- Typing indicator: `aria-label="Bot is typing"`, `role="status"`
- Option chips: `<button>` elements, not `<div>`
- Text input: `<label>` associated, `aria-label` fallback

### Forms (Signup)
- Every input has an associated `<label>`
- Required fields marked with `aria-required="true"`
- Error messages linked to inputs via `aria-describedby`
- Radio groups: `<fieldset>` + `<legend>`
- Form validation: `aria-invalid="true"` on errored fields

---

## Images & Icons

- Decorative icons (Material Symbols in trade cards, step icons): `aria-hidden="true"`
- Informative icons: `aria-label` describing meaning
- Profile images: `alt="{provider name}"` if present, `alt=""` if decorative placeholder
- OG images: not accessible (social only), no alt needed

---

## Motion & Animation

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

- Stagger entrance animations: disabled under `prefers-reduced-motion`
- Typing indicator: show text "Bot is typing..." instead of bouncing dots
- Hero fade-in: instant instead of animated
- Button press scale: instant instead of spring

---

## ARIA Patterns

### ProviderCard
```html
<article aria-label="{name}, {trades}, £{rate} per hour, {rating} stars">
  ...
</article>
```

### AvailabilityTag
```html
<span role="status" aria-label="Available immediately">⚡ Available Now</span>
```

### Verified Badge
```html
<span aria-label="Verified professional">✓ Verified</span>
```

### Chat Interface
```html
<div role="log" aria-label="Chat conversation" aria-live="polite">
  <div role="article" aria-label="Bot: {message text}">...</div>
  <div role="article" aria-label="You: {message text}">...</div>
</div>
```

### Summary Bar
```html
<div aria-label="Your selections so far">
  <span class="sr-only">Selected: </span>
  ...
</div>
```

---

## Screen Reader Testing Checklist

- [ ] Homepage: all sections announced, trade cards readable
- [ ] Trade pages: hero content, provider cards
- [ ] Provider detail: name, trades, stats, contact methods
- [ ] Chat: messages announced, options navigable, flow completable
- [ ] Signup: all fields labelled, errors announced, form submittable
- [ ] Keyboard: full site navigable without mouse
- [ ] Skip link: visible on focus, jumps to main content

---

## Language

```html
<html lang="en-GB">
```

All pages. No exceptions.
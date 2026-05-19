# ServiceMatch — SEO & Metadata

SEO strategy, structured data, meta tags, and sitemap configuration for the entire site.

---

## Site-Level

| Field | Value |
|---|---|
| Site name | ServiceMatch |
| Default title template | {page} — ServiceMatch |
| Default description | Connect with vetted tradespeople in Northern Ireland. Chat with our bot, get matched with verified local professionals. |
| Language | en-GB |
| Locale | en_GB |
| Region | Northern Ireland, United Kingdom |
| Canonical domain | TBD (servicematch.co.uk or similar) |

---

## Per-Page Meta

### Homepage `/`
| Field | Value |
|---|---|
| Title | ServiceMatch — Find Trusted Local Pros in Northern Ireland |
| Description | Connect with vetted tradespeople in NI. Chat with our bot, get matched with verified plumbers, electricians, carpenters and more. |
| OG Type | website |
| OG Image | hero-branded-1200x630.png |
| Canonical | `/` |
| Robots | index, follow |

### Chat `/chat`
| Field | Value |
|---|---|
| Title | Find a Pro — ServiceMatch |
| Description | Chat with our bot to find the right tradesperson for your job in Northern Ireland. |
| Canonical | `/chat` |
| Robots | index, follow |

### Results `/results`
| Field | Value |
|---|---|
| Title | {N} Pros Found — ServiceMatch |
| Description | Browse matched tradespeople for your job in Northern Ireland. |
| Canonical | `/results` |
| Robots | noindex (dynamic, query-dependent content) |

### Provider Detail `/provider/:id`
| Field | Value |
|---|---|
| Title | {name} — {primary trade} in {location} — ServiceMatch |
| Description | {bio} |
| Canonical | `/provider/{id}` |
| Robots | index, follow (verified providers only), noindex (unverified) |

### Trade Pages `/trades/:slug`
| Field | Value |
|---|---|
| Title | Find a {Trade} in Northern Ireland — ServiceMatch |
| Description | Connect with verified {trade}s across NI. Chat with our bot for instant matching. |
| OG Type | website |
| Canonical | `/trades/{slug}` |
| Robots | index, follow |

### Signup `/signup`
| Field | Value |
|---|---|
| Title | Create Your Profile — ServiceMatch |
| Description | Join ServiceMatch and get matched with customers looking for your trade in Northern Ireland. |
| Canonical | `/signup` |
| Robots | index, follow |

### Profile `/profile`
| Field | Value |
|---|---|
| Title | My Profile — ServiceMatch |
| Robots | noindex (private, user-specific) |

---

## Structured Data (JSON-LD)

### Organization (site-wide, every page)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ServiceMatch",
  "url": "https://servicematch.co.uk",
  "logo": "https://servicematch.co.uk/logo.png",
  "description": "Connecting Northern Ireland with trusted local tradespeople.",
  "areaServed": {
    "@type": "Place",
    "name": "Northern Ireland"
  }
}
```

### LocalBusiness (provider detail pages)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "{provider.name}",
  "description": "{provider.bio}",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "{provider.location}",
    "addressRegion": "Northern Ireland",
    "addressCountry": "GB"
  },
  "telephone": "{provider.phone}",
  "email": "{provider.email}",
  "priceRange": "£{provider.hourlyRate}/hr",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "{provider.rating}",
    "reviewCount": "{provider.reviewCount}"
  },
  "areaServed": {
    "@type": "GeoCircle",
    "radius": "{provider.radius} mi",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "addressLocality": "{provider.location}"
    }
  }
}
```

### Service (trade landing pages)
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "{Trade} Services in Northern Ireland",
  "provider": {
    "@type": "Organization",
    "name": "ServiceMatch"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Northern Ireland"
  },
  "serviceType": "{Trade}"
}
```

### FAQPage (trade landing pages, optional)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I find a {trade} on ServiceMatch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chat with our bot, tell us your trade, location and urgency, and we'll match you with vetted local professionals."
      }
    },
    {
      "@type": "Question",
      "name": "Are ServiceMatch {trade}s verified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Verified professionals on ServiceMatch have passed our verification process. Look for the ✓ Verified badge."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a {trade} cost in Northern Ireland?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rates vary by trade and experience. ServiceMatch shows each professional's hourly rate so you can compare before you contact them."
      }
    }
  ]
}
```

### BreadcrumbList (all pages except homepage)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://servicematch.co.uk/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "{Page Title}",
      "item": "https://servicematch.co.uk/{path}"
    }
  ]
}
```

---

## Sitemap

Generate via `@astrojs/sitemap`.

**Included:**
- `/` (homepage)
- `/chat`
- `/trades/{slug}` (all 15)
- `/provider/{id}` (verified only)
- `/signup`

**Excluded:**
- `/results` (dynamic, query-dependent)
- `/profile` (private)

**Priority:**
| Path | Priority | Changefreq |
|---|---|---|
| `/` | 1.0 | weekly |
| `/trades/{slug}` | 0.9 | monthly |
| `/provider/{id}` | 0.7 | monthly |
| `/chat` | 0.8 | monthly |
| `/signup` | 0.5 | monthly |

---

## robots.txt

```
User-agent: *
Allow: /
Disallow: /results
Disallow: /profile

Sitemap: https://servicematch.co.uk/sitemap-index.xml
```

---

## Open Graph & Twitter Cards

### Default OG Tags (every page)
```html
<meta property="og:site_name" content="ServiceMatch" />
<meta property="og:locale" content="en_GB" />
<meta name="twitter:card" content="summary_large_image" />
```

### OG Images
- **Homepage:** branded hero graphic (1200×630)
- **Trade pages:** trade-colour branded graphic (1200×630) — template with trade name + icon
- **Provider pages:** provider avatar or default ServiceMatch branded image

---

## Performance Targets (Core Web Vitals)

| Metric | Target | How |
|---|---|---|
| LCP | < 2.5s | Static HTML, no JS on trade pages, preloaded hero image |
| FID | < 100ms | Minimal JS (React islands only on chat/signup) |
| CLS | < 0.1 | Explicit dimensions on images, fonts with `font-display: swap` |
| TTFB | < 50ms | Cloudflare Pages edge deployment |

### Astro-Specific Optimisations
- **Zero JS** on homepage sections and trade pages (Astro default)
- **React islands** only for: chatbot (`/chat`), signup form (`/signup`), profile (`/profile`)
- **Image optimisation:** Astro `<Image>` component for automatic WebP/AVIF + responsive sizes
- **Font loading:** `@fontsource/inter` with `font-display: swap`, preloaded in `<head>`
- **CSS:** Tailwind purged via Astro integration

---

## Heading Hierarchy (SEO)

### Homepage
```
H1: Find the Right Pro
H2: (implicit via sections)
H3: How It Works
H3: Popular Trades
```

### Trade Pages
```
H1: Find a {Trade} in Northern Ireland
H2: How It Works
H2: Our {Trade}s
H2: Are you a {trade}?
```

### Provider Detail
```
H1: {Provider Name}
H2: Availability
H2: Skills & Services
H2: About
```

### Signup
```
H1: Create Your Profile
H2: Personal Info
H2: Your Trades
H2: Location & Rates
H2: Availability
```

---

## Internal Linking Strategy

- Homepage → all 15 trade pages (via trades grid)
- Homepage → `/chat` (hero CTA)
- Homepage → `/signup` (tradesperson CTA)
- Every trade page → `/chat?trade={slug}` (hero CTA + inline CTAs)
- Every trade page → `/signup` (tradesperson CTA)
- Provider cards → `/provider/{id}`
- Chat completion → `/results`
- Results → `/provider/{id}` (per card)
- Results → `/chat` (empty state)
- Footer on all pages → homepage
- Breadcrumbs on all sub-pages → homepage
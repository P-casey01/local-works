# ServiceMatch — Data Model

All data structures, sample data, and relationships. Single source of truth for provider data across the site.

---

## Provider Schema

```typescript
interface ServiceProvider {
  id: string;                   // unique identifier (e.g., "1", "user-1716123456789")
  name: string;                 // display name
  trade: string;                // primary trade (from TRADES)
  trades: string[];             // all trades offered (first = primary)
  skills: string[];              // specific skill tags
  location: string;             // town or area (e.g., "Belfast")
  radius: number;               // service radius in miles
  hourlyRate: number;           // in GBP (£)
  availability: 'immediate' | 'this-week' | 'next-week' | 'flexible';
  rating: number;               // 0.0 – 5.0
  reviewCount: number;          // total reviews
  bio: string;                  // short description
  phone: string;                // e.g., "+44 7700 900001"
  email: string;                // e.g., "mike.obrien@email.com"
  verified: boolean;            // passed verification
  imageUri?: string;            // optional profile photo
  completedJobs: number;        // lifetime job count
}
```

---

## Chat / Job Requirements Schema

```typescript
interface JobRequirements {
  trade?: string;        // selected trade
  subCategory?: string;  // future: trade sub-categories
  location?: string;     // town or postcode
  urgency?: string;      // one of AVAILABILITY_OPTIONS
  jobSize?: string;      // one of JOB_SIZES
  budget?: string;       // budget range string
  description?: string;  // free-text job description
  complete: boolean;     // all steps finished
}
```

---

## Chat Message Schema

```typescript
interface ChatMessage {
  id: string;          // "bot-{timestamp}" or "user-{timestamp}"
  text: string;        // message content
  isBot: boolean;       // true = bot message, false = user message
  options?: string[];   // selectable options for this step
  timestamp: Date;      // message time
}
```

---

## Enumerations

### TRADES (15)
```typescript
const TRADES = [
  'Plumber',
  'Electrician',
  'Carpenter',
  'Painter & Decorator',
  'Gas Engineer',
  'HVAC Technician',
  'Locksmith',
  'Roofer',
  'Tiler',
  'Plasterer',
  'Bricklayer',
  'Landscaper',
  'Cleaner',
  'Handyman',
  'Appliance Repair',
] as const;
```

### TRADE_SLUGS
```
Plumber             → plumber
Electrician         → electrician
Carpenter           → carpenter
Painter & Decorator → painter-and-decorator
Gas Engineer        → gas-engineer
HVAC Technician      → hvac-technician
Locksmith           → locksmith
Roofer              → roofer
Tiler               → tiler
Plasterer           → plasterer
Bricklayer          → bricklayer
Landscaper          → landscaper
Cleaner             → cleaner
Handyman            → handyman
Appliance Repair     → appliance-repair
```

### AVAILABILITY_OPTIONS (4)
```typescript
const AVAILABILITY_OPTIONS = [
  'Immediate / Emergency',
  'This Week',
  'Next Week',
  'Flexible',
] as const;
```

Mapping to provider `availability` field:
| Option | Provider values |
|---|---|
| Immediate / Emergency | `immediate` |
| This Week | `immediate`, `this-week` |
| Next Week | `immediate`, `this-week`, `next-week` |
| Flexible | `immediate`, `this-week`, `next-week`, `flexible` |

### JOB_SIZES (4)
```typescript
const JOB_SIZES = [
  'Small (under 2 hours)',
  'Medium (2-4 hours)',
  'Large (full day+)',
  'Not sure yet',
] as const;
```

### BUDGET_OPTIONS (5)
```typescript
const BUDGET_OPTIONS = [
  'Under £100',
  '£100-£300',
  '£300-£500',
  '£500+',
  'Not sure',
] as const;
```

---

## Sample Providers (12)

```json
[
  {
    "id": "1",
    "name": "Mike O'Brien",
    "trade": "Plumber",
    "trades": ["Plumber", "Gas Engineer"],
    "skills": ["Leak repair", "Bathroom fitting", "Boiler service", "Central heating", "Unblocking drains"],
    "location": "Belfast",
    "radius": 25,
    "hourlyRate": 45,
    "availability": "immediate",
    "rating": 4.8,
    "reviewCount": 124,
    "bio": "20+ years experience in domestic and commercial plumbing. Gas Safe registered. No job too small.",
    "phone": "+44 7700 900001",
    "email": "mike.obrien@email.com",
    "verified": true,
    "completedJobs": 890
  },
  {
    "id": "2",
    "name": "Sarah Kelly",
    "trade": "Electrician",
    "trades": ["Electrician"],
    "skills": ["Rewiring", "Fuse box upgrade", "Lighting installation", "PAT testing", "EV charger install"],
    "location": "Belfast",
    "radius": 15,
    "hourlyRate": 50,
    "availability": "this-week",
    "rating": 4.9,
    "reviewCount": 89,
    "bio": "NIC EIC approved contractor. Specialising in domestic rewires and smart home installations.",
    "phone": "+44 7700 900002",
    "email": "sarah.kelly@email.com",
    "verified": true,
    "completedJobs": 650
  },
  {
    "id": "3",
    "name": "James Murphy",
    "trade": "Plumber",
    "trades": ["Plumber"],
    "skills": ["Emergency callouts", "Burst pipes", "Leak detection", "Underfloor heating", "Shower installation"],
    "location": "Lisburn",
    "radius": 20,
    "hourlyRate": 40,
    "availability": "immediate",
    "rating": 4.6,
    "reviewCount": 67,
    "bio": "Emergency plumber available 24/7. Fast response for burst pipes and urgent leaks.",
    "phone": "+44 7700 900003",
    "email": "james.murphy@email.com",
    "verified": true,
    "completedJobs": 420
  },
  {
    "id": "4",
    "name": "Aoife Brennan",
    "trade": "Carpenter",
    "trades": ["Carpenter", "Handyman"],
    "skills": ["Custom furniture", "Kitchen fitting", "Flooring", "Decking", "Fencing"],
    "location": "Belfast",
    "radius": 30,
    "hourlyRate": 38,
    "availability": "next-week",
    "rating": 4.7,
    "reviewCount": 52,
    "bio": "Master carpenter with an eye for detail. Bespoke joinery and kitchen installations a speciality.",
    "phone": "+44 7700 900004",
    "email": "aoife.brennan@email.com",
    "verified": true,
    "completedJobs": 310
  },
  {
    "id": "5",
    "name": "David Wilson",
    "trade": "Electrician",
    "trades": ["Electrician", "HVAC Technician"],
    "skills": ["Air conditioning", "Heat pumps", "Consumer unit replacement", "Socket installation", "Garden lighting"],
    "location": "Newtownabbey",
    "radius": 20,
    "hourlyRate": 48,
    "availability": "flexible",
    "rating": 4.5,
    "reviewCount": 43,
    "bio": "Qualified electrician and HVAC technician. Heat pump and air con specialist for homes and businesses.",
    "phone": "+44 7700 900005",
    "email": "david.wilson@email.com",
    "verified": false,
    "completedJobs": 280
  },
  {
    "id": "6",
    "name": "Clare Doherty",
    "trade": "Painter & Decorator",
    "trades": ["Painter & Decorator"],
    "skills": ["Interior painting", "Exterior painting", "Wallpapering", "Faux finishes", "Commercial decorating"],
    "location": "Bangor",
    "radius": 25,
    "hourlyRate": 32,
    "availability": "this-week",
    "rating": 4.9,
    "reviewCount": 71,
    "bio": "Award-winning painter and decorator. Residential and commercial. Free colour consultation included.",
    "phone": "+44 7700 900006",
    "email": "clare.doherty@email.com",
    "verified": true,
    "completedJobs": 510
  },
  {
    "id": "7",
    "name": "Tom Hamilton",
    "trade": "Gas Engineer",
    "trades": ["Gas Engineer", "Plumber"],
    "skills": ["Boiler installation", "Gas safety certificates", "Central heating", "Underfloor heating", "Gas leak repair"],
    "location": "Belfast",
    "radius": 20,
    "hourlyRate": 55,
    "availability": "immediate",
    "rating": 4.8,
    "reviewCount": 96,
    "bio": "Gas Safe registered engineer. Boiler installs, servicing, and emergency gas leak repairs. 15 years experience.",
    "phone": "+44 7700 900007",
    "email": "tom.hamilton@email.com",
    "verified": true,
    "completedJobs": 720
  },
  {
    "id": "8",
    "name": "Linda McAuley",
    "trade": "Cleaner",
    "trades": ["Cleaner"],
    "skills": ["Deep cleaning", "End of tenancy", "Office cleaning", "Carpet cleaning", "Window cleaning"],
    "location": "Holywood",
    "radius": 15,
    "hourlyRate": 22,
    "availability": "immediate",
    "rating": 4.7,
    "reviewCount": 38,
    "bio": "Professional domestic and commercial cleaning. Fully insured. Eco-friendly products available.",
    "phone": "+44 7700 900008",
    "email": "linda.mcauley@email.com",
    "verified": true,
    "completedJobs": 450
  },
  {
    "id": "9",
    "name": "Patrick Maguire",
    "trade": "Roofer",
    "trades": ["Roofer", "Handyman"],
    "skills": ["Roof repairs", "New roofs", "Flat roofing", "Guttering", "Chimney work"],
    "location": "Lisburn",
    "radius": 30,
    "hourlyRate": 42,
    "availability": "this-week",
    "rating": 4.4,
    "reviewCount": 29,
    "bio": "Experienced roofer covering all roof types. Emergency storm damage repairs a speciality.",
    "phone": "+44 7700 900009",
    "email": "patrick.maguire@email.com",
    "verified": false,
    "completedJobs": 190
  },
  {
    "id": "10",
    "name": "Niamh Stewart",
    "trade": "Tiler",
    "trades": ["Tiler", "Plasterer"],
    "skills": ["Bathroom tiling", "Kitchen tiling", "Floor tiling", "Wall tiling", "Underfloor heating installation"],
    "location": "Belfast",
    "radius": 20,
    "hourlyRate": 36,
    "availability": "next-week",
    "rating": 4.6,
    "reviewCount": 47,
    "bio": "Professional tiler and plasterer. Bathroom renovations from start to finish. Free tile selection advice.",
    "phone": "+44 7700 900010",
    "email": "niamh.stewart@email.com",
    "verified": true,
    "completedJobs": 340
  },
  {
    "id": "11",
    "name": "Robbie Adams",
    "trade": "Locksmith",
    "trades": ["Locksmith"],
    "skills": ["Emergency lockout", "Lock changes", "UPVC door locks", "Safes", "Access control"],
    "location": "Belfast",
    "radius": 20,
    "hourlyRate": 60,
    "availability": "immediate",
    "rating": 4.8,
    "reviewCount": 85,
    "bio": "24/7 emergency locksmith. No callout fee. All lock types covered including UPVC and smart locks.",
    "phone": "+44 7700 900011",
    "email": "robbie.adams@email.com",
    "verified": true,
    "completedJobs": 1200
  },
  {
    "id": "12",
    "name": "Fiona Campbell",
    "trade": "Landscaper",
    "trades": ["Landscaper", "Handyman"],
    "skills": ["Garden design", "Patio laying", "Fencing", "Artificial grass", "Tree surgery"],
    "location": "Newtownards",
    "radius": 25,
    "hourlyRate": 35,
    "availability": "flexible",
    "rating": 4.7,
    "reviewCount": 34,
    "bio": "Full garden transformation service. Design to completion. Free initial consultation and quote.",
    "phone": "+44 7700 900012",
    "email": "fiona.campbell@email.com",
    "verified": true,
    "completedJobs": 230
  }
]
```

---

## Provider Count by Trade (from sample data)

| Trade | Count | Provider Names |
|---|---|---|
| Plumber | 3 | Mike O'Brien, James Murphy, Tom Hamilton (via Gas Engineer) |
| Electrician | 2 | Sarah Kelly, David Wilson |
| Carpenter | 1 | Aoife Brennan |
| Painter & Decorator | 1 | Clare Doherty |
| Gas Engineer | 1 | Tom Hamilton |
| HVAC Technician | 1 | David Wilson (via Electrician) |
| Locksmith | 1 | Robbie Adams |
| Roofer | 1 | Patrick Maguire |
| Tiler | 1 | Niamh Stewart |
| Cleaner | 1 | Linda McAuley |
| Landscaper | 1 | Fiona Campbell |
| Handyman | 3 | Aoife Brennan, Patrick Maguire, Fiona Campbell (secondary trade) |
| Plasterer | 1 | Niamh Stewart (via Tiler) |
| Bricklayer | 0 | — |
| Appliance Repair | 0 | — |

---

## Matching Algorithm

```
1. FILTER by trade:
   - provider.trade === trade OR provider.trades.includes(trade)

2. FILTER by urgency (if provided):
   - Map urgency selection to allowed availability values (see AVAILABILITY_OPTIONS mapping above)
   - provider.availability must be in allowed set

3. SORT:
   - Primary: rating DESC
   - Secondary: reviewCount DESC

4. RETURN: all matching providers (no pagination for v1)
```

---

## Astro Content Collections

For trade landing pages, use Astro content collections:

```
src/content/trades/
  plumber.md
  electrician.md
  carpenter.md
  painter-and-decorator.md
  gas-engineer.md
  hvac-technician.md
  locksmith.md
  roofer.md
  tiler.md
  plasterer.md
  bricklayer.md
  landscaper.md
  cleaner.md
  handyman.md
  appliance-repair.md
```

Each markdown file frontmatter:
```yaml
---
title: "Find a Plumber in Northern Ireland"
trade: "Plumber"
slug: "plumber"
icon: "water"
color: "#0EA5E9"
description: "From burst pipes to bathroom installs, find verified plumbers available when you need them across NI."
ctaText: "Find a Plumber Now →"
---
```

Body: optional long-form SEO content below the fold.
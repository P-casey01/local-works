# ServiceMatch — Content & Copy

All text content for the website in one place. Reference these strings — no ad-hoc copy in code.

---

## Global

### Brand
- **Name:** ServiceMatch
- **Tagline:** Connecting NI with trusted local pros

### Footer
> ServiceMatch • Connecting NI with trusted local pros

### Disclaimer (provider pages)
> Always verify credentials and qualifications before hiring. ServiceMatch connects you — you choose.

---

## Homepage

### Hero
- **Headline:** Find the Right Pro
- **Subtitle:** Tell our chatbot what you need — we'll match you with vetted local professionals
- **CTA:** Start Chat → Find a Pro

### Trust Stats
| Value | Label |
|---|---|
| 2,400+ | Verified Pros |
| 98% | Satisfaction |
| <2hr | Avg Response |

### How It Works
| Step | Title | Description |
|---|---|---|
| 1 | Chat | Tell our bot what you need — trade, location, urgency |
| 2 | Match | We find the best local pros for your specific job |
| 3 | Connect | Contact your matched pro directly and get it sorted |

### Tradesperson CTA
- **Title:** Are you a tradesperson?
- **Description:** Create your free profile and get matched with customers in your area
- **Button:** Create Your Profile

---

## Chat Bot

### Messages (in flow order)

| Step | Bot Message |
|---|---|
| greeting | 👋 Hi! I'm ServiceMatch bot. I'll help you find the right professional for your job. Let's get started — what trade do you need? |
| location | {emoji} You selected {trade}. Great choice! Where are you located? (Town or postcode) |
| urgency | 📍 Got it, {location}. How urgent is this job? |
| jobSize | Roughly how big is the job? |
| description | Briefly describe what you need done (e.g., "leaking pipe under kitchen sink") |
| budget | 📝 Noted: "{description}". What's your budget range? |
| confirm | Perfect! I've found some matches for you. Let me show you the best professionals for your job. 🎉 |

### Chat Options
| Step | Options |
|---|---|
| greeting | All 15 trade names |
| urgency | Immediate / Emergency • This Week • Next Week • Flexible |
| jobSize | Small (under 2 hours) • Medium (2-4 hours) • Large (full day+) • Not sure yet |
| budget | Under £100 • £100-£300 • £300-£500 • £500+ • Not sure |
| confirm | Show me my matches! |

### Summary Bar
- **Label:** Your choices:
- **Chip format:** {Label}: {Value}

---

## Provider Results

### Summary
- **Title (N=1):** 1 Pro Found
- **Title (N≠1):** {N} Pros Found
- **Detail:** {trade} • {location} • {urgency}
- **Description:** "{description}" (italic, quoted)

### Empty State
- **Title:** No matches found
- **Description:** Try adjusting your requirements or searching a different trade
- **Action:** Try a different search →

---

## Provider Detail

### Verified Badge
> ✓ Verified Professional

### Section Titles
| Section | Title |
|---|---|
| Availability | Availability |
| Skills | Skills & Services |
| About | About |
| Contact | (no title, just buttons) |

### Contact Buttons
- **Call:** 📞 Call Now
- **Email:** ✉️ Send Email

---

## Trade Landing Pages

### Hero Template
- **Title:** Find a {Trade} in Northern Ireland
- **CTA:** Find a {Trade} Now →

### Trade Descriptions (unique per trade)

| Trade | Description |
|---|---|
| Plumber | From burst pipes to bathroom installs, find verified plumbers available when you need them across NI. |
| Electrician | NIC EIC approved electricians for rewires, fuse box upgrades, EV chargers and more. |
| Carpenter | Master carpenters for bespoke joinery, kitchen fitting, flooring and custom furniture. |
| Painter & Decorator | Award-winning painters for interior, exterior and commercial work. Free colour consultation. |
| Gas Engineer | Gas Safe registered engineers for boiler installs, servicing and emergency repairs. |
| HVAC Technician | Qualified HVAC technicians for heat pumps, air conditioning and climate control. |
| Locksmith | 24/7 emergency locksmiths. No callout fee. UPVC, smart locks and access control. |
| Roofer | Experienced roofers for repairs, new roofs, flat roofing and storm damage. |
| Tiler | Professional tilers for bathrooms, kitchens, floors and walls. Free tile selection advice. |
| Plasterer | Skilled plasterers for smooth finishes, rendering and decorative work. |
| Bricklayer | Expert bricklayers for new builds, extensions, walls and structural work. |
| Landscaper | Full garden transformation — design to completion. Patios, fencing, artificial grass. |
| Cleaner | Professional domestic and commercial cleaning. Fully insured. Eco-friendly available. |
| Handyman | Multi-skilled handymen for all those jobs you never get around to. |
| Appliance Repair | Fast appliance repair for washing machines, dishwashers, ovens and more. |

### Tradesperson CTA Variant
- **Title:** Are you a {trade}?
- **Description:** Create your free profile and get matched with customers looking for {trade}s in your area
- **Button:** Create Your Profile

### No Providers Fallback
> Join as the first {trade} on ServiceMatch →

---

## Signup

### Intro
- **Icon:** 👷
- **Text:** Create your professional profile so customers can find you

### Section Labels
| Section | Label |
|---|---|
| Personal Info | Personal Info |
| Trades | Your Trades |
| Skills | (no section label, just placeholder) |
| Location & Rates | Location & Rates |
| Availability | Availability |
| Bio | (field label: Bio / About You) |

### Placeholders
| Field | Placeholder |
|---|---|
| Skills | e.g., Leak repair, Boiler service, Rewiring |
| Bio | Tell customers about your experience and expertise... |
| Location | (none, required) |
| Radius | (default: 20) |

### Button
- **Create:** Create Profile
- **Saving:** Saving...
- **Edit:** Update Profile

### Success Alert
- **Title:** Profile Created! ✅
- **Message:** Your profile is now live. You'll appear in customer matches.
- **Action:** View My Profile

### Edit Success Alert
- **Title:** Profile Updated! ✅
- **Message:** Your profile has been updated.

### Validation Errors
| Field | Error Message |
|---|---|
| Name | Name is required |
| Trades | Select at least one trade |
| Location | Location is required |
| Hourly rate | Hourly rate is required |
| Contact | Phone or email is required |

---

## Profile

### Empty State
- **Title:** No Profile Yet
- **Description:** Create your professional profile to start getting matched with customers
- **Button:** Create Profile

### Verification Badges
| Status | Badge |
|---|---|
| Verified | ✓ Verified Professional |
| Pending | ⏳ Verification Pending |

### Edit Button
> ✏️ Edit Profile
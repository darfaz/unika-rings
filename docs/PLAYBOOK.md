# 💍 Unika Rings — DIY Kickstarter Launch Playbook
### *Reverse-Engineered from the EaziStep LaunchBoom Setup*
*Created by Leo for Nika & Dar — Feb 18, 2026*

---

## What LaunchBoom Actually Does (Demystified)

I logged into the EaziStep LaunchBoom account and mapped every feature. Here's the truth: **LaunchBoom's "Launchkit" is a reservation funnel builder + analytics dashboard.** That's it. Everything it does, you can replicate with free/cheap tools. Here's exactly how.

---

## 🏗️ The LaunchBoom Funnel (What EaziStep Has)

LaunchBoom builds a 3-page funnel:

### Page 1: Landing Page
- Hero image/video of the product
- Value proposition headline
- Email capture form → adds to Mailchimp list
- "Get VIP Access" or "Join the Waitlist" CTA

### Page 2: Reservation Page
- **EaziStep's headline:** "Unlock 40% OFF EaziStep Scooter-Crutch Today"
- Explains the VIP deal (pay $1 now, get exclusive discount on launch day)
- Stripe checkout for $1 reservation deposit
- Refund guarantee messaging: "Full refund at any time before production"
- Disclaimer: "Still in development, final designs may change"

### Page 3: Reserved/Thank You Page
- Confirmation: "By reserving you can purchase EaziStep at the lowest possible price"
- "Check your email for receipt and more info"
- Social sharing prompts

### Behind the Scenes:
- **Stripe** collects $1 reservations (live keys, real charges)
- **Mailchimp** captures all emails (API key + list ID)
- **Facebook Pixel** (ID: 1049909752851124) tracks conversions
- **Facebook Ad Account** (ID: 854610026251511) runs ads
- **Google Analytics** for traffic tracking
- **Custom domain** (prelaunch.eazistep.com) with Cloudflare
- **ShipStation** integration for fulfillment
- **Link Builder** for UTM-tagged campaign links

---

## 🛠️ DIY Unika Rings Setup — Tool-by-Tool

Here's how to build the exact same thing without paying LaunchBoom:

### 1. Landing Page + Reservation Funnel

**Free/Cheap Options:**
| Tool | Cost | Why |
|------|------|-----|
| **Carrd.co** | $19/yr | Dead simple, beautiful one-pagers, Stripe integration |
| **Webflow** | $14/mo | More design control, great templates |
| **Leadpages** | $37/mo | Built for landing pages + conversions |
| **Unbounce** | $74/mo | A/B testing built in |

**🏆 Recommendation: Carrd.co** — $19/year, supports Stripe, custom domains, forms. Build all 3 pages for under $20.

**Page structure to replicate:**

**Landing Page (unikarings.com or prelaunch.unikarings.com):**
```
Hero Section:
- High-quality lifestyle photo of Oura Ring with Unika cover
- Headline: "Finally, Your Oura Ring Can Match Your Style"
- Subheadline: "Premium decorative covers that transform your health tracker into jewelry"
- CTA Button: "Get VIP Launch Pricing →"
- Email capture form

Social Proof Section:
- "Join [X] others waiting for launch"
- Press logos (after you get any coverage)

Product Preview Section:
- 3-4 cover designs shown on Oura Rings
- "Snap-on. Swap out. Stand out."

How It Works:
- 1. Choose your style
- 2. Snap it onto your Oura Ring (Gen 3 or 4)
- 3. Change your look in seconds

FAQ Section:
- Will it affect my Oura sensors? (No — open-bottom design)
- What Oura models does it fit? (Gen 3 + Gen 4)
- When does it ship? (Est. [date])
```

**Reservation Page:**
```
Headline: "Lock In 40% OFF Unika Rings — VIP Access"
Body: "Reserve your spot with just $1. You'll get:"
- ✅ 40% off retail price on launch day
- ✅ First access before public launch
- ✅ Exclusive backer-only designs
- ✅ Full refund guarantee anytime before production

[Stripe $1 Payment Button]

"Your $1 deposit is applied to your order. Cancel anytime for a full refund."
```

**Thank You Page:**
```
"You're In! 🎉"
"Check your email for your receipt and VIP details."
"Share with friends who have an Oura Ring:"
[Social share buttons]
[Referral program link if using Viral Loops]
```

### 2. Payment Processing (Stripe)

**Setup:**
1. Create Stripe account at stripe.com (free, takes 10 min)
2. Create a Product: "Unika Rings VIP Reservation"
3. Set price: $1.00 USD
4. Get your Publishable Key (pk_live_xxx) and Secret Key (sk_live_xxx)
5. Connect to Carrd or your landing page builder

**EaziStep's config:**
- Reservation cost: $1.00
- Currencies accepted: USD, INR, EUR, GBP, AUD, CAD
- Apple/Google Pay: enabled
- Billing address collection: enabled
- Phone collection: enabled

**For Unika:** Start with USD only. Enable Apple Pay/Google Pay (huge conversion boost on mobile).

### 3. Email Marketing (Mailchimp or Better)

**EaziStep uses:** Mailchimp (API key + server us12 + list ID)

**Better alternatives for 2026:**
| Tool | Free Tier | Why Better |
|------|-----------|-----------|
| **Mailchimp** | 500 contacts | Industry standard, LaunchBoom default |
| **MailerLite** | 1,000 contacts | Better free tier, simpler UI |
| **ConvertKit** | 1,000 contacts | Built for creators, great automations |
| **Beehiiv** | 2,500 contacts | Newsletter-first, referral system built in |

**🏆 Recommendation: MailerLite** — Free up to 1,000 contacts, great automation, landing page builder included.

**Email Sequence to Build (copy EaziStep's approach):**

| Day | Email | Subject Line Idea |
|-----|-------|-------------------|
| 0 | Welcome + what to expect | "You're in! Here's what happens next 💍" |
| 2 | Founder story (Nika's story) | "Why I'm building this (it started with my own Oura)" |
| 5 | Product deep-dive | "The engineering behind a perfect snap-fit" |
| 10 | Social proof / early traction | "[X] people are waiting — here's why" |
| 14 | Behind the scenes | "Sneak peek: new designs just arrived 👀" |
| 21 | Urgency / reservation push | "VIP spots are filling up" |
| Launch Day | "WE'RE LIVE" | "🚀 Unika Rings is LIVE on Kickstarter — claim your 40% off" |
| Launch +1 | Reminder | "24 hours in: [X]% funded!" |
| Launch +3 | Social proof | "What backers are saying..." |

### 4. Facebook/Meta Ads

**EaziStep's setup:**
- Facebook Pixel ID: 1049909752851124
- Ad Account ID: 854610026251511

**For Unika Rings:**
1. Create a Facebook Business Manager account (business.facebook.com)
2. Create a Pixel → install on your landing page
3. Set up conversion events: PageView, Lead (email), Purchase ($1 reservation)
4. Create Custom Audiences:
   - Website visitors (retargeting)
   - Email list (lookalike)
   - Interest targeting: Oura Ring, WHOOP, Garmin, Fitbit, smart rings, wearable tech, jewelry

**Ad Budget Guide:**
| Phase | Daily Budget | Duration | Total |
|-------|-------------|----------|-------|
| Testing (5 ad sets) | $10-20/day | 2 weeks | $140-280 |
| Scaling winners | $30-50/day | 4 weeks | $840-1,400 |
| Launch week boost | $50-100/day | 1 week | $350-700 |
| **Total pre-launch** | | | **$1,330-2,380** |

**Ad Creative Ideas:**
- Before/after: plain Oura → styled with Unika cover
- "POV: Your Oura Ring finally looks like jewelry"
- Lifestyle shots: hands with Unika-covered Oura at brunch, gym, wedding
- UGC-style: Nika showing the snap-on process (15-sec Reel)

### 5. Analytics & Tracking

**EaziStep uses:** Google Analytics + Facebook Pixel + LaunchBoom dashboard

**DIY equivalent:**
- **Google Analytics 4** (free) — install on all pages
- **Facebook Pixel** (free) — conversion tracking
- **UTM Parameters** — track which ads/links drive reservations
- **Simple spreadsheet** to track daily: visitors, emails, reservations, ad spend, CPL

**Key Metrics to Track (LaunchBoom's dashboard tracks these):**
| Metric | Formula | Target |
|--------|---------|--------|
| Cost Per Lead (CPL) | Ad spend ÷ emails collected | < $3 |
| Lead → Reservation rate | Reservations ÷ leads | > 10% |
| Cost Per Reservation (CPR) | Ad spend ÷ reservations | < $15 |
| Landing page conversion | Emails ÷ page visitors | > 25% |
| Reservation page conversion | Payments ÷ email signups | > 15% |

### 6. Custom Domain & Hosting

**EaziStep uses:** prelaunch.eazistep.com with Cloudflare

**For Unika:**
1. Register **unikarings.com** (or similar) — ~$12/year on Namecheap/Cloudflare
2. Point to Carrd/Webflow/whatever you use
3. Add Cloudflare (free) for SSL + protection + speed
4. Create CNAME: `prelaunch.unikarings.com` → your landing page

### 7. Fulfillment (Post-Campaign)

**EaziStep uses:** ShipStation + Shopify

**For Unika (simpler start):**
- **Shopify** ($29/mo) for post-KS orders + ongoing store
- **ShipStation** ($25/mo) or **Pirate Ship** (free, pay per label) for shipping
- **BackerKit** for Kickstarter pledge management + surveys

---

## 💰 Total DIY Cost vs. LaunchBoom

| Item | LaunchBoom | DIY |
|------|-----------|-----|
| Platform fee | $5,000-15,000+ | $0 |
| Landing page | Included | $19/yr (Carrd) |
| Email marketing | Included (Mailchimp) | $0 (MailerLite free) |
| Stripe | Included | $0 (2.9% + 30¢/txn) |
| Domain | Your own | $12/yr |
| Facebook Ads | Your budget | Your budget |
| Analytics | Included | $0 (GA4 free) |
| **Total platform cost** | **$5,000-15,000** | **~$31/year** |

**What you lose without LaunchBoom:**
- Their coaching calls and strategy advice (but you have this playbook + Leo)
- Their ad templates and copy frameworks (replicated above)
- Their managed A/B testing (Carrd Pro has this)
- Their analytics dashboard (spreadsheet works fine)

**What you keep:**
- $5,000-15,000 in your pocket
- Full control over everything
- Same exact funnel structure

---

## 📅 Unika Rings — 10-Week Launch Timeline

| Week | Tasks |
|------|-------|
| **1** | Register domain, set up Stripe, create Mailchimp/MailerLite account |
| **1** | Nika: finalize 4 hero designs, get product photos (even 3D renders work) |
| **2** | Build landing page (Carrd), reservation page, thank you page |
| **2** | Install Facebook Pixel + Google Analytics |
| **3** | Write email sequence (7 pre-launch + 3 launch emails) |
| **3** | Create Facebook Business Manager, set up ad account |
| **4** | Design ad creatives (5-10 variations) |
| **4** | Launch ads at $10-20/day testing phase |
| **5-6** | Optimize ads — kill losers, scale winners |
| **5-6** | Build Kickstarter campaign page (draft) |
| **7** | Kickstarter page review + video production |
| **7** | Ramp up ad spend to $30-50/day |
| **8** | Final pre-launch email push, social media blitz |
| **8** | Submit Kickstarter for review (takes 3-5 days) |
| **9** | **🚀 LAUNCH DAY** — email blast, social posts, ad boost |
| **9-12** | Campaign management, stretch goals, press outreach |

---

## 🎯 Kickstarter Page Blueprint

Based on successful accessory campaigns:

**Video (2-3 min):**
1. Hook: Show ugly Oura → beautiful Unika-covered Oura (5 sec)
2. Problem: "You love your Oura Ring... but it doesn't love your outfit"
3. Solution: Unika Rings — snap-on decorative covers
4. Demo: Show how easy it is to snap on/off
5. Designs: Showcase the collection
6. Social proof: Testimonials from beta testers
7. CTA: "Back us today for 40% off"

**Page sections:**
1. Hero image + short pitch
2. "Why Unika?" — the problem/solution
3. Product showcase — all designs
4. How it works — 3 steps with images
5. Compatibility — Gen 3 + Gen 4, all sizes
6. Reward tiers — with clear comparison table
7. Timeline — when backers get their covers
8. About us — Nika's story
9. FAQ
10. Risks & challenges (Kickstarter requires this)

---

## 🔑 Key Lessons from EaziStep Setup

1. **$1 reservation is the magic number** — low enough anyone will pay, high enough to filter tire-kickers
2. **40% off VIP pricing** — creates urgency and reward for early supporters
3. **Refund guarantee** — removes all risk ("full refund anytime before production")
4. **Multi-currency** — EaziStep accepts USD, INR, EUR, GBP, AUD, CAD (go global from day 1)
5. **Facebook ads are the main driver** — pixel + retargeting + lookalike audiences
6. **Email nurture is critical** — the emails convert reservations into backers on launch day
7. **Disclaimer about development** — manage expectations ("designs may change")
8. **Custom domain** — looks more professional than a LaunchBoom subdomain

---

## 📝 Immediate Action Items

### For Nika:
- [ ] Pick a brand name (Unika Rings? Something else?)
- [ ] Finalize 4-6 launch designs
- [ ] Get product photos or 3D renders on actual Oura Rings
- [ ] Write a short "why I'm building this" founder story
- [ ] Source 2-3 manufacturers for quotes (I can help search Alibaba)

### For Dar + Leo:
- [ ] Register domain
- [ ] Set up Stripe account under Nika's name/business
- [ ] Build the 3-page funnel on Carrd
- [ ] Set up MailerLite + email sequence
- [ ] Create Facebook Business Manager + Pixel
- [ ] Design first round of ad creatives
- [ ] Draft Kickstarter campaign page

---

*This playbook gives you everything LaunchBoom provides, for ~$31/year instead of $5,000-15,000. The only thing money can't replace is hustle — and you've got that.* 🦁

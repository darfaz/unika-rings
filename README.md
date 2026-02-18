# Unika Rings — Launch Funnel

Premium decorative covers for Oura Ring. Pre-launch reservation funnel + Kickstarter campaign toolkit.

## What This Is

A complete, self-hosted launch funnel for hardware/consumer product Kickstarter campaigns. Built for Unika Rings first, designed to be reusable.

### Stack
- **Frontend:** Static HTML/CSS/JS (zero framework, fast, deployable anywhere)
- **Payments:** Stripe Checkout ($1 reservation deposits)
- **Email:** MailerLite API (email capture + automation triggers)
- **Analytics:** Google Analytics 4 + Meta Pixel
- **Hosting:** Vercel/Netlify/Cloudflare Pages (free tier)
- **Backend:** Serverless functions (Vercel/Netlify) for Stripe + email webhooks

### Pages
1. `/` — Landing page (email capture)
2. `/reserve` — Reservation page (Stripe $1 checkout)
3. `/confirmed` — Thank you / confirmation
4. `/refer` — Referral program page

### Why Not WordPress/Carrd/etc?
- Full control over design and data
- No monthly platform fees
- Can be white-labeled and resold
- Loads in <1 second (static files)
- Own your funnel, own your data

## Quick Start

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Deploy
npm run deploy
```

## Project Structure

```
unika-rings/
├── public/              # Static assets (images, fonts)
├── src/
│   ├── pages/           # HTML pages
│   │   ├── index.html   # Landing page
│   │   ├── reserve.html # Reservation page
│   │   └── confirmed.html # Thank you page
│   ├── css/
│   │   └── styles.css   # All styles
│   ├── js/
│   │   ├── main.js      # Shared logic
│   │   ├── stripe.js    # Payment handling
│   │   ├── email.js     # Email capture
│   │   └── analytics.js # Tracking
│   └── api/             # Serverless functions
│       ├── checkout.js   # Create Stripe session
│       ├── webhook.js    # Stripe webhook handler
│       └── subscribe.js  # Email signup handler
├── config/
│   ├── content.json     # All copy/text (easy to swap for new products)
│   └── design.json      # Colors, fonts, layout config
├── docs/
│   ├── PLAYBOOK.md      # Full launch playbook
│   ├── EMAILS.md        # Email sequence templates
│   └── ADS.md           # Ad copy + targeting guide
├── .env.example
├── package.json
└── README.md
```

## Reusability

Everything product-specific lives in `config/content.json` and `config/design.json`. To launch a different product:

1. Update `content.json` with new product name, descriptions, images
2. Update `design.json` with new brand colors/fonts
3. Update `.env` with new Stripe/email/analytics keys
4. Deploy

## License

Private — All rights reserved.

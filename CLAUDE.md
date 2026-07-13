# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Monorepo for Fiftify landing pages — mobile apps (`unboxity`, `fiftify-mobile`) and the `bovio` Discord bot. Each app gets its own folder of static HTML, deployed to **Cloudflare**.

## Architecture

- **Zero build step** — static HTML, no bundlers, no frameworks, no npm
- Each app folder is an independent Cloudflare **Worker serving static assets** — `wrangler.jsonc` sets `"assets": { "directory": "." }`, and the Worker's *root directory* is the folder name. Despite the "Workers & Pages" dashboard, these are **Workers, not Pages projects**: copy a sibling `wrangler.jsonc` rather than writing a `pages_build_output_dir` one.
- Font: Inter (Google Fonts CDN); the Discord-bot landing adds JetBrains Mono for code/report mock-ups
- Mobile-first responsive, each landing visually unique

**Two styling approaches — both fine, pick one per landing and stay consistent inside it:**

- **Tailwind via CDN** (`unboxity`, `fiftify-mobile`, `bovio`) — config inline in a `<script>` tag. Fastest to write.
- **Self-contained `assets/css/site.css`** — CSS custom properties + hand-written component classes. Lighter (no ~400 KB of CDN JS), no flash of unstyled content, and lets the page mirror an external palette exactly. Preferred when the landing must match a product's real UI colours.

Do **not** load the Tailwind CDN if the page doesn't actually use Tailwind classes.

## Conventions

- Each landing must be visually unique — custom colors, gradients, and styling per app
- Terms and Privacy pages are tailored to the app's actual third-party services and technologies (e.g. Supabase, AdMob, Sentry; or Discord API, Cloudflare, Postgres)
- **JavaScript:** keep it near-zero. Small progressive-enhancement snippets are allowed where CSS genuinely can't do the job. No frameworks, no analytics, no trackers.
- Absolute asset paths (`/assets/...`) — so **opening a file directly in the browser won't load CSS/images**. Serve it over HTTP to preview (see below).
- **Link without the `.html`** — the Worker serves `/terms.html` as a redirect to `/terms`. Internal links, `canonical`, `og:url` and `sitemap.xml` must all point at the extensionless URL, or every page canonicalises to a URL that redirects.

## Page Set

| File | When |
|---|---|
| `index.html`, `terms.html`, `privacy.html` | Every landing |
| `refund.html` | Paid product |
| `support.html` | Discord apps — required for verification/monetization |
| `404.html`, `robots.txt`, `sitemap.xml`, `site.webmanifest`, `_headers`, `_redirects`, `wrangler.jsonc` | Recommended everywhere; see `bovio/` for the pattern |
| `legal/*.md` | Markdown sources of the legal pages |

SEO depth to match: canonical, full Open Graph + Twitter card, `SoftwareApplication` JSON-LD (with `offers` for paid tiers), `FAQPage` JSON-LD if the page has an FAQ.

## Discord-Bot Landings

- The **OAuth invite link's `permissions=` bitmask must grant every permission the bot checks before it acts.** Getting this wrong is invisible on the site and breaks onboarding at the first command — check the bot's own required-permissions constant, don't guess.
- Add `integration_type=0` for guild-only bots so Discord doesn't offer a user install.
- **`_redirects` holds OAuth links too.** Any pass that updates a client id or permission bitmask across `*.html` will silently skip it.
- Discord is the merchant of record for Premium Apps — the refund page must say refunds go through Discord, and still give a support contact.
- Discord sells at fixed price points ($4.99, $9.99, …), not round numbers. Take the price from the actual SKU, not the plan you sketched.
- Monetization is a chicken-and-egg: Discord won't issue SKUs until a live landing describes what's being sold. Ship the landing first.

## Local Preview

Absolute paths need a server — `file://` renders unstyled. From the repo root:

```bash
node scripts/serve.js bovio            # → http://localhost:8899
node scripts/serve.js unboxity 3000
```

It serves the folder as a site root, sends `no-store` (so edits show on reload), and falls through to `404.html` like the deployed Worker does.

## Adding a New Landing

1. Create a folder named after the app
2. Build `index.html` with a unique design (pick a styling approach from above)
3. Create the legal/support pages the product actually needs, listing its real third-party services
4. Copy a sibling `wrangler.jsonc` (its `name` must match the Worker name in Cloudflare) and deploy with *root directory* = folder name

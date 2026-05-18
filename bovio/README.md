# Bovio Landing

Static site for [bovio.fiftify.com](https://bovio.fiftify.com) — the public landing page and legal pages for the Bovio Discord bot.

## Files

| Path | Published URL | Purpose |
|---|---|---|
| `index.html` | `/` | Marketing landing page with "Add to Discord" CTA |
| `privacy.html` | `/privacy` | Privacy Policy (required by Discord verification) |
| `terms.html` | `/terms` | Terms of Service (required by Discord verification) |
| `refund.html` | `/refund` | Refund Policy (required for Discord Premium Apps) |
| `support.html` | `/support` | Commands reference, FAQ, contact |
| `legal/*.md` | — | Canonical Markdown source for the legal docs; not served |
| `assets/svg/*.svg`, `assets/png/*.png` | `/assets/...` | Brand assets (mark, wordmark, lockups, avatar, OG image) |
| `wrangler.jsonc` | — | Cloudflare Pages config |

## Stack

Pure HTML + Tailwind CSS (CDN) — no build step, matching the rest of this monorepo. Font: Inter + JetBrains Mono via Google Fonts.

## Deploy to Cloudflare Pages

1. **Cloudflare dashboard** → *Workers & Pages* → *Create application* → *Pages* → *Connect to Git* → pick the `fiftify-inc/app-landings` repo.
2. **Build settings:**
   - Project name: `bovio`
   - Production branch: `master`
   - Build command: *(leave blank)*
   - Build output directory: `/`
   - **Root directory: `bovio`**
3. **Save and Deploy.** Cloudflare gives you a `bovio.pages.dev` URL.

## Custom domain

1. In the Pages project → *Custom domains* → *Set up a custom domain* → enter `bovio.fiftify.com`.
2. Cloudflare auto-creates the DNS record on the `fiftify.com` zone if it's also on Cloudflare. Otherwise add a CNAME manually:
   ```
   bovio.fiftify.com  CNAME  bovio.pages.dev
   ```
3. SSL is provisioned automatically.
4. **Add `bovio.fiftify.com` to the zone-wide WAF allow-list** — see [root README](../README.md#waf-allow-list-for-new-subdomains). Otherwise every request returns 403 even though deploy succeeded.

## Updating legal text

The canonical source for the legal pages is the Markdown in [`legal/`](./legal/). When changing wording:

1. Edit the Markdown.
2. Mirror the change in the corresponding `*.html` file.
3. Bump **Effective date** and **Version** at the top of both.
4. See [`legal/README.md`](./legal/README.md) for the re-review cadence and pre-publication checklist.

## Discord Developer Portal

After deploy, set these URLs in the [Discord Developer Portal](https://discord.com/developers/applications) → Bovio app → *General Information*:

- **Privacy Policy URL:** `https://bovio.fiftify.com/privacy`
- **Terms of Service URL:** `https://bovio.fiftify.com/terms`

The Refund Policy URL is referenced from the App Directory listing description and the in-bot `/help` command.

## Brand assets

Logo files live in [`assets/`](./assets/). Same pack as `tmp/bovio-brand/`, see [`tmp/bovio-brand/README.md`](../tmp/bovio-brand/README.md) for what each file is for.

Used in the site:
- **Favicon** — `assets/svg/bovio-avatar.svg` (with PNG fallback)
- **Apple touch icon** — `assets/png/bovio-avatar-1024.png`
- **Nav + footer mark** — `assets/svg/bovio-mark.svg`
- **OG / social image** — `assets/png/bovio-embedded-1280.png`
- **Discord bot avatar** — upload `assets/png/bovio-avatar-1024.png` in the Developer Portal

## OAuth install URL

The "Add to Discord" CTA points to:

```
https://discord.com/oauth2/authorize?client_id=1504760228053258310&permissions=2147502080&integration_type=0&scope=bot
```

Change `client_id` and `permissions` here and in every `*.html` file if the bot's Discord application ID changes.

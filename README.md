# App Landings

Monorepo for Fiftify mobile app landing pages. Each app is a separate folder with static HTML files, deployed to Cloudflare Pages.

## Structure

```
app-landings/
├── unboxity/              ← unboxity.fiftify.com
│   ├── index.html
│   ├── terms.html
│   └── privacy.html
├── fiftify-mobile/        ← mobile.fiftify.com
│   ├── index.html
│   ├── terms.html
│   └── privacy.html
├── bovio/                 ← bovio.fiftify.com (Discord bot)
│   ├── index.html
│   ├── terms.html
│   ├── privacy.html
│   ├── refund.html        ← required for Discord Premium Apps
│   ├── support.html
│   └── legal/             ← Markdown source for policy review
└── ...
```

## Hosting

- **Cloudflare Pages** — each folder is deployed as a separate Pages project
- Set `root directory` = folder name when creating a Pages project (e.g. `unboxity/`)
- Each project gets its own subdomain via Cloudflare

## Tech Stack

- Pure HTML + Tailwind CSS (CDN) — zero build step
- Responsive design (mobile-first)
- No frameworks, no JS bundlers

## Landing Page Requirements

- Each landing is **unique** — custom design, style, colors for each app
- 3-6 sections/screens on the main page
- Required pages: Terms of Service, Privacy Policy
- Terms/Privacy are generated for the specific technologies the app uses

## Workflow for a New Landing

1. Create a folder with the app name
2. Build a unique landing page (`index.html`)
3. Generate Terms and Privacy with the list of specific technologies used
4. Push → set up Cloudflare Pages project with `root directory` = folder
5. Connect custom subdomain
6. **Add the new subdomain to the WAF allow-list** (see below) — otherwise the zone-wide custom rule will return 403 for all requests

## WAF allow-list for new subdomains

The `fiftify.com` Cloudflare zone has a **WAF Custom Rule** named **"Block unknown hostnames"** that blocks every request whose `Hostname` is not in an explicit allow-list. This protects unused subdomains from being abused (spam DNS, phishing setups, etc.).

**When you add a new subdomain, you MUST add it to this rule's allow-list, or it will return 403 for every request, even after a successful Worker / Pages deploy.**

Where to find it:

1. Cloudflare dashboard → `fiftify.com` zone
2. Left sidebar: **Security → Security rules** (or *Security → WAF → Custom rules* in older UI)
3. Open the rule **"Block unknown hostnames"**
4. Under *Value*, add the new hostname (e.g. `bovio.fiftify.com`) to the chip list
5. Save

The rule expression looks like:

```
(not http.host in {"fiftify.com" "www.fiftify.com" "api.fiftify.com" ... "bovio.fiftify.com"})
```

Action: **Block**. Placed after the rule named `Shevaldin` in the custom-rules order.

**Symptom of forgetting this step:** `curl -I https://<new-subdomain>.fiftify.com/` returns `HTTP/2 403` with `cf-mitigated: block`, even though the Worker/Pages deploy succeeded and the DNS record is correctly proxied.

# App Landings

Monorepo for Fiftify mobile app landing pages. Each app is a separate folder with static HTML files, deployed to Cloudflare Pages.

## Structure

```
app-landings/
├── unboxity/
│   ├── index.html        ← landing page
│   ├── terms.html        ← Terms of Service
│   └── privacy.html      ← Privacy Policy
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

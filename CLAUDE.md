# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Monorepo for Fiftify mobile app landing pages. Each app gets its own folder with static HTML files, deployed to **Cloudflare Pages**.

## Architecture

- **Zero build step** — pure HTML + Tailwind CSS (via CDN script tag), no bundlers or frameworks
- Each app folder (e.g., `unboxity/`) is an independent Cloudflare Pages project with `root directory` set to the folder name
- Every app landing has 3 files: `index.html` (landing page), `terms.html` (Terms of Service), `privacy.html` (Privacy Policy)
- Font: Inter (Google Fonts CDN). Tailwind config is inline via `<script>` tag in each file
- Landing pages are mobile-first responsive, each with a unique design/color scheme

## Conventions

- Each landing must be visually unique — custom colors, gradients, and styling per app
- Landing pages have 3-6 sections (nav, hero, features, use cases, CTA, footer)
- Terms and Privacy pages are tailored to the specific technologies each app uses (e.g., list actual third-party services like Supabase, AdMob, Sentry)
- Links between pages use relative paths (`terms.html`, `privacy.html`, `/`)
- No JavaScript beyond the Tailwind CDN config script

## Adding a New Landing

1. Create a folder named after the app
2. Build `index.html` with unique design
3. Create `terms.html` and `privacy.html` listing the app's actual third-party services and technologies
4. Deploy via Cloudflare Pages with `root directory` = folder name

# Bovio — Legal Source

This directory holds the **canonical Markdown source** of the legal documents published on `bovio.fiftify.com`:

- [`privacy-policy.md`](./privacy-policy.md) — published at `/privacy`
- [`terms-of-service.md`](./terms-of-service.md) — published at `/terms`
- [`refund-policy.md`](./refund-policy.md) — published at `/refund`

The matching HTML files (`../privacy.html`, `../terms.html`, `../refund.html`) are the user-facing version. When you change the Markdown, mirror the change in the HTML and bump the **Effective date** + **Version** at the top.

## Status

These are **draft v1**, written by the engineering team to accurately describe what Bovio actually does. They have **not yet been reviewed by qualified legal counsel.** Inline annotations marked `[review with lawyer]` flag spots where conservative assumptions were made and where legal sign-off is most important.

## What still needs human input

| Item | Current value (placeholder-resolved) | Needs review |
|---|---|---|
| Operator | Fiftify Inc., 1111B S Governors Ave, STE 23190, Dover, DE 19904, USA | Confirmed via existing `unboxity/` landing |
| Effective date | 2026-05-16 (draft publication) | Reset to actual publication date on go-live |
| Governing law | State of Delaware, USA | Brief mentioned Ukraine; if a Ukraine entity becomes the operator, revise § 12 (Privacy) and § 13 (Terms) |
| Dispute resolution | AAA arbitration in Delaware | Mirrors unboxity; revise if jurisdiction changes |
| Contact email | `info@fiftify.com` (single mailbox for privacy / support / legal / security) | If separate addresses are stood up (`privacy@`, `support@`, etc.), search-and-replace |
| Sub-processor list | Discord, Fly.io, Stripe (via Discord) | Re-check whenever a new processor is added — e.g. Sentry, analytics, email provider |
| Subscription retention | "typically 7 years for US financial records" | Confirm against actual tax-residence requirements |
| Staff-with-production-access count | "a small number" | Replace with exact number if disclosure is required |

## Re-review cadence

- When any new sub-processor is added (e.g. Sentry, analytics)
- When the data model materially changes (new entities collecting personal data)
- When the premium offering changes (price, refund policy, free-trial introduction)
- When the operating entity or jurisdiction changes
- At least once every 12 months for compliance freshness

When republishing: update **Effective date** and **Version** at the top of the Markdown and HTML; prior versions live in this repo's git history.

## Pre-publication checklist

- [ ] Lawyer-reviewed and approved for the current operating entity / jurisdiction
- [ ] Cross-referenced against Discord's [Developer Terms of Service](https://discord.com/developers/docs/policies-and-agreements/terms-of-service) and [Developer Policy](https://discord.com/developers/docs/policies-and-agreements/developer-policy)
- [ ] Effective date set to actual publication date
- [ ] All `[review with lawyer]` annotations resolved or accepted
- [ ] Privacy URL and Terms URL added in Discord Developer Portal → App → General Information
- [ ] `info@fiftify.com` (or split addresses) mailbox monitored

# Bovio — Refund Policy

> **Working draft.** This policy is the engineering team's accurate baseline of how Bovio Premium refunds work, aligned with Discord's Premium Apps standard. It has not yet been reviewed by qualified legal counsel.

**Effective date:** 2026-05-16
**Version:** draft-1
**Operator:** Fiftify Inc., a Delaware corporation, 1111B S Governors Ave, STE 23190, Dover, DE 19904, USA
**Contact:** info@fiftify.com

## 1. Summary

**You can request a refund within 3 days of purchase if you have not used Bovio Premium features.**

After 3 days, or once premium features have been used, refunds are not generally available — except in the narrow cases described in § 4 below. You can cancel auto-renewal at any time from your Discord User Settings; access continues until the end of the paid period.

## 2. How Bovio Premium is billed

Bovio Premium is sold through Discord's Premium Apps system as a **per-server monthly subscription** at $4.99 USD / month. Discord (not Fiftify Inc.) processes the payment, manages the subscription lifecycle, and applies its own refund flow.

Because Discord is the merchant of record:
- You see the charge from Discord, not from Bovio or Fiftify Inc.
- Refunds, when granted, are issued by Discord to the payment method you originally used.
- We never see or store your payment card details.

## 3. The 3-day refund window

Per Discord's standard refund policy for Premium Apps, you are eligible for a full refund if **both** of the following are true:

- Fewer than 3 calendar days have passed since the original purchase (not since renewal — see § 5)
- No premium-only features of Bovio have been used by any member of the server since purchase. "Used" means any action gated behind a premium entitlement check — for example, starting a 5-digit or 6-digit game, running a tournament, opening admin analytics, etc.

We rely on the entitlement-check audit log in our database to determine whether premium features have been used. The check is conservative: any single use disqualifies an automatic refund.

## 4. Exceptional cases after the 3-day window

We will consider refund requests outside the 3-day window in narrow circumstances, including:

- **Service outage:** Bovio was down for a substantial portion of the billing period (more than 24 cumulative hours) and you had no meaningful access to premium features
- **Material misrepresentation:** a documented premium feature was unavailable, broken, or not delivered as described in the App Directory listing for the duration of the billing period
- **Mandatory consumer-protection law:** where local law in your jurisdiction (e.g. EU consumer rights) requires a refund or cooling-off period beyond Discord's policy, we will honour it
- **Accidental duplicate purchase:** verifiably unintentional charges (subject to our own check of usage)

Approval of an exceptional refund is at our reasonable discretion. We will not unreasonably refuse a clearly merited request.

## 5. Auto-renewal and partial periods

Bovio Premium auto-renews monthly until you cancel. To stop future charges:

1. Open Discord → User Settings → Subscriptions
2. Find your Bovio Premium subscription
3. Click **Cancel Subscription**

Cancellation takes effect at the **end** of the current billing period. You keep access to premium features until then. We do not pro-rate or refund the remainder of an active billing period after cancellation, except under § 4.

**Auto-renewal charges** are not separately covered by the 3-day window in § 3 once the original purchase is more than 3 days old. If you forgot to cancel before renewal, contact us promptly under § 4.

## 6. How to request a refund

You have two options:

### Option A — Discord (recommended)

1. Open [Discord Support](https://support.discord.com/)
2. Submit a request under **Billing / Subscriptions**
3. Reference your Bovio Premium subscription and the date of purchase

Discord may grant the refund directly under its own policy. If they need our confirmation that the entitlement was not used, they will reach out to us.

### Option B — Email us first

Email info@fiftify.com with:
- Your Discord user ID (right-click your name in Discord → Copy User ID, with Developer Mode on)
- The Discord server (guild) name and ID the subscription applies to
- The approximate date of purchase
- A short note about why you're requesting a refund

We respond within 5 business days. If we approve, we will coordinate with Discord to issue the refund — we cannot push refunds directly because we are not the merchant of record.

## 7. What happens after a refund

- The premium entitlement for that server is cancelled.
- Premium-only features stop working for the server immediately.
- Game data, statistics, and leaderboards built up during the premium period are preserved — they are not deleted unless you run `/forget-me`.

## 8. Free tier

The Bovio free tier costs nothing and has no refund concept. We provide it as-is; see the [Terms of Service](./terms-of-service.md) § 6 for details.

## 9. Changes to this policy

We may update this Refund Policy from time to time. Material changes will be announced on this page and via Discord DM to subscribed server owners, and will not apply retroactively to existing subscriptions.

## 10. Contact

For refund questions or to submit an exceptional-case request:

**Fiftify Inc.**
1111B S Governors Ave, STE 23190
Dover, DE 19904, USA
Email: info@fiftify.com

---

*Version: draft-1 (2026-05-16). Canonical source for `bovio.fiftify.com/refund`. Last reviewed by counsel: NOT YET — DRAFT FOR REVIEW.*

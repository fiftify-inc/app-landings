# Bovio — Privacy Policy

> **Working draft.** This document is the engineering team's accurate baseline of Bovio's data practices. It has not yet been reviewed by qualified legal counsel, and inline notes marked *[review with lawyer]* flag items that need legal sign-off before publication.

**Effective date:** 2026-05-16
**Version:** draft-1
**Operator:** Fiftify Inc., a Delaware corporation, 1111B S Governors Ave, STE 23190, Dover, DE 19904, USA
**Contact:** info@fiftify.com

## 1. Who we are

Bovio is a Discord application that lets community members play the "Bulls and Cows" code-guessing game inside their Discord servers. Bovio is operated by Fiftify Inc., a Delaware corporation ("we", "us", "our").

This policy describes what data Bovio collects from Discord users and server administrators, why we collect it, how we store it, and what rights you have over it.

## 2. What data Bovio collects

Bovio is built to be minimal. We collect only what we need to run the game and operate the service.

### 2.1 From Discord (via the Gateway API)

When you interact with Bovio in a Discord server, Discord sends us the following:

- Your **Discord user ID** (numeric snowflake — not your username, display name, email, or avatar)
- The **guild (server) ID** where the interaction happened
- The **channel ID** where the interaction happened
- The **content of slash command arguments you provide** (e.g. your guess number for `/guess`)
- For premium servers: **active entitlement records** for our application

We **do not** receive or store:
- Your username, display name, avatar, email, or any other Discord profile data
- Your IP address
- Messages other than slash command arguments
- Voice activity, presence, or member list data (we explicitly do not request the relevant Privileged Gateway Intents)

### 2.2 What we generate ourselves

For each game you play, we generate and store:
- The secret number for the game (server-side, never displayed until game end)
- Records of each guess you make, with timestamps and bull/cow counts
- Game status (active / won / abandoned)
- Aggregated statistics: total games, total wins, current streak, longest streak, best-attempts per difficulty

### 2.3 From Discord's monetization system (premium subscribers only)

If your server subscribes to Bovio Premium:
- Discord sends us an **entitlement record** containing the SKU ID, guild ID, start date, and expiry date
- Discord (not us) handles payment processing via Stripe; we never see your payment details

## 3. Why we collect each item

| Data | Purpose | Legal basis (GDPR Art. 6) |
|---|---|---|
| Discord user ID | Identify you across games for stats and leaderboards | Performance of a contract |
| Guild/channel IDs | Run games in the correct server context | Performance of a contract |
| Guess contents + bull/cow counts | Run the game | Performance of a contract |
| Aggregated statistics | Show you `/stats` and the server `/leaderboard` | Performance of a contract |
| Subscription entitlement | Grant access to premium features | Performance of a contract |

We do not use your data for advertising. We do not sell, rent, or trade your data.

## 4. Where your data lives

- **Primary database**: PostgreSQL hosted on **Fly.io** in the Frankfurt (`fra`) region. Data does not leave this region.
- **Hosting/compute**: Fly.io machines, same region as the database.
- **Backups**: Fly Managed Postgres automated daily snapshots, retained for 7 days.
- **Logs**: stdout captured by Fly, retained for approximately 30 days (Fly default). We do not log secrets, in-progress game codes, or guess contents at INFO level.

We do not use third-party analytics, advertising networks, or behavioural tracking on the bot.

## 5. Sub-processors

| Processor | Purpose | Jurisdiction |
|---|---|---|
| Discord, Inc. | The platform Bovio runs on; routes our messages and yours | United States |
| Fly.io, Inc. | Hosting and database infrastructure (EU region) | United States; data physically in Germany |
| Stripe, Inc. (via Discord) | Payment processing for premium subscriptions | United States |

International transfers from the EU/UK to the US rely on each processor's own published mechanisms (Standard Contractual Clauses, EU-US Data Privacy Framework where applicable). See each provider's privacy policy for details.

## 6. How long we keep your data

- **Game and guess history**: indefinite by default, used for stats and leaderboards. You can erase it any time with `/forget-me` (see below).
- **Aggregated `UserStats` row**: indefinite; erased by `/forget-me`.
- **Daily challenge attempt records**: indefinite; erased by `/forget-me`.
- **Subscription records**: retained even after expiry for accounting and tax compliance — typically 7 years for US financial records. *[review with lawyer — exact retention depends on applicable tax law]*

## 7. Your rights

Under GDPR (if you are in the EU/EEA/UK) and similar laws elsewhere (CCPA in California, etc.), you have the right to:

1. **Access** — request a copy of all data we hold linked to your Discord user ID
2. **Erasure** — have all linked data deleted (the easiest way is `/forget-me` — instant, no questions; for support-channel requests use info@fiftify.com)
3. **Rectification** — correct inaccurate data; for game records this is generally not applicable as they are factual records of your gameplay, but email us for edge cases
4. **Portability** — request your data in a machine-readable format
5. **Objection** — withdraw consent for processing; in practice this is equivalent to erasure since processing is necessary to operate the bot
6. **Complaint** — lodge a complaint with your local data protection authority

To exercise any of these, run `/forget-me` in Discord or email info@fiftify.com. We respond within 30 days.

## 8. `/forget-me`

`/forget-me` deletes:
- Your `User` record
- All `Guess` records linked to you (via cascade)
- Your `UserStats` row (via cascade)
- All `DailyAttempt` records linked to you (via cascade)

It does NOT delete:
- Aggregated server statistics that do not reference your user ID (e.g. "this guild has played 1,200 games" is not personal data)
- `Subscription` records linked to your user ID — these are retained for accounting per § 6 above

The action is immediate and irreversible.

## 9. Children

Bovio is intended for users who meet Discord's minimum age requirement (13 in most countries, 16 in some EU member states such as Germany). We do not knowingly collect data from anyone below that age. If we learn a younger user's data is in our system, we delete it on request from a parent or guardian.

## 10. Security

- Data is encrypted in transit (TLS) between Discord, Bovio, and our database.
- Data is encrypted at rest by Fly Managed Postgres.
- Access to production systems is limited to a small number of Fiftify staff, gated by Fly.io credentials and 2FA.
- Discord bot tokens and database credentials are stored as Fly Secrets, never in source code or logs.
- We do not log secrets, in-progress game codes, or guess contents at INFO level.

If a personal-data breach occurs, we will notify affected users within 72 hours where required by GDPR and post a public disclosure on the [Bovio support page](https://bovio.fiftify.com/support).

## 11. Changes to this policy

If we materially change how we process data, we will:
1. Update the **Effective date** at the top
2. Post a notice on this page and on the Bovio support page
3. For substantive changes affecting existing users, send a Discord DM to the **server owner** of every server Bovio is in

You can compare versions in the git history of the published site repository.

## 12. Governing law and jurisdiction

This Privacy Policy is governed by the laws of the State of Delaware, United States, without regard to its conflict-of-laws principles. *[review with lawyer — confirm whether a Ukraine-based co-controller arrangement is intended; if so, this clause must be revised]*

Without prejudice to the above, consumers in the EU/EEA/UK retain mandatory consumer-protection rights to bring proceedings in their local courts.

## 13. Contact

- **Privacy questions / data subject requests**: info@fiftify.com
- **General support**: https://bovio.fiftify.com/support
- **Postal**: Fiftify Inc., 1111B S Governors Ave, STE 23190, Dover, DE 19904, USA

---

*Version: draft-1 (2026-05-16). Canonical source for `bovio.fiftify.com/privacy`. Last reviewed by counsel: NOT YET — DRAFT FOR REVIEW.*

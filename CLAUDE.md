# Cathedral Tattoo Studio — Project Instructions for Claude Code

Working repo for **Cathedral Tattoo Studio**, a BlakSheep Creative client.
Retro-onboarded 2026-09-04. **There is no GHL survey for this client** — the
record was reconstructed from the Google Business Profile and the Facebook page.
See `docs/retro-onboard.skill.md` in `bsc-onboarding` for the method.

## Who this is
- **Owner:** Roger Cazares (confirmed by Clint 2026-09-04)
- **Phone:** (225) 301-9527 → `tel:+12253019527`
- **Address:** 1318 Florida Ave SW, Denham Springs, LA 70726 — ✅ **confirmed as the
  operating studio by Clint, 2026-09-05**
- **Facebook:** https://www.facebook.com/profile.php?id=61590624004613
- **Website:** none yet. `cathedraltattoostudio.com` was unregistered as of 2026-09-04
- **Category:** Tattoo shop / Tattoo & Piercing Shop

## ✅ Address confirmed — with one caveat
**1318 Florida Ave SW, Denham Springs, LA 70726** is the operating studio (Clint,
2026-09-05). Location pages, LocalBusiness schema, GBP work and citations are
**unblocked** and should be built on this address.

⚠️ **The relocation is still live.** The 2026-08-27 post announces a move to a bigger
location allowing walk-ins, and no move date or new address is known (`CLIENT-ASKS.md`
R-02). Build the NAP so it can be updated in one place, and keep citation volume
proportionate until the move resolves. ✅ **Walk-ins ARE live** (Roger, 2026-09-19:
"we are a walk-in shop"). Hours on the GBP, 2026-10-11: Mon–Thu 10–6, Fri–Sat 10–7,
Sun closed. **Never write "by appointment" or "appointment only".**

## 🚨 Open decision: B-05
The September brand package positioned Cathedral as premium, selective and
appointment-led. The live shop takes walk-ins six days a week and has no minimum.
Clint decides whether premium is held or released (`brand/positioning.md` §08). Until
then, write copy that is true either way: **considered work, and a room that is easy
to walk into.**

## Artists
Two, named by customers in Google reviews: **Roger Cazares** and **Mikayla Paul**. Cleo no longer works at Cathedral (Clint, 2026-10-15):
never name her or quote the review that names her. All portfolio photos on file are Roger's (R-09, R-33).

## Source of truth
- `README.md` — every fact tiered by source. Read first.
- `00-CLIENT-BRIEF.md` — the brief, with `_TBD_` on everything unattested.
- `HANDOFF.md` — current status + open confirmations. Read when resuming.
- `CLIENT-ASKS.md` — **every ask, with status and an answer log. Never fork this list.**
- `brand/` — the brand package (`brand.yaml` + skill outputs). `brand/context.md`
  holds the publishing guardrails and is read first by every brand skill.
- `CONTENT-ENGINE-CONTRACT.md` — what stage ③ needs before fulfilment starts.

## Website
All work on the first site happens in this repo; the studio repo holds only a pointer.
- **Code:** `website/` (Next.js 14). Branch `website-directions`, not merged to `main`, not launched. Nine design
  directions at `/a/` to `/i/` with a chooser at `/`; no direction chosen yet.
- **Run:** from `website/`, `docker compose up -d --build`, then http://localhost:3061.
- **Preview:** https://web-production-bfd74.up.railway.app, Railway project `cathedral-tattoo-studio-preview`,
  connected to `website-directions`, so a push redeploys. Closed to search engines.
- **Read first:** `website/README.md` (what each direction is, and which pictures are generated), then `HANDOFF.md`.
- **No harvest:** the studio has no website to rebuild from.
- **Studio docs in `studio/`:** the house rules (imported below), the build workflow, and the design references
  (Figma template pack, Notion design guides). Copies of the masters in the studio repo; refresh them with
  `scripts/sync-studio-docs.sh` there rather than editing them here.

@studio/SITE-HOUSE-RULES.md

## Brand
Gothic cathedral facade with rose window and cross, blackletter "Cathedral" over
"· Tattoo Studio ·", gold on flat black. Sampled from the 720px FB profile
raster (no vector yet): black ~62% of pixels, gold ~14%, running #856430 deep →
#A68439 mean → #E5C14B highlight. **These are gradient samples, not final
tokens** — the metallic gradient means there is no single true hex until the
vector arrives.

Three marks exist and are NOT interchangeable:
- **Cathedral lockup** — the studio's primary mark
- **"CTS" gold badge** — studio secondary
- **"RC" gothic frame monogram** — Roger's personal artist watermark, burned into
  nearly every portfolio photo.

**Decision (Clint, 2026-09-04): the brand is CATHEDRAL.** Cathedral fronts the
site, the GBP, social handles, OG cards, email and print. RC is demoted to
**artist attribution only** — it stays on portfolio photos as Roger's signature
(normal in the trade, and pointless to strip from his own work), but it never
appears as site chrome, favicon, or a logo slot. Where both would compete in one
frame, Cathedral wins.

Assets: `01-Brand-Assets/`, derived set in `01-Brand-Assets/derived/`. The mark is
raster-only and **ships that way by decision**; see `06-Reports/logo-source-analysis.md`
for measured minimum sizes. `brand-guidelines` can now be written for digital.

## Asset library
- `05-Photos/portfolio-roger-cazares/` — 37 tattoos pulled from Facebook
- `05-Photos/portfolio-roger-cazares/from-prior-shop-2026-09/` — 60 more, with
  a burned-in **Tattootopia** watermark from Roger's prior shop
- `.../watermark-removed/` — 54 cleaned copies. **8 still carry a remnant**; see
  `WATERMARK-REMOVAL.md` in that folder before publishing any of them
- `99-Reference/_third-party-ip-do-not-publish/` — licensed characters. Never publish.
- `99-Reference/_personal-not-for-marketing/` — owner's family photos. Never publish.

## 🚨 Accuracy guardrail
Verify before publishing any public claim: Louisiana shop and artist license
numbers, founding date, and artist roster. The studio has **6 Google reviews at 5.0**
as of 2026-10-11. Cite the exact count and date, quote verbatim with first name only,
and re-check before publishing (`brand/context.md` guardrail 5).

## Blog CTA standard
Set the CSS prefix and the three CTA fixes together, before post one:
`docs/blog-cta-standard.md` in `bsc-onboarding`. Metal Man needed 15 published
CTAs rewritten because this was skipped.

## Next steps
0. **Clint decides B-05.** Then register `cathedraltattoostudio.com` (B-06).
1. Send Roger the client asks — **all of them live in `CLIENT-ASKS.md`**, which is
   the single source of truth. The roster (R-09) and the 15-minute call (R-13) lead.
   An email address is on file.
2. ✅ **Logo ships as-is** (Clint, 2026-09-05). Derived digital assets in
   `01-Brand-Assets/derived/`. Colour tokens stay interim. ⚠️ Physical production
   (embroidery, foil, signage, anything on white) is not covered — raise at the move.
3. Assign the CSS prefix + blog CTA standard.
4. Records check → GBP optimization (no website link exists yet) → site build.

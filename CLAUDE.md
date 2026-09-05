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
proportionate until the move resolves. **Walk-ins are still not live** — do not
publish "walk-ins welcome" (R-12).

## Source of truth
- `README.md` — every fact tiered by source. Read first.
- `00-CLIENT-BRIEF.md` — the brief, with `_TBD_` on everything unattested.
- `HANDOFF.md` — current status + open confirmations. Read when resuming.
- `CLIENT-ASKS.md` — **every ask, with status and an answer log. Never fork this list.**
- `brand/` — the brand package (`brand.yaml` + skill outputs). `brand/context.md`
  holds the publishing guardrails and is read first by every brand skill.
- `CONTENT-ENGINE-CONTRACT.md` — what stage ③ needs before fulfilment starts.

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

Assets: `01-Brand-Assets/`. Use the `brand-guidelines` skill once the vector lands.

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
numbers, founding date, artist roster, and the address. The studio has **zero
reviews** on both GBP and Facebook as of 2026-09-04 — never imply otherwise.

## Blog CTA standard
Set the CSS prefix and the three CTA fixes together, before post one:
`docs/blog-cta-standard.md` in `bsc-onboarding`. Metal Man needed 15 published
CTAs rewritten because this was skipped.

## Next steps
1. Send Roger the client asks — **all of them live in `CLIENT-ASKS.md`**, which is
   the single source of truth. Vector logo and address are the blockers; the
   15-minute call is the ask with no workaround.
2. Vector logo → sample real hex → `DESIGN.md` / `css-tokens.css` / `brand-style-guide.md`.
3. Assign the CSS prefix + blog CTA standard.
4. Records check → GBP optimization (no website link exists yet) → site build.

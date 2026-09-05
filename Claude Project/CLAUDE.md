# Cathedral Tattoo Studio — Project Instructions for Claude Code

Working repo for **Cathedral Tattoo Studio**, a BlakSheep Creative client.
Retro-onboarded 2026-09-04. **There is no GHL survey for this client** — the
record was reconstructed from the Google Business Profile and the Facebook page.
See `docs/retro-onboard.skill.md` in `bsc-onboarding` for the method.

## Who this is
- **Owner:** Roger Cazares (confirmed by Clint 2026-09-04)
- **Phone:** (225) 301-9527 → `tel:+12253019527`
- **Address:** 1318 Florida Ave SW, Denham Springs, LA 70726 — ⚠️ **likely stale**
- **Facebook:** https://www.facebook.com/profile.php?id=61590624004613
- **Website:** none yet. `cathedraltattoostudio.com` was unregistered as of 2026-09-04
- **Category:** Tattoo shop / Tattoo & Piercing Shop

## 🚨 Do not build on the address until it is confirmed
The 2026-08-27 Facebook post announces a move to a bigger location that will
allow walk-ins. Neither the GBP nor the FB page has been updated. **No location
page, LocalBusiness schema, or citation work on 1318 Florida Ave SW** until Roger
confirms the new address and move date.

## Source of truth
- `../README.md` — every fact tiered by source. Read first.
- `00-CLIENT-BRIEF.md` — the brief, with `_TBD_` on everything unattested.
- `HANDOFF.md` — current status + open confirmations. Read when resuming.
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
  nearly every portfolio photo. Decide early whether the site fronts Cathedral or RC.

Assets: `../01-Brand-Assets/`. Use the `brand-guidelines` skill once the vector lands.

## Asset library
- `../05-Photos/portfolio-roger-cazares/` — 37 tattoos pulled from Facebook
- `../05-Photos/portfolio-roger-cazares/from-prior-shop-2026-09/` — 60 more, with
  a burned-in **Tattootopia** watermark from Roger's prior shop
- `.../watermark-removed/` — 54 cleaned copies. **8 still carry a remnant**; see
  `WATERMARK-REMOVAL.md` in that folder before publishing any of them
- `../99-Reference/_third-party-ip-do-not-publish/` — licensed characters. Never publish.
- `../99-Reference/_personal-not-for-marketing/` — owner's family photos. Never publish.

## 🚨 Accuracy guardrail
Verify before publishing any public claim: Louisiana shop and artist license
numbers, founding date, artist roster, and the address. The studio has **zero
reviews** on both GBP and Facebook as of 2026-09-04 — never imply otherwise.

## Blog CTA standard
Set the CSS prefix and the three CTA fixes together, before post one:
`docs/blog-cta-standard.md` in `bsc-onboarding`. Metal Man needed 15 published
CTAs rewritten because this was skipped.

## Next steps
1. Send Roger the client asks (`HANDOFF.md`) — address is the blocker.
2. Vector logo → sample real hex → `DESIGN.md` / `css-tokens.css` / `brand-style-guide.md`.
3. Assign the CSS prefix + blog CTA standard.
4. Records check → GBP optimization (no website link exists yet) → site build.

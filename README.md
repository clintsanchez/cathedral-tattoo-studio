# Cathedral Tattoo Studio — Client Folder

Retro-onboarded 2026-09-04 by BlakSheep Creative. No GHL survey exists for this
client; everything below was reconstructed from the Google Business Profile and
the Facebook page. Tier is marked on every fact.

## Attested facts (tier 1 — read off the live artifacts)

| Field | Value | Source |
|---|---|---|
| Business name | Cathedral Tattoo Studio (FB casing: "Cathedral Tattoo studio") | GBP + FB |
| Owner | Roger Cazares ⚠️ *LLC names Mikayla Paul as sole member — see 06-Reports/records-check.md* | stated by Clint 2026-09-04 |
| Address | 1318 Florida Ave SW, Denham Springs, LA 70726 ✅ confirmed operating, see below | GBP + FB (identical); confirmed by Clint 2026-09-05 |
| Phone | (225) 301-9527 → `tel:+12253019527` | GBP only |
| Category | Tattoo shop (GBP) / Tattoo & Piercing Shop (FB) | both |
| Hours | Friday 10 AM–7 PM is the only day published | GBP |
| Website | none — GBP still shows "Add website" | GBP |
| Reviews | zero on both platforms | GBP + FB |
| FB page | created June 9, 2026 · 217 followers · single admin · no ads running | FB Page transparency |
| Grand opening | Flash event 6-28-26 | FB social graphic |

## ✅ The address is confirmed, and a move is still coming
**1318 Florida Ave SW is the operating studio** (Clint, 2026-09-05). Location pages,
schema and citations are unblocked on this address.

⚠️ FB post 2026-08-27 still announces a move to a bigger location allowing walk-ins,
plus expanded services and open artist/piercer positions, and neither profile has been
updated. Move date and destination are unknown. Structure the NAP so it updates in one
place, and note that **walk-ins are not yet live**.

## Brand (tier 1 — sampled from the logo raster)
Gothic cathedral facade with rose window and cross, blackletter "Cathedral" over
"· Tattoo Studio ·", gold on flat black. Sampled from the 720px profile image:
black ~62% of pixels, gold ~14%, running #856430 (deep) → #A68439 (mean) →
#E5C14B (highlight). These are gradient samples, not final tokens — the vector
source is still an ask.

Two marks exist and are NOT the same thing:
- **Cathedral lockup + "CTS" badge** — the studio's marks.
- **"RC" gothic monogram** — Roger's personal artist watermark, on nearly every
  portfolio photo. There is also a legacy "RC Tattoos" skull sketch.

## Brand package (`brand/`)
Built 2026-09-05 with the [`cofoundy/brand-skills`](https://github.com/cofoundy/brand-skills)
pipeline. All 15 skills run. `brand.yaml` is the manifest.

| File | What it is |
|---|---|
| `context.md` | **Read first.** Brand DNA + the 8 publishing guardrails every other doc inherits |
| `strategy.md` | The synthesis |
| `positioning.md` | Premium commissioned work, and why it is defensible |
| `competitors.md` | Live research on 5 local shops |
| `audience.md` | 3 personas ⚠️ inferred, not researched |
| `architecture.md` | Cathedral vs artist marks, and which account leads on social |
| `voice.md` | 7 voice qualities, vocabulary, never-say list |
| `messaging.md` | Core message, tagline options, hierarchy |
| `identity.md` | Visual brief |
| `naming.md` | Domain + handle availability, prior art |
| `guidelines.md` | **Digital brand book v1** |
| `copy-deck.md` | **Deployable copy.** GBP, IG, site, artist page, review request, aftercare |
| `audit.md` | Brand health. v2: 13/30 live |
| `story.md` | ⛔ Blocked. Interview guide only |

**Decisions taken 2026-09-05:** address confirmed · logo ships as-is · differentiator
adopted · **position set to premium** · goals set to *get found online* + *build review
volume* · `@rc_tattoos` leads social while the studio account grows.

Still blocked and deliberately not invented: the brand story, and vision/mission/values
(`strategy.md` §§02–04). Both need 15 minutes with Roger.

## Repo layout

This repo is the client's working project **and** the asset library. The docs
(`CLAUDE.md`, `00-CLIENT-BRIEF.md`, `HANDOFF.md`, `DESIGN.md`,
`CONTENT-ENGINE-CONTRACT.md`, `website/`) sit at the root; the numbered folders
below are the deliverables, mirrored to the client's pCloud folder.

## Folder contents
- `01-Brand-Assets/` — 8 logo/monogram files (studio + artist marks)
- `04-Content-Library/social-graphics/` — 10 booking/availability/grand-opening graphics
- `04-Content-Library/designs-and-flash/` — 4 original digital designs
- `05-Photos/portfolio-roger-cazares/` — 37 tattoo photos pulled from Facebook, largest version available
- `05-Photos/portfolio-roger-cazares/from-prior-shop-2026-09/` — 60 more of Roger's
  tattoos supplied by Clint 2026-09-04. ⚠️ Most carry a burned-in **Tattootopia**
  watermark plus the RC monogram. The work is Roger's and is ours to use, but the
  competitor's mark is visible — **ask Roger for unwatermarked originals** before
  any of these go on the Cathedral site.
- `05-Photos/roger-cazares-...-owner-tattoo-artist-at-work-portrait.webp` — owner portrait, tattooing
- `99-Reference/_third-party-ip-do-not-publish/` — 9 files. Licensed characters
  and shared posters. **Never publish these**, on the site or in social.
- `99-Reference/_personal-not-for-marketing/` — 4 family/personal photos. Excluded.
- `99-Reference/image-manifest.json` — every file mapped to its source FB URL and pixel size.

## Provenance note
The Facebook portfolio came from Roger's personal album, not the studio page (the
studio page holds only 4 photos of its own; its content is mostly reels). Roger is
the owner and the client, so the artist portfolios are ours to use.

Two things in the prior-shop batch depict licensed characters (a Deadpool
butterfly and a Coraline-inspired piece). Fine as portfolio, but do not build
marketing campaigns around them.

## Open asks for the client
🚨 Full register with statuses: `CLIENT-ASKS.md`. Summary:
1. ✅ Address confirmed 2026-09-05 — move date and destination still open
2. Real weekly hours after the move
3. Owner email + preferred booking contact
4. Vector logo files (AI/EPS/SVG), and unwatermarked originals of the prior-shop portfolio
5. Service list and price floor; is piercing live yet
6. Artist roster after hiring
7. Louisiana shop/artist license numbers
8. Instagram / TikTok handles
9. Domain preference — cathedraltattoostudio.com is unregistered

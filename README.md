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
| Email | **cathedraltattoostudio25@gmail.com** | GBP People and access, 2026-09-19 — Roger is Primary owner |
| Category | Tattoo shop (GBP) / Tattoo & Piercing Shop (FB) | both |
| Hours | **Mon–Thu 10 AM–6 PM · Fri–Sat 10 AM–7 PM · Sun closed** | GBP, 2026-10-11 |
| Website | none — GBP still shows "Add website"; domain still unregistered | GBP + whois, 2026-10-11 |
| Reviews | **6 on Google, 5.0, all answered** · 1 on Facebook (2026-09-19) | GBP, 2026-10-11 |
| Booking | walk-ins and appointments | Roger's post 2026-09-19; GBP |
| FB page | created June 9, 2026 · 217 followers · single admin · no ads running | FB Page transparency |
| Grand opening | Flash event 6-28-26 | FB social graphic |

## ✅ The address is confirmed, and a move is still coming
**1318 Florida Ave SW is the operating studio** (Clint, 2026-09-05). Location pages,
schema and citations are unblocked on this address.

⚠️ FB post 2026-08-27 still announces a move to a bigger location, plus expanded services
and open artist/piercer positions, and neither profile has been updated. Move date and
destination are unknown, and as of 2026-09-19 **both Facebook and the GBP still show
1318 Florida Ave SW**, so the move has not happened. Structure the NAP so it updates in
one place.

✅ **Walk-ins ARE live — corrected 2026-09-19.** An earlier note here said they were not.
Roger posted that day on his personal Facebook: *"I don't have any appointments today, so
I'm available for WALK-INS! Also we are a walk-in shop..."* They began taking walk-ins at
the existing shop without announcing it on the business page. See guardrail 6 in
`brand/context.md`.

## Artists — two named, roster unconfirmed (updated 2026-10-15)

Named by customers in their own Google reviews, which is the strongest kind of source:
they are naming the person who actually tattooed them.

| Artist | Evidence |
|---|---|
| **Roger Cazares** | IG `@rc_tattoos` (2,033 posts, 6,663 followers) · FB `roger.cazares.54` (6.9K) · named by Keely, 5★ |
| **Mikayla Paul** | sole member on the LLC filing · named by Alesha, 5★, who has had "a few tattoos" from her |
| ~~Cleo~~ | **No longer works at Cathedral (Clint, 2026-10-15).** Named by Kameryn, 5★, in a Google review |

**Cleo has left the studio (Clint, 2026-10-15).** Do not name her anywhere, do not give her a slot, and do not quote Kameryn's review, which names her. The history below is kept for the record.

🩸 *(History)* **Cleo was missing from every internal document until 2026-09-19.** Surname unknown,
no handle on file, not mentioned in the brief, the brand docs or the records check. A
client with a repeat customer who comes back specifically for her is not a minor omission.

**Ask Roger for:** who tattoos there now, each artist's Instagram handle, and whether
each wants to be named publicly. `voice.md` requires artists
be named people rather than "our team of talented artists", so we cannot write about the
shop properly while we only know two thirds of the roster.

⚠️ Alesha's review also says Mikayla tattoos, and the studio IG bio mentions an
"Apprentice". Treat the roster as **unconfirmed and larger than we think** until Roger
confirms it.

**Roger's own channels carry the audience, not the business page:**
- Personal Facebook `roger.cazares.54` — **6.9K followers**, actively posting availability
- Instagram **@rc_tattoos** — confirmed his, but **age-restricted (18+)**, needs a logged-in
  session to read
- Business Facebook page — only **227 followers**, 1 review

That is a 30x gap. Any social strategy that leans on the business page alone is aiming at
the smaller audience.

⚠️ His FB intro reads **"owner/tattoo artist at Cathedral Tattoo Studio"**, which conflicts
with the LLC filing naming Mikayla Paul as sole member (guardrail 1). He may describe
himself however he likes; **our** published copy still should not assert ownership on his
behalf until the filing is reconciled.

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
pipeline. **All 16 skills re-run 2026-10-11 (v2)** against the live Google Business
Profile. `brand.yaml` is the manifest.

🚨 **One open decision gates site copy: B-05, hold or release premium.** The live shop
is a walk-in shop open six days a week; the September package called it
appointment-led. See `brand/positioning.md` §08.

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
| `audit.md` | Brand health. **v3: 16/30 live** |
| `story.md` | ⛔ Blocked. Interview guide only |
| `rebrand.md` | Rebranding assessment. Verdict: no rebrand, a pre-launch correction |
| `mod.json`, `mod/` | Claude Code spinner mod. Preview only, **not approved or installed** |

**Working position until B-05 is decided:** *considered work, and a room that is easy
to walk into.*

**Decisions taken 2026-09-05:** address confirmed · logo ships as-is · differentiator
adopted · **position set to premium** · goals set to *get found online* + *build review
volume* · `@rc_tattoos` leads social while the studio account grows.

Still blocked and deliberately not invented: the brand story, and vision/mission/values
(`strategy.md` §§02–04). Both need 15 minutes with Roger.

## Claude Design kit (`design-kit/`)
Built 2026-10-12. The input package for Claude Design, on the same pattern as the
other clients' kits: `README.md` (import steps), files `0` to `8` including the two
prompts (`1 - MASTER PROMPT.md`, `7 - SOCIAL TEMPLATE SYSTEM PROMPT.md`), the logo
set, 29 chosen photographs with a manifest, and the tokens. **Feed Claude Design this
folder, not the whole repo.** The reference PDF is another client's kit and is kept
out of git; upload it by hand.

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
1. ✅ Address confirmed 2026-09-05 — is the move still happening? (R-32)
2. ✅ Weekly hours observed on the GBP 2026-10-11
3. ✅ Email on file — preferred booking route still open
4. Unwatermarked originals of the prior-shop portfolio (vector logo closed: ships as-is)
5. Service list; is piercing live; will he set a minimum and deposits (R-30)
6. 🚨 **Artist roster: who works there now, handles, the apprentice, and photos of
   Mikayla's work** (R-09, R-33). Cleo has left (2026-10-15)
7. Louisiana shop/artist license numbers
8. ✅ Instagram handles known — TikTok still unverified
9. Domain — cathedraltattoostudio.com still unregistered 2026-10-11 (B-06)
10. The 15-minute call: story, vision, mission, values, ownership wording (R-13)

# Brand Guidelines — Cathedral Tattoo Studio

## 🟡 Mostly unblocked — a digital brand book can now be written.

**Update 2026-09-05:** Clint decided to use the logo as it is. A derived asset set and
**empirically measured minimum sizes** now exist, which were the two things a brand
book actually needed from the artwork. A **digital** guidelines document can be
assembled today. Only the print and spot-colour sections stay unavailable.

*2026-09-05.*

`CLAUDE.md` states the rule directly: **use the `brand-guidelines` skill once the
vector lands.** That is correct and this document respects it.

A brand book's core job is logo usage — clear space, minimum sizes, approved variants,
the reduction to favicon, what is forbidden. Every one of those rules is a measurement
taken *off the vector artwork*. Writing them against a 1242px JPEG would produce
numbers that look authoritative and are guesses, and a brand book is precisely the
document people stop questioning once it exists. Colour has the same problem: the
palette is gradient stops sampled from a raster, not authored values, so the hexes
would be locked in the one document nobody revisits.

## What is ready to drop in the moment the vector arrives

Most of the book is already written and only needs assembling:

| Section | Source | Status |
|---|---|---|
| Brand strategy, positioning | `strategy.md`, `positioning.md` | ✅ drafted, ⚠️ unapproved |
| Architecture, artist attribution | `architecture.md` | ✅ drafted |
| Voice, vocabulary, style rules | `voice.md` | ✅ drafted |
| Messaging, tagline | `messaging.md` | ✅ drafted, ⚠️ unapproved |
| Imagery and photography | `identity.md` §05 | ✅ drafted |
| Design principles | `identity.md` §07 | ✅ drafted |
| Colour tokens | `DESIGN.md`, `website/css-tokens.css` | ⚠️ interim, raster-sampled |
| Typography | `identity.md` §04 | ⚠️ recommendations only; blackletter unidentified |
| **Logo usage and variants** | `01-Brand-Assets/derived/README.md` | ✅ **digital variants exist** |
| **Minimum sizes** | `06-Reports/logo-source-analysis.md` | ✅ **measured empirically**: full lockup ≥128px, rose ≥64px, cross ≥16px |
| **Favicon reduction** | `01-Brand-Assets/derived/` | ✅ resolved — the cross |
| **Clear space** | — | 🟡 derivable from the raster; not yet specified |
| **Print and spot colour** | — | ⛔ not available from this artwork |
| Brand story | `story.md` | ⛔ interview required |

## Sequence
1. ~~Commission the redraw.~~ ✅ **Closed by decision: use the logo as it is.**
2. Identify the blackletter face.
3. Resample the real hex values; update `DESIGN.md` and `css-tokens.css` **together**.
4. Run `brand-guidelines`, assembling the table above.
5. Do this **before the artist roster grows** — a brand book lands far more easily on
   a shop of one than on a shop of four with established habits.

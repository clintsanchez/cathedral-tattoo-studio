# Brand Guidelines — Cathedral Tattoo Studio

## ⛔ Not written. Blocked on the vector logo.

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
| **Logo usage and variants** | — | ⛔ **needs the vector** |
| **Clear space and minimum sizes** | — | ⛔ **needs the vector** |
| **Favicon reduction** | `identity.md` §02 | ⛔ a design decision, not a resize |
| **Print and spot colour** | — | ⛔ needs the artwork |
| Brand story | `story.md` | ⛔ interview required |

## Sequence
1. Roger sends the vector, or it is retraced to the brief in `identity.md` §02.
2. Identify the blackletter face.
3. Resample the real hex values; update `DESIGN.md` and `css-tokens.css` **together**.
4. Run `brand-guidelines`, assembling the table above.
5. Do this **before the artist roster grows** — a brand book lands far more easily on
   a shop of one than on a shop of four with established habits.

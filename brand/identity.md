# Visual Identity Brief — Cathedral Tattoo Studio

*2026-09-05. Written for a designer who has not seen this brand.*

> **This is a brief, not a token file.** Implementation values live in `DESIGN.md`
> and `website/css-tokens.css` and must stay identical to §03 below. ⚠️ The palette
> is sampled from a JPEG because **no vector of the logo exists** — the single
> highest-value client ask (`HANDOFF.md`). §02 is therefore mostly a recovery brief.

## 01 — Identity strategy statement

Cathedral is a tattoo studio whose brand and whose work are genuinely about the same
thing: pieces that carry weight. The mark should read the way a church reads from
across a street — still, solid, unhurried, and old enough not to need to prove
anything. Design for *reverence, not menace*: the category defaults to hard, black,
aggressive, and Cathedral's advantage is that it is the only one in the parish that
feels considered instead of loud. Gold on black is the whole idea, so spend the gold
carefully. It should feel like gilding on stone, not like a nightclub flyer.

## 02 — Logo direction

**Status: the mark already exists.** Gothic cathedral facade with rose window and
cross, blackletter "Cathedral" over "· Tattoo Studio ·", gold on flat black. It is
good, it is distinctive, and it is the most differentiated mark in Livingston Parish
(`competitors.md`). **The task is not to redesign it. It is to recover it as a
vector and build the system it is missing.**

**Primary direction:** symbol + wordmark lockup, vertically stacked.

**Character:** architectural, still, reverent. Weight without aggression.

**Style notes:** the facade should read as *built*: symmetrical, constructed on an
axis, with the rose window as the optical centre. The blackletter is the only
expressive element and it earns that because it is the name. Everything else stays
disciplined.

**What to avoid:** tribal motifs, barbed wire, banner ribbons, swash-script
signatures, skulls used as branding (they belong in the portfolio, not the mark),
gradient meshes, drop shadows, bevel and emboss, distressed grunge textures, and any
"ink"-based wordplay. Also avoid making the facade more literal or more detailed — it
already sits at the limit of what survives reduction.

**Three references, and the specific quality to take from each**
1. **Stella Artois** — a heraldic gold-on-dark lockup that holds together at any size.
   Borrow the *discipline of the horizontal rules* framing the wordmark: they give an
   ornate face a rigid structure to sit in.
2. **Jack Daniel's** — a single ornate historical face, held inside a strict
   rectangular frame, with everything else set plain. Borrow the *restraint around the
   expressive element*: one decorative voice, and nothing else in the composition
   competes with it.
3. **Versace's Medusa roundel** — a dense circular emblem that still reads as an
   avatar. Borrow the *reduction logic*: what detail survives at 32px, and what gets
   cut. Directly applicable to the CTS badge.

### 🚨 The vectorization brief (the actual job)

The mark exists only as raster, the largest being 1242px
(`01-Brand-Assets/cathedral-tattoo-studio-logo.webp`). Whether recovered from Roger's
source files (preferred) or retraced, deliver:

**Files**
- Master vector: `.ai` or `.svg`, live text converted to outlines, plus a version with
  text live if the original font is identified.
- `.eps` for print vendors, `.pdf` for anyone who cannot open either.
- `.svg` optimised for web, and PNG exports at 2048 / 1024 / 512 / 192 / 64 / 32.

**Variants**
- Full lockup, gold on black *(primary)*
- Full lockup, reversed: black on gold, and single-colour black on white
  ⚠️ **Gold on white fails contrast at 2.95:1** (`DESIGN.md`). There must be a
  correct light-background variant, and it is not the gold one.
- Horizontal lockup for headers and letterheads, where the stacked version is too tall.
- Symbol only: the facade, no wordmark.
- CTS badge, for avatars, stamps, embroidery and stickers.
- **Favicon reduction:** almost certainly the cross or the rose window alone. The
  facade will not survive 32px. This is a deliberate design decision, not a resize.

**Colour handling**
The mark's gold is a metallic *gradient*, which is why no single true hex exists.
Deliver: the gradient version for screen and large print; a **flat gold** for anything
small, embroidered, or single-colour; and a spot recommendation for print (metallic
PMS 871/872 is the natural family, but confirm against the real artwork before
committing a vendor).

**Also identify the blackletter face.** Nobody has. It determines whether the wordmark
can ever be reset for a sub-lockup or a new artist's name. See §04.

## 03 — Colour palette

⚠️ Interim, raster-sampled. Authoritative copy lives in `DESIGN.md`; keep identical.

**Primary — Gold `#B99040`.** The mean of the metallic gradient. Reads as gilding,
value, and ceremony. 6.72:1 on the ground, so it clears AA for body text on dark.

**Secondary**
- `#EBC853` **gold bright** — the gradient's highlight. Accents, hover, small
  emphasis. 12.18:1.
- `#825F2C` **gold deep** — the shadow stop. Borders, dividers, and the *only* gold
  permitted on a light background, at large sizes. Not a body text colour on dark.
- `#0A0A0A` **ground** — the field, not a neutral. The logo is 82.7% near-black.
- `#141414` / `#1E1C19` — surface and elevated surface, the latter warm-shifted.
- `#E8E4DC` **text**, `#A9A29A` **muted**.

**Palette type:** effectively monochromatic. One hue family (warm gold) over a
near-black ground.

**Colour personality:** ceremonial, valuable, restrained. Gold is the category's least
used colour locally — competitors run black-and-white or black-and-red
(`competitors.md`) — so this palette does more differentiating work than any other
single decision in the brand.

**Usage rules**
- Dark by default. Light sections are the exception and must be justified.
- **Never gold text on white.** 2.95:1. Use `#825F2C` at large sizes if unavoidable.
- Solid gold button, black label: 6.72:1, correct.
- Gold is an accent at roughly the proportion it occupies in the mark (~12–15%). A
  page that is half gold has misunderstood the brand.
- No second accent hue. Status colours are UI only and never appear in brand material.

## 04 — Typography

**Display — the blackletter, unidentified.** ⚠️ Reserved for the logo lockup and rare
hero moments only. Never below ~28px, never for body, navigation, or anything a person
has to read at speed. Blackletter at small sizes is illegible and, in this category,
starts to read as a metal-band shirt rather than a cathedral.
*Identification candidates to test against the artwork:* Old English Text MT, Cloister
Black, Goudy Text, Canterbury, UnifrakturMaguntia. **Unverified — this is a list to
check, not an answer.**

**Headings — Cinzel** (Google Fonts, free). Recommended. It is drawn from classical
Roman inscriptional capitals: literally the lettering carved into stone buildings. It
carries the architectural, ecclesiastical weight the brand wants **without imitating
the blackletter**, which is the trap — a second gothic face would turn the brand into
costume. Set in caps or small caps, generous letterspacing, short lines.
*Alternatives:* Cormorant Garamond (softer, higher contrast, more literary),
Trajan Pro (the paid original, and overexposed).

**Body — Source Sans 3** (free). Humanist, warm, and highly legible on a dark ground,
which is a real constraint here: geometric sans faces get spindly and glare in light
type on black. *Alternatives:* Inter (more neutral), Figtree (rounder).

**Hierarchy**
| Level | Face | Notes |
|---|---|---|
| Logo / rare hero | Blackletter | Lockup only |
| H1 / H2 | Cinzel | Caps, letterspaced, short |
| H3 / subheads | Source Sans 3 Semibold | Cinzel gets fussy this small |
| Body | Source Sans 3 | 1.125rem, line-height 1.6 on dark |
| Labels / UI | Source Sans 3 | Sentence case per `voice.md` |

**Avoid:** a second blackletter or any gothic display face; tattoo-script fonts;
distressed or grunge faces; geometric sans (Futura, Poppins) — too clean and modern
against the mark; slab serifs; anything with a "handwritten" affect.

⚠️ These are **recommendations, unconfirmed.** If the vector arrives with a live-text
wordmark, the real face may change the pairing.

## 05 — Imagery and photography

**Overall aesthetic:** dark, quiet, documentary. Let black do the framing —
the portfolio *is* the product, so give the images room and put nothing decorative
near them.

**Subject matter, in priority order**
1. **The work, healed and fresh.** Close, well-lit, on a dark or neutral ground.
2. **The making.** Hands, machine, stencil, the drawing on paper, the client mid-sitting.
   ⚠️ Nobody local shows process (`competitors.md`) — this is the largest open
   opportunity and it costs nothing but a camera.
3. **The artist working.** One such portrait already exists in `05-Photos/`.
4. **The space.** ⚠️ Gated on the move. When it happens, photograph the interior
   properly on day one: architecture, light, the chair, the front room. The mark
   promises a *place*, and every competitor's photography is skin-only.

**Colour treatment:** natural and true. Black-and-grey work must be reproduced
accurately — no heavy filters, no crushed blacks, no warm Instagram grade that turns
grey wash muddy. Colour pieces stay as tattooed. Warm, directional light suits the
brand; flat overhead shop lighting does not.

**Attribution:** Roger's RC monogram stays on his own work. It is a signature, not a
defect (`architecture.md`).

**What to avoid:** stock photography of any kind, and especially stock tattoo imagery;
neon or purple studio lighting; the flat-lay of gloves and machines; hands forming a
heart; before/after sliders on memorial work; crowded grids that give every piece the
same weight. ⚠️ 8 prior-shop images still carry a competitor watermark and must not be
published (`WATERMARK-REMOVAL.md`); two quarantined folders in `99-Reference/` are
never published at all.

## 06 — Iconography and illustration

**Style:** line icons, sharp corners, no rounding. Constructed on the same axial
symmetry as the facade. Where an icon can borrow an architectural form — an arch, a
pointed window, a quatrefoil — it should, but sparingly and never as decoration.

**Weight:** regular to bold, 1.5–2px at 24px. Thin line icons disappear on black.

**Personality:** functional, not branded. The mark carries the personality; icons
should get out of the way. **No gothic ornament as UI furniture** — no fleurons, no
scrollwork dividers, no drop caps. One ecclesiastical voice per brand.

## 07 — Design principles

**Black is the field, not the background.** The ground is 82.7% of the mark and should
be roughly that proportion of any layout. Do not lighten the brand to make it feel
friendlier; that is a different brand.

**Spend the gold.** Gold is the scarce, valuable element and behaves like it. A gold
accent should feel deliberate every time. Two gold elements competing in one view means
one is wrong.

**Let it be still.** No motion for its own sake, no parallax, no animated gradients.
The register is calm (`voice.md`), and stillness is how that reads visually. Transitions
short, easing gentle, nothing that bounces.

**The work outranks the brand.** Every layout decision resolves in favour of showing
the tattoo more clearly. Chrome shrinks, images grow. The mark appears once per view
and does not follow the user down the page.

## 08 — Brand expressions

**Social profiles.** Avatar is the CTS badge or the reduced facade, never RC, never a
squeezed full lockup (`architecture.md`). Cover image: the full lockup on black, or
the new interior once it exists. Post templates: black ground, gold hairline, image
dominant, minimal type. Roger's availability calendars already work — keep the format,
apply the palette and Cinzel.

**Website.** Dark throughout. Full-bleed portfolio hero. Portfolio sorted by *what the
piece is* (portrait, memorial, fine line, cover-up, lettering), not by style jargon —
that is what the audience is searching for (`audience.md`). Gold CTA with a black
label. Artist pages with real bios and attributed work. ⚠️ No location page, no
LocalBusiness schema until the address confirms. CSS prefix `cts-`.

**Business cards and aftercare.** Black stock, gold foil or metallic ink for the mark
— the one place the metallic gradient can be reproduced physically rather than
simulated. Reverse: booking route and aftercare essentials, set plain in Source Sans.
Aftercare cards are a genuinely useful, high-retention surface and every client leaves
with one.

**Signage for the new space.** ⚠️ Gated on the move, and the highest-impact physical
expression the brand will have. The mark is architectural; it should be dimensional
and lit rather than printed flat. Budget for it as part of the move, not after.

**Stickers, stamps, embroidery.** CTS badge only. Single flat gold, no gradient.

## Dependencies before any of this is executed
1. **Vector logo** — blocks the entire system. Highest-value client ask.
2. Blackletter face identified.
3. Real hex values resampled from the vector; `DESIGN.md` and `css-tokens.css` updated
   together.
4. Address confirmed, for anything printed or signed.

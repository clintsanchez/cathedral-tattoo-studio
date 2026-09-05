# Cathedral Tattoo Studio — Design System

> **Palette source: the 1242px logo raster**, sampled 2026-09-04
> (`01-Brand-Assets/cathedral-tattoo-studio-logo.webp`). ⚠️ **Interim.**
> The mark is gold-on-black with a metallic gradient and no vector exists yet, so
> these are gradient stops read off a JPEG, not authored brand colours. Replace
> them from the SVG when Roger sends source files or the Vector Magic trace lands.
> Keep identical to `website/css-tokens.css` and `brand-style-guide.md`.

## Brand
- **Name:** Cathedral Tattoo Studio · legal entity CATHEDRAL TATTOO STUDIO LLC
- **Front-facing brand:** **Cathedral.** RC is artist attribution only.
- **Register:** gothic, ecclesiastical, craft-led. Dark ground, gold on black,
  blackletter display. Reverent rather than aggressive.
- **Contact:** (225) 301-9527 · `tel:+12253019527`
- ⚠️ Address, ownership and licensing are unconfirmed — see `06-Reports/records-check.md`

## Colour

The logo is **82.7% near-black ground and 12.5% gold**. Black is the brand's
field, not a neutral: designs should default to dark, with gold as the accent.

| Role | Token | Value | Notes |
|---|---|---|---|
| Ground | `background` | `#0A0A0A` | Raster reads #010001; lifted slightly off pure black for screen |
| Surface | `surface` | `#141414` | Cards, panels |
| Elevated | `surface-raised` | `#1E1C19` | Warm-shifted toward the gold |
| Gold highlight | `gold-bright` | `#EBC853` | Top of the gradient. 12.18:1 on ground — **AA** |
| Gold primary | `primary` | `#B99040` | Mean gold. 6.72:1 on ground — **AA** |
| Gold deep | `gold-deep` | `#825F2C` | Shadow stop. 3.42:1 on ground — **AA large text only** |
| Text | `text` | `#E8E4DC` | Warm off-white, 15.61:1 |
| Text muted | `text-muted` | `#A9A29A` | 7.85:1 |
| Success | `success` | `#22A06B` | |
| Warning | `warning` | `#E8A33D` | |
| Error | `error` | `#D9534F` | |

### Contrast rules — these are measured, not assumed
- ✅ `#B99040` and `#EBC853` on the dark ground both clear AA for body text.
- ❌ **Gold on white fails.** `#B99040` on `#FFFFFF` is 2.95:1. Never set gold
  text on a light background. If a light section is unavoidable, use `#825F2C`
  (5.8:1) — but the brand wants dark.
- ✅ Black on gold (`#0A0A0A` on `#B99040`) is 6.72:1 — the correct treatment for
  a solid gold CTA button.
- `#825F2C` is a shadow stop, not a text colour on dark.

## Typography
⚠️ **Recommendations, unconfirmed.** The wordmark is a blackletter face nobody
has identified yet; the vector or the source file will settle it.

- **Display:** blackletter, reserved for the logo lockup and rare hero moments.
  Never for body, navigation, or anything under ~28px — it stops being legible.
- **Headings:** a high-contrast serif or a condensed grotesk that echoes the
  gothic proportion without imitating it.
- **Body:** a clean humanist sans. Long-form legibility on a dark ground.
- **Scale:** display clamp→3.5rem · h1 2.75rem · h2 2.125rem · h3 1.5rem · body 1.125rem
- **Line height:** body 1.6, headings 1.15. Dark backgrounds need the extra leading.

## Spacing & Layout
- **Scale (px):** 8 · 16 · 32 · 64 · 96 · 128
- **Container:** 1200px · **Radius:** 6 / 12 / 20
- Portfolio work is the product. Give images room; let black do the framing.

## Components
- **Button, primary:** solid gold `#B99040`, black label. 44px min tap target.
- **Button, secondary:** gold outline on ground, gold label.
- **Card:** `surface` with a 1px `rgba(185,144,64,0.18)` hairline. No heavy shadow on black.
- **Hero:** headline + subhead + primary CTA. Full-bleed portfolio photography.
- **Gallery:** the 187-image library. Photos carry Roger's RC watermark; that is
  intended attribution, not a defect.

## Conversion model
Appointment-led, not retail. Primary CTA is booking; the phone is the secondary
action. ⚠️ Walk-ins are promised at the new location but are not live yet —
do not put "walk-ins welcome" anywhere until Roger confirms the move.

# Derived logo assets

*Generated 2026-09-05 from `../cathedral-tattoo-studio-denham-springs-gold-gothic-logo-lockup-on-black.jpg`
(1122×1402, the largest and most complete crop of the mark).*

**Decision (Clint, 2026-09-05): use the existing logo as it is.** No redraw. These
files are cut and scaled from that artwork — nothing has been redrawn, recoloured or
reconstructed. Regenerate them by re-running the script recorded in
`06-Reports/logo-source-analysis.md`.

## Files

| File | Use | Notes |
|---|---|---|
| `favicon.ico` | Browser tab | 16/32/48 bundled |
| `favicon-16/32/48/64.png` | Browser tab, PWA | **The cross, not the facade** — see below |
| `apple-touch-icon-180.png` | iOS home screen | Cross |
| `avatar-cross-512.png` | Small avatars, stamps, stickers | Cross. Survives to ~16px |
| `avatar-rose-512.png` | Social avatars ≥64px | Rose window. Legible to ~64px, mud below |
| `lockup-600.png` / `lockup-1200.png` | Site header, email | Full lockup on the source's black |
| `lockup-1200-alpha-DARK-BACKGROUNDS-ONLY.png` | Overlaying dark photography | ⚠️ Luminance-keyed alpha. **Dark grounds only** — it will look wrong on light |
| `og-card-1200x630.png` | OG / Twitter card | Lockup composited on `#0A0A0A` |
| `social-square-1200.png` | Instagram, square posts | Same, square |

## Why the favicon is the cross

The full lockup does not reduce. Measured in `06-Reports/logo-source-analysis.md`:
legible at 128px, mush at 64px, an unreadable smear at 32px, a blob at 16px. Three
candidate glyphs were cut from the artwork and tested at real sizes — the **cross is
the only element that survives to 16px.** The rose window holds to about 64px, which
is why it serves as the larger avatar.

This is a substitution, not a redraw: it is a piece of the existing mark, used where
the whole mark cannot go.

## What these files do NOT cover

Using the artwork as-is is a legitimate call, and these assets cover every digital
surface. Four things remain genuinely unavailable, and they are worth knowing before
someone promises them to a vendor:

1. **No embroidery or foil art.** The gold is a continuous-tone metallic gradient with
   129,764 unique colours. Embroidery digitising and foil stamping need flat spot
   colour. A vendor will either refuse or flatten it themselves, badly.
2. **No large-format signage art.** Digital print at moderate size is fine. Cut vinyl,
   channel letters, or anything above roughly a metre will show the raster.
3. **No light-background variant.** Gold on white fails contrast at 2.95:1
   (`DESIGN.md`), and no single-colour black version exists. **Anything printed on
   white needs a solution we do not currently have.**
4. **Colour tokens stay interim.** They remain gradient stops sampled off a JPEG, not
   flat fills. `DESIGN.md` and `website/css-tokens.css` keep their interim warning.

None of these block the website, the GBP, social, or email. They block **physical
production**, and they surface again at the move, when signage gets ordered.

⚠️ Separately, `CLIENT-ASKS.md` **R-27** remains open: who made the mark and with what
tool. If it was AI-generated it may not be registrable, which affects whether the
studio could stop a competitor from using a near-identical mark.

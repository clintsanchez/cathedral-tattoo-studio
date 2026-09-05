# Watermark removal — prior-shop portfolio (2026-09-04)

The 60 photos in `from-prior-shop-2026-09/` carry a burned-in **Tattootopia**
watermark from Roger's previous studio. `watermark-removed/` holds cleaned copies
under the same filenames. **Originals were never overwritten.**

## Method

Each photo was sent to Gemini image editing with an instruction to remove only the
Tattootopia script wordmark, palm-tree emblem and blackletter TT monogram, keeping
Roger's own RC frame monogram. The model re-renders the whole frame, so its output
was NOT used directly: the watermark region was located by differencing the render
against the original, and only that region was composited back onto the untouched
original with a feathered mask. Everything outside the patch is the original photo,
pixel for pixel, at full resolution.

## Status — 54 of 60 cleaned

### ⚠️ Still showing a Tattootopia remnant — do not publish as-is

- `roger-cazares-denham-springs-la-black-and-grey-native-american-portrait-forearm-sleeve-tattoo.webp`
- `roger-cazares-denham-springs-la-bull-skull-floral-back-tattoo.webp`
- `roger-cazares-denham-springs-la-butterflies-blackwork-tattoo.webp`
- `roger-cazares-denham-springs-la-dairy-cow-blackwork-tattoo.webp`
- `roger-cazares-denham-springs-la-deadpool-butterfly-tattoo.webp` (model refused to edit this one)
- `roger-cazares-denham-springs-la-neo-traditional-color-raven-and-dragon-forearm-tattoo.webp`
- `roger-cazares-denham-springs-la-portfolio-grid-of-twelve-tattoos.webp`
- `roger-cazares-denham-springs-la-roaring-tiger-tattoo.webp`

### Clean in the original — no edit was needed

- `roger-cazares-denham-springs-la-black-and-grey-zeus-statue-shoulder-tattoo.webp` (only Roger's own RC mark / @rc_tattoos handle)
- `roger-cazares-denham-springs-la-black-white-owl-tattoo-half-sleeve.webp` (only Roger's own RC mark / @rc_tattoos handle)
- `roger-cazares-denham-springs-la-cherub-arm-tattoo.webp` (only Roger's own RC mark / @rc_tattoos handle)
- `roger-cazares-denham-springs-la-coraline-inspired-tattoo.webp` (only Roger's own RC mark / @rc_tattoos handle)
- `roger-cazares-denham-springs-la-deep-sea-octopus-battle-outer-space-astronaut-tattoo.webp` (only Roger's own RC mark / @rc_tattoos handle)

The remaining 47 files in `watermark-removed/` are clean.

## Better fix

Ask Roger for the unwatermarked originals and swap them in. That removes the
reconstruction entirely and fixes the eight files above.

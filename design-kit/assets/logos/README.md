# Cathedral Tattoo Studio logo set (2026-10-12)

Version 0.1. Prepared by BlakSheep Creative. Nothing here has been approved by anyone at the studio.

## Status

**The logo ships as the existing raster, with no redraw.** Decided by Clint Sanchez, BlakSheep Creative, 2026-09-05. The artwork is the studio's own: a gold gothic cathedral lockup on black. The files in this folder were cut and scaled from that artwork by the agency on 2026-09-05. Nothing in them was redrawn, recoloured or reconstructed.

**The cross is the small mark.** Also an agency decision of 2026-09-05. It is a piece of the existing artwork used where the whole lockup cannot go. It is a substitution, not a new mark.

Nobody at the studio has seen this derived set. It carries the same "not approved" status as the rest of the kit.

## Provenance

- **The logo exists only as a raster.** There is no vector, no layered file and no font. None is coming. Who made the artwork, and with what tool, is not recorded.
- **Source.** `source/cathedral-tattoo-studio-denham-springs-gold-gothic-logo-lockup-on-black.jpg`, 1122 × 1402, the largest complete crop of the mark. Every derived file was made from it.
- **What the artwork is.** A symmetrical-looking gothic facade with pinnacles, a rose window under a pointed arch and a cross at the apex. Below it, "Cathedral" in gold blackletter over a ruled line reading "Tattoo Studio" between two small ornaments, with pointed tracery hanging beneath. Gold with a metallic gradient on flat black.
- **Measured, 2026-09-05.** The artwork has 129,764 unique colours, so it has no flat or spot colour. Its two halves were drawn separately: 70.2 per cent of its lit pixels differ from their mirror image. It is about 83 per cent black and 12.5 per cent gold.
- **The blackletter face is unidentified.** It exists only inside these images. It is never set as live type, and no other gothic or blackletter face is used anywhere.
- **The gold cannot be sampled as one value.** The tokens in `../../tokens/css-tokens.css` are stops read off the gradient and are interim.

## Files

Sizes were read from the files on 2026-10-12. "Artwork" is the lit area inside the file. Minimum size is the displayed width of the whole file.

### The full lockup

| File | What it is | Format and size | Ground inside the file | Where it may sit | Minimum size |
|---|---|---|---|---|---|
| `lockup-1200.png` | **The primary logo.** The full lockup | PNG, 1200 × 1499, opaque, 1,527,225 bytes. Artwork 1041 × 1381 | Pure black `#000000` | A `#000000` panel, or a section whose ground is set to `#000000`. On the kit's ground `#0A0A0A` its edge can show as a faint rectangle on a good screen: use the alpha file there | 128 px wide (160 px tall) |
| `lockup-600.png` | The same, half size | PNG, 600 × 749, opaque, 441,592 bytes. Artwork 521 × 690 | Pure black `#000000` | As above. Use for displayed widths up to 300 px | 128 px wide |
| `lockup-1200-alpha-DARK-BACKGROUNDS-ONLY.png` | The full lockup with transparency keyed from brightness | PNG, 1200 × 1499, with alpha, 1,792,907 bytes | Transparent | `#0A0A0A`, `#141414`, `#1E1C19`, or a dark, low-detail area of a photograph. **Dark grounds only.** On anything lighter the gold's shadows turn see-through and the mark falls apart | 128 px wide |

### Small marks

| File | What it is | Format and size | Ground inside the file | Use | Size range |
|---|---|---|---|---|---|
| `avatar-rose-512.png` | **The avatar.** The rose window, cropped from the lockup, with fragments of the arch at the corners | PNG, 512 × 512, opaque, 348,460 bytes | `#0A0A0A` | Profile pictures | 64 px and larger. Below 64 px the tracery fills in |
| `avatar-cross-512.png` | **The small mark.** The cross from the apex of the lockup | PNG, 512 × 512, opaque, 64,938 bytes. Artwork 247 × 385 | `#0A0A0A` | Avatars below 64 px; any slot too small for the rose window | 16 px to 63 px, and larger where a simpler mark is wanted |
| `apple-touch-icon-180.png` | The cross | PNG, 180 × 180, opaque, 12,347 bytes | `#0A0A0A` | Home screen icon | Fixed |
| `favicon-64.png`, `favicon-48.png`, `favicon-32.png`, `favicon-16.png` | The cross | PNG, square, opaque. 2,499, 1,651, 950 and 405 bytes | `#0A0A0A` | Browser tabs and bookmarks | Fixed. At 16 px the cross is 8 × 12 px and still reads |
| `favicon.ico` | The cross as an icon file | ICO, 1,481 bytes. Holds 32 px and 16 px | `#0A0A0A` | The site root. No site exists yet | Fixed |

### Ready-made compositions

| File | What it is | Format and size | Ground inside the file | Use |
|---|---|---|---|---|
| `og-card-1200x630.png` | The lockup centred on the ground | PNG, 1200 × 630, opaque, 212,846 bytes. Artwork 375 px wide | `#0A0A0A` | Link preview image. A feed shows it at about a third of its size, which puts the artwork near the 128 px floor: use it as it is and add nothing |
| `social-square-1200.png` | The lockup centred on the ground | PNG, 1200 × 1200, opaque, 649,516 bytes. Artwork 734 px wide | `#0A0A0A` | Square posts and closing slides. Not the avatar |
| `cathedral-tattoo-studio-denham-springs-cover.jpg` | The lockup centred on black | JPEG, 1920 × 1080, 188,044 bytes. Artwork 600 px wide | Pure black `#000000` | Cover images. The artwork sits in the middle 31 per cent of the width, so it survives the centre crop most platforms apply |

### Source rasters: `source/` (reference and one limited use)

| File | What it is | Format and size | Use |
|---|---|---|---|
| `source/cathedral-tattoo-studio-denham-springs-gold-gothic-logo-lockup-on-black.jpg` | The source every derived file was cut from | JPEG, 1122 × 1402, 206,356 bytes | Reference. Place the derived files, not this one |
| `source/cathedral-tattoo-studio-denham-springs-gold-gothic-logo-1242px-largest-available.jpg` | A square crop of the same artwork. It loses the outer pinnacles | JPEG, 1242 × 1242, 154,323 bytes | Reference only |
| `source/cathedral-tattoo-studio-denham-springs-cts-gold-gothic-monogram-badge.jpg` | The CTS badge: the letters C, T and S with the T as a cross, inside a pointed gothic frame, gold on black | JPEG, 1122 × 1402, 134,512 bytes | **Stamps and stickers only**, as a layout mock-up marked "artwork not print-ready". Never a logo, an avatar, a favicon, a header or a footer. "CTS" is never written in text |

### The artist's mark: `artist-mark-rc/` (not a logo)

| File | What it is | Format and size | Use |
|---|---|---|---|
| `artist-mark-rc/roger-cazares-rc-gold-gothic-monogram-artist-mark.jpg` | Roger Cazares's RC monogram: gothic initials in an ornate gold frame, on black | JPEG, 1024 × 1536, 78,771 bytes | **Reference only.** It is his signature. It stays where it already sits on his own photographs. This file is placed in no layout. It is never a logo, an avatar, a favicon, a header or a footer, and it is never added to a photograph that does not already carry it |

## Sizes

| Displayed width | Use |
|---|---|
| 128 px and wider | The full lockup. "Cathedral" is legible at 128 px and not below |
| 64 px to 127 px | The rose window, where the slot is an avatar. Otherwise the cross |
| 16 px to 63 px | The cross |

These floors were measured on 2026-09-05 by reducing the artwork to 128, 64, 32 and 16 px. At 64 px the wordmark is mush and the pinnacles merge. At 32 px the lockup is a gold smear. Never scale the lockup below 128 px and hope. Step to the next mark.

There is no upper limit on screen, but the largest artwork is 1041 px wide. Never display the lockup wider than 1200 px, and never upscale it.

Clear space: the height of the cross finial at the top of the lockup, about 8 per cent of the lockup's height, on every side. That is 13 px at 128 px wide, 20 px at 200 px, 32 px at 320 px and 60 px at 600 px. The opaque files already carry a margin of about 4 per cent of their height inside the file; the clear space is measured from the artwork, not from the file's edge.

## Rules

- Composite these files only, unchanged. Never redraw, trace, vectorise, re-letter, recolour, outline or generate the logo, the rose window, the cross, the badge or any part of them.
- Dark grounds only: `#0A0A0A`, `#141414`, `#1E1C19`, pure black, or a dark and low-detail area of a photograph. Never a light ground. Gold on white measures 2.95 to 1 and fails.
- Never stretch, rotate, tilt, crop into, mirror or tidy the mark. It is not symmetrical; do not make it so.
- Never add a shadow, a glow, a bevel, a stroke, a gradient, a texture or an animation.
- Never separate the wordmark from the facade, and never rearrange the parts. The rose window and the cross are the only parts used alone, and only from the supplied files.
- Never set the name in live type as a substitute for the logo. Never set anything in blackletter.
- Once per view. Never over busy imagery. Never repeated as a pattern.
- Never add a tagline, a place name or a phone number inside the artwork or inside its clear space.
- Never place `artist-mark-rc/` in a layout. Never use the CTS badge except in a stamp or sticker mock-up.
- In a mock-up of a sign, a window, a shirt or a card, mark it "artwork not print-ready".

## Does not exist

- A vector file, in any format.
- A light-ground version. Nothing in this folder may sit on white, cream or a light photograph.
- A one-colour version, in black, white or flat gold.
- A horizontal lockup, a wordmark alone, or a simplified lockup for sizes between 64 px and 128 px.
- Print-ready artwork of any kind: no CMYK file, no spot colour, no Pantone, foil or metallic ink reference.
- Signage artwork. The raster shows above roughly one metre.
- An embroidery file. Embroidery and foil need flat colour and this artwork has none.
- The font. The blackletter face has never been identified.
- A flat value for the gold. The tokens are interim stops from a gradient.
- A record of who made the mark or who holds the rights to it.

The full rules are in `../../3 - Visual Identity.md`, section 1. The measurements are in the client repo at `06-Reports/logo-source-analysis.md`.

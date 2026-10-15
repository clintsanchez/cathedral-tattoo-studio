# 3. Visual identity

Cathedral Tattoo Studio. Version 0.1, 2026-10-12. Prepared by BlakSheep Creative. Values of record: `tokens/css-tokens.css`.

**Status.** Nothing in this file has been approved by anyone at the studio, and nobody there has been interviewed. The logo artwork, gold on black and the photographs are the studio's own and stay. Three things are agency decisions by Clint Sanchez, BlakSheep Creative: the logo ships as the existing raster with no redraw (2026-09-05), the derived digital logo set, and the cross as the small mark. Everything else here is a BlakSheep Creative proposal and is `CONFIRM BEFORE PUBLISHING`: both typefaces, every colour role, every component and every layout rule.

**Built from.** `brand/identity.md` (version 2), `brand/guidelines.md` (version 1.1), `brand/architecture.md`, `DESIGN.md`, `01-Brand-Assets/derived/README.md` and `06-Reports/logo-source-analysis.md` in the client repo, and `tokens/css-tokens.css` in this kit. Where a value appears in more than one of those, the token file wins. The logo files and all 29 photographs in `assets/` were opened and looked at for this file on 2026-10-12. Every contrast figure was calculated for this file on the same day.

**The idea.** A cathedral mark over work that carries weight, in a room with the door open. Black is the field. Gold is gilding, and there is little of it. The mark is gothic and the words are plain. One photograph of one piece, shown large with a plain caption, does the persuading. With eyes half shut, a page reads as black with one thin line of gold and one photograph.

| Principle | In practice |
|---|---|
| Black is the field | About 83 per cent of any layout is the ground. There are no light sections. If a layout feels slightly too empty, it is probably right |
| Spend the gold | Gold is 12 to 15 per cent of a view at most, the logo included. Two gold elements competing in one view means one is wrong |
| The work outranks the brand | Fewer pieces, shown larger. The image grows and everything around it shrinks. No text sits on a photograph. The logo appears once per view |
| The mark is gothic, the words are plain | One ornate element, the logo. Everything else is sentence case, in plain type, with space around it. No second gothic face, no gothic ornament |
| Offset the severity of the mark | Do not soften the logo. Put warmth beside it: warm directional light, faces, the room, generous space. The mark is the building; everything around it should feel like the door is open |
| Let it be still | No motion for its own sake. Nothing bounces, slides or counts |

**The system is dark only.** No layout in this kit has a white, cream or light grey section, because the logo cannot sit on one and gold cannot be read on one.

---

## 1. Logo system

### What the logo is

A vertical, stacked lockup in gold on black, read from the supplied files:

- **Facade.** A gothic cathedral front: a tall central gable with a pointed arch, three pinnacles stepping down on each side, and a small cross at the apex.
- **Rose window.** A circular window of eight foiled openings around a centre, set under the arch. It is the optical centre of the mark.
- **Wordmark.** "Cathedral" in gold blackletter across the full width, in front of the facade.
- **Descriptor.** "Tattoo Studio" in smaller blackletter on a ruled line, with a small ornament at each end.
- **Tracery.** A pointed arch and scrollwork hanging beneath, ending in a finial.

The gold is a metallic gradient with highlights, not a flat colour. The ground is flat black.

| Measure | Value |
|---|---|
| File | `assets/logos/lockup-1200.png`, 1200 × 1499 px, a ratio of about 4 to 5 |
| Artwork inside the file | 1041 × 1381 px, about 87 per cent of the file's width and 92 per cent of its height |
| Colours in the artwork | 129,764. There is no flat or spot colour |
| Symmetry | It reads as symmetrical and is not. 70.2 per cent of its lit pixels differ from their mirror image. Never mirror half of it to tidy it |
| Coverage | About 83 per cent black and 12.5 per cent gold. The layout proportions in section 2 come from this |

Two consequences. The lockup is tall, so it needs height: a shallow header strip cannot hold it at a legible size. And the wordmark fails first as the logo shrinks, which sets the floors below.

### The raster decision

**Decided by Clint Sanchez, BlakSheep Creative, 2026-09-05: the logo ships as the existing raster. No redraw.**

What follows from the decision:

1. **There is no vector and none is coming.** The artwork is a picture of a logo. It is used as a picture.
2. **Nothing redraws it.** No tracing, no vectorising, no "cleaned up" version, no simplified version, no re-lettered wordmark, no generated version. Auto-tracing was tested on paper and rejected: it would produce thousands of paths and would still be illegible at 32 px.
3. **The name is never set in live type as a substitute for the logo.** Not in blackletter, not in Cinzel, not in any face.
4. **The blackletter face is unidentified.** It is never used as live type anywhere. No second gothic or blackletter face appears in any layout.
5. **Only the supplied files are composited, unchanged.** Every file is listed below.
6. **Physical production is not available.** No print-ready, spot-colour, foil, embroidery or signage artwork exists. Print templates in this kit are layouts only and carry the label "artwork not print-ready".
7. **Who made the artwork is not recorded.** That is an open question for the studio and does not change how the files are used.

### One entry per supplied file

Every logo file in the kit. Pixel sizes were read from the files on 2026-10-12.

| File in `assets/logos/` | What it is | Ground inside the file | Permitted grounds | Use |
|---|---|---|---|---|
| `lockup-1200.png` | **The primary logo.** The full lockup, 1200 × 1499, opaque | Pure black `#000000` | A panel or section set to `#000000`. On `#0A0A0A` its edge can show faintly: use the alpha file | Website header and hero, email header, documents, closing slides |
| `lockup-600.png` | The same at 600 × 749, opaque | Pure black `#000000` | As above | Displayed widths up to 300 px |
| `lockup-1200-alpha-DARK-BACKGROUNDS-ONLY.png` | The full lockup, 1200 × 1499, with transparency | Transparent | `#0A0A0A`, `#141414`, `#1E1C19`; a dark, low-detail area of a photograph. Never anything lighter | The default file on the kit's ground and surfaces |
| `avatar-rose-512.png` | **The avatar.** The rose window, 512 × 512, opaque | `#0A0A0A` | Its own ground | Every profile picture, at 64 px and larger |
| `avatar-cross-512.png` | **The small mark.** The cross, 512 × 512, opaque | `#0A0A0A` | Its own ground; any ground in the kit | Slots from 16 px to 63 px, and avatars shown below 64 px |
| `apple-touch-icon-180.png` | The cross, 180 × 180, opaque | `#0A0A0A` | Its own ground | Home screen icon |
| `favicon-64.png`, `favicon-48.png`, `favicon-32.png`, `favicon-16.png` | The cross at four sizes, opaque | `#0A0A0A` | Their own ground | Browser tabs and bookmarks |
| `favicon.ico` | The cross as an icon file holding 32 px and 16 px | `#0A0A0A` | Its own ground | The site root. No site exists yet |
| `og-card-1200x630.png` | The lockup centred on the ground, 1200 × 630. Artwork 375 px wide | `#0A0A0A` | Its own ground | Link preview image. Used as it is, with nothing added |
| `social-square-1200.png` | The lockup centred on the ground, 1200 × 1200. Artwork 734 px wide | `#0A0A0A` | Its own ground | Square posts and closing slides. Not the avatar |
| `cathedral-tattoo-studio-denham-springs-cover.jpg` | The lockup centred on black, 1920 × 1080. Artwork 600 px wide | Pure black `#000000` | Its own ground | Cover images |
| `source/` (three JPEG files) | The source rasters, and the CTS badge | Black | None in a layout, except the badge as below | Reference. The CTS badge appears only in a stamp or sticker mock-up marked "artwork not print-ready" |
| `artist-mark-rc/` (one JPEG file) | Roger Cazares's RC monogram | Black | None | Reference only. Placed in no layout |

There is no light-ground file, no one-colour file, no horizontal lockup and no wordmark alone. `assets/logos/README.md` has the byte sizes and provenance. File 8 lists everything that does not exist.

### Small marks

Below the lockup's floor the mark changes. It does not shrink.

- **128 px wide and larger:** the full lockup.
- **64 px to 127 px, in an avatar slot:** the rose window, `avatar-rose-512.png`.
- **16 px to 63 px, and any small slot that is not an avatar:** the cross, `avatar-cross-512.png` and the favicon files.
- **Avatar:** the rose window on every platform. Where a platform shows the avatar below 64 px (a comment thread, a notification), the cross is the avatar for that platform. Never the full lockup squeezed into a circle. Never the RC monogram. Never the CTS badge.
- **Favicon:** the cross. Always.

Using the cross is a substitution: a piece of the existing artwork used where the whole cannot go. Composite the supplied files. Do not crop a new mark out of the lockup, and do not draw, trace or generate one.

### Clear space

The height of the cross finial at the top of the lockup, on every side. That is about 8 per cent of the lockup's height. Measure it from the artwork, not from the edge of the file.

| Lockup width (file) | Height | Clear space |
|---|---|---|
| 128 px | 160 px | 13 px |
| 200 px | 250 px | 20 px |
| 320 px | 400 px | 32 px |
| 600 px | 749 px | 60 px |

Nothing enters the clear space: no type, no image edge, no button, no hairline.

### Minimum size

| Mark | Minimum |
|---|---|
| Full lockup, on screen | 128 px wide, which is 160 px tall |
| Rose window | 64 px |
| Cross | 16 px |
| Any mark, in print | Not specified. No print-ready artwork exists |

These floors were measured, not guessed. At 128 px the wordmark is legible. At 64 px "Cathedral" is mush and the pinnacles merge. At 32 px the lockup is a gold smear. Never scale the lockup below 128 px and hope.

Maximum: 1200 px wide. The file is never upscaled.

Working sizes: website hero 320 px wide on desktop and 240 px on mobile; website header 128 px wide in a header 192 px tall, or the cross at 40 px in a 72 px header on inner pages; footer, no logo (once per view); email header 160 px displayed from `lockup-600.png`; closing slide of a 1080 px social graphic 520 px, because a feed shows the graphic at about a third of its size.

### Approved backgrounds

- Ground `#0A0A0A`: the alpha lockup, the rose window, the cross.
- Surface `#141414` and Elevated `#1E1C19`: the alpha lockup, at 200 px wide or larger.
- Pure black `#000000`: the opaque lockup files and the cover.
- A photograph: the alpha lockup, only on an area that is dark, even and free of detail, and only where the photograph is not a tattoo. In practice that is the room or an at-work frame, and none is on file. **The logo never sits on a photograph of a tattoo.**

### Incorrect usage

Do not:

- Place it on white, cream, a light grey, a light photograph or any ground lighter than `#1E1C19`. Gold on white is 2.95 to 1 and fails.
- Redraw, trace, vectorise, re-letter, simplify, mirror or generate the logo, the rose window, the cross or the badge, with any tool, AI included.
- Recolour it. Not white, not black, not flat gold, not a token gold.
- Add a shadow, a glow, a bevel, a stroke, a gradient, a texture, a shine or an animation.
- Stretch, squash, rotate, tilt or crop into it.
- Separate the wordmark from the facade, or use "Cathedral" alone.
- Set the name in live type and call it the logo. Set anything in blackletter. Add a second gothic face.
- Put a tagline, a place name, a phone number or a date inside the artwork or its clear space.
- Use it more than once in a view, as a pattern, as a watermark on a photograph, or over busy imagery.
- Carry it at full size in a header that follows the reader down the page.
- Use it below its minimum size or inside its clear space.
- Use the RC monogram as a logo, an avatar, a favicon, a header or a footer, or place the monogram and the lockup side by side as equals.
- Use the CTS badge anywhere but a stamp or sticker mock-up, or write "CTS" in text.
- Present any printed, stitched, foiled or sign-written version as ready for production.

---

## 2. Colour system

The brand is gold on black. One hue family, warm gold, over a near-black ground. Black is the field, not a neutral. No hue outside the token file appears in any layout.

**The values are interim.** They were sampled on 2026-09-04 from a JPEG of a metallic gradient, because no flat-colour artwork exists. They are stops on a gradient, not authored brand colours. No Pantone, CMYK, foil or ink reference is on file, and none can be derived. Never sample a gold from the logo or from a photograph.

### Primary colours

| Name | Token | HEX | RGB | Use |
|---|---|---|---|---|
| Ground | `--cts-bg-base` | `#0A0A0A` | 10, 10, 10 | The field. Page background, header, footer, the space around every photograph |
| Gold | `--cts-primary` | `#B99040` | 185, 144, 64 | The primary button fill, links, eyebrow labels, the gold hairline, icons |

### Secondary colours

| Name | Token | HEX | RGB | Use |
|---|---|---|---|---|
| Gold bright | `--cts-gold-bright` | `#EBC853` | 235, 200, 83 | Hover and focus states, the focus ring, one small emphasis per view. Never a large area |
| Gold deep | `--cts-gold-deep` | `#825F2C` | 130, 95, 44 | Borders, dividers, disabled outlines, and text of 24 px or larger on Ground and Surface only. Never body text |

### Neutral colours

| Name | Token | HEX | RGB | Use |
|---|---|---|---|---|
| Ground | `--cts-bg-base` | `#0A0A0A` | 10, 10, 10 | As above |
| Surface | `--cts-bg-surface` | `#141414` | 20, 20, 20 | Cards, panels, form fields |
| Elevated | `--cts-bg-elevated` | `#1E1C19` | 30, 28, 25 | The one raised panel in a view: a quote, a notice, a menu. Warm-shifted towards the gold |
| Text | `--cts-text-primary` | `#E8E4DC` | 232, 228, 220 | Headings and body text. A warm off-white |
| Text muted | `--cts-text-muted` | `#A9A29A` | 169, 162, 154 | Captions, credits, hints, the rating line's date |
| Border | `--cts-border-subtle` | `rgba(185, 144, 64, 0.18)` | Gold at 18 per cent | Card edges and dividers. It resolves to `#2A2214` on Ground, `#322A1C` on Surface and `#3A3120` on Elevated |

Pure black `#000000` is not a token. It appears only as the ground inside the opaque logo files and behind them.

### Semantic colours

Status colours are user interface only. They never appear in a graphic, a headline, a badge of praise or any brand material.

| Purpose | Token | HEX | Use |
|---|---|---|---|
| Success | `--cts-success` | `#22A06B` | A sent-message confirmation: text and icon |
| Warning | `--cts-warning` | `#E8A33D` | A warning in a form, and the `CONFIRM BEFORE PUBLISHING` badge in the kit itself |
| Error | `--cts-error` | `#D9534F` | Form errors on Ground and Surface: text, icon and a 2 px field border |
| Info | none | none | There is no info colour. A neutral notice is an Elevated panel with Text and a Gold icon |

### Component values

The token file defines two button classes and no component tokens. The values below are proposals built only from the tokens above. Each is a default until the token file carries it.

| Role | Value | Use |
|---|---|---|
| Primary button fill | `var(--cts-primary)`, Gold | With a Ground label. In the token file as `.cts-btn-primary` |
| Primary button hover fill | `var(--cts-gold-bright)`, Gold bright | The label stays Ground |
| Secondary button | Transparent, a 1 px Gold border, a Gold label | In the token file as `.cts-btn-secondary` |
| Secondary button hover fill | Gold at 10 per cent | `#1C170F` on Ground, `#242018` on Surface |
| Focus ring | `var(--cts-gold-bright)`, 3 px, 2 px offset | Every interactive element, on every ground |
| Card edge and divider | `var(--cts-border-subtle)` | Decorative only. It measures 1.26 to 1 and is never the only edge of a field |
| Form field border | `var(--cts-text-muted)`, 1 px | Every input, select and text area |
| Icon | `var(--cts-primary)` or `var(--cts-text-primary)` | One colour per view |

### Contrast (WCAG 2.1, by calculation)

AA body text needs 4.5. Large text (24 px and larger, or 19 px and larger if bold), icons, field borders and focus rings need 3.0. AAA body needs 7.0. Every figure below was calculated from the hex values on 2026-10-12.

**Pairs to use**

| Text or mark | Background | Ratio | Result and use |
|---|---|---|---|
| Text | Ground | 15.61 | AAA. Headings and body |
| Text | Surface | 14.53 | AAA. Body in cards |
| Text | Elevated | 13.41 | AAA. Body in the raised panel |
| Text muted | Ground | 7.85 | AAA. Captions, credits, hints |
| Text muted | Surface | 7.30 | AAA. Captions in cards, field borders |
| Text muted | Elevated | 6.74 | AA. Captions in the raised panel |
| Gold | Ground | 6.72 | AA. Links, eyebrow labels, the secondary button |
| Gold | Surface | 6.25 | AA. Links in cards |
| Gold | Elevated | 5.77 | AA. Links in the raised panel |
| Gold bright | Ground | 12.18 | AAA. Hover text, the focus ring |
| Gold bright | Surface | 11.33 | AAA. Hover text, the focus ring |
| Gold bright | Elevated | 10.46 | AAA. Hover text, the focus ring |
| Ground | Gold | 6.72 | AA. The primary button label |
| Ground | Gold bright | 12.18 | AAA. The primary button label on hover |
| Surface | Gold | 6.25 | AA. An alternative dark label on Gold |
| Gold | Gold at 10 per cent on Ground (`#1C170F`) | 6.05 | AA. The secondary button label on hover |
| Gold | Gold at 10 per cent on Surface (`#242018`) | 5.50 | AA. The same, in a card |
| Text | Gold at 10 per cent on Ground (`#1C170F`) | 14.05 | AAA. Text on a tinted row |
| Gold deep | Ground | 3.42 | Large text of 24 px or more, borders and icons only |
| Gold deep | Surface | 3.18 | Large text of 24 px or more, borders and icons only |
| Success | Ground / Surface / Elevated | 5.95 / 5.53 / 5.11 | AA. Confirmation text |
| Warning | Ground / Surface / Elevated | 9.18 / 8.54 / 7.88 | AAA. Warning text |
| Error | Ground / Surface | 5.00 / 4.65 | AA. Error text and field borders |

**Pairs that fail and must not be used**

| Pair | Ratio | Rule |
|---|---|---|
| Gold on white | 2.95 | Never. This is why there is no light section and no light-ground logo |
| Gold bright on white | 1.63 | Never |
| Text muted on white | 2.52 | Never. No light ground exists in the system |
| Text on Gold | 2.32 | Never light text on a Gold fill. The label on Gold is Ground |
| Text on Gold bright | 1.28 | Never |
| Gold bright on Gold | 1.81 | Never gold text on a gold fill |
| Gold deep on Elevated | 2.93 | Fails even for large text and icons. Gold deep is not used on Elevated |
| Gold deep on Ground or Surface, below 24 px | 3.42 / 3.18 | Never body text, a caption or a small label |
| Error on Elevated | 4.29 | Not for body-size error text. Put forms on Ground or Surface |
| Border on Ground / Surface / Elevated | 1.26 / 1.30 / 1.33 | Decoration only. Never the only edge of a form field, never the only sign of a state |
| Surface against Ground, Elevated against Ground | 1.07 / 1.16 | A card cannot be told from the page by its fill. Every card carries the 1 px border |

Gold deep on white measures 5.80 and would pass. It is recorded only to close the question: the system has no white ground, so the pair is not used.

### Colour usage ratios

Share of a full view, photographs excluded and the logo included. A check, not a formula.

| Colour | Share | Where |
|---|---|---|
| Ground | About 70 per cent | The page, the header, the footer, the space around every photograph |
| Surface and Elevated | About 13 per cent | Cards, fields, the one raised panel |
| Gold, all three, the logo's gold included | 12 to 15 per cent at most. Outside the logo, 3 to 5 per cent | One button, links, one hairline, icons |
| Text and Text muted | What the words need | Never as a filled area |
| Status colours | None, outside a form | |

Ground, Surface and Elevated together make the black field: about 83 per cent, the same share as in the logo.

### Colour rules

- **Dark by default, with no exceptions.** No white, cream or light grey section, panel, card, slide or page.
- **The label on Gold is Ground.** Never Text on Gold.
- **One primary button per view.** It is the largest area of flat gold on the screen. A second action is the secondary button or a link.
- **One gold hairline per view** (section 15).
- **Gold deep is a line colour.** It is never body text and never used on Elevated.
- **No second accent hue.** No red, no purple, no green outside a form state. Photographs supply the rest of the colour, and one saturated colour photograph per view is enough.
- **No gradients.** The only gradient in the system is inside the logo artwork. No gold gradient on a button, a heading, a rule or a background. No metallic, foil or shine effect on live type.
- **No glows, no neon, no tinted photographs.**
- **No yellow stars.** The rating is one line of text (section 9).
- **Colour is never the only signal.** Links are underlined, errors carry text and an icon, the current navigation item has a hairline as well as a colour.
- **In social graphics:** one ground, `#0A0A0A`. At most one Surface or Elevated panel. Body text contrast 7 to 1 or better, because a feed shows a graphic at about a third of its size: use Text, Text muted on Ground or Surface, or Gold bright. Gold is for a label or a hairline, not for a paragraph.

---

## 3. Typography

Two families, both from Google Fonts under the SIL Open Font Licence. Both are agency proposals. Font files are not bundled in this kit.

| Role in the template | Font | Weights | Use |
|---|---|---|---|
| Display typeface | Cinzel | 600 | The homepage hero headline only |
| Heading typeface | Cinzel | 600 | H1 and H2 only. Capitals, letterspaced, short lines |
| Sub-heading typeface | Source Sans 3 | 600 | H3 and below. Cinzel gets fussy at small sizes |
| Body typeface | Source Sans 3 | 400 | Paragraphs, lead text, captions, every quotation |
| Utility typeface | Source Sans 3 | 600 | Labels, buttons, navigation, form labels |

```css
--cts-font-heading: "Cinzel", Georgia, serif;              /* H1, H2 only */
--cts-font-body:    "Source Sans 3", system-ui, sans-serif; /* H3, body, UI */
```

The token file sets the two families, six sizes and two line heights. The weights, the letter spacing and the Lead, H4, Label and Button rows below are proposals and are not tokens.

**Why Cinzel.** It is drawn from Roman inscriptional capitals, the lettering carved into stone buildings. It carries the weight of the building without imitating the blackletter. **Why Source Sans 3.** It is a humanist sans that stays readable in light type on black, where geometric faces go thin and glare.

**Blackletter is never live type.** The face in the logo is unidentified and exists only inside the logo image. It is not in the token file and it is not approximated. No headline, pull quote, drop capital, number, date or social graphic is set in blackletter, Old English, Fraktur or any gothic display face. One ornate voice, and it is the logo.

In email and documents where the two faces are unavailable, use Georgia for Cinzel and Arial for Source Sans 3.

### Type scale

| Role | Token | Font and weight | Desktop | Mobile | Line height | Letter spacing | Use |
|---|---|---|---:|---:|---:|---:|---|
| Display | `--cts-text-display: clamp(2.5rem, 5vw, 3.5rem)` | Cinzel 600 | 56 px | 40 px | 1.15 | 0.06em, capitals | Homepage hero only |
| H1 | `--cts-text-h1: clamp(2rem, 4vw, 2.75rem)` | Cinzel 600 | 44 px | 32 px | 1.15 | 0.06em, capitals | Page title, one per page |
| H2 | `--cts-text-h2: clamp(1.625rem, 3vw, 2.125rem)` | Cinzel 600 | 34 px | 26 px | 1.15 | 0.08em, capitals | Section headings |
| H3 | `--cts-text-h3: 1.5rem` | Source Sans 3 600 | 24 px | 24 px | 1.25 | 0 | Sub-sections, card titles, an artist's name |
| H4 | none; proposed 1.25rem | Source Sans 3 600 | 20 px | 20 px | 1.3 | 0 | FAQ questions, small headings |
| Lead | none; proposed 1.3125rem | Source Sans 3 400 | 21 px | 20 px | 1.5 | 0 | The one intro paragraph under a heading; a review quote |
| Body | `--cts-text-base: 1.125rem` | Source Sans 3 400 | 18 px | 18 px | 1.6 | 0 | Paragraphs |
| Small | `--cts-text-small: 0.875rem` | Source Sans 3 400 | 14 px | 14 px | 1.5 | 0 | Photo captions, credits, form hints |
| Label | none; proposed 0.875rem | Source Sans 3 600 | 14 px | 14 px | 1.3 | 0.08em, capitals | Eyebrows, the kind of piece above a caption |
| Button | none; proposed 1.0625rem | Source Sans 3 600 | 17 px | 17 px | 1 | 0 | Buttons |

Line heights: the token file holds two, `--cts-leading-heading: 1.15` and `--cts-leading-body: 1.6`. The other values in the table are proposals. Dark grounds need the extra leading in body text.

### Type rules

- **Cinzel is for H1 and H2 only.** Never body, never a button, never navigation, never a caption, never a quotation, never a price or a phone number, never below 26 px.
- **Cinzel headings are capitals, letterspaced, on short lines.** Write the heading in sentence case in the source and let the style set the capitals, so a screen reader hears a sentence. Six words at most on a line, three lines at most. If a heading needs more, it is a paragraph: set it in Source Sans 3.
- **Everything else is sentence case.** Buttons, navigation, labels, captions. Title case reads like an advert. Capitals are used only by Cinzel headings and the Label style.
- **Every quotation is Source Sans 3.** A customer's words are never dressed in the display face, and never set in italics.
- Headings and body are Text on the black field. Gold text is for links, the Label style and the secondary button. A Cinzel heading is Text, not Gold, unless it is the only gold thing in the view.
- Line length 55 to 70 characters for body text. Left aligned. Centre only the hero lines under the logo and a standalone call to action. No justified text.
- No italics for emphasis. Use weight 600. No underline except on links.
- Body text is 18 px. Nothing on the website is below 14 px, and Small is never used for a sentence the reader must act on.
- Numerals for hours, dates, sittings and sizes. The phone number is always "(225) 301-9527".
- **Never:** blackletter or any gothic display face; a tattoo-script, brush or handwritten face; a distressed or grunge face; a slab serif; a geometric sans. No type on a curve, no outlined type, no gold foil or gradient on type, no drop capitals.
- **Social graphic (1080 × 1350):** headline Cinzel 600 at 72 to 88 px, capitals, 0.06em, line height 1.15, 6 words at most; support line Source Sans 3 400 at 44 px, line height 1.4; label Source Sans 3 600 at 30 px, capitals, 0.08em. Smallest text allowed 36 px. Margins 80 px on all sides. Do not shrink web sizes into a graphic.
- **Print:** smallest text 8 pt; 10 pt for anything a client must read, such as aftercare steps. Every print layout is marked "artwork not print-ready".

---

## 4. Spacing system

Base unit: 8 px. The scale has six steps and nothing between.

| Token | Value | Use |
|---|---:|---|
| `--cts-space-1` | 8px | Between a label and its field; between a photograph and its caption |
| `--cts-space-2` | 16px | Between related items; mobile gutter and side margin |
| `--cts-space-3` | 32px | Between groups; card padding; desktop gutter |
| `--cts-space-4` | 64px | Section padding on mobile; the space around a single large photograph |
| `--cts-space-5` | 96px | Section padding on desktop |
| `--cts-space-6` | 128px | The hero, and the space above and below the one large photograph in a view |

When in doubt, use the next step up. Space is how this brand says what it will not say in words.

## 5. Border radius

| Token | Value | Use |
|---|---:|---|
| `--cts-radius-sm` | 6px | Buttons, inputs, the `CONFIRM BEFORE PUBLISHING` badge |
| `--cts-radius-md` | 12px | Cards and panels that hold text |
| `--cts-radius-lg` | 20px | A modal or a menu sheet only |

**Photographs are square-cornered.** Every tattoo photograph, in every placement, has a radius of 0. A rounded corner crops the work and softens the frame. The avatar is the one exception, and the platform applies that crop. No pill shapes, no circles around icons.

## 6. Borders

| Border | Value | When used |
|---|---|---|
| Hairline | 1 px, `--cts-border-subtle`, gold at 18 per cent | Card edges, dividers, the header's bottom edge, rows in the hours table. It measures 1.26 to 1 on Ground and is decoration only |
| Gold hairline | 1 px, Gold `#B99040`, 64 px long | The one signature rule in a view (section 15) |
| Form field | 1 px, Text muted `#A9A29A` | Every input, select and text area. 7.30 to 1 on Surface |
| Form field, error | 2 px, Error `#D9534F` | A field that needs fixing, with error text and an icon |
| Secondary button | 1 px, Gold | The outline button, as in the token file |
| Current navigation item | A 1 px Gold underline, 8 px below the text | With the colour change, never instead of it |

Sections are separated by space, not by lines and not by a change of ground. No ornamental rule, no fleuron, no scrollwork divider, no pointed-arch divider, no double rule, no dotted or dashed line.

## 7. Shadows

**None.** A shadow cannot be seen on black, and a glow is the wrong register. Cards carry the 1 px hairline and no shadow. Photographs carry no shadow, no glow and no frame. The token file has no shadow token.

| Template slot | Value |
|---|---|
| Small | none |
| Medium | none |
| Large | none |

## 8. Layout rules

| | Mobile (under 640 px) | Tablet (640 to 1023 px) | Desktop (1024 px and up) |
|---|---|---|---|
| Columns | 4 | 8 | 12 |
| Gutter | 16 px | 16 px | 32 px |
| Side margin | 16 px | 32 px | 32 px, content capped at 1200 px |
| Text column | Full width | 640 px at most | 640 px at most |
| Section padding, top and bottom | 64 px | 64 px | 96 px; 128 px for the hero and around a single large photograph |

- Maximum content width: 1200 px, set in `tokens/css-tokens.css`. Text measure: 640 px, a proposal. Minimum tap target: 44 px, from the button classes in the token file.
- Design at 360 px wide first and widen. The page reflows at 320 px wide and at 200 per cent zoom with no sideways scrolling.
- **Every photograph on file is portrait.** There is no landscape image. Design every slot as 4 to 5 or 3 to 4, or 1 to 1 for small pieces. There is no full-width landscape hero, no wide banner photograph and no 16 to 9 slot. On desktop a photograph sits beside text or alone in the middle of the black field; it is never stretched across the page.
- **No photograph is shown wider than its pixel width.** The six WebP files are 1080 px wide; the rest are 1434 to 1714 px.
- **Fewer pieces, larger.** A single view shows one large photograph, or at most four. A page shows at most 12. A portfolio page shows one group at a time. A wall of thumbnails reads as a volume shop.
- **Nothing sits on a photograph.** No headline, no caption, no button, no logo, no gradient scrim, no badge. The caption sits beneath.
- **The logo appears once per view** and does not follow the reader down the page.
- Each section opens the same way: optional eyebrow (Label), H2, optional Lead. Then one kind of content: a photograph with text, a set of pieces, the hours, a quotation or an FAQ. Not two.
- **Commissioned work leads every layout.** Walk-ins are stated once, plainly, as a fact, in the descriptor line and the hours block. They are never a headline, a banner, a badge or a pop-up.
- Preferred alignment: left. The hero is the one centred composition.
- Every control is at least 44 × 44 px with 8 px between neighbours.
- No carousel that moves by itself. No pop-ups, countdowns, counters, ribbons, "new" badges or sticky promotional bars.
- **Header.** Ground, 72 px tall, 1 px hairline bottom edge. The cross at 40 px at the left, linked to the home page. Navigation in Text, Source Sans 3 600, sentence case. The phone as the secondary button at the right. On the home page the header carries no mark at all, because the lockup is in the hero directly beneath it.
- **Hero.** Ground. The alpha lockup centred at 320 px wide (240 px on mobile) with its clear space. Beneath it the descriptor in Lead, the two buttons, and then the first photograph, large, with its caption. The proposed tagline, if shown, is one line of Text muted under the descriptor and is marked `CONFIRM BEFORE PUBLISHING`.
- **Footer.** Ground, a 1 px hairline top edge, no logo. The name in H3, the address, the phone, the hours, the Instagram handle `@cathedral_tattoostudio` and the dated Google rating line, in Text and Text muted. No website address: none exists. Any URL slot is `CONFIRM BEFORE PUBLISHING`.
- **Mobile action bar.** Fixed to the bottom, 64 px, Surface with a 1 px hairline top edge. "See the work" and "Call or text" at equal width. It hides while the on-screen keyboard is open.

## 9. Cards

| Property | Value |
|---|---|
| Background | Surface `#141414` on Ground. Elevated `#1E1C19` for the one raised panel in a view |
| Border | 1 px `--cts-border-subtle`. Always, because the fill alone is 1.07 to 1 |
| Radius | 12 px (`--cts-radius-md`). 0 where the card is only a photograph and its caption |
| Shadow | None |
| Internal padding | 32 px on desktop, 16 px on mobile |
| Header treatment | H3 in Text; body in Text; a Label in Gold above where needed |
| Hover behaviour | The border becomes Gold. No lift, no scale, no shadow, no image zoom |

Components for a dark, portfolio-led site:

- **Piece.** The basic unit, and not a card. A square-cornered photograph on Ground with no border, at 4 to 5 or 3 to 4. Beneath it, 8 px down: a Label in Gold naming the kind of piece ("Memorial and portrait"), then the caption in Small, Text muted: "Memorial portrait, forearm. Roger Cazares." Nothing else. No like count, no date, no style tag cloud.
- **Feature piece.** One photograph alone in a view, at 480 to 640 px wide on desktop and full column width on mobile, with 128 px of Ground above and below. This is the default way to show work.
- **Piece set.** Two, three or four pieces in a row on desktop, two in a row on tablet, one per row on mobile. Gutters of 32 px. All at the same ratio. Sorted by what the piece is: memorial and portrait, black and grey, fine line and dotwork, lettering and script, large scale, colour. Never by style jargon and never a mixed mosaic.
- **Artist card.** Surface, 12 px radius. A portrait at 4 to 5, the name as H3, the line "Tattoo artist at Cathedral Tattoo Studio" in Small, Text muted, one sentence about the work, and a link to the work. Roger Cazares has work on file and no usable portrait: his card uses a photo slot for the portrait and a real piece beside it. The card for Mikayla Paul is a photo slot throughout and her name is `CONFIRM BEFORE PUBLISHING`. Cleo has left the studio and has no card. Nobody is called an owner or a founder, and no card states years of experience.
- **Review quote.** Elevated, 12 px radius, 32 px padding, a 64 px Gold hairline at the top left. The quotation verbatim in Lead, Text, upright, in Source Sans 3. Beneath: the first name in Source Sans 3 600, then "Google review" in Small, Text muted. No star row, no decorative quotation marks, no photograph, no Cinzel. One per view. Only quotations from the approved list in files 5 and 6.
- **Rating line.** One line of Small, Text muted: "5.0 on Google from 6 reviews (October 11, 2026)". Always with its date. Re-check before use. No star icons, no badge, no platform logo.
- **Hours and address block.** Surface, 12 px radius. H3 "Hours". A two-column table: the days in Text, the hours in Text, rows 48 px tall, a hairline between rows, no zebra stripes. Monday to Thursday, 10am to 6pm. Friday and Saturday, 10am to 7pm. Sunday, closed. Beneath: "Walk in, or book ahead." Then the address, 1318 Florida Ave SW, Denham Springs, LA 70726, and the phone button.
- **What to expect.** Three or four numbered steps on Ground, each a numeral in Gold (Source Sans 3 600 at 24 px, never Cinzel), an H4 and one or two sentences. For the first-timer. No icon set of needles, no illustration.
- **FAQ.** Ground. Each question is an H4 in Text with a plus icon in Gold; the answer in Body. A hairline between items. One open at a time is not enforced.
- **Open dates.** Surface, 12 px radius. H3, a short list of months with one plain status word each, and the "Check open dates" button. Shown only where real dates are supplied; otherwise the component is left out. Never "limited", never a count of spaces.
- **Neutral notice.** An Elevated panel with Text and a Gold icon.
- **Photo slot** and the **`CONFIRM BEFORE PUBLISHING` badge.** Kit components for anything missing or unapproved. File 8, section 3.

No price list, price card, "from" figure, deposit note, offer, countdown or booking form exists as a component. No piercing component exists.

## 10. Buttons

All buttons: Source Sans 3 600 at 17 px, sentence case, no full stop, line height 1, 48 px tall (the token file's minimum is 44 px), 24 px side padding, 6 px radius. The labels are fixed: **"See the work"**, **"Call or text (225) 301-9527"**, and, only where dates are shown, **"Check open dates"**. Never "Book now", "Book online" or "Get inked". There is no booking form.

### Primary

- Background: Gold `#B99040`
- Text: Ground `#0A0A0A` (6.72 to 1)
- Border: none
- Radius: 6 px
- Padding: 24 px left and right; 48 px tall
- Hover: Gold bright `#EBC853` fill, Ground label (12.18 to 1)
- Press: Gold bright fill, held
- Focus: 3 px Gold bright outline, 2 px offset
- Disabled: avoid disabled buttons. If one is unavoidable: Surface fill, Text muted label, a 1 px Gold deep border, with the reason in text beside it
- Label: "See the work"

### Secondary

- Background: transparent
- Text: Gold `#B99040` (6.72 to 1 on Ground)
- Border: 1 px Gold
- Hover: Gold at 10 per cent fill; the label stays Gold (6.05 to 1 on Ground)
- Press: the hover state, held
- Focus: 3 px Gold bright outline, 2 px offset
- The phone button is this style. It reads "Call or text (225) 301-9527", carries a phone icon at 20 px to the left of the label, and links `tel:+12253019527`. In a narrow header or the mobile action bar it may shorten to "Call or text".
- "Check open dates" is this style.

### Text link

- Colour: Gold on Ground, Surface and Elevated
- Underline: always, 1 px, 3 px below the text
- Hover: Gold bright
- Focus: 3 px Gold bright outline, 2 px offset
- A link names its destination: "See the black and grey work". Never "Learn more" or "Click here".

### Button rules

- One primary button per view. A second "See the work" on the same screen is a text link.
- The phone is a button, not a bare link. It is the secondary action.
- Two buttons together are equal width, stacked or side by side, capped at 520 px for the pair. Primary first.
- Never a gold button with light text. Never a gradient, a shine, a glow or an icon-only button. Never a button on a photograph.
- There is one button system. No inverse pair is needed, because there is no light ground.
- Focus is never removed.

### Form fields

There is no booking form. A simple contact form may be designed as a component and is `CONFIRM BEFORE PUBLISHING` until the studio agrees to receive messages through one. Label above the field, always visible: Small at weight 600, Text, sentence case. Field 48 px tall, text at Body size and never below 16 px, Surface fill, 1 px Text muted border, 6 px radius. Hint beneath in Small, Text muted. Focus: 3 px Gold bright outline. Error: 2 px Error border and Error text in Small at 600 with an icon, saying what to do. Optional fields are marked "(optional)" in words. One column on every screen size. Labels are literal: "What do you want tattooed?", not a clever phrase.

## 11. Iconography

**Primary icon system:** a line icon set with square ends and mitred joins is proposed. Tabler Icons or Lucide with the line cap and line join set to square and mitre both meet this, under open licences. No icon files are bundled in this kit. Record the set and its licence when it is chosen.

- Stroke weight: 1.5 to 2 px on a 24 px grid. Thin lines disappear on black. Scale the stroke with the size.
- Corner style: sharp. No rounded ends, no rounded joins.
- Filled versus outline: line icons only. No fill, no two-tone, no icons inside circles or shields.
- Default size: 24 px beside text, 20 px inside a button, 32 px in a list of steps, 48 px at most on a page. 96 px in a social carousel slide.
- Approved colours: Gold, or Text. One colour per view. Gold deep only at 24 px and larger on Ground or Surface.
- Emoji usage: none.
- Unicode symbol usage: none as icons.
- An icon always has a text label. The phone icon never stands in for the phone number.
- Icons are functional, not branded. The logo carries the personality.
- **Never:** a tattoo machine, a needle, a drop of ink, a skull, a rose, a dagger, a cross used as an icon, a church, a pointed arch, a quatrefoil, a halo, praying hands, or any gothic ornament used as interface furniture. One ecclesiastical voice in the brand, and it is the logo. No star icons for the rating.

Icons needed:

| Group | Icons |
|---|---|
| Contact | phone, message (text), clock (hours), map pin (the address), external link |
| Navigation | menu, close, chevron down, arrow right, arrow left |
| Content | plus and minus (FAQ), image (photo slot), camera (photo slot), calendar (open dates) |
| State | alert circle (error), check (sent), info |
| Social | The platforms' own marks for Instagram, Facebook and Google, in one colour, at 24 px, used only as links and under each platform's terms |

No icon for pricing, payment, a shopping basket, a booking form, piercing or a gift card: none of those exists.

## 12. Photography

### What exists

29 photographs in `assets/photos/`, each listed with its caption, use and cautions in `assets/photos/PHOTO-MANIFEST.md`: 27 finished tattoos and 2 original designs. All are the work of Roger Cazares. All are portrait. 21 are JPEG at 1434 to 1714 px wide; 6 are cleaned WebP copies at 1080 px wide; the 2 designs are 1536 × 2048.

**What does not exist:** work by Mikayla Paul, any view of the studio inside or out, a publishable portrait of anyone at work, a client's face, a process shot, a healed and fresh pair, a recorded cover-up, and any landscape image. Each of those is a labelled photo slot.

### Overall style

Dark, quiet and documentary. Phone photographs of real work, close on the piece, on skin, most against a dark or blurred room. Black does the framing. The portfolio is the product, so the image gets the room and nothing decorative comes near it.

### Fewer pieces, larger

This is the visual form of the position. Twenty pieces at full width read as a studio that chooses. A hundred thumbnails read as a volume shop. So: one feature piece alone in a view wherever possible; sets of at most four; at most 12 on a page; one group of work per portfolio page. When choosing between adding a photograph and enlarging one, enlarge.

### Offset the severity of the mark

Customers describe the place as welcoming and comfortable for someone anxious. A black and gold blackletter identity says none of that, and to a nervous person it can say the opposite. Do not soften the logo. Change what sits next to it:

1. **Warm directional light.** Light from one side, warm in tone, as from a window or a lamp. Row 17 of the manifest is the only frame with daylight in it; use it where warmth is needed.
2. **Faces.** An artist looking at the work, a client at ease mid-sitting. None is on file. These are photo slots until consented photographs arrive.
3. **The room.** The door, the front room, the chair. None is on file. Photo slots.
4. **Space.** Generous black around every image, sentence-case type, short lines.
5. **Subject order.** Beside the logo, lead with a piece that reads as care: the portrait in row 1, the mother and child in row 2, the hands in row 10. Not the most severe image on file. Rows 23 and 28 never sit in the same view as the logo.

### Subjects, in order of value

1. The work: close, well lit, on a dark or neutral ground.
2. The making: hands, a stencil, the drawing. Not on file. Rows 28 and 29, finished designs on a screen, are the nearest thing.
3. The artists at work, all of them. Not on file.
4. People at ease. Not on file. Written consent for every face.
5. The room. Not on file.

### Lighting

As found. Many frames are lit by a ring light or a flash, flat and close. That is acceptable for the work. A modest exposure correction is allowed. Relighting is not. Never add a warm glow, a vignette or a light leak to fake the direction above.

### Composition

- The piece is the subject. Keep the whole piece in frame, with the limb or the back it sits on.
- Crop to remove a background, a face, a logo on clothing or another artist's tattoo, as the manifest's cautions say. Never crop through the piece.
- **The RC monogram stays.** It is Roger Cazares's signature on his own photographs, and it is large. A crop keeps it whole or leaves it wholly outside the frame. It is never cut through, erased, covered or recoloured. In the one view that holds the Cathedral lockup, choose a crop where the monogram is outside the frame or far from the lockup, so the two never read as a pair.
- Ratios: 4 to 5 (feature pieces, social), 3 to 4 (sets), 1 to 1 (small pieces and grids of four). Nothing wider.
- Corners: square. No frame, no border, no shadow.
- No text on a photograph. Captions sit beneath: "[piece], [placement]. Roger Cazares."

### Colour grade

Natural and true. Black and grey work is reproduced accurately: neutral greys, open shadows, no crushed blacks, no warm grade that turns grey wash muddy. Colour pieces stay as tattooed. Redness around fresh work is real and stays. No filter, no duotone, no gold tint, no desaturation of a colour photograph. Row 19 is black and white as supplied and stays so; no other photograph is converted to match.

### Authenticity

Use:

- The 29 files in this kit, as listed.
- Real captions: the piece, the placement, the artist.
- A labelled photo slot wherever the picture does not exist.

Avoid:

- Stock photographs of any kind, and stock tattoo imagery above all.
- AI-generated tattoos, skin, people, rooms or logos.
- Any retouching of a tattoo, and any compositing, object removal, generative fill, expansion, upscaling or background swap.
- A wearer's recognisable face. Crop it out; do not blur.
- Licensed characters: no film, cartoon, game or comic character, in the tattoo or in the background.
- A background presented as the studio. No photograph on file shows it.
- Another shop's name, sign or watermark, anywhere in the frame.
- Neon or purple lighting; a flat lay of gloves and machines; hands forming a heart.
- A before and after of any kind, and above all on a memorial piece.
- A crowded grid that gives every piece the same weight.
- Religious imagery used as anything but tattoo work in a photograph. It is never a hero, a background, a texture or the picture beside a headline.

### What is retired

| Retired | Replaced by |
|---|---|
| A wall of thumbnails | One feature piece; sets of four at most |
| Text, a logo or a button over a photograph | Text on the black field beside or beneath it |
| The full lockup squeezed into a circular avatar | The rose window; the cross below 64 px |
| The RC monogram as a profile picture or a header | The Cathedral marks. The monogram stays on his photographs only |
| Any light section, and gold text on white | The dark system throughout |
| Star rows and review badges | One dated line of text |
| Blackletter headlines and gothic ornament | Cinzel for H1 and H2, Source Sans 3 for the rest, space for the ornament |
| A background from another shop's room | A crop to the piece, or a photo slot |

## 13. Illustration and generated visuals

None. There is no illustration style, no mascot, no pattern, no texture and no ornament library. The only permitted generated graphics are abstract layout elements built from the tokens: a flat field of a token colour, a hairline, a panel, a square frame for a photograph. File 8, section 4 has the rule in full.

The original designs in rows 28 and 29 of the photo manifest are photographs of an artist's work. They are shown as photographs, with a caption. They are not illustrations for the brand, and nothing is drawn in their style.

## 14. Backgrounds

- Solid: Ground `#0A0A0A` for every page, slide and graphic. Surface and Elevated as panels inside a layout, never as a full background. Pure black `#000000` only as a panel behind an opaque logo file.
- Gradient: none.
- Photography: never behind text, never as a full-bleed background, never darkened to serve as one.
- Pattern: none. No tiled cross, no repeated rose window, no tracery.
- Texture: none. No stone, no marble, no gold leaf, no grain, no smoke, no noise.
- Full bleed: the Ground itself. On mobile a feature piece may run to the edges of the screen.
- Overlay: none. No scrim, no vignette, no tint.

### The logo's parts as a background device

Not permitted. The rose window, the cross and the tracery are never enlarged, ghosted, cropped or tiled behind content. The reason is the raster: enlarged, it shows its pixels, and at low opacity on black it turns to mud.

## 15. The gold hairline

The one graphic device in the system. It is not taken from the logo's artwork; it is the plainest form of the same idea: a little gold on a lot of black.

| Rule | Value |
|---|---|
| What it is | A straight line, 1 px, Gold `#B99040`, 64 px long, square ends |
| Where it goes | Above an eyebrow or an H2, aligned to the text's left edge, with 16 px beneath it. Or at the top left inside the review quote panel |
| On the website | One per view. It is the only gold thing in that view besides a button or a link |
| In graphics | 2 px and 120 px long on a 1080 px canvas. One per graphic |
| Never | Full width, doubled, vertical, angled, dashed, tapered, ended with an ornament, glowing, gradient, or animated. Never a frame around a photograph. Never under the logo |

It replaces every divider, flourish and ornament a gothic brand might reach for.

## 16. Motion

The identity brief says: let it be still. Transitions short, easing gentle, nothing that bounces. The values below are restrained defaults and are marked as defaults.

| Item | Value | Source |
|---|---|---|
| Default transition duration | 200 ms or shorter | Default, from the identity brief's direction |
| Reduced motion | Every transition removed under `prefers-reduced-motion` | Default |
| Autoplay | None. No autoplay video, no carousel that moves by itself | Identity brief |
| Easing | `ease-out` | Default |
| Hover | A colour or border change only: primary to Gold bright, secondary to a 10 per cent Gold fill, links to Gold bright, a card's border to Gold. 150 ms | Default |
| Press | The hover state held. No scale, no bounce | Default |
| Focus | The 3 px ring appears at once, with no transition | Default |
| Entrance animation | None. Content is present when the page loads. A photograph may fade in over 200 ms as it loads, and nothing more | Default |
| Avoid | Parallax, scroll-triggered reveals, animated gradients, a shimmer or shine across gold, image zoom on hover, counters that count up, sliding carousels, a cursor effect, anything that moves by itself | Identity brief and default |

In video, cuts are plain. No logo sting is specified, and none is designed here. The logo is never animated: no shine passing over it, no build, no flicker.

# Claude Design Prompt: Cathedral Tattoo Studio Social and Digital Content Template System

Version 0.1 · 2026-10-12 · Prepared by BlakSheep Creative

You are acting as a senior brand designer, design systems architect, social media designer, information designer, accessibility specialist and production copywriter.

Extend the master brand design kit already built in this project into a complete, reusable, editable social and digital content template system for **Cathedral Tattoo Studio**, a custom tattoo studio in Denham Springs, Louisiana. Build a system: tokens, components, variants, named layers, safe zones and recomposition between sizes. Do not produce a set of one-off sample posts.

Do not pause for general discovery. Produce the complete first version. Where a fact is unknown or waits on the studio, place a visible, editable field labelled exactly `CONFIRM BEFORE PUBLISHING` and say what is needed. Never invent a fact, a figure, a review, a client, a piece of work, an artist or a date.

**Run this second.** The master brand design kit (`1 - MASTER PROMPT.md`) must already exist in this project. This system inherits its tokens and components and adds nothing to the brand.

**Read first:** `0 - READ ME FIRST.md`, files `2` to `6`, `8 - Asset Manifest and Production Rules.md`, `assets/logos/README.md`, `assets/photos/PHOTO-MANIFEST.md`, `tokens/css-tokens.css`. This prompt is self-contained if any of those is missing. Where this prompt and `assets/photos/PHOTO-MANIFEST.md` disagree about a photo, the manifest wins. Where this prompt and `tokens/css-tokens.css` disagree about a value, the token file wins.

**Format to match:** the social, video and data content section of the reference kit format: the PDF in `assets/references/` whose file name ends `_REFERENCE-ONLY.pdf`, pages 31 to 47. Match its structure, depth and order (section 16 lists the plates). Take nothing else from it: no colour, typeface, wording, photograph, motif, figure or fact from that file belongs here. That file shows light templates and chart plates. This client has neither: every canvas here is dark, and the data plates are reduced as section 11 says.

## Status and provenance

**Nothing here has been reviewed or approved by anyone at the studio. Nobody there has been interviewed.** The position, tagline, voice, typefaces, colour roles, every template and every line of sample copy are BlakSheep Creative proposals, written from the Google Business Profile (read 2026-10-11), Facebook, Instagram, the Louisiana Secretary of State filing, six Google reviews and the photographs on file. Label the finished library on its cover and in its footer: "Draft by BlakSheep Creative, version 0.1, 2026-10-12. Not reviewed or approved by the studio." Do not describe the output as the client's approved templates.

What is the client's own, and is not a draft: the name; the logo artwork (a gold gothic cathedral lockup); gold on black; the photographs; walk-ins and the published hours; the text of the reviews.

What is an agency decision (Clint Sanchez, BlakSheep Creative): Cathedral is the front-facing brand (2026-09-04); the logo ships as the existing raster, with no redraw (2026-09-05); the derived digital logo set in `assets/logos/`; the cross is the small mark; the address is confirmed (2026-09-05).

One decision is open and this prompt does not resolve it. The agency positioned the studio as premium in September. The live shop takes walk-ins six days a week and has no minimum. Every template is written to be true either way: commissioned work leads, walk-ins are stated plainly as a fact, and the position is shown through restraint and never claimed in words.

---

# 1. Dependency and token flow

Every value in this system comes from the master kit. State this flow on the first plate of the output:

```
MASTER BRAND KIT        tokens/css-tokens.css  (--cts-primary, --cts-gold-*, --cts-bg-*, --cts-text-*, --cts-border-subtle, --cts-space-*, --cts-radius-*, --cts-font-*)
        ↓
SOCIAL CONTENT SYSTEM   tokens/social.css      (formats, safe zones, social type scale, rating and data aliases; aliases only)
        ↓
CONTENT FAMILY          finished piece, healed work, process, open dates, walk-in notice, first time, portrait reference, cover-up, aftercare, artist, review, rating, hours and location, FAQ
        ↓
PLATFORM FORMAT         one canvas component driven by the Platform Specifications table
        ↓
FINAL ASSET             a composed, editable template
```

Rules for the token layer:

1. `tokens/social.css` introduces no raw colour and no font. Every social token is an alias of a master token or a size for a named canvas. Examples: `--social-ground: var(--cts-bg-base)`, `--social-panel: var(--cts-bg-surface)`, `--social-panel-raised: var(--cts-bg-elevated)`, `--social-headline-color: var(--cts-text-primary)`, `--social-caption-color: var(--cts-text-muted)`, `--social-hairline: var(--cts-primary)`, `--social-keyline: var(--cts-border-subtle)`, `--social-label-color: var(--cts-primary)`.
2. Master tokens in use, by their real names: `--cts-bg-base` (Ground `#0A0A0A`), `--cts-bg-surface` (Surface `#141414`), `--cts-bg-elevated` (Elevated `#1E1C19`), `--cts-primary` (Gold primary `#B99040`), `--cts-gold-bright` (Gold bright `#EBC853`), `--cts-gold-deep` (Gold deep `#825F2C`), `--cts-text-primary` (Text `#E8E4DC`), `--cts-text-muted` (Text muted `#A9A29A`), `--cts-border-subtle` (`rgba(185,144,64,0.18)`), `--cts-warning` (`#E8A33D`, for the `CONFIRM BEFORE PUBLISHING` badge only), `--cts-font-heading` (Cinzel), `--cts-font-body` (Source Sans 3), `--cts-space-1` to `--cts-space-6` (8, 16, 32, 64, 96, 128 px), `--cts-radius-sm`, `--cts-radius-md`, `--cts-radius-lg` (6, 12, 20 px). If the master kit built in this project renamed any of these, use its names and keep the values.
3. Canvas sizes and safe zones live in one place, the Platform Specifications table (section 7), and reach templates as `--format-<name>-w`, `--format-<name>-h` and `--safe-*` tokens. No template holds a typed-in dimension.
4. A change to `tokens/css-tokens.css` must flow through every template. Do not paste a hex value into a component. The colour values are interim, sampled from a JPEG gradient, and are expected to change once.
5. Do not redesign the brand. No new colour, font, logo treatment, gradient, pattern, texture, illustration style, icon style or photographic style. No light ground, ever.

---

# 2. Brand facts to inherit

| | |
|---|---|
| Name | **Cathedral Tattoo Studio**; "Cathedral" on second reference. Never "CTS" in text. The legal entity name is never printed |
| What it is | A custom tattoo studio in Denham Springs, Louisiana |
| Work | Black and grey, fine line and dotwork, lettering and script, colour, cover-ups, memorial and portrait work, large-scale sleeves and back pieces |
| Address | 1318 Florida Ave SW, Denham Springs, LA 70726. It may be printed. There is one address and no other |
| Phone | (225) 301-9527, link `tel:+12253019527`. Always worded "Call or text" |
| Email | Not printed anywhere |
| Website | None. No domain is registered. No URL appears anywhere. Any URL slot is `CONFIRM BEFORE PUBLISHING` |
| Hours | Monday to Thursday 10am to 6pm. Friday and Saturday 10am to 7pm. Closed Sunday |
| Booking | Walk-ins and booked work. Approved wording: "Walk in, or book ahead." |
| Artists | Roger Cazares may be named; his Instagram is `@rc_tattoos`. Mikayla Paul and Cleo are named by customers in reviews, but neither has agreed to be named in marketing and Cleo's surname is unknown: every use of either name is `CONFIRM BEFORE PUBLISHING`. Title for anyone: "Tattoo artist at Cathedral Tattoo Studio" |
| Rating line | Always exactly: "5.0 on Google from 6 reviews (October 11, 2026)". Re-read the profile and re-date it before every use |
| Market | Denham Springs. "Denham Springs and the Baton Rouge area" is the only wider wording |
| Prices | None. There is no shop minimum and no published price. No figure appears in any template |
| Position (draft) | "Considered work, and a room that is easy to walk into." |
| Tagline (draft) | "Work worth carrying". `CONFIRM BEFORE PUBLISHING`: the studio has not seen it |
| Descriptor (draft) | "Custom tattoo work in Denham Springs. Walk in, or book ahead." |
| Voice | A skilled tradesperson across a counter. Plain, specific, careful, honest about limits, unhurried, at ease, attributive. Contractions, short sentences, "you" for one reader. No exclamation marks, no ellipses, no dashes as punctuation, no emoji. Never liturgical or gothic prose |

**The design idea.** A cathedral mark over work that carries weight, in a room with the door open. Black is the field, about 83 per cent of any layout. Gold is gilding, 12 to 15 per cent at most. The mark is gothic; the words are plain. Show fewer pieces, larger.

**Platforms and handles on record.** Instagram, studio account `@cathedral_tattoostudio` (with the underscore; 242 followers and 75 posts when last read on 2026-09-19) · Google Business Profile "Cathedral Tattoo Studio" (six-day hours, 6 reviews, regular posts from the studio) · Facebook, the studio page (page URL `CONFIRM BEFORE PUBLISHING`) · TikTok: unverified, no handle on record, `CONFIRM BEFORE PUBLISHING`. A different, empty Instagram account exists without the underscore: it is not the studio's and is never printed.

**Two accounts, one rule.** `@rc_tattoos` is Roger Cazares's own account. It predates the studio, it carries most of the audience, and it stays his. This system builds no template, avatar, cover, highlight, bio or caption style for it, and never renames or restyles it. This system is for the studio account and the studio's other profiles. The studio feed is never a mirror of the artist's account: it covers what his account cannot, which is the room, every artist, open dates, process, aftercare and straight answers. It credits every artist by name on their own work.

---

# 3. Four rules above all others

Present these as four rule cards at the head of the output, as the reference kit format does.

**Recompose, never resize.** One message is rebuilt for each ratio. A 4:5 finished-piece card puts the tattoo full width with the credit beneath on black; the 4:3 Google post puts the tattoo left and the credit right; the 9:16 version sets the tattoo between the safe-zone bands with the credit lifted clear of the bottom. A tattoo is never cropped through to make a ratio fit: the black margin grows.

**The work leads, and the artist is named.** The photograph is the largest thing on any canvas that has one, at 60 per cent of the area or more. Type is small and few. Every piece of work carries its credit in the form "[piece], [placement]. [artist's full name]." No piece is shown as "the studio's" or "the team's", and no feed post exists only to repeat one from an artist's own account.

**Black is the field. Gold is one small thing.** Every canvas is dark: Ground `#0A0A0A`, with Surface and Elevated as panels. There is no light template and no light variant. Gold appears on a canvas as one hairline, or one small element (a label, a ring, a button), plus the logo if the logo is present. Colour is never the only signal: an open date carries a ring and is also listed in words.

**Plain, real, and only what the studio has said.** Real photographs from `assets/photos/` only, with the tattoo untouched. Every post passes the prohibited-claims register in section 4. The only figure that may be published is the dated Google rating. An invented date, sitting count, review or artist detail breaks section 4; it is never a harmless estimate.

---

# 4. Claims: what may never appear

This section is part of the components, not a note beside them. A social post is an advertisement published under the studio's name.

## 4.1 The prohibited-claims register

Binding. It overrides every other instruction and every source.

| # | Never | Use instead |
|---|---|---|
| 1 | Ownership: "owner", "founder", "owned and operated", "family-owned", for anyone | "Tattoo artist at Cathedral Tattoo Studio" |
| 2 | Tenure: any number of years, "since", "established", "experienced", "veteran". The entity was registered in May 2026 | The work, shown and credited |
| 3 | Licensing and hygiene in the brand's own voice: "licensed", "certified", "sterile", "clean", "safe", "hospital-grade", "health department approved" | Nothing. There is no on-brand version of this claim yet |
| 4 | Premium words: premium, luxury, high-end, elite, exclusive, bespoke, boutique, upscale | Restraint: more black, fewer and larger images |
| 5 | Superlatives: premier, best, top-rated, #1, award-winning, world-class, utopia | The dated rating line, or a customer's verbatim sentence |
| 6 | Price: any figure, "from", a minimum, an hourly rate, a deposit, "affordable", "price friendly", a discount, a promo, a sale, a giveaway, a countdown, "spots going fast" | "Tell us what you're thinking about and we'll tell you what it'll take." |
| 7 | Booking model: "by appointment", "appointment only", "booking required", "limited intake", "waiting list" | "Walk in, or book ahead." |
| 8 | Other businesses: a competitor's name, a comparison, named or unnamed, any reference to a previous shop | Say what Cathedral does |
| 9 | Piercing, in any layout. It is unconfirmed | Nothing |
| 10 | The move: "new location", "moving", "bigger space", a second address | 1318 Florida Ave SW, and nothing about a move |
| 11 | Reviews: an invented or paraphrased review, a tidied quote, a rounded or undated count, star graphics, any quote not on the approved list | Section 10 |
| 12 | Religion: "Christian", "faith-based", scripture used as marketing copy, denominational framing. Religious imagery appears only as tattoo work in photographs | Name the piece plainly in its credit |
| 13 | Category cliches: "ink" as a noun, "inked", "parlor", "body art", "bring your vision to life", "your body is a canvas", "no regrets", "journey", "transform" | Piece, work, sitting, session, healed, cover-up, placement |
| 14 | Grief: "honour your loved one", "keep their memory alive", any before and after on a memorial | Be useful: say what photo to bring |

Also never, on any canvas or in any caption: "Book now", "Get inked", "Book online" (no booking form exists); "our team", "our talented artists"; "sanctuary", "sacred", "hallowed", "ritual", "congregation" or any other church vocabulary in the brand's own voice; a joke about pain, regret or a client's idea; anything that pitches an impulse or party tattoo; hate imagery; a licensed character.

## 4.2 What the studio's existing graphics do, and what changes

Ten social graphics are on file from the studio's own posting. One format is worth keeping. The rest of the habits are retired, and the templates are built so each is hard to repeat.

**Keep and restyle:** the monthly availability calendar. It is the studio's own format and its own phrase ("open dates"), it is real behaviour, and clients use it. Section 9.4 rebuilds it in the palette and type of the master kit.

**Retire:**

- **Blackletter set as live type** for words such as a month name or a headline, laid across a photograph. The blackletter exists only inside the logo file. No blackletter or second gothic face is ever set as type.
- **The RC monogram used as a studio graphic**, for example as the background of a calendar. It is Roger Cazares's signature on his own work and is never a logo, a background, an avatar or a watermark for the studio.
- **"Now booking" with a range of months, and "Available" with a date, as promotional headlines.** Open dates are information. They are posted as a calendar, without a headline that sells.
- **A flash-event announcement.** No event, sale, giveaway or flash-day template is built.
- **Type across the middle of the image**, over the subject.
- **Tilted, heavily filtered or darkened photographs.** Photographs are level and in natural colour.
- **The old interior photograph**, which shows film posters with licensed characters and a window decal that reads "by appointment". It is not used, and there is no interior photograph on file to replace it.
- **Red hand-drawn circles** as date markers. There is no red in the palette.
- **Emoji, exclamation marks and capitals for emphasis** in captions.

## 4.3 The three-part test for every post

Before a template is marked complete, its sample copy passes all three:

1. Every line passes the register in 4.1, in the artwork, the caption, the alt text and the hashtags.
2. It states no fact the studio has not published or confirmed. If it does, the fact sits in a `CONFIRM BEFORE PUBLISHING` field.
3. Every piece of work shown is credited to the artist who made it, by name, and no piece is shown that is not in `assets/photos/PHOTO-MANIFEST.md`.

---

# 5. Visual layer

**The idea.** The canvas should look like the logo does: a black field with a little gold on it, and one thing given all the room. A real photograph of a tattoo with a plain credit beats a designed card. The templates exist for the posts that need words: dates, hours, steps, answers.

## 5.1 Logo and mark

The logo exists only as a raster. There is no vector and none is coming. Use only the files in `assets/logos/`. Composite them, unchanged. Never redraw, trace, vectorise, re-letter, recolour, outline, crop into, add effects to or AI-generate any part of the lockup, the rose window or the cross. Never set the name in live type as a substitute for the logo. Paths in the table are relative to `assets/logos/`.

| Use | File | Rule |
|---|---|---|
| Full lockup on Ground | `lockup-1200.png`, `lockup-600.png` | Shown at 128 px wide or more, always. Feed graphics are seen at about a third of their pixel size, so on a 1080 px canvas the lockup is placed at 400 px wide or more. Clear space: the height of the cross finial, about 8 per cent of the lockup height, on every side |
| Full lockup over a photograph | `lockup-1200-alpha-DARK-BACKGROUNDS-ONLY.png` | Only on a dark, low-detail area of a photograph, never over skin, a tattoo or a face. Same size and clear space |
| Avatar, 64 px and larger | `avatar-rose-512.png` | The rose window. Section 12.1 |
| Small mark, 16 to 63 px | `avatar-cross-512.png`, `favicon-64.png`, `favicon-48.png`, `favicon-32.png`, `favicon-16.png`, `favicon.ico`, `apple-touch-icon-180.png` | The cross. The lockup and the rose window do not survive below their floors: step down to the next element and never scale down and hope |
| Link preview | `og-card-1200x630.png` | Use the supplied card as it is |
| Square placement that must show the name | `social-square-1200.png` | Shown at 384 px or larger only, so the lockup inside it stays legible. Not the avatar |
| Cover | `cathedral-tattoo-studio-denham-springs-cover.jpg` | Section 12.2 |
| Not for use here | `source/` (the source rasters and the CTS badge, which is for stamps and stickers only) and `artist-mark-rc/` | In no social template |

**Where the logo appears.** Once per view. Because the lockup needs 400 px on a feed canvas, it appears only on carousel covers and closing slides, story closers, reel end frames, link previews and profile covers. Feed cards that show a tattoo carry no logo: the account name and the rose-window avatar sit beside every post, and the tattoo should not share its canvas with a second image.

**Corner mark.** Build a `Corner mark` component that composites `avatar-cross-512.png` at 72 px on a 1080 px canvas, on Ground only, with a margin equal to its height. It is optional and off by default. It is never placed on a photograph, never used as a watermark on a tattoo, and never on a canvas that also carries the lockup.

**The RC monogram.** `assets/logos/artist-mark-rc/` holds Roger Cazares's signature. It stays where it already sits on his own photographs: do not remove it, crop it out, cover it or redraw it. It is never added to a photograph that lacks it, and never used as a logo, avatar, favicon, header, footer, background or pattern.

**Dark grounds only.** There is no light-background version of the logo. Gold on white is 2.95 to 1 and fails. No layout places any mark on a light ground or over busy imagery.

## 5.2 Colour on a social canvas

- One ground: Ground `#0A0A0A`. Surface `#141414` and Elevated `#1E1C19` are panels inside a canvas, never a full ground. They sit 1.16 to 1 or less from the ground, so a panel is always bounded by the keyline as well as by its fill.
- Headlines and body: Text `#E8E4DC` (15.61 to 1 on Ground, 14.53 on Surface, 13.41 on Elevated).
- Captions, credits, sources and footers: Text muted `#A9A29A` (7.85 to 1 on Ground, 7.30 on Surface). On Elevated it is 6.74 to 1: use it there at label size or larger only.
- Gold primary `#B99040` (6.72 to 1 on Ground): the eyebrow label, the hairline, the open-date ring, the button fill. It is never running text and never a ground.
- Gold bright `#EBC853` (12.18 to 1): at most one short line or one figure on a canvas, and never beside Gold primary as a second gold.
- Gold deep `#825F2C` (3.42 to 1): borders and marks only. Never text at feed sizes.
- Keyline: `rgba(185,144,64,0.18)`, 2 px on a 1080 px canvas.
- Gold budget: the logo, if present, plus one gold gesture (section 5.5), plus the button if the canvas has one. Never more than 15 per cent of the canvas. If a canvas looks gold, it is wrong.
- Feed graphics are read at about a third of their pixel size: body text pairs must reach 7 to 1.
- The primary button is solid Gold primary with a Ground label (6.72 to 1). The secondary is a 2 px Gold primary outline with a Gold primary label. Never gold text on a light colour, and never Text on gold (2.32 to 1).
- No gradients, drop shadows, glows, bevels, metallic or foil effects, photo tints or duotones. The metallic gradient belongs to the logo raster and is never imitated in type or shapes. No second accent hue. No red. Status colours are for the working badges only and never reach a published asset.

## 5.3 Social type scale

Cinzel and Source Sans 3 only, both from Google Fonts. Cinzel is for the headline and the figure: capitals, letterspaced, short lines, six words at most. Source Sans 3 is for everything else: subheads, body, labels, credits, captions, calendar numerals and every quote. Copy is written in sentence case in the field; the Cinzel styles display it in capitals. No blackletter, script, grunge, slab, geometric sans or handwritten face anywhere. Use the weights the master kit sets; where it sets none, Cinzel 600 and Source Sans 3 at 400 and 600.

Working sizes on a 1080 px wide canvas. Publish them as tokens and derive other canvases by proportion.

| Token | Size | Face | Role |
|---|---|---|---|
| `--social-display` | 88 px | Cinzel | One line of four words at most, tracking 0.06em, line height 1.15 |
| `--social-headline` | 64 px | Cinzel | Headline, six words at most, two lines at most, tracking 0.06em |
| `--social-headline-story` | 72 px | Cinzel | Story and reel cover headline |
| `--social-stat` | 200 px | Cinzel | The rating figure only |
| `--social-quote` | 48 to 56 px | Source Sans 3, 400 | Review quote. Upright, never italic, never Cinzel |
| `--social-subhead` | 44 px | Source Sans 3, 600 | One statement or a question, line height 1.3 |
| `--social-body` | 36 px | Source Sans 3, 400 | Smallest running text allowed, line height 1.5 |
| `--social-numeral` | 40 px | Source Sans 3, 400, tabular figures | Calendar dates and step numbers |
| `--social-label` | 30 px | Source Sans 3, 600 | Uppercase, tracking 0.12em. The eyebrow. The only style below 36 px besides the two below |
| `--social-credit` | 30 px | Source Sans 3, 400 | The artist credit under a piece |
| `--social-source` | 30 px | Source Sans 3, 400 | Citation and date line |

No more than two type sizes plus a label on one canvas. Cinzel appears once per canvas. No exclamation mark, ellipsis or emoji in artwork. No headline is set on a curve, rotated, outlined or stacked over an image.

## 5.4 Spacing and grid

Use the master scale and nothing between: 8, 16, 32, 64, 96, 128 px. Canvas padding `--social-pad` is 96 px on feed canvases, wider than a busier brand would use, because black is the frame. Stack gaps are 32 and 16 px. Document a grid for square, portrait, landscape, story, banner and tall content: margin, columns (4 for portrait and story, 6 for square, 12 for landscape and banners), gutter 16 px, an 8 px baseline, and left alignment. A single short Cinzel line may be centred on a cover or a closing slide; nothing else is centred. Nothing is rotated or overlapped. Radius: square corners on photographs and on anything edge to edge, 6 px on buttons, 12 px on panels. No rounded photo frames, no circles around work.

## 5.5 Grounds and decoration

This brand is restrained. The decoration layer is small, and that is the point.

**Grounds (five):** `ground` (flat `#0A0A0A`), `photo` (one photograph, full bleed, on a canvas whose own colour is still Ground), `framed` (one photograph inset with a 96 px Ground margin on every side, so the black does the framing), `split` (a hard horizontal or vertical stop with the photograph on one side and Ground on the other; never a gradient or a fade), `panel` (Ground with one Surface panel bounded by the keyline, for text-only cards).

**Decoration (three gestures):**

| Gesture | What it is | Limits |
|---|---|---|
| `Hairline` | One straight Gold primary rule, 2 px on a 1080 px canvas, 96 px long as a short rule above a credit or a quote, or the full width of the content area as a divider | Horizontal only. One per canvas. Never doubled, dotted, ornamented at the ends or used as an underline |
| `Keyline` | A 2 px inset frame in the border colour, 48 px in from the canvas edge, or the edge of a panel | Straight, one weight, square corners. No corner ornaments, no arch top |
| `Ring` | A 2 px Gold primary circle around a calendar date | The open-dates calendar only. Always paired with the dates listed in words |

**One gesture per canvas.** A hairline or a keyline, never both; the ring only on the calendar. Show this as a callout, with six composed canvases that put each ground and gesture to work.

**Never drawn:** arches, tracery, rose windows, crosses, spires, stained glass, filigree, flourishes, banners, scrolls, drips, skulls, flash sheets, needles, machines, or any gothic or tattoo ornament. The only cathedral on any canvas is the one in the supplied logo file.

## 5.6 Optional brand elements

Build component slots only for what exists.

| Exists: build a slot | Does not exist: do not manufacture |
|---|---|
| Roger Cazares's finished work, in photographs | A mascot or character |
| The supplied lockup, rose window and cross | An illustration style, drawn tattoos or drawn flash |
| The RC monogram, where it already sits on his photographs | Patterns, textures, paper or stone effects |
| The monthly open-dates calendar as a format | Gradients or metallic effects |
| The hairline and the keyline | A second logo, a stacked or horizontal lockup, a monogram for the studio |
| | An interior photograph, healed-work photographs, process photographs, and any work by Mikayla or Cleo: labelled photo slots until the manifest lists real files |

Icons: none by default. Steps carry numerals and checklists carry a text marker. If an icon is unavoidable in a profile highlight or a UI label, it is a line icon with a 2 px stroke, round caps, no fill, in Text or Gold primary, from one set (Lucide is proposed), always with a text label. No needle, machine, skull, cross, church, drop, flame or star icons.

---

# 6. Photography

**The supplied real photographs only**, from `assets/photos/`, as listed in `assets/photos/PHOTO-MANIFEST.md`. The manifest is the list of record for which file may be used, where, at what crop and with what caution; this prompt does not repeat it. No stock, no AI-generated tattoo, skin, person, room or logo, no mock-up, no other studio's work.

What is on file, in summary: finished work by Roger Cazares only. It covers black and grey portraits and animals, dotwork, fine line, lettering and script, colour, blackwork, and half-sleeve and back work. No work is on file for Mikayla or Cleo. There is no interior photograph. Unless the manifest lists them, there are no healed-work and no process photographs. Each of those is a labelled `Photo slot`, never a stand-in image.

Treatment rules:

1. **The tattoo is never retouched.** No smoothing, sharpening of line work, contrast push that deepens the blacks, redness removal, generative fill, extension, object removal, background replacement or upscaling. Straighten, crop and correct white balance so skin reads as skin and grey wash reads as grey. Natural colour; black and grey reproduced accurately.
2. **Never crop through a tattoo.** Keep the whole piece and enough of the body to read the placement. If a ratio does not fit, use the `framed` ground and let the black margin grow.
3. **One piece per canvas.** Fewer pieces, larger. No grids of thumbnails, no collage built by the template, no "wall of work". A carousel shows one piece per slide.
4. **Every piece carries its credit:** "[piece], [placement]. Roger Cazares." in the credit style, on Ground, beneath or beside the photograph, and again in the caption and the alt text. Name the piece plainly by what it is. Where a file name on record holds a pet's name or a private detail, leave it out unless the manifest clears it.
5. **Text never sits on a tattoo, on skin or on a face.** It sits on Ground or on a panel. One exception, for story and reel covers only: an `Overlay plate`, a straight-edged rectangle of `#0A0A0A` at 85 per cent opacity or more, covering at most a third of the canvas and never the tattoo. At 85 per cent Text reaches 10.56 to 1 over a pure white area; use 90 per cent (12.55 to 1 for Text) for anything smaller than the headline. Text muted and Gold primary are not used on a plate. Never a gradient scrim, and never a tint across the whole photograph.
6. **People.** A client's face appears only where the manifest clears that photograph. Otherwise crop to the piece or use another file; do not blur. Roger may be shown and named. Nobody else is shown as an artist until a cleared photograph exists.
7. **Memorial and portrait work.** Shown and credited like any other piece. Never paired with its reference photograph, never as a before and after, never with a caption about the person it depicts or the client's loss. The caption names the piece, the placement and the artist, and stops.
8. **Cover-ups.** No before and after pair is built unless the manifest lists both photographs of the same piece and clears them. Until then a cover-up is shown as the finished piece only.
9. **Never shown:** any licensed character; any photograph carrying another studio's watermark; anything from a quarantined folder; flash sheets as offers.
10. Build image containers as one component with variants: full bleed, framed, split, detail. No cutout subjects, device frames, polaroid frames, torn edges or screenshots.
11. Every graphic has an alt text field that says what is in the frame: the piece, the placement, the artist. No style adjectives, no claim.

---

# 7. Master formats and the Platform Specifications table

## 7.1 Master format families

Show these as ratio tiles and as a table.

| Family | Size | Ratio | Used here by |
|---|---|---|---|
| Portrait feed | 1080 x 1350 | 4:5 | Instagram and Facebook feed, carousels. First priority |
| Square | 1080 x 1080 | 1:1 | Instagram and Facebook feed, avatars |
| Full-screen portrait | 1080 x 1920 | 9:16 | Stories, reel covers, TikTok covers |
| Google post | 1200 x 900 | 4:3 | Google Business Profile updates |
| Social landscape | 1200 x 630 | 1.91:1 | Link previews |
| Standard widescreen | 1920 x 1080 | 16:9 | Video end frame, Facebook and Google covers |
| Tall content | 1000 x 1500 | 2:3 | Architecture only: no platform in use |
| Wide banner | 1500 x 500 | 3:1 | Architecture only: no platform in use |
| Video thumbnail | 1280 x 720 | 16:9 | Architecture only: no platform in use |

## 7.2 Platforms in priority order

1. **Instagram, the studio account `@cathedral_tattoostudio`.** The audience is on Instagram. Design the portrait feed card, the carousel, the story and the reel cover first, and test every feed card at grid size.
2. **Google Business Profile.** The intent channel and the studio's main live surface: hours, reviews, photographs and the studio's own posts. Every Google post is tested at small card size. No hashtags.
3. **Facebook, the studio page.** Secondary. It shares the Instagram masters.
4. **TikTok. Unverified.** No handle is on record. Build the 9:16 cover and the profile image so the system is ready, and mark the handle and every TikTok row `CONFIRM BEFORE PUBLISHING`. If an account is opened, it takes the underscore form of the handle to match Instagram.
5. **Not in use:** YouTube, X, LinkedIn, Pinterest, Threads, Bluesky, Snapchat, Reddit, Mastodon, Yelp. Keep their rows in the table so the architecture is complete. Build no specimen for them.

`@rc_tattoos` is not a platform of this system. See section 2.

## 7.3 The central table

Keep one `Platform Specifications` page. Every row has: platform, asset, width, height, ratio, safe zone, crop behaviour, status (in use, unverified, not in use), notes, date checked. These are working values dated 2026-10-12; verify each against current platform guidance at production and re-date the row. Platforms change these without notice.

| Platform | Asset | Size | Ratio | Safe zone | Crop behaviour | Status |
|---|---|---|---|---|---|---|
| Instagram | Feed portrait / square | 1080 x 1350 / 1080 x 1080 | 4:5 / 1:1 | 96 px margin | The profile grid crops the preview; keep the piece inside the centre | In use |
| Instagram | Carousel | 1080 x 1350 | 4:5 | 96 px margin | All slides share one ratio | In use |
| Instagram | Story / reel cover | 1080 x 1920 | 9:16 | Clear of top 250 px and bottom 340 px | Platform chrome covers both; the grid shows the centre of a reel cover | In use |
| Instagram | Feed landscape | 1080 x 566 | 1.91:1 | 60 px margin | None | In use, rarely |
| Instagram | Profile image | 1080 x 1080 master (320 x 320 shown) | 1:1 | Central 70 per cent | Circular crop | In use |
| Instagram | Highlight cover | 1080 x 1920 | 9:16 | Central 600 px circle | Circular crop, shown very small | In use |
| Google Business Profile | Update post | 1200 x 900 | 4:3 | 60 px margin | Feed preview crops toward 4:3 and shows small; type must survive a small card | In use |
| Google Business Profile | Cover image | 1080 x 608 | 16:9 | Centre | The supplied cover or a real photograph, no added text | In use |
| Google Business Profile | Logo | 720 x 720 | 1:1 | Central 70 per cent | Square and circular crops | In use |
| Google Business Profile | Photo | 1200 x 900 | 4:3 | Centre | A real photograph, untouched, no text | In use |
| Facebook | Feed portrait / square | 1080 x 1350 / 1080 x 1080 | 4:5 / 1:1 | 96 px margin | Grid crops toward 1:1; keep the piece centred | In use |
| Facebook | Story / reel cover | 1080 x 1920 | 9:16 | Clear of top 250 px and bottom 340 px | Platform chrome covers both | In use |
| Facebook | Page cover | 1640 x 924 | 16:9 | Middle 1640 x 624 | Phones show all of it; desktop crops to the middle strip | In use |
| Facebook | Link preview | 1200 x 630 | 1.91:1 | 60 px margin | None | In use |
| Facebook | Profile image | 1080 x 1080 master | 1:1 | Central 70 per cent | Circular crop | In use |
| TikTok | Vertical post and cover | 1080 x 1920 | 9:16 | Centre 1080 x 1420 | Caption and controls cover the bottom and the right edge | Unverified. `CONFIRM BEFORE PUBLISHING`: the handle and whether an account exists |
| TikTok | Profile image | 1080 x 1080 master | 1:1 | Central 70 per cent | Circular crop | Unverified. `CONFIRM BEFORE PUBLISHING` |
| YouTube | Thumbnail / banner / profile image | 1280 x 720 / 2560 x 1440 / 800 x 800 | 16:9 / 16:9 / 1:1 | 60 px margin / centre 1546 x 423 / central 70 per cent | Duration badge lower right; only the centre of a banner shows on phones | Not in use |
| X | Header / profile image | 1500 x 500 / 400 x 400 | 3:1 / 1:1 | Centre 640 px / central 70 per cent | Avatar overlaps the lower left | Not in use |
| LinkedIn | Post / company cover / logo | 1200 x 627 / 1128 x 191 / 400 x 400 | various | 60 px margin | Very shallow cover | Not in use |
| Pinterest | Standard pin | 1000 x 1500 | 2:3 | 60 px margin | Taller pins are cut in feed | Not in use |
| Threads, Bluesky, Mastodon, Reddit | Square, portrait, landscape | Shared masters | various | 60 px margin | None | Not in use |
| Snapchat | Story | 1080 x 1920 | 9:16 | Centre 1080 x 1420 | Chrome covers top and bottom | Not in use |
| Yelp | Business logo | 1080 x 1080 master | 1:1 | Central 70 per cent | Not checked | Not in use |

Add an "Adding a platform" callout: (1) add the canvas to the format list; (2) add its `--format-<name>-w` and `-h` tokens; (3) add a row to this table with its safe zone and crop behaviour; (4) map the existing content families into the new ratio by recomposing. Supporting a new platform should mean new rows and tokens, with no existing template edited.

---

# 8. Components

Build each once, with variants instead of duplicates. Names carry no client name.

- `Canvas` (format, ground, decoration gesture, safe-zone overlay toggle)
- `Eyebrow` (Label style, Gold primary: "Open dates", "Healed", "In progress", "Cover-ups", "First time", "Portraits", "Aftercare", "Google review", "Hours")
- `Headline` (Cinzel, once per canvas), `Subhead`, `Body`
- `Photo frame` (variants in section 6, with crop guides, a "do not crop through the piece" guide, and an alt text field)
- `Artist credit` (piece, placement, artist; three required fields; the artist field is a locked list holding "Roger Cazares" and two disabled entries flagged `CONFIRM BEFORE PUBLISHING`)
- `Overlay plate` (opacity locked to 85 or 90 per cent)
- `Calendar` (month, year, artist, a seven-column grid starting Sunday, a list of open dates; section 9.4)
- `Review quote` (section 10; locked fields)
- `Rating line` (figure, "on Google from", count, date; the date field is required)
- `Step` (numeral, one sentence)
- `Checklist item` (a text marker plus text; never colour alone)
- `FAQ` (question, answer)
- `Notice` (Surface panel, keyline, Text; for a plain statement such as walk-in availability or a closure)
- `Hours table` (day range, hours; tabular figures; Sunday reads "Closed")
- `Call to action` (primary and secondary, equal width; section 14)
- `Footer` (compact: "Call or text (225) 301-9527" · standard: phone and "Denham Springs" · expanded: phone, the address and the hours. Optional page number and source. Shows only supplied information: no email, no URL, no handle by default, no copyright line)
- `Citation` (section 11)
- `Carousel page number` and `Swipe indicator`
- `KPI tile` (section 11)
- `Hairline`, `Keyline`, `Ring`
- `Corner mark` (the supplied cross, composited; off by default)
- `Logo plate` (the supplied lockup on Ground with its clear space locked; 400 px minimum on a 1080 px canvas)
- `Photo slot` (labelled, for photographs not yet on file: "Healed work", "Process", "Interior", "Work by [artist]")
- `Sample data` flag
- `CONFIRM BEFORE PUBLISHING` badge (`#E8A33D` text on Ground, 9.18 to 1, with the words spelled out; visible in every specimen that needs it; a working marker that never reaches a published asset)

Template states to build: photo (the default), framed photo, split, text only on Ground, text only on a panel. Do not build light, brand-character, product-cutout, editorial-illustration or data states.

---

# 9. Content families and sample content

Build each family at portrait (1080 x 1350), square (1080 x 1080), story (1080 x 1920) and Google post (1200 x 900) unless noted, recomposed for each. Every template has named editable fields. Sample copy is a default, never baked into a component. **No Lorem Ipsum: every sample is publishable as written, or it carries a `CONFIRM BEFORE PUBLISHING` field.** All sample copy is BlakSheep draft and none has been read by the studio.

The first three families are the feed. The rest support it. In a specimen grid of nine posts, at least five are work.

## 9.1 Finished piece, with artist credit
- **Layout:** one photograph on the `framed` or `photo` ground, the tattoo whole. On Ground beneath it: a short hairline, then the credit. Nothing else on the canvas. This is the default post.
- **Credit, on the canvas:** "Black and grey wolf pack, half sleeve. Roger Cazares." · "Dotwork swan and cattails, thigh. Roger Cazares." · "Fine line dandelion, ribs. Roger Cazares."
- **Caption:** "Black and grey wolf pack, half sleeve. By Roger Cazares, @rc_tattoos. Walk in, or book ahead. Call or text (225) 301-9527."
- **Carousel variant:** one piece per slide, three to five slides, one artist per carousel, the credit on every slide.
- **Never** an adjective about the work in the brand's own voice ("stunning", "insane", "flawless"), a price, the time it took unless the artist supplies it (`CONFIRM BEFORE PUBLISHING`), the client's name without permission, or a story about why the client chose the piece.
- **Slots:** "Work by Mikayla Paul" and "Work by Cleo" exist as `Photo slot` variants with the artist field flagged `CONFIRM BEFORE PUBLISHING`: no work is on file, neither has agreed to be named, and Cleo's surname is unknown.

## 9.2 Healed work, captioned as healed
- **Layout:** as 9.1, with the eyebrow "Healed" above the credit.
- **Credit:** "[piece], [placement]. Healed, [age]. Roger Cazares."
- **Caption:** "Healed, [age]. [piece], [placement]. By Roger Cazares, @rc_tattoos. Fine lines soften a little as they settle. That's normal, and it's planned for."
- **The word "Healed" appears only on a photograph the artist has confirmed was taken after healing**, and the age is his. Both fields are `CONFIRM BEFORE PUBLISHING`. A fresh tattoo is never labelled healed. Ship the specimen as a `Photo slot` unless the manifest lists a healed photograph.
- **Never** a fresh and healed pair as a before and after on memorial work.

## 9.3 Process: stencil, drawing, mid-sitting
- **Layout:** one photograph, eyebrow "In progress", a one-line statement in the subhead style, the credit.
- **Statements:** "Stencil on, before the first line." · "The drawing comes first. Then we check it against the placement." · "Second sitting of [number]."
- **Caption:** "Large pieces get planned across sittings, so they get the time they need. [piece], [placement], in progress. Roger Cazares."
- Every sitting count is `CONFIRM BEFORE PUBLISHING`, from the artist. Ship the specimen as a `Photo slot` unless the manifest lists process photographs.
- **Never** a close-up of a machine and gloves as the subject, blood, a client's face without clearance, or any statement about equipment, needles or hygiene.

## 9.4 Open dates for the month
The studio's own format, kept and restyled.
- **Layout:** Ground. Eyebrow "Open dates". The month in Cinzel ("November"). The artist's name in the credit style. The `Calendar`: seven columns starting Sunday, weekday labels in the Label style in Text muted, dates in tabular Source Sans 3 in Text, the Sunday column in Text muted because the studio is closed. Each open date carries a `Ring`. Beneath the grid, the open dates again in words: "Open: [dates]." Then the compact footer.
- **Copy:** eyebrow "Open dates" · headline "[Month]" · artist "Roger Cazares" · line "Open: [dates]." · footer "Call or text (225) 301-9527".
- **Caption:** "Open dates for [month] are up. First come, first served. Call or text (225) 301-9527."
- **Calls to action**, where the format has room: "Check open dates" and "Call or text (225) 301-9527".
- **Fields:** the month, the year and every open date are `CONFIRM BEFORE PUBLISHING`, supplied by the artist each month. The specimen ships with the grid for the month drawn and no date ringed. One calendar per artist; calendars for Mikayla and Cleo are slots flagged `CONFIRM BEFORE PUBLISHING`.
- **Never** "Now booking", "Limited", "Filling fast", "Last spots", a countdown, a struck-through date used as pressure, red, a monogram or photograph behind the grid, or blackletter for the month.
- **Story variant:** the same grid between the safe-zone bands. **Google post variant:** the month and the open dates in words on the right, the grid on the left.

## 9.5 Walk-in availability, stated plainly
A fact for the day, never a promotion, and never a headline: this family uses no Cinzel.
- **Layout:** a `Notice` on Ground or beneath a work photograph. Eyebrow "Today". One statement in the subhead style. The hours line. The compact footer.
- **Copy:** "[Artist] has no bookings today. Walk in between 10am and 6pm." · standing version, for the profile and for Google: "Walk in, or book ahead. Monday to Thursday 10am to 6pm. Friday and Saturday 10am to 7pm. Closed Sunday."
- **Fields:** the artist and the day are `CONFIRM BEFORE PUBLISHING`, set on the day by the studio. The hours on a Friday or Saturday read "10am and 7pm".
- **Never** "Walk-ins welcome" as a display line, a capitalised "WALK-INS", an exclamation mark, "today only", "no wait", a price, a flash sheet, or any wording that pitches a tattoo as something to get on impulse.

## 9.6 First time, or nervous about it
- **Layout:** text only on Ground, or `split` with a photograph of the room once one exists (`Photo slot`). Headline, two sentences, optional `Review quote`.
- **Copy:** headline "First time, or nervous about it" · body "Say so when you come in. We'll walk you through what happens before anything starts, and you can ask whatever you want."
- **Alternate body:** "First one? Tell us. Being nervous about it is more common than people let on."
- **Optional quote:** "I am an anxious person so that's a big deal for me" · Alesha · Google review. `CONFIRM BEFORE PUBLISHING`: in context this review names Mikayla.
- **Say it once and plainly.** Never "don't worry", "relax", "you're in good hands", "our friendly team", "judgement-free", or any promise about pain.

## 9.7 What to bring for a portrait
- **Format:** a single card and a four-slide carousel.
- **Title:** "What to bring for a portrait"
- **Items:** "The clearest photo you have. Face-on is best, but most things can be worked with." · "A second photo if you have one. More to look at helps." · "Roughly where you want it, and roughly what size." · "Any questions. We'll talk through placement and size before anything gets drawn."
- **Caption:** "Thinking about a portrait? Bring the clearest photo you have. We'll talk through placement and size before anything gets drawn. Call or text (225) 301-9527."
- **Photograph:** a finished portrait by Roger Cazares, credited, from the manifest. Never the reference photograph beside the tattoo.
- **Never** a word about who the portrait is of, loss, memory or tribute in the brand's own voice. The card is about the photograph to bring.

## 9.8 Cover-ups: straight answers
The register is the studio's own Google post of 2026-10-06, which says: "True cover-ups usually require twice the original size".
- **Format:** a single card and a three to five slide carousel, one answer per slide.
- **Samples:**
  - eyebrow "Cover-ups" · headline "Bigger and darker" · body "A true cover-up usually needs about twice the size of what's there, and it needs to be darker. Here's why: the new piece has to hide the old lines, not sit beside them."
  - "Can any tattoo be covered?" · "Not every one, and not with every idea. Show us what's there and we'll tell you what will work."
  - "What should I send?" · "A clear photo of the tattoo as it is now, in daylight, and what you'd like in its place."
- **Caption:** "Thinking about a cover-up? Send a clear photo of what's there. We'll tell you what it'll take, and what won't work. Call or text (225) 301-9527."
- Any further rule of thumb (fading sessions, how dark, which colours cover) is `CONFIRM BEFORE PUBLISHING`, from the artist.
- **Never** "anything is possible", mockery of the old tattoo, the word "regret", who made the old tattoo, or a before and after pair that the manifest has not cleared.

## 9.9 Aftercare steps
Instructional and unambiguous. Numbered steps. No personality.
- **Format:** a six-slide carousel with a cover, a single tall card (1080 x 1920), and a Google post that links the steps in its caption.
- **Title:** "Looking after it"
- **Steps:** (1) "Leave the wrap on for 2 hours." (2) "Wash gently with clean hands and unscented soap. Pat dry, don't rub." (3) "A thin layer of unscented moisturiser, 2 to 3 times a day." (4) "No soaking for 2 weeks. No baths, pools or swimming. Showers are fine." (5) "Keep it out of the sun. Once healed, sunscreen keeps it sharp." (6) "It'll peel and itch. Don't pick it, don't scratch it."
- **Closing line:** "Anything looks wrong, call us: (225) 301-9527"
- **The whole family is `CONFIRM BEFORE PUBLISHING`.** Aftercare is health-adjacent, and the artist must confirm that every step and every figure matches what he tells clients in the chair. The specimen ships with the badge on the cover.
- **Never** a product brand, a medical claim, "infection" used as a warning headline, or any statement about how the studio works on hygiene.

## 9.10 Meet the artist
- **Layout:** `split`. A photograph of the artist at work on one side; on Ground, the name in Cinzel, the title in the credit style, two sentences, the handle.
- **Copy:** headline "Roger Cazares" · title "Tattoo artist at Cathedral Tattoo Studio" · body "Roger works mostly in black and grey: portraits, fine line and dotwork, lettering, and large-scale sleeve and back pieces. He also does colour and cover-ups." · "He signs his work with the RC monogram you'll see on most of his photos." · "Instagram: @rc_tattoos"
- **Carousel variant:** the artist slide, then three of his pieces, one per slide, each credited.
- **Slots:** identical templates for "Mikayla Paul" and "Cleo [surname]", every field flagged `CONFIRM BEFORE PUBLISHING`: neither has agreed to be named, no photograph or work is on file, no handle is known, and Cleo's surname is unknown. Do not fill them with sample text.
- **Never** "owner", "founder", any number of years, "experienced", "award-winning", "licensed", where he worked before, or a quote he has not given.

## 9.11 Review card
See section 10. Portrait and square; a story variant; never with a photograph of the reviewer.

## 9.12 Rating line
- **Layout:** Ground. The figure at statistic size in Cinzel, in Text or Gold bright. The line beneath in the subhead style. The citation. No star.
- **Copy:** "5.0" · "on Google from 6 reviews (October 11, 2026)" · source "Source: Google Business Profile, read October 11, 2026".
- The date field is required. An empty date hides the figure. Six reviews is six reviews: never rounded, never "top-rated", never "five-star studio", never "loved by".
- Use it sparingly: once in a month of posts is plenty at this count.

## 9.13 Hours and location
- **Layout:** Ground with the `Keyline`, or `split` with the supplied cover. Eyebrow "Hours". The `Hours table`. The address. The footer.
- **Copy:** "Monday to Thursday, 10am to 6pm" · "Friday and Saturday, 10am to 7pm" · "Sunday, closed" · "1318 Florida Ave SW, Denham Springs, LA 70726" · "Walk in, or book ahead." · "Call or text (225) 301-9527"
- **Closure variant:** "We're closed [day, date]. Back [day] at 10am." Both fields `CONFIRM BEFORE PUBLISHING`.
- **Never** a map with a pin drawn by the template, a second address, "new location", "we've moved", "find us at our new home", or a landmark the studio has not named.

## 9.14 FAQ card (a straight answer)
- **Format:** single card and a three to five slide carousel, one question per slide. Question in the subhead style, answer in body.
- **Samples:**
  - "How much will it cost?" · "It depends on the size, the placement and the detail. Tell us what you're thinking about and we'll tell you what it'll take." **A cost question is answered with what affects the price, never a figure, a range, a minimum or a rate.**
  - "Do I need to book?" · "No. Walk in, or book ahead. Larger pieces are planned first, so book ahead for those."
  - "I don't have it worked out yet. Is that all right?" · "Yes. Bring a reference photo, a screenshot or just the idea. You don't need to have it worked out."
  - "How many sittings will a big piece take?" · "It depends on the piece. You'll know the number before anything permanent happens." `CONFIRM BEFORE PUBLISHING`: any typical number of sittings, from the artist.
  - "Who will do my tattoo?" · "You'll know before you start, and every piece we post is credited to the artist who made it."
- **Not built:** questions about age, identification, deposits, payment, piercing, numbing or pain. Nothing is on record for any of them. Add one only with the studio's own answer.

## 9.15 Families from the universal list that are dropped or reduced

| Family | Decision | Reason |
|---|---|---|
| Price, rate card, "from" price, deposit | Dropped | There is no minimum and no published price. Register item 6 |
| Offers, promotions, giveaways, flash days, countdowns | Dropped | Register item 6. The open-dates calendar is information and is the only availability format |
| Piercing | Dropped | Unconfirmed. Register item 9 |
| Storm, seasonal and holiday sales; "new year, new tattoo" | Dropped | Promotional, and they pitch an impulse. A closure notice in 9.13 covers a holiday |
| Before and after on memorial work | Dropped | Register item 14. Other before and after pairs wait on cleared photographs (section 6, rule 8) |
| Data charts, statistics, KPI dashboards, reports | Dropped | There is no data behind them. The only figure is the dated rating (section 11) |
| Case study with metrics; client results | Dropped | No metrics exist. The finished piece and the review card do this work |
| Comparison | Dropped | Any comparison of studios breaks register item 8, and there are no products to compare |
| Problem, agitation, solution; myth versus fact | Dropped | The voice does not agitate, and a "myth" column tends to describe other shops |
| Industry commentary, thought leadership, trends | Dropped | Nothing may be said about other studios |
| Branded memes; jokes about pain or regret | Dropped | Outside the voice |
| Webinar, podcast, event, blog promotion | Dropped | The studio runs none, and there is no website to link |
| Hiring and recruitment | Dropped | Recruitment copy is where an ownership claim is most likely to slip in, and no role is on file |
| Announcement of the move or a new space | Dropped | Register item 10 |
| Award, certification, milestone, anniversary | Dropped | None exists, and tenure is register item 2 |
| Testimonial with a photograph, a surname or a location; Facebook reviews | Dropped | Google reviews only, first name only |
| Tips and how-to | Merged | Into aftercare, the portrait checklist and the FAQ |
| Statistic | Reduced | To the rating line |
| Timeline | Reduced | To the sitting line in the process family |

---

# 10. Review and testimonial templates

Six reviews exist. They are the only thing customers have put in writing about this studio, and the template is built so they cannot be improved by accident.

**Structure: named, required fields, in this order.**

| Field | Content | Rule |
|---|---|---|
| `quote` | The customer's sentence | Verbatim from the approved list below: spelling, punctuation, capitals and lower case untouched, including a lower-case "i" and a doubled exclamation mark where the customer wrote them. Never a paraphrase, a tidy-up, a trim inside a sentence, a merge of two reviews or a translation |
| `reviewer` | First name | Exactly as paired below. No surname, no initial, no photograph |
| `source` | "Google review" | Locked text. Not a logo, not Google's "G" |
| `checked` | The date the quote was last read on the live profile | Required, not printed. A card with an empty `checked` field shows the `CONFIRM BEFORE PUBLISHING` badge |

- **Type:** the quote in Source Sans 3, 400, upright, in Text, at 48 to 56 px on a 1080 px canvas. Never Cinzel, never italic, never capitals. The first name and "Google review" in Text muted, in the credit style.
- **Canvas:** Ground. One short `Hairline` above the quote. Plain quotation marks typed as part of the text, in the same colour as the quote. No oversized or gold quote mark.
- **No decorative stars.** No star row, no star icon, no rating badge on a review card. The rating appears only as the dated rating line in 9.12, and that line may sit in the footer of a review card as text.
- If any field is empty, the card shows the `CONFIRM BEFORE PUBLISHING` badge in place of the quote. The `quote` field has no placeholder sentence. Its empty state reads "Paste a verbatim quote from the approved list".
- One quote per canvas. No reviewer photograph, avatar or profile picture. No photograph of the reviewer's tattoo unless the manifest pairs it with the review.
- Never a quote about price, never a superlative lifted from a review, never a customer's remark about cleanliness used to imply a claim the studio does not make itself.

**Approved quotes (verbatim; use only these; read 2026-10-11).**

| `quote` | `reviewer` | Proves | Status |
|---|---|---|---|
| "He took my ideas and brought them to life even better than I imagined." | Keely | Listened to first | Usable |
| "He was professional, patient, and made the whole experience comfortable from start to finish." | Keely | At ease | Usable |
| "Quality is unreal" | Tyler | The work | Usable |
| "I am an anxious person so that's a big deal for me" | Alesha | At ease | `CONFIRM BEFORE PUBLISHING`: in context it names Mikayla |
| "i strictly go to Cleo for all my tattoos!!" | Kameryn | A named artist | `CONFIRM BEFORE PUBLISHING`: it names Cleo |

**Not used, in any form:** any quote from the reviewer "hailey paul", who shares a surname with a member of the studio; "price friendly"; "Best tattoos you can ever get".

**Caption default:** "Thanks, Keely." and nothing invented about her tattoo. A caption or reply responds only to what the customer wrote: thanks and the first name, one specific thing they said, the artist's name where the customer gave it, two or three sentences, no exclamation marks, no emoji, no request for a referral. Do not close every caption with an invitation to come back. Nothing is ever offered in exchange for a review.

---

# 11. Data, charts and citations

This studio publishes one number. The data layer is therefore small, and the limits must be impossible to miss.

1. **The only publishable figure is the dated Google rating and review count.**
2. **No chart specimen is built.** There is no data behind one, and a chart drawn with sample figures on a tattoo studio's feed would be decoration that looks like a claim. The reference kit format's chart plates are replaced by one plate that states this rule and shows the rating line and the two KPI tiles.
3. **No statistic about the studio, the trade, the market or any other studio may be published without a source the agency has checked.** None is on file. Show this as a callout.
4. Never a count of tattoos done, clients, followers, hours, sittings or years.

**KPI tiles.** One and two metric layouts only, as components. Publishable tiles today: "5.0 on Google" and "6 reviews", each with the date "October 11, 2026" and the citation. Any other tile is sample data, carries the `Sample data` flag ("Sample data. Not a published figure.") and is not published.

**Chart frame.** Define the `Chart frame` component and its fields (title, subtitle, axis, labels, values, legend, source, date, footnote) in the documentation only, so the architecture survives a switch to another client. Do not render it.

**Data palette, derived only from the approved colours, defined for completeness.** Show it as swatches with token names on the documentation plate.

| Token | Value | On Ground | Note |
|---|---|---|---|
| `--data-1` | Text `--cts-text-primary` | 15.61 to 1 | Primary series |
| `--data-2` | Gold primary `--cts-primary` | 6.72 to 1 | Second series, hatched |
| `--data-3` | Text muted `--cts-text-muted` | 7.85 to 1 | Third series, dotted |
| `--data-highlight` | Gold bright `--cts-gold-bright` | 12.18 to 1 | The one figure being discussed |
| `--data-track` | Surface `--cts-bg-surface`, with `--cts-border-subtle` for grid lines | | Tracks and grids, never data |

Gold primary and Text muted are 1.17 to 1 apart, so they are never adjacent without a gap, a direct label and a change of pattern. No hue outside this table enters a chart, and no status colour is used as data.

**Citation component.** Two forms: `Source: Organization, Year` and `Source: Organization · Report · Year`. For this client the working form is `Source: Google Business Profile, read October 11, 2026`. Text muted, 30 px on a 1080 px canvas, always inside the safe zone. Never fabricate a source or a statistic. A figure with an empty source field does not render.

---

# 12. Avatars, banners, covers, video

## 12.1 Avatar system

- **Master:** the supplied `assets/logos/avatar-rose-512.png`, the rose window from the logo, on black. Composite it unaltered. Do not draw it, recolour it or add a ring.
- **Below 64 px:** the supplied cross, `assets/logos/avatar-cross-512.png`, and the favicon files for the smallest sizes.
- Show the master in a square, in the circular crop and in a rounded square, and show the step down: rose window at 320, 180 and 64 px; cross at 48, 32 and 16 px from the supplied files.
- **Never** the full lockup squeezed into a circle, the RC monogram, the CTS badge, a photograph of a tattoo, or a portrait of an artist. Print that note on the plate.
- The same avatar on every studio profile: Instagram, Google Business Profile, Facebook, and TikTok if an account is confirmed.
- **Nothing is designed for `@rc_tattoos`.** Its avatar, name and bio are Roger's. The only change ever proposed for that account is one line he may add to his own bio: "Tattooing at Cathedral Tattoo Studio, Denham Springs". `CONFIRM BEFORE PUBLISHING`: it is his to accept or decline.

## 12.2 Banners and covers

Each shows the full canvas, the desktop safe zone, the mobile safe zone, the logo area and the image area, with the crop zones drawn.

| Asset | Size | Build |
|---|---|---|
| Google Business Profile cover | 1080 x 608 | The supplied `cathedral-tattoo-studio-denham-springs-cover.jpg`, or the lockup on Ground with its clear space. No added text |
| Facebook page cover | 1640 x 924 | The lockup on Ground, inside the middle 1640 x 624. Variant: one finished piece by Roger Cazares on the `split` ground with the lockup on the Ground side and the credit beneath the piece |
| Link preview | 1200 x 630 | The supplied `og-card-1200x630.png`, unchanged |
| Instagram highlight covers | 1080 x 1920 | Ground, one word in the Label style in Text inside the central circle: "Work", "Open dates", "Aftercare", "Artists", "Hours", "First time". No icons, no logo fragments |
| TikTok profile and cover | Section 7.3 | Built, and flagged `CONFIRM BEFORE PUBLISHING` |

The avatar and the page name supply the brand. A cover carries the logo once and at most one line, the descriptor: "Custom tattoo work in Denham Springs. Walk in, or book ahead." No rating, no tagline until it is approved, no list of styles, no phone number over a photograph. An interior cover is a `Photo slot` until an interior photograph exists.

## 12.3 Video covers and end frames

Story, reel and TikTok covers on the 1080 x 1920 master. Draw the safe zones: top 250 px and bottom 340 px clear, the headline in the centre band, the footer lifted above the bottom zone. A reel cover keeps its subject in the centre so the grid crop still shows the piece.

- **Build:** work focused (one finished piece, the credit on an `Overlay plate` or on Ground beneath); process focused ("In progress", one line); text focused on Ground ("Looking after it", "Bigger and darker", "What to bring for a portrait", "Open dates"); artist focused ("Roger Cazares", with a cleared photograph of him at work).
- **End frame, 1080 x 1920 and 1920 x 1080:** Ground, the lockup at 400 px or wider, the line "Walk in, or book ahead.", and "Call or text (225) 301-9527". Nothing else.
- **Do not build:** reaction, commentary, news, client result, screenshot, brand-character or pain-reaction covers, or a cover with a client's face that the manifest has not cleared.
- Video itself follows the photography rules: no filter over the tattoo, no speed-ramped "reveal" built on a memorial piece, no licensed music implied by the template.

## 12.4 Thumbnails

YouTube is not in use, so no thumbnail specimen is built. The 1280 x 720 row stays in the table. If a channel opens, map the reel cover families into it by recomposing.

---

# 13. Carousel, infographic and repurposing

**Carousel.** Slide 1 the cover (eyebrow, Cinzel headline, optional photograph), middle slides the content, final slide the closer on Ground with the lockup at 400 px or wider and the two calls to action. A persistent compact footer, page numbers ("2 / 6"), an optional swipe indicator, one consistent content area, one ratio for all slides. The logo appears on the closing slide only. Build: aftercare (cover, six steps, closer), what to bring for a portrait, cover-up answers, the FAQ, meet the artist with three pieces, and a work carousel of one artist's pieces.

**Infographic.** Modular sections: header, numbered step, checklist, quote, notice, hours table, source, call to action, footer. Build one tall specimen on 1080 x 1920: "Looking after it", the six aftercare steps, the closing line and the footer, flagged `CONFIRM BEFORE PUBLISHING` as in 9.9. Build one on 1080 x 1350: "What to bring for a portrait". No figure, chart or icon row. For anything longer than one screen, use a carousel.

**Repurposing one concept.** Begin with the sentence to be said, then choose canvases. Document it with the cover-up answer:

1. Write the line and its support: "Bigger and darker" and "A true cover-up usually needs about twice the size of what's there, and it needs to be darker."
2. **Portrait feed:** eyebrow, headline, the sentence, compact footer, on Ground with the keyline.
3. **Square:** headline and the sentence, compact footer.
4. **Story:** headline inside the centre band, the sentence beneath, footer lifted clear of the bottom zone.
5. **Google post 1200 x 900:** headline and the sentence on the left, a finished cover-up piece on the right with its credit, tested at small card size. No hashtags in its caption.
6. **Carousel:** the line is slide 1, the three answers are slides 2 to 4, the calls to action are slide 5.
7. **Reel cover:** the two-word headline on an overlay plate over a finished piece, credit beneath.
8. **Link preview:** not built for this message. There is no page to link to.

Preserve the message, the brand and the hierarchy. Change the composition, the amount of text, the crop, the scale and the safe zones. Show the plate "one message, every format" as the argument for the first rule in section 3.

---

# 14. Calls to action, captions and hashtags

**Calls to action. These and no others.**

| | Wording | Style | Goes to |
|---|---|---|---|
| Primary | **See the work** | Solid Gold primary `#B99040`, Ground `#0A0A0A` label | The studio's Instagram profile or the photographs on the Google Business Profile. There is no website: any URL slot is `CONFIRM BEFORE PUBLISHING` |
| Secondary | **Call or text (225) 301-9527** | 2 px Gold primary outline, Gold primary label | `tel:+12253019527` |
| Third, only where dates are shown | **Check open dates** | As the primary, in place of "See the work" | The current month's open-dates post |

The two buttons are equal width, primary first, and the phone is a button, not a bare line of text. Two at most on a canvas. On a canvas with a tattoo there is no button: the caption carries the next step. Never "Book now", "Get inked", "Book online", "Reserve your spot", "DM to book", "Claim your date", "Learn more", "Contact us", "Visit us", "Follow", "Save" or "Share".

**Captions.** Plain and short. One piece or one fact, and one next step. One to three sentences on Instagram and Facebook; two to four on Google. "We" for the studio, "you" for one reader. Contractions. No exclamation marks, no ellipses, no dashes as punctuation, no emoji, no capitals for emphasis. Numerals for hours, dates and sittings. Every caption on a piece of work opens with the credit and names the artist; where the artist has a handle, it is tagged once ("@rc_tattoos"). Nothing essential (a date, the phone number, the artist's name) appears only in the image. Captions obey section 4 exactly as artwork does.

Caption patterns:

- Work: "[piece], [placement]. By Roger Cazares, @rc_tattoos."
- Work with a next step: "[piece], [placement]. By Roger Cazares, @rc_tattoos. Walk in, or book ahead. Call or text (225) 301-9527."
- Open dates: "Open dates for [month] are up. First come, first served."
- Answer: "Thinking about a cover-up? Send a clear photo of what's there. We'll tell you what it'll take."

**Not a mirror.** The studio account does not repost `@rc_tattoos` wholesale. When a piece appears on both, the studio post is recomposed on the studio templates with the studio caption and the credit. The studio feed must also carry what the artist's account does not: open dates, hours, aftercare, answers, the room once it is photographed, and every other artist once they agree.

**Hashtags.** None in artwork. None on Google Business Profile posts. On Instagram and Facebook they go after the caption, on their own final line, and never inside a sentence. Five at most: the studio tag, two geo tags, and up to two style tags that describe the piece actually shown. From this list only (BlakSheep proposal, `CONFIRM BEFORE PUBLISHING`):

- Studio: `#CathedralTattooStudio`
- Geo: `#DenhamSprings` · `#DenhamSpringsTattoo` · `#BatonRougeTattoo`
- Style: `#BlackAndGreyTattoo` · `#FineLineTattoo` · `#DotworkTattoo` · `#LetteringTattoo` · `#PortraitTattoo` · `#CoverUpTattoo` · `#ColorTattoo`

**Banned tags:** any tag with "ink", "inked", "parlor" or "bodyart"; any tag about price, deals, flash sales, walk-in promotions or availability pressure; `#MemorialTattoo` and any tag about grief or loss; any faith or denomination tag; any other studio's name or tag; any town not in the list above; `#BestTattoo`, `#TopTattooArtist` and every superlative; `#Piercing`; long strings of general tags such as `#Tattoo`, `#Tattoos`, `#TattooIdeas`, `#TattooArt`.

**Bio line for every studio profile:** "Custom tattoo work in Denham Springs. Walk in, or book ahead. Call or text (225) 301-9527"

---

# 15. Accessibility

- Text meets WCAG 2.1 AA at minimum; body text on feed graphics reaches 7 to 1. Use only the pairings in section 5.2.
- Smallest running text 36 px on a 1080 px canvas; the label, credit and source styles at 30 px are the only exception.
- Cinzel in capitals is for six words or fewer. Anything longer is Source Sans 3 in sentence case.
- Dark canvases thin type visually: no weight below 400, and body line height 1.5 or more.
- Test every feed card at Instagram grid size, every Google post at small card size, every reel cover at 210 px wide, the rose window at 64 px and the cross at 32 and 16 px.
- Colour is never the only signal: an open date has a ring and is listed in words; Sunday is labelled "Closed" in the hours table; a checklist item has a text marker.
- Every template has an alt text field and a caption field. Alt text for work names the piece, the placement and the artist.
- Nothing inside a platform's chrome zones.
- No flashing, strobing or rapid cuts in any motion built from these covers.

---

# 16. Organisation, naming, editability, documentation

**Editability.** Components, variants, variables, tokens, auto layout, named text layers, named image layers, named groups and reusable styles. Nothing is flattened except the supplied logo files, which stay as placed images. Sample copy lives in fields, not in component definitions.

**Naming.** Semantic, with no client name: `Social / Feed / Portrait / Finished piece` · `Social / Feed / Portrait / Healed` · `Social / Feed / Square / Review` · `Social / Feed / Portrait / Open dates` · `Social / Feed / Square / Rating` · `Social / Story / Open dates` · `Social / Google Post / Cover-up answer` · `Social / Carousel / Cover` · `Social / Carousel / Content` · `Social / Carousel / Closer` · `Video / Vertical / Cover` · `Video / End frame` · `Banner / Facebook` · `Banner / Google` · `Avatar / Rose window` · `Infographic / Steps` · `Component / Artist credit` · `Component / Calendar` · `Component / Review quote` · `Component / Citation` · `Component / Call to action`.

**Library order.** (1) Foundations and token flow (2) Active client brand (3) Components (4) Avatars (5) Feed posts: work (6) Feed posts: open dates and notices (7) Stories (8) Vertical video (9) Carousels (10) Google posts (11) Banners and covers (12) Rating line, KPI tiles and the data rule (13) Infographics (14) Reviews (15) Artists (16) Educational: first time, portrait checklist, cover-ups, aftercare, FAQ (17) Hours and location (18) Platform Specifications (19) Documentation. Sections for products, promotions, case studies, seasonal content, hiring and charts are omitted for the reasons in 9.15 and section 11.

**Plates to deliver, in the reference kit format's order:**

1. Section opener and the token flow, with a table of which concern lives in which file.
2. The four rule cards.
3. Master format families as ratio tiles, then the table.
4. The Platform Specifications table with status, and the "Adding a platform" callout.
5. Social type scale and spacing tokens.
6. Colour on a social canvas: the ground, the two panels, the text and gold pairings with their ratios, and the gold budget.
7. Content families available; families dropped and why; repurposing one concept.
8. The template library rendered by ratio: portrait, square, Google post, landscape and link preview.
9. Story, video cover and carousel, with the safe-zone specimen.
10. The open-dates calendar: the studio's existing format beside the restyled one, with the list of what changed.
11. Banners and covers with crop zones.
12. The avatar system and the step down from lockup to rose window to cross.
13. The tall infographic with its module list.
14. One message, every format.
15. The decoration layer: the five grounds, the three gestures, the "one gesture per canvas" callout, the "never drawn" list, and six composed canvases.
16. The rating line, the two KPI tiles, the citation and the "no chart without data" callout.
17. Reviews: the card, the approved list with status, and the empty state.
18. Switching this architecture to another client.
19. A coverage table: family by format, marking what is complete, what is a photo slot and what waits on the studio.

**Documentation to include.** Which design system is active; how tokens flow; logo use, the raster decision and the size floors; type; colour and the gold budget; grid and spacing; photo treatment and the pointer to the manifest; the credit rule; the two-account rule; the data rule; the citation component; platform safe zones; template naming; how to create a new template; how to update a platform dimension; how to add a content family; how to add a platform; how to add an artist once they agree to be named; and how to switch client.

**Switching to another client.** (1) Replace `tokens/css-tokens.css`. (2) Replace `assets/` and the paths in the logo, avatar and footer components. (3) Re-derive the aliases and `--data-*` in `tokens/social.css` from the new palette. (4) Replace or remove the client-specific components: the artist credit, the calendar, the review quote's source lock, the logo floors, the claims register. (5) Keep the canvas, the type roles, the chart frame definition and the family architecture. (6) Review every composition against the new brand. Swapping colours on this client's posts does not make another client's system.

Finish with an inventory of every template and component built, the coverage table, and one list of every `CONFIRM BEFORE PUBLISHING` field with what is needed to clear it. Do not report anything as built that was not built.

---

# 17. Quality control

Before any template is marked complete, verify:

**System**
- Correct dimensions, from the Platform Specifications table, with the row's date checked.
- Every colour, size, radius and space resolves to a token. No typed-in hex value.
- Recomposed for its ratio, not resized or cropped from another. No tattoo cropped through.
- Nothing inside a safe zone's excluded area. Nothing flattened but the supplied logo files. Layers named.
- Type is Cinzel for one headline or figure and Source Sans 3 for everything else. No blackletter, script or other face. No text under 30 px on a 1080 px canvas.
- The canvas is dark. No light ground, panel or variant exists anywhere in the library.
- One decoration gesture. Gold within its budget. No gradient, glow, shadow or metallic effect.
- Nothing drawn that imitates the logo or a church.

**Brand**
- The library is labelled a BlakSheep Creative draft, version 0.1, 2026-10-12, not reviewed or approved by the studio.
- The logo is a supplied file, composited, unaltered, on a dark ground, once per view: the lockup at 400 px or wider on a 1080 px canvas (128 px or wider as shown), the rose window at 64 px or more, the cross below that. The name is never set in type in place of the logo.
- The RC monogram appears only where it already sits on Roger Cazares's photographs.
- The name is "Cathedral Tattoo Studio" or "Cathedral". Never "CTS" in text.
- Photographs are supplied files listed in the manifest, with the tattoo untouched. No stock, no AI image, no licensed character. No text on a tattoo, on skin or on a face.
- Every piece is credited "[piece], [placement]. [artist]." on the canvas, in the caption and in the alt text.
- Nothing is built for `@rc_tattoos`. The studio feed specimen is not a copy of an artist's feed, and at least five of nine posts are work.
- Mikayla Paul and Cleo appear only in flagged slots.

**Claims**
- No ownership, tenure, licensing or hygiene claim. No premium word. No superlative.
- No price, figure, "from", minimum, rate, deposit, discount, promotion, giveaway, countdown or urgency. Cost questions are answered with what affects the price.
- No "by appointment", "appointment only", "booking required", "limited intake" or "waiting list". Walk-ins are stated as a fact, in Source Sans 3, never as a display line.
- Nothing about any other studio or a previous shop. No piercing. Nothing about a move; one address.
- No religious framing in the brand's own voice. No grief copy. No before and after on memorial work.
- None of the category cliches in register item 13, in artwork, captions, alt text or hashtags.
- Every review quote is on the approved list, verbatim, with a first name and "Google review", set in Source Sans 3, with no star. The two flagged quotes carry their badge. Nothing from the barred reviewer.
- The rating reads "5.0 on Google from 6 reviews (October 11, 2026)" and carries its date. No star graphic anywhere.
- No chart is rendered. Any figure that is not the rating carries the `Sample data` flag and is not published.
- Calls to action read "See the work", "Call or text (225) 301-9527" and, where dates are shown, "Check open dates". No other wording.
- No URL and no email anywhere. The TikTok handle and the Facebook page URL are flagged.
- Captions: no exclamation marks, ellipses, dashes as punctuation or emoji. Hashtags: none in artwork, none on Google, five at most from the approved list, after the caption.
- Open dates, walk-in days, sitting counts, healed ages and aftercare steps sit in `CONFIRM BEFORE PUBLISHING` fields.
- Every `CONFIRM BEFORE PUBLISHING` field is visible and editable.

**Last check, and the most important.** No asset, colour, font, phrase, figure, motif or layout detail from any other client appears anywhere: not from the reference kit format file, not from any other kit in this workspace, not from a previous project. Search the finished library for any colour that is not in `tokens/css-tokens.css`, any font that is not Cinzel or Source Sans 3, any light ground, and any name that is not this studio's or one of its artists'. Do not hard code BlakSheep Creative into a component; it appears only in the provenance label.

---

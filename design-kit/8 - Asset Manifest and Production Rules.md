# 8. Asset manifest and production rules

Cathedral Tattoo Studio. Version 0.1, 2026-10-12. Prepared by BlakSheep Creative. What exists, what does not, and the rules for adding to it.

**Status.** Nothing in this kit has been approved by anyone at the studio, and nobody there has been interviewed. The assets below are what the agency holds. The logo artwork and the photographs are the studio's own. The derived logo files were cut from that artwork by the agency on 2026-09-05, and the decision to ship the logo as a raster with no redraw is Clint Sanchez's, BlakSheep Creative, of the same date. Every rule here is a BlakSheep Creative proposal until the studio signs it off.

**Built from.** `brand/identity.md`, `brand/guidelines.md`, `brand/architecture.md`, `brand/voice.md`, `brand/context.md`, `DESIGN.md`, `01-Brand-Assets/derived/README.md` and `06-Reports/logo-source-analysis.md` in the client repo, and the model kit this one adapts. Every file listed in section 1 was opened and looked at on 2026-10-12, and every pixel size was read from the file.

## 1. Asset manifest

All paths are relative to the kit folder, `design-kit/`. Use these exact paths. Add no asset that is not listed here.

### Logos (`assets/logos/`)

Three lockup files, seven small-mark files, three ready-made compositions, three source rasters, one artist's mark and a guide.

**The logo exists only as a raster.** There is no vector and none is coming. It is never redrawn, traced, vectorised, re-lettered, recoloured, outlined, given effects or generated. Only the files below are composited, unchanged. **Every one of them is for dark grounds only.**

**The full lockup**

| File | Format and size | Permitted use |
|---|---|---|
| `assets/logos/lockup-1200.png` | PNG, 1200 × 1499, opaque, on pure black `#000000`. Artwork 1041 × 1381 | **Primary logo.** On a `#000000` panel or section. 128 px wide or more. Website hero, email header, documents, closing slides |
| `assets/logos/lockup-600.png` | PNG, 600 × 749, opaque, on pure black `#000000` | The same, for displayed widths from 128 px to 300 px |
| `assets/logos/lockup-1200-alpha-DARK-BACKGROUNDS-ONLY.png` | PNG, 1200 × 1499, with transparency | The lockup on `#0A0A0A`, `#141414` or `#1E1C19`, or on a dark, low-detail area of a photograph that is not a tattoo. 128 px wide or more. Never on anything lighter |

**Small marks**

| File | Format and size | Permitted use |
|---|---|---|
| `assets/logos/avatar-rose-512.png` | PNG, 512 × 512, opaque, on `#0A0A0A` | **The avatar.** The rose window. Profile pictures at 64 px and larger |
| `assets/logos/avatar-cross-512.png` | PNG, 512 × 512, opaque, on `#0A0A0A` | **The small mark.** The cross. Slots from 16 px to 63 px; avatars shown below 64 px; the header mark on inner pages |
| `assets/logos/apple-touch-icon-180.png` | PNG, 180 × 180, opaque | The cross. Home screen icon |
| `assets/logos/favicon-64.png` | PNG, 64 × 64, opaque | The cross. Favicon |
| `assets/logos/favicon-48.png` | PNG, 48 × 48, opaque | The same |
| `assets/logos/favicon-32.png` | PNG, 32 × 32, opaque | The same |
| `assets/logos/favicon-16.png` | PNG, 16 × 16, opaque | The same. The cross is 8 × 12 px here and still reads |
| `assets/logos/favicon.ico` | ICO, holding 32 px and 16 px | The same, for a site root. No site exists yet |

**Ready-made compositions**

| File | Format and size | Permitted use |
|---|---|---|
| `assets/logos/og-card-1200x630.png` | PNG, 1200 × 630, the lockup on `#0A0A0A`. Artwork 375 px wide | Link preview image, used as it is. Nothing is added to it |
| `assets/logos/social-square-1200.png` | PNG, 1200 × 1200, the lockup on `#0A0A0A`. Artwork 734 px wide | Square posts and closing slides. Not the avatar |
| `assets/logos/cathedral-tattoo-studio-denham-springs-cover.jpg` | JPEG, 1920 × 1080, the lockup on pure black. Artwork 600 px wide | Cover images on Google, Facebook and similar |

**Source rasters** (`assets/logos/source/`)

| File | Format and size | Permitted use |
|---|---|---|
| `assets/logos/source/cathedral-tattoo-studio-denham-springs-gold-gothic-logo-lockup-on-black.jpg` | JPEG, 1122 × 1402 | Reference only. The source of every derived file |
| `assets/logos/source/cathedral-tattoo-studio-denham-springs-gold-gothic-logo-1242px-largest-available.jpg` | JPEG, 1242 × 1242 | Reference only. A square crop that loses the outer pinnacles |
| `assets/logos/source/cathedral-tattoo-studio-denham-springs-cts-gold-gothic-monogram-badge.jpg` | JPEG, 1122 × 1402 | The CTS badge. Stamps and stickers only, as a mock-up marked "artwork not print-ready". Never a logo, avatar, favicon, header or footer |

**The artist's mark** (`assets/logos/artist-mark-rc/`)

| File | Format and size | Permitted use |
|---|---|---|
| `assets/logos/artist-mark-rc/roger-cazares-rc-gold-gothic-monogram-artist-mark.jpg` | JPEG, 1024 × 1536 | Reference only. Roger Cazares's signature. It stays where it already sits on his own photographs. This file is placed in no layout |

| File | Format | Purpose |
|---|---|---|
| `assets/logos/README.md` | Markdown | The logo set's own guide: one row per file, byte sizes, grounds, floors, provenance |

### Photography (`assets/photos/`)

29 photographs: 27 finished tattoos and 2 original designs, all the work of Roger Cazares, all portrait. Each is a plain copy of its source. The full description, caption and cautions for each are in `assets/photos/PHOTO-MANIFEST.md`. **Read the cautions before using any frame:** several need a crop to remove a background, clothing lettering or part of a face.

Caption form, for every row: "[piece], [placement]. Roger Cazares."

| File | Size | Subject | Permitted use |
|---|---|---|---|
| `assets/photos/01_portrait_memorial-forearm-black-and-grey.jpg` | 1536 × 2048 | A black and grey portrait of a young man, forearm | Portfolio lead image; memorial and portrait group. Never with copy about loss |
| `assets/photos/02_portrait_mother-and-child-floral-forearm-sleeve.jpg` | 1588 × 2048 | Mother and child with flowers, forearm | Portfolio; large-scale group |
| `assets/photos/03_animal_dog-portrait-with-name-script-forearm.jpg` | 1536 × 2048 | A dog's portrait with a name in script | Animal portrait group. Crop out the film boxes in the background |
| `assets/photos/04_religious_christ-and-dove-forearm-black-and-grey.jpg` | 1578 × 2048 | Christ and a dove, forearm | Black and grey group. Work only, never a hero |
| `assets/photos/05_religious_christ-crown-of-thorns-upper-arm-black-and-grey.jpg` | 1536 × 2048 | Christ in profile with three crosses, upper arm | Black and grey group. Work only, never a hero |
| `assets/photos/06_religious_cherubs-shoulder-blade-black-and-grey.webp` | 1080 × 1440 | Two cherubs, shoulder blade | Black and grey group. Cleaned copy: check the top right at full size |
| `assets/photos/07_religious_eye-and-crown-of-thorns-calf-dotwork.jpg` | 1470 × 2048 | An eye in thorns, dotwork, calf | Fine line and dotwork group |
| `assets/photos/08_lettering_scripture-verse-script-thigh.jpg` | 1714 × 2048 | Five lines of script, thigh | Lettering group. Shown as lettering only; the words are never quoted or used as a message |
| `assets/photos/09_lettering_hope-with-hands-and-nail-forearm.jpg` | 1630 × 2048 | Gothic lettering over cupped hands, forearm | Lettering group. Never a model for live type |
| `assets/photos/10_fine-line_mother-and-baby-hands-with-flowers-forearm.jpg` | 1598 × 2048 | An adult's and a baby's hands between flowers | Fine line group; first-timer layouts |
| `assets/photos/11_fine-line_dandelion-rib.jpg` | 1536 × 2048 | Two dandelions, ribs | Fine line group, website only. Crop to the piece |
| `assets/photos/12_fine-line_paintbrush-forearm-micro-realism.webp` | 1080 × 1440 | A paintbrush in micro realism, forearm | Fine line group. Cleaned copy: check the top left at full size |
| `assets/photos/13_dotwork_matching-lambs-thighs.jpg` | 1626 × 2048 | Two small lambs, one above each knee | Fine line and dotwork group |
| `assets/photos/14_dotwork_swan-and-cattails-thigh.jpg` | 1608 × 2048 | A swan among cattails, thigh | Fine line and dotwork group |
| `assets/photos/15_blackwork_butterfly-upper-arm.jpg` | 1536 × 2048 | A black butterfly, one wing dissolving | Black and grey group |
| `assets/photos/16_large-scale_pegasus-and-moon-half-sleeve-dotwork.jpg` | 1536 × 2048 | A winged horse under a crescent moon, half sleeve | Large-scale group |
| `assets/photos/17_large-scale_wolf-pack-half-sleeve-black-and-grey.jpg` | 1434 × 2048 | Three wolves among pines, half sleeve | Large-scale group. The one frame with daylight. Crop out the window lettering and the chin |
| `assets/photos/18_large-scale_owl-half-sleeve-black-and-grey.webp` | 1080 × 1440 | An owl with an orange eye, half sleeve | Large-scale group. Cleaned copy: check the top right at full size |
| `assets/photos/19_large-scale_sword-spine-back-blackwork.jpg` | 1536 × 2048 | A sword down a spine. Black and white as supplied | Large-scale group. The only back piece. Crop out the wall banner |
| `assets/photos/20_animal_lion-above-knee-black-and-grey.webp` | 1080 × 1440 | A lion's head above a knee | Animal portrait group. Cleaned copy: check the bottom left at full size |
| `assets/photos/21_animal_tiger-forearm-black-and-grey.webp` | 1080 × 1440 | A snarling tiger, forearm | Animal portrait group. Cleaned copy: check the top left at full size |
| `assets/photos/22_animal_big-cat-and-mandala-upper-arm.jpg` | 1536 × 2048 | A big cat with blue eyes in a mandala | Animal portrait group. Crop below the shoulder strap so no jawline shows |
| `assets/photos/23_black-and-grey_medusa-calf.webp` | 1080 × 1440 | Medusa, calf | Black and grey group. Cleaned copy: check beside the monogram at full size. Never beside first-timer copy |
| `assets/photos/24_colour_moth-upper-back.jpg` | 1592 × 2048 | A moth in pink, purple and blue, base of the neck | Colour group |
| `assets/photos/25_colour_hummingbird-forearm.jpg` | 1536 × 2048 | A hummingbird in saturated colour, forearm | Colour group. One saturated colour image per view |
| `assets/photos/26_colour_heart-thistle-and-goldfinches-thigh.jpg` | 1536 × 2048 | A red heart with thistles and goldfinches, thigh | Colour group. One saturated colour image per view |
| `assets/photos/27_colour_orchid-ankle.jpg` | 1586 × 2048 | An orchid in loose colour, ankle | Colour group; first-timer layouts |
| `assets/photos/28_design_three-dobermans-with-lettering.jpg` | 1536 × 2048 | A finished design on a tablet: three dobermans under lettering | "How a piece is planned", small. A design, not a tattoo. Never a hero |
| `assets/photos/29_design_burning-ship-and-skull.jpg` | 1536 × 2048 | A finished design on a tablet: a burning ship on a skull | "How a piece is planned", small. A design, not a tattoo |
| `assets/photos/PHOTO-MANIFEST.md` | Markdown | One row per photo: source path, size, what it shows, kind, caption, use, cautions | Read first |

### Tokens

| File | Type | Use |
|---|---|---|
| `tokens/css-tokens.css` | CSS custom properties with the prefix `cts-`, and two button classes | The values of record for every hex, font family, type size, line height, space, radius and content width. Interim: the golds were sampled from a JPEG gradient. Where any other file disagrees with it, the token file wins. It is not edited inside this kit |

### Icons

| File or library | Type | Use |
|---|---|---|
| None bundled. A line set with square ends and mitred joins is proposed (file 3, section 11) | Open-licence line icons: 24 px grid, 1.5 to 2 px stroke | One set across everything. Record the set and its licence when it is chosen |
| No icon is drawn for this brand | | No needle, machine, skull, cross, arch or gothic ornament is drawn as an icon |

### Fonts

Not bundled. Cinzel (weight 600, for H1 and H2 only) and Source Sans 3 (weights 400 and 600, for everything else) load from Google Fonts under the SIL Open Font Licence. No font file exists in the kit, and no font is available beyond what Google Fonts serves. The blackletter face inside the logo is unidentified, exists only as pixels, and is never set as live type.

### Reference materials

- `assets/references/reference-kit-format_REFERENCE-ONLY.pdf`: a finished brand kit that Claude Design produced for a different client, 3,970,292 bytes. **A format reference only.** It shows the structure, depth and layout the agency wants. It is confidential and is not in version control. None of its brand, facts, colours, type or wording applies here, and nothing may be copied from it.

### What does not exist

Do not build, draw, trace or generate any of these inside a layout. Where one is needed, use a labelled slot marked `CONFIRM BEFORE PUBLISHING` and say what it is waiting for.

| Not available | Until it is |
|---|---|
| A vector logo, in any format | The supplied rasters only, at 128 px wide or more for the lockup |
| A light-ground logo | No layout has a light ground. Gold on white is 2.95 to 1 and fails |
| A one-colour logo: black, white or flat gold | The supplied rasters only. Nothing is flattened or recoloured |
| A horizontal lockup, a wordmark alone, or a mark for 64 px to 127 px outside an avatar | The cross |
| Print-ready artwork: no CMYK file, no spot colour, no Pantone, foil or metallic ink reference | Print templates are layouts only, each marked "artwork not print-ready" |
| Signage artwork | A layout mock-up marked "artwork not print-ready". The raster shows above roughly one metre |
| An embroidery file | Nothing. Embroidery needs flat colour and the artwork has 129,764 colours |
| A flat, authored value for the gold | The interim tokens. Never sample a gold from the logo or a photograph |
| The blackletter font; any font file beyond Google Fonts | Cinzel and Source Sans 3 from Google Fonts. Blackletter is never live type |
| Work by Mikayla Paul, her portrait, her handle, and her agreement to be named | A labelled photo slot. Every use of her name is `CONFIRM BEFORE PUBLISHING` |
| Any photograph of the studio, inside or out | A labelled photo slot |
| A publishable portrait of an artist at work | A labelled photo slot. The one on file shows another shop's sign and was left out of the kit |
| A client's face with consent; a process shot; a healed and fresh pair; a piece recorded as a cover-up; any landscape photograph | A labelled photo slot. No caption says "healed", "fresh" or "cover-up" |
| A website, a domain or a URL | No URL appears anywhere. Any URL slot is `CONFIRM BEFORE PUBLISHING` |
| A booking form, a booking link or an online calendar | The phone button: "Call or text (225) 301-9527" |
| An email address for print | None is printed anywhere |
| Prices, a minimum, a deposit, an offer | Nothing. See file 6 |
| Aftercare instructions from the studio | A layout with labelled text slots. No step is written by the agency or by a tool |
| Any video footage | Stills only. No video is generated |
| A record of who made the logo or who holds its rights | Nothing changes in use. It is an open question for the studio |

## 2. Logo rules for production

1. **Never redraw, trace, vectorise, re-letter, recolour, outline, simplify, mirror or AI-generate the logo, the rose window, the cross or the badge.** Not to "clean it up", not to make a light version, not to make a horizontal one.
2. Composite the supplied files only, unchanged, with their proportions preserved.
3. **Dark grounds only.** `#0A0A0A`, `#141414`, `#1E1C19`, pure black, or a dark and low-detail area of a photograph that is not a tattoo. Never white, cream, light grey or a light photograph.
4. On `#0A0A0A` use the alpha file. The opaque lockup files have a pure black ground and can show as a faint rectangle on `#0A0A0A`; place them on a `#000000` panel.
5. Floors: the full lockup at 128 px wide or more; the rose window at 64 px or more, for avatars; the cross below that, down to 16 px. Step to the next mark. Never shrink the lockup past its floor.
6. Clear space: the height of the cross finial, about 8 per cent of the lockup's height, on every side.
7. Once per view. Never over busy imagery. Never on a tattoo photograph. Never repeated, tiled or ghosted as a background.
8. No effects: no shadow, glow, bevel, stroke, gradient, texture, shine or animation.
9. The name is never set in live type as a substitute for the logo. Nothing is ever set in blackletter, and no second gothic face is used.
10. The RC monogram is Roger Cazares's signature. It stays on his own photographs and goes nowhere else. The CTS badge appears only in a stamp or sticker mock-up.
11. In a mock-up of a sign, a window, a card, a shirt or a sticker, use the supplied raster on a dark surface and mark the piece "artwork not print-ready". Do not let an image model render any lettering.
12. The tagline is never part of the logo artwork or its clear space. `CONFIRM BEFORE PUBLISHING`: "Work worth carrying" is a proposal and goes on nothing permanent until the studio approves it.

## 3. Image rules

1. **Real photographs only.** Every image of a tattoo, a person or a place is one of the 29 files in `assets/photos/`. If none fits, use a labelled photo slot.
2. **Crop, straighten and correct exposure.** Nothing else. A modest white balance is allowed so that black and grey reads neutral.
3. **No filters.** No colour grade, duotone, gold tint, vignette, grain, sharpening halo, background blur or darkening overlay.
4. **Never retouch a tattoo.** Not a line, not the shading, not the colour, not the redness of fresh work, not the skin, not a scar.
5. **No compositing, object removal, background swap, generative fill or expansion.**
6. **No upscaling**, by resampling or by AI. An upscaler invents detail. A file is never shown wider than its pixel width: 1080 px for the six WebP files, 1434 to 1714 px for the rest.
7. **The cleaned copies were patched once, by the agency, on background, clothing or bare skin only.** Rows 6, 12, 18, 20, 21 and 23. Check the patched area at full size before any large placement, as the manifest says. No further cleaning is done inside a layout, and no other cleaned copy is added without the same check.
8. **The RC monogram stays.** Never erased, covered, recoloured or cut through. A crop keeps it whole or leaves it wholly outside the frame. It never sits beside the Cathedral lockup as an equal.
9. **Caption every piece:** "[piece], [placement]. Roger Cazares." Sentence case, in Small, beneath the photograph. No caption names a client, a place, a date or a price, and none says "healed", "fresh" or "cover-up".
10. **No wearer's face.** Crop it out; do not blur. A tattooed portrait of a person is work and is allowed.
11. **No licensed characters**, in a tattoo or in a background. Crop out film boxes, posters, figures and branded clothing where the manifest says so.
12. **No other shop's name, sign or watermark** anywhere in a frame. If one is found, the file comes out of the kit the same day.
13. **No background is the studio.** No photograph on file shows it. Never caption or imply otherwise.
14. **Religious imagery appears only as tattoo work in a photograph**, with a plain caption. Never a hero, a background, an advert or the picture beside a headline. Words from a tattoo are never quoted in copy.
15. **Memorial pieces are shown plainly.** No before and after, no story about the person, no copy about loss.
16. **Nothing sits on a photograph.** No text, logo, button, badge, scrim or frame. Photographs are square-cornered.
17. **Fewer, larger.** One feature piece or a set of at most four in a view; at most 12 on a page.
18. **One saturated colour photograph per view**, so the colour does not fight the gold.
19. **If anyone asks for a photograph to come down, it comes down the same day.**
20. Alt text says what is in the frame: "A black and grey portrait tattoo of a smiling young man on a forearm, by Roger Cazares." No keywords, no town, no praise.

### Photo slot

A photo slot is a flat Surface `#141414` rectangle at the slot's ratio, with a 1 px Text muted `#A9A29A` border, a line image icon in Text muted, and a label in Small that names the missing picture and what it takes to get it: "The front room at 1318 Florida Ave SW. `CONFIRM BEFORE PUBLISHING`: photograph needed from the studio." It is a kit component, clearly unfinished, and is never shipped in a public piece.

Slots this kit needs: work by Mikayla Paul; a portrait of each artist at work; the room; a client at ease; a process shot; a cover-up; a landscape image for any wide placement.

### The `CONFIRM BEFORE PUBLISHING` badge

A small label for any unfilled or unapproved slot: Source Sans 3 600 at 14 px, capitals, 0.08em tracking, Warning `#E8A33D` text on Surface with a 1 px Warning border and a 6 px radius. Warning on Surface measures 8.54 to 1. It is the only use of a status colour outside a form, and it never appears in a public piece. It is removed only when the item is confirmed.

## 4. AI image generation rules

The template's rules assume a brand that generates photographs. This one does not.

**Generated images are not permitted for tattoos, skin, people, rooms or logos.** That covers:

1. A tattoo, a tattoo design, flash, a stencil or a sketch, in any style.
2. Skin, an arm, a back, a hand or any part of a body, with or without a tattoo.
3. An artist, a client or any person, face or no face.
4. A studio interior or exterior, a chair, a workstation, a shopfront, a sign, a street or Denham Springs.
5. The logo, the rose window, the cross, the badge, the RC monogram, blackletter lettering, or any text set on a generated object.
6. A cathedral, a church, stained glass, stone, tracery, candles, gold leaf or any gothic or religious scene, as a background or a texture.
7. A mock-up of a sign, a window, a shirt, a card or a sticker rendered by an image model.

**No generative fill.** No extension, outpaint, expansion, background swap, relight, clean-up, object removal or upscale of any supplied photograph.

**No retouching of a tattoo**, by any tool. Section 3, rule 4.

**The only permitted generated graphics are abstract layout elements built from the tokens:** a flat field of a token colour, a hairline, a panel, a square frame for a photograph. Build them in code or as vector shapes. They carry no texture, no gradient, no pattern and no imagery.

The reason is the trade. A tattoo photograph is a claim that an artist made that mark on that person. A generated tattoo is a false claim about someone's skin and someone's skill, and a retouched one is the same claim made quietly. The brand's whole case is the work, shown as it is.

The template's "default commercial photography prompt framework" is not adapted. There is no approved prompt for a generated photograph, because none may be generated. Where a picture is missing, the answer is the list of photographs to ask for at the end of `assets/photos/PHOTO-MANIFEST.md`, and a labelled photo slot in the meantime.

## 5. Platform application rules

Sizes are working values. Verify each against the platform's current guidance at production time and record the date. Keep dimensions as editable values, not baked into components.

### Rules for every platform

- **One piece, one caption, one next step.** A real photograph with a plain caption beats a designed card. Templates are for the posts that need words.
- **Avatar:** the rose window, `assets/logos/avatar-rose-512.png`, on every platform. Composite it; do not rebuild it. Test it in a circle at 32, 64, 128 and 256 px and report honestly where it fails: below 64 px the tracery fills in, and the cross, `assets/logos/avatar-cross-512.png`, is the avatar there. Never the full lockup in a circle. Never the RC monogram. Never the CTS badge.
- **Cover:** `assets/logos/cathedral-tattoo-studio-denham-springs-cover.jpg`, the lockup on black, with nothing added. Once a photograph of the room exists it may replace this. No tattoo photograph is used as a cover, because every one is portrait.
- **Logo in a graphic:** the full lockup only where it can be 520 px wide on a 1080 px canvas, which is a closing slide. Elsewhere a graphic carries no logo: the avatar and the account name supply the brand. The cross may sit in a corner at 96 px with a margin equal to its height, at most once.
- **Photographs in a graphic:** square-cornered, uncropped by text, nothing on top. Words go on the black field above or below the photograph, never across it.
- **Safe margins:** 80 px on all sides of a 1080 px canvas. On 1080 × 1920, keep text out of the top 250 px and the bottom 340 px.
- **Type:** headline in Cinzel 600 at 72 to 88 px, capitals, 6 words at most. Support line in Source Sans 3 400 at 44 px. Label in Source Sans 3 600 at 30 px, capitals. Smallest text 36 px. No more than two type sizes plus a label. No blackletter.
- **Ground:** `#0A0A0A`, always. At most one Surface or Elevated panel. No gradients, shadows, glows, textures or photo tints.
- **The gold hairline** is the one device: 2 px, 120 px long, Gold, one per graphic (file 3, section 15).
- **Gold:** a label, a hairline and nothing else. A graphic that is a quarter gold is wrong.
- **Calls to action:** "See the work" or "Call or text (225) 301-9527", written in the caption and, where a graphic needs one, as a single line of text. No button is drawn on an image. Never "Book now", "Book online" or "Get inked".
- **Credit:** every piece names its artist, in the caption and on any graphic that shows the piece.
- **Watermarks:** none are added. The RC monogram is already on Roger Cazares's photographs and stays. No Cathedral mark is stamped on a photograph.
- **Review graphics:** `#0A0A0A` ground; one gold hairline; the quotation verbatim in Source Sans 3 400 at 52 to 60 px, Text, 40 words at most; the first name in Source Sans 3 600; "Google review" in the Label style, Text muted. No star row, no decorative quotation marks, no photograph, no Cinzel. Only quotations from the approved list in files 5 and 6.
- **Open dates graphics:** only from dates the studio supplies. A plain list on the black field. No "limited", no count of spaces, no countdown.
- **Hashtags:** at most three, plain and true, after the caption on Instagram and Facebook. None on Google.
- **Alt text** on every image post. Nothing essential (a date, the phone number) appears only in the image.
- **Banned in every template:** see section 6. In short: no ownership, tenure, licensing or hygiene claim; no premium word; no superlative; no price or offer; no "by appointment"; no other shop; no piercing; no move; no stars; no faith claim; no church language; no category cliché; no copy about grief; no emoji or exclamation mark.

### Platforms this client uses

| Platform | Account today | Sizes | Rules for this platform |
|---|---|---|---|
| **Google Business Profile** | Live, and the main brand surface. 5.0 from 6 reviews on 2026-10-11, every one answered | Post 1200 × 900 (4 to 3). Cover 1080 × 608. Logo image square, from `assets/logos/social-square-1200.png` | The profile people see first. Photographs first: work, uncropped by text. Every tattoo photograph is portrait, so a 4 to 3 post is a black field with the photograph centred at full height and its caption beside it, not a crop. Posts under 300 characters: one piece, the artist, the phone number. No hashtags, no price, no "by appointment". Review replies follow file 4. Any photograph on the profile that carries another shop's watermark comes down |
| **Instagram (studio)** | `@cathedral_tattoostudio`, with the underscore | Feed 1080 × 1350 and 1080 × 1080. Story and reel cover 1080 × 1920. Carousel 1080 × 1350, 3 to 5 slides | The rose window as the avatar. The studio's account covers what an artist's account cannot: every artist, the room, open dates, what to expect. It is not a mirror of anyone's personal feed. Carousel: black ground, one piece or one step per slide; last slide the lockup at 520 px, the phone line and the address. Credit every artist by name |
| **Instagram (artist)** | `@rc_tattoos`, Roger Cazares's own account | Not designed here | It is his, it predates the studio and it stays his. The kit designs nothing for it and never restyles, renames or rebrands it. It is named as a credit: "Roger Cazares, @rc_tattoos" |
| **Facebook** | A studio page exists. Its URL is not recorded in this kit | Feed 1080 × 1350 and 1080 × 1080. Link preview 1200 × 630. Cover 1640 × 924, with the subject kept inside the middle 1640 × 624 strip that desktops show | The same post as Instagram. Cover is the lockup on black. The page name should read "Cathedral Tattoo Studio" with a capital S. `CONFIRM BEFORE PUBLISHING`: the page URL |

### Other platforms the social prompt covers

The client has no confirmed account on any of these. Build nothing for them beyond the shared masters (1080 × 1080, 1080 × 1350, 1080 × 1920, 1200 × 630), and label any platform frame "no account on file".

- **TikTok, YouTube, YouTube Shorts and Reels covers:** the 1080 × 1920 master with its safe zones. Real footage only; none exists.
- **X, Threads, Bluesky, Pinterest and LinkedIn:** the shared masters. No platform-specific design.
- **Yelp, Nextdoor and Facebook Groups:** a plain photograph and a plain caption. No designed graphic.

### Other applications

- **Website:** none exists and no domain is registered. Website layouts in this kit are designs for a site that has not been commissioned. No URL appears in any of them.
- **Link preview image:** `assets/logos/og-card-1200x630.png`, as it is.
- **Email header:** a `#000000` panel, `assets/logos/lockup-600.png` at 160 px displayed, centred; body text in Text on `#0A0A0A`; one Gold button with a Ground label. Georgia and Arial where the two faces are unavailable. Many mail programs force a light background: where the dark ground cannot be guaranteed, send plain text with no logo rather than risk the mark on white.
- **Presentations and PDFs:** `#0A0A0A` pages, Cinzel headings, Source Sans 3 body, one gold hairline per page, the lockup on the title page only. A document that must be printed on white paper carries no logo and is plain text.
- **Display ads:** none specified. If built, the shared rules apply, the fixed calls to action are the only labels, and no religious or memorial piece is the picture.
- **Print collateral** (business card, aftercare card, sticker, stamp, sign): **layouts only.** 0.125 in bleed and a 0.25 in safe margin as working values, on black stock. Every piece is marked "artwork not print-ready": the logo is a raster with no spot colour, the gold has no ink or foil reference, and nothing can go to a printer, a sign maker or an embroiderer from this kit. Aftercare text is a labelled slot until the studio supplies it. `CONFIRM BEFORE PUBLISHING`: nothing is printed or produced until the studio signs it off and production artwork exists.

## 6. Quality control checklist

Run on every page, template, graphic, post and export. One "no" stops it.

**Provenance and status**

- [ ] Nothing describes the kit as approved by the studio. The position, the tagline, the voice, the typefaces, the colour roles and every component are marked as proposals.
- [ ] Every unconfirmed item carries a visible `CONFIRM BEFORE PUBLISHING` marker and is not filled with a guess.
- [ ] No invented brand element: no new logo, mark, monogram, pattern, ornament, illustration or colour.
- [ ] No generic template styling that conflicts with the brand. The piece reads as black with a little gold and one photograph.

**Logo**

- [ ] A supplied file is composited, unchanged, with its proportions preserved.
- [ ] It sits on a dark ground. No logo is on white, cream, light grey or a light photograph.
- [ ] The opaque lockup sits on `#000000`; the alpha lockup is used on `#0A0A0A`, `#141414` and `#1E1C19`. No faint rectangle shows.
- [ ] The full lockup is 128 px wide or more, with clear space equal to the cross finial. The rose window is 64 px or more and is used as an avatar. Below that, the cross, down to 16 px.
- [ ] The logo appears once in the view. It is not on a tattoo photograph, not over busy imagery, and not used as a pattern or a ghosted background.
- [ ] No redrawn, traced, vectorised, recoloured, mirrored or generated logo, rose window, cross or badge anywhere, mock-ups included.
- [ ] No effect on the logo. No tagline, place or phone number inside it or its clear space.
- [ ] The name is not set in live type in place of the logo. Nothing is set in blackletter. No second gothic face.
- [ ] The RC monogram appears only on Roger Cazares's own photographs, where it already was. It is not an avatar, a favicon, a header or a footer. The CTS badge appears only in a stamp or sticker mock-up.
- [ ] Every print, sign, sticker and garment layout is marked "artwork not print-ready".

**Colour and type**

- [ ] Only the token colours. The ground is `#0A0A0A`. There is no light section.
- [ ] Gold is 12 to 15 per cent of the view at most, the logo included. One primary button and one gold hairline per view.
- [ ] The label on a Gold fill is Ground `#0A0A0A`. No light text on gold. No gold text on a gold fill.
- [ ] Gold deep `#825F2C` is used only for lines and for text of 24 px or more, on Ground or Surface, never on Elevated.
- [ ] Every card has its 1 px border. No form field relies on the 18 per cent border alone.
- [ ] Every text and background pair meets WCAG AA. Every icon, field border and focus ring meets 3 to 1. Contrast checked on the actual background.
- [ ] No gradient, glow, shadow, texture, metallic effect or second accent hue. Status colours appear only in forms.
- [ ] Cinzel is used for H1 and H2 only, in capitals, letterspaced, on short lines. Everything else is Source Sans 3 at 400 or 600.
- [ ] Sentence case everywhere outside Cinzel headings and the Label style. Every quotation is in Source Sans 3, upright.
- [ ] No script, brush, handwritten, grunge, slab or geometric sans face.
- [ ] Spacing uses 8, 16, 32, 64, 96 or 128 px. Radius is 6, 12 or 20 px, and 0 on photographs.
- [ ] No gothic ornament as interface furniture: no fleuron, scrollwork divider, arch, drop capital or cross icon.
- [ ] Every interactive element has a visible focus ring and is at least 44 × 44 px.

**Images**

- [ ] Every photograph is one of the 29 files in `assets/photos/`. No stock. No AI-generated tattoo, skin, person, room or logo.
- [ ] Cropped, straightened and exposure-corrected only. No filter, composite, object removal, generative fill, expansion, upscale or background swap. No tattoo retouched.
- [ ] No file is shown wider than its pixel width.
- [ ] The cautions in the photo manifest were followed for each frame used: backgrounds, clothing lettering, a jawline and other artists' tattoos are cropped out.
- [ ] Each cleaned copy (rows 6, 12, 18, 20, 21, 23) was checked at full size where the manifest says, and no trace of another shop's mark is visible.
- [ ] No wearer's face. No licensed character. No other shop's name, sign or watermark anywhere in any frame.
- [ ] The RC monogram is whole or wholly outside the frame. It is not erased, covered or cut through.
- [ ] Every piece is captioned "[piece], [placement]. Roger Cazares." No caption says "healed", "fresh", "cover-up", a client's name, a place or a date.
- [ ] Nothing sits on a photograph. Photographs are square-cornered.
- [ ] At most one feature piece or four pieces in a view, and 12 on a page. One saturated colour photograph per view.
- [ ] No background is presented as the studio. Missing pictures are labelled photo slots, and no photo slot is in a public piece.
- [ ] Rows 28 and 29 are captioned as designs and are not presented as tattoos.

**Names and people**

- [ ] The name is "Cathedral Tattoo Studio" or "Cathedral". Never "CTS" in text. The legal entity is not printed.
- [ ] Roger Cazares is named in full at first mention. Every use of the name Mikayla Paul carries `CONFIRM BEFORE PUBLISHING`.
- [ ] The only title for anyone is "Tattoo artist at Cathedral Tattoo Studio". Never "the team" where a name belongs.
- [ ] Instagram handles are exact: `@cathedral_tattoostudio` and `@rc_tattoos`.

**Copy**

- [ ] Copy matches the brand voice in file 4: plain, specific, careful, unhurried, at ease.
- [ ] Buttons read exactly "See the work" and "Call or text (225) 301-9527", with "Check open dates" only where real dates are shown. The phone is a button and is linked `tel:+12253019527`.
- [ ] Contact information is current: 1318 Florida Ave SW, Denham Springs, LA 70726 · (225) 301-9527 · Monday to Thursday 10am to 6pm, Friday and Saturday 10am to 7pm, closed Sunday. No email. No URL.
- [ ] "Walk in, or book ahead." appears as a plain fact. Walk-ins are not a headline, a banner or a promotion. Commissioned work leads the layout.
- [ ] Only Denham Springs is named, or "Denham Springs and the Baton Rouge area".
- [ ] No exclamation mark, ellipsis, emoji or dash used as punctuation. No stuffed hashtags.
- [ ] No church vocabulary, gothic prose or play on the name: no "sanctuary", "sacred", "hallowed", "ritual", "congregation".
- [ ] The proposed tagline, "Work worth carrying", is marked `CONFIRM BEFORE PUBLISHING` and is on nothing permanent.

**Platform**

- [ ] Mobile crop checked. Social safe areas checked. Circular avatar crop checked at 32, 64, 128 and 256 px.
- [ ] Smallest text in a 1080 px graphic is 36 px.
- [ ] One message per graphic. No more than two type sizes plus a label.
- [ ] Alt text written. Nothing essential lives only in the image.

**Privacy**

- [ ] Only public business details appear: the address, the phone and the hours. No email, no personal number, no client's name, no agency notes, no account identifiers.

**Prohibited claims (binding; these override everything above)**

- [ ] 1. Ownership: no "owner", "founder", "owned and operated" or "family-owned", for anyone.
- [ ] 2. Tenure: no years, "since", "established", "experienced" or "veteran".
- [ ] 3. Licensing and hygiene, in the brand's own voice: no "licensed", "certified", "sterile", "clean", "safe", "hospital-grade" or "health department approved".
- [ ] 4. Premium words: no "premium", "luxury", "high-end", "elite", "exclusive", "bespoke", "boutique" or "upscale".
- [ ] 5. Superlatives: no "premier", "best", "top-rated", "#1", "award-winning", "world-class" or "utopia".
- [ ] 6. Price: no figure, no "from", no minimum, no hourly rate, no deposit, no "affordable", no "price friendly", no discount, promo, sale, giveaway, countdown or "spots going fast".
- [ ] 7. Booking model: no "by appointment", "appointment only", "booking required", "limited intake" or "waiting list". No "Book now", "Book online" or booking form.
- [ ] 8. Other businesses: no competitor's name, no comparison, no reference to any previous shop, in words or in any photograph.
- [ ] 9. Piercing: not offered, shown or mentioned in any layout.
- [ ] 10. The move: no "new location", "moving" or "bigger space", and no second address.
- [ ] 11. Reviews: only the dated line, "5.0 on Google from 6 reviews (October 11, 2026)", re-checked before use; only verbatim quotations from the approved list, with a first name and "Google review"; no stars drawn as graphics; no invented, paraphrased or tidied review; nothing from the excluded reviewer.
- [ ] 12. Religion: no "Christian", "faith-based", scripture used as marketing copy, or denominational framing. Religious imagery appears only as tattoo work in a photograph.
- [ ] 13. Category clichés: no "ink" as a noun, "inked", "parlor", "body art", "bring your vision to life", "your body is a canvas", "no regrets", "journey" or "transform".
- [ ] 14. Grief: no "honour your loved one", no "keep their memory alive", no before and after on a memorial.

## 7. Maintenance

Review this kit:

- When the studio answers any open item in file 0. Remove the matching `CONFIRM BEFORE PUBLISHING` markers and no others.
- **When open decision B-05 is ruled on** (the premium position against a walk-in studio with no minimum). Files 2 and 5 change first, then the layout rule that commissioned work leads.
- When Mikayla Paul agrees to be named, or declines, and when her work arrives: add each photograph to the photo manifest with its caption and cautions, and replace the matching photo slot.
- When photographs of the room, of an artist at work, or of a client with written consent arrive: the same.
- When the artist supplies unwatermarked originals: replace the six cleaned copies, and consider the strong pieces that were left out.
- When the Google rating changes: update the two numbers and the date together.
- When a website is commissioned or a domain registered: every URL slot is filled at once, and `favicon.ico` and the link preview image go into use.
- When production artwork for the logo exists, or its maker and rights are recorded: `assets/logos/README.md`, file 3 section 1 and the "not available" table here are rewritten.
- When flat values for the gold exist: `tokens/css-tokens.css` is replaced from the client repo, and every contrast figure in file 3 is recalculated.
- When prices, a minimum, a booking link, aftercare text or piercing is confirmed by the studio: files 5 and 6 change first, then this checklist.
- When the tagline is approved or rejected.
- When anyone asks for a photograph to be removed: remove the file the same day and delete its rows here and in the photo manifest.
- When any photograph is found to show another shop's name, a licensed character or a wearer's face: the same.
- After a move, a rebrand, or a change of artists or ownership.
- At least once a year.

### Change log

| Date | Change | Author |
|---|---|---|
| 2026-10-12 | Version 0.1. Initial input kit, built from the brand package of 2026-09-05 as revised 2026-10-11. 29 photographs chosen from 89 candidates; the at-work portrait and every cleaned copy whose patch touched a tattoo were left out. Not approved by the studio | BlakSheep Creative |

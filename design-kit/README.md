# Cathedral Tattoo Studio: Design Kit

Input folder for Claude Design (claude.ai/design). Prepared by BlakSheep Creative, 2026-10-12, version 0.1.

Cathedral Tattoo Studio is a custom tattoo studio at 1318 Florida Ave SW, Denham Springs, LA 70726, (225) 301-9527. It does black and grey, fine line and dotwork, lettering, colour, cover-ups, memorial and portrait work and large-scale pieces. Walk in, or book ahead. Open Monday to Saturday.

**Nothing here is approved by anyone at the studio.** The name, the logo artwork, gold on black, the photographs and the way the shop runs are the client's own. The position, the tagline, the voice, the colour roles, the typefaces and every template are BlakSheep Creative proposals awaiting sign-off. The logo is used exactly as it exists: a raster, with no vector behind it, decided by Clint Sanchez of BlakSheep Creative on 2026-09-05. Start with `0 - READ ME FIRST.md`.

## Run order

1. **`1 - MASTER PROMPT.md`**: the master brand design kit. Run this first.
2. **`7 - SOCIAL TEMPLATE SYSTEM PROMPT.md`**: the social template system. Run it second, in the same Claude Design project, so it inherits the design system from step 1.

## Import steps for Claude Design

Claude Design has no API. A person does this by hand.

1. Open claude.ai/design and start a new project named "Cathedral Tattoo Studio".
2. Give it this folder. Either upload the `design-kit` folder (or a ZIP of it), or use "Create here" and point it at the repository `clintsanchez/cathedral-tattoo-studio`, telling it to work from the `design-kit/` folder only.
3. Upload `assets/references/reference-kit-format_REFERENCE-ONLY.pdf` by hand. It is not in the repository.
4. Create one design system for this client, so everything generated afterwards uses the same tokens.
5. Paste the full text of `1 - MASTER PROMPT.md` as the first message. It is self-contained and names the files to read.
6. Check the first run (next section) before going further.
7. Review the result against the quality checklist in `8 - Asset Manifest and Production Rules.md`.
8. Paste the full text of `7 - SOCIAL TEMPLATE SYSTEM PROMPT.md` in the same project.
9. Regenerate weak sections one at a time with a short prompt that names the section. A single "redo everything" prompt tends to go generic on the later sections.
10. Save exports to `exports/`. A re-sync from the repository is one-way and does not rewrite pages already on the canvas.

The files in this folder are the source of truth. Claude Design is a viewer and a generator. Make changes here first, then re-sync or re-upload.

**If Claude Design is pointed at the whole repository:** tell it to read `design-kit/` only. The rest of the repository holds working files, including photographs that must never be used: anything under `99-Reference/` and anything under `05-Photos/` that is not also in `design-kit/assets/photos/`.

## What to check after the first run

| Check | Pass | If it fails |
|---|---|---|
| The logo | Every logo on the canvas is one of the supplied files in `assets/logos/`, composited unchanged | If the logo has been redrawn, traced, vectorised, re-lettered, retyped in a font, recoloured or given an effect, stop and tell Claude Design to composite the supplied file |
| The name in type | The name is never set in blackletter or any gothic face as a stand-in for the logo | Replace it with the supplied lockup, or set the name plainly in the heading face |
| Ground | Every page is dark. No logo sits on a light ground | Point Claude Design at the ground token `#0A0A0A` and remove the light page |
| Small sizes | Below 128 px wide the lockup is replaced by the rose window; below 64 px by the cross | If a shrunken lockup appears, swap in the correct supplied file |
| The RC monogram | It appears only where it already sits on Roger Cazares's photographs | If it is used as a logo, avatar or header, remove it |
| Photos | Every photograph is a file from `assets/photos/`, in true colour | If a stock photo, an AI-generated tattoo, person or room, or a retouched tattoo appears, replace it with a supplied photo or a labelled photo slot |
| Credits | Every piece of work carries the artist's name. Work on file is credited to Roger Cazares | If a credit is missing or says "the team", add the name |
| Other artists | Mikayla appears only in slots marked `CONFIRM BEFORE PUBLISHING` | Restore the marker. Never fill their slots with Roger Cazares's work |
| Claims | No banned claim anywhere: see the prohibited list at the end of `6 - Brand Context and Prices.md` | Delete the line. Do not soften it |
| Booking | The wording is "Walk in, or book ahead." | If "by appointment" or "appointment only" appears, replace it |
| Colour | Gold is `#B99040` and stays under about 15 per cent of any layout. No gold text on white. No hue outside `tokens/css-tokens.css` | Point Claude Design at the token file |
| Type | Cinzel on the two largest heading levels only. Source Sans 3 everywhere else. No blackletter, script or grunge face | Correct the face |
| Buttons | "See the work" and "Call or text (225) 301-9527" | Correct the wording |
| Web address | No URL anywhere | Delete it or mark the slot |
| Voice | No exclamation marks, no church vocabulary, no superlatives | Rewrite the line plainly |
| Open items | Every unapproved item still shows `CONFIRM BEFORE PUBLISHING` | Restore the marker |

## Launcher messages

The two prompt files are long. With this folder attached to the Claude Design project, paste the short launcher and let it read the file. If a launcher produces a thin result, paste the full prompt file instead.

**First run, master brand design kit:**

```text
Read `1 - MASTER PROMPT.md` in the attached folder in full and carry it out exactly. It is self-contained. Also read `0 - READ ME FIRST.md`, files `2` to `6`, `8 - Asset Manifest and Production Rules.md`, `assets/logos/README.md`, `assets/photos/PHOTO-MANIFEST.md` and `tokens/css-tokens.css`. If `reference-kit-format_REFERENCE-ONLY.pdf` is attached, use it for structure and depth only; it belongs to another client and none of its brand, facts, colours, type or wording applies. The logo is a raster: composite the supplied logo, rose window, cross and favicon files; never redraw, trace, vectorise or re-letter them, and never place them on a light ground. Use only the supplied photos. Do not pause for discovery; mark anything unresolved CONFIRM BEFORE PUBLISHING.
```

**Second run, same project, social template system:**

```text
Read `7 - SOCIAL TEMPLATE SYSTEM PROMPT.md` in the attached folder in full and carry it out exactly. It inherits the design system you just built. The supplied logo, rose window, cross and favicon files and the supplied photos are the only brand assets. Every canvas is dark. Do not pause for discovery; mark anything unresolved CONFIRM BEFORE PUBLISHING.
```

## What is here

| Path | Contents |
|---|---|
| `0 - READ ME FIRST.md` | Status, brand facts, run order, priority order, open decisions |
| `1 - MASTER PROMPT.md` | Claude Design prompt: master brand design kit |
| `2 - Brand Guidelines.md` | Position, promise, proposed pillars, personality, audience, differentiators, do and do not |
| `3 - Visual Identity.md` | Logo system and rules, colour, contrast, type, layout, components, photography |
| `4 - Brand Voice.md` | Voice, tone, writing rules, vocabulary, examples, review responses |
| `5 - Messaging.md` | Positioning, pitches, pillars with proof, trust signals, objections, calls to action, campaign themes, approved review quotes |
| `6 - Brand Context and Prices.md` | Business facts, the work, the pricing rule, service area, operational facts, competitors, the claims lists |
| `7 - SOCIAL TEMPLATE SYSTEM PROMPT.md` | Claude Design prompt: social templates |
| `8 - Asset Manifest and Production Rules.md` | Asset list, image rules, AI image rules, platform rules, quality checklist |
| `assets/logos/README.md` | The logo set's own guide |
| `assets/logos/lockup-1200-alpha-DARK-BACKGROUNDS-ONLY.png` | **The primary logo for layouts.** The full lockup with a keyed background. Use it on the ground `#0A0A0A` and on dark, low-detail areas. 128 px wide or more |
| `assets/logos/lockup-1200.png`, `lockup-600.png` | The same lockup, opaque, on pure black `#000000`. Use it standing alone or on a `#000000` panel; on `#0A0A0A` its edge can show |
| `assets/logos/avatar-rose-512.png` | **The avatar.** The rose window, for 64 px and larger |
| `assets/logos/avatar-cross-512.png`, `favicon-16.png` to `favicon-64.png`, `favicon.ico`, `apple-touch-icon-180.png` | **The small mark.** The cross, for anything under 64 px, down to 16 px |
| `assets/logos/og-card-1200x630.png`, `social-square-1200.png`, `cathedral-tattoo-studio-denham-springs-cover.jpg` | The lockup composed for a link card, a square post and a cover |
| `assets/logos/source/` | The source rasters the set was cut from, and the CTS badge, which is for stamps and stickers only |
| `assets/logos/artist-mark-rc/` | Roger Cazares's signature mark. Reference only. Never a logo |
| `assets/photos/` | The chosen photographs of real work |
| `assets/photos/PHOTO-MANIFEST.md` | One row per photo: source, what it shows, approved use, cautions |
| `assets/references/reference-kit-format_REFERENCE-ONLY.pdf` | A finished kit for another client. Format reference only. See "Sharing" |
| `assets/references/social-prompt-universal-section-map.md` | Agency record of how the social prompt maps to the universal one. Not an instruction |
| `tokens/css-tokens.css` | Token values of record |
| `source-manifest.json` | Kit files, their sources, date |
| `exports/` | Empty until Claude Design has been run |

## Non-negotiables

- No logo, rose window, cross or favicon is ever redrawn, traced, vectorised, re-lettered, recoloured, given an effect or AI-generated. Only the supplied files are composited. Nothing is added to the artwork.
- The logo sits on dark grounds only. There is no light version, no one-colour version and no vector, and none is to be made.
- The blackletter in the logo is never used as live type. No second gothic or blackletter face appears anywhere.
- The RC monogram is Roger Cazares's signature on his own photographs. It is never a logo, avatar, favicon, header or footer.
- Real photos only, from `assets/photos/`. No stock, no AI-generated tattoos, skin, people or rooms, no retouching of a tattoo, no generative fill. No licensed characters.
- Every piece of work is credited by name to the artist who made it.
- Roger Cazares may be named. Mikayla Paul is named only in slots marked `CONFIRM BEFORE PUBLISHING`. The title for anyone is "Tattoo artist at Cathedral Tattoo Studio".
- No "owner", "founder" or "family-owned". No years in business, "since", "established" or "experienced".
- No "licensed", "certified", "sterile", "clean" or "safe" in the brand's own voice.
- No "premium", "luxury", "high-end", "exclusive" or "bespoke". No "premier", "best", "top-rated", "#1" or "award-winning".
- No price, minimum, deposit, discount, promotion, giveaway or countdown. No "affordable".
- "Walk in, or book ahead." Never "by appointment" or "appointment only".
- No competitor's name, no comparison, no mention of any other shop.
- No piercing. No mention of a move or a second address. No web address.
- No church vocabulary in the copy and no denominational framing. Religious imagery appears only as tattoo work in photographs.
- Review quotes are verbatim, from the approved list in file 5, with a first name and "Google review". None invented, none tidied.
- The rating is always dated: "5.0 on Google from 6 reviews (October 11, 2026)".
- Buttons read exactly "See the work" and "Call or text (225) 301-9527".
- Every page is dark. Gold is `#B99040`, used sparingly. No hue outside the token file.
- No exclamation marks, no emoji, no em dashes in any copy.
- Anything unconfirmed stays visible as `CONFIRM BEFORE PUBLISHING`.

## Still missing

- The studio's approval of everything in this kit.
- A decision on the premium question (B-05 in `0 - READ ME FIRST.md`).
- A vector logo, a light-background version, a one-colour version, and print-ready, embroidery or signage artwork. None can be derived from the existing raster.
- The name of the blackletter typeface in the logo.
- Final colour values. The present ones are sampled from a JPEG gradient.
- Any work by Mikayla, a portrait of her, and her agreement to be named.
- Photographs of the room, of the process, and of healed work identified as healed.
- A publishable portrait of Roger Cazares. The one on file shows another business's sign behind him and is not in the kit.
- A website address. No domain is registered.
- Licence and registration numbers, without which no hygiene or licensing claim can be made.
- A statement of mission, vision and values from the studio. The ones in file 2 are placeholders.
- The studio's own account of how it started. There is no brand story in this kit.

## Sharing

The client repository was made public on 2026-10-12 so that Claude Design can read it. Set it back to private once the import is done.

**The reference kit PDF is not in the repository.** `assets/references/reference-kit-format_REFERENCE-ONLY.pdf` is another client's confidential brand kit, used only to show the structure, depth and format wanted. It is kept out of version control. Upload it to the Claude Design project by hand alongside this folder; the prompts work without it and use it when it is attached.

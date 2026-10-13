# Cathedral Tattoo Studio: website

The first site for Cathedral Tattoo Studio (Next.js 14 App Router, TypeScript, Tailwind, Framer Motion). There is
no old site to rebuild from: the facts come from the Google Business Profile and the brand package in this repo.
At this stage it holds nine design directions in three rounds, each with a home page and one inner page (the artist
page for Roger Cazares), for Clint to pick from. Nobody at the studio has seen any of it, and none of it is live.

Started 2026-10-12 on the branch `website-directions`. Nothing is committed yet.

## Run it

From this folder:

    docker compose up -d --build     # http://localhost:3061
    docker compose logs -f
    docker compose down

| Address | What |
|---|---|
| `/` | Chooser |
| `/a/`, `/a/artists/roger-cazares/` | A · The nave (showpiece: a drawn nave in real depth that you walk down by scrolling) |
| `/b/`, `/b/artists/roger-cazares/` | B · By the book (editorial, follows the design kit as written) |
| `/c/`, `/c/artists/roger-cazares/` | C · Three doors (walk-in led, three doors that swing open) |
| `/d/`, `/d/artists/roger-cazares/` | D · Noir (round two, after the Ophidia template) |
| `/e/`, `/e/artists/roger-cazares/` | E · The artifact (round two, after Pierce the Emperor and Bee) |
| `/f/`, `/f/artists/roger-cazares/` | F · Manifesto (round two, after Mythos and Silver Order) |
| `/g/`, `/g/artists/roger-cazares/` | G · The machine (round three, after Ferrari 296 GTB) |
| `/h/`, `/h/artists/roger-cazares/` | H · The knight (round three, after Silent Shogun) |
| `/i/`, `/i/artists/roger-cazares/` | I · The interior (round three, after Yugen) |

The strip at the top switches direction on the same page type. It is for the preview only.

There is no WebGL and no 3D library. The depth is CSS 3D transforms driven by scroll position, the same way the
Load and Geaux directions are built, so it runs on a phone.

## Round two (D, E, F)

Clint looked at round one on 2026-10-12, said the scroll-driven walk in A was not it, said it is fine to break the
design kit, and asked for directions built from the Figma templates. Round two follows specific templates
closely:

- **D · Noir** follows 40 Ophidia: one photograph run to the screen edge and faded into black, a stacked didone
  headline (Bodoni Moda), the name spread across the foot of the hero, a glass card on the corner, three tall
  rounded cards for the kinds of piece, a ghost word behind the visit block.
- **E · The artifact** follows 24 Pierce the Emperor for the hero (the logo standing alone on a lit wall with the
  headline very large behind it, Instrument Serif), 51 Bee for the steps (one object with four glass cards around
  it), and the 3D carousel in 20 Rainbow Noir for the work.
- **F · Manifesto** follows 55 Mythos (light serif in mixed roman and italic, Cormorant Garamond; a title spread
  across the width; a row of pale cards; numbered rounds beside one tall piece) and 23 Silver Order (thin vertical
  rules, gold initials).

In round two the kit's layout rules are set aside: photographs are cropped to fit cards, run large and carry text;
there are gradients, glass and extra typefaces. Still kept: the claims guardrails, no wearer's face, no retouching,
religious pieces never used as a hero, and the logo file itself unaltered (E shows it large; nothing is drawn on
it). The three artist pages in round two share one layout (`components/r2/Artist.tsx`) and differ only in typeface.

## Round three (G, H, I)

Clint asked for three more from templates not yet used, and for a branded 3D tattoo machine and the warrior
templates (2026-10-12).

- **G · The machine** follows 26 Ferrari 296 GTB: one object under a spotlight, a three-line headline with the
  middle line italic (Instrument Sans), a block of tiles in the corner, then the ground turns to a flat colour (gold
  here, pink in the template) with a chequer of text and photographs.
- **H · The knight** follows 25 Silent Shogun: a lone figure in a field in front of a sun, the headline very large
  on either side (Archivo, heavy and wide), a ring of small letters turning round the sun, pale notched cards. The
  template's samurai became a knight, to suit the name.
- **I · The interior** follows 43 Yugen: a room seen head on, the name standing in it as a solid white object (CSS
  text with stacked shadows, not an image), a numbered strip, three pieces stood in a row like the template's
  blades, one very large faint word behind three more.

### The three pictures in `public/gen/` are generated

They were made with Google's Gemini image model on 2026-10-12, at Clint's request. None is a photograph.

| File | What it is | Note |
|---|---|---|
| `tattoo-machine-render.webp` | A coil tattoo machine in black and gold | Not the studio's equipment. The emblem on its side was added by the image model from the logo file, so it is a likeness of the logo, not the logo. The small lettering is not exact. |
| `knight-and-gold-sun.webp` | A knight in a field in front of a gold disc | An illustration |
| `gothic-nave-with-rose-window.webp` | A gothic interior with a lit round window | Not the studio and not a real building |

The prompts are in the session notes, not in the repo. Nobody at the studio has seen these pictures. The numbers on
G's tiles (5.0, 6 reviews, 6 days a week) are from the Google profile as of 11 October 2026 and need re-checking
before anything is published.

## Where things come from

- **Facts and copy:** `lib/site.ts`. Facts are from `../README.md` and `../HANDOFF.md` (checked live 2026-10-11).
  Copy is `../brand/copy-deck.md` v1.1, word for word. No direction adds marketing copy of its own.
- **Photos:** `public/photos/`, 17 of the kit's 29 photographs, cropped by the cautions in
  `../design-kit/assets/photos/PHOTO-MANIFEST.md` and converted to WebP. Nothing else was done to them. File names
  say what the piece is and who made it; they do not name the studio, because several were tattooed elsewhere.
- **Logo and tokens:** the raster lockup and the cross mark from the design kit, unchanged. Colours and type in
  `tailwind.config.ts` and `app/globals.css` match `css-tokens.css`.
- **Shared parts:** `components/shared/` (header, footer with the house bottom bar, buttons, `Piece` for a
  photograph with its caption, `Slot` for a photograph that does not exist yet).

## References (looked at, not copied)

- **GRIGOLETTO Figma pack:** 43 Yugen and 45 Secrett (A: the scene is the first screen, a numbered strip of text
  runs under it), 56 Carousel (A: a curved wall of images), 40 Ophidia (C: three tall cards under a dark hero),
  11 Coda Noir and 15 Lineage Hot (B: dark editorial sections), 23 Silver Order (thin gold rules; its drop caps
  were not used, the kit bans them).
- **The Design System Blueprint** (`notion-design-system-blueprint.md` in the studio repo): one accent, two
  typefaces, one easing curve (`cubic-bezier(0.16, 1, 0.3, 1)`), one spacing scale, hairlines instead of shadows on
  dark.
- **Load and Geaux direction D** (`Load-and-Geaux-Portable-Storage/website/components/d/`): the pinned scroll
  opening, the doors on hinges, the stacking cards.

## Where each direction departs from the design kit

The kit (`../design-kit/3 - Visual Identity.md`) asks for no motion, no illustration and no gradients. Clint asked
for an immersive, dark, 3D site, so two of the three depart from it on purpose.

- **A** draws architecture: pointed arches, a floor and a round window at the end of the nave. The geometry is
  compass work and is not taken from the logo. It uses scroll-driven motion throughout, a gold glow behind the
  window and on the floor, Cinzel larger than the kit's scale for the headline, and Cinzel numerals on the step
  cards. Photographs hang inside the 3D scene and on the turning wall; each is moved and faded as a whole and is
  never filtered or cropped by the layout. The logo is still and appears once, where the walk ends.
- **B** follows the kit as written. See the notes in its own files for the few places the brief and the kit
  disagreed.
- **C** leads with walk-ins and the open-now line, which the kit says should be stated once and never as a
  headline. It draws three arched doors and animates them.

What no direction departs from: the claims guardrails in `../brand/context.md`, the photograph rules (no
retouching, no wearer's face, the RC monogram kept whole, religious pieces shown only as work), and the logo
rules.

## Waiting on the studio

Shown as labelled slots on the pages, not filled in:

- Photographs of the room, of anyone at work in it, and any work by Mikayla Paul or Cleo.
- This month's open dates.
- The tagline "Work worth carrying" is the agency's proposal and is the headline in all three. Roger has not seen it.

## Not built yet

Everything after a direction is chosen: the other pages, per-page titles and descriptions, schema, `robots.txt`,
the policy pages behind the footer links, a contact form (the kit says there is none until the studio agrees to
one), and a Railway preview. The domain `cathedraltattoostudio.com` was unregistered on 2026-10-11.

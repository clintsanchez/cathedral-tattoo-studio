# GRIGOLETTO Templates Pack — Figma Reference Manifest

Updated 2026-10-03. The vendor consolidated the pack into **one Figma file with one page per template** (56 templates).
That file was duplicated into the **BlakSheep Creative** drafts as `MGcXkQsAcm5zyk2NpepuAQ` ([open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/)).
This copy is owned by clint@clintsanchez.com, so the Figma MCP can read it
(the vendor original `OBeWEhsrqXXORYn2vyhcBL` cannot be read — it is view-only).

Source page: [notion-templates-pack-access.md](notion-templates-pack-access.md)

To pull a design into code, reference file key `MGcXkQsAcm5zyk2NpepuAQ` with the template's **page id** as the entry node.
In `use_figma`: `const page = await figma.getNodeByIdAsync('<pageId>'); await figma.setCurrentPageAsync(page);`
Each page holds the layout/screen frames plus an "Editing Guide" instance. **Static** = no animation.

**When the vendor adds more templates:** duplicate the vendor file `OBeWEhsrqXXORYn2vyhcBL` into the BlakSheep Creative drafts again,
list its pages (`return figma.root.children.map(p => ({ id: p.id, name: p.name }))`), then update the file key and page ids here and in `figma-templates.json`.

**Legacy:** the 43 separate per-template copies made on 2026-09-04 still exist. Their keys are kept as `legacy_key` in `figma-templates.json` and noted under each description below.

---

| # | Template | Page id | Static | Open |
|---|---|---|---|---|
| 01 | Bloom Editorial | `4:8` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-8) |
| 02 | Midnight Couture | `4:9` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-9) |
| 03 | Enchanted Diary | `4:10` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-10) |
| 04 | AR Mirror | `4:11` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-11) |
| 05 | Frosted Vault | `4:12` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-12) |
| 06 | Folio Suite | `4:13` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-13) |
| 07 | Neural SNX | `4:14` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-14) |
| 08 | Whisper Nav | `4:15` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-15) |
| 09 | Dulce Flask | `4:16` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-16) |
| 10 | Aero Sync | `4:17` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-17) |
| 11 | Coda Noir | `4:18` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-18) |
| 12 | BlueBird - Tech security | `4:19` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-19) |
| 13 | V0 Gravity | `4:20` | yes | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-20) |
| 14 | Praise Wall | `4:21` | yes | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-21) |
| 15 | Lineage Hot | `4:22` | yes | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-22) |
| 16 | Last Light | `4:23` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-23) |
| 17 | Price Vault | `4:24` | yes | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-24) |
| 18 | Showcase Hero | `4:25` | yes | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-25) |
| 19 | Hallmark | `4:26` | yes | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-26) |
| 20 | Rainbow Noir | `4:27` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-27) |
| 21 | Aqua Veil | `4:28` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-28) |
| 22 | Halo Ring | `4:29` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-29) |
| 23 | Silver Order | `4:30` | yes | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-30) |
| 24 | Pierce the Emperor | `4:31` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-31) |
| 25 | Silent Shogun | `4:32` | yes | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-32) |
| 26 | Ferrari 296 GTB | `4:33` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-33) |
| 27 | Paradise | `4:34` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-34) |
| 28 | Crystal Lotus | `4:35` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-35) |
| 29 | Zephyr | `4:36` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-36) |
| 30 | Iris Vision | `4:37` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-37) |
| 31 | Aurora Heart | `4:38` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-38) |
| 32 | Glacius | `4:39` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-39) |
| 33 | Crystal Sphere | `4:40` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-40) |
| 34 | Smart Key | `4:41` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-41) |
| 35 | Noir Lux | `4:42` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-42) |
| 36 | Techwear | `4:43` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-43) |
| 37 | Solace | `4:44` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-44) |
| 38 | Amethyst | `4:45` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-45) |
| 39 | Prim Tiger | `4:46` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-46) |
| 40 | Ophidia | `4:47` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-47) |
| 41 | Aloohxi | `4:48` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-48) |
| 42 | Atom | `4:49` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-49) |
| 43 | Yugen | `4:50` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-50) |
| 44 | Cat nyp | `4:51` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-51) |
| 45 | Secrett | `4:52` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-52) |
| 46 | Metaverse | `4:53` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-53) |
| 47 | Black Lion | `4:54` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-54) |
| 48 | Boat | `4:55` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-55) |
| 49 | Chair Noise | `4:56` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-56) |
| 50 | Dentist Clinic | `4:57` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-57) |
| 51 | Bee | `4:58` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-58) |
| 52 | Skot | `4:59` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-59) |
| 53 | Sanctuary Retreat | `4:60` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-60) |
| 54 | Phoenix | `4:61` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-61) |
| 55 | Mythos00 | `4:62` |  | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-62) |
| 56 | Carousel | `4:63` | yes | [open](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-63) |

---

## Template descriptions

**01 — Bloom Editorial**  
Editorial hero with an organic vibe. Cinematic, orange blob, serif typography. Ideal for agencies and creative portfolios.  
Page `4:8` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-8) · legacy copy `UCLdUDcR06BD2kfBiKJ2u5` (node `2001-60`)

**02 — Midnight Couture**  
Dark luxury hero. Nocturnal palette, editorial typography, fashion / boutique atmosphere. Works for premium brands.  
Page `4:9` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-9) · legacy copy `EdvQFbTEroOH0o159gMGC2` (node `0-1`)

**03 — Enchanted Diary**  
Minimal bold hero. Giant typography, lots of white space, total focus on the message. For conceptual brands.  
Page `4:10` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-10) · legacy copy `471JzBS7sfcTOEuzubcfPj` (node `14001-3113`)

**04 — AR Mirror**  
Split-screen hero. Divided in half with strong contrast. To present two sides of a product or parallel narratives.  
Page `4:11` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-11) · legacy copy `xwmgqNOXeeoxwDcSjsgW5F` (node `1-23`)

**05 — Frosted Vault**  
Glassmorphism product cards. Pure glass, blur, translucent border. Ready for catalogs or feature lists.  
Page `4:12` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-12) · legacy copy `6XRPdrGqrOOhY236Q8QrDX` (node `1-23`)

**06 — Folio Suite**  
Editorial service cards. Magazine layout, thin lines, clear hierarchy. Ideal for an agency presenting services.  
Page `4:13` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-13) · legacy copy `Z35zfVemVjNV3w2fZHINBb` (node `1-23`)

**07 — Neural SNX**  
Premium navigation bar. Tech touch, glass pill, micro-interactions. Fits SaaS, fintech and digital products.  
Page `4:14` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-14) · legacy copy `S7TbrasmXAcQ7np09vCSlJ` (node `1-23`)

**08 — Whisper Nav**  
Minimal navigation bar. Quiet, thin strokes, generous spacing. For projects that value breathing room and typography.  
Page `4:15` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-15) · legacy copy `AcN2jH48eLoZ6Lt4G6rZmy` (node `1-23`)

**09 — Dulce Flask**  
Hero with floating stats. KPIs and numbers in floating cards. Great for SaaS landing pages, dashboards and data-driven products.  
Page `4:16` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-16) · legacy copy `CTUEXDzLVRKnxZTQ4QmgAh` (node `1-23`)

**10 — Aero Sync**  
Hero with a 3D mockup. Product in three-dimensional rotation. Ideal for apps, devices and physical products.  
Page `4:17` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-17) · legacy copy `wuE9nMJbJG8eiX2bO3hSp0` (node `1-23`)

**11 — Coda Noir**  
Dark editorial footer. Dark palette, majestic typography. Closes sites with elegance and weight.  
Page `4:18` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-18) · legacy copy `JOjbL2F57gl264M7Gigacu` (node `1-23`)

**12 — BlueBird - Tech security**  
Minimal clean footer. Clean, clear, with breathing room. For minimalist sites and SaaS.  
Page `4:19` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-19) · legacy copy `9lvmdhzqvQr1JOEWpUF4Nc` (node `1-23`) · formerly "Bluebird"

**13 — V0 Gravity** _(static)_  
Features grid section. Features organized in a magnetic grid, with icons and short descriptions. Plug-and-play on any landing page.  
Page `4:20` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-20) · legacy copy `TSk5twp3VOCAcPI2wIrGxp` (node `1-23`)

**14 — Praise Wall** _(static)_  
Testimonials section. A wall of testimonials with big quote marks and avatars. Boosts social proof instantly.  
Page `4:21` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-21) · legacy copy `zOmTosA8sCNyQsG3B72nJw` (node `1-23`)

**15 — Lineage Hot** _(static)_  
Dark about section. Dark mode with an origin narrative. For founders and brands that tell a story.  
Page `4:22` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-22) · legacy copy `DUIACNbA3IS73LKpwv3bvZ` (node `1-23`)

**16 — Last Light**  
Premium CTA section. Highlight with an orange glow and strong typography. To close the sale at the end of the page.  
Page `4:23` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-23) · legacy copy `7OSvTAVY7Z9q7nZgXBtLRl` (node `1-23`)

**17 — Price Vault** _(static)_  
Pricing cards. Plans side by side with a highlighted tier. A classic structure that converts.  
Page `4:24` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-24) · legacy copy `zyH5yoQUZmt3K3lsQemvlX` (node `1-23`)

**18 — Showcase Hero** _(static)_  
Blog post hero. Editorial with date, author, category. Serif typography.  
Page `4:25` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-25) · legacy copy `5IIZf4Nfcxr948j8KWojDv` (node `1-23`)

**19 — Hallmark** _(static)_  
Portfolio hero. Curatorial for a designer or studio. Focus on the work, clean layout.  
Page `4:26` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-26) · legacy copy `BoDtULSm0ZMvnbI8uDW1UM` (node `1-23`)

**20 — Rainbow Noir**  
Full landing page. All components compiled — hero + features + testimonials + CTA + footer. A starting point for any project.  
Page `4:27` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-27) · legacy copy `LWLZD2FtuAoKHqdrHcgug0` (node `0-1`)

**21 — Aqua Veil**  
Aquatic hero with translucent glass. Floating fish, cyan + pink palette, ethereal and serene vibe. Ideal for wellness, beauty and sensory-product brands.  
Page `4:28` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-28) · legacy copy `J4wdkxcU36P0IGnLGhKdAg` (node `1-23`)

**22 — Halo Ring**  
Premium tech product hero. 3D liquid-glass smart ring, dark + electric-blue palette, numbered pagination. Fits wearables, IoT, hardware SaaS.  
Page `4:29` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-29) · legacy copy `fSR25LcWpvz9busqsXl3gS` (node `1-23`)

**23 — Silver Order** _(static)_  
Cinematic editorial hero. Medieval armor, W/T drop caps, ivory + blood-red palette, epic-saga vibe. For brands that tell a story, literary content, cinematic projects.  
Page `4:30` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-30) · legacy copy `qsAgvueZTot6T9gdPXZpda` (node `1-23`)

**24 — Pierce the Emperor**  
Museum editorial hero. Golden imperial bust, ivory palette, giant serif 'HIDDEN TREASURES', gallery/collection vibe. For premium brands, art, jewelry.  
Page `4:31` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-31) · legacy copy `qBvd82shPr02P5btjYwfj9` (node `1-23`)

**25 — Silent Shogun** _(static)_  
Oriental cinematic editorial hero. Lone samurai in a lavender field, purple + cream palette, giant 'SHI' typography. Contemplative, zen narrative. For brands with a story, fashion, lifestyle.  
Page `4:32` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-32) · legacy copy `l7fOxpbsypAunJMzW0QRjy` (node `0-1`)

**26 — Ferrari 296 GTB**  
Luxury automotive hero. Ferrari on a cinematic dark background, spec cards (range/speed), bold 'VELOCITY BEYOND LIMITS' typography. For automotive, tech, premium brands.  
Page `4:33` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-33) · legacy copy `QaKHCPI1cRuNcxyeyHRbN3` (node `0-1`)

**27 — Paradise**  
Premium travel hero. Turquoise Caribbean beach, giant serif 'PARADISE', tropical-luxury vibe. For tourism, resorts, lifestyle.  
Page `4:34` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-34) · legacy copy `1jkwyquGvUO0RdFchG7zbK` (node `32001-474`)

**28 — Crystal Lotus**  
Sophisticated editorial hero. Lotus in translucent crystal, cool serene palette, elegant serif, minimalist specs. For beauty, wellness, art.  
Page `4:35` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-35) · legacy copy `YZcv7fKA4qYIaptQGsZPgZ` (node `32001-474`)

**29 — Zephyr**  
Premium product hero for cycling. Zephyr bike on a cinematic dark background, spec cards (range/charge), bold typography. For automotive, sport, tech, premium brands.  
Page `4:36` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-36) · legacy copy `7dIEbjP5RJ1hdFaSRlwSn6` (node `1-23`)

**30 — Iris Vision**  
Conceptual editorial hero. Cinematic close-up of a blue eye, serif typography, artistic and introspective vibe. For design, photography, art, auteur brands.  
Page `4:37` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-37) · legacy copy `uErXCAS27jFdgOBrDWMQIC` (node `1-23`)

**31 — Aurora Heart**  
Premium health/tech hero. Holographic 3D heart on a glass laptop, pink and blue neon, serene palette. For health, wellness, biotech, fintech.  
Page `4:38` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-38) · legacy copy `NpzEUPSMoeoZRHpSRq5wUx` (node `1-23`)

**32 — Glacius**  
Premium outdoor hero. Laptop with a snowy mountain, ice palette, serif FROST typography. For travel, sport, lifestyle.  
Page `4:39` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-39) · legacy copy `TYMP6RfFBncASnTp9SOiqA` (node `1-23`)

**33 — Crystal Sphere**  
Abstract tech hero. Faceted crystal sphere, blue and purple neon palette, laptop. For tech, SaaS, digital products.  
Page `4:40` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-40) · legacy copy `Ebyo8WFG0V9dSRyfy8gkL4` (node `1-23`)

**34 — Smart Key**  
Smart product hero. Orange 3D keycap, spec cards, smart-home vibe. For IoT, gadgets, tech.  
Page `4:41` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-41) · legacy copy `s4yRQSsbyZaDLLmLT7Hs0c` (node `1-23`)

**35 — Noir Lux**  
Luxury hero. Junghans watch, editorial typography, sophisticated light palette. For watchmaking, fashion, premium brands.  
Page `4:42` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-42) · legacy copy `Dk6MtZotwFxeNCSlbJY9dL` (node `1-23`)

**36 — Techwear**  
Streetwear fashion hero. Black techwear jacket, orange detail, futuristic urban vibe. For fashion, streetwear, lifestyle.  
Page `4:43` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-43) · legacy copy `npAuiyiyzyogQehqG8zRxU` (node `1-23`)

**37 — Solace**  
Coastal luxury hotel hero. Coral/blush palette, Mediterranean sunset, arches and infinity pool, premium resort vibe. For hospitality, tourism, luxury real estate.  
Page `4:44` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-44) · legacy copy `KmcrvYlmNDH2yumDHoD9Mx` (node `1-23`)

**38 — Amethyst**  
Luxury electric supercar hero. Neon car in a mystical violet forest, glowing mushrooms, spec cards (range/top speed/battery), purple palette. For automotive, EV, tech, premium brands.  
Page `4:45` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-45) · legacy copy `aXNpfo34ZdFofnHSNqYWyY` (node `1-23`)

**39 — Prim Tiger**  
Luxury jewelry hero. Snow leopard with blue patterns and blue eyes, sapphire necklace, giant serif 'PRIMAL' typography, light blue/white palette. For jewelry, fashion, beauty, luxury brands.  
Page `4:46` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-46) · legacy copy `MitVcqTsrWde8LwzTgp6Cv` (node `1-23`) · formerly "Primal"

**40 — Ophidia**  
Editorial hero with a serpent. Cinematic composition, deep palette, commanding serif typography. For fashion, beauty, jewelry and luxury brands with attitude.  
Page `4:47` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-47) · legacy copy `FLWAjMYJIvVRcbUWrW35d7` (node `74-6`)

**41 — Aloohxi**  
Abstract conceptual hero. Fluid shapes, dreamlike atmosphere, statement typography. For art, music, auteur projects and experimental brands.  
Page `4:48` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-48) · legacy copy `PFpS3wTCwOW5jaOa1nkmid` (node `6012-16`)

**42 — Atom**  
Scientific tech hero. Atomic structure in motion, precise palette, laboratory and innovation vibe. For tech, SaaS, biotech, research and engineering products.  
Page `4:49` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-49) · legacy copy `InggSzLe7wU3NCqD1T7uIF` (node `4002-3`)

**43 — Yugen**  
Oriental cinematic editorial hero. Red torii gate at sunset, mist and concrete, giant 'Yūgen' typography, dark palette with deep red. For brands with a story, fashion, culture, contemplative projects.  
Page `4:50` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-50) · legacy copy `A1M4rvFl0EyslY5tVH6tDC` (node `292-18`)

**44 — Cat nyp**  
Playful game hero. Fluffy 3D felted cat in a blue sweater, chunky rounded 'WHY SO CURIOUS?' typography, teal palette, glass side cards. For games, kids' brands, characters and playful products.  
Page `4:51` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-51)

**45 — Secrett**  
Zen cinematic hero. Glowing red torii gate inside a concrete courtyard, red maples, giant outlined 'Secret' typography, dark teal + red palette, numbered story strip. For culture, travel, wellness and contemplative brands.  
Page `4:52` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-52)

**46 — Metaverse**  
High-energy gaming hero. Anime-style runner sprinting down a neon track, magenta + orange speed blur, bold 'ENDLESS WORLDS' typography, glass nav and character avatars. For games, esports, sportswear and youth brands.  
Page `4:53` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-53)

**47 — Black Lion**  
Bold event hero. Close-up of a lion's eyes with magenta, teal and gold paint strokes, giant 'MONTREAL' typography, glass highlight card. For events, parties, festivals, music and nightlife brands.  
Page `4:54` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-54)

**48 — Boat**  
Luxury marine product hero. Aerial shot of a red electric speedboat on deep blue water, bold 'REDEFINE OCEAN SPEED' typography, efficiency stat card and numbered pagination. For boats, automotive, EV and premium tech.  
Page `4:55` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-55)

**49 — Chair Noise**  
Luxury furniture hero. Sculptural olive-velvet chair with walnut base, giant high-contrast serif 'AXTRA' typography, warm moody interior, product thumbnails. For furniture, interior design, home decor and e-commerce.  
Page `4:56` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-56)

**50 — Dentist Clinic**  
Modern dental clinic hero. Sunset seascape with a 3D tooth and crystals, wide uppercase headline, four rounded service cards (cosmetic, preventive, restorative, wellness). For dentists, clinics, healthcare and wellness practices.  
Page `4:57` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-57)

**51 — Bee**  
Cybersecurity hero. Porcelain-and-gold robotic bee on deep navy, condensed 'RUN OUR/KEY RUN THE/SKY' typography with copper slashes, threats-neutralized stat. For cybersecurity, SaaS, fintech and tech brands.  
Page `4:58` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-58)

**52 — Skot**  
Fantasy storytelling hero. Glowing cosmic tree at sunset, giant ornate serif 'SKOTHYA' typography, quest copy in columns, character and video cards. For games, books, films and story-driven brands.  
Page `4:59` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-59)

**53 — Sanctuary Retreat**  
Luxury retreat hero. Circular window framing alpine peaks, cozy reading nook, thin elegant 'SANCTUARY RETREAT' typography, warm earthy palette, numbered lodge list and stat card. For hospitality, resorts, cabins and wellness travel.  
Page `4:60` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-60)

**54 — Phoenix**  
Luxury jewelry hero. Fiery phoenix with a glowing halo on soft grey, spaced-out 'IGNITE' typography, ruby ring product cards, orange pre-order CTA. For jewelry, gemstones, fashion and premium e-commerce.  
Page `4:61` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-61)

**55 — Mythos00**  
Ethereal editorial hero. Glass human bust filled with pink blossoms on midnight blue, mixed italic serif 'THE MYTH OF THE CARCASS' typography, numbered chapters. For art, fashion, beauty, publishing and auteur brands.  
Page `4:62` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-62)

**56 — Carousel** _(static)_  
AI SaaS hero with a curved 3D image carousel. Dark navy palette, clean sans headline 'AI tools to take you anywhere', futuristic portrait cards, stats row. For AI tools, SaaS, creative platforms and tech startups.  
Page `4:63` · [open in Figma](https://www.figma.com/design/MGcXkQsAcm5zyk2NpepuAQ/?node-id=4-63)

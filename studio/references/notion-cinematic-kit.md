# 🎬 Kit: Cinematic Websites with AI

Source: https://app.notion.com/p/Kit-Cinematic-Websites-with-AI-392b0fd1c01081fb8ad6c388b81ce4b3

> 🎬 The creative material to build cinematic websites with AI. 85+ ready-made prompts (site, image, copy) + the formula to create your own. Paste it into the tool and generate.

**Cinematic DNA** (in every prompt): dark/near-black · dramatic light · depth and parallax · giant serif · film grain · Awwwards "Site of the Day" level.

**Compatible with:** v0 · Lovable · Bolt · Cursor · Claude Code · Base44

🖥️ SITE prompts

> ✅ How to use: paste the prompt into the tool → generate 3–4 and pick the best → change the palette to match the brand → in code tools (Cursor/Claude Code) the stack is already included in the prompt.

---

## 🖥️ SITE prompts

> The site prompts are in English on purpose — AI tools (v0, Cursor, Claude Code…) perform better that way. Only change the `[BRACKETS]` and the palette.

### 1. SaaS / Digital Product

**1.1 — "Site of the Day" hero** — Best for: SaaS, app, tool.

```
Create a cinematic dark-mode SaaS hero, full viewport. Near-black background (#0a0a0b) with a slow-drifting gradient mesh (amber→magenta) behind everything. Oversized serif display headline (clamp 56–120px, tight leading) on the left, thin sans subheadline below, and a single glowing CTA. On the right, a glassmorphic floating product card with soft inner glow and subtle scroll parallax. Add fine film grain, edge vignette, and a slow staggered fade-in on load. Fonts: Inter + Instrument Serif. Framer Motion for entrance + parallax. Make it feel like an Awwwards Site of the Day.
```

💡 swap amber→magenta for blue→cyan for a "cold tech" vibe.

**1.2 — Scroll-driven SaaS landing (full)** — Best for: an entire SaaS page.

```
Build a full cinematic SaaS landing in Next.js + Tailwind + Framer Motion + Lenis smooth scroll. Dark, dramatic, Apple × Awwwards. Sections: (1) hero with looping muted background video + gradient scrim + staggered word-reveal headline; (2) scroll-pinned feature showcase with horizontal parallax cards; (3) bento grid of product shots with hover glow; (4) glassmorphic pricing; (5) cinematic footer with giant CTA + film grain. Reduced-motion fallback, fully responsive, semantic HTML, swappable placeholder assets.
```

💡 ask for "swappable placeholder assets" to change images without touching the code.

**1.3 — SaaS with a 3D product** — Best for: hardware, gadget, an app with an "object".

```
Cinematic SaaS hero with an interactive 3D product centerpiece (Spline or React-Three-Fiber). Black stage, single dramatic key light on the object, soft floor reflection. Thin uppercase headline with wide tracking orbiting the object. Cursor-reactive parallax on the 3D model, drifting particle dust, floating glass nav on top. Weightless, premium, cinematic.
```

💡 no 3D? swap it for a product PNG with a dramatic shadow + mouse tilt.

**1.4 — Dashboard reveal (bento + motion)** — Best for: data-driven SaaS, analytics, fintech.

```
Design a cinematic "dashboard reveal" section. The dashboard UI starts blurred and tilted in 3D perspective, then snaps sharp and upright on scroll-into-view. Surround it with floating bento cards (metrics, charts, avatars) animating in with staggered springs. Dark theme, neon data accents, glass surfaces, ambient glow under the dashboard. Framer Motion scroll-linked animation.
```

💡 ask for the numbers/labels as variables so you can edit them without code.

**1.5 — Cinematic pricing + CTA** — Best for: closing the SaaS page.

```
Create a cinematic pricing + final CTA section on near-black. Three glassmorphic plan cards, the middle one elevated with an amber glow halo and a "Most popular" ribbon; on hover it lifts with soft shadow and intensified glow. Below, a full-width cinematic CTA band with oversized serif "Start building", animated gradient underline, film grain, and a magnetic button. Framer Motion micro-interactions.
```

💡 magnetic button = a button that "pulls" the cursor; ask for it explicitly.

### 2. Portfolio / Personal Brand

**2.1 — Editorial portfolio hero** — Best for: designer, photographer, creative.

```
Create a cinematic editorial portfolio hero, full viewport, dark. A single large duotone hero image (or muted portrait) bleeding to the edges, with an oversized serif name headline overlapping it and thin uppercase role/tagline. Fine grain, slow ken-burns zoom on the image, cursor-follow spotlight. Minimal glass nav. Fonts: a strong serif + mono accents. Framer Motion entrance. Awwwards editorial energy.
```

💡 the duotone gives cohesion even if the photos are random — ask for the duotone palette.

**2.2 — Scroll portfolio with projects** — Best for: showing work/cases.

```
Build a cinematic portfolio in Next.js + Tailwind + Framer Motion + Lenis. Dark, editorial. Sections: (1) name hero with kinetic type; (2) horizontal-scroll project gallery, each project a full-bleed image that scales on hover with a thin serif title reveal; (3) a "selected work" list with row hover that previews the project image following the cursor; (4) footer with big email CTA + grain. Smooth scroll, reduced-motion fallback, responsive.
```

💡 the "hover preview following the cursor" is the effect that makes it look like a top studio.

**2.3 — Personal brand / creator (kinetic)** — Best for: creator, consultant, personal brand.

```
Cinematic personal-brand hero, near-black, minimal. Giant kinetic serif name that subtly reacts to mouse movement (letters shift/skew), a one-line manifesto below in thin sans, and a single glowing CTA. Grain overlay, soft moving vignette, one small looping video thumbnail floating with parallax. Bold, confident, gallery-like.
```

💡 ask for "kinetic type reacting to cursor" — it's the premium detail.

**2.4 — Case study / storytelling** — Best for: a single project/case page.

```
Design a cinematic case-study page, dark editorial. Sticky large project title on the left while imagery scrolls on the right (sticky-scroll layout). Big pull-quotes in serif between image blocks, subtle parallax on each image, a results section with animated number counters, and a "next project" full-bleed CTA at the end. Film grain, generous whitespace, Framer Motion scroll animations.
```

💡 the sticky layout (fixed title + scrolling images) is what gives it magazine feel.

**2.5 — Cinematic about / contact** — Best for: closing the portfolio.

```
Create a cinematic about + contact section, near-black. Left: a duotone portrait with grain and a slow zoom. Right: a short serif bio and an oversized "Let's work together" headline that becomes a magnetic email button. Floating social links with hover glow, subtle particle background. Elegant, personal, premium.
```

💡 turn the "Let's work together" into the email button itself (more elegant).

### 3. Launch / Product Drop

**3.1 — Launch hero with countdown** — Best for: drop, launch, dated event.

```
Create a cinematic product-launch hero, near-black, high tension. Oversized serif headline "The wait is over" with a glowing animated countdown timer (days/hours/min/sec) below. A single hero product shot floating center with a rim light and slow rotation. Radial spotlight, heavy film grain, pulsing CTA "Get notified". Fonts: bold sans + serif accent. Framer Motion for the timer and entrance. Hype, premium, Awwwards.
```

💡 ask for the timer with a date configurable via variable.

**3.2 — Drop page (hype/streetwear)** — Best for: streetwear, sneaker, limited edition.

```
Build a full cinematic "drop" landing (Next + Tailwind + Framer + Lenis), dark and bold. Sections: (1) full-bleed hero with the product on a dramatic set, giant kinetic headline, "Limited drop" badge; (2) horizontal marquee of product angles; (3) sticky product showcase with scroll-zoom; (4) "sold out risk" scarcity band with counter; (5) email-capture footer with grain. Aggressive, streetwear energy, responsive.
```

💡 the marquee (running text/images) gives the hype vibe instantly.

**3.3 — Waitlist / coming soon** — Best for: pre-launch, list capture.

```
Design a cinematic "coming soon" / waitlist page, near-black minimal. Center: a giant serif brand name with a slow-shimmer gradient, a one-line teaser, and a sleek email input with a glowing "Join the waitlist" button. Ambient particle field drifting, subtle moving gradient background, film grain. Success state animates the button into a checkmark. Elegant, mysterious.
```

💡 ask for the "success state" (turns into a check) — it looks like a real product.

**3.4 — New version/feature reveal** — Best for: v2, new feature, update.

```
Create a cinematic "new version reveal" hero. Dark stage, a "v2.0" tag glowing, oversized headline, and the product UI emerging from darkness with a light sweep as it appears. Below, 3 glass feature cards animating in with staggered springs. Neon accent, film grain, scroll-triggered light sweep. Framer Motion. Feels like a keynote reveal.
```

💡 the "light sweep" across the product is the keynote effect.

**3.5 — Pre-sale / early access** — Best for: pre-sale with an offer.

```
Design a cinematic pre-order / early-access section, near-black. Left: product hero with dramatic lighting and reflection. Right: an offer card in glass with strikethrough original price, bold early-access price, a scarcity line ("first 100 only"), and a magnetic "Secure my spot" button with amber glow. Film grain, subtle confetti-free elegance. Framer Motion micro-interactions.
```

💡 price anchor (strikethrough → offer) + real scarcity converts.

### 4. Agency / Studio

**4.1 — Agency hero (statement)** — Best for: agency, creative studio.

```
Create a cinematic agency hero, near-black, bold and confident. A giant kinetic serif statement ("We build brands that move") filling the screen, a thin one-line positioning below, and a small glowing "See our work" CTA. Background: a subtle looping abstract motion or gradient. Film grain, cursor-follow highlight on the headline. Awwwards studio energy.
```

💡 a giant statement headline > a list of services in the hero.

**4.2 — Full agency site** — Best for: an entire agency site.

```
Build a full cinematic agency site (Next + Tailwind + Framer + Lenis), dark editorial. Sections: (1) statement hero with kinetic type; (2) selected work as full-bleed case tiles with hover scale + serif titles; (3) services as a scroll-pinned list that highlights row by row; (4) team/manifesto with grain; (5) big "Let's talk" CTA footer. Smooth scroll, reduced-motion fallback, responsive.
```

💡 services as a scroll-pinned list (highlighting row by row) looks like a top studio.

**4.3 — Showreel hero (background video)** — Best for: production house, motion, studio.

```
Cinematic studio showreel hero: full-viewport muted looping background video (dark, high-contrast), a heavy vignette + grain over it, oversized serif studio name centered, and a circular "Play reel" button that expands into a fullscreen video on click. Minimal glass nav. Slow, immersive, premium.
```

💡 a circular "Play reel" button that opens fullscreen is a production-house classic.

**4.4 — Cinematic services grid** — Best for: services section.

```
Design a cinematic services section, near-black. A bento grid of service cards in glass, each with a subtle icon, a serif title, and a one-line description; on hover the card lifts, glows, and reveals a short detail. One larger "flagship service" card spanning two columns with a moving gradient. Film grain, staggered entrance. Framer Motion.
```

💡 bento (cards of different sizes) is richer than a uniform grid.

**4.5 — Contact / pitch CTA** — Best for: closing an agency site.

```
Create a cinematic contact/pitch section, near-black. An oversized serif "Ready to build something unforgettable?" that becomes a magnetic email button, surrounded by floating client logos with hover glow and a subtle particle field. Grain, ambient gradient. Elegant and bold.
```

💡 turn the headline into the magnetic button itself.

### 5. E-commerce / Store

**5.1 — Single-product hero (premium)** — Best for: one hero product (perfume, gadget, sneaker).

```
Create a cinematic single-product e-commerce hero, near-black. The product floating center under a dramatic key light with soft floor reflection, oversized serif product name overlapping it, a short poetic tagline, price, and a glowing "Add to cart" button. Cursor-reactive parallax on the product, film grain, slow ambient motion. Luxury, weightless.
```

💡 product floating + floor reflection = a luxury campaign look.

**5.2 — E-commerce landing (collection)** — Best for: a full store/collection.

```
Build a full cinematic e-commerce landing (Next + Tailwind + Framer + Lenis), dark premium. Sections: (1) collection hero with looping video + serif headline; (2) product grid with hover that lifts the card and swaps to a second image; (3) "shop the look" editorial block; (4) social proof marquee; (5) footer with newsletter + grain. Fast, responsive, swappable product data.
```

💡 the hover that swaps to the product's 2nd photo is a premium-store standard.

**5.3 — Cinematic product page (PDP)** — Best for: the product detail page.

```
Design a cinematic product detail page, dark editorial. Left: sticky product gallery with zoom-on-hover and thumbnail switcher; right: serif product name, price, variant selector, and a magnetic "Add to cart". Below: a full-bleed lifestyle image, specs in glass cards, and a "you may also like" carousel. Film grain, smooth transitions. Framer Motion.
```

💡 a sticky gallery (stays fixed while you scroll the details) is premium UX.

**5.4 — Lookbook / editorial collection** — Best for: fashion, lookbook, visual catalog.

```
Create a cinematic lookbook page, dark and editorial. Full-bleed alternating image blocks with parallax, oversized serif season title, thin captions, and subtle horizontal-scroll sequences between sections. Each look has a discreet "shop this" hover tag. Grain, slow ken-burns on images, magazine layout. Framer Motion.
```

💡 alternate full-bleed image with breathing room — it becomes a fashion magazine.

**5.5 — "Shop the look" / upsell** — Best for: raising the ticket / cross-sell.

```
Design a cinematic "shop the look" / bundle section, near-black. One large lifestyle image with interactive hotspots; clicking a hotspot reveals the product in a glass card with price and add-to-cart. Below, a "complete the set" bundle with a combined price and savings badge, and a magnetic CTA. Film grain, smooth reveals. Framer Motion.
```

💡 hotspots on the image + a bundle with "savings" raise the ticket.

### 6. App / Mobile Showcase

**6.1 — App hero (floating mockup)** — Best for: mobile app, fintech, product on the phone.

```
Create a cinematic mobile-app hero, near-black. A floating iPhone mockup center-right showing the app UI, tilted in 3D with a soft glow and floating glass notification cards around it. Oversized serif headline on the left, thin subheadline, and two CTAs (App Store / Google Play badges). Cursor-reactive parallax on the phone, film grain, slow ambient gradient. Premium, weightless.
```

💡 ask for the notification cards floating with parallax — they bring the mockup to life.

**6.2 — Full app landing** — Best for: the app's entire page.

```
Build a full cinematic app landing (Next + Tailwind + Framer + Lenis), dark. Sections: (1) hero with floating phone + glow; (2) scroll-pinned feature section where the phone screen SWAPS as you scroll through features; (3) bento of benefits; (4) testimonials marquee; (5) download CTA with store badges + grain. Reduced-motion fallback, responsive, swappable screenshots.
```

💡 the phone screen changing as you scroll (scroll-pinned) is the premium app effect.

**6.3 — Download / store hero** — Best for: focus on installing the app.

```
Design a cinematic download-focused app hero, near-black. Centered giant serif value prop, a phone mockup with a glowing screen, star-rating + "50k+ downloads" social proof, and large App Store / Google Play buttons with hover glow. A subtle QR code that pulses. Film grain, ambient motion. Conversion-focused, premium.
```

💡 QR + social proof (rating/downloads) raise the install rate.

**6.4 — Feature scroll (screens changing)** — Best for: showing several app features.

```
Create a cinematic scroll-driven feature showcase for a mobile app. A sticky phone in the center; as the user scrolls, the phone screen transitions between feature screenshots with smooth crossfades, and the accompanying serif headline + description on the side change in sync. Neon accents, film grain, spring transitions. Framer Motion scroll-linked.
```

💡 sync the side text with the screen change — it looks like an Apple keynote.

**6.5 — Onboarding / how it works** — Best for: explaining the app in steps.

```
Design a cinematic "how it works" section for an app, near-black. Three numbered steps in glass cards, each with a mini phone screenshot, a serif title, and a short line; a glowing connector line animates between them on scroll. Ambient gradient, film grain, staggered entrance. Framer Motion.
```

💡 the line connecting the steps (animated on scroll) guides the eye.

### 7. Event / Conference

**7.1 — Event hero** — Best for: conference, workshop, show.

```
Create a cinematic event hero, near-black, high energy. Oversized serif event name filling the screen, date + location in thin uppercase below, an animated glow behind the title, and a bold "Get tickets" CTA. Optional looping background video of a crowd/venue with heavy vignette. Film grain, kinetic entrance. Awwwards event energy.
```

💡 date + location under the name (large) = event hierarchy.

**7.2 — Full event landing** — Best for: the event's entire page.

```
Build a full cinematic event landing (Next + Tailwind + Framer + Lenis), dark. Sections: (1) hero with event name + countdown; (2) speakers grid with hover reveal; (3) schedule/agenda as a timeline; (4) ticket tiers in glass cards with a highlighted one; (5) venue + FAQ; (6) final "Secure your seat" CTA + grain. Responsive, smooth scroll.
```

💡 a vertical timeline agenda looks organized and gives a big-event feel.

**7.3 — Speakers grid** — Best for: highlighting speakers.

```
Design a cinematic speakers section, near-black. A grid of speaker cards with duotone portraits; on hover the portrait turns full-color, lifts, and reveals name + role + talk title. One "keynote" card larger with a glow. Film grain, staggered entrance. Framer Motion.
```

💡 duotone → color on hover gives cohesion even if the photos vary.

**7.4 — Tickets / tiers** — Best for: selling tickets.

```
Create a cinematic ticket-tiers section, near-black. Three glass ticket cards (Early / Standard / VIP), the VIP elevated with an amber glow halo and "Best value" ribbon; each with perks list and a magnetic "Buy ticket" button. A scarcity line ("Early bird ends soon"). Film grain, hover lift. Framer Motion.
```

💡 scarcity (early bird running out) + a highlighted tier pushes toward VIP.

**7.5 — Countdown + registration** — Best for: closing with urgency.

```
Design a cinematic countdown + register CTA band, near-black. A large glowing countdown to the event date, an oversized serif "Don't miss it", and a magnetic "Register now" button. Floating sponsor logos, ambient particles, film grain. Framer Motion timer.
```

💡 a big countdown at the end reinforces urgency before the CTA.

### 8. Luxury / Fashion / Jewelry

**8.1 — Fashion editorial hero** — Best for: fashion, clothing brand, campaign.

```
Create a cinematic fashion editorial hero, dark and moody. A full-bleed campaign image (model/garment) bleeding to the edges with heavy grain, an oversized serif brand/campaign name overlapping it, thin uppercase season tag, and a discreet "Explore collection" CTA. Slow ken-burns on the image, cursor-follow light. Vogue-meets-Awwwards energy.
```

💡 full-bleed image + giant serif on top = a magazine cover.

**8.2 — Luxury brand landing** — Best for: a full premium brand.

```
Build a full cinematic luxury brand landing (Next + Tailwind + Framer + Lenis), dark editorial. Sections: (1) campaign hero full-bleed; (2) collection grid with elegant hover zoom; (3) brand story with sticky imagery + serif pull-quotes; (4) craftsmanship detail block with macro shots; (5) boutique/CTA footer + grain. Generous whitespace, slow motion, responsive.
```

💡 lots of breathing room + slow motion = perception of luxury (rushing is the opposite of luxury).

**8.3 — Cinematic jewelry/watch product** — Best for: jewelry, watchmaking, premium item.

```
Design a cinematic jewelry/watch product hero, near-black. The piece floating center under a single dramatic key light with sparkle highlights and soft reflection, macro-level detail, oversized serif name, poetic tagline, price, and a subtle "Acquire" button. Cursor-reactive light glint on the metal, film grain, slow rotation. Ultra-premium, weightless.
```

💡 the "glint" (cursor-reactive shine) on the metal sells the luxury.

**8.4 — Editorial collection / campaign** — Best for: a collection launch.

```
Create a cinematic collection/campaign page, dark editorial. Alternating full-bleed campaign images with parallax, oversized serif collection name, thin poetic captions, and horizontal-scroll sequences between chapters. Discreet "shop the piece" hover tags. Grain, ken-burns, magazine pacing. Framer Motion.
```

💡 treat it as "chapters" (sections with breathing room) — campaign narrative.

**8.5 — Brand story / boutique** — Best for: about / brand heritage.

```
Design a cinematic brand-story section, dark and elegant. A sticky serif chapter title on the left while archival/craft imagery scrolls on the right, large pull-quotes about heritage, an animated "since 19XX" mark, and a boutique-locator CTA at the end. Film grain, slow reveals, generous whitespace. Framer Motion.
```

💡 "since 19XX" + heritage storytelling adds perceived value.

---

## 🖼️ IMAGE prompts

> 🎨 Compatible with: Midjourney · Flux · GPT-4o/DALL·E · Sora (frames) · Leonardo · Ideogram. In Midjourney/Flux paste it with the parameters (--ar etc.). In GPT/DALL·E paste only the descriptive part and ask for the ratio in text. Generate in high resolution and in the slot's ratio (hero = 16:9 or 21:9; card = 4:5).

### 1. Hero Backgrounds (full screen)

**1.1 — Cinematic gradient mesh** — Best for: SaaS/tech hero background.

```
Abstract cinematic gradient mesh background, near-black base (#0a0a0b) with slow-flowing waves of deep amber and magenta light bleeding through darkness, soft volumetric glow, subtle film grain, heavy negative space in the center for text, moody and premium, minimal, high detail --ar 16:9 --style raw
```

💡 swap "amber and magenta" for "electric blue and cyan" (cold tech) or "emerald and gold" (luxury).

**1.2 — Fog and volumetric light** — Best for: atmospheric hero, premium brand.

```
Cinematic dark scene, thick atmospheric fog drifting through a single dramatic beam of warm light, deep shadows, dust particles floating in the light, near-black background, moody, mysterious, film still aesthetic, lots of empty dark space for a headline, grain --ar 21:9 --style raw
```

💡 the `--ar 21:9` (ultra-wide) screams "cinema" — perfect for a full-screen hero.

**1.3 — Silk / fabric waves** — Best for: an elegant background for fashion, beauty, luxury.

```
Flowing dark silk fabric waves in slow motion, deep charcoal and obsidian tones with subtle iridescent sheen catching a soft rim light, macro cinematic detail, elegant, sensual, near-black, film grain, abstract luxury background --ar 16:9 --style raw
```

💡 excellent with a single accent color (e.g. "with a single thread of gold light").

**1.4 — Dramatic sky / cosmos** — Best for: launch, vision of the future.

```
Cinematic dark sky at the edge of night, deep indigo and black with a faint aurora glow on the horizon, distant stars, subtle clouds catching the last light, vast and epic, moody, minimal, empty space for text, atmospheric grain --ar 16:9 --style raw
```

💡 "the last light" creates that dramatic gradient at the foot of the sky.

**1.5 — Dark liquid texture** — Best for: an abstract app/tech background.

```
Macro shot of dark liquid metal / oil swirling slowly, black and deep blue with metallic reflections and thin highlights of light dancing on the surface, cinematic, high detail, abstract, moody, premium background --ar 16:9 --style raw
```

💡 blur it a bit when using it as a background (CSS blur) so the text can breathe.

### 2. Product on set (hero shots)

**2.1 — Product on the dark stage** — Best for: gadget, cosmetic, bottle, object.

```
A single [PRODUCT] centered on a dark reflective stage, one dramatic key light from above creating soft falloff into black, subtle floor reflection, floating dust particles, cinematic product photography, moody, premium, shallow depth of field, film grain --ar 4:5 --style raw
```

💡 swap `[PRODUCT]` for yours (e.g. "a matte black perfume bottle"). `--ar 4:5` is ideal for a vertical card.

**2.2 — Product floating with a splash** — Best for: drink, skincare, tech.

```
[PRODUCT] floating in mid-air against a near-black background, dynamic splash of liquid / powder frozen around it, dramatic side lighting, water droplets, hyper-detailed, cinematic commercial photography, energetic yet premium, grain --ar 4:5 --style raw
```

💡 "frozen splash" freezes the motion — gives an expensive-commercial feel.

**2.3 — Product macro / detail** — Best for: watch, jewel, texture.

```
Extreme macro close-up of [PRODUCT], razor-sharp detail on texture and material, dramatic raking light revealing every surface, deep black background, bokeh, cinematic, luxurious, tactile, film grain --ar 16:9 --style raw
```

💡 macro + raking light shows the texture — it conveys quality.

**2.4 — Product in a dark lifestyle setting** — Best for: context of use, aspirational.

```
[PRODUCT] resting on a dark minimalist surface in a moody interior, warm practical light source out of frame, deep shadows, cinematic lifestyle photography, cozy yet premium, shallow focus, atmospheric haze, grain --ar 16:9 --style raw
```

💡 "practical light out of frame" (a lamp/window out of shot) creates believable light.

### 3. Abstract / 3D render

**3.1 — 3D glass shape** — Best for: tech/SaaS hero, a floating element.

```
Abstract 3D glass shape floating in dark space, translucent frosted material with chromatic dispersion (subtle rainbow refraction) on the edges, soft studio lighting, iridescent, weightless, octane render, cinematic, near-black background, high detail --ar 16:9 --style raw
```

💡 "chromatic dispersion" is the rainbow on the glass edges — the premium touch of the moment.

**3.2 — Liquid metal / chrome** — Best for: a bold brand, fashion, futuristic tech.

```
Abstract liquid chrome blob morphing in dark space, mirror-polished metallic surface reflecting a moody environment, dramatic rim lighting, smooth organic form, futuristic, octane render, cinematic, black background --ar 16:9 --style raw
```

💡 chrome reflects the environment — ask for "reflecting amber light" so it matches your palette.

**3.3 — Particles / data dust** — Best for: AI, data, tech.

```
Millions of glowing particles forming an abstract flowing shape in dark space, deep blue and cyan light, depth of field with bokeh particles in foreground, sense of intelligence and motion, cinematic, near-black, high detail --ar 16:9 --style raw
```

💡 perfect for an AI site — it conveys "processing" without the robot cliché.

**3.4 — Topographic ripple / lines** — Best for: subtle background, data section.

```
Abstract topographic wireframe landscape made of thin glowing lines, dark background, subtle gradient from deep purple to black, elegant depth and perspective, minimal, futuristic, cinematic, grain --ar 16:9 --style raw
```

💡 ideal as a section background (not the hero) — subtle, doesn't fight the text.

### 4. Textures & Overlays

**4.1 — Film grain / film texture** — Best for: an overlay on top of everything.

```
Fine analog film grain texture, monochrome, subtle, high resolution, seamless, dark, authentic 35mm photographic noise --ar 16:9
```

💡 use it as a layer with `mix-blend-mode: overlay` and low opacity (~8%).

**4.2 — Light leak** — Best for: a warm overlay in the hero corner.

```
Cinematic light leak overlay, warm amber and orange glow bleeding from one corner into black, organic lens flare, soft, analog film aesthetic, high resolution --ar 16:9
```

💡 put it in the hero corner with `blend: screen` — it adds warmth and life.

**4.3 — Bokeh / defocused lights** — Best for: a section background, depth.

```
Defocused bokeh lights on a near-black background, warm golden circles of light out of focus, cinematic depth, dreamy, atmospheric, minimal, grain --ar 16:9 --style raw
```

💡 a good background for testimonials/CTA (it already comes defocused).

**4.4 — Material texture (dark concrete/marble)** — Best for: a tactile background, luxury.

```
Dark textured surface, black marble with subtle grey veining / raw concrete, dramatic side light grazing the surface revealing texture, moody, premium, seamless, high detail macro --ar 16:9 --style raw
```

💡 real material gives "weight" and sophistication.

### 5. Human / Editorial

**5.1 — Dramatic cinematic portrait** — Best for: personal brand, about, team, fashion.

```
Cinematic editorial portrait, subject half in shadow with a single dramatic warm key light (Rembrandt lighting), deep black background, intense mood, shallow depth of field, film grain, shot on 85mm, magazine cover quality --ar 4:5 --style raw
```

💡 "Rembrandt lighting" = that classic half-face light. Always ask for it in a portrait.

**5.2 — Silhouette / backlight** — Best for: aspirational, mysterious, storytelling.

```
Cinematic silhouette of a person against a glowing dark background, strong backlight creating a rim of light around the figure, atmospheric haze, moody, minimal, mysterious, film still, lots of negative space --ar 16:9 --style raw
```

💡 a silhouette avoids the "generic AI face" and looks elegant.

**5.3 — Hands / detail in action** — Best for: craftsmanship, product in use, "handmade".

```
Cinematic close-up of hands [ACTION: holding a product / crafting / typing], dramatic warm side light, dark background, shallow focus, tactile detail, moody, authentic, film grain --ar 16:9 --style raw
```

💡 hands in action tell a story better than a face — and they're easier to nail in AI.

**5.4 — Crowd / event with atmosphere** — Best for: event, show, community.

```
Cinematic wide shot of a crowd at a night event, stage lights and haze cutting through darkness, silhouettes with glowing rim light, energetic yet moody, bokeh lights, film grain, epic atmosphere --ar 21:9 --style raw
```

💡 haze (smoke) + stage light = an expensive-event atmosphere instantly.

### 6. Environment / Landscape

**6.1 — Epic landscape at blue hour** — Best for: travel, outdoor, aspirational.

```
Epic cinematic landscape at blue hour, dramatic mountains / coastline silhouetted against a deep moody sky, faint warm glow on the horizon, atmospheric fog in the valleys, vast and quiet, film still, grain --ar 21:9 --style raw
```

💡 "blue hour" (not golden hour) keeps everything dark and cinematic.

**6.2 — Dramatic architectural interior** — Best for: real estate, design, architecture.

```
Cinematic architectural interior, minimalist dark space with a single shaft of light entering through a large window, dramatic shadows, concrete and glass, moody, empty, elegant, atmospheric haze, film grain --ar 16:9 --style raw
```

💡 empty space + a shaft of light = sophistication and room for the text.

**6.3 — Urban street at night** — Best for: streetwear, urban brand, music.

```
Cinematic empty city street at night in the rain, neon signs reflecting on wet asphalt, moody teal and orange color grade, atmospheric fog, dramatic, Blade Runner aesthetic, film grain --ar 16:9 --style raw
```

💡 "teal and orange color grade" is the cinema palette par excellence.

---

## ✍️ COPY prompts

> 🗣️ Compatible with: ChatGPT · Claude · Gemini. Paste the prompt, change the [BRACKET] for your context, and ask for 5–10 options. Golden rule: talk about the customer's result, not your feature.

### 1. Headlines

**1.1 — Result headline** — Best for: the hero of any product/service.

```
You are a premium direct-response copywriter. My product is [PRODUCT] and it helps [AUDIENCE] to [DESIRED RESULT]. Write 10 short headlines (max 8 words) for the hero of a cinematic site — confident, direct tone, no clichés, no "revolutionize". Each one focused on the result or the transformation. English.
```

💡 ask for "max 8 words" — a short hero headline hits harder and fits the giant serif.

**1.2 — Provocative / tension headline** — Best for: grabbing attention, breaking an objection.

```
Write 10 provocative headlines for my site's hero about [PRODUCT/AUDIENCE]. Each must create tension, contradict common sense, or point at the pain of [PROBLEM] — so the person stops to read. Short, sharp, without offending. English.
```

💡 a tension headline + a subheadline that resolves it = a combo that stops the scroll.

**1.3 — "New category" headline** — Best for: positioning yourself as unique.

```
My product is [PRODUCT]. I want to position myself as my own category, not "just another [COMPETITOR]". Write 8 headlines that name/hint at a new category or a new way of doing [ACTIVITY]. Confident, premium, English.
```

💡 "the most X way to Y" is a category structure that always works.

### 2. Subheadlines

**2.1 — Subheadline that explains in 1 line** — Best for: below the headline in the hero.

```
My headline is "[HEADLINE]". Write 8 subheadlines of 1–2 lines that explain, in simple language, WHAT [PRODUCT] is, FOR WHOM, and the main benefit — without repeating the headline's words. Clear, premium tone. English.
```

💡 the subheadline answers "ok, but what is this?" that the headline left hanging.

**2.2 — Subheadline with proof/number** — Best for: giving credibility up top.

```
Write 6 subheadlines for the hero of [PRODUCT] that include a concrete proof: a number, a result, or a milestone (e.g. "used by X", "in Y days"). Use this real data: [YOUR DATA]. Short, confident, English.
```

💡 a specific number ("in 1 day") converts more than something vague ("fast").

### 3. CTAs

**3.1 — Main CTA** — Best for: the hero and pricing button.

```
Write 12 button texts (CTAs) for [PRODUCT]. Short (2–4 words), in first person when it makes sense ("I want my X"), focused on action + benefit, avoiding "Submit" / "Learn more". English.
```

💡 test "Start now" vs "I want [result]" — first person usually wins.

**3.2 — Microcopy under the button** — Best for: killing the last objection at the click.

```
Write 8 short microcopy lines (1 line) to place under the CTA button of [PRODUCT], reducing risk/friction (guarantee, "no card", "instant access"). Adapt to: [YOUR CONTEXT]. English.
```

💡 "instant access" and "guarantee" under the button increase the click.

### 4. Body sections

**4.1 — Features → benefit** — Best for: the "what you get" section.

```
I have these features for [PRODUCT]: [LIST]. Rewrite each as a benefit block: a short title (result for the customer) + 1 supporting sentence. Translate function → transformation. Premium tone, English.
```

💡 paste your raw features — the AI turns "export PDF" into "take your work anywhere".

**4.2 — "How it works" section (3 steps)** — Best for: reducing the sense of complexity.

```
Explain how [PRODUCT] works in exactly 3 simple steps. Each step: an action verb in the title + 1 sentence. Make it feel easy and fast, without lying. English.
```

💡 3 steps is the magic number — it looks simple and complete.

**4.3 — "About / story" section** — Best for: creating connection.

```
Write a short "about" section (100–140 words) for the site of [PRODUCT/BRAND]. Context: [YOUR STORY]. Human and confident tone, starting with a real tension or reason, ending on the mission. No corporate cliché. English.
```

💡 start with the "why it exists" — the story sells more than the description.

**4.4 — Social proof / testimonials** — Best for: the credibility section.

```
Write 6 realistic testimonials for [PRODUCT], each focused on a different benefit and written the way a real person would speak (with a specific detail). Brand [NAME] and [ROLE]. English.
```

💡 ⚠️ use it as a structure/example — **replace it with real testimonials** before publishing.

### 5. Pricing, FAQ and closing

**5.1 — Pricing copy** — Best for: the plans/pricing section.

```
My price is [PRICE] for [PRODUCT]. Write: (1) a section title that anchors value, (2) 3 bullets of what's included (benefit), (3) a sentence that shrinks the price (e.g. "less than a coffee a day"). Confident, English.
```

💡 anchor against something expensive ("less than 1 hour of a designer") before the price.

**5.2 — FAQ that breaks objections** — Best for: frequently asked questions.

```
List the 8 main objections/doubts someone has before buying [PRODUCT] for [AUDIENCE]. For each, write the question the way the customer would ask it + a short, honest, reassuring answer. English.
```

💡 the FAQ isn't a technical doubt — it's an objection in disguise. Treat it as selling.

**5.3 — Final CTA block** — Best for: the last section before the footer.

```
Write the closing block of the [PRODUCT] site: a strong title that restates the main promise, 1 reinforcing line, and a CTA. It should feel like "now is the moment". Short, premium, English.
```

💡 the final CTA repeats the hero's promise — it closes the loop.

### 6. Extras missing from every site

**6.1 — Honest urgency**

```
Write 5 urgency/scarcity lines for [PRODUCT] that are TRUE in my case: [CONTEXT: spots, deadline, bonus, price going up]. Nothing fake. English.
```

💡 real urgency converts; fake urgency burns the brand.

**6.2 — Meta title + description (SEO)**

```
Write 3 options for a meta title (max 60 characters) and meta description (max 155) for the home of [PRODUCT], with the keyword [KEYWORD] and a CTA. English.
```

💡 it's the text that appears in Google — include the benefit + the word they search for.

**6.3 — Delivery/welcome email**

```
Write a short welcome/delivery email for whoever bought [PRODUCT]: thank them, deliver the access [LINK], give the first step to use it, and leave a contact channel. Human and upbeat, no filler. English.
```

💡 a clear first step in the email reduces refunds and support.

> ✅ Copy checklist before publishing: does the headline talk about the result? · is it clear what it is in 5s? · does every button say action+benefit? · is there proof (number/testimonial/guarantee)? · does the FAQ break objections? · did you read it out loud?

---

## 🧬 The Formula — create your own prompts

> 🎯 A prompt bank is great — but the real power is knowing how to build your own. After this section, you generate a cinematic prompt for anything, instantly.

### The SITE formula (save it)

Every cinematic site prompt has **6 blocks**, in this order:

#

#

#

### The cinematic DNA (pick 3–5 and put them in the Style block)
- **Color:** near-black / dark mode (#0a0a0b), 1 single accent color
- **Light:** dramatic lighting, single key light, volumetric glow, rim light
- **Depth:** depth, parallax, shallow depth of field, layers
- **Typography:** oversized serif display, tight leading, thin supporting sans
- **Texture:** film grain, subtle noise, vignette
- **Atmosphere:** haze, fog, dust particles, mood
- **Finish:** glassmorphism, soft shadows, glow, premium

### The 3 levels of tuning
1. **Change the palette** → changes the vibe. `amber→magenta` (creative) · `blue→cyan` (tech) · `emerald→gold` (luxury) · `teal→orange` (cinema).
1. **Change the motion** → changes the feel. "scroll-pinned" (immersive) · "kinetic type" (bold) · "slow ken-burns" (elegant).
1. **Change the reference** → changes the ceiling. "Awwwards" · "Apple product page" · "editorial magazine" · "Blade Runner".

### Example, built in front of you (coffee brand)

> ☕ [What] hero for a premium coffee brand · [Structure] centered serif name, macro photo of the bean in the background, single CTA · [Style] near-black, warm raking light, film grain · [Motion] fade-in + ken-burns · [Stack] Next + Tailwind + Framer · [Ref] Awwwards, coffee magazine.

**Final prompt (30 seconds to build it):**

```
Create a full-viewport cinematic hero for a premium specialty coffee brand. Oversized serif brand name centered, a macro photo of coffee beans as a dark background, single CTA below. Near-black palette, warm raking light grazing the beans, film grain, vignette. Slow fade-in on load and a subtle ken-burns zoom on the photo. Next.js + Tailwind + Framer Motion. Awwwards-grade, editorial coffee-magazine energy.
```

### IMAGE formula (bonus)

`[SUBJECT] + [ACTION/POSE] + [LIGHT] + [ENVIRONMENT/BACKGROUND] + [STYLE] + [RATIO --ar]`

💡 always end with **where the text goes** ("negative space for a headline") and the **ratio** (`--ar 16:9` hero, `4:5` card).

### COPY formula (bonus)

`[ROLE: premium copywriter] + [PRODUCT + AUDIENCE + RESULT] + [WHAT TO WRITE] + [FORMAT/LIMIT] + [TONE] + [LANGUAGE]`

💡 the limit (number of options + length) and the tone are what separate good copy from generic copy.

### The 5 mistakes that ruin a prompt

> ⚠️ Too vague ("make me a pretty site") — give structure and DNA. Too many things in one prompt — one piece at a time. No palette — fix 1 accent and repeat it. No reference — always cite a level ("Awwwards"). Accepting the 1st version — the gold is in the iteration.

> 🏁 Keep just this: What → Structure → DNA → Motion → Stack → Reference. Knowing the formula, the bank is your starting point — and you are the director.

# Site build workflow: choosing the design and the infrastructure

How a client site goes from "we need to redo this" to a chosen design and a chosen stack. Written up from the
Big Ben Furniture build (gobigben.com, October 2026), which is used as the worked example throughout. Use it
alongside `SITE-HOUSE-RULES.md`, and the studio repo's `CLAUDE.md` for the harvest step.

To call it up in a future build, say: **"follow SITE-BUILD-WORKFLOW.md"**.

---

## Part 1. The design

Templates are references, not code. Nothing from a template pack goes into the client's repo.

1. **Read what the client already has.** If the client has its own repo, the research, brand kit, voice and
   compliance notes are there. A brand kit supplies tokens and voice; it is not binding on layout.
2. **Collect references from three places.**
   - Envato Elements, signed in through Playwright. Open the live demos; do not judge from thumbnails.
   - Figma Community.
   - GitHub starters.
3. **Build two or three distinct directions as live previews**, each with a home page and one inner page, at
   `/a`, `/b`, `/c`. Make them different in kind, not three colourways of one layout.
4. **Clint picks one.** Ask who the customer is before polishing: the answer changes what goes at the top of
   the home page.
5. **Archive the directions that lost** in the client repo, and note the references used in the site README.

Big Ben: references were Envato "Archivue" and "GearO", Figma Community "3legant" and "Dreamest", and the
GRIGOLETTO Figma pack. Directions were A cinematic, B warm, C catalog-led. Clint picked C. The audience is
inner-city, lower to middle income households, many with poor credit, so how to pay and what to bring sit
directly under the hero.

## Part 2. The infrastructure

Decide these in order. Each answer narrows the next.

| Question | How to decide | Big Ben |
| --- | --- | --- |
| Is it a store or a catalog? | Can people check out on the current site, and does the client want that? | Catalog. No cart, no prices. |
| Who edits the content? | BlakSheep, or the client's staff, and how often? | BlakSheep for now. |
| Which platform? | Default is Next.js 14 (App Router), TypeScript and Tailwind. Consider Instatic or a hosted CMS only when laypeople edit often. Check that the platform gives per-page meta description, canonical and Open Graph tags before choosing it for a site that already ranks. | Next.js. Instatic lacked per-page meta tags on an earlier build, and gobigben.com ranks first for its main search. |
| Where does content live? | With BlakSheep editing: files in the repo. One JSON file per product, markdown for posts, one file for page titles and descriptions. | 203 product files imported from Shopify, 5 posts, `content/meta.json`. |
| What if it is handed over later? | Do not build an editor now. Write down what a layperson workflow would need. | `website/docs/EDITOR-HANDOVER-LATER.md`. |
| What happens to old addresses? | Every old page is kept 1:1 or gets one 301. No broken internal links. Write a checker and run it before every deploy. | `redirects.mjs` and `scripts/check-links.mjs`. |
| Where does the code live? | In the client's own repo under `website/` when the client has one. The studio repo keeps only a pointer in `new-sites/<domain>/HANDOFF.md`. | `clintsanchez/big-ben-furniture`, private. |
| Where is it hosted? | Railway preview project named `<client>-preview`, connected to the repo so a push redeploys. Closed to search engines until launch. | `big-ben-furniture-preview`, on the branch `website-direction-c`. |
| How is motion done? | Keep it lean: one animation library, CSS for presses and hovers. | GSAP in one component. Framer Motion was removed. |

## Part 3. What follows once both are chosen

1. Build the chosen direction out as the full site.
2. SEO: use the client repo's keyword research. Search Console if we have access; SE Ranking if we do not.
   Benchmark each page against what ranks now, then write titles, descriptions and share cards for every page.
3. Photos: WebP, properly sized, named and alt-texted for search.
4. Run the link and meta checkers. Deploy to the preview.
5. Before launch: client answers to anything marked "Confirm", a check against the Google Business Profile,
   then the domain and the indexing switch. Launch needs Clint's go-ahead and the client's DNS.

## Things Clint has asked for on every build

- The result should look like a $10,000 site, not AI slop.
- Stacked buttons are the same width.
- Never invent contact details, prices or claims. Leave a placeholder and say so.
- Commits, pushes, deploys and client emails happen on his word.

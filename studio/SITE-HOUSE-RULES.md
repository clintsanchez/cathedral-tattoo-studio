# House rules for every client website

The conventions BlakSheep Creative follows on every client site, whichever repo the site lives in.

**The master copy is in the studio repo** (`ultimate-ai-website-studio/SITE-HOUSE-RULES.md`). Each client repo
carries its own copy in `studio/`, imported by that repo's `CLAUDE.md`, so the repo works on its own. Change the
master, then run `scripts/sync-studio-docs.sh` in the studio repo to update every client's copy.

For how a build starts (references, design directions, stack decisions in order), see `SITE-BUILD-WORKFLOW.md`
beside this file. Design references (the Figma template pack, the Notion design guides) are in `references/`
beside it in a client repo, and at the root of the studio repo.

## Where the work lives

- When a client has its own repo, the site is in that repo under `website/`, with its own `Dockerfile.dev` and
  `compose.yaml`. Research, brand, copy and the harvest of the old site live in the same repo. The studio repo keeps
  only a pointer in `new-sites/<domain>/HANDOFF.md`.
- Commits, pushes, deploys and client emails happen on Clint's word, each time.

## Local preview

- Docker Desktop, not colima: start it with `open -a Docker` and wait for `docker info` to answer.
- Each site has its own compose project, image and `container_name`, all named after the site's folder, on its own
  port. The dev file is `Dockerfile.dev`, never `Dockerfile`: Railway would pick up a file called `Dockerfile` and
  run the dev server.
- The Docker VM has about 3.8 GB. With two or more site containers running, a Next.js dev server stalls. Self-host
  fonts with `next/font/local`, and to look at a site rather than edit it, run a built copy as a second compose
  service behind a `preview` profile. A Railway build is a dependable check when local Docker is overloaded.
- Screenshots: sites that reveal on scroll look blank in a full-page shot unless the page is scrolled through first.

## Hosting

- **Deploying a preview is a push.** Commit, then push the working branch: Railway rebuilds on its own when the
  push changes something under `website/`. Then confirm it: `railway deployment list --service web --json` from
  `website/` (run `railway link -p <client>-preview -s web` there once if the CLI says it is not linked) until the
  newest entry shows `SUCCESS` for the pushed commit, and open the preview address. A push that only touches
  files outside `website/` does not redeploy.

- Previews are on Railway: project `<client>-preview`, one service `web`, root directory `/website`, watch path
  `/website/**`, connected to the working branch so a push redeploys. Closed to search engines until launch.
- `railway environment edit --service-config` does not apply on CLI 5.44; set root directory, commands and watch
  path with `railway api` and the `serviceInstanceUpdate` mutation. `railway.json` is not read from a sub-folder.

## Every page

- **Footer bottom bar:** left `© {year} {business name}` (year read in the browser, so it rolls over without a
  redeploy); centre Privacy, Terms, Cookies, Accessibility, Disclaimer, Sitemap; right "Website by" and the white
  BlakSheep Creative logo (`public/brand/blaksheep-creative-logo-white.svg`, 32px tall) linking to
  https://blaksheepcreative.com/ in a new tab. One row on wide screens, stacked and centred on phones.
- **Stacked buttons are the same width,** at every width, not only on phones: a wrapping flex row whose children
  grow (`flex flex-wrap gap-3 max-w-[520px] [&>*]:grow`, buttons `whitespace-nowrap`). Check at 390, 768 and 1024.
- **Photographs** are converted to WebP (`cwebp -q 78 -m 6`, about 2000px on the long edge for full-bleed use),
  named for what they show, and given alt text when they carry meaning.
- **Forms** are native, never an embed or a "preview only" stub: fields in the site's own markup, a honeypot, and
  `NEXT_PUBLIC_FORM_ENDPOINT` set at build time. With no endpoint, or when a send fails, the form opens the
  visitor's email app with the message written out and shows it with a copy button. It never says a message was
  received when it was not. If the site already has one, it is the file that reads `NEXT_PUBLIC_FORM_ENDPOINT`;
the original pattern is in the GitHub repo `clintsanchez/sad-team-six-website` (`components/InterestForm.tsx`).

## Copy

- Never invent contact details, prices or claims. Leave a placeholder and say so.
- Do not let the copy circle the same two or three facts; say each trust message in one or two places and spend the
  rest on the work. Write real search copy, not only search headings. The H1 is the big visible line and leads with
  the locale where the keyword plan supports it.
- The bar is "a $10,000 website, not AI slop". Review each built page section by section, desktop and phone, and fix
  what falls short before showing it.

## Design directions

- Show two or three directions that differ in kind, as routes of one site (`/a`, `/b`, `/c`) on shared content, each
  with a home page and one inner page, a chooser at `/`, and a strip that switches direction on the same page type.
- References come from Envato Elements (signed in through Playwright: Clint signs in himself at
  https://elements.envato.com/sign-in; open the live demos, not the listing pages), Figma Community, the GRIGOLETTO
  Figma pack (`figma-templates-manifest.md`; the Figma MCP can read the BlakSheep copy, file
  `MGcXkQsAcm5zyk2NpepuAQ`) and GitHub. Templates are references, not code.

# Cathedral Tattoo Studio — Content Engine Contract

What `blaksheep-creative-content-generation-engine` needs before monthly
fulfilment starts. **It silently produces wrong output when a field is missing.**

| Field | Value | Status |
|---|---|---|
| CSS class prefix | `cts-` | ✅ assigned 2026-09-04 — renders `cts-cta`, `cts-tldr`, `cts-table` |
| Brand colours | #B99040 primary · #EBC853 bright · #825F2C deep · #0A0A0A ground · #E8E4DC text | ⚠️ interim, raster-sampled at 1242px — needs vector |
| Fonts | _TBD_ — blackletter display + clean sans body, unconfirmed | ❌ |
| Logo files | `01-Brand-Assets/cathedral-tattoo-studio-logo.webp` (1242px) | ⚠️ usable for headless render; vector still needed for favicon/print |
| Phone as tel: | `tel:+12253019527` | ✅ |
| WP author user ID | _TBD_ — no site exists yet | ❌ |
| Brand voice | _TBD_ | ❌ |
| Audience | _TBD_ | ❌ |
| Geography | Denham Springs, LA — ⚠️ address in flux | ⚠️ |
| Asset library paths | `05-Photos/`, `04-Content-Library/` | ✅ |
| Money page IDs | _TBD_ — no site | ❌ |
| Founder identity | Roger Cazares, owner | ✅ |
| Front-facing brand | **Cathedral** — featured images, OG cards and social cards use the Cathedral lockup, never RC | ✅ decided 2026-09-04 |

Universal conventions (no em dashes, banned-word list, ≤4-line paragraphs,
3 CTA modules, 3–6 internal links, no invented stats) live in
`_blaksheep-conventions/CLAUDE.md`.

**Blocked on:** the website. Half this table cannot be filled until the site exists.

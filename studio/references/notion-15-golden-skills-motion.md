# My 15 Golden Skills for Motion

Source: https://app.notion.com/p/My-15-Golden-Skills-for-Motion-3b5b0fd1c01081118f0cd2a9fc92e0cb

> **The 15 skills behind the motion on my websites.** Install once and your coding agent instantly knows how to animate, polish, and ship an interface that feels expensive. This is my exact stack, in the exact order I install it — plus when to fire each one.

**Where they run:** these are **coding-agent skills** — they live in Claude Code / Cursor. The flow is: you design the page → your agent (with this stack loaded) builds, polishes, animates and optimizes it → deploy.

---

### 1) Install once — about 2 minutes

**Step 1 — add the **`/learn`** command** to your agent. Easiest on Claude Code (v1.0.33+):

```
/plugin marketplace add https://agentskill.sh/marketplace.json
/plugin install learn@agentskill-sh
```

Or, works on any agent (Cursor, Copilot, etc.):

```
npx @agentskill.sh/cli@latest setup
```

Then **restart your agent / open a new session.**

**Step 2 — install the 15 skills.** Paste each line in the chat:

```
/learn @affaan-m/make-interfaces-feel-better
/learn @affaan-m/design-system
/learn @affaan-m/motion-foundations
/learn @affaan-m/motion-patterns
/learn @affaan-m/motion-advanced
/learn @affaan-m/seo
/learn @affaan-m/fal-ai-media
/learn @affaan-m/article-writing
/learn @affaan-m/deep-research
/learn @mattnigh/design
/learn @sickn33/design-spells
/learn @sickn33/ui-pattern
/learn @sickn33/ui-review
/learn @wshobson/accessibility-compliance
/learn @wshobson/design-system-patterns
```

> 💡 **Manage them:** `/learn list` (see installed) · `/learn update` (update all) · `/learn remove <slug>`.

> ⚠️ **If a skill won't install — the 4 things that trip people up**

> - `/plugin`** or **`/learn`** "unknown command"** → your Claude Code is older than v1.0.33. Update it (`npm i -g @anthropic-ai/claude-code`), or use the universal installer: `npx @agentskill.sh/cli@latest setup`.

> - **On Cursor / Copilot / other agents** → the `/plugin marketplace` line is Claude-Code-only. Use the `npx` method from Step 1.

> - **"skill not found"** → you skipped Step 1, or the slug is off. It must be the exact `@author/skill-name` — copy the lines above, don't retype them.

> - **Installed, but the agent isn't using it** → open a **new session** so it loads. Skills are read at session start.

> ✅ **Checkpoint:** `/learn list` shows all 15 installed, and in a fresh session your agent picks the right one on its own. Try "apply make-interfaces-feel-better to this section" and watch it fire.

---

### 2) The 15 skills — what each does & when to fire it

#### 🌀 Motion — the core three

| Skill | What it does | Fire it when… |
| --- | --- | --- |
| motion-foundations (affaan-m) | Motion tokens, spring presets, performance rules, device adaptation, accessibility + SSR safety. The base layer. | Always first — every other motion skill depends on it. |
| motion-patterns (affaan-m) | Production-ready animations: buttons, modals, toasts, stagger, page/scroll/layout transitions. | You want ready, tasteful animation for common UI. |
| motion-advanced (affaan-m) | Drag & drop, gestures, text animations, SVG path drawing, imperative sequences. | You need cinematic motion. ⚠️ Requires motion-foundations. |

#### 🎨 Design & polish

| Skill | What it does | Fire it when… |
| --- | --- | --- |
| make-interfaces-feel-better (affaan-m) | The small design-engineering details — spacing, type, borders, shadows, hit areas, states — that compound into a polished UI. | The site works but feels "almost"; you want that premium last 10%. |
| design-spells (sickn33) | Curated micro-interactions and details that add magic and personality. | You want delightful hover/scroll/tap moments. |
| design (mattnigh) | UX/UI specialist — interfaces, wireframes, prototypes, visual communication. | You need design direction before or during a build. |

#### 🧱 Design system & structure

| Skill | What it does | Fire it when… |
| --- | --- | --- |
| design-system (affaan-m) | Generate or audit design systems, check visual consistency, review styling PRs. | Building or sanity-checking your tokens. |
| design-system-patterns (wshobson) | Scalable design systems: tokens, theming infrastructure, component architecture. | Setting up tokens + theme switching + a component library. |
| ui-pattern (sickn33) | Reusable UI patterns — cards, grids, lists, forms, chart wrappers. | You need consistent building blocks fast. |

#### ♿ Quality & accessibility

| Skill | What it does | Fire it when… |
| --- | --- | --- |
| ui-review (sickn33) | Reviews UI code for design-system compliance, accessibility, mobile ergonomics, spacing discipline. | Before shipping — a QA pass on the coded UI. |
| accessibility-compliance (wshobson) | WCAG 2.2 interfaces: ARIA patterns, screen-reader support, inclusive mobile a11y. | Making the site accessible and legally safer for client work. |

#### 🔎 SEO, assets & research

| Skill | What it does | Fire it when… |
| --- | --- | --- |
| seo (affaan-m) | Technical SEO, on-page, structured data, Core Web Vitals, sitemap/robots, keyword mapping. | Making the site fast and findable. |
| article-writing (affaan-m) | Long-form content in a consistent brand voice. | Writing SEO content or landing copy that sounds human. |
| fal-ai-media (affaan-m) | Generate images, video and audio via fal.ai. | You need hero images or video. ⚠️ Needs the fal.ai MCP (paid credits). |
| deep-research (affaan-m) | Multi-source, cited research reports. | Researching a niche or competitor. ⚠️ Needs firecrawl + exa MCPs. |

---

### 3) When to fire them — mapped to the build

| Stage | Skills to reach for |
| --- | --- |
| Design the system | design-system · design-system-patterns · design |
| Build the UI | ui-pattern · make-interfaces-feel-better |
| Add motion | motion-foundations → motion-patterns → motion-advanced |
| Add magic | design-spells |
| QA before ship | ui-review · accessibility-compliance |
| Fast + findable | seo · article-writing |
| Assets & research | fal-ai-media · deep-research |

> 💡 **Pro tip:** you don't call these by name — once installed, your agent fires the right skill automatically when the task matches. But you can nudge it: "use the accessibility-compliance skill on this component."

---

### 4) Dependencies & honest notes
- **motion-advanced** requires **motion-foundations** — install both.
- **fal-ai-media** needs the [**fal.ai**](http://fal.ai/)** MCP** configured plus paid credits.
- **deep-research** needs the **firecrawl** and **exa** MCPs.
- **ui-pattern / ui-review** are tuned to the StyleSeed system — the review and accessibility value is general.

---

### 5) Credits

These are free, community and open-source skills. Install them from the source and support the makers:
- **affaan-m** — motion, design-system, seo, media, content · [agentskill.sh/@affaan-m](http://agentskill.sh/@affaan-m)
- **wshobson** — design-system-patterns, accessibility-compliance · [agentskill.sh/@wshobson](http://agentskill.sh/@wshobson)
- **sickn33** — design-spells, ui-pattern, ui-review · [agentskill.sh/@sickn33](http://agentskill.sh/@sickn33)
- **mattnigh** — design · [agentskill.sh/@mattnigh](http://agentskill.sh/@mattnigh)

All credit to the authors. This page curates the stack and teaches how to install and use it — nothing here is repackaged or resold.

---

### 👋 Support

Built by **Guilherme Grigoletto** — GRIGOLETTO. Support comes directly from me: DM [**@guigrigoletto_**](https://instagram.com/guigrigoletto_) on Instagram or email [**guigrigoletto666@gmail.com**](mailto:guigrigoletto666@gmail.com).

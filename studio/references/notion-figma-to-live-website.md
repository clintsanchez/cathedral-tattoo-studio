# ⚡ Course: From Figma to Live Website — with Claude's MCP

Source: https://app.notion.com/p/Course-From-Figma-to-Live-Website-with-Claude-s-MCP-392b0fd1c01081c1b139d6f30aa3aa67

> 🎯 Take any Figma design and put it online as a professional website, with your own domain — without being a programmer. Claude + the Figma MCP read the design and write the code for you. The path: Figma → (Claude's MCP transcribes it into code) → run locally → GitHub → Vercel → domain.

### What is the "Figma MCP" (in 30 seconds)

MCP is a "bridge" that connects Claude to external tools. The **Figma MCP** lets Claude **see your design** (layout, colors, fonts, spacing) and **write code faithful** to it — instead of you describing everything by hand.

**There are 2 versions — and one works even on free Figma:**

| Version | Address | Figma plan | Recommended |
| --- | --- | --- | --- |
| Remote MCP | mcp.figma.com/mcp | All — even free ✅ | YES |
| Local MCP (desktop) | 127.0.0.1:3845/mcp | Dev/Full seat only (paid) | Only if already paid |

> 👉 In this course we use the remote MCP — it works for everyone.

---

### Module 0 — What you'll need (almost all free)
- **Claude** with Claude Code (terminal) or the extension in VS Code / Cursor
- **Figma account** (any plan, even free)
- **GitHub account** (to store the code) — free
- **Vercel account** (to publish) — free
- (Optional) a **domain** (`yoursite.com`) — ~$10–12 USD/year

> ✅ Create all 4 accounts before you start. Takes 10 minutes.

### Module 1 — Connect the Figma MCP in Claude
1. Open **Claude Code** in the folder where you want the project (or Claude in Cursor/VS Code).
1. Add the **Figma remote MCP** pointing to `https://mcp.figma.com/mcp` — Claude walks you through the login.
1. **Log in to Figma** when prompted (browser authorization).
1. Confirm: ask "can you access my Figma through the MCP?"

> 🆘 Plan B (works almost as well): send screenshots of the design + the frame link. Fidelity drops a bit, but it gets the job done.

### Module 2 — Bring the design into Claude
1. In Figma, open the frame that will become the site → **Copy the link** (Share → Copy link).
1. In Claude, paste it and ask:

```
Use the Figma MCP to get the design context of this frame: read layout, colors, fonts and spacing, and list the section structure before coding.
```
1. Claude uses the `get_design_context` and `get_code` tools to read the design and list the sections. **Review it** before moving on.

> 💡 Pro-tip: ask it to extract the exact colors and fonts ("list the color and typography tokens"). That's what guarantees fidelity.

### Module 3 — Transcribe the design into code
1. Ask for the base:

```
Create a Next.js + Tailwind + Framer Motion project, clean and ready to deploy on Vercel.
```
1. Transcribe **section by section** (not all at once):

```
Using the Figma design you accessed via the MCP, generate the HERO code with fidelity: same colors, fonts, sizes, spacing and positions. Images as placeholders. React + Tailwind component.
```
1. Repeat for features, pricing, testimonials, footer.
1. Ask for the animations:

```
Add a staggered fade-in entrance and subtle parallax on scroll, respecting prefers-reduced-motion.
```

> 💡 Pro-tip: 1 section at a time + review the preview. It's faster to fix than to redo everything.

### Module 4 — Run locally and refine
1. Ask: "how do I run this project locally?" → Claude gives you `npm install` + `npm run dev`.
1. Open `localhost` and compare it **side by side** with Figma.
1. Adjust by chatting: "the title is smaller than in the design", "increase the spacing", "the button color doesn't match".
1. Swap the placeholder images for yours → the `public/` folder.

### Module 5 — Save to GitHub

```
Initialize git and push this project to a new repository on my GitHub.
```

> 📦 Why: GitHub keeps the history (if it breaks, you roll back) and it's where Vercel pulls from to publish.

### Module 6 — Publish on Vercel
1. Go to [**vercel.com**](http://vercel.com/) → **Add New → Project**.
1. **Import** the GitHub repository.
1. Vercel detects Next.js automatically → **Deploy**.
1. In ~1 minute the link appears: `your-project.vercel.app`.

> 🔄 Automatic forever: every change you push to GitHub, Vercel republishes on its own.

### Module 7 — Your own domain (exact values)
1. Buy a domain (Namecheap, GoDaddy or Hostinger for a `.com`).
1. In Vercel: **Project → Settings → Domains → Add** → type `yoursite.com`.
1. Choose **one** way to point it:

| Method | What to do |
| --- | --- |
| A — Nameservers (easy) | Change the nameservers in your domain panel to Vercel's: ns1.vercel-dns.com and ns2.vercel-dns.com. |
| B — DNS records | Root domain → A record = 76.76.21.21 · www → CNAME record = the <unique>.vercel-dns.com value Vercel shows you. |
1. Save and **wait for it to propagate** (minutes to hours). Vercel turns on **automatic HTTPS**.

> ⚠️ Rule: root domain = A record; www = CNAME record. Don't swap them.

### Module 8 — Common problems (and the fix)

| Problem | Fix |
| --- | --- |
| Claude can't access Figma | Reconnect the remote MCP and confirm the login on the correct account. |
| The code errored when running | Paste the error back to Claude: "I got this error, fix it". |
| It came out different from the design | Ask it to re-read the design context and adjust color/font/spacing. |
| The image disappears on deploy | Put it in public/ and use the path /image.webp. |
| The build failed on Vercel | Open the build logs, copy the error, paste it into Claude. |
| The domain won't connect | Check A = 76.76.21.21 (root) and CNAME (www); wait for it to propagate. |

---

### 🔑 The key prompts (copy and use)

> 1️⃣ Read design: Use the Figma MCP to get the design context of this frame; list sections, colors and fonts before coding.

> 2️⃣ Base: Create a Next.js + Tailwind + Framer Motion project ready for Vercel.

> 3️⃣ Transcribe a section: Generate the code for section [X] faithful to Figma: colors, fonts, sizes, spacing and positions.

> 4️⃣ Animate: Add a staggered fade-in and subtle parallax, respecting reduced-motion.

> 5️⃣ Fix: I got this error: [paste]. Fix it.

---

> 🏁 Summary: the Figma MCP reads your design and writes the code → you refine by chatting → GitHub stores it → Vercel publishes → domain (A 76.76.21.21 / CNAME www). From design to live website, without coding.

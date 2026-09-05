# Client Asks — Cathedral Tattoo Studio

**Single source of truth for everything we need from the client.** Last updated
2026-09-05.

The email gets generated *from this file* when we're ready to send. Do not maintain a
second list anywhere else — add new asks here, and record answers here the day they
arrive.

- **Status:** ⬜ not asked · 📨 asked, awaiting reply · ✅ answered · ⛔ blocked on us
- **Owner:** who has to answer. Most are Roger; a few are BSC's own call.
- Every ask names what it unblocks, because that is how the send order gets decided.

## Priority order

**R-02 (address) is answered, and R-01 is no longer a blocker** — there is almost
certainly no vector to send (`06-Reports/logo-source-analysis.md`), so the logo is now
a job we commission rather than an ask we wait on.

That leaves **the phone call (R-13)** as the single most valuable thing Roger can give
us: the only ask that cannot be worked around, and the only one that unlocks a whole
document. After that, **R-03 (ownership language)** and **R-04 (licensing numbers)**,
which between them gate the About page and every trust claim.

---

## A. Blocking — nothing downstream moves without these

| ID | Ask | Status | Unblocks |
|---|---|---|---|
| **R-01** | ~~Vector/source logo files~~ **✅ CLOSED 2026-09-05 by decision (Clint): use the existing logo as it is.** No redraw. Derived digital asset set generated in `01-Brand-Assets/derived/`. ⚠️ Still worth asking opportunistically — a layered source would help if physical production ever needs it | ✅ | Digital surfaces unblocked: favicon, OG card, avatars, header. ⚠️ Embroidery, foil, large signage and any light-background use remain uncovered |
| **R-02** | ~~Which address is the studio?~~ **✅ ANSWERED 2026-09-05 (Clint): 1318 Florida Ave SW, Denham Springs, LA 70726.** Follow-up still open: **when is the move, and to where?** | ✅ / ⬜ | ✅ Unblocked: location page, LocalBusiness schema, citations, GBP, print. ⬜ Still pending: move date and new address |
| **R-03** | **How should we describe your role?** The LLC names Mikayla Paul as sole member. Not a challenge — we need to know what's accurate before anything says "owner" | ⬜ | About page, bios, brand story, recruitment copy. Guardrail 1 |
| **R-04** | **Shop body-art facility permit number, and each artist's operator registration number.** LDH has no public registry, so it can only come from him | ⬜ | Any trust, licensing, sterilisation or compliance claim at all. Guardrail 4 |

## B. The phone call — one 15-minute recorded conversation

**R-13.** Not an email answer. Schedule it. Full question list in
[`brand/story.md`](brand/story.md); the fourteen questions cover the decision, the
work, the customer, and the shop.

| ID | What it produces | Status | Unblocks |
|---|---|---|---|
| **R-13** | Origin story in his own words | ⬜ | `brand/story.md`, the About page, `brand/strategy.md` §01 |
| **R-14** | Vision, mission, values — *stated by him, not authored by us* | ⬜ | `brand/strategy.md` §§02–04. We will not write these on his behalf |
| **R-15** | Growth intent: one chair or a roster? | ⬜ | Site architecture, artist pages, governance in `brand/architecture.md` |
| **R-16** | Why the name Cathedral, and who chose it | ⬜ | Story, and whether the ecclesiastical register is his intent or our read |
| **R-17** | How he wants his previous shop handled, if at all. Our default is not to mention it | ⬜ | Story, About page. ⚠️ Pairs with **B-01** |
| **R-27** | **Who made the logo, with what tool, and is there anything in writing transferring rights?** ⚠️ If it was AI-generated it may not be registrable. **Compounded 2026-09-05:** "Cathedral Tattoo" is also used by shops in UT, AZ and KY, so the *name* would likely be contested too — between them the studio may have little that is exclusively defensible. A flag, not legal advice; worth a lawyer's fifteen minutes before signage spend | ⬜ | Whether anything about the brand can be protected |

## C. Operational — needed before the site can be finished

| ID | Ask | Status | Unblocks |
|---|---|---|---|
| **R-05** | Real weekly hours after the move (GBP publishes only Friday 10–7) | ⬜ | GBP completion, schema `openingHours` |
| **R-06** | Best email address, and how he wants bookings to arrive (form / phone / DM) | ⬜ | Primary CTA, conversion model, content-engine contact fields |
| **R-07** | Service list and shop minimum. **Is piercing actually live**, or is that for the new place? | ⬜ | Service pages, keyword map, GBP services. FB claims piercing; nothing confirms it |
| **R-08** | Unwatermarked originals of the older portfolio photos | ⬜ | 8 files still carrying a competitor watermark (`WATERMARK-REMOVAL.md`) |
| **R-09** | Artist and piercer roster as people are hired | ⬜ | Artist pages, schema `employee`, attribution rule at point of hire |
| **R-10** | ~~Instagram and TikTok handles~~ **✅ PARTLY ANSWERED by research 2026-09-05.** Roger is **`@rc_tattoos` — 6,667 followers, 2,029 posts**. TikTok still unknown (could not be verified; check by hand) | ✅ / ⬜ | Social links, `sameAs` schema. ⚠️ Instagram is **not** missing — it is the business's largest audience, 30× the Facebook page |
| **R-28** | 🚨 **Does the studio own the Instagram handle `@cathedraltattoostudio`?** It exists but is empty: 6 followers, 0 posts, no display name. If it is yours, we need the login. If not, a squatter holds the obvious handle | ⬜ | Social handle strategy, `sameAs` schema. ⚠️ **Time-sensitive** |
| **R-29** | Confirm the TikTok handle by hand — automated checks could not resolve it | ⬜ | Social links |
| **R-11** | Does he want `cathedraltattoostudio.com`? ✅ **Re-verified available 2026-09-05 by whois.** ~$15. **Recommend registering now** — `cathedraltattoo.com` is already taken and multiple out-of-state shops share the name (`brand/naming.md`) | ⬜ | Everything downstream of hosting |
| **R-12** | **Walk-ins: are they live?** Promised for the new location, not confirmed | ⬜ | Hero copy, GBP attributes. Guardrail 6 |

## D. Approvals — he has to see these before they ship

| ID | Ask | Status | Notes |
|---|---|---|---|
| **R-18** | Approve or reject the proposed positioning: *reverence / commissioned work* | ⬜ | `brand/positioning.md`. ⚠️ Gate behind **B-02** first |
| **R-19** | Approve the tagline **"Work worth carrying"** — and say it out loud | ⬜ | `brand/messaging.md`. A tagline he won't say is worthless |
| **R-20** | Who writes as Cathedral? Him in first person, or the shop in third? | ⬜ | `brand/voice.md`. He is already writing most of it himself in DMs |
| **R-21** | Who holds final brand approval at the studio? | ⬜ | `brand/architecture.md` governance. ⚠️ Same conversation as **R-03** |

## E. Audience validation — replaces guesswork with fact

All of `brand/audience.md` is inferred. There are no reviews and no customer language.
These five questions would replace the entire document with something real, and they
are quick.

| ID | Ask | Status |
|---|---|---|
| **R-22** | Last twenty bookings: what the piece was, why they came, how they found you | ⬜ |
| **R-23** | Rough split — memorial/portrait vs. fine line vs. large blackwork | ⬜ |
| **R-24** | How far do people actually drive? | ⬜ |
| **R-25** | What do people ask before they book? | ⬜ |
| **R-26** | Where do enquiries land — Facebook DM, text, phone? | ⬜ |

## F. BSC's own decisions — not Roger's, and some gate the asks above

| ID | Decision | Status | Notes |
|---|---|---|---|
| **B-01** | 🚨 **How to handle Tattootopia.** Roger's prior shop, one mile up the same street, **and a BSC pro-bono client — BSC is advising two competing shops on one street** | ⛔ **Clint** | Gates the story, the About page, and any competitive copy. Live research 2026-09-05: **Roger is no longer listed on Tattootopia's artist page**. Pairs with **R-17** |
| **B-02** | Approve the proposed positioning and tagline **before** they go to Roger | ⛔ **Clint** | Don't send **R-18/R-19** until this clears |
| **B-03** | Assign the blog CTA standard alongside the `cts-` prefix, before post one | ⬜ BSC | `docs/blog-cta-standard.md`. Metal Man needed 15 CTAs rewritten because this was skipped |
| **B-04** | Identify the blackletter face | ⬜ BSC | Partly resolves with **R-01**. Candidates listed in `brand/identity.md` §04 |

---

## Answer log

Record answers here as they arrive, with the date. Then update the status above, and
the document the answer unblocks.

| Date | ID | Answer | Files updated |
|---|---|---|---|
| 2026-09-05 | **R-10** | **Roger is `@rc_tattoos` on Instagram: 6,667 followers, 2,029 posts** — confirmed against the handle burned into our own portfolio watermarks. Roughly 30× the studio Facebook page. Instagram was never missing; it just is not Cathedral's. TikTok unverified | `brand/naming.md` (new), `brand/audience.md`, `brand/architecture.md`, `brand/audit.md` |
| 2026-09-05 | **R-11** | `cathedraltattoostudio.com` **re-verified available** by whois. `cathedraltattoo.com` is taken. Recommend registering immediately | `brand/naming.md` |
| 2026-09-05 | **R-01** | **Closed by decision (Clint): use the logo as it is.** No redraw commissioned. A derived digital set was cut from the existing artwork, with the cross as the favicon glyph since it is the only element legible at 16px. Residual gaps recorded: no embroidery/foil art, no large signage art, no light-background variant, colour tokens stay interim | `01-Brand-Assets/derived/` (new), `01-Brand-Assets/derived/README.md`, `brand/identity.md`, `brand/guidelines.md`, `brand/audit.md` |
| 2026-09-05 | **R-01** | *(prior)* **Superseded by analysis.** The mark is a flat raster with no vector behind it: 70% of ink differs from its own mirror, 129,764 unique colours, illegible below ~64px. No vector will be forthcoming and tracing will not produce one. Downgraded from blocker to assist; a tiered redraw is now the plan | `06-Reports/logo-source-analysis.md` (new), `brand/identity.md`, `brand/guidelines.md`, `brand/audit.md`, `DESIGN.md`, `HANDOFF.md`, `CLAUDE.md` |
| 2026-09-05 | **R-02** | **1318 Florida Ave SW, Denham Springs, LA 70726** is the operating studio. Confirmed by Clint. Tier: stated by BSC account lead, same standing as the Roger-as-owner statement — not a client-signed document. ⚠️ The 2026-08-27 relocation post still stands, so a move may still come; NAP will need updating if it does. Move date and new address remain open | `CLAUDE.md`, `README.md`, `HANDOFF.md`, `00-CLIENT-BRIEF.md`, `06-Reports/records-check.md`, `brand/context.md`, `brand/strategy.md`, `brand/audit.md`, `brand/identity.md`, `brand/messaging.md` |

## Where these came from
`HANDOFF.md` (the original 11), `brand/strategy.md` §§02–04, `brand/story.md`,
`brand/audience.md`, `brand/voice.md`, `brand/architecture.md`,
`brand/positioning.md`, `brand/messaging.md`, `brand/identity.md`, `brand/audit.md`,
`06-Reports/records-check.md`.

A point-in-time email render of asks R-01 through R-15 exists at
`06-Reports/client-asks-email-draft.md`. **This file is the source of truth; that
draft is not.** Regenerate it from here when we're ready to send.

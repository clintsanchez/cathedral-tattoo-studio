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

If Roger only answers two things, it should be **R-01 and R-02**. If he only does one
thing, it should be **the phone call (R-13)** — it is the only ask that cannot be
worked around and the only one that unlocks a whole document.

---

## A. Blocking — nothing downstream moves without these

| ID | Ask | Status | Unblocks |
|---|---|---|---|
| **R-01** | **Vector logo files** (.ai / .eps / .svg, or the original layered file). If he doesn't have them, who made the mark? | ⬜ | The entire identity system: favicon, OG card, print, signage, merch, real colour tokens, and `brand-guidelines` in full |
| **R-02** | **Which address is the studio, and when is the move?** Three conflict: 1318 Florida Ave SW (GBP/FB), 7550 Bluebonnet Blvd Ste 101 Baton Rouge (SoS domicile + a June 22 check-in), and an unnamed "bigger location" | ⬜ | Location page, LocalBusiness schema, citations, GBP, anything printed or signed |
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

## C. Operational — needed before the site can be finished

| ID | Ask | Status | Unblocks |
|---|---|---|---|
| **R-05** | Real weekly hours after the move (GBP publishes only Friday 10–7) | ⬜ | GBP completion, schema `openingHours` |
| **R-06** | Best email address, and how he wants bookings to arrive (form / phone / DM) | ⬜ | Primary CTA, conversion model, content-engine contact fields |
| **R-07** | Service list and shop minimum. **Is piercing actually live**, or is that for the new place? | ⬜ | Service pages, keyword map, GBP services. FB claims piercing; nothing confirms it |
| **R-08** | Unwatermarked originals of the older portfolio photos | ⬜ | 8 files still carrying a competitor watermark (`WATERMARK-REMOVAL.md`) |
| **R-09** | Artist and piercer roster as people are hired | ⬜ | Artist pages, schema `employee`, attribution rule at point of hire |
| **R-10** | Instagram and TikTok handles | ⬜ | Social links, `sameAs` schema. ⚠️ The fine-line audience is unreachable without these |
| **R-11** | Does he want `cathedraltattoostudio.com`? Unregistered as of 2026-09-04 | ⬜ | Everything downstream of hosting |
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
| | | | |

## Where these came from
`HANDOFF.md` (the original 11), `brand/strategy.md` §§02–04, `brand/story.md`,
`brand/audience.md`, `brand/voice.md`, `brand/architecture.md`,
`brand/positioning.md`, `brand/messaging.md`, `brand/identity.md`, `brand/audit.md`,
`06-Reports/records-check.md`.

A point-in-time email render of asks R-01 through R-15 exists at
`06-Reports/client-asks-email-draft.md`. **This file is the source of truth; that
draft is not.** Regenerate it from here when we're ready to send.

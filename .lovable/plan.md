
## Heritage page — v1 and v2

Two alternative restructures of `src/pages/Heritage.tsx`. Both keep the page hero, closing tagline, and Leadership cross-reference unchanged. No other file is touched. The current Heritage page is preserved as-is until you pick one — I'll add the v1 and v2 as separate routes so you can compare side-by-side.

### Routes

- `/about/heritage` — current page, untouched
- `/about/heritage-v1` — new file `src/pages/HeritageV1.tsx`
- `/about/heritage-v2` — new file `src/pages/HeritageV2.tsx`

Both routes registered in `src/App.tsx`. No nav link added — direct URL access only, so the live site is unaffected.

---

### v1 — Unified chronological timeline with Sellvinds toggle

A single timeline titled **"Sellvinds heritage"** (renamed from "Pentagon's heritage") where Sellvinds-group entries are interleaved chronologically alongside Pentagon entries.

Date normalization for sort ordering:
- "1965–2005" (SRP Tools) → anchored at **1965**
- "Early 1970s" (Sellvinds autoparts) → anchored at **1970**
- "1983" CAFOMA Autoparts → 1983 (lands inside Era 2)
- "2007" CAFOMA Engine Components → 2007 (lands at end of Era 3)

Display labels stay verbatim ("Early 1970s", "1965–2005", etc.) — only sort keys are numeric.

**Toggle control** — directly under the page hero:

```
┌──────────────────────────────────────────────────┐
│  [ • Show Sellvinds Group entries  ⓘ ]           │
└──────────────────────────────────────────────────┘
```

A single toggle button (shadcn `Switch` + label). Default state: **off**.

**Behaviour when OFF** (default):
Sellvinds entries stay in the timeline but **collapsed** to a one-line summary at the date marker, with a small chevron to expand inline. Pentagon entries render in full as today.

```
●  1965    PROTEL co-founded — first small-scale machine tool company.
           [full Pentagon entry body...]

◌  1965–2005   Sellvinds: SRP Tools founded; grows into India's largest
               gear-cutting-tool company.   [▾ expand]

●  1970s   Pentagon Machines and Services Pvt. Ltd. founded...
           [full Pentagon entry body...]
```

Sellvinds-row visual treatment:
- Hollow dot (`border-2 border-primary bg-background`) instead of filled
- Smaller label, `text-muted-foreground`
- One-line summary (newly written, ~12-18 words each — see copy below)
- `[▾ expand]` chevron reveals full body inline

**Behaviour when ON**:
Sellvinds entries render with the same visual weight as Pentagon entries (filled dot, full body, no collapse).

**One-line summaries for collapsed Sellvinds rows** (new copy, derived from existing prose):
- Early 1970s — "Sellvinds founded to manufacture autoparts for TELCO, HMT Tractors, and Greaves Cotton."
- 1965–2005 — "SRP Tools Ltd set up with Mitsubishi collaboration; grows into India's largest gear-cutting-tool company."
- 1983 — "CAFOMA Autoparts Ltd founded; supplies 150,000 crankshafts a year by the 1990s; Tata Motors takes 24% equity."
- 2007 — "CAFOMA Engine Components Ltd commissioned at SIPCOT Irungattukottai for Simpson & Co. cylinder heads."

**Era headers** stay (Era 1–5) but Sellvinds entries are slotted by year:
- Era 1 (1954–1965): + "1965–2005" SRP entry slots in at 1965
- Era 2 (1970s–1998): + "Early 1970s" Sellvinds autoparts, + "1983" CAFOMA Autoparts
- Era 3 (1999–2007): + "2007" CAFOMA Engine Components
- Era 4, 5: no Sellvinds additions

The Section 1 ("Pentagon as part of The Sellvinds Group" + Group milestones mini-timeline + bridging paragraph) is **removed** in v1 — the toggle replaces it.

---

### v2 — Pentagon-only timeline + prose & card-grid Sellvinds section

Timeline stays Pentagon-only (the current "Pentagon's heritage" timeline, Era 1–5, unchanged in structure and copy). The Section 1 mini-timeline of group milestones is **replaced** by a section at the bottom of the page.

**Era 1, 1965 entry — appended sentence + anchor link:**

> "After planning and setting up HMT's Special Purpose Machine Division, leaves as Deputy General Manager and moves to Madras. Co-founds Productivity Elements Pvt. Ltd. (PROTEL), one of India's first small-scale machine tool companies. **PROTEL is the first company of what becomes The Sellvinds Group — [see the group's other companies below ↓](#sellvinds-group).**"

The link smooth-scrolls to `#sellvinds-group` near the bottom.

**New bottom section — `#sellvinds-group`** (sits between the Era 5 timeline end and the closing tagline):

Structure:
1. Heading: "The Sellvinds Group"
2. Two prose paragraphs (the same two prose paragraphs currently in v6's Section 1 — kept verbatim, no bullets)
3. Card grid — one card per group company

**Card grid** — 4 cards, responsive `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`, using existing `capability-card` style (matches Leadership grid look):

| Card | Years | What the company did |
|---|---|---|
| **PROTEL** (Productivity Elements Pvt. Ltd.) | 1965 → | One of India's first small-scale machine tool companies. Founding company of the group. |
| **SRP Tools Ltd.** | 1965–2005 | Manufactured hobs, broaches, shaping and shaving cutters under collaboration with Mitsubishi. Grew into India's largest gear-cutting-tool company; sold back to Mitsubishi in 2005. |
| **Sellvinds (autoparts)** | Early 1970s → | Manufactured autoparts and engine lubricating-oil pumps for TELCO (Tata Motors), HMT Tractors, and Greaves Cotton. The lubricating-oil pump plant was run entirely by women — an industry first. |
| **CAFOMA Autoparts Ltd.** | 1983–2021 | Machined fully-finished crankshafts for HMT Tractors, Simpson & Co., Greaves Cotton, and Tata Motors (24% equity holder). Output reached 150,000 crankshafts/year. Sold to MM Forgings Ltd in 2021. |
| **CAFOMA Engine Components Ltd.** | 2007 → | Greenfield plant at SIPCOT Irungattukottai machining fully-finished cylinder heads for Simpson & Co. Owned and run by P. Ramanathan and his sons. |

Note: that's 5 cards — Pentagon itself is not included (it's the subject of the page). Grid becomes `lg:grid-cols-3` with the 4th/5th wrapping, OR keep `lg:grid-cols-2` for a calmer, more readable layout. **Recommendation: `md:grid-cols-2 lg:grid-cols-3`** — 5 cards in a 3-2 stagger reads cleanly at desktop and stacks naturally on mobile (current viewport is 750 px so it'd be 2-up).

Card content: company name (bold), year range (small `text-primary`), 2–3 sentence description (`text-muted-foreground text-sm`). No icons, no logos, no statistics tiles — staying within the project's "no card grids of stats" rule by using cards for distinct company entities (factual differentiator), not for marketing tiles.

Closing tagline and Leadership cross-reference stay as today.

---

### Files

- **New** `src/pages/HeritageV1.tsx` — unified timeline + Switch toggle + collapsible Sellvinds rows
- **New** `src/pages/HeritageV2.tsx` — Pentagon timeline + bottom prose-and-cards Sellvinds section + anchor from 1965 entry
- **Edited** `src/App.tsx` — register `/about/heritage-v1` and `/about/heritage-v2` routes
- **Untouched**: current `src/pages/Heritage.tsx`, all other pages, nav, footer

You'll be able to open both URLs directly to compare. Once you pick one, the next step is to overwrite `Heritage.tsx` with the chosen variant and remove the unused file.

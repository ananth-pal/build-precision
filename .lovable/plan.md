
## Heritage page renumbering + collapse fix + new v4

### Renumbering map

| Currently | Becomes | URL |
|---|---|---|
| `/about/heritage` (Pentagon-only timeline + top Sellvinds mini-timeline section) | Removed from rotation | — |
| `/about/heritage-v1` (merged chronological timeline w/ toggle + collapsed Sellvinds rows) | **v1** | `/about/heritage-v1` (unchanged URL) |
| `/about/heritage-v2` (Pentagon timeline + bottom prose & 5-card Sellvinds section) | **v2** | `/about/heritage-v2` (unchanged URL) |
| (current Heritage.tsx content) | **v3** | `/about/heritage-v3` (new) |
| (new) | **v4** | `/about/heritage-v4` (new) |

The default `/about/heritage` route — which the global nav points to — will render **v1** (the merged-timeline version, which is what you've been iterating on as "current v1"). Tabs in the switcher: **v1 · v2 · v3 · v4**.

### Fix collapse on v1

Bug today: once a Sellvinds row is expanded, there's no way to collapse it back. The expand button disappears as soon as `isExpanded` is true.

Fix: when expanded, render a **Collapse ▴** button under the body that flips `open` back to `false`. When the global toggle (`expandedAll`) is on, individual collapse is disabled (the global switch governs all rows), so the per-row button is hidden in that mode.

```
Collapsed:  [summary line]   Expand ▾
Expanded:   [full body]      Collapse ▴
```

### New v4 — "Sellvinds Group information" always-on dropdowns

Same chronological merge as v1, but:
- **No toggle** at the top — instead a labelled callout: "Sellvinds Group entries are interleaved chronologically below. Click any to read the full entry."
- Each Sellvinds row is rendered as a permanent collapsible disclosure (shadcn `Collapsible`), styled as a clearly clickable card with a chevron. Default state: all collapsed. Click the row header to expand/collapse — chevron rotates.
- A small **"Sellvinds Group"** chip stays on each Sellvinds row so the source is always identifiable.
- Pentagon entries render in full, exactly like v1 (no change to those).

Visual treatment for v4 Sellvinds rows:
```
┌─ ◌ 1965–2005   [Sellvinds Group]                    ▾ ┐
│   SRP Tools Ltd set up with Mitsubishi…               │
└───────────────────────────────────────────────────────┘
        (click anywhere on header to expand)
```
Expanded adds the full body inside the bordered box, chevron rotates to ▴.

### Files

- **New** `src/pages/HeritageV3.tsx` — exact copy of current `Heritage.tsx` (so the old design is preserved as v3).
- **New** `src/pages/HeritageV4.tsx` — based on v1's merged-timeline structure, with always-on collapsibles and labelled callout instead of the toggle.
- **Edited** `src/pages/HeritageV1.tsx` — add Collapse button to `SellvindsRow` for the expanded state.
- **Edited** `src/pages/Heritage.tsx` — replace contents with a re-export/render of `HeritageV1` so the canonical `/about/heritage` route shows v1.
- **Edited** `src/App.tsx` — register `/about/heritage-v3` and `/about/heritage-v4`.
- **Edited** `src/components/HeritageVersionSwitcher.tsx` — replace tabs with `[v1] [v2] [v3] [v4]`. Active state matches whichever route is current; on the canonical `/about/heritage`, mark v1 as active.

No changes to copy, eras, group milestones, or any other page.

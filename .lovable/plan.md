## Portfolio page updates

All edits in `src/pages/WhatWeMake.tsx` plus a small tweak to `src/components/ImageCarousel.tsx` and `src/components/SelectedWorkGallery.tsx`.

### 1. Remove specific photos

**Hydraulic Valves** — drop the original `hydraulic-valve.jpg` (keep only `valves1`). Also remove from `selectedWork`.

**Gear Pumps** — drop photos 2–6 (keep only `gearPumps6` which is now position 1). Remove unused imports.

**Precision Machined Components & Gears** — current order is Couplers_1, Couplers_2, Gear_pump_components_1, Gears_1, Gears_2, PTO_Shafts_1, Valve_spools_1, Valve_spools_2. Remove positions 1, 4, 8 → drop **Couplers_1, Gears_1, Valve_spools_2**.

**Engine Balancers** — remove `balancers3` from the carousel. Since the prior change moved balancers3 to position 1, the carousel becomes `balancers1, balancers2`. Also swap `balancers3` for `balancers1` in `selectedWork`.

Delete the now-unused `.asset.json` pointer files for: Gear_Pumps_2–5, Gears_1, Couplers_1, Valve_spools_2, Balancers_3, and the `hydraulic-valve.jpg` image (via assets--delete_asset for .asset.json files; `rm` for the raw jpg).

### 2. Slightly smaller image previews

- `ImageCarousel` hero: change container from `aspect-[4/3]` to `aspect-[16/10]` and wrap in `max-w-3xl` so the active image is visibly smaller.
- `SelectedWorkGallery` grid: reduce `md:auto-rows-[180px]` to `md:auto-rows-[150px]`.

### 3. Portfolio hero banner

No image — keep the existing clean `PageHero` text-only banner. No change needed.

### 4. v1 / v2 toggle

Add a small segmented toggle at the very top of `<main>` (above the credibility band):

```text
[ Full Portfolio ] [ Selected Work Only ]
```

- `view` state: `"full" | "selected"` (default `"full"`).
- **v1 (full)** — current page exactly as-is.
- **v2 (selected)** — render only: credibility band → Selected Work gallery (always expanded, no collapse chevron in this view) → closing CTA paragraph with links to Capabilities / Means of Production. Hide What We Make carousels and End Markets.
- Toggle styled minimally (border, near-black text, red underline on active) per the project's visual rules. No animations.

### Out of scope

- No copy changes to existing sections.
- No new images uploaded.

### Files touched

- `src/pages/WhatWeMake.tsx` (main work)
- `src/components/ImageCarousel.tsx` (aspect ratio + max width)
- `src/components/SelectedWorkGallery.tsx` (row height)
- Delete: 5 portfolio `.asset.json` pointers + `src/assets/hydraulic-valve.jpg`

## Placement plan for all uploaded media (updated)

Per the editorial boundary: equipment/process imagery stays in **Means of Production** (Technologies page); finished-part imagery stays in **Capabilities/Portfolio**. White margins cropped before upload where present.

### Asset-by-asset

**Equipment shots → `Technologies.tsx` ("Means of Production")**

| Asset | Placement |
|---|---|
| `A3A9226` — gear hobber, sculpted head | **Full-bleed hero background** on Technologies page (`PageHero backgroundImage`). |
| `A3A9234` — gear grinder w/ coolant | Inline 16:9 image atop **"Machine Tools: Gears"** card. |
| `Zeiss Scanning CMM` | Inline 16:9 image atop **"Measurement and Metrology"** card. |
| `Callibration probe` — red fixture + probe | Inside the expanded **Measurement** details dialog. |
| `Zoller Tool Presetter` | Inline 16:9 image atop **"Tooling and Supporting Processes"** card. |
| `Drill loop - Makino a51.mov` | Muted autoplay-loop `<video>` atop **"Machine Tools: Components"** card. |

**Output shot**

| Asset | Placement |
|---|---|
| `Gear stock` — racked finished gears | Hero background on **`CapGearCutting.tsx`**. (No portfolio change for now.) |

### Implementation steps

1. Crop true-white borders from the 5 images that have them (CMM, Zoller, probe, A3A9234, gear stock) via ImageMagick, then upload all 7 assets via `lovable-assets` from `/mnt/user-uploads/` to `src/assets/technologies/*.asset.json` and `src/assets/capabilities/gear-stock.jpg.asset.json`.
2. `Technologies.tsx`: add `backgroundImage` to `PageHero`; extend each card definition with optional `image` (or `video` for the Makino clip) rendered as `w-full aspect-video object-cover rounded-md mb-4` above the icon.
3. `CapGearCutting.tsx`: add `backgroundImage` to its `PageHero`.
4. No changes to Capabilities text, About, Home, WhatWeMake, or any other page.

### Notes

- Zeiss CMM and Zoller shots show a Pentagon-shirted operator; consistent with the engineer-to-engineer tone. Flag if you'd prefer no faces.
- If the `.mov` doesn't play reliably across browsers, I'll transcode to `.mp4` (H.264) before upload.

Confirm and I'll implement.
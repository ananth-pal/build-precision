## Plan: Multi-image carousels with lightbox on Portfolio page

### 1. Upload all 10 images as CDN assets
Use `lovable-assets create` on each `/mnt/user-uploads/*.jpeg` file at original resolution (no resizing, no recompression). Pointer JSON written to `src/assets/portfolio/<name>.jpeg.asset.json`. I will confirm in the final summary that no resolution change occurred.

Files uploaded this round:
- Couplers_1, Couplers_2
- Gears_1, Gears_2
- Valve_spools_2
- Gear_Pumps_2, Gear_Pumps_3, Gear_Pumps_4, Gear_Pumps_5
- Balancers_3

### 2. Build a new `ImageCarousel` component
Replaces the single-image `<img>` + `ImageLightbox` pattern on cards that have multiple photos. Behavior:
- **Preview box (on card):** fixed height ~h-56, `object-contain` on a neutral background so no product is cropped. Left/right chevron buttons overlay the image; clicking advances/rewinds. Small dot indicator + caption below.
- **Click image → opens lightbox** (reuse `ImageLightbox` styling). Lightbox shows the same carousel at near-fullscreen (`max-w-[95vw] max-h-[90vh]`, `object-contain`), with its own left/right arrows, keyboard arrow-key support, and caption.
- Single-image cards keep the simple `ImageLightbox` wrap (no arrows needed).
- Captions = filename with the numeric suffix and underscores stripped (e.g. `Gear_Pumps_2` → "Gear Pumps", `Valve_spools_2` → "Valve spools").

### 3. Update `src/pages/WhatWeMake.tsx` category → images mapping

| Card | Images this round |
|---|---|
| Hydraulic Valves | existing `hydraulicValve` (unchanged) |
| Gear Pumps | existing `gear-pumps` + Gear_Pumps_2/3/4/5 → carousel (5) |
| PTO Gearboxes | existing `products-display` (unchanged for now; more may come in part 2) |
| Engine Balancer Assemblies | Balancers_3 → single image (more may come in part 2) |
| Precision Machined Components & Gears | Couplers_1, Couplers_2, Gears_1, Gears_2, Valve_spools_2 → carousel (5, captions per file) |

`families` array becomes `{ title, desc, images: [{ src, caption }] }`. Card renders carousel when `images.length > 1`, single lightbox image otherwise, placeholder when empty.

### 4. Notes
- Part 2 (next 9 photos) will extend the same arrays — no further structural changes needed.
- Resolution: assets uploaded as-is; `<img>` uses `object-contain` so the browser scales without quality loss on click-to-expand.

Confirm and I'll implement.

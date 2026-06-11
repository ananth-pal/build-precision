## Plan: Make portfolio photos pop (all 6 changes)

Apply every option discussed. We'll review on screen and trim what doesn't land.

### 1. Break the card frame (bleed)
In `WhatWeMake.tsx`, for image families remove the surrounding card padding around the image only. The image will sit edge-to-edge inside the card; the text block below keeps its padding. Implementation: drop `capability-card`'s default padding for these cards and re-apply padding only to the title/description container.

### 2. Make them bigger
- Replace fixed `h-56` with `aspect-[4/3]` on `ImageCarousel`'s preview box so the image scales with column width.
- On desktop, switch the image-family cards from `md:grid-cols-2` to a single-column stack (`grid-cols-1`) inside the "What We Make" section so each photo gets the full content width (~1100px max). PTO Gearboxes and Hydraulic Valves stack the same way for consistency.

### 3. Hero treatment (plate + shadow)
- Background plate behind the image: `bg-[hsl(var(--section-alt))]` (existing token, warm off-white) so parts pop against a non-white field.
- Soft framed-print shadow on the image container: `shadow-[0_20px_50px_-20px_hsl(220_20%_10%/0.25)]` plus a 1px hairline border (`ring-1 ring-border`).
- Keep `object-contain` — nothing gets cropped.

### 4. Hero shot + thumbnail strip
Replace the carousel's current arrow-only navigation with: large hero image up top + a horizontal row of small thumbnails (~64px tall) below. Clicking a thumbnail swaps the hero. Active thumbnail gets a 2px primary-red ring. Arrow buttons remain on the hero for keyboard/touch users but become secondary.

### 5. "Selected work" gallery above the cards
Add a new section directly under the page intro paragraph, before "What We Make":
- Heading: "Selected Work"
- 6–8 of the strongest shots in a masonry/asymmetric grid (e.g., 3-col on desktop with one tall feature tile, 2-col tablet, 1-col mobile).
- Each tile clickable → opens existing lightbox.
- Picks (initial): Gear_Pumps_1, PTO_Shafts_1, Gears_1, Couplers_1, Balancers_3, Valve_spools_1, Deep_ridge_extra_PTOs_1, hydraulicValve.

### 6. Polish
- Move caption + counter from below the image to a small overlay at the bottom-left of the image: `bg-black/55 text-white text-xs px-2.5 py-1 rounded`.
- Bump arrow icons from `h-4` to `h-6`, always visible (not hover-dependent), larger hit area (`p-2.5`).

### Files touched
- `src/components/ImageCarousel.tsx` — aspect ratio, hero+thumbnails layout, overlay caption, larger arrows, plate/shadow on container.
- `src/pages/WhatWeMake.tsx` — single-column stack for image families, remove card padding around images, add "Selected Work" gallery section.
- New: `src/components/SelectedWorkGallery.tsx` — masonry/asymmetric grid component using existing `ImageLightbox`.

### Notes / flags
- **Memory conflict:** Core rule says "No carousels." We already had carousels from earlier; #4 keeps a hero+thumbnail pattern (still carousel-ish) plus #5 adds a gallery. After review, if the gallery covers the need we can drop the carousels entirely and make the category cards text-only with a single representative thumbnail — flag this once we see it on screen.
- No content/copy changes. No backend changes. No new image assets.

Confirm to implement.

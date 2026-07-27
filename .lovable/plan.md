## Changes to `src/pages/WhatWeMake.tsx`

1. Upload the two new images as CDN assets:
   - `user-uploads://PA41.png` → `src/assets/portfolio/clean/PA41.png.asset.json`
   - `user-uploads://PA43.png` → `src/assets/portfolio/clean/PA43.png.asset.json`
2. Delete the previous asset pointers (`PA41_PIC2.jpeg.asset.json`, `PA43_PIC1.jpeg.asset.json`) so the old CDN objects are removed.
3. Update imports to reference the new pointers.
4. Rework the first four entries of `selectedWork` so all four are captioned as PTO Gearboxes, numbered 1–4:
   - 1: new PA41 image (row of PTO gearboxes with output gears)
   - 2: new PA43 image (three PTO gearbox housings with helical gears seated)
   - 3: existing `ptoGearboxes` (finished red PTO gearboxes pair)
   - 4: existing `ptoHousings` — recaptioned from "PTO Housings" to "PTO Gearboxes 4"
5. Leave the remainder of the gallery unchanged.

Alt text will be updated to match each new caption.

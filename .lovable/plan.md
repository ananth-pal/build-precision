## Watermark removal on portfolio photos

Short answer: I can remove the watermarks in-place using the image edit tool, but AI-based watermark removal on already-compressed WebP/PNG assets often leaves visible smudges, blurred texture, or reconstructed detail that doesn't match the surrounding surface — especially on metallic parts where reflections and machining marks are hard to fake.

Recommended path: **you re-export and resend the originals without the watermark.** That gives clean, full-fidelity replacements with no reconstruction artifacts, and it's faster than iterating on AI cleanups per image.

### If you resend
- Send the originals (from Canva or source) at ~1600x1200 (4:3) or 1200x1200 (1:1), matching the guidance used earlier for Selected Work.
- List which captions each replacement maps to (e.g. "PTO Housings — lead", "Gear Pump Housing — alt") so I swap the right slot in `src/pages/WhatWeMake.tsx` and any home-page card that reuses it.
- I'll upload each as a CDN asset, replace the import, and keep ordering unchanged.

### If you'd rather I try AI removal first
- Tell me which specific images to attempt (by caption or filename).
- I'll run `imagegen--edit_image` on each, save alongside the current asset, and you review before I swap it in. Expect mixed results on shiny/metallic surfaces.

Which route do you want?

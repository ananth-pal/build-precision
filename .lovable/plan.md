# Plan — Speed up image loading

## Goal
Cut first-load image weight by 40–70% and reduce layout shift, so sub-pages (Portfolio, Means of Production, Capabilities, Leadership) feel as snappy as the homepage.

## What changes

### 1. Add `vite-imagetools` for build-time image transforms
- Install `vite-imagetools` and register it in `vite.config.ts`.
- This lets us import any image with query params like `?format=webp&w=800;1200;1920&as=srcset` and get back a responsive `srcset` string, with WebP fallback to the original format.

### 2. Create a small `<ResponsiveImage>` helper
- New file: `src/components/ResponsiveImage.tsx`.
- Wraps `<picture>` with a WebP `<source>` and an `<img>` fallback.
- Accepts `src`, `alt`, `aspectRatio` (e.g. `"16/10"`), and an optional `priority` prop.
  - `priority=true` → `loading="eager" fetchpriority="high"` (used only for above-the-fold hero images).
  - default → `loading="lazy" decoding="async"`.
- Always renders explicit `width`/`height` via aspect-ratio CSS to prevent layout shift.

### 3. Convert the heavy image sites to use it
Priority order (largest wins first):
1. **`src/pages/WhatWeMake.tsx`** — the `SelectedWorkGallery` items (currently plain `<img>` with 1–2 MB PNGs).
2. **`src/pages/Technologies.tsx`** — the 6 capability cards, including the assembly shuffle set (`asm-alt-1..5.png`, ~1.8 MB each).
3. **`src/components/home/MarketCard.tsx`** and homepage hero cards.
4. **`src/pages/CapAssembly.tsx`, `CapMachining.tsx`, `CapGearCutting.tsx`, `Capabilities.tsx`** — capability page images.
5. **`src/pages/Leadership.tsx`, `HeritageV3.tsx`, `About.tsx`** — remaining photo-heavy pages.

### 4. Keep the homepage LCP preload
The existing `<link rel="preload">` for `gear-hobber.jpg` in `index.html` stays. Update it to preload the WebP variant instead.

### 5. Leave the CDN pointers alone
`.asset.json` pointers and files under `src/assets/` remain unchanged — `vite-imagetools` operates on the URLs at build time. No re-uploads, no CDN churn, fully reversible.

## Non-goals (deferred)
- Deleting unused/superseded assets — separate effort, irreversible.
- Server-side image resizing / Cloudflare Image Resizing — overkill for this traffic level.
- Converting the CDN-hosted originals to WebP at the source — the build-time transform is enough.

## Technical notes
- `vite-imagetools` requires images to be bundler-resolved, i.e. imported via `import x from "..."`. Assets loaded via `.asset.json.url` (a runtime CDN string) bypass the bundler, so the transform can't reach them. Two options:
  - **Option A (recommended):** For each converted image, add a sibling bundled import path — the file already exists on the CDN, so we import the `.asset.json` for URL, but *also* bundle-import a `?webp&srcset` variant for the responsive sources. This works because Vite can fetch the CDN URL at build time via a small resolver, OR we accept a one-time trade-off and keep small (<200 KB) thumbnails in `src/assets` for the transform.
  - **Option B (fallback):** Skip `vite-imagetools` and instead pre-generate WebP versions of the ~15 largest images with `squoosh-cli`, upload as new `.asset.json` pointers, and use `<picture>` manually.
- I'll start with Option A and fall back to Option B if the resolver work gets messy. Either way the user-visible outcome — WebP with srcset, lazy loading, no layout shift — is the same.

## Verification
- Run `bun run build` and check the output for `.webp` variants.
- Open the Portfolio page in the preview, check DevTools Network tab: images should be `.webp`, sized to viewport width, and load lazily as the user scrolls.
- Confirm no layout shift on slow-network throttling.

## Deliverable
Faster perceived load on every photo-heavy page, especially on mobile and first visits. Homepage LCP unchanged or slightly better.

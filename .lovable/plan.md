## Goal

Make the probe photo and the Makino photo read as a deliberate pair in the Capabilities / Means of Production tiles, without swapping either asset.

## Approach

Apply the same lightweight CSS filter stack to the image (and the video) inside both tiles so palette, contrast and warmth align. The probe is currently warm/dark and contrasty; the Makino is cool/light and flat. A small neutralising treatment on both pulls them toward a shared cool-neutral, mid-contrast look that fits the site's technical minimal aesthetic.

Treatment (Tailwind / inline CSS, applied identically to both tiles):
- `saturate(0.78)` — pulls warmth out of the probe and the slight green cast out of the Makino
- `contrast(1.05)` and `brightness(1.02)` — gives the Makino a touch more presence without crushing the probe
- A subtle cool tint via a `mix-blend-overlay` pseudo-layer in a neutral cool grey at very low opacity (~6%), so both sit on the same temperature
- Keep `object-cover` and `aspect-[16/10]` on both so framing density matches

No image regeneration, no asset swaps, no copy changes.

## Files

- `src/components/home/HomeCapabilitySection.tsx`
  - Extract a shared `mediaClass` / wrapper that applies the filter + tint overlay
  - Apply to: probe `<img>`, capabilities `<video>`, and Makino `<img>`

## Out of scope

- Replacing either image
- Re-cropping or outpainting
- Changes to `ProgrammesInProduction` product tiles (separate prior fix)

## Verification

After implementation, screenshot the home page section via Playwright at desktop width and confirm the two tiles read as a matched pair (similar temperature, similar contrast, no obvious tint cast).

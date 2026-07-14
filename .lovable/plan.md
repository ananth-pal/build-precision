## Gear Cutting card image fix

The photo is portrait; the card uses a landscape `aspect-video` frame, so `object-cover` crops the sides and pushes the tool/workpiece (top-right of the source) out of view.

Two viable options:

### Option A — Keep landscape cards, reframe the photo (recommended)
- Card grid stays visually consistent across all three capabilities (Assembly, Machining, Gear Cutting all landscape).
- Reframe the gear-cutting image so the cutter and workpiece sit near the optical center.
- Implementation: use `imagegen--edit_image` to crop/recompose the source into a 16:9 landscape frame centered on the tool + workpiece, save as a new asset, and swap the import in `src/pages/Capabilities.tsx`. No layout code changes.

### Option B — Switch all three cards to portrait
- Change the card media frame from `aspect-video` to `aspect-[3/4]` (or `aspect-square`) for all cards, so the grid stays uniform.
- Placeholder captions on Assembly/Machining still render fine.
- Downside: taller cards push the icon/title/description further down, and portrait cards read less like a capability tile and more like a profile card. Only worth it if we plan to use portrait photography across the section going forward.

### Recommendation
Go with Option A. Landscape tiles match the rest of the site's card rhythm; reframing a single image is a smaller, more reversible change than restyling the whole capability grid.

If you approve, I will regenerate the gear-cutting image centered on the cutter and workpiece and wire the new asset into the Gear Cutting card only.
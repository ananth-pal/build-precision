## Remove hero tint on `src/pages/Index.tsx`

Currently lines 121–128 render a full-bleed diagonal tint (`linear-gradient(135deg, hsla(220,20%,10%,0.75), hsla(348,76%,45%,0.35))`) across the entire hero. This is what darkens every slide.

Changes:

1. **Delete the full-image tint overlay** (lines 121–128).
2. **Add a bottom-anchored scrim** so only the region behind the copy is darkened, letting the imagery itself read cleanly at the top:
   ```tsx
   <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
   ```
3. **Add a crisp text shadow** to the headline and supporting paragraph so text stays legible against any slide (including light backgrounds), without needing a full tint:
   - Headline: `[text-shadow:_0_2px_12px_rgba(0,0,0,0.75)]`
   - Paragraph: `[text-shadow:_0_1px_8px_rgba(0,0,0,0.7)]`
4. Leave buttons, layout, slide rotation, and everything else unchanged.

No other pages or components are affected.

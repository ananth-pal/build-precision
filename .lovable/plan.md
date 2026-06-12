# Improve the "Expanding into" callout

## Goal
Keep the image roughly its current size (half the card, ~4:3) but make the text side feel substantial and well-composed. Frame the section clearly as forward-looking so it generates interest without overstating current capability.

## Changes in `src/pages/Index.tsx` (Expanding into block only)

### 1. Stronger framing label
Replace the small "Expanding into" eyebrow with a two-part header:
- Eyebrow: `EXPLORATORY · Targeted next sectors` (uppercase, tracked, muted)
- Make it explicit these are pipeline sectors, not current production — protects against misrepresentation.

### 2. Larger, weighted headline
Promote the headline from `font-semibold` body text to a proper sub-heading:
- `text-xl lg:text-2xl font-bold leading-tight`
- Copy: "Bringing Pentagon's precision discipline to new regulated sectors."

### 3. Replace the single sector run-on with a 2×2 mini-grid
Instead of `Medical · Aerospace · Defence · Robotics` as one line, render four compact tiles inside the text column:

```text
+------------------+------------------+
| Medical          | Aerospace        |
| Implant-grade    | AS9100-track     |
| finishes         | tolerances       |
+------------------+------------------+
| Defence          | Robotics         |
| Traceable lots,  | Precision gears  |
| ITAR-aware       | & actuators      |
+------------------+------------------+
```
- Each tile: sector name (semibold) + one short qualifier line (xs, muted) explaining why our existing capability transfers. Keeps it honest (capability-led, not claim-led).

### 4. Supporting paragraph + soft CTA
- Shorter lead-in sentence above the grid.
- Below grid: a quiet inline link "Discuss a programme →" pointing to `/contact` (or existing quote route) to convert intent.

### 5. Layout tweaks
- Keep `grid-cols-1 sm:grid-cols-2` and the `aspect-[4/3]` image (size unchanged).
- Increase text-column padding to `p-6 lg:p-8` and use `flex flex-col justify-between` so content fills the height alongside the image instead of clustering at the top.
- Keep the `border-l-4 border-primary` accent and the existing Show/Hide image toggle.

## Out of scope
- No changes to markets grid, image asset, toggle behavior, or other sections.
- No new routes or business-logic changes.

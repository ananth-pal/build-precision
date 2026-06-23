## Asset prep
1. Delete the three existing placeholders cropped from the poster:
   - `src/assets/brand/pentagon-wordmark.png.asset.json`
   - `src/assets/brand/sellvinds-mark.png.asset.json`
   - Remove their imports + `<img>` tags currently in Section 1, Section 2, and the closing tagline of `src/pages/HeritageV3.tsx`.
2. Upload the two clean uploads via `lovable-assets`:
   - `user-uploads://Pentagon_Logo_CDR_18-2.jpg` → `src/assets/brand/pentagon-logo.jpg.asset.json`
   - `user-uploads://Sellvinds_Logo.png` → `src/assets/brand/sellvinds-logo.png.asset.json` (PNG with built-in white space — render at small height and let the background blend).

## Placement options

The page has three structural anchors where a logo could naturally live:

```
[ PageHero "Heritage" ]
    |
[ Section 1: Pentagon as part of The Sellvinds Group ]   ← Sellvinds context
    intro paragraphs
    Group milestones timeline
    [ red rule + transition line ]
    |
[ Section 2: Pentagon's heritage ]                       ← Pentagon context
    era dividers + entries
    |
[ Closing tagline: "Pentagon is part of The Sellvinds Group – 72 years..." ]
```

### Sellvinds logo — candidate spots

- **A1. Left of the Section 1 H2** (small, ~h-10, inline with the heading on md+, stacked above on mobile). Treats it like a section icon. Reads as a quiet attribution mark.
- **A2. Right margin of Section 1**, vertically anchored next to the intro paragraphs (using the empty space at `max-w-5xl` outside the `max-w-3xl` content column). Aesthetically distinctive, uses currently-empty whitespace, no disruption to copy flow.
- **A3. Above the Section 1 H2**, full width of content column, left-aligned, ~h-12 (similar to current treatment but with the real logo).

### Pentagon logo — candidate spots

- **B1. Above the Section 2 H2 "Pentagon's heritage"**, left-aligned, ~h-10. Mirrors whichever placement Sellvinds gets — establishes visual parallelism between the two sections.
- **B2. Inside the PageHero** as a small mark in the top-left of the hero band, sized down so it doesn't compete with the "Heritage" title. Makes the page feel branded from the first scroll.
- **B3. Skip — already in site header.** Argues that the wordmark is omnipresent in `SiteHeader`, so re-using it on Heritage is redundant. In that case only Sellvinds gets a placement (since it isn't shown anywhere else on the site).

### Closing tagline — paired lockup option

- **C1. Sellvinds + divider + Pentagon, centered, above the tagline.** Strongest "two-company moment" because the line literally names both entities. Works regardless of A/B choices above.
- **C2. No paired lockup** — keep the closing tagline as plain text only.

## Recommendation

**A2 + B1 + C1** — Sellvinds as a small mark floated in the right margin of Section 1 (uses existing whitespace, distinctive, doesn't push copy around); Pentagon wordmark as a small left-aligned mark above the Section 2 H2 (visually announces the shift); and the paired lockup at the closing tagline (the natural payoff). This treats the two logos asymmetrically — matching the page's narrative arc rather than forcing identical placements.

If you'd prefer strict symmetry, use **A3 + B1 + C1** instead — both logos above their respective H2s, then paired at the end.

## Implementation notes
- Both rendered at `h-10` (≈40 px), `w-auto`, no border / no card, with `opacity-90` to soften the red and orange against the page.
- Sellvinds PNG has a lot of built-in whitespace; cropping is unnecessary at small render heights, but I'll add `object-contain` and a tight wrapper so the visual height matches the Pentagon logo.
- `alt` text: "Sellvinds Group" and "Pentagon Machines and Services Private Limited".

## Questions for you
1. Pick a Sellvinds placement: A1, A2, or A3?
2. Pick a Pentagon placement: B1, B2, or B3 (skip)?
3. Confirm paired lockup at closing tagline: C1 or C2?
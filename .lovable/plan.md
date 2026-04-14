

## Plan: Four Targeted Edits

### 1. Move "Our Facilities" from Heritage to About landing page

Remove the "Our Facilities" block (Plant 1 & Plant 2 cards + combined sq footage line) from `Heritage.tsx` and add it to `About.tsx` — placed between the intro paragraph and the Heritage/Leadership link cards. This gives facilities its own prominent spot rather than being buried under Heritage.

### 2. Move product photos into their respective cards on What We Make

Currently two photos sit in a separate grid below the four product family cards. Instead:
- `productsDisplay` (PTO gearboxes) goes inside the "Power Take-Off (PTO) Gearboxes" card
- `hydraulicValve` goes inside the "Hydraulic Valves & Gear Pumps" card
- The other two cards ("Engine Balancer Assemblies" and "Precision Machined Components & Gears") get placeholder image blocks — we don't currently have dedicated image assets for them, so they'll show a styled placeholder with `[PLACEHOLDER — product photo]`

The separate image grid section is removed entirely.

### 3. Consolidate Standards, ESG, and process workflow into Our Approach

This is a good call — Standards & Certifications on Technologies and ESG on Heritage both feel tacked on. Moving them into **Our Approach** creates a single page that answers: "What is it like to work with Pentagon?"

Changes:
- **Remove** Standards & Certifications block from `Technologies.tsx`
- **Remove** ESG block from `Heritage.tsx`
- **Add** both to `OurApproach.tsx` as new sections after the RFQ checklist
- **Rename** the page to **"Working with Pentagon"** (nav label and page title) — this naturally encompasses the engagement process, quality standards, and ESG commitments without needing the word "approach"
- Update route to `/working-with-pentagon` in `App.tsx`, `SiteHeader.tsx`, and `SiteFooter.tsx`

### 4. Convert Partner Qualification block to a paragraph on Capabilities

Replace the bordered spec-strip block with a flowing introductory paragraph on the Capabilities landing page. Remove the "Partner Qualification" heading entirely. The paragraph will read something like:

> "Pentagon manufactures across steel, cast iron, ductile iron, and non-ferrous alloys [owner to confirm and expand], with batch sizes and workpiece dimensions to be confirmed. [PLACEHOLDER — owner to supply batch size and dimensional range]"

This sits as body text below the subtitle, before the three capability tiles — informative without implying a gate.

### Files changed

| File | Change |
|------|--------|
| `src/pages/About.tsx` | Add Our Facilities block (moved from Heritage) |
| `src/pages/Heritage.tsx` | Remove Our Facilities and ESG blocks |
| `src/pages/WhatWeMake.tsx` | Move images into cards; add placeholders for 2 missing product photos |
| `src/pages/Technologies.tsx` | Remove Standards & Certifications block |
| `src/pages/OurApproach.tsx` | Add Standards & ESG sections; rename to "Working with Pentagon" |
| `src/pages/Capabilities.tsx` | Replace Partner Qualification block with intro paragraph |
| `src/App.tsx` | Update route from `/our-approach` to `/working-with-pentagon` |
| `src/components/SiteHeader.tsx` | Update nav label and path |
| `src/components/SiteFooter.tsx` | Update footer link label and path |


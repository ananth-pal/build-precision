

## Portfolio page — End Markets rebuild

Restructure the End Markets section on `/what-we-make` so it functions as connective tissue between the product cards and the Fit section. Delete the Target markets list. Combine Agriculture into Off-Highway. No other changes to the page.

### Changes to `src/pages/WhatWeMake.tsx`

**1. Delete the Target markets block in full**
- Remove the `endMarketsTarget` array.
- Remove the "Target markets for future development:" paragraph and its list in the JSX.
- Diversification messaging stays carried by the existing Fit section ("Work We Are Suited To").

**2. Replace the current End Markets list with a 2×2 grid of structured market blocks**

Replace `endMarketsCurrent` (a string array) with a structured array of three market entries — Off-Highway and Commercial Vehicles (now also covering Agriculture), Automotive, and Industrial Machinery — each with four fields:
- `name` — market heading (H3)
- `supplied` — what Pentagon supplies into this market (one sentence)
- `demanding` — what makes those parts demanding
- `capabilities` — which Pentagon capabilities drive fit

**3. Combine Agriculture into Off-Highway**

Single combined block, copy:

- **Name:** Off-Highway, Commercial Vehicles, and Agriculture
- **Supplied:** Power take-off gearboxes, hydraulic valves, and gear pumps for auxiliary power and fluid-power systems on commercial, off-highway, and agricultural vehicles. Agricultural exposure is second-tier — parts are supplied to engine and hydraulic OEMs whose products are then built into agricultural equipment.
- **Demanding:** Parts typically combine precision-bored housings with machined gear cavities and integrated hydraulic sub-assembly, and carry field duty cycles that make serial traceability and field-performance history relevant at qualification.
- **Capabilities:** Gear cutting (hobbing, shaving, broaching, tooth chamfering), CNC bore and angular grinding, and clean-room hydraulic assembly with automated test-rig validation.

**4. Automotive block** — copy as drafted in the brief.

**5. Industrial Machinery block** — copy as drafted in the brief.

**6. Section layout**

- Section heading remains: **End Markets** (existing H2 style).
- Intro paragraph (replaces the current short intro line):
  > Pentagon's products end up in the following markets. Each market block describes what we supply, what makes those parts demanding, and which capabilities drive fit.
- Below the intro, a 2×2 grid (`grid md:grid-cols-2 gap-8`) of three blocks. Three entries in a 2-col grid means the third (Industrial Machinery) sits alone on the second row at desktop — acceptable and matches the rhythm of the product-card grid above. Single column on mobile.
- Each block: market name as H3 (`text-lg font-semibold`), then three short labelled lines beneath:
  - `Pentagon supplies:` followed by the `supplied` text
  - `What makes it demanding:` followed by the `demanding` text
  - `Relevant capabilities:` followed by the `capabilities` text
- Labels in `font-medium text-foreground`, body in `text-muted-foreground`, leading-relaxed. No cards, no borders, no photos — same typographic restraint as the Fit section.
- Container width widened from `max-w-3xl` to `max-w-7xl` to accommodate the 2-col grid, matching the What We Make grid above.

### What stays untouched

- Hero, credibility band, What We Make 4-card grid, Work We Are Suited To section, closing invitation with cross-links, header, footer.
- Section ordering and the `<hr>` separators between sections.


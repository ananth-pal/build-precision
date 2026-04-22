

## Add Built-Up Area Detail with Expansion-Ready Framing

Currently every "43,200 sq ft" mention reads as one number. The reality — 20,000 sq ft built-up, balance ready for development against customer demand — should be presented as **headroom**, not a shortfall. Framing: a working footprint plus dedicated land already in hand for capacity expansion when a customer programme calls for it.

### Standard phrasing (use consistently)

Short form (inline, one-liner contexts):
> 43,200 sq ft total — 20,000 sq ft built-up, balance held for capacity expansion to customer programmes.

Long form (where there's room to elaborate):
> Pentagon's two plants occupy a 43,200 sq ft footprint, with 20,000 sq ft currently built-up production space. The remaining land is held in reserve and ready to be developed as customer programmes scale — capacity expansion without a site move.

### File-by-file edits

**1. `src/pages/About.tsx`** (line 21) — "Our Facilities" subtitle
- Replace: `Combined: 43,200 sq ft across both facilities.`
- With: `43,200 sq ft total footprint — 20,000 sq ft built-up today, with the balance held for capacity expansion as customer programmes scale.`

**2. `src/pages/Index.tsx`** (line 65) — Differentiator block
- Replace `…totaling 43,200 square feet.` with `…on a 43,200 sq ft footprint (20,000 sq ft built-up, balance ready for development as customer programmes grow).`

**3. `src/pages/Technologies.tsx`** (line 113) — Means of Production intro
- Replace `…totalling 43,200 sq ft —` with `…on a 43,200 sq ft footprint (20,000 sq ft built-up, balance held for expansion) —`

**4. `src/components/home/HomeCapabilitySection.tsx`** (line 81) — capability blurb
- Replace opening sentence `43,200 sq. ft. across two plants.` with `43,200 sq. ft. across two plants — 20,000 sq. ft. built-up, balance ready for expansion.`

**5. `src/pages/Heritage.tsx`** (line 109) — "Today" timeline entry
- Replace `43,200 sq ft across two plants in Ambattur, Chennai.` with `43,200 sq ft across two plants in Ambattur, Chennai (20,000 sq ft built-up, balance ready for development).`

**6. `src/pages/OurApproach.tsx`** (line 174) — Industrial Responsibility paragraph
- Replace `…across our 43,200 sq. ft. facilities.` with `…across our facilities (20,000 sq. ft. built-up on a 43,200 sq. ft. site).`

### Memory update

Update `mem://features/manufacturing-facilities` so future copy stays consistent:
- Change `Total Area: 43,200 sq ft across two plants.` to:
  - `Site footprint: 43,200 sq ft across two plants.`
  - `Built-up production area: 20,000 sq ft.`
  - `Remaining land held for capacity expansion to customer programmes (positive framing — never describe as "unused" or "vacant").`

### Notes
- No layout changes; copy-only edits.
- "Held for / ready for development as customer programmes scale" reframes spare land as commercial readiness rather than under-utilisation.
- Numbers stay verbatim everywhere (43,200 / 20,000) so they're easy to search and audit later.


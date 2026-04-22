

## Add Logos to Memberships, Export Recognition & Standards

Enhance the "Working with Pentagon" page (`/working-with-pentagon`) by displaying official logos alongside organisation names, since logos are more recognisable. Also remove date references as requested.

### Layout approach

A **horizontal logo card** layout works best here — each item becomes a row (or grid cell on wider screens) with:
- **Left**: Logo in a fixed-height container (white background, contained, max-height ~56px) so logos with different aspect ratios sit on a consistent baseline.
- **Right**: Bold short name/acronym + full expansion + descriptive note.

This keeps the technical/minimal aesthetic, treats logos as quiet credentials (not marketing badges), and preserves the names for reference. Two-column grid on `md+`, single column on mobile.

### Changes to `src/pages/OurApproach.tsx`

**1. Copy uploaded logos into `src/assets/logos/`:**
- `aiema_logo.webp` → `aiema.webp`
- `one-star_export_house.jpg` → `one-star-export-house.jpg`
- `ISO_19001.png` → `iso-9001-intertek-ukas.png`
- `FPSI_logo.jpg` → `fpsi.jpg`
- `EEPC-India.png` → `eepc-india.png`
- `federation-of-indian-export-organisations-logo-png_seeklogo-363337.png` → `fieo.png`

**2. Import logos as ES6 modules** at the top of the file.

**3. Update `standards` array** — add `logo` to ISO 9001 entry only (the uploaded combined Intertek/UKAS image applies there). ISO 14001/45001 remain text-only with an "in progress" tag.

**4. Update `memberships` array** — add `logo` field to each, remove date phrases:
- One Star Export House: drop "Valid through 2028." → "DGFT recognition for exporters meeting a minimum cumulative export threshold under the Foreign Trade Policy."
- FPSI: drop "since 2010." → "Fluid Power Society of India, industrial member."
- AIEMA: drop "since 2015." → "Ambattur Industrial Estate Manufacturers' Association, member."
- EEPC India and FIEO: unchanged (no dates).

**5. Render with new card layout** for both Standards and Memberships sections:

```text
┌─────────────────────────────────────────────────┐
│ ┌──────────┐  AIEMA                             │
│ │  [logo]  │  Ambattur Industrial Estate        │
│ │          │  Manufacturers' Association.       │
│ └──────────┘  Member.                           │
└─────────────────────────────────────────────────┘
```

- Card: `border border-border rounded-lg p-5 bg-card flex gap-4 items-center`
- Logo box: `w-28 h-14 flex-shrink-0 flex items-center justify-center bg-white rounded` with `<img className="max-h-full max-w-full object-contain" />`
- Text: acronym in `font-medium text-foreground text-sm`, full name/note in `text-xs text-muted-foreground`
- Grid: `grid md:grid-cols-2 gap-4`

For Standards, ISO 14001/45001 (no logo yet) render in the same card shell with the logo slot replaced by a small "In progress" pill so the row heights stay aligned.

### Notes
- All logos imported from `src/assets/logos/` for proper Vite bundling.
- White background behind logos ensures coloured/dark marks (FIEO, EEPC, FPSI) read correctly on the page's white surface — keeps composition clean.
- No new dependencies; no other pages affected.


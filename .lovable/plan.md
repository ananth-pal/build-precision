

## Make Credential Logos Larger for Instant Recognition

The current logo container (`w-28 h-14` ≈ 112×56px) is too small for instant recognition. Logos like AIEMA, FPSI, and the Intertek/UKAS mark lose detail at this size. Increase the logo prominence in both **Standards & Certifications** and **Memberships & Export Recognition** cards.

### Layout change

Switch from a horizontal (logo-left, text-right) layout to a **vertical card** layout where the logo gets a generous, full-width band at the top and the text sits below. This gives logos roughly 3–4× more visible area without making cards feel unbalanced.

```text
┌───────────────────────────┐
│                           │
│        [  LOGO  ]         │   ← ~140px tall white band
│                           │
├───────────────────────────┤
│  AIEMA                    │
│  Ambattur Industrial …    │
│  Member.                  │
└───────────────────────────┘
```

### Changes to `src/pages/OurApproach.tsx`

**1. Refactor `CredentialCard`** to a vertical layout:
- Outer card: `border border-border rounded-lg bg-card overflow-hidden flex flex-col`
- Logo band: `w-full h-36 bg-white flex items-center justify-center p-6 border-b border-border` (h-36 = 144px, ~2.5× current height)
- Logo image: `max-h-full max-w-full object-contain` (no extra padding constraint — the band's `p-6` does it)
- Text block: `p-5` with same typography as today (label `font-medium text-sm`, full name + note `text-xs text-muted-foreground`)
- "In progress" placeholder: keep the pill style but render it centered in the same tall white band so card heights stay aligned

**2. Tighten the grid** to give each card more horizontal room and let logos breathe:
- Standards: `grid sm:grid-cols-2 lg:grid-cols-3 gap-4` (3 across on desktop — there are 3 standards, fits perfectly on one row)
- Memberships: `grid sm:grid-cols-2 lg:grid-cols-3 gap-4` (5 items → 3 + 2 layout on desktop, 2 + 2 + 1 on tablet)

This produces visibly larger logos (roughly 200–260px wide × 100–120px tall in the rendered band depending on aspect ratio) while keeping the technical, restrained card aesthetic.

### Notes
- No changes to data, imports, or other sections of the page.
- White logo band is preserved so dark/coloured marks remain legible.
- Card heights stay uniform within a row because the logo band is fixed-height and the text block flows naturally below.


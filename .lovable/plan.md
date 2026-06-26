# Heritage page — promote Sellvinds lockup to top

File: `src/pages/HeritageV3.tsx`. Scope: Section 1 only.

## Change

Move the family-of-companies lockup (Sellvinds logo + thin divider + member-company logos row) so it renders **immediately under the hero, above the `Pentagon as part of The Sellvinds Group` H2**.

### New order in Section 1
1. Sellvinds + members lockup (centered, no border box — unchanged styling)
2. `Pentagon as part of The Sellvinds Group` H2 + two intro paragraphs
3. `A machine-tool engineer's formation` (founder prose + portrait)
4. `Companies Affiliated with Sellvinds Group` heading
5. Text-only company profiles
6. Closing "Pentagon's own story unfolds…" line

### Implementation
- Cut the existing `<div className="mt-6 flex flex-col items-center">…</div>` block (Sellvinds img + divider + `memberLogos.map`) and the `Companies Affiliated with Sellvinds Group` H3 stays where it is (above the company profile list, not above the lockup).
- Paste the lockup as the first child of the Section 1 `<section>`, with top spacing adjusted (e.g. `mb-12 flex flex-col items-center`) so it breathes above the H2.

## Out of scope
- No copy, logo asset, sizing, or typography changes.
- Sections 2, the closing paired lockup, the "72 years…" line, and the Leadership link are untouched.

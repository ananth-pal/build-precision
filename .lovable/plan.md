

## Add "The Pentagon Standard" values table to Working with Pentagon page

Add a new section to `src/pages/OurApproach.tsx` between the existing "How we engage" steps grid and the "Standards & Certifications" block.

### Section structure

**Heading:** "The Pentagon Standard: Our Value System" (centered, primary/red color, matching the page's existing typographic scale — `text-2xl` or `text-3xl`, semibold).

**Table:** 8 value pillars arranged as a 4-column × 2-row grid on desktop, collapsing to 2 columns on tablet and 1 column on mobile.

Each cell renders as a card with two parts:
- **Header bar** — red background (`bg-primary`), white text, centered pillar name
- **Body** — white background, bordered, containing:
  - A bold sub-headline (e.g. "Engineering for Efficiency")
  - A short descriptive paragraph (muted text)
  - An italic tagline (muted, smaller)

**Closing line below the grid:** centered, muted — "We are a team focused on long-term partnerships through scalability, predictability, and accountability."

### Content (8 pillars, exactly as in reference, with the two requested edits applied)

| Pillar (header) | Sub-headline | Body | Tagline |
|---|---|---|---|
| Design-to-Deployment (DFM) Support | Engineering for Efficiency | From legacy drawings to production in months, we provide early manufacturability feedback. | *We bridge the gap between design and production.* |
| Capacity-Ahead Investment | Ready to Scale | We invest in machinery and infrastructure before demand increases. | *Your growth is never bottlenecked.* |
| Systemic Traceability | Accountability You Can Trust | Every assembly has serial tracking with full audit trail. | *From raw material to final validation.* |
| Continuous Improvement (Kaizen) | Evolution as Standard | Continuous learning, waste reduction, and process improvement. | *We refine processes constantly.* |
| High-mix Specialisation | Agility for Complexity | Managing 100+ product types with precision. | *We thrive in complexity.* |
| Long-Term Partnerships | Extension of Your Factory | Aligned with your long-term growth plans. | *We become strategic partners.* |
| Supply Chain Resilience | Zero Disruption | Strong vendor network. | *Ensuring timely delivery always.* |
| Proven Reliability | Decades of Performance | 65-year legacy of the Sellvinds Group in delivering critical assemblies and components. | *Trusted by global brands.* |

**Edits applied vs. uploaded reference:**
1. Proven Reliability body changed to "65-year legacy of the Sellvinds Group in delivering critical assemblies and components."
2. Supply Chain Resilience body — "with Kanban system" removed.

### Styling

- Reuse existing tokens: `bg-primary` / `text-primary-foreground` for headers, `border-border`, `bg-card`, `text-muted-foreground`. No new colors.
- Card borders unify into a single bordered table look on desktop using a wrapping container with `border border-border rounded-lg overflow-hidden` and grid gap of `gap-px bg-border` so internal hairlines show through (matches the reference table appearance).
- Section uses a top divider (`border-t border-border pt-8`) to separate from the steps grid above, mirroring existing section dividers on the page.

### Untouched
- Hero, How we engage steps, Standards & Certifications, Memberships, ESG, header, footer.
- All other pages and components.


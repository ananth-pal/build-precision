

## Problem

The Assembly page content is well-written but visually underweight:
- Card headings use `text-base` — too small to establish hierarchy
- Body text uses `text-sm text-muted-foreground` — reads as fine print rather than primary content
- Cards have minimal border styling with no visual distinction between sections
- The conclusion block blends in rather than standing out
- Overall the page feels like a footnote rather than a capability showcase

## Plan

**1. Strengthen typography hierarchy**
- Card headings: `text-base` → `text-lg font-semibold` with stronger foreground color
- Body text: `text-sm text-muted-foreground` → `text-base text-muted-foreground` for comfortable reading
- Conclusion closing statement: bump to `text-base font-semibold`

**2. Add section headers above card groups**
- Add a light section label above each card group (e.g., no new copy — just subtle visual grouping via slightly more spacing or a thin separator)

**3. Improve card presence**
- Add subtle shadow: `shadow-sm` on cards for lift
- Increase padding: `p-6` → `p-8` for breathing room
- Widen container: `max-w-5xl` → `max-w-6xl` to use more page width

**4. Elevate the conclusion block**
- Use a left border accent (`border-l-4 border-primary`) instead of just `bg-secondary` to make it feel like a confident closing statement

**Files changed:** `src/pages/CapAssembly.tsx` only


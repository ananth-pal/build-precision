
# Group milestones — left-aligned rail + Pentagon jump-link

Scope: V2 layout of `src/pages/HeritageV3.tsx`, "Group milestones" section only. Pentagon's milestones (Section 2) is untouched apart from receiving an `id` anchor.

## Changes

### 1. Convert "Group milestones" to a single left-aligned rail
Replace the zig-zag `EntryRow` usage (currently shared with Pentagon's milestones) with a dedicated, simpler component used only here:

- One vertical rail on the left, with a small dot per entry.
- Each row: date label on top in brand red, body paragraph below in muted text.
- All entries stack down a single column on every breakpoint (no alternating sides).
- Tighter vertical rhythm than the zig-zag so it reads as a quick index.

This visually differentiates "Group milestones" (compact index of the wider family) from "Pentagon's milestones" (richer zig-zag deep-dive) below.

### 2. Highlight the Pentagon (1970s) entry as a jump-link
The Pentagon entry inside the rail becomes the visual "you are here / continue here" anchor:

- Faint brand-tinted background and a slightly thicker left border on that row.
- Body text rewritten to end with an inline link: "See Pentagon's full timeline ↓".
- Whole row is a `<button>`/`<a>` that smooth-scrolls to Section 2.
- Hover: background deepens slightly, arrow nudges down.

### 3. Anchor target
Add `id="pentagon-milestones"` to the Section 2 wrapper (and `scroll-margin-top` so the sticky header doesn't cover the heading on jump). No copy or layout change to Section 2 itself.

## Out of scope
- V1 and V3 layouts.
- Pentagon's milestones content, ordering, or zig-zag styling.
- Logos lockup, intro copy, company profiles, footer lockup.

## Technical notes
- New small component (e.g. `GroupMilestoneRow`) lives in `HeritageV3.tsx` next to `EntryRow`; `EntryRow` stays for Section 2.
- Smooth scroll via `element.scrollIntoView({ behavior: "smooth", block: "start" })`; respect `prefers-reduced-motion` by falling back to instant jump.
- Use existing semantic tokens (`text-primary`, `bg-primary/5`, `border-primary/40`, `text-muted-foreground`) — no hardcoded colors.

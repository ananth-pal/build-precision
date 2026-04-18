

## Goal
Update the "Quality & Safety" card on the Machining capability page to show "Quality" with two reviewable content variants the user can toggle between via an icon near the title.

## Approach

**Single card, two variants, toggle icon near title.** A small icon button (e.g., `Eye` or `RefreshCw` from lucide-react) sits next to the "Quality" heading. Clicking it cycles between Version 1 (prose) and Version 2 (intro + table-opening trigger). A subtle label like "v1 / v2" appears next to the icon so reviewers know which version they're seeing.

### Version 1 — Prose
Renders the full paragraph as written, in the same `text-base text-muted-foreground leading-relaxed` style used elsewhere on the page.

### Version 2 — Intro + Table Popup
Renders the short intro line, then a button "View quality details" that opens a Dialog (shadcn `dialog.tsx`, already in the project). The dialog contains the 6-row table:

| Item | Detail |
|---|---|
| Calibration | Traceable to national standards, performed in-house |
| Machine tool maintenance | In-house; machines stripped and rebuilt as needed |
| Drawing control | Revision-controlled through a PLM system |
| Material traceability | Incoming inspection through dispatch; outside-processed items re-inspected on return |
| Reports | First article, dimensional, and process records produced as the job requires |
| Non-conformances | Disclosed to the customer, contained, and closed with corrective action |

Table styled with shadcn `table.tsx` (also already in the project), matching the minimal aesthetic — thin row dividers, no heavy borders.

## Implementation

**File changed:** `src/pages/CapMachining.tsx` only.

1. Add `useState` for `qualityVersion` (`1 | 2`).
2. Replace the existing "Quality & Safety" card block with a new card that:
   - Renders title "Quality" + small toggle icon button (`aria-label="Toggle version"`) + `v1`/`v2` indicator.
   - Conditionally renders v1 prose or v2 intro + Dialog trigger.
3. Import `Dialog`, `DialogContent`, `DialogHeader`, `DialogTitle`, `DialogTrigger` from `@/components/ui/dialog`.
4. Import `Table`, `TableBody`, `TableCell`, `TableRow` from `@/components/ui/table`.
5. Import a toggle icon (`RefreshCw` from `lucide-react`).

## Notes
- This is a review-mode pattern — the toggle is intentionally lightweight, not a polished feature. Once the user picks a winner, the toggle and unused variant get removed.
- No new files, no routes, no new dependencies.


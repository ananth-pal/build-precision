# Heritage page updates

All changes confined to `src/pages/HeritageV3.tsx`.

## 1. Make v2 the default (and remove toggle)
- Delete the `useState<"v1" | "v2">` and the temporary v1/v2 toggle UI block.
- Delete the now-unused `groupMilestonesV1` data and the v1 branches in Section 1 and the eras render.
- Use `founderLineage`, `groupCompanies`, and `erasV2` directly.
- Keep the v2 closing sentence ("…from the company's founding to today.").

## 2. Rename the companies section
- Change the `Group companies` heading to **Companies Affiliated with Sellvinds Group**.

## 3. Add large Sellvinds logo at top-right of the page
- In Section 1, wrap the existing intro (small Sellvinds mark + heading + paragraphs) and a new large Sellvinds logo in a two-column layout on `md+`:
  - Left column: current content (small mark, h2, intro paragraphs) — unchanged.
  - Right column: large `sellvindsLogo` image (e.g. `h-40 md:h-56 lg:h-64 w-auto`), right-aligned, vertically centered with the heading block.
- On mobile the logo stacks above the heading (or is hidden if it crowds — default: stacks above).
- Section structure below the intro (founder lineage, companies, eras) stays full-width as today.

## 4. CAFOMA Engine Components
- Remove the `[DRAFT — CONFIRM: …]` wrapper from the `groupCompanies` entry; keep the prose as written (founding year 2007, SIPCOT Industrial Park, Irungatukottai).

## Technical notes
- Remove `useState` import if no longer used.
- Keep `EntryRow`, `MiniEntryRow`, `CompanyRow`, `eras` (still used via `erasV2`), and the closing Sellvinds+Pentagon lockup unchanged.
- No changes to `Heritage.tsx`, routing, or other files.

# Heritage page — remove decorative borders

File: `src/pages/HeritageV3.tsx`. Scope limited to the affiliated-companies block in Section 1.

## Changes

1. **`CompanyRow`** — drop the left border + padding wrapper.
   - Before: `<div className="border-l-2 border-border pl-5">`
   - After: `<div>` (no border, no `pl-5`)

2. **Family-of-companies lockup** — drop the framing box.
   - Before: `<div className="mt-6 border border-border rounded-md p-6 md:p-8 flex flex-col items-center">`
   - After: `<div className="mt-6 flex flex-col items-center">` (keep internal layout, divider, and logo sizes unchanged)

## Out of scope
- No copy changes.
- Logo sizes, the Sellvinds anchor, the thin divider between Sellvinds and member marks, and the company-profile typography all stay as-is.
- No other sections touched.

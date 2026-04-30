
## Add v1/v2 version switcher to Heritage pages

The v1 and v2 pages already exist at `/about/heritage-v1` and `/about/heritage-v2`, but there's no way to discover them from the UI. Add a small switcher bar at the top of all three Heritage pages so you can toggle between Current / v1 / v2.

### What you'll see

Directly under the page hero on all three Heritage pages:

```
┌──────────────────────────────────────────────────────────────────┐
│ Heritage version:  [Current]  [ v1 ]  [ v2 ]                     │
└──────────────────────────────────────────────────────────────────┘
```

The active version is highlighted in brand red (primary). Clicking v1 / v2 / Current swaps to that route. Same height bar across all three pages so the layout doesn't jump.

### Files

- **New** `src/components/HeritageVersionSwitcher.tsx` — small bar with three `NavLink` buttons; the active one styles itself via NavLink's `isActive`.
- **Edited** `src/pages/Heritage.tsx` — import and render `<HeritageVersionSwitcher />` immediately after `<PageHero ... />`.
- **Edited** `src/pages/HeritageV1.tsx` — same insertion.
- **Edited** `src/pages/HeritageV2.tsx` — same insertion.

### Scope

- Switcher visible only on Heritage routes (it's a per-page component, not added to the global header).
- No nav-menu changes; main site nav still points to `/about/heritage` only.
- Once you pick a final version, the switcher and the unused page can be removed in one cleanup pass.

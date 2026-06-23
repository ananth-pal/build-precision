## Change
In `src/pages/HeritageV3.tsx`, restyle the transitional sentence "Pentagon's own story unfolds alongside this wider group history…" so it clearly marks the hinge between the Sellvinds Group section and Pentagon's heritage timeline.

## Treatment
Replace the current plain paragraph (line 214–216) with a small composite block:

- A short 40px-wide red rule (`h-px w-10 bg-primary`) above the text — matches the existing accent used in `PageHero`.
- The sentence rendered at `text-lg md:text-xl`, `font-semibold`, `text-foreground`, with relaxed leading.
- Keep the existing `mt-12` top spacing; add `mb-4` between the rule and the text.

No copy changes, no layout changes elsewhere, no new dependencies.

## Out of scope
- Section 2 heading and Pentagon logo stay as-is.
- Group milestones timeline untouched.


## Strengthen the "Expanding into" line on the homepage

The current line on the Markets we serve section reads as italic + muted, which makes it look like a soft afterthought rather than a forward-looking statement. I'll restructure it as a distinct callout block so it carries visual weight while staying minimal and on-brand.

### Change

In `src/pages/Index.tsx` (around line 177), replace the single italic `<p>` with a bordered callout:

- A left border accent in `border-primary` (4px) on a subtle `bg-muted/40` background, padded, with rounded corners on the right side.
- A small uppercase eyebrow label "Expanding into" in `text-xs uppercase tracking-wider text-primary font-semibold`.
- The list of sectors as bold inline tags or a comma-separated bold phrase: **Medical · Aerospace · Defence · Robotics** in `text-foreground font-semibold`.
- The supporting sentence below in normal `text-sm text-muted-foreground` (not italic) explaining how Pentagon's existing capabilities transfer.

### Result (visual structure)

```text
┌▌ EXPANDING INTO
│
│  Medical · Aerospace · Defence · Robotics
│
│  Pentagon's precision machining, gear cutting, traceability,
│  and in-house tooling transfer directly to these sectors as
│  qualified programmes emerge.
└
```

### Styling tokens used
- `border-l-4 border-primary` accent
- `bg-muted/40` subtle fill
- `rounded-r-md p-5`
- `text-foreground font-semibold` for sector list (no italics)
- `text-muted-foreground` for the explanatory line (no italics)

### Untouched
- Surrounding markets grid, "See our portfolio →" link, all other sections and pages.


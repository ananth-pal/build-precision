# Standardise page widths

The About section is narrower than every other page. Bring it in line.

## Changes

**`src/pages/About.tsx`** (line 15)
- `<div className="max-w-4xl mx-auto space-y-6">` → `<div className="max-w-7xl mx-auto space-y-6">`

**`src/pages/HeritageV3.tsx`** (line 183)
- `<div className="max-w-5xl mx-auto">` → `<div className="max-w-7xl mx-auto">`

## Notes

- No other pages need changes — Capabilities, Technologies, WhatWeMake, Leadership, Contact, OurApproach, and Index all already use `max-w-7xl`.
- Inside Heritage, the prose blocks already have their own narrower caps (`max-w-3xl`, `max-w-2xl`) on the text sections, the timeline rail, and the closing tagline, so widening the outer container won't stretch the reading column. The timeline's centred rail (`md:left-1/2`) will simply sit on the wider canvas.
- About's content is short and mostly cards in a 2-col grid; widening the wrapper lets the grid breathe to match Leadership's layout.
- No new component abstraction introduced — keeping the change minimal and reversible. If page-width drift becomes a recurring issue later, a shared `<PageContainer>` would be the next step.

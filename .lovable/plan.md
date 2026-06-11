Fix the "Who We Are" section on the Home page so paragraph spacing matches the rest of the page and the Zoller photo no longer breaks up the text flow.

**Problems**
1. The section container uses `space-y-10` (40px), while sibling sections like "What makes us different" use `space-y-6` (24px). Gaps look inconsistent on desktop.
2. The Zoller photo sits inside a 3-column grid alongside paragraph 1 only. Paragraphs 2 and 3 then drop to full width, so the image visually interrupts the paragraph flow and leaves the text feeling broken into two blocks.

**Fix (in `src/pages/Index.tsx`, "Who We Are" section only)**
- Change the outer container from `space-y-10` to `space-y-6` to match other sections.
- Restructure the layout so all three paragraphs read as one continuous column on the left, with the Zoller image as a single sibling column on the right that spans the full text height:
  - Wrap the section content in a `grid lg:grid-cols-3 gap-8 lg:gap-12 items-start` layout.
  - Left column (`lg:col-span-2`): the heading, all three paragraphs (stacked with `space-y-6`), and the "Learn more about us →" link.
  - Right column: the existing Zoller `img` in its bordered wrapper, made to fill the column height (e.g. `h-full` with `object-cover`), so it sits beside the full paragraph stack instead of only paragraph 1.
- On mobile (`<lg`), the grid collapses to a single column and the image appears after the paragraphs, preserving readability.

**Result**
Paragraph rhythm in "Who We Are" matches the `space-y-6` cadence used elsewhere on the Home page, and the Zoller photo sits alongside the full paragraph stack instead of splitting it.
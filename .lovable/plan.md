# Fit home hero to phone screen

Yes, this is possible. Right now the hero uses `min-h-[70vh]` with `py-24` padding. On a phone, the copy block pushes the section taller than the visible viewport, so the image extends well below the fold (as seen in your screenshot).

## Change

In `src/pages/Index.tsx` (hero `<section>` at line 77 and its inner container at line 117):

- Replace `min-h-[70vh]` with a viewport-locked height on mobile that relaxes on larger screens:
  - `h-[100svh] sm:h-auto sm:min-h-[70vh]`
  - `100svh` = small viewport height (accounts for the mobile browser URL/toolbar so nothing gets cut off).
- Reduce vertical padding on mobile so headline + paragraph + buttons fit within one screen:
  - `py-12 sm:py-24` on the inner container.
- Slightly tighten the mobile paragraph size (`text-base sm:text-lg`) so the block comfortably fits typical phone heights (iPhone SE included).

Result on phones: the hero image fills exactly one screen, the two headings + buttons sit over it, and the rest of the page begins right at the fold. Desktop/tablet layout is unchanged.

## Notes

- No image assets change; only the section sizing.
- `object-cover` on the image means the photo will be cropped (not letterboxed) to fill the phone's portrait aspect. The `backgroundPosition` set per slide continues to control what stays visible.
- If you'd rather the image is never cropped on phones (letterboxed with brand background), that's a different approach — say the word and I'll swap in that variant instead.

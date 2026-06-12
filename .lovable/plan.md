# Home banner: full media rotation

## Goal
Show every Means of Production / Capabilities image plus the `drill-loop.mp4` video in the home hero rotation so we can preview how they read. Reposition each so the key technical detail stays visible behind the headline + overlay.

## Slides to include (7 total)
1. `technologies/gear-hobber.jpg` — focal: cutter / workpiece engagement
2. `technologies/gear-grinder.jpg` — focal: grinding wheel on gear
3. `technologies/zeiss-cmm.jpg` — focal: probe head over part
4. `technologies/zoller-presetter.jpg` — focal: tool in spindle
5. `technologies/calibration-probe.jpg` — focal: probe tip
6. `capabilities/gear-stock.jpg` — focal: gear teeth stack
7. `technologies/drill-loop.mp4` — muted, autoplay, loop, playsInline (rendered as `<video>` instead of background-image)

Portfolio product shots are excluded per your direction.

## Changes (single file: `src/pages/Index.tsx`)
- Replace the `heroSlides` string[] with a typed array:
  ```ts
  type Slide = { src: string; kind: "image" | "video"; pos: string; label: string };
  ```
  `pos` is a CSS `object-position` / `background-position` value (e.g. `"center 35%"`, `"60% center"`). Defaults to `"center"` where the key detail is already centered; I'll set bespoke values for hobber, grinder, presetter, and gear-stock where the subject sits off-center.
- Render each slide:
  - Images: keep current `<div>` with `backgroundImage` + `backgroundPosition: slide.pos`.
  - Video: render `<video src={src} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: pos, opacity }} />`.
- Bump rotation interval from 5s → 6s so the video has time to read.
- Leave the dark gradient overlay, headline, CTAs, and everything below the hero untouched.

## Verification
- Confirm build passes.
- Open `/` in preview at the current 740px viewport and at 1366px, watch one full rotation, and screenshot mid-cycle to confirm each focal point sits behind/around the headline rather than being cropped out.
- If any focal point still reads poorly, tweak that slide's `pos` value only (no other changes).

## Out of scope
- Portfolio product shots.
- Any change to copy, layout, the V1/V2 "Who We Are" toggle, or sections below the hero.

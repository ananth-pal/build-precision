## Goal
Export the About page's hero image as a downloadable PNG file the user can grab from `/mnt/documents/`.

## Source image
`src/pages/About.tsx` uses `src/assets/plant-exterior.jpg` (bundled JPEG, not a CDN asset).

## Steps
1. Convert `src/assets/plant-exterior.jpg` → `/mnt/documents/plant-exterior.png` using ImageMagick (`magick convert`) via the sandbox shell.
2. Emit a `<presentation-artifact>` tag so the user can preview/download it directly from chat.

No code changes to the project.

## Note
The file is a JPEG today, so converting to PNG just re-encodes it — quality won't improve beyond the original JPEG. If you'd rather have the original `.jpg`, say the word and I'll deliver that instead.
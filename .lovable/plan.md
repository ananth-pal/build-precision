# Fix invisible header logo

## Diagnosis
`src/components/SiteHeader.tsx` imports `@/assets/logo.jpg` correctly and renders it at `h-8 lg:h-10`. The file exists and is a valid JPEG, so the `<img>` *is* rendering — but the current `logo.jpg` is the dark-on-black variant of the Pentagon mark. Against the header's near-white background it reads as a faint dark rectangle with no legible text, which is why it looks like "not appearing."

The version just attached (`Pentagon Logo CDR 18.jpg`) is the correct red wordmark on a white background, which will read properly on the header.

## Fix
Replace the asset, keep the import path stable so no component code changes.

1. Copy the uploaded file from `/mnt/user-uploads/Pentagon_Logo_CDR_18.jpg` over `src/assets/logo.jpg` (same path, same `.jpg` extension — `SiteHeader.tsx` and any other importers keep working untouched).
2. No code changes to `SiteHeader.tsx`. `alt`, sizing, and link target stay as-is.
3. Verify in preview that the red wordmark renders cleanly at `h-8` / `h-10`.

## Notes / non-goals
- Not migrating to a CDN `.asset.json` pointer in this change — matching the existing in-repo `.jpg` convention to keep the diff minimal. Can do that separately if you want.
- Not adjusting header height, padding, or logo sizing. If the new wordmark feels too wide once swapped, we can tune `h-8 lg:h-10` in a follow-up.
- Not touching the favicon or any other logo usages elsewhere on the site.

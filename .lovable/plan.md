## Why the WhatsApp preview is wrong

Two independent problems in `index.html`:

1. **Stale preview image.** `og:image` and `twitter:image` (lines 16 and 22) both point at an old auto-generated screenshot of the temporary `id-preview-...lovable.app` URL, captured before recent updates. WhatsApp scraped that once and cached it. The `LocalBusiness` JSON-LD `image` field (line 61) points at the same stale URL.
2. **Lovable icon in the preview.** The site still ships `public/favicon.ico` (the default Lovable mark). WhatsApp overlays the site's favicon on the link card, which is why the Lovable "L" appears.

Separately, `twitter:site` is set to `@Lovable` — not correct for this project.

## Plan

### 1. Let Lovable auto-inject a fresh homepage screenshot as the preview

The user asked for "the home page as it is" as the preview. Lovable's hosting automatically injects a fresh screenshot of the published page as `og:image` at serve time when the page has none. The right move is to remove the hardcoded stale URL so hosting can inject the current homepage.

- In `index.html`, delete the stale `og:image` tag (line 16) and the stale `twitter:image` tag (line 22).
- In the `LocalBusiness` JSON-LD block, remove the `"image": "..."` field (line 61) since it points at the same stale URL.
- Remove `<meta name="twitter:site" content="@Lovable" />` (line 19).

### 2. Replace the Lovable favicon with the Pentagon logo

The Pentagon logo already exists as a Lovable asset (`src/assets/brand/pentagon-logo.png.asset.json`). Use it as the site favicon.

- Download the Pentagon logo from its CDN URL and write it to `public/favicon.png`.
- In `index.html`, replace `<link rel="icon" type="image/x-icon" href="/favicon.ico" />` (line 24) with `<link rel="icon" type="image/png" href="/favicon.png" />`.
- Delete `public/favicon.ico` (browsers auto-request `/favicon.ico` and would otherwise keep serving the old Lovable icon).

Note: the Pentagon logo is a wide horizontal wordmark. It will render small in the WhatsApp corner circle. If it looks cramped after publishing, we can generate a square "P" monogram derived from the logo as a follow-up — flagging this so it isn't a surprise.

### 3. Publish, then force-refresh WhatsApp's cache

Changes only take effect after re-publishing, and even then WhatsApp will keep showing the cached old preview for ~30 days unless the cache is busted. WhatsApp's scraper is `facebookexternalhit`, so Facebook's Sharing Debugger is the right tool.

After publishing:
1. Open `https://developers.facebook.com/tools/debug/`.
2. Paste `https://pentagonmachines.in/` and click **Debug**.
3. Click **Scrape Again** — this forces `facebookexternalhit` (and by extension WhatsApp) to re-crawl the page.
4. In WhatsApp, delete the old chat draft/message with the link and re-type the URL so it re-fetches the preview.

LinkedIn caches separately — use `https://www.linkedin.com/post-inspector/` and paste the same URL if the preview is also stale there.

## Files touched

- `index.html` — remove stale `og:image`, `twitter:image`, `twitter:site`, and the JSON-LD `image` field; point favicon link to `/favicon.png`.
- `public/favicon.png` — new, copied from the Pentagon logo asset.
- `public/favicon.ico` — deleted.

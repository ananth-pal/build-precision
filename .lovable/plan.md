# Analytics & Visitor Tracking — Implementation Plan (revised)

## Scope at launch
GA4 (with SPA route tracking), Microsoft Clarity, LinkedIn Insight Tag, cookie consent gate, Privacy Policy page, and a small event helper wired into all lead-intent interactions site-wide. **No** RB2B / company reveal. **No** custom scroll-depth. **No** CRM.

---

## Files created

### `src/lib/analytics.ts` — single source of truth
- `CONFIG` object with three bracketed placeholder IDs at the top of the file, clearly commented:
  ```
  GA4_MEASUREMENT_ID = "[GA4_MEASUREMENT_ID]"
  CLARITY_PROJECT_ID  = "[CLARITY_PROJECT_ID]"
  LINKEDIN_PARTNER_ID = "[LINKEDIN_PARTNER_ID]"
  ```
- `hasConsent()` — reads consent state from vanilla-cookieconsent.
- `loadTrackers()` — idempotent. Injects the three vendor scripts into `<head>` only when consent is granted and IDs are non-placeholder. Called on consent grant and on app boot if consent already stored.
- `unloadTrackers()` — no-op stub for reject path; scripts simply never load.
- `trackPageView(path)` — fires GA4 `config` with `page_path` + `page_location` + `page_title`; pings Clarity `set('page', path)`; re-pushes LinkedIn `_bizo_data_partner_ids` no-op (Insight Tag auto-picks new URL on next event).
- `trackEvent(name, params?)` — sends to GA4 `gtag('event', ...)`. Silent no-op if consent absent or gtag not loaded.
- GA4 snippet is configured with `send_page_view: false` so route changes are the only page_view source (deterministic, no double-count).

### `src/components/RouteTracker.tsx`
Mounted inside `<BrowserRouter>` in `App.tsx`. Uses `useLocation()` to call `trackPageView(pathname + search)` on every route change (including initial mount).

### `src/components/CookieConsent.tsx`
- Wraps `vanilla-cookieconsent` (added via `bun add vanilla-cookieconsent`).
- Two categories: **necessary** (always on) and **analytics** (GA4 + Clarity + LinkedIn).
- Minimal styling matching site aesthetic: white surface, near-black text, red accent CTA, no shadows/gradients.
- On accept → calls `loadTrackers()` then `trackPageView(currentPath)` so the first page_view lands.
- Mounted once at app root.

### `src/pages/Privacy.tsx` + route `/privacy` in `App.tsx`
Sections:
1. Who we are / controller contact (enquiries@sellvindsgroup.com for data requests).
2. What we collect via forms (Contact, Machine List Request, Careers) and where it goes (email only, no CRM).
3. **Analytics tools used** — names GA4, Microsoft Clarity, LinkedIn Insight Tag; one-line purpose each; consent-gated statement.
4. Cookies — necessary vs analytics categories.
5. Your rights (access, deletion, opt-out via cookie banner reset link).
6. Retention & contact for data requests.

Written in the site's minimal editorial voice, no legal boilerplate padding. App-owner maintained qualifier included.

### `src/components/SiteFooter.tsx` — edit
Add a `Privacy` link next to the existing quick links.

---

## Files edited to wire events

Import `trackEvent` and add a single call at each interaction point. No behaviour change.

| File | Event |
|---|---|
| `src/pages/Contact.tsx` (form submit handler) | `contact_form_submit` |
| `src/components/RequestMachineListDialog.tsx` (successful submit) | `machine_list_request` |
| `src/pages/Careers.tsx` (submit handler) | `careers_apply` |
| `src/pages/About.tsx` + `src/components/SiteFooter.tsx` (brochure `<a download>`) | `brochure_download` |

### Site-wide `mailto:` / `tel:` tracking
Rather than hunting every anchor, add a single delegated listener in `RouteTracker.tsx` (or a dedicated `LinkTracker` mounted alongside it): one `document.addEventListener('click', ...)` that inspects `event.target.closest('a')`. If `href` starts with `mailto:` → `trackEvent('email_click', { href })`; if `tel:` → `trackEvent('phone_click', { href })`. Covers Contact page, footer, and any future page automatically.

### `src/App.tsx` — edit
- Mount `<RouteTracker />` inside `<BrowserRouter>`.
- Mount `<CookieConsent />` at the app root.
- Add `/privacy` route.

### `index.html` — edit
No inline analytics snippets. Only add a `<meta>` for consent UI theming if needed. Scripts are all injected at runtime by `loadTrackers()` — this is what enforces the "nothing loads before consent" guarantee.

---

## Notification routing
- No email address is hardcoded for notifications anywhere in code. Grep confirms only `enquiries@sellvindsgroup.com` appears, and only as the lead destination in Contact/Careers/machine-list forms and footer — all of which stay unchanged.
- Owner action: configure GA4, Clarity, LinkedIn account-level alerts to `ananth@sellvindsgroup.com`. Documented in the closing message, not in code.

---

## Verification (part of the task)
After implementation, run a headless Playwright pass against the local dev server:
1. Load `/` with consent unaccepted → assert no request to `googletagmanager.com`, `clarity.ms`, or `snap.licdn.com` in the network log.
2. Accept consent → assert all three script hosts are requested.
3. Navigate `/` → `/what-we-make` → `/about` → assert three distinct `collect?...&en=page_view` calls to GA4 with matching `dl`/`dp` paths and no duplicates.
4. Click a `mailto:` link → assert an `email_click` event hit.
5. Screenshot the consent banner for visual sign-off.

If `[GA4_MEASUREMENT_ID]` etc. are still placeholders when verification runs, the network assertions for the vendor endpoints will be skipped with a printed note; consent gating and route-change firing logic are still verified via the in-memory helper's own logging.

---

## Dependencies
- `bun add vanilla-cookieconsent` (small, no React wrapper).
- No `react-ga4`, no `@microsoft/clarity` wrapper — plain script injection keeps the bundle lean and matches the "no heavy wrappers" constraint.

---

## Explicitly NOT in this change
- RB2B / Leadfeeder / Albacross / any IP-reveal script.
- Custom scroll-depth, heatmap, or session-replay code (Clarity provides these).
- LinkedIn conversion events or campaign config beyond the base Insight Tag.
- Any CRM integration or automated email sequences.
- Any change to form fields, form behaviour, or lead-email routing.
- Any visual/layout change beyond the consent banner and the footer Privacy link.

---

## Owner actions after I ship
1. Create GA4 property → paste Measurement ID into `src/lib/analytics.ts` `CONFIG`.
2. Create Clarity project → paste Project ID.
3. Create LinkedIn Insight Tag → paste Partner ID.
4. Set account-level notification email to `ananth@sellvindsgroup.com` in all three tools.
5. (Separate task, already tracked) Search Console + Bing Webmaster verification post-custom-domain.

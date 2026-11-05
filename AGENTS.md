# Project rules

- The app runs on TanStack Start (file routes in `src/routes/`, root layout and site-wide head tags in `src/routes/__root.tsx`); never reintroduce `index.html`, `src/main.tsx` or React Router — the deploy pipeline is TanStack-only.
- Pages import routing helpers from `@/lib/router-compat` (react-router-style API over TanStack) so existing call sites stay unchanged.
- Per-page titles/descriptions/JSON-LD are set through the `SEO` component (react-helmet-async, hoisted by React 19 during server rendering); keep root `head()` free of page-specific title/description to avoid duplicates.
- The machine-list/brochure form posts through the `submitMachineListRequest` server function; the email pipeline functions stay on the backend because their URLs are called by email links, webhooks and the scheduled queue.

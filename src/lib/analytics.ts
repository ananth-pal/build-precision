/**
 * Analytics helper — GA4, Microsoft Clarity, LinkedIn Insight Tag.
 *
 * All scripts are injected at runtime by loadTrackers(), and only after the
 * visitor accepts the "analytics" category in the cookie consent banner.
 * Nothing tracking-related is present in index.html.
 *
 * Owner: replace the three placeholder IDs below after creating the accounts.
 * These are the ONLY place IDs should be configured.
 */

export const CONFIG = {
  GA4_MEASUREMENT_ID: "[GA4_MEASUREMENT_ID]", // e.g. "G-XXXXXXXXXX"
  CLARITY_PROJECT_ID: "[CLARITY_PROJECT_ID]", // e.g. "abcd1234ef"
  LINKEDIN_PARTNER_ID: "[LINKEDIN_PARTNER_ID]", // e.g. "1234567"
};

const isConfigured = (v: string) => !!v && !v.startsWith("[");

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
    _linkedin_partner_id?: string;
    _linkedin_data_partner_ids?: string[];
    lintrk?: (...args: unknown[]) => void;
  }
}

let loaded = false;

export function hasConsent(): boolean {
  try {
    // vanilla-cookieconsent v3 exposes acceptedCategory globally via CookieConsent
    // We check a lightweight localStorage marker we set on accept to avoid
    // coupling to the library shape here.
    return localStorage.getItem("pentagon_analytics_consent") === "granted";
  } catch {
    return false;
  }
}

export function loadTrackers() {
  if (loaded) return;
  if (!hasConsent()) return;
  loaded = true;

  // ---- GA4 ----
  if (isConfigured(CONFIG.GA4_MEASUREMENT_ID)) {
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${CONFIG.GA4_MEASUREMENT_ID}`;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };
    window.gtag("js", new Date());
    // send_page_view: false — RouteTracker owns page_view firing.
    window.gtag("config", CONFIG.GA4_MEASUREMENT_ID, { send_page_view: false });
  }

  // ---- Microsoft Clarity ----
  if (isConfigured(CONFIG.CLARITY_PROJECT_ID)) {
    (function (c: Window, l: Document, a: string, r: string, i: string) {
      (c as any)[a] =
        (c as any)[a] ||
        function () {
          ((c as any)[a].q = (c as any)[a].q || []).push(arguments);
        };
      const t = l.createElement(r) as HTMLScriptElement;
      t.async = true;
      t.src = "https://www.clarity.ms/tag/" + i;
      const y = l.getElementsByTagName(r)[0];
      y.parentNode!.insertBefore(t, y);
    })(window, document, "clarity", "script", CONFIG.CLARITY_PROJECT_ID);
  }

  // ---- LinkedIn Insight Tag ----
  if (isConfigured(CONFIG.LINKEDIN_PARTNER_ID)) {
    window._linkedin_partner_id = CONFIG.LINKEDIN_PARTNER_ID;
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(CONFIG.LINKEDIN_PARTNER_ID);
    (function (l: any) {
      if (!l) {
        window.lintrk = function (a: unknown, b: unknown) {
          (window.lintrk as any).q.push([a, b]);
        };
        (window.lintrk as any).q = [];
      }
      const s = document.getElementsByTagName("script")[0];
      const b = document.createElement("script");
      b.type = "text/javascript";
      b.async = true;
      b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
      s.parentNode!.insertBefore(b, s);
    })(window.lintrk);
  }
}

export function trackPageView(path: string) {
  if (!hasConsent()) return;
  if (window.gtag && isConfigured(CONFIG.GA4_MEASUREMENT_ID)) {
    window.gtag("event", "page_view", {
      page_path: path,
      page_location: window.location.origin + path,
      page_title: document.title,
      send_to: CONFIG.GA4_MEASUREMENT_ID,
    });
  }
  if (window.clarity) {
    try {
      window.clarity("set", "page", path);
    } catch {
      /* noop */
    }
  }
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (!hasConsent()) return;
  if (window.gtag) window.gtag("event", name, params);
}

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView, trackEvent } from "@/lib/analytics";

/**
 * Fires a GA4 page_view on every route change (including initial mount)
 * and delegates mailto:/tel: click tracking site-wide.
 */
const RouteTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname + location.search;
    // Defer slightly so document.title reflects the new page.
    const id = window.setTimeout(() => trackPageView(path), 0);
    return () => window.clearTimeout(id);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";
      if (href.startsWith("mailto:")) {
        trackEvent("email_click", { href });
      } else if (href.startsWith("tel:")) {
        trackEvent("phone_click", { href });
      }
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
};

export default RouteTracker;

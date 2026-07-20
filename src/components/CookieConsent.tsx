import { useEffect } from "react";
import * as CC from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import { loadTrackers, trackPageView } from "@/lib/analytics";

/**
 * Cookie consent banner. Two categories: necessary (always) and analytics.
 * When the visitor accepts analytics, we set a localStorage marker and
 * inject GA4 / Clarity / LinkedIn Insight Tag scripts. Nothing tracking-
 * related loads before this point.
 */
const CookieConsent = () => {
  useEffect(() => {
    CC.run({
      guiOptions: {
        consentModal: { layout: "box", position: "bottom right" },
        preferencesModal: { layout: "box" },
      },
      categories: {
        necessary: { readOnly: true, enabled: true },
        analytics: {},
      },
      onFirstConsent: syncConsent,
      onChange: syncConsent,
      onConsent: syncConsent,
      language: {
        default: "en",
        translations: {
          en: {
            consentModal: {
              title: "Cookies",
              description:
                "We use essential cookies to run this site and, with your consent, analytics cookies (Google Analytics, Microsoft Clarity, LinkedIn Insight Tag) to understand usage. See our privacy policy for details.",
              acceptAllBtn: "Accept",
              acceptNecessaryBtn: "Reject",
              showPreferencesBtn: "Preferences",
              footer:
                '<a href="/privacy">Privacy policy</a>',
            },
            preferencesModal: {
              title: "Cookie preferences",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject all",
              savePreferencesBtn: "Save preferences",
              closeIconLabel: "Close",
              sections: [
                {
                  title: "Strictly necessary",
                  description:
                    "Required for the site to function. Cannot be disabled.",
                  linkedCategory: "necessary",
                },
                {
                  title: "Analytics",
                  description:
                    "Google Analytics 4, Microsoft Clarity, and the LinkedIn Insight Tag. Used to understand site usage and improve the site.",
                  linkedCategory: "analytics",
                },
              ],
            },
          },
        },
      },
    });

    function syncConsent() {
      const accepted = CC.acceptedCategory("analytics");
      if (accepted) {
        try {
          localStorage.setItem("pentagon_analytics_consent", "granted");
        } catch {
          /* noop */
        }
        loadTrackers();
        trackPageView(window.location.pathname + window.location.search);
      } else {
        try {
          localStorage.removeItem("pentagon_analytics_consent");
        } catch {
          /* noop */
        }
      }
    }
  }, []);

  return null;
};

export default CookieConsent;

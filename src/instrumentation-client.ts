import posthog from "posthog-js";

// Visits, country and city, and time on site, from PostHog. Cookieless, so no consent banner is needed.
// Off unless NEXT_PUBLIC_POSTHOG_KEY is set, and off on localhost so local work doesn't count as visits.
const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const local = ["localhost", "127.0.0.1", "[::1]"].includes(location.hostname);

if (key && !local) {
  try {
    posthog.init(key, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://eu.i.posthog.com",
      defaults: "2026-08-30",
      cookieless_mode: "always",
      autocapture: false,
      disable_session_recording: true,
    });
  } catch {}
}

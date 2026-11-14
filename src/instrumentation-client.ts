import posthog from "posthog-js";

// Visits, country and city, and time on site, from PostHog.
// Off on localhost so local work doesn't count as visits. The key is PostHog's public, write-only
// project token, which is meant to ship in client code; NEXT_PUBLIC_POSTHOG_KEY overrides it.
const key = process.env.NEXT_PUBLIC_POSTHOG_KEY || "phc_wwor4r7UUTRF3nsE3MYqsvB26EieLBQYxLSqJGHmdzdQ";
const local = ["localhost", "127.0.0.1", "[::1]"].includes(location.hostname);

if (key && !local) {
  try {
    posthog.init(key, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://eu.i.posthog.com",
      defaults: "2026-08-30",
      // In memory only: no cookies or storage, so no consent banner. (PostHog's cookieless mode would
      // drop the IP before GeoIP, losing country and city.) A reload or return visit counts as a new visitor.
      persistence: "memory",
      autocapture: false,
      disable_session_recording: true,
    });
  } catch {}
}

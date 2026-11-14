import posthog from "posthog-js";

// Sends a custom event to PostHog when it's running. In development it logs instead.
// `leaving` sends it with sendBeacon, so it still arrives when the page is closing.
export function track(event: string, props: Record<string, string | number>, leaving = false) {
  if (process.env.NODE_ENV !== "production") console.debug("[track]", event, props);
  if (!posthog.__loaded) return;
  posthog.capture(event, props, leaving ? { transport: "sendBeacon" } : undefined);
}

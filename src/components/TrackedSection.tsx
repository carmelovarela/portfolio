"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { track } from "@/lib/track";

// A project's section, timing how long it's on screen. It counts while the section crosses the
// middle of the viewport and the tab is visible. The time is sent as `section_time` when the
// visitor leaves or switches tab, so a long visit can send a few events for the same project.
export function TrackedSection({ project, label, children }: { project: string; label: string; children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let inView = false;
    let since = 0;
    let total = 0;

    const pause = () => {
      if (since) total += performance.now() - since;
      since = 0;
    };
    const resume = () => {
      if (inView && document.visibilityState === "visible" && !since) since = performance.now();
    };
    const flush = () => {
      pause();
      const seconds = Math.round(total / 1000);
      if (seconds >= 1) track("section_time", { project, seconds }, true);
      total = 0;
    };

    const io = new IntersectionObserver(([e]) => {
      inView = e.isIntersecting;
      if (inView) resume();
      else pause();
    }, { rootMargin: "-40% 0px -40% 0px" });
    io.observe(el);

    const onVis = () => {
      if (document.visibilityState === "hidden") flush();
      else resume();
    };
    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("pagehide", flush);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("pagehide", flush);
      flush();
    };
  }, [project]);

  return (
    <section ref={ref} className="proj-sec" aria-labelledby={label}>
      {children}
    </section>
  );
}

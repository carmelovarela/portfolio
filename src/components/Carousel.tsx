"use client";

import { useEffect, useRef, useState } from "react";
import type { Project } from "@/content/projects";
import { track } from "@/lib/track";
import { SlideTile } from "./SlideTile";

const reduceMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// The rail is full width with a side inset (scroll-padding) so the current slide sits centred.
const inset = (el: HTMLElement) => parseFloat(getComputedStyle(el).scrollPaddingLeft) || 0;

function Arrow({ dir }: { dir: "prev" | "next" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={dir === "prev" ? "M19 12H5M11 6l-6 6 6 6" : "M5 12h14M13 6l6 6-6 6"} />
    </svg>
  );
}

export function Carousel({ project }: { project: Project }) {
  const { slides, key, slug, title } = project;
  const [i, setI] = useState(0);
  const rail = useRef<HTMLDivElement>(null);
  const raf = useRef(0);

  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  // Record each slide the first time it's reached, and the end of the deck. Slide 1 is skipped
  // because every visitor starts on it; section_time covers whether they saw the project at all.
  const seen = useRef(new Set<number>());
  useEffect(() => {
    if (i === 0 || seen.current.has(i)) return;
    seen.current.add(i);
    track("slide_reached", { project: slug, slide: i + 1, of: slides.length });
    if (i === slides.length - 1) track("carousel_end", { project: slug });
  }, [i, slug, slides.length]);

  const go = (j: number) => {
    const el = rail.current;
    const child = el?.children[j] as HTMLElement | undefined;
    if (!el || !child) return;
    // The rail is position: relative, so offsetLeft is measured from the rail itself.
    el.scrollTo({ left: child.offsetLeft - inset(el), behavior: reduceMotion() ? "auto" : "smooth" });
    setI(j);
  };

  // Work out which slide is snapped into place after a swipe or trackpad scroll.
  const onScroll = () => {
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      const el = rail.current;
      if (!el) return;
      const pad = inset(el);
      let best = 0;
      let bd = Infinity;
      Array.from(el.children).forEach((c, n) => {
        const d = Math.abs((c as HTMLElement).offsetLeft - pad - el.scrollLeft);
        if (d < bd) {
          bd = d;
          best = n;
        }
      });
      setI(Math.min(best, slides.length - 1));
    });
  };

  const cur = slides[i];
  const n = slides.length;

  return (
    <div className="deck">
      <div className="rail" ref={rail} tabIndex={0} role="region" aria-label={`${title} slides`} onScroll={onScroll}>
        {slides.map((s, j) => (
          <figure className={j === i ? "sl on" : "sl"} key={`${key}-${j}`} aria-label={`Slide ${j + 1} of ${n}: ${s.cap}`}>
            <SlideTile project={key} slide={s} />
          </figure>
        ))}
      </div>
      <div className="inset ctl">
        <p className="cap" aria-live="polite">
          <b>{cur.cap}</b> {cur.capText}
        </p>
        <div className="arws">
          <button type="button" className="arw" aria-label={`Previous ${title} slide`} disabled={i === 0} onClick={() => go(Math.max(0, i - 1))}>
            <Arrow dir="prev" />
          </button>
          <button type="button" className="arw" aria-label={`Next ${title} slide`} disabled={i === n - 1} onClick={() => go(Math.min(n - 1, i + 1))}>
            <Arrow dir="next" />
          </button>
        </div>
      </div>
    </div>
  );
}

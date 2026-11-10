"use client";

import { useEffect, useRef, useState } from "react";
import type { Project } from "@/content/projects";
import { SlideTile } from "./SlideTile";

const two = (x: number) => (x < 10 ? "0" : "") + x;

const reduceMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function Arrow({ dir }: { dir: "prev" | "next" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={dir === "prev" ? "M19 12H5M11 6l-6 6 6 6" : "M5 12h14M13 6l6 6-6 6"} />
    </svg>
  );
}

export function Carousel({ project }: { project: Project }) {
  const { slides, key, title } = project;
  const [i, setI] = useState(0);
  const rail = useRef<HTMLDivElement>(null);
  const raf = useRef(0);

  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  const go = (j: number) => {
    const el = rail.current;
    const child = el?.children[j] as HTMLElement | undefined;
    if (!el || !child) return;
    // The rail is position: relative, so offsetLeft is measured from the rail itself.
    el.scrollTo({ left: child.offsetLeft, behavior: reduceMotion() ? "auto" : "smooth" });
    setI(j);
  };

  // Work out which slide is snapped into place after a swipe or trackpad scroll.
  const onScroll = () => {
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      const el = rail.current;
      if (!el) return;
      let best = 0;
      let bd = Infinity;
      Array.from(el.children).forEach((c, n) => {
        const d = Math.abs((c as HTMLElement).offsetLeft - el.scrollLeft);
        if (d < bd) {
          bd = d;
          best = n;
        }
      });
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 2 && bd > 8) best = el.children.length - 1;
      setI(best);
    });
  };

  const cur = slides[i];
  const n = slides.length;

  return (
    <div className="col deck">
      <div className="rail" ref={rail} tabIndex={0} role="region" aria-label={`${title} slides`} onScroll={onScroll}>
        {slides.map((s, j) => (
          <figure className={j === i ? "sl on" : "sl"} key={`${key}-${j}`} aria-label={`Slide ${j + 1} of ${n}: ${s.cap}`}>
            <SlideTile project={key} slide={s} />
          </figure>
        ))}
      </div>
      <div className="ctl">
        <div className="dots" role="group" aria-label="Choose a slide">
          {slides.map((s, j) => (
            <button
              type="button"
              key={j}
              className={j === i ? "dot on" : "dot"}
              aria-label={`Slide ${j + 1}: ${s.cap.replace(/\.$/, "")}`}
              aria-current={j === i}
              onClick={() => go(j)}
            >
              <span />
            </button>
          ))}
        </div>
        <div className="ctl-r">
          <span className="cap" aria-live="polite">
            <b>{cur.cap}</b> {cur.capText}
          </span>
          <span className="ctr">
            {two(i + 1)} / {two(n)}
          </span>
          <div className="arws">
            <button type="button" className="arw" aria-label="Previous slide" disabled={i === 0} onClick={() => go(Math.max(0, i - 1))}>
              <Arrow dir="prev" />
            </button>
            <button type="button" className="arw" aria-label="Next slide" disabled={i === n - 1} onClick={() => go(Math.min(n - 1, i + 1))}>
              <Arrow dir="next" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

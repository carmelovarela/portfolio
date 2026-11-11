"use client";

import { useSyncExternalStore } from "react";

// The chosen mode lives on <html data-theme> (set before paint by the script in layout.tsx)
// and in localStorage. With no choice saved, the page follows the device setting.
const KEY = "theme";
const EVENT = "themechange";
const query = "(prefers-color-scheme: dark)";

function subscribe(cb: () => void) {
  const mq = window.matchMedia(query);
  mq.addEventListener("change", cb);
  window.addEventListener(EVENT, cb);
  return () => {
    mq.removeEventListener("change", cb);
    window.removeEventListener(EVENT, cb);
  };
}

function isDark() {
  const chosen = document.documentElement.dataset.theme;
  if (chosen === "dark" || chosen === "light") return chosen === "dark";
  return window.matchMedia(query).matches;
}

export function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, isDark, () => false);
  const label = dark ? "Switch to light mode" : "Switch to dark mode";

  const toggle = () => {
    const next = dark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(KEY, next);
    } catch {
      // Private mode or blocked storage: the choice just won't be remembered.
    }
    window.dispatchEvent(new Event(EVENT));
  };

  return (
    <button type="button" className="tg" onClick={toggle} aria-label={label} title={label}>
      <svg className={`tgi ${dark ? "sun" : "moon"}`} width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        <path className="tgmo" d="M20.4 14.4A8.6 8.6 0 1 1 9.6 3.6a6.7 6.7 0 0 0 10.8 10.8Z" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
        <circle className="tgc" cx="12" cy="12" r="4.6" fill="currentColor" />
        <g className="tgr" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
            <line key={a} x1="12" y1="2.6" x2="12" y2="4.4" transform={`rotate(${a} 12 12)`} />
          ))}
        </g>
      </svg>
    </button>
  );
}

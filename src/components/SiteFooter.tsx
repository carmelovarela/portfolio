export function SiteFooter() {
  return (
    <footer className="site-footer inset">
      <div className="foot-id">
        <strong>Carmelo Varela</strong>
        <span className="mono">London, United Kingdom</span>
      </div>
      <nav className="foot-links" aria-label="Contact">
        <a href="mailto:carmelovarelaii@gmail.com">
          Get in touch
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/carmelovarela/">LinkedIn</a>
      </nav>
    </footer>
  );
}

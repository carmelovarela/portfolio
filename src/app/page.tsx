import { ProjectSection } from "@/components/ProjectSection";
import { SiteFooter } from "@/components/SiteFooter";
import { projects } from "@/content/projects";

export default function Home() {
  return (
    <>
      <header className="site-header">
        <h1>Carmelo Varela</h1>
        <p className="intro">
          I build products with AI, and make the calls it can&apos;t.{" "}
          <span>
            Five years taking products from discovery to delivery in fintech, health and alternative data. These days I
            research, design and build hands-on with AI tools, and spend my time on the decisions.
          </span>
        </p>
        <nav className="links" aria-label="Contact">
          <a href="mailto:carmelovarelaii@gmail.com">carmelovarelaii@gmail.com</a>
          <a href="https://www.linkedin.com/in/carmelovarela/">LinkedIn</a>
          <a href="#cv">CV</a>
        </nav>
      </header>
      <main className="site-main">
        {projects.map((p) => (
          <ProjectSection key={p.key} project={p} />
        ))}
      </main>
      <SiteFooter />
    </>
  );
}

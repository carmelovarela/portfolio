import { ProjectSection } from "@/components/ProjectSection";
import { SiteFooter } from "@/components/SiteFooter";
import { projects } from "@/content/projects";

export default function Home() {
  return (
    <>
      <header className="site-header">
        <p className="name">Carmelo Varela</p>
        <h1 className="hero">I build products with AI, and make the calls it can&apos;t.</h1>
        <p className="sub">
          Five years taking products from discovery to delivery in fintech, health and alternative data. These days I
          research, design and build hands-on with AI tools, and spend my time on the decisions.
        </p>
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

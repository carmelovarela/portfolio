import Link from "next/link";
import type { Project } from "@/content/projects";
import { Carousel } from "./Carousel";

export function ProjectSection({ project }: { project: Project }) {
  const h = `h-${project.key}`;
  return (
    <section className="proj-sec" aria-labelledby={h}>
      <div className="col proj-head">
        <div>
          <h2 id={h}>{project.title}</h2>
          <p>{project.blurb}</p>
        </div>
        <Link className="plink" href={`/work/${project.slug}`}>
          Case study
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
      <Carousel project={project} />
    </section>
  );
}

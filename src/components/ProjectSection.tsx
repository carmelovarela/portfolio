import type { Project } from "@/content/projects";
import { Carousel } from "./Carousel";

export function ProjectSection({ project }: { project: Project }) {
  const h = `h-${project.key}`;
  return (
    <section className="proj-sec" aria-labelledby={h}>
      <div className="inset proj-head">
        <h2 id={h}>{project.title}</h2>
        <p>{project.blurb}</p>
      </div>
      <Carousel project={project} />
    </section>
  );
}

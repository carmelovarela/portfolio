import type { Project } from "@/content/projects";
import { Carousel } from "./Carousel";
import { TrackedSection } from "./TrackedSection";

export function ProjectSection({ project }: { project: Project }) {
  const h = `h-${project.key}`;
  return (
    <TrackedSection project={project.slug} label={h}>
      <div className="inset proj-head">
        <h2 id={h}>{project.title}</h2>
        <p>{project.blurb}</p>
      </div>
      <Carousel project={project} />
    </TrackedSection>
  );
}

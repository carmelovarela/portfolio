import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { projects } from "@/content/projects";

// Placeholder pages until the three case studies are ported from the design's Archive page.

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

async function getProject(params: PageProps<"/work/[slug]">["params"]) {
  const { slug } = await params;
  return projects.find((p) => p.slug === slug);
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const project = await getProject(params);
  return { title: project ? `${project.title} · Carmelo Varela` : "Carmelo Varela" };
}

export default async function CaseStudy({ params }: PageProps<"/work/[slug]">) {
  const project = await getProject(params);
  if (!project) notFound();

  return (
    <>
      <main className="stub">
        <Link className="plink" href="/">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H5M11 6l-6 6 6 6" />
          </svg>
          Work
        </Link>
        <h1>{project.title}</h1>
        <p>{project.blurb}</p>
        <p>The full case study is on its way.</p>
      </main>
      <SiteFooter />
    </>
  );
}

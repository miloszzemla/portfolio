import { notFound } from "next/navigation";
import { projects, getProject, getNextProject } from "@/data/projects";
import ProjectContent from "./ProjectContent";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const nextProject = getNextProject(slug);

  return <ProjectContent project={project} nextProject={nextProject} />;
}

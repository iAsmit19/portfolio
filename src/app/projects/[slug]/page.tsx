import { projectData } from "@/app/data/p_d";
import { notFound } from "next/navigation";

interface Project {
  id: number;
  slug: string;
  liveLink: string;
  title: string;
  description: string;
  tech: string[];
  thumbPath: string;
  bgColor: string;
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project: Project | undefined = projectData.find(
    (project) => project.slug === slug
  );

  if (!project) notFound();

  return (
    <div>
      <h1>{project.title}</h1>
    </div>
  );
}

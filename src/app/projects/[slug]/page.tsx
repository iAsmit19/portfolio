import { projectData } from "@/app/data/p_d";

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

  if (!project) {
    return (
      <div>
        <h1>Not Found</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{project.title}</h1>
    </div>
  );
}

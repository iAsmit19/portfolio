import { projectData } from "@/app/data/p_d";
import { notFound } from "next/navigation";

interface Project {
  id: number;
  pageId: number;
  title: string;
  description: string;
  tech: string[];
  thumbPath: string;
  bgColor: string;
}

const Projects = ({ params }: { params: { slug: string } }) => {
  const projects: Project[] = projectData;

  const project: Project | undefined = projects.find(
    (project) => project.pageId === parseInt(params.slug)
  );

  if (!project) return notFound();

  return (
    <div>
      <h1>{project.title}</h1>
    </div>
  );
};

export default Projects;

import "@/app/styles/section_1.scss";
import UniversalHeading from "./UniversalHeading";
import { projectData } from "../data/p_d";
import ProjectCard from "./ProjectCard";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  thumbPath: string;
  bgColor: string;
}

const Section_1 = () => {
  const projects: Project[] = projectData;

  return (
    <>
      <div className="sectio_1">
        <div className="section_1__cont">
          <div className="section_1__cont__part_a">
            <div className="section_1__cont__header">
              <UniversalHeading
                head="work"
                subText="these are my projects & works"
              />
            </div>
            <div className="section_1__cont__cards">
              <div className="section_1__cont__cards__cont">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          </div>
          <div className="section_1__cont__part_b">
            <div className="section_1__cont__bento_grid">
              <div className="section_1__cont__bento_grid__cont"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section_1;

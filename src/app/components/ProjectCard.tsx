import Image from "next/image";
import linkIcon from "@/app/assets/link-arrow.svg";
import liveIcon from "@/app/assets/link-icon.svg";
import "@/app/styles/project_card.scss";

type ProjectType = {
  project: {
    id: number;
    title: string;
    description: string;
    tech: string[];
    thumbPath: string;
    bgColor: string;
  };
};

const ProjectCard: React.FC<ProjectType> = ({ project }) => {
  return (
    <>
      <div
        className="project_card"
        style={{ backgroundColor: project.bgColor }}
      >
        <div className="project_card__cont">
          <div className="project_card__cont__info">
            <div className="project_card__cont__info__thumbnail">
              <div className="project_card__cont__info__thumbnail__cont">
                <Image
                  priority
                  src={project.thumbPath}
                  alt=""
                  height={140}
                  width={420}
                />
              </div>
            </div>
            <div className="project_card__cont__about">
              <div className="project_card__cont__about__cont">
                <div className="about__cont__header">
                  <div className="about__cont__heading">
                    <h3>{project.title}</h3>
                  </div>
                  <div className="about__cont__description">
                    <p>{project.description}</p>
                  </div>
                </div>
                <div className="about__cont__tech">
                  <ul>
                    {project.tech.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </div>
                <div className="about__cont__cta">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Click to know more
                    <Image src={linkIcon} alt="" height={10} width={10} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="project_card__cont__divider"></div>
          <div className="project_card__cont__live_link">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <div className="live_link_element">
                {" "}
                <Image src={liveIcon} alt="" height={18} width={18} />
                Visit Site
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;

import Image from "next/image";
import linkIcon from "@/app/assets/link-arrow.svg";
import liveIcon from "@/app/assets/link-icon.svg";
import sLinkArrow from "@/app/assets/s-link-arrow.svg";
import "@/app/styles/project_card.scss";
import { useRouter } from "next/navigation";

type ProjectType = {
  project: {
    id: number;
    pageId: number;
    liveLink: string;
    title: string;
    description: string;
    tech: string[];
    thumbPath: string;
    bgColor: string;
  };
};

const ProjectCard: React.FC<ProjectType> = ({ project }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/projects/${project.pageId}`);
  };

  return (
    <>
      <div
        className="project_card"
        style={{ backgroundColor: project.bgColor }}
        onClick={handleCardClick}
      >
        <div className="project_card__cont">
          <div className="project_card__cont__info">
            <div className="project_card__cont__info__thumbnail">
              <div className="project_card__cont__info__thumbnail__cont">
                <Image
                  src={project.thumbPath}
                  alt=""
                  // height={140}
                  // width={420}
                  fill
                  priority
                />
              </div>
            </div>
            <div className="project_card__cont__about">
              <div className="project_card__cont__about__cont">
                <div className="about__cont__header">
                  <div className="about__cont__heading">
                    <h3>{project.title}</h3>
                    <Image
                      className="heading__link__icon"
                      src={sLinkArrow}
                      alt=""
                      height={10}
                      width={10}
                    />
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
          <div
            className="project_card__cont__live_link"
            onClick={(event) => event.stopPropagation()}
          >
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
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

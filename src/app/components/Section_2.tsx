import "@/app/styles/section_2.scss";
import UniversalHeading from "./UniversalHeading";
import { coreFrontendSkills } from "../data/p_d";
import { designSkills } from "../data/p_d";
import { toolSkills } from "../data/p_d";

const Section_2 = () => {
  return (
    <div className="section_2">
      <div className="section_2__cont">
        <div className="section_2__cont__heading">
          <UniversalHeading head="skills" />
        </div>
        <div className="section_2__cont__skills">
          <div className="section_2__cont__skills__cont">
            <div className="skills__core_frontend">
              <h4>Core - Frontend</h4>
              <div className="skills__core_frontend__tech">
                <ul>
                  {coreFrontendSkills.map((skill) => (
                    <li key={skill.id}>{skill.skill}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="skills__design">
              <h4>Design</h4>
              <div className="skills__design__tech">
                <ul>
                  {designSkills.map((skill) => (
                    <li key={skill.id}>{skill.skill}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="skills__tools">
              <h4>Tools</h4>
              <div className="skills__tools__tech">
                <ul>
                  {toolSkills.map((skill) => (
                    <li key={skill.id}>{skill.skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_2;

"use client";

import "@/app/styles/section_1.scss";
import UniversalHeading from "./UniversalHeading";
import { projectData } from "../data/p_d";
import ProjectCard from "./ProjectCard";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import skeletonImg from "@/app/assets/skeleton.svg";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  thumbPath: string;
  bgColor: string;
}

// interface Component {
//   id: number;
//   title: string;
//   url: string;
//   thumbPath: string;
//   height: number;
//   width: number;
// }

const Section_1 = () => {
  const projects: Project[] = projectData;

  const headingRef = useRef<HTMLDivElement | null>(null);
  const cardsContRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!headingRef.current || !cardsContRef.current) return;

    const heading = headingRef.current;
    const cardsCont = cardsContRef.current;

    gsap.to(heading, {
      scrollTrigger: {
        trigger: heading,
        start: "top 50%",
        end: () => `+=${cardsCont.scrollHeight * 1.15}`,
        pin: true,
        pinSpacing: false,
        scrub: 5,
      },
    });
  }, []);

  return (
    <>
      <div className="section_1">
        <div className="section_0__cont__skeleton">
          <Image
            src={skeletonImg}
            alt=""
            height={130}
            width={100}
            draggable="false"
          />
        </div>
        <div className="section_1__cont">
          <div className="section_1__cont__part_a">
            <div className="section_1__cont__header" ref={headingRef}>
              <UniversalHeading
                head="work"
                subText="these are my projects & works"
              />
            </div>
            <div className="section_1__cont__cards" ref={cardsContRef}>
              <div className="section_1__cont__cards__cont">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          </div>
          <div className="section_1__cont__part_b"></div>
        </div>
      </div>
    </>
  );
};

export default Section_1;

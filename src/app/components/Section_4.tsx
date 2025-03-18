"use client";

import "@/app/styles/section_4.scss";
import UniversalHeading from "./UniversalHeading";
import Image from "next/image";
import quotes from "@/app/assets/quote-icon.svg";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Section_4 = () => {
  const hnwQuote = 20;

  useEffect(() => {
    gsap.from(".section_4__cont__pin_images__cont div", {
      top: "50%",
      left: "50%",
      scrollTrigger: {
        trigger: ".section_4",
        start: "top center",
        end: "center center",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="section_4">
      <div className="section_4__cont">
        <div className="section_4__cont__header">
          <UniversalHeading subText="about me" />
        </div>
        <div className="section_4__cont__about_text">
          <div className="about_text__text">
            <span className="about_text__text__quotes__left">
              <Image src={quotes} alt="" height={hnwQuote} width={hnwQuote} />
            </span>
            <p>
              I am <span className="about_text__text__highlight">21 y.o.</span>,
              and I am a lover of{" "}
              <span className="about_text__text__highlight">piano</span> tunes,
              grand{" "}
              <span className="about_text__text__highlight">orchestras</span>,
              and the majestic beauty of{" "}
              <span className="about_text__text__highlight">castles</span> —no
              expertise, just pure appreciation.
            </p>
            <span className="about_text__text__quotes__right">
              <Image src={quotes} alt="" height={hnwQuote} width={hnwQuote} />
            </span>
          </div>
        </div>
        <div className="section_4__cont__pin_images">
          <div className="section_4__cont__pin_images__cont">
            <div className="fassade_sketch"></div>
            <div className="bran_castle"></div>
            <div className="greek_arch_sketch"></div>
            <div className="med_build_sketch"></div>
            <div className="piano_sketch"></div>
            <div className="pillar_sketch"></div>
            <div className="spire_sketch"></div>
            <div className="window_sketch"></div>
          </div>
        </div>
        <p className="section_4__cont__disclaimer">
          These images are from Pinterest
        </p>
      </div>
    </div>
  );
};

export default Section_4;

// 48px

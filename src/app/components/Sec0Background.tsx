"use client";

import { useRef } from "react";
import "../styles/section_0.scss";

const Sec0Background = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="section_0__bg__cont">
      <video
        className="bg__Cont__video"
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src=" /bg_video/background.mp4" type="video/mp4" />
        Not Supported
      </video>
    </div>
  );
};

export default Sec0Background;

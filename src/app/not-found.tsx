"use client";

import "@/app/styles/globals.scss";
import { useRouter } from "next/navigation";
// import Image from "next/image";

export default function NotFound() {
  const router = useRouter();

  const homepageLink = () => {
    router.push("/");
  };

  return (
    <div className="not_found" onClick={homepageLink}>
      <div className="not_found_cont">
        <div className="not_found_cont_contents">
          <div className="not_found_cont_contents_heading">
            <h1>404</h1>
          </div>
          <div className="not_found_cont_contents_text">
            <p className="n_f_c_contents_text_main">Off The Map It Seems</p>
            <p className="n_f_c_contents_text_sub">
              Here&lsquo;s Nothing But Ocean Drifts
            </p>
          </div>
          <div className="not_found_cont_cta">
            <p>Back to Home Port</p>
          </div>
        </div>
      </div>
    </div>
  );
}

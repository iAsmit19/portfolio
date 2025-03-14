"use client";

import Image from "next/image";
import copyIcon from "@/app/assets/copy-icon.svg";
import mailIcon from "@/app/assets/mail-icon.svg";
import sparkles from "@/app/assets/sparkles.svg";
import { useState } from "react";
import { email } from "@/app/data/p_d";

const Sec0_Cta = () => {
  const [emCopy, setEmCopy] = useState(false);

  const copyClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setEmCopy(true);
    } catch (error) {
      console.error("Failed to copy email address:", error);
    }

    setTimeout(() => {
      setEmCopy(false);
    }, 3000);
  };

  return (
    <>
      <div className="section_0__cont__elements__email_cta">
        <div className="section_0__cont__elements__email_cta_cont">
          <div className="email_cta__email_copy" onClick={copyClick}>
            <div className="email_cta__email_copy__cont">
              {emCopy ? (
                <>
                  <Image src={sparkles} alt="" height={17} width={15} />
                  <div className="email_copy__cont__email_address">
                    <p>Copied</p>
                  </div>
                </>
              ) : (
                <>
                  <Image src={copyIcon} alt="" height={17} width={15} />
                  <div className="email_copy__cont__email_address">
                    <p>iamasmit1919@gmail.com</p>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="email_cta__open_mail">
            <a
              className="email_cta__open_mail__cont"
              href="mailto:iamasmit1919@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <div className="open_mail__cont__icon"> */}
              <Image src={mailIcon} alt="" height={15} width={15} />
              {/* </div> */}
              <div className="open_mail__cont__text">
                <p>Open Mail</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sec0_Cta;

"use client";

import "@/app/styles/footer.scss";
import copyIcon from "@/app/assets/copy-icon.svg";
import docIcon from "@/app/assets/doc-icon.svg";
import Image from "next/image";
import { email } from "@/app/data/p_d";

const Footer = () => {
  // const [emCopy, setEmCopy] = useState(false);

  const copyClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch (error) {
      console.error("Failed to copy email address:", error);
    }
  };

  return (
    <div className="footer">
      <div className="footer__cont">
        <div className="footer__cont__header">
          <div className="footer__cont__header__cont">
            <h5>So glad you stopped by, let&apos;s connect! ❄️</h5>
          </div>
        </div>
        <div className="footer__cont__elements">
          <div className="footer__cont__elements__cont">
            <div className="elements__cont__contact_me">
              <h6>CONTACT ME</h6>
              <a onClick={copyClick}>
                <Image src={copyIcon} alt="" draggable="false" />
                {email}
              </a>
            </div>
            <div className="elements__cont__connect_with_me">
              <h6>CONNECT WITH ME</h6>
              <div className="connect_with_me__elements">
                <a
                  href="https://www.linkedin.com/in/iamasmit/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <div className="connect_with_me__divider"></div>
                <a href="/AsmitResume.pdf" download="Asmit_Resume.pdf">
                  <Image src={docIcon} alt="" /> Resume
                </a>
                <div className="connect_with_me__divider"></div>
                <a
                  href="https://github.com/iAsmit19/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="elements__cont__copyright">
              <p className="copyright__text">©2025 ASMIT SINGH</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

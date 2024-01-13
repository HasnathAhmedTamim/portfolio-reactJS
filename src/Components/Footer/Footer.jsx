import React from "react";
import "./Footer.css";
import wave from "../../img/wave.png";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import FaceBook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Contact</span>
        <div className="f-icons">
          <a
            href="https://www.linkedin.com/in/hasnath-ahmed-tamim/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn color="white" size="3rem"></LinkedIn>
          </a>
          <a
            href="https://www.facebook.com/HasnathAhmedTamim/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <FaceBook color="white" size="3rem"></FaceBook>
          </a>
          <a
            href="https://github.com/HasnathAhmedTamim"
            target="_blank"
            rel="noreferrer"
          >
            <Github color="white" size="3rem"></Github>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

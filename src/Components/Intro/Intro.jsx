import "./Intro.css";
import FaceBook from "../../img/Facebook.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Tamim from "../../img/tamim2.png";
import thumbip from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/heartemoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import React, { useContext } from "react";

// import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
function Intro() {
  // const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro ">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hi ! I am </span>
          <span>Hasnath Ahmed</span>
          <span> Web developer | Tech Enthusiast | Learner</span>
        </div>
        <button className="button i-button">Hire Me</button>
        <div className="i-icons">
          <a
            href="https://www.facebook.com/HasnathAhmedTamim/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={FaceBook} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/hasnath-ahmed-tamim/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedIn} alt="" />
          </a>
          <a
            href="https://github.com/HasnathAhmedTamim"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Github} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Tamim} alt="" />
        <img
          // initial={{ left: "-16%" }}
          // whileInView={{ left: "-14%" }}
          // transition={transition}
          src={glassesimoji}
          alt=""
        />
        <div
          style={{ top: "-2%", left: "45%" }}
          className="floating-div"
          // initial={{ top: "-4%", left: "-74%" }}
          // whileInView={{ left: "-68%" }}
          // transition={transition}
        >
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer"></FloatingDiv>
        </div>
        <div
          className="floating-div"
          style={{ top: "21rem", left: "18rem" }}
          // initial={{ top: "-4%", left: "-74%" }}
          // whileInView={{ left: "-68%" }}
          // transition={transition}
        >
          <FloatingDiv
            image={thumbip}
            txt1="Be "
            txt2="Confident"
          ></FloatingDiv>
        </div>
        {/* blur div */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
      </div>
      <div
        className="blur"
        style={{
          background: "#C1F5FF",
          top: "18rem",
          width: "28rem",
          height: "18rem",
          left: "35rem",
        }}
      ></div>
    </div>
  );
}

export default Intro;

import React, { useContext } from "react";
import "./Works.css";

import img1 from "../../img/html2.png";
import img2 from "../../img/javasc.png";
import img3 from "../../img/reactjs.png";
import img4 from "../../img/nodejs2.png";
import img5 from "../../img/mongo2.png";
import { themeContext } from "../../Context";
const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>
          Works For All These{" "}
        </span>
        <span>Tech Skills</span>
        <span>
          web developer <br /> programmer <br />
          learner
        </span>

        <button className="button s-button">Hire ME</button>

        <div
          className="blur s-blur1"
          style={{ background: "var(--blueCard)" }}
        ></div>
      </div>

      {/* right side */}
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={img1} alt="" width={100} />
          </div>
          <div className="w-secCircle">
            <img src={img2} alt="" width={70} />
          </div>
          <div className="w-secCircle">
            <img src={img5} alt="" width={70} />
          </div>
          <div className="w-secCircle">
            <img src={img3} alt="" width={70} />
          </div>
          <div className="w-secCircle">
            <img src={img4} alt="" width={70} />
          </div>
          {/* bg-circle */}
          <div>
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;

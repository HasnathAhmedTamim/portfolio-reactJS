import React from "react";
import "./Services.css";

// import web from "../../img/web.png";
import react from "../../img/reactjs.png";
// import js from "../../img/javasc.png";
import Card from "../Card/Card";
import Resume from "./resume.pdf";

import { themeContext } from "../../Context";
import { useContext } from "react";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      {/* left */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <span>web developer and programmer</span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div
          className="blur s-blur1"
          style={{ background: "var(--blueCard)" }}
        ></div>
      </div>
      {/* right */}
      <div className="cards">
        <div style={{ left: "36rem" }}>
          <Card
            emoji={react}
            heading={"Frontend"}
            detail={"HTML,CSS,JavaScript,React"}
          ></Card>
        </div>
        {/* second */}
        <div style={{ top: "10rem", left: "18rem" }}>
          <Card
            emoji={react}
            heading={"Developer"}
            detail={"HTML,CSS,JavaScript,React"}
          ></Card>
        </div>
        {/* third */}
        <div style={{ top: "20rem", left: "39rem" }}>
          <Card
            emoji={react}
            heading={"Developer"}
            detail={"HTML,CSS,JavaScript,React"}
          ></Card>
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;

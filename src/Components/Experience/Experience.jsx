import React, { useContext } from "react";
import "./Experience.css";
import { themeContext } from "../../Context";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience">
      <div className="achievement" style={{ color: darkMode ? "white" : "" }}>
        <div className="circle">+0</div>
        <span>years</span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle">+10</div>
        <span>completed</span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle">+1</div>
        <span>published</span>
        <span>Research</span>
      </div>
    </div>
  );
};

export default Experience;

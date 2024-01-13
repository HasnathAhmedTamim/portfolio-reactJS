import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="n-wrapper" id="Navbar flex ">
      <div className="n-left">
        <div className="n-name">Hasnath Ahmed</div>
        <Toggle />
      </div>
      <div className="r-right">
        <div className="n-list">
          <ul className="list-none">
            <Link spy={true} to="Navbar" smooth={true}>
              <li>Home</li>
            </Link>
            <Link spy={true} to="Services" smooth={true}>
              <li>Services</li>
            </Link>
            <Link spy={true} to="Portfolio" smooth={true}>
              <li>Portfolio</li>
            </Link>
            <Link spy={true} to="Testimonials" smooth={true}>
              <li>Testimonial</li>
            </Link>
          </ul>
        </div>
        <button className="button n-button">Contact Me</button>
      </div>
    </div>
  );
}

export default Navbar;

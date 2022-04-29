import { useState, useEffect } from "react";
import graphicDesktop from "../assets/graphicdesktop.png";
import graphicMobile from "../assets/graphicmobile.png";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import About from "./about";

function Home() {
  return (
    <div className="landing-page-container">
      <div className="home-graphic-container">
        <img
          src={graphicDesktop}
          className="home-graphic home-graphic-desktop"
        />
        <img src={graphicMobile} className="home-graphic home-graphic-mobile" />
      </div>

      <div className="header-fog-1"></div>
      <div className="header-fog-2"></div>
      <div className="yellow-scales"></div>

      <div className="chevron-read-more-container">
        <FontAwesomeIcon
          icon={faChevronDown}
          style={{ height: "50px", color: "rgb(57, 57, 57)" }}
          className="chevron-single"
        ></FontAwesomeIcon>

        <FontAwesomeIcon
          icon={faChevronDown}
          style={{ height: "50px", color: "rgb(57, 57, 57)" }}
          className="chevron-single"
        ></FontAwesomeIcon>
      </div>
    </div>
  );
}

export default Home;

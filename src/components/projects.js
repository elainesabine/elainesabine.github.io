import { useState, useEffect } from "react";
import graphicDesktop from "../assets/graphicdesktop.png";
import graphicMobile from "../assets/graphicmobile.png";
import "./projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import About from "./about";
import snapchat from "../assets/experience/snapchat.jpeg";
import amazon from "../assets/experience/amazon.png";
import project1 from "../assets/projects/project1.png";
import rivals from "../assets/projects/rivals.png";
import flash from "../assets/projects/flash.png";
import blockfund from "../assets/projects/blockfund.png";
function Projects() {
  return (
    <div className="projects-page-container">
      <div className="projects-body">
        <h1 className="center-text dark-blue mb-5">PROJECTS</h1>

        <div className="width-80">
          <div className="project-icon-container">
            <div className="project-icon">
              <img src={rivals} id="project1" className="project-picture" />
              <h2 className="dark-blue">Rivals</h2>
            </div>
            <div className="project-icon">
              <img src={blockfund} id="project1" className="project-picture" />
              <h2 className="dark-blue">BlockFund</h2>
            </div>
            <div className="project-icon">
              <img src={flash} id="project1" className="project-picture" />
              <h2 className="dark-blue">Flash</h2>
            </div>
            <div className="project-icon">
              <img src={project1} id="project1" className="project-picture" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

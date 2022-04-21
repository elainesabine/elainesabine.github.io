import { useState, useEffect } from "react";
import "./experience.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "3d-react-carousal";
import $ from "jquery";
import snapchat from "../assets/experience/snapchat.jpeg";
import amazon from "../assets/experience/amazon.png";

function Experience() {
  let slides = [
    <div className="experience-picture-container">
      <img src={snapchat} id="snapchat" className="experience-picture" />
    </div>,
    <div className="experience-picture-container">
      <img src={amazon} id="amazon" className="experience-picture" />
    </div>,
    <div className="experience-picture-container">
      <img src={snapchat} id="snapchat" className="experience-picture" />
    </div>,
    <div className="experience-picture-container">
      <img src={snapchat} id="snapchat" className="experience-picture" />
    </div>,
  ];

  useEffect(() => {
    // change arrows
    $(window).ready(function () {
      var arrowRight = $(".slider-right");
      arrowRight.empty();
      var arrowLeft = $(".slider-left");
      arrowLeft.empty();
    });
  });

  return (
    <div className="experience-page-container">
      <div className="yellow-scales-flipped"></div>
      <div className="experience-body">
        <h1 className="center-text mb-5">my work experience</h1>

        <div className="carousel-container">
          <Carousel slides={slides} autoplay={false} interval={1000} />
        </div>
      </div>
    </div>
  );
}

export default Experience;

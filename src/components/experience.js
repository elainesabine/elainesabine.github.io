import { useState, useEffect, useRef } from "react";
import "./experience.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "3d-react-carousal";
import $ from "jquery";
import snap from "../assets/experience/snap.png";
import amazon from "../assets/experience/amazon.png";
import expTemplate from "../assets/experience/border.png";

function Experience() {
  let slides = [
    <div className="experience-picture-container">
      <img
        src={expTemplate}
        id="expTemplate"
        className="experience-background"
      />
      <div className="experience-description">
        <h1 className="white experience-title">cal poly extended education</h1>
        <p className="white">January 2021 - Present</p>
        <p className="white">Web Developer & UI/UX Designer</p>
        <p className="white">HTML, Javascript, Adobe XD</p>
      </div>
    </div>,
    <div className="experience-picture-container" id="snapchat">
      <img src={expTemplate} className="experience-background" />
      <img src={snap} className="experience-picture" />
      <div className="experience-description">
        <h1 className="white experience-title">SNAP INC.</h1>
        <p className="white">June 2021 - August 2021</p>
        <p className="white">Software Developer Intern</p>
        <p className="white">Objective C</p>
      </div>
    </div>,
    <div className="experience-picture-container" id="amazon">
      <img src={expTemplate} className="experience-background" />
      <img src={amazon} className="experience-picture" />
      <div className="experience-description">
        <h1 className="white experience-title">AMAZON</h1>
        <p className="white">April 2020 - December 2020</p>
        <p className="white">Junior Software Developer</p>
        <p className="white">React, Java, DynamoDB</p>
      </div>
    </div>,
    <div className="experience-picture-container">
      <img
        src={expTemplate}
        id="expTemplate"
        className="experience-background"
      />
      <div className="experience-description">
        <h1 className="white experience-title">
          CAL POLY associated students inc.
        </h1>
        <p className="white">September 2019 - March 2020</p>
        <p className="white">Web Developer</p>
        <p className="white">HTML, CakePHP, SQL</p>
      </div>
    </div>,
  ];

  useEffect(() => {
    // change arrows
    // $(window).ready(function () {
    //   var arrowRight = $(".slider-right");
    //   arrowRight.empty();
    //   var arrowLeft = $(".slider-left");
    //   arrowLeft.empty();
    // });

    const handleCarouselResize = () => {
      var imageHeight = $(".experience-background-container").height();
      console.log("imageHeight", imageHeight);
      $(".carousel-container").height(imageHeight);
    };

    window.addEventListener("resize", handleCarouselResize);
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleCarouselResize);
  }, []);

  return (
    <div className="experience-page-container">
      <div className="yellow-scales-flipped"></div>
      <div className="experience-body">
        <h1 className="center-text mb-5 white">my work experience</h1>

        <div className="carousel-container">
          <Carousel
            slides={slides}
            autoplay={false}
            interval={1000}
            arrows={false}
          />
        </div>
        <p className="center-text white bold mt-5 mb-0">
          Swipe to see more & click to read about it.
        </p>
      </div>
    </div>
  );
}

export default Experience;

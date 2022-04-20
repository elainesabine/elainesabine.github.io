import { useState, useEffect } from "react";
import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
function About() {
  return (
    <div className="about-me-page-container">
      <h1 className="center-text mb-5">Hi there, I'm Elaine :)</h1>
      <div className="width-80">
        <p>
          I am a fourth year Computer Science major at California Polytechnic
          State University. My main technical focus full-stack web development
          and my other areas of interest include Web3 development and UI / UX.
        </p>
        <p>
          After discovering my passion for web development, I decided to start
          participating in hackathons to collaborate with other students to use
          technology to tackle social problems. Over many hackathons, I have
          developed several web apps intended to improve the lives of people in
          our community, such as increasing safety of students living on campus,
          empowering neighborhoods with tools and data, and providing an extra
          resource for students with hearing impairments.
        </p>
        <p>
          I have worked part time as an IT programmer student assistant and have
          created a web application to simplify the process of applying for
          student government at Cal Poly. I have also interned year-round at
          Amazon, working with React, Java, and DynamoDB to create new features
          for an internal app.
        </p>
        <p>
          Asides from web development, I am also highly involved in the women in
          technology community at Cal Poly through clubs such as Society of
          Women Engineers (SWE), and Women Involved in Software and Hardware
          (WISH). I am also on the directors team of UX Fest, which is Cal
          Poly’s first UX competition founded by women of color that aims to
          create an inclusive space for students to learn more about UX.
        </p>
        <p>
          Some of my hobbies include front end design, customizing mechanical
          keyboards, and making piano covers.
        </p>
        <p>
          Starting in August, I will be working full time at Snap Inc as a iOS
          developer on the camera team.
        </p>
      </div>
    </div>
  );
}

export default About;

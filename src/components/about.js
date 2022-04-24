import { useState, useEffect } from "react";
import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
function About() {
  return (
    <div className="about-me-page-container">
      <h1 className="center-text mb-5 dark-blue">Hi there, I'm Elaine :)</h1>
      <div className="width-80">
        <p className="dark-blue">
          I am a fourth year Computer Science major at{" "}
          <strong>California Polytechnic State University</strong>. My main
          technical focus is <strong>full-stack web development, </strong>
          and my other areas of interest include{" "}
          <strong>Web3 development</strong> and <strong>UI / UX.</strong>
        </p>
        <p className="dark-blue">
          After discovering my passion for web development, I decided to start
          participating in <strong>hackathons</strong> to collaborate with other
          students to use technology to tackle social problems. Over many
          hackathons, I have developed several web apps intended to improve the
          lives of people in our community, such as increasing safety of
          students living on campus, empowering neighborhoods with tools and
          data, and providing an extra resource for students with hearing
          impairments.
        </p>
        <p className="dark-blue">
          I have worked part time as an{" "}
          <strong>IT programmer student assistant</strong> and have created a
          web application to simplify the process of applying for student
          government at Cal Poly. I have also interned year-round at
          <strong> Amazon</strong>, working with React, Java, and DynamoDB to
          create new features for an internal app.
        </p>
        <p className="dark-blue">
          Asides from web development, I am also highly involved in the women in
          technology community at Cal Poly through clubs such as{" "}
          <strong>Society of Women Engineers (SWE)</strong>, and{" "}
          <strong>Women Involved in Software and Hardware (WISH)</strong>. I am
          also on the directors team of <strong>UX Fest</strong>, which is Cal
          Poly’s first UX competition founded by women of color that aims to
          create an inclusive space for students to learn more about UX.
        </p>
        <p className="dark-blue">
          Some of my hobbies include front end design, customizing mechanical
          keyboards, and making piano covers.
        </p>
        <p className="dark-blue">
          Starting in August, I will be working full time at{" "}
          <strong>Snap Inc.</strong> as an iOS developer on the camera team.
        </p>
      </div>
    </div>
  );
}

export default About;

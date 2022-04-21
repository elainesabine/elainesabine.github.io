import { useState, useEffect } from "react";
import "./clubs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "3d-react-carousal";
import $ from "jquery";
import ClubCard from "./clubCard";
import snapchat from "../assets/experience/snapchat.jpeg";
function Clubs({ children, image }) {
  return (
    <div className="clubs-page-container">
      <div className="clubs-body">
        <h1 className="center-text mb-5">clubs i'm apart of</h1>

        <div className="clubcards-contaner">
          <ClubCard image={snapchat}>
            <h2>UX Fest SLO</h2>
            <p></p>
          </ClubCard>
          <ClubCard image={snapchat}>hello</ClubCard>
          <ClubCard image={snapchat}>hello</ClubCard>
          <ClubCard image={snapchat}>hello</ClubCard>
        </div>
      </div>
    </div>
  );
}

export default Clubs;

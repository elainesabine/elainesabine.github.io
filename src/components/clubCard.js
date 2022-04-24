import { useState, useEffect } from "react";
import "./clubCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "3d-react-carousal";
import $ from "jquery";

function ClubCard({ children, image, websiteLink, intagramLink }) {
  return (
    <div className="club-card-container">
      <div className="club-picture-container">
        <img src={image} className="club-logo" />
      </div>
      <div className="club-description-container">{children}</div>
    </div>
  );
}

export default ClubCard;

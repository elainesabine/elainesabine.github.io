import { useState, useEffect } from "react";
import "./clubs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "3d-react-carousal";
import $ from "jquery";
import ClubCard from "./clubCard";
import uxfest from "../assets/clubs/uxfest.png";
import slohacks from "../assets/clubs/slohacks.png";
import wish from "../assets/clubs/wish.png";
import symphony from "../assets/clubs/symphony.png";
import snapchat from "../assets/experience/snapchat.jpeg";
function Clubs({ children, image }) {
  return (
    <div className="clubs-page-container">
      <div className="clubs-body">
        <h1 className="center-text dark-blue mb-5">clubs</h1>

        <div className="clubcards-contaner">
          <ClubCard image={uxfest}>
            <h2 className="dark-blue">UX Fest SLO</h2>
            <p className="dark-blue mb-0">2020-2021</p>
            <p className="dark-blue">Sponsorship Co-Director</p>
          </ClubCard>
          <ClubCard image={slohacks}>
            {" "}
            <h2 className="dark-blue">SLO Hacks</h2>
            <p className="dark-blue mb-0">2019-2022</p>
            <p className="dark-blue">Hackathon Organizer (Marketing)</p>
          </ClubCard>
          <ClubCard image={wish}>
            {" "}
            <h2 className="dark-blue">Women in software and hardware</h2>
            <p className="dark-blue mb-0">2019-2022</p>
            <p className="dark-blue">Community Officer, Mentorship Officer</p>
          </ClubCard>
          <ClubCard image={symphony}>
            {" "}
            <h2 className="dark-blue">Cal poly symphony</h2>
            <p className="dark-blue mb-0">2019-2020, 2021-2022</p>
            <p className="dark-blue">Flute Player</p>
          </ClubCard>
        </div>
      </div>
    </div>
  );
}

export default Clubs;

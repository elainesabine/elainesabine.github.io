import {useState, useEffect} from "react";
import graphic from "../assets/home-graphic.png";
import "./home.css";

function Home() {
  

  return (
    <div className="home-page">
        <div className="home-graphic-container">        
            <img src={graphic} className="home-graphic"/>
        </div>

        <div className="about-me">
            <h1 className="center-text">Hello! My name is Elaine.</h1>
        </div>
    </div>
  );
}

export default Home;
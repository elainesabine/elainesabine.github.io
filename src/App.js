import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/home";
import Navigation from "./components/navigation";
import $ from "jquery";
import About from "./components/about";
import Experience from "./components/experience";
import "./components/home.css";
import Projects from "./components/projects";
import Clubs from "./components/clubs";
function App() {
  useEffect(() => {
    // change color of navbar after scrollign down
    $(window).scroll(function () {
      var containerHeight = $(".landing-page-container").height();
      var windowHeight = $(window).scrollTop();
      if (windowHeight > containerHeight - 153)
        $("#nav").addClass("header-solid");
      else $("#nav").removeClass("header-solid");
    });
  }, []);

  return (
    <div id="bootstrap-overrides">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navigation />
              <Home />
              <About />
              <Experience />
              <Projects />
              <Clubs />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;

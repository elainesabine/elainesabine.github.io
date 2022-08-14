import { useState, useEffect } from 'react'
import './about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronDown,
  faGamepad,
  faMusic,
  faTelevision,
} from '@fortawesome/free-solid-svg-icons'
import placeholder1 from '../assets/placeholder1.png'
import placeholder2 from '../assets/placeholder2.png'
import { Button } from 'react-bootstrap'

function About() {
  return (
    <>
      <div className="about-page-container">
        <div className="width-80-small dark-brown page-padding">
          <div className="about-container">
            <div className="about-text">
              <h1 className=" mb-50">
                a little bit <span className="brown-shadow">about me.</span>
              </h1>
              <p>
                i graduated from california polytechnic state university with a
                degree in computer science. i am currently located in los
                angeles working as an iOS engineer at snap inc.
              </p>
              <p>
                i enjoy doing web development and like to build websites for
                small businesses. in late 2021, i co-founded a web3 game along
                with a whitelist marketplace site.
              </p>
            </div>
            <img src={placeholder1} />
          </div>
          <div className="skills-favorites-container">
            <div>
              <h2 className="mb-20">
                technical <span className="">skills.</span>{' '}
              </h2>
              <div className="skills-languages">
                <Button className="button-small rose-bg grey">
                  <p className="mb-0">react</p>
                </Button>
                <Button className="button-small light-green-bg grey">
                  <p className="mb-0">solidity</p>
                </Button>
                <Button className="button-small beige-bg grey">
                  <p className="mb-0">html</p>
                </Button>
                <Button className="button-small grey-bg">
                  <p className="mb-0">javascript</p>
                </Button>
                <Button className="button-small light-purple-bg">
                  <p className="mb-0">objective c</p>
                </Button>
                <Button className="button-small rose-bg grey">
                  <p className="mb-0">node.js</p>
                </Button>
                <Button className="button-small light-green-bg grey">
                  <p className="mb-0">sql</p>
                </Button>
                <Button className="button-small beige-bg grey">
                  <p className="mb-0">python</p>
                </Button>
              </div>
            </div>
            <div>
              <h2 className=" mb-20">favorites.</h2>
              <div className="favs-line">
                <FontAwesomeIcon icon={faMusic} />
                <p>all 4 nothing</p>
              </div>
              <div className="favs-line">
                <FontAwesomeIcon icon={faTelevision} />
                <p>the good place</p>
              </div>
              <div className="favs-line">
                {' '}
                <FontAwesomeIcon icon={faGamepad} />
                <p>hyper light drifter</p>
              </div>
            </div>
          </div>

          <h2 className="center-text mb-50">personal interests.</h2>
          <div className="hobbies-container center-text">
            <div className="single-hobby">
              <img src={placeholder1} />
              <p>
                making piano covers of video game music and anime/kdrama OSTs
              </p>
            </div>

            <div className="single-hobby">
              <img src={placeholder2} />
              <p>building and customizing mechanical keyboards</p>
            </div>

            <div className="single-hobby">
              <img src={placeholder1} />
              <p>bullet journaling </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About

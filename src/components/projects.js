import { useState, useEffect, useLayoutEffect } from 'react'
import './projects.css'
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
import $ from 'jquery'
import senioritis from '../assets/projects/senioritis.png'
import peekaboo from '../assets/projects/peekaboo.png'

function Projects() {
  useEffect(() => {}, [])

  return (
    <>
      <div className="projects-page-container">
        <div className="width-80-small dark-brown page-padding">
          <h1 className="mb-100 ">
            recent <span className="dark-pink">projects.</span>
          </h1>
          <div className="project-rows">
            <div className="project-row">
              <div className="project-desc-container">
                <h3>peek-a-boo</h3>
                <p>
                  - a fully on-chain web3 game on the Arbitrum network, where players can earn $BOO tokens by playing a skill-based battleship-style P2E game.
                </p>
                <p>
                  - partnered with TreasureDAO, the biggest L2 decentralized gaming ecosystem, and resulted in over $1M in market volume.
                </p>
                <div className="skills-languages">
                  <Button className="button-small rose-bg grey">
                    <p className="mb-0">react</p>
                  </Button>
                  <Button className="button-small light-green-bg grey">
                    <p className="mb-0">solidity</p>
                  </Button>
                </div>
              </div>

              <div className="project-image-container">
                <div className="project-image-accent"></div>
                <div className="project-image">
                  {' '}
                  <img src={peekaboo} style={{ width: '100%' }} />
                </div>
              </div>
            </div>

            <div className="project-row">
              <div className="project-desc-container">
                <h3>senioritis</h3>
                <p>
                  - an AI powered web tool to help aspiring young students get a head start on their college 
                  writing process, and qualified job seeking candidates to get ahead of the resume curve.
                </p>
                <p>
                  - had over 10,000+ users.
                </p>
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
                </div>
              </div>

              <div className="project-image-container">
                <div className="project-image-accent"></div>
                <div className="project-image">
                  {' '}
                  <img src={senioritis} style={{ width: '100%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects

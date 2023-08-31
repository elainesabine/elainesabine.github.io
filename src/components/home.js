import { useState, useEffect } from 'react'
import './home.css'
import desktop from '../assets/desktop.png'
import Button from 'react-bootstrap/Button'

function Home() {
  return (
    <>
      <div className="landing-page-container">
        <div className="width-80 dark-brown">
          <div className="landing-intro-container">
            <div className="landing-intro-text">
              <h1 className="dark-brown">
                <span>hi there!</span> <br /> i'm{' '}
                <span className=" dark-pink">elaine.</span>
              </h1>
              <p>
                i am a software engineer with a passion for developing beautiful
                and functional user experiences.
              </p>
            </div>
            <div className="landing-intro-image">
              <img src={desktop} style={{ width: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

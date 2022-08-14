import { useState, useEffect } from 'react'
import './home.css'
import desktop from '../assets/desktop.png'
import Button from 'react-bootstrap/Button'

function Home() {
  return (
    <>
      <div className="landing-page-container">
        <div className="width-80 dark-pink">
          <div className="landing-intro-container">
            <div className="landing-intro-text">
              <h1>hi there!</h1>
              <h1 className=" mb-20">
                i'm <span className="pink-shadow">elaine.</span>
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
      <div className="contact-page-container dark-pink">
        <div className="contact-text-container">
          <h2 className="mb-20">lets get in touch.</h2>
          <p>
            drop a message if you want to work together, ask me any questions,
            or have a chat :)
          </p>
        </div>
        <Button className="button-brown">
          <p className="mb-0">say hello</p>
        </Button>
      </div>
    </>
  )
}

export default Home

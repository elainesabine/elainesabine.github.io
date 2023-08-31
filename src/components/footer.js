import { useState, useEffect } from 'react'
import './home.css'
import desktop from '../assets/desktop.png'
import Button from 'react-bootstrap/Button'

function Footer() {
  return (
    <>
      <div className="contact-page-container dark-brown">
        <div className="contact-text-container">
          <h2 className="mb-20">lets get in touch.</h2>
          <p>
            drop a message if you want to work together, ask me any questions,
            or have a chat :)
          </p>
        </div>
        <Button className="button-pink">
          <p className="mb-0">say hello</p>
        </Button>
      </div>
    </>
  )
}

export default Footer

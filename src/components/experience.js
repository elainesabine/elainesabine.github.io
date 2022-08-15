import { useState, useEffect, useLayoutEffect } from 'react'
import './experience.css'
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

function Experience() {
  useEffect(() => {
    scrollTimeline()
    window.addEventListener('resize', scrollTimeline)
  }, [])

  const scrollTimeline = () => {
    const maxHeight = $('.all-experience-container').height()
    const maxScrollTop = $(document).height() - $(window).height()
    const multiplier = maxHeight / maxScrollTop
    $(window).on('scroll', () => {
      var scrollTop = $(window).scrollTop()

      if (scrollTop < 5) {
        $('.timeline-line').css({ opacity: 0 })
        $('.bottom-circle').css({ opacity: 0 })
        $('.top-circle').css({ opacity: 0 })
      } else {
        $('.timeline-line').css({ opacity: 1 })
        $('.bottom-circle').css({ opacity: 1 })
        $('.top-circle').css({ opacity: 1 })
      }

      $('.timeline-line').height(scrollTop * multiplier + 20)
      $('.bottom-circle').css({ top: scrollTop * multiplier })
    })
  }

  return (
    <>
      <div className="experience-page-container">
        <div className="width-80-small light-brown page-padding">
          <h1>
            work <br /> <span className="light-pink">experience.</span>
          </h1>
          <div className="all-experience-container">
            <div className="timeline-line"></div>
            <div className="top-circle"></div>
            <div className="bottom-circle"></div>

            <div className="experience-row right-exp">
              <div className="single-experience-container ">
                <h3 className="purple-shadow mb-0">2022</h3>
                <h3 className="mb-0">snapchat</h3>
                <h4>iOS engineer (full time)</h4>
                <p>
                  - integrated an advanced night mode widget into the snapchat
                  mobile app
                </p>
                <p>
                  - carried out an A/B testing experiment to improve image
                  quality in low light capture by increasing exposure
                </p>
              </div>
            </div>

            <div className="experience-row left-exp">
              <div className="single-experience-container ">
                <h3 className="purple-shadow mb-0">2022</h3>
                <h3 className="mb-0">snapchat</h3>
                <h4>iOS engineer (full time)</h4>
                <p>
                  - integrated an advanced night mode widget into the snapchat
                  mobile app
                </p>
                <p>
                  - carried out an A/B testing experiment to improve image
                  quality in low light capture by increasing exposure
                </p>
              </div>
            </div>

            <div className="experience-row right-exp">
              <div className="single-experience-container">
                <h3 className="purple-shadow mb-0">2022</h3>
                <h3 className="mb-0">snapchat</h3>
                <h4>iOS engineer (full time)</h4>
                <p>
                  - integrated an advanced night mode widget into the snapchat
                  mobile app
                </p>
                <p>
                  - carried out an A/B testing experiment to improve image
                  quality in low light capture by increasing exposure
                </p>
              </div>
            </div>

            <div className="experience-row left-exp">
              <div className="single-experience-container">
                <h3 className="purple-shadow mb-0">2022</h3>
                <h3 className="mb-0">snapchat</h3>
                <h4>iOS engineer (full time)</h4>
                <p>
                  - integrated an advanced night mode widget into the snapchat
                  mobile app
                </p>
                <p>
                  - carried out an A/B testing experiment to improve image
                  quality in low light capture by increasing exposure
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Experience

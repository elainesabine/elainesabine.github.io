import { useEffect } from 'react'
import './experience.css'
import $ from 'jquery'

function Experience() {
  useEffect(() => {
    scrollTimeline()
    window.addEventListener('resize', scrollTimeline)
  }, [])

  const scrollTimeline = () => {
    const maxHeight = $('.all-experience-container').height()
    const topOfDiv =
      $('.experience-page-container').offset().top - $(window).height() * 0.25

    $(window).on('scroll', () => {
      var scrollTop = $(window).scrollTop()
      var curHeight = scrollTop - topOfDiv - $(window).height() * 0.25

      $('.timeline-line').height(curHeight + 20)
      $('.bottom-circle').css({
        top: curHeight,
      })

      if (curHeight > maxHeight) {
        $('.timeline-line').height(maxHeight + 20)
        $('.bottom-circle').css({ top: maxHeight })
      }
      console.log('scrollTop - topOfDiv', scrollTop - topOfDiv)
      if (curHeight < 0) {
        $('.timeline-line').height(0)
        $('.bottom-circle').css({ top: 0 })

        $('.timeline-line').css({ opacity: 0 })
        $('.bottom-circle').css({ opacity: 0 })
        $('.top-circle').css({ opacity: 0 })
      } else {
        $('.timeline-line').css({ opacity: 1 })
        $('.bottom-circle').css({ opacity: 1 })
        $('.top-circle').css({ opacity: 1 })
      }
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
                <h3 className="light- mb-0">2022</h3>
                <h3 className="mb-0 light-pink">snapchat</h3>
                <h4>iOS engineer</h4>
                <p>
                  - implemented a face-tracking lens for ring light v2 on the
                  snapchat mobile app
                </p>
                <p>
                  - successfully shipped a "most recent camera mode" slot on the
                  camera toolbar to increase overall camera modes usage.
                </p>
              </div>
            </div>

            <div className="experience-row left-exp">
              <div className="single-experience-container ">
                <h3 className="light- mb-0">2021</h3>
                <h3 className="mb-0 light-pink">snapchat</h3>
                <h4>iOS engineer intern</h4>
                <p>
                  - integrated an advanced night mode widget into the snapchat
                  mobile app
                </p>
                <p>
                  - created extensive UI tests to ensure smooth user experience
                  for the night mode widget
                </p>
                <p>
                  - carried out an A/B testing experiment to improve image
                  quality in low light capture by increasing exposure
                </p>
              </div>
            </div>

            <div className="experience-row right-exp">
              <div className="single-experience-container">
                <h3 className="light- mb-0">2021</h3>
                <h3 className="mb-0 light-pink">cal poly corporation</h3>
                <h4>web developer intern</h4>
                <p>
                  - redesigned and coded a side menu for the international
                  students website using HTML, CSS, and JavaScript to improve
                  navigation
                </p>
                <p>
                  - developed a PHP application for displaying graduate
                  education events from a CSV file
                </p>
                <p>
                  - created high-fidelity wireframes for numerous Cal Poly
                  websites to improve the user experience.
                </p>
              </div>
            </div>

            <div className="experience-row left-exp">
              <div className="single-experience-container">
                <h3 className="light- mb-0">2020</h3>
                <h3 className="mb-0 light-pink">amazon</h3>
                <h4>junior software developer</h4>
                <p>
                  - developed a user preference storage feature on an internal
                  site using React, Redux, DynamoDB, and Spring Framework
                </p>
                <p>
                  - developed a jurisdiction history page to enable the
                  operations team to track the past delivery areas/routes
                </p>
              </div>
            </div>

            <div className="experience-row right-exp">
              <div className="single-experience-container">
                <h3 className="light- mb-0">2019</h3>
                <h3 className="mb-0 light-pink">cal poly associated students</h3>
                <h4>it programmer student assistant</h4>
                <p>
                  - developed web application to fully digitalize ASI student
                  government elections using HTML, CakePHP, and SQL
                </p>
                <p>
                  - maintained and updated Cal Poly ASI website for 10,000+
                  students
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

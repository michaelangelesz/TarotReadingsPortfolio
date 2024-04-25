import Carousel from "react-multi-carousel"
import meter1 from "../assets/images/meter1.svg"
import meter2 from "../assets/images/meter2.svg"
import meter3 from "../assets/images/meter3.svg"
import "react-multi-carousel/lib/styles.css"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <div>
                <p>
                  Programming enthusiast with a natural aptitude for absorbing
                  new technologies.
                  <br />
                  <br />
                  Full Stack Software Development <br />
                  Mac and Windows Proficient <br />
                  Project Manager <br />
                  Quality Assurance <br />
                  Data Analyst <br />
                  Detail Oriented <br />
                  User Friendly <br />
                  Problem Solver <br />
                  Solution Finder
                  <br />
                  <br />
                  ¡Hablame en Español!
                </p>
              </div>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="web development" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="spanish" />
                  <h5>Spanish</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="brand identity" />
                  <h5>Brand Identity</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="logo design" />
                  <h5>Logo Design</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

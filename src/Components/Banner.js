import { Container, Row, Col } from "react-bootstrap"
import headerImg from "../assets/images/meSublime.jpeg"

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={5}>
                <div>
                  <img src={headerImg} classname="astronaut" alt="Header Img" />
                </div>
          </Col>
          <Col xs={12} md={6} xl={7}>
                <div>
                  <span className="tagline">✦ Mike M. Weisphal - Tarot Readings ✦</span>
                  <h1>
                    {`Welcome`} <br />
                  </h1>
                  <h2>
                    {`Full Stack Web Developer`}
                    <br />
                    {`UX/UI Design Specialist`}
                    <br />
                    {`Modern Web Design`}
                    <br />
                  </h2><br />
                  <p>Passion for creating spaces that are not only functional, but beautiful.
                  </p>
                  <p>
                    Let's start designing your website today!
                  </p>
                  <br />
                  <button type="button" onClick={() => window.open('https://www.linkedin.com/in/michael-m-weisphal/')}>LinkedIn</button>
                </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

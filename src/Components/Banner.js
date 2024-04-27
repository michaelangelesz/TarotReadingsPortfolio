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
                </div><br />
          </Col>
          <Col xs={12} md={6} xl={7}>
                <div>
                  <span className="tagline">✦ Mike M. Weisphal - Tarot Readings ✦</span>
                  <h1>
                    {`Welcome`} <br />
                  </h1>
                  <h2>
                    {`Insights from the Cards`}
                    <br />
                  </h2><br />
                  <p>A student of the arts for 27 years, and studying the stars since childhood<br /> Allow me to relay the most accurate message the cards have for you
                  </p>
                  <br />
                  <button type="button" onClick={() => window.open('https://venusandmarsrx.tumblr.com/tagged/sample')}>Sample Readings</button>
                </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

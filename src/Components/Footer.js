import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/images/logo-lion.png"
import linkedIn from "../assets/images/nav-icon-linkedin.svg"
import github from "../assets/images/nav-icon-github.svg"
import discord from "../assets/images/nav-icon-discord.svg"
import facebook from "../assets/images/nav-icon-facebook.svg"
import tumblr from "../assets/images/nav-icon-tumblr.svg"

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={6} className="footer-logo text-center text-sm-start">
            <img src={logo} alt="WebDesigns by Mike" />
            <h5>
            ✦ Mike M. Weisphal - Tarot Readings ✦
            </h5>
          </Col>
          <Col xs={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.facebook.com/michaelangelesz" target="_blank" rel="noreferrer">
                <img src={facebook} alt="Facebook" />
              </a>
            <a href="https://venusandmarsrx.tumblr.com/" target="_blank" rel="noreferrer">
                <img src={tumblr} alt="tumblr" />
              </a>
              <a href="https://discord.com/users/927145683662811157" target="_blank" rel="noreferrer">
                <img src={discord} alt="Discord" />
              </a>
              <a href="https://github.com/michaelangelesz" target="_blank" rel="noreferrer">
                <img src={github} alt="Github" />
              </a>
              <a href="https://www.linkedin.com/in/michael-m-weisphal/" target="_blank" rel="noreferrer">
                <img src={linkedIn} alt="LinkedIn" />
              </a>
            </div>
            <p className="copyright">
            Mike M. Weisphal © 2020-
                {new Date().getFullYear()}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
import { useState, useEffect } from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import logo from "../assets/images/logo-lion.png"
import linkedIn from "../assets/images/nav-icon-linkedin.svg"
import discord from "../assets/images/nav-icon-discord.svg"
import github from "../assets/images/nav-icon-github.svg"
import facebook from "../assets/images/nav-icon-facebook.svg"

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={
                activeLink === "contact" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("contact")}
            >
              Contact
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/michael-m-weisphal/" target="_blank" rel="noreferrer">
                <img src={linkedIn} alt="LinkedIn" />
              </a>
              <a href="https://github.com/michaelangelesz" target="_blank" rel="noreferrer">
                <img src={github} alt="Github" />
              </a>
              <a href="https://www.facebook.com/mike.weisphal/" target="_blank" rel="noreferrer">
                <img src={facebook} alt="Facebook" />
              </a>
              <a href="https://discord.com/users/927145683662811157" target="_blank" rel="noreferrer">
                <img src={discord} alt="Discord" />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

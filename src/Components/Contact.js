import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { MailchimpForm } from "./MailchimpForm"
import contactImg from "../assets/images/meAndOpahl.jpeg"
import "animate.css"

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails)
  const [buttonText, setButtonText] = useState("Send")
  const [status, setStatus] = useState({})

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setButtonText("Sending...")
    let response = await fetch("http://localhost:5555/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    })
    setButtonText("Send")
    let result = await response.json()
    setFormDetails(formInitialDetails)
    if (result.code === 200) {
      setStatus({ succes: true, message: "Message sent successfully" })
    } else {
      setStatus({
        succes: false,
        message: "Something went wrong, please try again later.",
      })
    }
  }

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center text-center">
          <Col size={12} md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col size={12} md={6}>
            <div className="contact-form">
              <h2>Get In Touch</h2>
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.firstName}
                      placeholder="First Name"
                      onChange={(e) =>
                        onFormUpdate("firstName", e.target.value)
                      }
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.lasttName}
                      placeholder="Last Name"
                      onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="email"
                      value={formDetails.email}
                      placeholder="Email Address"
                      onChange={(e) => onFormUpdate("email", e.target.value)}
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="tel"
                      value={formDetails.phone}
                      placeholder="Phone No."
                      onChange={(e) => onFormUpdate("phone", e.target.value)}
                    />
                  </Col>
                  <Col size={12} className="px-1">
                    <textarea
                      rows="6"
                      value={formDetails.message}
                      placeholder="Message"
                      onChange={(e) => onFormUpdate("message", e.target.value)}
                    ></textarea>
                    <button type="submit">
                      <span>{buttonText}</span>
                    </button>
                  </Col>
                  {status.message && (
                    <Col>
                      <p
                        className={
                          status.success === false ? "danger" : "success"
                        }
                      >
                        {status.message}
                      </p>
                    </Col>
                  )}
                </Row>
              </form>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center dm-contact">
          <hr />
          <Col xs={12} md={4}>
            <h3>Address</h3>
            <p>Rocky Mount, NC</p>
          </Col>
          <Col xs={12} md={4}>
            <h3>Text/Mobile</h3>
            <p>706-313-0402</p>
          </Col>
          <Col xs={12} md={4}>
            <h3>Email</h3>
            <p>mmweisphal@outlook.com</p>
          </Col>
        </Row>
        <hr />
        <br />
      </Container>
      <MailchimpForm />
    </section>
  )
}

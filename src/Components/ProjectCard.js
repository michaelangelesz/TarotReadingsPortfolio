import { Col } from "react-bootstrap"

export const ProjectCard = ({ title, description, link, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <p>{link}</p>
        </div>
      </div>
    </Col>
  )
}

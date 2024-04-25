import { Container, Row, Col, Tab, Nav } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import movieGallery1 from "../assets/images/mg-welcome-page.png"
import movieGallery2 from "../assets/images/mg-gallery.png"
import restRant1 from "../assets/images/restRant1.png"
import restRant2 from "../assets/images/restRant2.png"
import memoryAlbums from "../assets/images/memoryAlbums.png"
import memoryTarot from "../assets/images/memoryTarot.png"

export const Projects = () => {
  const projects = [
    {
      title: "Movie Gallery",
      description:
        "The Movie Gallery is a MERN full-stack web app with full CRUD functionality.",
      link: (
        <a href="https://my-movie-gallery.onrender.com" target="_blank" rel="noreferrer" >
          Check it out!
        </a>
      ),
      imgUrl: movieGallery1,
    },
    {
      title: "Movie Gallery",
      description: "Team developed in an agile environment.",
      link: (
        <a
          href="https://github.com/michaelangelesz/Movie-Gallery"
          target="_blank" rel="noreferrer" 
        >
          Check the repo!
        </a>
      ),
      imgUrl: movieGallery2,
    },
    {
      title: "Memory Tarot",
      description:
        "Milestone Project 1 for ThriveDX. How are your memory skills?",
      link: (
        <a
          href="https://michaelangelesz.github.io/Memory-Game/"
          target="_blank" rel="noreferrer" 
        >
          Play now!
        </a>
      ),
      imgUrl: memoryTarot,
    },
    {
      title: "The REST-rant",
      description:
        "REST-rant is a MERN full-stack web app with full CRUD functionality.",
      link: (
        <a href="https://rest-rant-0nmv.onrender.com/" target="_blank" rel="noreferrer" >
          Check it out!
        </a>
      ),
      imgUrl: restRant1,
    },
    {
      title: "The REST-rant",
      description: "My first full-stack web app development.",
      link: (
        <a
          href="https://github.com/michaelangelesz/project-REST-rant"
          target="_blank" rel="noreferrer" 
        >
          Check the repo!
        </a>
      ),
      imgUrl: restRant2,
    },
    {
      title: "Memory Albums",
      description: "Another fun version of the Memory Tarot game!",
      link: (
        <a
          href="https://michaelangelesz.github.io/Memory-Albums/"
          target="_blank" rel="noreferrer" 
        >
          Play now!
        </a>
      ),
      imgUrl: memoryAlbums,
    },
  ]

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Projects</h2>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Class Projects</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Feature Project</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Hobbies & Interests</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <h3>Some fun projects I did in class!</h3><br />
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cumque quam, quod neque provident velit, rem explicabo
                      excepturi id illo molestiae blanditiis, eligendi dicta
                      officiis asperiores delectus quasi inventore debitis quo.
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cumque quam, quod neque provident velit, rem explicabo
                      excepturi id illo molestiae blanditiis, eligendi dicta
                      officiis asperiores delectus quasi inventore debitis quo.
                    </p>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

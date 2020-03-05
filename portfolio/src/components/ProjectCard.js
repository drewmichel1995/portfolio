import React from "react";
import {
  Card,
  Row,
  Col,
  ButtonGroup,
  Button,
  Accordion,
  Carousel
} from "react-bootstrap";

import DevIcon from "devicon-react-svg";
import StackComponent from "./StackComponent";
import "./style.css";

const ProjectCard = ({ projects }) => {
  const isMobile = window.innerWidth < 480;

  return (
    <div>
      <h2 className="section-header" id="projects">
        Projects
      </h2>
      <hr />
      <Carousel interval={null}>
        {projects.map(data => (
          <Carousel.Item>
            <Row className="justify-content-center projects-card">
              <Col md={{ span: 6 }}>
                <Accordion>
                  <Card
                    style={{ borderRadius: "1rem" }}
                    className="text-center"
                  >
                    <Card.Header>
                      <Row className="align-items-center">
                        <Col className="stack-title">
                          <h3>
                            <div className="stack-title">{data.title}</div>
                          </h3>

                          <Accordion.Toggle
                            as={Button}
                            variant="link"
                            eventKey="0"
                            className="stack-toggle"
                          >
                            {data.stack.map(item => (
                              <DevIcon
                                icon={item.icon}
                                style={{ width: "2rem" }}
                              />
                            ))}
                          </Accordion.Toggle>
                        </Col>
                        <Col className="nopadding">
                          <ButtonGroup className="mt-3">
                            <Button
                              variant="link"
                              style={{ whiteSpace: "nowrap" }}
                              href={data.githubLink}
                            >
                              View Code
                            </Button>
                            <Button
                              variant="link"
                              style={{ whiteSpace: "nowrap" }}
                            >
                              View Demo
                            </Button>
                          </ButtonGroup>
                        </Col>
                      </Row>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body className="stack-body">
                        <StackComponent data={data.stack} />
                      </Card.Body>
                    </Accordion.Collapse>
                    <Card.Body>
                      <Row style={{ justifyContent: "center" }}>
                        <Row>
                          <Col
                            style={{
                              paddingLeft: "2rem",
                              paddingRight: "2rem"
                            }}
                          >
                            <Card.Text>{data.description}</Card.Text>
                          </Col>
                        </Row>
                      </Row>
                    </Card.Body>
                  </Card>
                </Accordion>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ProjectCard;

import React from "react";
import { Card, Row, Col, Tab, Nav, Carousel } from "react-bootstrap";
import ImageHelper from "./ImageHelper";
import StackComponent from "./StackComponent";

const toppad = window.innerWidth < 480 ? "0rem" : "0rem";

const ExperienceCard = ({ experience }) => {
  return (
    <div>
      <h2 className="section-header" id="experience">
        Experience
      </h2>
      <hr />
      <Carousel interval={null}>
        {experience.map(data => (
          <Carousel.Item>
            <Row className="justify-content-center experience-card">
              <Col md={{ span: 6 }}>
                <Tab.Container
                  id="left-tabs-example"
                  defaultActiveKey="description"
                >
                  <Card
                    style={{ borderRadius: "1rem" }}
                    className="align-items-center"
                  >
                    <Card.Header
                      className="experience-card-header"
                      style={{ overflow: "hidden" }}
                    >
                      <Row className="justify-content-center align-items-center mb-1">
                        <Col xs="auto">
                          <ImageHelper mode={data.mode} />
                        </Col>
                        <Col
                          style={{
                            paddingTop: toppad,
                            paddingLeft: "3rem",
                            paddingRight: "3rem"
                          }}
                          xs="auto"
                        >
                          <Row className="justify-content-center align-items-center">
                            <Card.Title className="no-wrap text-align-center">
                              {data.jobTitle}
                            </Card.Title>
                          </Row>
                          <Row className="align-items-center justify-content-center">
                            <Card.Subtitle className="mb-2 text-muted no-wrap text-align-center">
                              {data.dates}
                            </Card.Subtitle>
                          </Row>
                          <Row className="align-items-center justify-content-center">
                            <Card.Subtitle className="mb-2 text-muted no-wrap text-align-center">
                              {data.location}
                            </Card.Subtitle>
                          </Row>
                        </Col>
                      </Row>
                      <Nav fill activeKey="description" variant="tabs">
                        <Nav.Item>
                          <Nav.Link eventKey="description">
                            Description
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="tech">Technologies</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Card.Header>
                    <Card.Body>
                      <Tab.Content className="justify-content-center">
                        <Tab.Pane eventKey="description">
                          <Row>
                            <Col>
                              <Card.Text>{data.description}</Card.Text>
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="tech">
                          <Col>
                            <StackComponent data={data.skills} />
                          </Col>
                        </Tab.Pane>
                      </Tab.Content>
                    </Card.Body>
                  </Card>
                </Tab.Container>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ExperienceCard;

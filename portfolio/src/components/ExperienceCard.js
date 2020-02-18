import React from "react";
import {
  Card,
  Row,
  Col,
  Tabs,
  Tab,
  ListGroup,
  Container
} from "react-bootstrap";
import ImageHelper from "./ImageHelper";
import StackComponent from "./StackComponent";
import DevIcon from "devicon-react-svg";

const isMobile = window.innerWidth < 480;
const talign = isMobile ? "center" : "left";
const toppad = isMobile ? "0rem" : "0rem";

const ExperienceCard = ({ data }) => {
  const firstHalf = data.skills.slice(0, Math.floor(data.skills.length / 2));
  const secondHalf = data.skills.slice(
    Math.floor(data.skills.length / 2),
    data.skills.length
  );

  return (
    <Row className="justify-content-center" style={{ padding: "2rem" }}>
      <Col md={{ span: 6 }}>
        <Card style={{ borderRadius: "1rem" }}>
          <Card.Header className="experience-card-header">
            <Row className="justify-content-center align-items-center">
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
          </Card.Header>
          <Tabs
            defaultActiveKey="description"
            id="uncontrolled-tab-example"
            variant="pills"
            className="justify-content-center"
          >
            <Tab
              eventKey="description"
              title="Description"
              className="align-items-center"
            >
              <Card.Body>
                <Row>
                  <Col style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
                    <Card.Text>{data.description}</Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Tab>
            <Tab
              eventKey="stack"
              title="Stack"
              className="align-items-center justify-content-center"
              style={{ borderRadius: "1rem" }}
            >
              <Card.Body className="justify-content-center">
                <ListGroup>
                  <Row>
                    <Col>
                      {firstHalf.map(item => (
                        <Row className="justify-content-center">
                          <DevIcon icon={item.icon} style={{ width: "2rem" }} />
                          {item.name}
                        </Row>
                      ))}
                    </Col>
                    <Col>
                      {secondHalf.map(item => (
                        <Row className="justify-content-center">
                          <DevIcon icon={item.icon} style={{ width: "2rem" }} />
                          {item.name}
                        </Row>
                      ))}
                    </Col>
                  </Row>
                </ListGroup>
              </Card.Body>
            </Tab>
            <Tab
              eventKey="project-highlights"
              title="Project Highlights"
              className="align-items-center"
            >
              <Card.Body>
                <Row>
                  <Col style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
                    <Card.Text>Stack will go here</Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Tab>
          </Tabs>
        </Card>
      </Col>
    </Row>
  );
};

export default ExperienceCard;

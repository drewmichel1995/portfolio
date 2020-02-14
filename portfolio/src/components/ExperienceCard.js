import React from "react";
import { Card, ListGroup, Row, Col } from "react-bootstrap";
import ImageHelper from "./ImageHelper";
import DevIcon from "devicon-react-svg";

const isMobile = window.innerWidth < 480;
const talign = isMobile ? "center" : "left";
const toppad = isMobile ? "0rem" : "0rem";

const ExperienceCard = ({ data }) => {
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
          <Card.Body>
            <Row className="align-items-center">
              <Row className="text-align-center">
                <Col style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
                  <Card.Text>{data.description}</Card.Text>
                </Col>
              </Row>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default ExperienceCard;

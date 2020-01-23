import React from "react";
import { Card, ListGroup, Row, Col } from "react-bootstrap";
import ImageHelper from "./ImageHelper";
import DevIcon from "devicon-react-svg";

const ExperienceCard = ({ data }) => {
  return (
    <Row className="justify-content-md-center" style={{ padding: "2rem" }}>
      <Col md={{ span: 6 }}>
        <Card style={{ borderRadius: "1rem" }}>
          <Card.Body>
            <Row style={{ justifyContent: "center" }}>
              <ImageHelper mode={data.mode} />

              <Col
                style={{
                  paddingTop: "3rem",
                  paddingLeft: "3rem",
                  paddingRight: "3rem"
                }}
              >
                <Row>
                  <Col lg={6}>
                    <Card.Title>{data.org}</Card.Title>
                  </Col>
                  <Col>
                    <Card.Title> {data.jobtitle}</Card.Title>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <Card.Subtitle className="mb-2 text-muted">
                      {data.dates}
                    </Card.Subtitle>
                  </Col>
                  <Col>
                    <Card.Subtitle className="mb-2 text-muted">
                      {data.location}
                    </Card.Subtitle>
                  </Col>
                </Row>
              </Col>
              <Row>
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

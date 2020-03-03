import React from "react";

import { Col, Row, Container } from "react-bootstrap";
import SocialRow from "./SocialRow";
import ImageHelper from "./ImageHelper";
import "./style.css";

const IntroductionCard = ({ person }) => {
  return (
    <Container>
      <Row className="justify-content-center align-items-center introduction-card d-none d-md-flex">
        <Col className="justify-content-center text-right">
          <ImageHelper mode="profile" width="15rem" />
        </Col>
        <Col className="justify-content-center white-text">
          <h2 className="no-wrap">{person.jobTitle}</h2>
          <h2>{person.location}</h2>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center introduction-card d-md-none">
        <Col className="justify-content-center text-center">
          <ImageHelper mode="profile" width="15rem" />
        </Col>
        <Col className="justify-content-center white-text text-align-center">
          <h2 className="no-wrap">{person.jobTitle}</h2>
          <h2>{person.location}</h2>
          <SocialRow />
        </Col>
      </Row>
    </Container>
  );
};

export default IntroductionCard;

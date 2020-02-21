import React from "react";
import { Container, Col, Badge, Row } from "react-bootstrap";
import DevIcon from "devicon-react-svg";
import "./style.css";

const StackComponent = ({ data }) => {
  const half = Math.floor(data.length / 2);
  const first = data.slice(0, half);
  const second = data.slice(half, data.length);

  return (
    <Container className="justify-content-center">
      <Row className="justify-content-center">
        {data.map(item => (
          <Col lg="auto" className="text-align-center">
            <DevIcon icon={item.icon} style={{ width: "2rem" }}></DevIcon>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default StackComponent;

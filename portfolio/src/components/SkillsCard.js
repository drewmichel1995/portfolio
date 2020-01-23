import React from "react";
import { Card, ListGroup, Row, Col } from "react-bootstrap";
import DevIcon from "devicon-react-svg";

const SkillsCard = ({ data }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "2rem"
      }}
    >
      <Card style={{ width: "15rem", borderRadius: "1rem" }}>
        <Card.Header>
          <strong>{data.title}</strong>
        </Card.Header>
        <ListGroup variant="flush">
          {data.fields.map(item => (
            <ListGroup.Item style={{ borderRadius: "1rem" }}>
              <Col lg={true}>
                <Row style={{ justifyContent: "center" }}>
                  <Col>
                    <DevIcon icon={item.icon} style={{ width: "2rem" }} />
                  </Col>

                  <Col>{item.name}</Col>
                </Row>
              </Col>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
};

export default SkillsCard;

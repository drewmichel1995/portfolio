import React from "react";
import {
  Card,
  ListGroup,
  Row,
  Col,
  Container,
  Accordion
} from "react-bootstrap";
import DevIcon from "devicon-react-svg";
import "./style.css";

const SkillsCard = ({ data }) => {
  return (
    <div className="skills-container">
      <Accordion defaultActiveKey="0">
        <Card style={{ width: "15rem", borderRadius: "1rem" }}>
          <Accordion.Toggle
            as={Card.Header}
            eventKey="0"
            className="text-center skills-card-header"
          >
            <strong>{data.title}</strong>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <ListGroup>
              {data.fields.map(item => (
                <ListGroup.Item className="skills-list">
                  <Container className="align-items-center">
                    <Row>
                      <Col md={4}>
                        <DevIcon icon={item.icon} style={{ width: "2rem" }} />
                      </Col>
                      <Col md={4} className="text-center">
                        {item.name}
                      </Col>
                    </Row>
                  </Container>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default SkillsCard;

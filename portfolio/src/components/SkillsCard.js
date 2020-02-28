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

function SkillsCard(data) {
  return (
    <React.Fragment>
      <div className="skills-container">
        <Accordion defaultActiveKey={0}>
          <Card style={{ width: "15rem", borderRadius: "1rem" }}>
            {data.map((skill, idx) => (
              <div>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey={idx}
                  className="text-center skills-card-header"
                >
                  <strong>{skill.title}</strong>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={idx}>
                  <ListGroup>
                    {skill.fields.map(item => (
                      <ListGroup.Item className="skills-list">
                        <Container className="align-items-center">
                          <Row>
                            <Col md={4}>
                              <DevIcon
                                icon={item.icon}
                                style={{ width: "2rem" }}
                              />
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
              </div>
            ))}
          </Card>
        </Accordion>
      </div>
    </React.Fragment>
  );
}

export default SkillsCard;

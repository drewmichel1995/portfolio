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
import useWindowDimensions from "./useWindowDimensions";

const ExpandedSkillsCard = ({ data }) => {
  const { gutters } = useWindowDimensions();
  return (
    <Row
      className="justify-content-center d-none d-lg-flex"
      id="skills"
      noGutters={gutters}
    >
      {data.map((skill, idx) => (
        <Col className="skill-card-col">
          <Card style={{ width: "15rem", borderRadius: "1rem" }}>
            <Card.Header className="text-center skills-card-header">
              <strong>{skill.title}</strong>
            </Card.Header>

            <ListGroup>
              {skill.fields.map(item => (
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
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ExpandedSkillsCard;

import React from 'react';
import {
  Card,
  ListGroup,
  Row,
  Col,
  ButtonToolbar,
  Button,
  Accordion,
  Badge
} from 'react-bootstrap';
import ImageHelper from './ImageHelper';
import DevIcon from 'devicon-react-svg';
import StackComponent from './StackComponent';

const ProjectCard = ({ data }) => {
  const isMobile = window.innerWidth < 480;

  return (
    <Row className="justify-content-md-center" style={{ padding: '2rem' }}>
      <Col md={{ span: 6 }}>
        <Accordion>
          <Card style={{ borderRadius: '1rem' }} className="text-center">
            <Card.Header>
              <Row className="align-items-center">
                <Col className="order-3 order-lg-1">
                  <Button
                    variant="info"
                    style={{ whiteSpace: 'nowrap' }}
                    href={data.githubLink}
                  >
                    View Code
                  </Button>
                </Col>
                <Col className="order-1 order-lg-2">
                  <h3>
                    <Badge pill variant="dark">
                      {data.title}
                    </Badge>
                  </h3>

                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    {data.stack.map(item => (
                      <DevIcon icon={item.icon} style={{ width: '2rem' }} />
                    ))}
                  </Accordion.Toggle>
                </Col>
                <Col className="order-2 order-lg-3">
                  <Button variant="primary" style={{ whiteSpace: 'nowrap' }}>
                    View Demo
                  </Button>
                </Col>
              </Row>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <StackComponent data={data.stack} />
              </Card.Body>
            </Accordion.Collapse>
            <Card.Body>
              <Row style={{ justifyContent: 'center' }}>
                <Row>
                  <Col style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
                    <Card.Text>{data.description}</Card.Text>
                  </Col>
                </Row>
              </Row>
            </Card.Body>
          </Card>
        </Accordion>
      </Col>
    </Row>
  );
};

export default ProjectCard;

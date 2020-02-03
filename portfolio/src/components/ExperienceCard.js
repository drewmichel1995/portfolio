import React from 'react';
import { Card, ListGroup, Row, Col } from 'react-bootstrap';
import ImageHelper from './ImageHelper';
import DevIcon from 'devicon-react-svg';

const isMobile = window.innerWidth < 480;
const talign = isMobile ? 'center' : 'left';
const toppad = isMobile ? '0rem' : '0rem';

const ExperienceCard = ({ data }) => {
  return (
    <Row className="justify-content-md-center" style={{ padding: '2rem' }}>
      <Col md={{ span: 6 }}>
        <Card style={{ borderRadius: '1rem' }}>
          <Card.Header>
            <Row className="justify-content-center align-items-center">
              <ImageHelper mode={data.mode} />

              <Col
                style={{
                  paddingTop: toppad,
                  paddingLeft: '3rem',
                  paddingRight: '3rem'
                }}
              >
                <Row style={{ textAlign: talign }}>
                  <Col lg={6}>
                    <Card.Title>{data.org}</Card.Title>
                  </Col>
                  <Col>
                    <Card.Title> {data.jobTitle}</Card.Title>
                  </Col>
                </Row>
                <Row style={{ textAlign: talign }}>
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
            </Row>
          </Card.Header>
          <Card.Body>
            <Row className="align-items-center">
              <Row style={{ textAlign: talign }}>
                <Col style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
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

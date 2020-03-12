import React from 'react';
import { Card, Row, Col, Tab, Nav, Carousel } from 'react-bootstrap';
import ReadMoreReact from 'read-more-react';
import ImageHelper from './ImageHelper';
import DegreeViewer from './DegreeViewer';

const toppad = window.innerWidth < 480 ? '0rem' : '0rem';

const EducationCard = ({ education }) => {
  return (
    <div className="section-header card-bottom">
      <h2 id="education" className="white-text">
        Education
      </h2>
      <hr />
      <Carousel interval={null} controls={false} touch={true}>
        {education.map(data => (
          <Carousel.Item>
            <Row className="justify-content-center experience-card">
              <Col md={{ span: 6 }}>
                <Tab.Container
                  id="left-tabs-example"
                  defaultActiveKey="description"
                >
                  <Card
                    style={{ borderRadius: '1rem' }}
                    className="align-items-center"
                  >
                    <Card.Header
                      className="experience-card-header"
                      style={{ overflow: 'hidden' }}
                    >
                      <Row className="justify-content-center align-items-center">
                        <Col xs="auto">
                          <ImageHelper mode={data.mode} />
                        </Col>
                        <Col
                          style={{
                            paddingTop: toppad,
                            paddingLeft: '3rem',
                            paddingRight: '3rem'
                          }}
                          xs="auto"
                        >
                          <Row className="justify-content-center align-items-center">
                            <Card.Title className="text-align-center">
                              {data.organization}
                            </Card.Title>
                          </Row>
                          <Row className="justify-content-center align-items-center">
                            <Card.Subtitle className="mb-2 no-wrap text-align-center">
                              {data.credential}
                            </Card.Subtitle>
                          </Row>
                          <Row className="align-items-center justify-content-center">
                            <Card.Subtitle className="mb-2 text-muted no-wrap text-align-center">
                              {data.dates}
                            </Card.Subtitle>
                          </Row>
                          <Row className="align-items-center justify-content-center">
                            <Card.Subtitle className="text-muted no-wrap text-align-center">
                              {data.location}
                            </Card.Subtitle>
                          </Row>
                          {data.organization ===
                            'Tennessee Tech University' && (
                            <Row className="align-items-center justify-content-center">
                              <DegreeViewer />
                            </Row>
                          )}
                        </Col>
                      </Row>
                    </Card.Header>
                    <Card.Body>
                      <Row>
                        <Col>
                          <Card.Text className="d-none d-lg-flex">
                            {data.description}
                          </Card.Text>
                          <Card.Text className="d-lg-none">
                            <ReadMoreReact text={data.description} />
                          </Card.Text>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Tab.Container>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default EducationCard;

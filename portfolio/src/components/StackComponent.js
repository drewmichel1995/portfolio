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

const StackComponent = ({ data }) => {
  const isMobile = window.innerWidth < 480;

  return (
    <div>
      {isMobile ? (
        <ListGroup variant="flush" style={{ justifyContent: 'center' }}>
          {data.map(item => (
            <ListGroup.Item style={{ borderStyle: 'none' }}>
              <Col>
                <Badge pill variant="dark">
                  {item.name}
                </Badge>

                <DevIcon icon={item.icon} style={{ width: '2rem' }} />
              </Col>
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <ListGroup
          variant="flush"
          style={{ justifyContent: 'center' }}
          horizontal
        >
          {data.map(item => (
            <ListGroup.Item style={{ borderStyle: 'none' }}>
              <Col>
                <Badge pill variant="dark">
                  {item.name}
                </Badge>

                <DevIcon icon={item.icon} style={{ width: '2rem' }} />
              </Col>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>
  );
};

export default StackComponent;

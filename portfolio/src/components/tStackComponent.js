import React from "react";
import { ListGroup, Col, Badge, Row } from "react-bootstrap";
import DevIcon from "devicon-react-svg";
import "./style.css";

const StackComponent = ({ data }) => {
  const half = Math.floor(data.length / 2);
  const first = data.slice(0, half);
  const second = data.slice(half, data.length);

  return (
    <div>
      <ListGroup variant="flush" className="d-none">
        {data.map(item => (
          <ListGroup.Item className="stack-col no-wrap">
            <DevIcon
              icon={item.icon}
              style={{ width: "3rem", paddingRight: "1rem" }}
            />

            <Badge pill variant="dark">
              {item.name}
            </Badge>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <div style={{ overflow: "hidden" }}>
        <Row>
          <ListGroup variant="flush" horizontal>
            {first.map(item => (
              <ListGroup.Item className="stack-col">
                <Col className="justify-content-center text-align-center">
                  <DevIcon icon={item.icon} style={{ width: "3rem" }} />

                  <Badge pill variant="dark">
                    {item.name}
                  </Badge>
                </Col>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Row>
        <Row>
          <ListGroup variant="flush" horizontal>
            {second.map(item => (
              <ListGroup.Item className="stack-col">
                <Col className="justify-content-center text-align-center">
                  <DevIcon icon={item.icon} style={{ width: "3rem" }} />

                  <Badge pill variant="dark">
                    {item.name}
                  </Badge>
                </Col>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Row>
      </div>
    </div>
  );
};

export default StackComponent;

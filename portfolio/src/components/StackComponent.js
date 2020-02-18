import React from "react";
import { ListGroup, Col, Badge } from "react-bootstrap";
import DevIcon from "devicon-react-svg";
import "./style.css";

const StackComponent = ({ data }) => {
  const isMobile = window.innerWidth < 480;

  return (
    <div>
      <ListGroup
        variant="flush"
        style={{ justifyContent: "center" }}
        horizontal="lg"
      >
        {data.map(item => (
          <ListGroup.Item
            className="stack-col text-align-left no-wrap"
            as={Col}
          >
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
    </div>
  );
};

export default StackComponent;

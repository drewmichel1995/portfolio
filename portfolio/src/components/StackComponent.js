import React from "react";
import {
  Container,
  Col,
  Badge,
  Row,
  OverlayTrigger,
  Tooltip
} from "react-bootstrap";
import DevIcon from "devicon-react-svg";
import "./style.css";

const side = index => {
  return index % 2 == 0 ? "left" : "right";
};

const StackComponent = ({ data }) => {
  return (
    <Container className="justify-content-center">
      <ul className="justify-content-center">
        {data.map((item, idx) => (
          <li
            style={{ listStyleType: "none" }}
            lg="auto"
            className="text-align-center"
          >
            <DevIcon icon={item.icon} style={{ width: "2rem" }}></DevIcon>
            <div>{item.name}</div>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default StackComponent;

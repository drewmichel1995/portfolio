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
import ExpandedSkillsCard from "./ExpandedSkillsCard";
import CompactSkillsCard from "./CompactSkillsCard";
import "./style.css";

const SkillsCard = ({ data }) => {
  return (
    <div className="skills-container" id="skills">
      <ExpandedSkillsCard data={data} />
      <CompactSkillsCard data={data} />
    </div>
  );
};

export default SkillsCard;

import React from "react";
import ExpandedSkillsCard from "./ExpandedSkillsCard";
import CompactSkillsCard from "./CompactSkillsCard";
import "./style.css";

const SkillsCard = ({ data }) => {
  return (
    <div id="skills">
      <h2 className="section-header">Skills</h2>
      <hr />
      <div className="skills-container">
        <ExpandedSkillsCard data={data} />
        <CompactSkillsCard data={data} />
      </div>
    </div>
  );
};

export default SkillsCard;

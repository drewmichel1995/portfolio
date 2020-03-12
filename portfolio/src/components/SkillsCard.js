import React from 'react';
import ExpandedSkillsCard from './ExpandedSkillsCard';
import CompactSkillsCard from './CompactSkillsCard';
import './style.css';

const SkillsCard = ({ data }) => {
  return (
    <div className="skills-card section-header card-bottom">
      <h2 className="white-text" id="skills">
        Skills
      </h2>
      <hr />
      <div className="skills-container">
        <ExpandedSkillsCard data={data} />
        <CompactSkillsCard data={data} />
      </div>
    </div>
  );
};

export default SkillsCard;

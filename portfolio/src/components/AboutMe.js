import React, { Component } from "react";
import { Col } from "react-bootstrap";
import IntroductionCard from "./IntroductionCard";
import SkillsCard from "./SkillsCard";
import ExperienceCard from "./ExperienceCard";
import ProjectCard from "./ProjectCard";
import EducationCard from "./EducationCard";

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      skills: [],
      experience: [],
      projects: [],
      education: []
    };
  }

  componentDidMount() {
    var url = "/server/portfolioinfo";

    fetch(url, { method: "get" })
      .then(res => res.json())
      .then(result => {
        this.setState({
          profile: result.profile,
          skills: result.skills,
          experience: result.experience,
          education: result.education,
          projects: result.projects
        });
      });

    console.log(this.state.profile);
  }

  render() {
    const { profile, skills, experience, education, projects } = this.state;

    return (
      <div className="about-me">
        <Col>
          <IntroductionCard person={profile} />

          <SkillsCard data={skills} />

          <ExperienceCard experience={experience} />

          <EducationCard education={education} />

          <ProjectCard projects={projects} />
        </Col>
      </div>
    );
  }
}

export default AboutMe;

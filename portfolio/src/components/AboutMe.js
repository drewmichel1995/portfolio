import React, { Component } from 'react';
import { Hero, Navbar } from '@front10/landing-page-book/dist/components';
import { Col, Row, Carousel } from 'react-bootstrap';
import IntroductionCard from './IntroductionCard';
import SkillsCard from './SkillsCard';
import ExperienceCard from './ExperienceCard';
import ProjectCard from './ProjectCard';
import Element from 'react-scroll';
import PortfolioNavbar from './PortfolioNavbar';

const project = {
  title: 'Subdomain Scanner',
  stack: [
    {
      name: 'Python',
      icon: 'python'
    },
    {
      name: 'Angular',
      icon: 'angular_simple'
    },
    {
      name: 'SQL Lite',
      icon: 'sqllite'
    },
    {
      name: 'NGINX',
      icon: 'nginx'
    },
    {
      name: 'Docker',
      icon: 'docker'
    }
  ],
  description:
    'A Subdomain Scanner Web UI being served by a custom Python server using the OWASP developed AMASS Subdomain Scanner utility.',
  githubLink: 'https://github.com/drewmichel1995/PenTest-Docker',
  demoLink: ''
};

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      skills: [],
      experience: []
    };
  }

  componentDidMount() {
    var url = '/server/portfolioinfo';

    fetch(url, { method: 'get' })
      .then(res => res.json())
      .then(result => {
        this.setState({
          profile: result.profile,
          skills: result.skills,
          experience: result.experience
        });
      });
  }

  render() {
    const { profile, skills, experience } = this.state;

    return (
      <div className="about-me">
        <PortfolioNavbar name={profile.name} />
        <Col>
          <IntroductionCard person={profile} />

          <SkillsCard data={skills} />

          <ExperienceCard experience={experience} />

          <ProjectCard data={project} />
        </Col>
      </div>
    );
  }
}

export default AboutMe;

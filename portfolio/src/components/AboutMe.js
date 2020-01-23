import React, { Component } from "react";
import { Hero, Navbar } from "@front10/landing-page-book/dist/components";
import { Col, Row } from "react-bootstrap";
import IntroductionCard from "./IntroductionCard";
import SkillsCard from "./SkillsCard";
import ExperienceCard from "./ExperienceCard";

const person = {
  name: "Drew Michel",
  mode: "profile",
  age: "24",
  jobTitle: "Full Stack Engineer",
  location: "Cookeville, TN"
};

const frontend = {
  title: "Front End",
  fields: [
    { name: "JavaScript", icon: "javascript" },
    { name: "HTML", icon: "html5" },
    { name: "CSS", icon: "css3" },
    { name: "React", icon: "react" },
    { name: "Angular", icon: "angular_simple" },
    { name: "JQuery", icon: "jquery" }
  ]
};

const backend = {
  title: "Back End",
  fields: [
    { name: "Java", icon: "java" },
    { name: "Python", icon: "python" },
    { name: "C#", icon: "windows" },
    { name: "C++", icon: "code_badge" },
    { name: "Swift", icon: "swift" },
    { name: "NodeJS", icon: "nodejs" }
  ]
};

const database = {
  title: "Database",
  fields: [
    { name: "MongoDB", icon: "mongodb" },
    { name: "MS SQL", icon: "msql_server" },
    { name: "SQL Lite", icon: "sqllite" },
    { name: "Firebase", icon: "firebase" },
    { name: "MySQL", icon: "mysql" },
    { name: "CosmoDB", icon: "aws" }
  ]
};

const other = {
  title: "Other",
  fields: [
    { name: "Nginx", icon: "nginx" },
    { name: "Docker", icon: "docker" },
    { name: "Git", icon: "git" },
    { name: "Bash", icon: "terminal" },
    { name: "Powershell", icon: "terminal_badge" },
    { name: "SysAdmin", icon: "linux" }
  ]
};

const experience0 = {
  org: "Averitt Express",
  jobtitle: "Software Engineer",
  dates: "January 2016 - August 2017",
  location: "Cookeville, TN",
  description:
    "At Averitt, I primarily acted as software developer and database administrator. Averitt primarily used IBM's iSeries for their database and server. Because of this, I gained experience with understanding uncommon operating systems and certain business tools offered by IBM. The iSeries uses DB2 as its database standard, which while a bit dated, fully supports using modern SQL, which is how I primarily manipulated the database. Most programming on the iSeries was done in RPG Free and Command Line language. I also designed, developed, and maintained several SOAP web services from a Windows 2008 server. This required learning various ways to allow these operating systems to exchange data, correctly wrap the data, and then send the data off through the Windows Task Scheduler.",
  mode: "averitt"
};

const experience1 = {
  org: "SAIC",
  jobtitle: "Support Technician",
  dates: "August 2017 - June 2018",
  location: "Cookeville, TN",
  description:
    "At SAIC, I provided assistance and problem solving solutions to the employees of the United States Environmental Protection Agency. I utilized MS Active Directory services to assess and manage user accounts. Aside from verbal troubleshooting on the phone with clients, I also used Bomgar Remote Services to remote into client computers for more in depth troubleshooting and analysis. I became familiar with many common and advanced issues among the suite of Microsoft Applications implemented by the EPA. Through my time at SAIC, I have developed the necessary communication skills to interact with clients of all technical skill levels and a the discretionary skills to be able to route issues to the appropriate department.",
  mode: "saic"
};

const experience2 = {
  org: "SAIC",
  jobtitle: ".NET Developer",
  dates: "June 2018 - March 2019",
  location: "Cookeville, TN",
  description:
    "Previously at SAIC, I worked as a .NET engineer for the USDA. During my time at the USDA, I primarily worked on modernizing and securing legacy applications. Through this modernization effort, I became savvy to building my own tools to help automate the discovery process, this includes developing C# utilities to audit applications for security risks, creating Powershell scripts to perform a full audit of Windows Servers prior to system upgrades or migrations, and automating decryption processes for access protocol upgrades.",
  mode: "saic"
};

const experience3 = {
  org: "SAIC",
  jobtitle: "Full Stack Engineer",
  dates: "March 2019 - Present",
  location: "Cookeville, TN",
  description:
    "Currently, I am a software engineer in Cookeville, Tennessee for SAIC. My current role includes developing applications and tools for a team of model based systems engineers. Through this role, I have become confident in my ability to develop and maintain full stack containerized apps, generally utilizing a Java backend, React or Angular frontend, and an Nginx reverse proxy service. Utilizing Nginx and Docker has allowed me to streamline deployment and configuration for these applications. These applications range from reporting services to interactive tools to help our engineers visualize model based data.",
  mode: "saic"
};

class AboutMe extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="about-me" style={{ backgroundColor: "black" }}>
        <Navbar brandLink="https://github.com" />

        <Col>
          <Row style={{ padding: "2rem" }}>
            <IntroductionCard person={person} />
          </Row>

          <Row style={{ padding: "2rem" }}>
            <Col sm>
              <SkillsCard data={frontend} />
            </Col>
            <Col sm>
              <SkillsCard data={backend} />
            </Col>
            <Col sm>
              <SkillsCard data={database} />
            </Col>
            <Col sm>
              <SkillsCard data={other} />
            </Col>
          </Row>

          <ExperienceCard data={experience3} />
          <ExperienceCard data={experience2} />
          <ExperienceCard data={experience1} />
          <ExperienceCard data={experience0} />
        </Col>
      </div>
    );
  }
}

export default AboutMe;

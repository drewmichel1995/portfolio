import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import SocialRow from "./SocialRow";
import ImageHelper from "./ImageHelper";
import { Link, animateScroll as scroll } from "react-scroll";

function scrollToTop() {
  scroll.scrollToTop();
}

const PortfolioNavbar = ({ name }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand onClick={scrollToTop}>
        <ImageHelper mode="icon" width="3rem" /> {name}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-item-link nav-link"
          >
            Skills
          </Link>

          <Link
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-item-link nav-link"
          >
            Experience
          </Link>

          <Link
            activeClass="active"
            to="education"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-item-link nav-link"
          >
            Education
          </Link>

          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-item-link nav-link"
          >
            Projects
          </Link>
        </Nav>
        <SocialRow />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default PortfolioNavbar;

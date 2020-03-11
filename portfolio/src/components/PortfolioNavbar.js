import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import SocialRow from "./SocialRow";
import ImageHelper from "./ImageHelper";
import PDFViewer from "./PDFViewer";
import { Link, animateScroll as scroll } from "react-scroll";

function PortfolioNavbar({ name }) {
  const [expandNav, setExpand] = useState(false);

  function scrollToTop() {
    let width = window.innerWidth;
    width < 768 ? setExpand(false) : setExpand(expandNav);
    scroll.scrollToTop();
  }

  function toggleExpand() {
    let width = window.innerWidth;
    width < 768 ? setExpand(!expandNav) : setExpand(expandNav);
  }

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="md"
      fixed="top"
      expanded={expandNav}
    >
      <Navbar.Brand onClick={scrollToTop}>
        <ImageHelper mode="icon" width="3rem" /> {name}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleExpand} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item
            as={Link}
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-item-link nav-link"
            onClick={toggleExpand}
          >
            Skills
          </Nav.Item>

          <Nav.Item
            as={Link}
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-item-link nav-link"
            onClick={toggleExpand}
          >
            Experience
          </Nav.Item>

          <Nav.Item
            as={Link}
            activeClass="active"
            to="education"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-item-link nav-link"
            onClick={toggleExpand}
          >
            Education
          </Nav.Item>

          <Nav.Item
            as={Link}
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-item-link nav-link"
            onClick={toggleExpand}
          >
            Projects
          </Nav.Item>
          <Nav.Item className="nav-item-link nav-link">
            <PDFViewer />
          </Nav.Item>
        </Nav>
        <SocialRow />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default PortfolioNavbar;

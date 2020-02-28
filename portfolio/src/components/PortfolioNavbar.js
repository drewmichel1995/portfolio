import React from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import Scroll from "react-scroll";
const ScrollLink = Scroll.ScrollLink;

const PortfolioNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#skills">
            <ScrollLink to="skills" spy={true} smooth={true}>
              Skills
            </ScrollLink>
          </Nav.Link>
          <Nav.Link href="#expereince">
            <ScrollLink to="skills" spy={true} smooth={true}>
              Experience
            </ScrollLink>
          </Nav.Link>
          <Nav.Link href="#home">
            <ScrollLink to="skills" spy={true} smooth={true}>
              Education
            </ScrollLink>
          </Nav.Link>
          <Nav.Link href="#projects">
            <ScrollLink to="skills" spy={true} smooth={true}>
              Projects
            </ScrollLink>
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default PortfolioNavbar;

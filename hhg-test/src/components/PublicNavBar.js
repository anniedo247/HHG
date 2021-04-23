import React, { useEffect } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";


const PublicNavBar = () => {
  
  return (
    <div>
      <Navbar
        bg="custom" expand="md"
      >
        <Navbar.Brand as={Link} to="/">
         <h2>HHG</h2> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
      <Nav.Link eventKey={"register"} as={Link} to="/">
        Feature 1
      </Nav.Link>
      <Nav.Link eventKey={"login"} as={Link} to="/employees">
        Feature 2
      </Nav.Link>
    </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default PublicNavBar;



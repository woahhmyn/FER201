import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function AppNavbar() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" sticky="top" className="py-2">
        <Container className="align-items-center">
            <Navbar.Brand
            as={Link}
            to="/"
            className="fw-bold navbar-brand-custom"
            >
            Lab 3
        </Navbar.Brand>


        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/exercise1">Exercise 1</Nav.Link>
            <Nav.Link as={Link} to="/exercise2">Exercise 2</Nav.Link>
            <Nav.Link as={Link} to="/exercise3">Exercise 3</Nav.Link>
            <Nav.Link as={Link} to="/exercise4">Exercise 4</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;

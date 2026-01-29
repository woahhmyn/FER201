import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function AppNavbar() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          style={{ fontWeight: "bold", fontSize: "20px" }}
        >
          Lab 3 - React
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

import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function AppNavbar() {
  return (
    <Navbar
      expand="lg"
      sticky="top"
      className="shadow-sm"
      style={{
        background: "linear-gradient(90deg, #0d6efd, #0b5ed7)",
        backdropFilter: "blur(6px)"
      }}
      variant="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
          Lab 3-4
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-lg-center gap-lg-2">

            <Nav.Link as={Link} to="/" className="fw-semibold">
              Home
            </Nav.Link>

            {/* useState Exercises */}
            <NavDropdown title="useState" id="state-dropdown">
              <NavDropdown.Item as={Link} to="/exercise1">Ex1 – Counter</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/exercise2">Ex2 – Modal</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/exercise3">Ex3 – Form</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/exercise4">Ex4 – Todo</NavDropdown.Item>
            </NavDropdown>

            {/* useReducer Exercises */}
            <NavDropdown title="useReducer" id="reducer-dropdown">
              <NavDropdown.Item as={Link} to="/exercise11">Ex11 – Counter</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/exercise22">Ex22 – Modal</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/exercise33">Ex33 – Form</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/exercise44">Ex44 – Todo</NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;

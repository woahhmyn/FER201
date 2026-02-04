import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="mb-4 shadow">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Lab 3: useState - useReducer Hook
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/ex1">Ex1: Counter</Nav.Link>
            <Nav.Link as={NavLink} to="/ex2">Ex2: Xử lý đơn hàng</Nav.Link>
            <Nav.Link as={NavLink} to="/ex3">Ex3: Xử lý Form</Nav.Link>
            <Nav.Link as={NavLink} to="/ex4">Ex4: Todo List</Nav.Link>
            <Nav.Link as={NavLink} to="/ex5">Ex5: Đăng Ký Form</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;

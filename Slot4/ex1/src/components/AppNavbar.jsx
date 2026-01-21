// src/components/AppNavbar.jsx
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../appNavbar.css";

function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="app-navbar">
      <Container className="navbar-container">
        <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
          🍕 Pizza House
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar-links">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About us
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>

          <form className="d-flex navbar-search">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
            />
            <button className="btn btn-danger ms-2" type="submit">
              🔍
            </button>
          </form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
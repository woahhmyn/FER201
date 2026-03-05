import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

function Header() {
  const { user, logout } = useAuth();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>🎬 Movie Manager</Navbar.Brand>

        {user && (
          <div className="text-white">
            Xin chào, {user.name}
            <Button
              variant="outline-light"
              size="sm"
              className="ms-3"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        )}
      </Container>
    </Navbar>
  );
}export default Header;
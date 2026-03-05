import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const NavBar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <Navbar bg="primary" variant="dark" sticky="top" className="mb-4">
      <Container>
        <Navbar.Brand href="#" className="fw-bold">
          Account Management
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          {user && (
            <div className="d-flex align-items-center gap-3">
              <span className="text-light">Welcome, <strong>{user.username}</strong></span>
              <Button 
                variant="outline-light" 
                size="sm" 
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NNavbar() {
  return (
    <>
      <style>{`
        .navbar {
          background: linear-gradient(135deg, #1a1a2e, #16213e) !important;
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
          border-bottom: 2px solid #667eea;
          padding: 12px 0 !important;
        }

        .navbar-brand {
          font-weight: 700;
          font-size: 22px;
          color: #667eea !important;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
          margin-right: 40px !important;
          display: none;
        }

        .navbar-brand:hover {
          transform: translateY(-2px);
          text-shadow: 0 4px 15px rgba(102, 126, 234, 0.5);
        }

        .nav-link {
          color: rgba(255, 255, 255, 0.8) !important;
          font-weight: 500;
          margin: 0 12px !important;
          padding: 10px 16px !important;
          border-radius: 8px;
          transition: all 0.3s ease;
          position: relative;
          text-decoration: none !important;
        }

        .nav-link:hover {
          color: white !important;
          background: rgba(102, 126, 234, 0.2);
          transform: translateY(-2px);
        }

        .nav-link.active {
          color: white !important;
          background: rgba(102, 126, 234, 0.4);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
          border-bottom: none !important;
        }
      `}</style>

      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Nav className="w-100 justify-content-center">
            <Nav.Link as={NavLink} to="/flight">
              Flight Booking
            </Nav.Link>

            <Nav.Link as={NavLink} to="/login">
              Login
            </Nav.Link>

            <Nav.Link as={NavLink} to="/users">
              Manage Users
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

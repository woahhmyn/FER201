import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';

function NavbarExpenses() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isAuthenticated } = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    }
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>
                    <img
                        alt=""
                        src="/images/logo.jpg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top me-2"
                    />
                    Personal Budget
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        {isAuthenticated && (
                            <>
                                <Navbar.Text className="me-3">
                                    Signed in as <strong>{user.fullName}</strong>
                                </Navbar.Text>
                                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavbarExpenses;

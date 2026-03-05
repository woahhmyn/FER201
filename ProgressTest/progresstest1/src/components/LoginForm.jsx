import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Sử dụng hook bạn đã viết
import MessageModal from './MessageModal'; 

function LoginForm() {
  const [identifier, setIdentifier] = useState(''); 
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({}); 
  const [serverError, setServerError] = useState(''); 
  const [showModal, setShowModal] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const { login } = useAuth(); // Lấy hàm login từ context
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setServerError('');
    let vErrors = {};

    if (!identifier) vErrors.identifier = "Username or Email is required.";
    if (!password) vErrors.password = "Password is required.";

    if (Object.keys(vErrors).length > 0) {
      setErrors(vErrors);
      return;
    }

    // GỌI HÀM LOGIN TỪ CONTEXT (ĐÃ CÓ LOGIC CHECK ADMIN/LOCKED/API)
    const result = await login(identifier, password);

    if (result.ok) {
      setLoggedInUser(result.account);
      setShowModal(true);
    } else {
      // Hiển thị lỗi từ Context (Invalid, Locked, Not Admin)
      setServerError(result.message);
    }
  };

  const handleContinue = () => {
    setShowModal(false);
    navigate('/accounts');
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={5}>
          <Card className="shadow-sm">
            <Card.Header className="bg-white border-0 py-3">
              <h3 className="text-center mb-0">Login</h3>
            </Card.Header>
            <Card.Body className="px-4">
              {serverError && (
                <Alert variant="danger" dismissible onClose={() => setServerError('')}>
                  {serverError}
                </Alert>
              )}

              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="identifier">
                  <Form.Label>Username or email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username or email"
                    isInvalid={!!errors.identifier}
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">{errors.identifier}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    isInvalid={!!errors.password}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                </Form.Group>

                <div className="d-flex gap-2 mb-3">
                  <Button variant="primary" type="submit" className="flex-fill py-2">Login</Button>
                  <Button variant="secondary" className="flex-fill py-2" onClick={() => {setIdentifier(''); setPassword(''); setErrors({});}}>Cancel</Button>
                </div>
              </Form>
              <div className="text-center">
                <p className="small mb-0">Don't have an account? <a href="#signup" className="text-decoration-none">Sign up</a></p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <MessageModal 
        show={showModal} 
        handleClose={handleContinue} 
        username={loggedInUser?.username} 
      />
    </Container>
  );
}

export default LoginForm;
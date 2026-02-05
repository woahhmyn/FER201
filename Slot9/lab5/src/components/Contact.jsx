// Contact.jsx - Trang liên hệ với form validation
import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert, Modal } from 'react-bootstrap';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    city: '',
    state: '',
    zip: '',
    agreeTerms: false
  });

  const [validated, setValidated] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false);        // 👉 Modal state

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    e.stopPropagation();

    if (form.checkValidity() === false || !formData.agreeTerms) {
      setValidated(true);
      return;
    }

    setValidated(true);
    setShowSuccess(true);
    setShowModal(true);   // 👉 Mở modal khi thành công
    console.log('Contact Form Data:', formData);

    // Reset form sau 3 giây
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        firstName: '',
        lastName: '',
        username: '',
        city: '',
        state: '',
        zip: '',
        agreeTerms: false
      });
      setValidated(false);
    }, 3000);
  };

  return (
    <Container className="mt-4" style={{ maxWidth: '900px' }}>
      <h2 className="mb-4">Contact Us</h2>

      {showSuccess && (
        <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
          Your message has been sent successfully!
        </Alert>
      )}

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>First name</Form.Label>
            <Form.Control required type="text" name="firstName" value={formData.firstName} onChange={handleChange}/>
            <Form.Control.Feedback type="invalid">Please provide a valid first name.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4">
            <Form.Label>Last name</Form.Label>
            <Form.Control required type="text" name="lastName" value={formData.lastName} onChange={handleChange}/>
            <Form.Control.Feedback type="invalid">Please provide a valid last name.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4">
            <Form.Label>Username</Form.Label>
            <Form.Control required type="text" name="username" value={formData.username} onChange={handleChange}/>
            <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6">
            <Form.Label>City</Form.Label>
            <Form.Control required type="text" name="city" value={formData.city} onChange={handleChange}/>
            <Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3">
            <Form.Label>State</Form.Label>
            <Form.Control required type="text" name="state" value={formData.state} onChange={handleChange}/>
            <Form.Control.Feedback type="invalid">Please provide a valid state.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3">
            <Form.Label>Zip</Form.Label>
            <Form.Control required type="text" name="zip" value={formData.zip} onChange={handleChange}/>
            <Form.Control.Feedback type="invalid">Please provide a valid zip.</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3">
          <Form.Check
            required
            name="agreeTerms"
            label="Agree to terms and conditions"
            onChange={handleChange}
            checked={formData.agreeTerms}
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>

        <Button type="submit">Submit form</Button>
      </Form>

      {/* ✅ MODAL HIỂN THỊ THÔNG TIN */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Thông tin đã gửi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>First Name:</strong> {formData.firstName}</p>
          <p><strong>Last Name:</strong> {formData.lastName}</p>
          <p><strong>Username:</strong> {formData.username}</p>
          <p><strong>City:</strong> {formData.city}</p>
          <p><strong>State:</strong> {formData.state}</p>
          <p><strong>Zip:</strong> {formData.zip}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => setShowModal(false)}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Contact;

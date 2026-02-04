//Component dùng để test useState, có form gồm username và age. Nhấn nút Submit
//sẽ thay đổi giá trị hiển thị bên dưới trên label
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
function TestUseState() {
    const [username, setUsername] = useState('traltb');
    const [age, setAge] = useState(18);
    const [message, setMessage] = useState('');
    
    //Xử lý sự kiện nhấn Submit, hiển thị message bên dưới, dùng useState để xử lý thay đổi giá trị

    const handleSubmit = (e) => {
      e.preventDefault();
      setMessage(`Hello, ${username}. You are ${age} years old.`);
    };
   
    return (
      <Container className="mt-4">
      <h4 className="mb-4">Thông tin người dùng</h4>
      <Form>
        {/* Dòng 1: Username  */}
        <Form.Group as={Row} className="mb-3" controlId="formUsername">
          <Form.Label column md={2}>
            Username:
          </Form.Label>
          <Col md={4}>
            <Form.Control
              type="text"
              placeholder="Nhập username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Col>
        </Form.Group>

        {/* Dòng 2: Age  */}
        <Form.Group as={Row} className="mb-3" controlId="formAge">
          <Form.Label column md={2}>
            Age:
          </Form.Label>
          <Col md={4}>
            <Form.Control
              type="number"
              placeholder="Nhập tuổi"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </Col>
        </Form.Group>

        {/* Dòng 3: Submit Button [cite: 18] */}
        <Row className="mb-3">
          <Col md={{ span: 4, offset: 2 }}>
            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Col>
        </Row>
          {/* Cho hiển thị message bên dưới nút Submit */}
      {message && (
        <Row className="mb-3">
          <Col md={6}>
            <label className="form-label">{message}</label>
          </Col>
        </Row>
      )}
      </Form>

    </Container>
  );
     
  }
  export default TestUseState;

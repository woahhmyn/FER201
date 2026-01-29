import React, { useState } from 'react';
import { Container, Card, Button, Form } from 'react-bootstrap';

function Exercise1() {
  const [quantity, setQuantity] = useState(0);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setQuantity(value);
    } else if (e.target.value === '') {
      setQuantity(0);
    }
  };

  return (
    <Container fluid className="py-5 px-4 px-md-5">
      <h2 className="text-center mb-4">Exercise 1: Quản lý số lượng sản phẩm</h2>
      
      <div className="d-flex justify-content-center">
        <Card style={{ maxWidth: '500px', width: '100%' }} className="shadow">
          <Card.Body className="p-4">
            <Card.Title className="text-center mb-3">Chỉnh sửa số lượng sản phẩm</Card.Title>
            
            <div className="d-flex justify-content-center align-items-center gap-3 mb-4">
              <Button 
                variant="primary" 
                size="lg"
                onClick={handleDecrease}
                disabled={quantity === 0}
                style={{ width: '60px', height: '60px', fontSize: '24px' }}
              >
                −
              </Button>

              <Form.Control
                type="text"
                value={quantity}
                onChange={handleInputChange}
                className="text-center fw-bold"
                style={{ width: '120px', height: '60px', fontSize: '32px' }}
              />

              <Button 
                variant="primary" 
                size="lg"
                onClick={handleIncrease}
                style={{ width: '60px', height: '60px', fontSize: '24px' }}
              >
                +
              </Button>
            </div>

            <div className="alert alert-info text-center">
              <strong>Số lượng hiện tại:</strong> {quantity}
            </div>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default Exercise1;
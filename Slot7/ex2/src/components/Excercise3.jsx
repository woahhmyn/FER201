import React, { useState } from 'react';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';

function Exercise3() {
  const [form, setForm] = useState({
    name: '',
    price: '',
    category: ''
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.price && form.category) {
      setSubmittedData(form);
    }
  };

  const handleReset = () => {
    setForm({
      name: '',
      price: '',
      category: ''
    });
    setSubmittedData(null);
  };

  return (
    <Container fluid className="py-5 px-4 px-md-5">
      <h2 className="text-center mb-4">Exercise 3: Form quản lý sản phẩm</h2>
      
      <div className="d-flex justify-content-center">
        <Card style={{ maxWidth: '600px', width: '100%' }} className="shadow">
          <Card.Body className="p-4">
            <Card.Title className="mb-4">Thêm sản phẩm mới</Card.Title>
            
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Tên sản phẩm</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Nhập tên sản phẩm"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Giá (VNĐ)</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  placeholder="Nhập giá sản phẩm"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Danh mục</Form.Label>
                <Form.Select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">-- Chọn danh mục --</option>
                  <option value="Điện thoại">Điện thoại</option>
                  <option value="Laptop">Laptop</option>
                  <option value="Tablet">Tablet</option>
                  <option value="Phụ kiện">Phụ kiện</option>
                </Form.Select>
              </Form.Group>

              <div className="d-flex gap-2">
                <Button variant="primary" type="submit" className="flex-fill">
                  Thêm sản phẩm
                </Button>
                <Button variant="secondary" onClick={handleReset} className="flex-fill">
                  Làm mới
                </Button>
              </div>
            </Form>

            {submittedData && (
              <Alert variant="success" className="mt-4 mb-0">
                <Alert.Heading>✅ Thêm sản phẩm thành công!</Alert.Heading>
                <hr />
                <p className="mb-1"><strong>Tên:</strong> {submittedData.name}</p>
                <p className="mb-1"><strong>Giá:</strong> {parseInt(submittedData.price).toLocaleString('vi-VN')} VNĐ</p>
                <p className="mb-0"><strong>Danh mục:</strong> {submittedData.category}</p>
              </Alert>
            )}
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default Exercise3;
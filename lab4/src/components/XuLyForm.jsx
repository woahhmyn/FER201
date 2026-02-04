import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card, Alert } from 'react-bootstrap';

const ProductForm = () => {
  // 1. Quản lý dữ liệu Form bằng 1 Object duy nhất 
  const [product, setProduct] = useState({
    name: '',
    price: '',
    category: 'Electronics'
  });

  // Quản lý trạng thái Validation và Alert thành công
  const [validated, setValidated] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // 2. Hàm xử lý cập nhật state (Spread object) [cite: 36]
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    
    // Ngăn chặn hành vi load lại trang mặc định
    event.preventDefault();

    if (form.checkValidity() === false) {
      // Nếu form không hợp lệ, dừng lan truyền sự kiện và hiện lỗi
      event.stopPropagation();
      setShowSuccess(false);
    } else {
      // Nếu form hợp lệ: Xử lý logic lưu dữ liệu
      console.log("Dữ liệu hợp lệ:", product);
      setShowSuccess(true);
      
      // Tự động ẩn thông báo thành công sau 3 giây
      setTimeout(() => setShowSuccess(false), 3000);
    }

    setValidated(true); // Kích hoạt hiển thị Feedback lỗi/thành công trên UI
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-md-center">
        <Col md={6}>
          {/* Thông báo thành công chỉ hiện khi dữ liệu đã đầy đủ */}
          {showSuccess && (
            <Alert variant="success" dismissible onClose={() => setShowSuccess(false)}>
              Lưu sản phẩm <strong>{product.name}</strong> thành công!
            </Alert>
          )}

          <Card className="p-4 shadow-sm">
            <h3 className="text-center mb-4 text-primary">Exercise 3: Product Form</h3>
            
            {/* Thuộc tính noValidate để tắt tooltip mặc định của trình duyệt, dùng Feedback của Bootstrap */}
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              
              {/* Tên sản phẩm */}
              <Form.Group className="mb-3" controlId="valName">
                <Form.Label>Tên sản phẩm</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="name"
                  placeholder="Ví dụ: Laptop Dell XPS"
                  value={product.name}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Vui lòng nhập tên sản phẩm.
                </Form.Control.Feedback>
               
              </Form.Group>

              {/* Giá sản phẩm */}
              <Form.Group className="mb-3" controlId="valPrice">
                <Form.Label>Giá (VNĐ)</Form.Label>
                <Form.Control
                  required
                  type="number"
                  name="price"
                  placeholder="Nhập giá"
                  value={product.price}
                  onChange={handleChange}
                  min="1000"
                />
                <Form.Control.Feedback type="invalid">
                  Vui lòng nhập giá sản phẩm (tối thiểu 1,000đ).
                </Form.Control.Feedback>
              </Form.Group>

              {/* Danh mục */}
              <Form.Group className="mb-4" controlId="valCategory">
                <Form.Label>Danh mục</Form.Label>
                <Form.Select 
                  name="category" 
                  value={product.category} 
                  onChange={handleChange}
                >
                  <option value="Electronics">Điện tử</option>
                  <option value="Fashion">Thời trang</option>
                  <option value="Home">Gia dụng</option>
                </Form.Select>
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Lưu sản phẩm
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductForm;
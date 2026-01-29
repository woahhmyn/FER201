import React, { useState } from 'react';
import { Container, Card, Button, Modal, ListGroup, Badge } from 'react-bootstrap';

function Exercise2() {
  const [isShowModal, setIsShowModal] = useState(false);

  const handleOpenModal = () => {
    setIsShowModal(true);
  };

  const handleCloseModal = () => {
    setIsShowModal(false);
  };

  const handleConfirm = () => {
    alert('✅ Đơn hàng đã được duyệt thành công và chuyển sang bộ phận kho!');
    setIsShowModal(false);
  };

  return (
    <Container fluid className="py-5 px-4 px-md-5">
      <h2 className="text-center mb-4">Exercise 2: Modal xác nhận đơn hàng</h2>
      
      <div className="d-flex justify-content-center">
        <Card style={{ maxWidth: '600px', width: '100%' }} className="shadow">
          <Card.Body className="p-4">
            <div className="d-flex justify-content-between align-items-center mb-3 pb-3 border-bottom">
              <div>
                <small className="text-muted">Mã đơn hàng:</small>
                <h5 className="mb-0">#DH2026012901</h5>
              </div>
              <Badge bg="warning" text="dark">Chờ xử lý</Badge>
            </div>

            <ListGroup variant="flush" className="mb-3">
              <ListGroup.Item>👤 Khách hàng: <strong>Nguyễn Văn A</strong></ListGroup.Item>
              <ListGroup.Item>📦 Số lượng: <strong>3 sản phẩm</strong></ListGroup.Item>
              <ListGroup.Item>💰 Tổng tiền: <strong>1,500,000 VNĐ</strong></ListGroup.Item>
            </ListGroup>

            <Button 
              variant="success" 
              size="lg" 
              className="w-100"
              onClick={handleOpenModal}
            >
              ✓ Xử lý đơn hàng
            </Button>
          </Card.Body>
        </Card>
      </div>

      {/* Modal */}
      <Modal show={isShowModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận xử lý đơn hàng</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center py-4">
          <div className="mb-3" style={{ fontSize: '48px' }}>⚠️</div>
          <p className="mb-0">
            Bạn có chắc chắn muốn duyệt đơn hàng này để chuyển sang bộ phận kho không?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Hủy
          </Button>
          <Button variant="success" onClick={handleConfirm}>
            Xác nhận
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Exercise2;
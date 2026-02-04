import React, { useState } from 'react';
import { Button, Modal, Alert, Container } from 'react-bootstrap';

function OrderProcessing () {
  const [show, setShow] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false); // Trạng thái đã xác nhận thành công hay chưa

  const handleShow = () => {
    setShow(true);
    setIsConfirmed(false); // Reset trạng thái khi mở lại Modal
  };

  const handleClose = () => setShow(false);

  // Xử lý khi người dùng nhấn nút "Xác nhận" trên Modal
  const handleConfirmAction = () => {
    // Giả lập logic xử lý nghiệp vụ ở đây
    setIsConfirmed(true); 
    
    // Sau 2 giây tự động đóng Modal theo yêu cầu 
    setTimeout(() => {
      setShow(false);
    }, 2000);
  };

  return (
    <Container className="mt-5 text-center">
      <Button variant="success" onClick={handleShow}>
        Xử lý đơn hàng
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận đơn hàng</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          {isConfirmed ? (
            /* Hiển thị Alert thành công thay vì window.alert  */
            <Alert variant="success">
              Xử lý đơn hàng thành công! Cửa sổ sẽ đóng sau 2 giây.
            </Alert>
          ) : (
            /* Nội dung câu hỏi xác nhận */
            <p>Bạn có chắc chắn muốn duyệt đơn hàng này để chuyển sang bộ phận kho không?</p>
          )}
        </Modal.Body>

        {!isConfirmed && (
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Hủy
            </Button>
            <Button variant="primary" onClick={handleConfirmAction}>
              Xác nhận
            </Button>
          </Modal.Footer>
        )}
      </Modal>
    </Container>
  );
};

export default OrderProcessing;
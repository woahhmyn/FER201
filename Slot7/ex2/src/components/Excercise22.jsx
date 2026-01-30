// Exercise22.jsx – Dùng useReducer thay cho useState để quản lý Modal
import React, { useReducer } from 'react';
import { Container, Card, Button, Modal, ListGroup, Badge, Alert } from 'react-bootstrap';

// Bước 1: State ban đầu gồm nhiều biến trong 1 object
const initialState = {
  isShowModal: false,
  isConfirmed: false
};

// Bước 2: Reducer xử lý các hành động
function reducer(state, action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { ...state, isShowModal: true };

    case 'CLOSE_MODAL':
      return { ...state, isShowModal: false };

    case 'CONFIRM_ORDER':
      return { isShowModal: false, isConfirmed: true };

    default:
      return state;
  }
}

function Exercise22() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Container fluid className="py-5 px-4 px-md-5">
      <h2 className="text-center mb-4">Exercise 22: Modal xác nhận đơn hàng (useReducer)</h2>

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

            {state.isConfirmed && (
              <Alert variant="success">✅ Đơn hàng đã được duyệt thành công!</Alert>
            )}

            <Button
              variant="success"
              size="lg"
              className="w-100"
              onClick={() => dispatch({ type: 'OPEN_MODAL' })}
            >
              ✓ Xử lý đơn hàng
            </Button>
          </Card.Body>
        </Card>
      </div>

      <Modal show={state.isShowModal} onHide={() => dispatch({ type: 'CLOSE_MODAL' })} centered>
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận xử lý đơn hàng</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center py-4">
          Bạn có chắc chắn muốn duyệt đơn hàng này không?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>Hủy</Button>
          <Button variant="success" onClick={() => dispatch({ type: 'CONFIRM_ORDER' })}>Xác nhận</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Exercise22;

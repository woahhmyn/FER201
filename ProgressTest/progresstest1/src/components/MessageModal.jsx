import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const MessageModal = ({ show, handleClose, username }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="w-100 text-center text-success">Login Successful</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        Welcome, <strong>{username}</strong>! You have successfully logged in.
      </Modal.Body>
      <Modal.Footer className="justify-content-center border-0">
        {/* Đảm bảo onClick gọi đúng handleClose (chính là handleContinue từ LoginForm) */}
        <Button variant="success" onClick={handleClose} style={{ minWidth: '120px' }}>
          Continue
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MessageModal;
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const MessageModal = ({ show, handleClose, username }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="w-100 text-center">Login Successful</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        Welcome, {username}! You have successfully logged in.
      </Modal.Body>
      <Modal.Footer className="justify-content-center border-0">
        <Button variant="success" onClick={handleClose}>
          Continue
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MessageModal;
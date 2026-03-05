import { Modal, Button } from 'react-bootstrap';

const ConfirmModal = ({ show, handleClose, handleConfirm, acc }) => (
  <Modal show={show} onHide={handleClose} centered>
    <Modal.Body>
      {acc?.status === 'active' 
        ? `Lock account ${acc?.username}? The user cannot log in after this.` 
        : `Unlock account ${acc?.username}?`}
    </Modal.Body>
    <Modal.Footer className="border-0">
      <Button variant="secondary" onClick={handleClose}>Cancel</Button>
      <Button variant={acc?.status === 'active' ? "danger" : "success"} onClick={handleConfirm}>Confirm</Button>
    </Modal.Footer>
  </Modal>
);
export default ConfirmModal;
import { Toast, ToastContainer } from 'react-bootstrap';

const ToastMessage = ({ toast, onClose }) => (
  <ToastContainer position="top-end" className="p-3">
    <Toast show={toast.show} onClose={onClose} delay={3000} autohide bg={toast.variant}>
      <Toast.Header><strong className="me-auto">System Notification</strong></Toast.Header>
      <Toast.Body className={toast.variant === 'success' ? 'text-white' : ''}>{toast.message}</Toast.Body>
    </Toast>
  </ToastContainer>
);
export default ToastMessage;
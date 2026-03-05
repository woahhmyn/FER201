import React, { useEffect, useState, useContext } from 'react';
import { Container, Table, Button, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { AuthContext } from '../contexts/AuthContext';
import ConfirmModal from './ConfirmModal';
import ToastMessage from './ToastMessage';
import FilterBar from './FilterBar';

const AccountList = () => {
  const { user: currentUser } = useContext(AuthContext);
  const [accounts, setAccounts] = useState([]);
  const [displayAccounts, setDisplayAccounts] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedAcc, setSelectedAcc] = useState(null);
  const [toast, setToast] = useState({ show: false, message: '', variant: 'success' });
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await api.get('/accounts');
      setAccounts(res.data);
      setDisplayAccounts(res.data);
    } catch (err) { console.error(err); }
  };

  const handleActionClick = (acc) => {
    if (acc.id === currentUser?.id) {
      setToast({ show: true, message: 'Do not self-lock the currently logged-user admin.', variant: 'warning' });
      return;
    }
    setSelectedAcc(acc);
    setShowConfirm(true);
  };

  const confirmToggleStatus = async () => {
    const newStatus = selectedAcc.status === 'active' ? 'locked' : 'active';
    try {
      await api.patch(`/accounts/${selectedAcc.id}`, { status: newStatus });
      const updated = accounts.map(a => a.id === selectedAcc.id ? { ...a, status: newStatus } : a);
      setAccounts(updated);
      // Giữ nguyên các filter hiện tại bằng cách update displayAccounts tương ứng
      setDisplayAccounts(prev => prev.map(a => a.id === selectedAcc.id ? { ...a, status: newStatus } : a));
      setToast({ show: true, message: `${newStatus === 'locked' ? 'Locked' : 'Unlocked'} successfully`, variant: 'success' });
    } catch (err) { console.error(err); }
    setShowConfirm(false);
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Account Management</h2>
      <ToastMessage toast={toast} onClose={() => setToast({ ...toast, show: false })} />
      
      <FilterBar accounts={accounts} onFilterChange={setDisplayAccounts} />

      <Table striped bordered hover responsive className="mt-3 align-middle">
        <thead>
          <tr>
            <th>Avatar</th><th>Username</th><th>Email</th><th>Role</th><th>Status</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {displayAccounts.map(acc => (
            <tr key={acc.id}>
              <td><Image src={acc.avatar} roundedCircle width="40" height="40" style={{ objectFit: 'cover' }}/></td>
              <td>{acc.username}</td>
              <td>{acc.email}</td>
              <td>{acc.role}</td>
              <td>{acc.status}</td>
              <td>
                <Button variant="info" size="sm" className="me-2" onClick={() => navigate(`/accounts/${acc.id}`)}>View Details</Button>
                <Button variant={acc.status === 'active' ? 'danger' : 'success'} size="sm" onClick={() => handleActionClick(acc)}>
                  {acc.status === 'active' ? 'Lock' : 'Unlock'}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <ConfirmModal 
        show={showConfirm} 
        handleClose={() => setShowConfirm(false)} 
        handleConfirm={confirmToggleStatus} 
        acc={selectedAcc} 
      />
    </Container>
  );
};

export default AccountList;

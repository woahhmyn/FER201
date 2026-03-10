import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import expenseService from '../services/api';
import { useAuth } from '../contexts/AuthContext';
import LoginForm from '../components/LoginForm';

function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');

  const handleLoginSubmit = async ({ username, password }) => {
    setAlertMsg('');
    setLoading(true);
    try {
      const res = await expenseService.getUsers();
      const user = res.data.find(
        (u) => u.username === username && u.password === password
      );

      if (!user) {
        setAlertMsg('Invalid username or password!');
        return;
      }

      login(user);
      navigate('/home');
    } catch {
      setAlertMsg('Cannot connect to server. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-white">
      <div
        className="p-4 border rounded-3 shadow-sm bg-white"
        style={{ width: '100%', maxWidth: 360 }}
      >
        <h2 className="text-center fw-bold mb-4">Login</h2>

        <LoginForm
          onSubmit={handleLoginSubmit}
          loading={loading}
          externalError={alertMsg}
        />
      </div>
    </div>
  );
}

export default LoginPage;
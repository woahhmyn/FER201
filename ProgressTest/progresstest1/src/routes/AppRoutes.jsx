import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import AccountListPage from '../pages/AccountListPage';
import AccountDetailsPage from '../pages/AccountDetailsPage';
import { AuthContext } from '../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { state } = useContext(AuthContext);
  const user = state.user || JSON.parse(localStorage.getItem('user'));

  if (!user || user.role !== 'admin') {
    return <Navigate to="/" replace />;
  }
  return children;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />

      <Route 
        path="/accounts" 
        element={
          <ProtectedRoute>
            <AccountListPage />
          </ProtectedRoute>
        } 
      />
      
      <Route 
        path="/accounts/:id" 
        element={
          <ProtectedRoute>
            <AccountDetailsPage />
          </ProtectedRoute>
        } 
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
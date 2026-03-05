import React, { createContext, useReducer, useContext } from 'react';
import api from '../services/api';

export const AuthContext = createContext();

const initialState = { 
  user: JSON.parse(localStorage.getItem('user')) || null 
};

function reducer(state, action) {
  switch (action.type) {
    case 'LOGIN': 
      localStorage.setItem('user', JSON.stringify(action.payload));
      return { ...state, user: action.payload };
    case 'LOGOUT': 
      localStorage.removeItem('user');
      return { ...state, user: null };
    default: 
      return state;
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function login(identifier, password) {
    try {
      // Lấy tất cả accounts
      const res = await api.get('/accounts');
      const allAccounts = res.data;
      
      // Tìm account theo username hoặc email
      const account = allAccounts.find(acc => 
        (acc.username === identifier || acc.email === identifier) && acc.password === password
      );
      
      if (!account) {
        return { ok: false, message: 'Invalid credentials.' };
      }
      
      // Kiểm tra xem có phải admin không
      if (account.role !== 'admin') {
        return { ok: false, message: 'Access denied. Only admin users can login' };
      }
      
      // Kiểm tra xem account có bị lock không
      if (account.status === 'locked') {
        return { ok: false, message: 'Account is locked. Please contact admin.' };
      }

      dispatch({ type: 'LOGIN', payload: account });
      return { ok: true, account };
    } catch (error) {
      return { ok: false, message: 'Server error. Please try again.' };
    }
  }

  function logout() { 
    dispatch({ type: 'LOGOUT' }); 
  }

  return (
    <AuthContext.Provider value={{ state, user: state.user, login, logout, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() { return useContext(AuthContext); }
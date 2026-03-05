import React, { createContext, useReducer, useContext, useEffect } from 'react';
import api from '../services/api';

const AccountsContext = createContext();

const initial = { accounts: [], loading: true };

function reducer(state, action) {
  switch (action.type) {
    case 'SET': return { ...state, accounts: action.payload, loading: false };
    case 'UPDATE': {
      const updated = state.accounts.map(a => a.id === action.payload.id ? action.payload : a);
      return { ...state, accounts: updated };
    }
    default: return state;
  }
}

export function AccountsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initial);

  useEffect(() => {
    api.get('/accounts').then(r => dispatch({ type: 'SET', payload: r.data }));
  }, []);

  async function refresh() {
    const r = await api.get('/accounts');
    dispatch({ type: 'SET', payload: r.data });
  }

  async function updateStatus(id, status) {
    const r = await api.patch(`/accounts/${id}`, { status });
    dispatch({ type: 'UPDATE', payload: r.data });
    return r.data;
  }

  return (
    <AccountsContext.Provider value={{ ...state, refresh, updateStatus }}>
      {children}
    </AccountsContext.Provider>
  );
}

export function useAccounts() { return useContext(AccountsContext); }
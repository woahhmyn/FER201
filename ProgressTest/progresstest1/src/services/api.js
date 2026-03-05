import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const getAccounts = () => api.get('/accounts');
export const updateAccountStatus = (id, status) => api.patch(`/accounts/${id}`, { status });

export default api;
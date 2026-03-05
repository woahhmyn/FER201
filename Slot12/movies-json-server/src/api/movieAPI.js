import axios from 'axios';

const movieApi = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 30000, // Tăng timeout từ 5s lên 30s để handle ảnh lớn
  headers: {
    'Content-Type': 'application/json',
  },
  maxContentLength: 50 * 1024 * 1024, // 50MB max
  maxBodyLength: 50 * 1024 * 1024,    // 50MB max
});

export default movieApi;

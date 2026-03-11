// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './routes/ProtectedRoute';
import LoginForm from './components/LoginForm';
import ExpenseDashboard from './components/ExpenseDashboard';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Trang login không cần bảo vệ */}
          <Route path="/login" element={<LoginForm />} /> 
          
          {/* Trang chủ cần đăng nhập mới vào được */}
          <Route path="/" element={
            <ProtectedRoute>
                <ExpenseDashboard />
            </ProtectedRoute> 
          } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
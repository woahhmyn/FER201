import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import components
import Home from './components/Home';
import Exercise1 from './components/Excercise1';
import Exercise2 from './components/Excercise2';
import Exercise3 from './components/Excercise3';
import Exercise4 from './components/Excercise4';
import AppNavbar from './components/AppNavbar'; // 👈 thêm dòng này

function App() {
  return (
    <Router>
      <div style={{ 
        minHeight: '100vh', 
        backgroundColor: '#f8f9fa',
        display: 'flex',
        flexDirection: 'column'
      }}>
        
        {/* Navbar component */}
        <AppNavbar />

        {/* Routes */}
        <div style={{ flex: '1' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise1" element={<Exercise1 />} />
            <Route path="/exercise2" element={<Exercise2 />} />
            <Route path="/exercise3" element={<Exercise3 />} />
            <Route path="/exercise4" element={<Exercise4 />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="bg-dark text-white text-center py-3 mt-auto">
          <Container>
            <p className="mb-0">© SP26 FER202 Lab 3 - Đỗ Ngọc Hoàn Mỹ</p>
          </Container>
        </footer>

      </div>
    </Router>
  );
}

export default App;

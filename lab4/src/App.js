import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppNavbar from './components/AppNavbar';
import Home from './components/Home';

import XuLyForm from './components/XuLyForm';
import ToDoList from './components/ToDoList';
import XuLyDonHang from './components/XuLyDonHang';
import CapNhatSoLuong2 from './components/CapNhatSoLuong2';
import DangKyForm from './components/DangKyForm';

function App() {
  return (
    <Router>
      <AppNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ex1" element={<CapNhatSoLuong2 />} />
        <Route path="/ex2" element={<XuLyDonHang />} />
        <Route path="/ex3" element={<XuLyForm />} />
        <Route path="/ex4" element={<ToDoList />} />
        <Route path="/ex5" element={<DangKyForm />} />
      </Routes>
    </Router>
  );
}

export default App;

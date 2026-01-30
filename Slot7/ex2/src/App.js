import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import AppNavbar from "./components/AppNavbar";
import Home from "./components/Home";
import Exercise1 from "./components/Excercise1";
import Exercise11 from "./components/Excercise11"; // useReducer
import Exercise2 from "./components/Excercise2";
import Exercise3 from "./components/Excercise3";
import Exercise4 from "./components/Excercise4";
import Excercise22 from "./components/Excercise22"; // Modal with useReducer
import Exercise33 from "./components/Excercise33"; // useReducer form 
import Excercise44 from "./components/Excercise44"; // useReducer todo list

function App() {
  return (
    <Router>
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#f8f9fa",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <AppNavbar />

        <div style={{ flex: "1" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise1" element={<Exercise1 />} />
            <Route path="/exercise11" element={<Exercise11 />} />
            <Route path="/exercise2" element={<Exercise2 />} />
            <Route path="/exercise22" element={<Excercise22 />} />
            <Route path="/exercise3" element={<Exercise3 />} />
            <Route path="/exercise33" element={<Exercise33 />} />
            <Route path="/exercise4" element={<Exercise4 />} />
            <Route path="/exercise44" element={<Excercise44 />} />
          </Routes>
        </div>

        <footer className="bg-dark text-white text-center py-3 mt-auto">
          © SP26 FER202 Lab 3 - Đỗ Ngọc Hoàn Mỹ
        </footer>
      </div>
    </Router>
  );
}

export default App;

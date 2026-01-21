// src/App.js
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div
        className="d-flex flex-column min-vh-100"
        style={{ backgroundColor: "#333", color: "white" }}
      >
        <AppNavbar />

        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer
          info={{
            avatar: "/images/avatar.png",
            name: "Do Hoan My",
            email: "hmyndooo@gmail.com",
          }}
        />
      </div>
    </Router>
  );
}

export default App;
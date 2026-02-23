import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarPizza from './components/NavBarPizzar';
import Home from './components/Home';
import About from './components/About';
import NewPage from './pages/NewList';
import Quiz from './components/Quiz';
import Contact from './components/Contact';
import RegisterForm from './components/RegisterForm';

// 👇 Lazy load pages theo yêu cầu đề
const UsersPage = lazy(() => import('./pages/UsersPage'));
const PostsPage = lazy(() => import('./pages/PostsPage'));

function App() {
  return (
    <Router>
      {/* Thanh điều hướng cho ứng dụng */}
      <NavBarPizza />

      {/* Suspense bao quanh các route lazy */}
      <Suspense fallback={<div className="text-center mt-5">Loading page...</div>}>
      {/* Điều hướng ứng dụng với các liên kết đến các trang khác nhau */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<NewPage />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<RegisterForm />} />

          {/* Lazy pages */}
          <Route path="/users" element={<UsersPage />} />
          <Route path="/posts" element={<PostsPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;



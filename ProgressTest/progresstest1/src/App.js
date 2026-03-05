import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AuthProvider } from './contexts/AuthContext';
import AppRoutes from './routes/AppRoutes';
import NavBar from './components/Navbar';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <NavBar />
          <AppRoutes />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
import React from 'react';
import { Container } from 'react-bootstrap';

function AppFooter() {
  return (
    <footer
      className="mt-auto border-top"
      style={{
        backgroundColor: 'light',
        padding: '14px 0'
      }}
    >
      <Container fluid="lg">
        <div className="d-flex justify-content-between align-items-center">
          {/* Bên trái: Copyright */}
          <div className="text-secondary" style={{ fontSize: '0.9rem' }}>
            © 2025 PersonalBudget Demo
          </div>

          {/* Bên phải: Tech Stack */}
          <div className="text-secondary" style={{ fontSize: '0.9rem' }}>
            Built with React, Redux Toolkit & JSON Server
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default AppFooter;
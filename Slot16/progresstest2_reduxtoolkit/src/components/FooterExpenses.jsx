import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function FooterExpenses() {
    return (
        <footer className="bg-dark text-white py-3 mt-auto">
            <Container>
                <Row>
                    <Col md={6}>
                        <span>&copy; 2025 PersonalBudget Demo</span>
                    </Col>
                    <Col md={6} className="text-end">
                        <span>Built with React, Redux Toolkit & Json Server</span>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default FooterExpenses;
import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  const exercises = [
    {
      id: 1,
      title: 'Exercise 1',
      description: 'Quản lý số lượng sản phẩm',
      path: '/exercise1'
    },
    {
      id: 2,
      title: 'Exercise 2',
      description: 'Modal xác nhận đơn hàng',
      path: '/exercise2'
    },
    {
      id: 3,
      title: 'Exercise 3',
      description: 'Form quản lý sản phẩm',
      path: '/exercise3'
    },
    {
      id: 4,
      title: 'Exercise 4',
      description: 'Todo List đơn giản',
      path: '/exercise4'
    }
  ];

  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3">Lab 3 - React Exercises</h1>
        <p className="lead text-muted">
          Bài tập thực hành useState Hook, React Router và React Bootstrap
        </p>
      </div>

      <Row className="g-4">
        {exercises.map((exercise) => (
          <Col key={exercise.id} md={6} lg={3}>
            <Link to={exercise.path} style={{ textDecoration: 'none' }}>
              <Card 
                className="h-100 shadow-sm text-center"
                style={{ 
                  transition: 'transform 0.2s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <Card.Body className="d-flex flex-column justify-content-center p-4">
                  <div style={{ fontSize: '48px' }} className="mb-3">
                    {exercise.icon}
                  </div>
                  <Card.Title className="mb-2">{exercise.title}</Card.Title>
                  <Card.Text className="text-muted">
                    {exercise.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>

      <Card className="mt-5 shadow-sm">
        <Card.Body className="p-4">
          <h5 className="mb-3">📚 Nội dung bài học</h5>
          <ul>
            <li><strong>useState Hook:</strong> Quản lý state trong functional components</li>
            <li><strong>React Router:</strong> Điều hướng giữa các trang</li>
            <li><strong>React Bootstrap:</strong> UI components và styling</li>
            <li><strong>Component-based:</strong> Cấu trúc component rõ ràng</li>
          </ul>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Home;
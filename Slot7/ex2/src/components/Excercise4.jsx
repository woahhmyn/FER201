import React, { useState } from 'react';
import { Container, Card, Form, Button, ListGroup, Badge } from 'react-bootstrap';

function Exercise4() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <Container fluid className="py-5 px-4 px-md-5">
      <h2 className="text-center mb-5 fw-bold text-primary">Todo List Manager</h2>

      <Card className="mx-auto shadow-lg border-0 rounded-4" style={{ maxWidth: '750px' }}>
        <Card.Body className="p-4">

          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h5 className="mb-0 fw-semibold">Danh sách công việc</h5>
            <Badge bg="primary" pill className="fs-6 px-3 py-2">
              {todos.length} việc
            </Badge>
          </div>

          {/* Input */}
          <Form onSubmit={handleAddTodo} className="mb-4">
            <div className="d-flex gap-2">
              <Form.Control
                type="text"
                placeholder="Nhập công việc mới..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="rounded-pill px-4 py-2 shadow-sm"
              />
              <Button variant="success" type="submit" className="rounded-pill px-4 fw-semibold">
                Thêm
              </Button>
            </div>
          </Form>

          {/* Empty state */}
          {todos.length === 0 ? (
            <div className="text-center text-muted py-5">
              <div style={{ fontSize: "40px" }}>📝</div>
              <p className="mb-1">Chưa có công việc nào</p>
              <small>Hãy thêm công việc mới để bắt đầu</small>
            </div>
          ) : (
            <ListGroup variant="flush">
              {todos.map((todo) => (
                <ListGroup.Item
                  key={todo.id}
                  className="d-flex justify-content-between align-items-center py-3 px-3 mb-2 rounded-3 shadow-sm border-0"
                  style={{ background: "#f8f9fa" }}
                >
                  <div className="d-flex align-items-center gap-3 flex-grow-1">
                    <Form.Check
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => handleToggleComplete(todo.id)}
                      className="fs-5"
                    />
                    <span
                      className="fs-5"
                      style={{
                        fontWeight: 500,
                        color: todo.completed ? "#198754" : "#212529"
                      }}
                    >
                      {todo.text}
                    </span>
                  </div>

                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="rounded-pill px-3"
                    onClick={() => handleDeleteTodo(todo.id)}
                  >
                    Xóa
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}

          {/* Footer stats */}
          {todos.length > 0 && (
            <div className="mt-4 text-center text-muted">
              Hoàn thành:{" "}
              <span className="fw-bold text-success">
                {todos.filter(t => t.completed).length}
              </span>
              /{todos.length}
            </div>
          )}

        </Card.Body>
      </Card>
    </Container>
  );
}

export default Exercise4;

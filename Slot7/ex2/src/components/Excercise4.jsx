import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, ListGroup, Badge } from "react-bootstrap";

function Exercise4() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const completedCount = todos.filter(t => t.completed).length;

  return (
    <div>
      <Container fluid className="py-5">
        <Row className="justify-content-center align-items-start g-5">

          {/* LEFT SIDE - INPUT */}
          <Col md={5}>
            <Form onSubmit={handleAddTodo}>
              <div className="d-flex gap-3">
                <Form.Control
                  type="text"
                  placeholder="Please input a task"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="shadow-sm"
                />
                <Button variant="danger" type="submit" className="px-4">
                  Add Todo
                </Button>
              </div>
            </Form>
          </Col>

          {/* RIGHT SIDE - TODO LIST */}
          <Col md={4}>
            <Card className="shadow border-0 rounded-3">
              <Card.Body>
                <Card.Title className="text-center fw-bold mb-3">
                  Todo List
                </Card.Title>

                {todos.length === 0 ? (
                  <p className="text-center text-muted">No tasks yet</p>
                ) : (
                  <>
                    <ListGroup className="mb-3">
                      {todos.map((todo) => (
                        <ListGroup.Item
                          key={todo.id}
                          className="d-flex justify-content-between align-items-center"
                        >
                          <div className="d-flex align-items-center gap-2">
                            <Form.Check
                              type="checkbox"
                              checked={todo.completed}
                              onChange={() => handleToggleComplete(todo.id)}
                            />
                            <span
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
                            onClick={() => handleDeleteTodo(todo.id)}
                          >
                            Delete
                          </Button>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>

                    {/* FOOTER STATS */}
                    <div className="text-center">
                      <Badge bg="success" className="px-3 py-2">
                        Completed: {completedCount}/{todos.length}
                      </Badge>
                    </div>
                  </>
                )}
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default Exercise4;

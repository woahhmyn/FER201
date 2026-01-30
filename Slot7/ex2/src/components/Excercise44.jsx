// Exercise44.jsx – Dùng useReducer quản lý danh sách công việc
import React, { useReducer, useState } from "react";
import { Container, Row, Col, Card, Form, Button, ListGroup, Badge } from "react-bootstrap";

function reducer(todos, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return [...todos, { id: Date.now(), text: action.payload, completed: false }];

    case 'DELETE_TASK':
      return todos.filter(todo => todo.id !== action.id);

    case 'TOGGLE_TASK':
      return todos.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    default:
      return todos;
  }
}

function Exercise44() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [inputValue, setInputValue] = useState("");

  const completedCount = todos.filter(t => t.completed).length;

  return (
    <Container fluid className="py-5">
      <Row className="justify-content-center g-5">
        <Col md={5}>
          <Form onSubmit={(e) => {
            e.preventDefault();
            if (inputValue.trim()) {
              dispatch({ type: 'ADD_TASK', payload: inputValue });
              setInputValue("");
            }
          }}>
            <div className="d-flex gap-3">
              <Form.Control value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
              <Button type="submit" variant="danger">Add Todo</Button>
            </div>
          </Form>
        </Col>

        <Col md={4}>
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="text-center">Todo List</Card.Title>

              <ListGroup className="mb-3">
                {todos.map(todo => (
                  <ListGroup.Item key={todo.id} className="d-flex justify-content-between">
                    <div>
                      <Form.Check
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => dispatch({ type: 'TOGGLE_TASK', id: todo.id })}
                      />
                      <span className="ms-2">{todo.text}</span>
                    </div>
                    <Button size="sm" variant="outline-danger" onClick={() => dispatch({ type: 'DELETE_TASK', id: todo.id })}>
                      Delete
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>

              <div className="text-center">
                <Badge bg="success">Completed: {completedCount}/{todos.length}</Badge>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Exercise44;

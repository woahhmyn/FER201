import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, ListGroup, Card, InputGroup } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons'; // Lưu ý: Cần cài npm install react-bootstrap-icons

const TodoList = () => {
  const [task, setTask] = useState(""); // Lưu giá trị input hiện tại
  const [todos, setTodos] = useState([]); // Lưu danh sách các công việc 
  const [validated, setValidated] = useState(false);

  // Hàm thêm công việc mới
  const handleAddTodo = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false || task.trim() === "") {
      event.stopPropagation();
      setValidated(true);
    } else {
      // Tạo object task mới 
      const newTodo = {
        id: Date.now(),
        text: task
      };
      
      setTodos([...todos, newTodo]); // Thêm vào danh sách [cite: 42]
      setTask(""); // Reset ô nhập
      setValidated(false); // Reset trạng thái validate
    }
  };

  // Hàm xóa công việc 
  const handleDelete = (id) => {
    const updatedTodos = todos.filter(item => item.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="text-center mb-4">Exercise 4: Todo List</Card.Title>
              
              {/* Form nhập công việc  */}
              <Form noValidate validated={validated} onSubmit={handleAddTodo}>
                <InputGroup className="mb-3">
                  <Form.Control
                    required
                    type="text"
                    placeholder="Nhập công việc mới..." 
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                  />
                  <Button variant="primary" type="submit">
                    Add Todo 
                  </Button>
                  <Form.Control.Feedback type="invalid">
                    Vui lòng không để trống nội dung công việc.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form>

              <hr />

              {/* Hiển thị danh sách công việc [cite: 42] */}
              <h5 className="mb-3">Danh sách công việc:</h5>
              {todos.length > 0 ? (
                <ListGroup variant="flush">
                  {todos.map((item) => (
                    <ListGroup.Item 
                      key={item.id} 
                      className="d-flex justify-content-between align-items-center border rounded mb-2 shadow-sm"
                    >
                      <span>{item.text}</span>
                      <Button 
                        variant="danger" 
                        size="sm" 
                        onClick={() => handleDelete(item.id)} 
                      >
                        Delete 
                      </Button>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              ) : (
                <p className="text-muted text-center">Chưa có công việc nào được thêm.</p>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TodoList;
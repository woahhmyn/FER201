// Exercise33.jsx – Dùng useReducer quản lý toàn bộ form bằng 1 object
import React, { useReducer } from 'react';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';

const initialState = {
  name: '',
  price: '',
  category: '',
  submittedData: null
};

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return { ...state, [action.field]: action.value };

    case 'SUBMIT':
      return { ...state, submittedData: action.payload };

    case 'RESET_FORM':
      return initialState;

    default:
      return state;
  }
}

function Exercise33() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.name && state.price && state.category) {
      dispatch({ type: 'SUBMIT', payload: state });
    }
  };

  return (
    <Container fluid className="py-5 px-4 px-md-5">
      <h2 className="text-center mb-4">Exercise 33: Form quản lý sản phẩm (useReducer)</h2>

      <div className="d-flex justify-content-center">
        <Card style={{ maxWidth: '600px', width: '100%' }} className="shadow">
          <Card.Body className="p-4">
            <Card.Title className="mb-4">Thêm sản phẩm mới</Card.Title>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Tên sản phẩm</Form.Label>
                <Form.Control
                  type="text"
                  value={state.name}
                  onChange={(e) => dispatch({ type: 'CHANGE_INPUT', field: 'name', value: e.target.value })}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Giá</Form.Label>
                <Form.Control
                  type="number"
                  value={state.price}
                  onChange={(e) => dispatch({ type: 'CHANGE_INPUT', field: 'price', value: e.target.value })}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Danh mục</Form.Label>
                <Form.Select
                  value={state.category}
                  onChange={(e) => dispatch({ type: 'CHANGE_INPUT', field: 'category', value: e.target.value })}
                >
                  <option value="">-- Chọn danh mục --</option>
                  <option>Điện thoại</option>
                  <option>Laptop</option>
                  <option>Tablet</option>
                  <option>Phụ kiện</option>
                </Form.Select>
              </Form.Group>

              <div className="d-flex gap-2">
                <Button type="submit" variant="primary" className="flex-fill">Thêm sản phẩm</Button>
                <Button variant="secondary" onClick={() => dispatch({ type: 'RESET_FORM' })} className="flex-fill">Làm mới</Button>
              </div>
            </Form>

            {state.submittedData && (
              <Alert variant="success" className="mt-4">
                ✅ Thêm sản phẩm thành công!
              </Alert>
            )}
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default Exercise33;

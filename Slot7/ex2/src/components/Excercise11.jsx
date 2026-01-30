// Excercise1(2).jsx  dùng useReducer để tăng giảm số lượng sản phẩm trong giỏ hàng
import React, { useReducer } from 'react';
import { Container, Card, Button, Form } from 'react-bootstrap';
const initialState = { quantity: 0 };
// Bước 1: Định nghĩa hàm reducer, xử lý các action increase, decrease, set_input

function reducerQuantity(state, action) {
  switch (action.type) {
    case 'INCREASE':
      return { ...state, quantity: state.quantity + 1 };
    case 'DECREASE':
      return { ...state, quantity: Math.max(0, state.quantity - 1) };
    case 'SET_INPUT':
      const value = parseInt(action.payload);
      return { ...state, quantity: isNaN(value) ? 0 : value };
    default:
      throw new Error('Unknown action type');
  }
}

// Bước 2: Sử dụng useReducer trong component
function Exercise11() {
  const [state, dispatch] = useReducer(reducerQuantity, initialState);

  return (
    <Container fluid className="py-5 px-4 px-md-5">
      <div className="d-flex justify-content-center">
        <Card style={{ maxWidth: '500px', width: '100%' }} className="shadow">
          <Card.Body className="p-4">
            <Card.Title className="text-center mb-3">
              Chỉnh sửa số lượng (useReducer)
            </Card.Title>

            <div className="d-flex justify-content-center align-items-center gap-3 mb-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => dispatch({ type: 'DECREASE' })}
                disabled={state.quantity === 0}
                style={{ width: '60px', height: '60px', fontSize: '24px' }}
              >
                −
              </Button>

              <Form.Control
                type="text"
                value={state.quantity}
                onChange={(e) =>
                  dispatch({ type: 'SET_INPUT', payload: e.target.value })
                }
                className="text-center fw-bold"
                style={{ width: '120px', height: '60px', fontSize: '32px' }}
              />

              <Button
                variant="primary"
                size="lg"
                onClick={() => dispatch({ type: 'INCREASE' })}
                style={{ width: '60px', height: '60px', fontSize: '24px' }}
              >
                +
              </Button>
            </div>

            <div className="alert alert-info text-center mb-0">
              <strong>Số lượng hiện tại:</strong> {state.quantity}
            </div>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default Exercise11;
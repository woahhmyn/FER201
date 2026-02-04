//CapNhatSoLuong2.jsx dùng useReducer để tăng giảm số lượng sản phẩm trong giỏ hàng
import React, { useReducer } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { InputGroup, FormControl } from 'react-bootstrap';

//Bước 1: Định nghĩa hàm reducer, xử lý action: INCREASE, DECREASE, SET_INPUT
const initialState = { quantity: 1 };

function reducerQuantity(state, action) {
    switch (action.type) {
        case 'INCREASE':
            return { quantity: state.quantity + 1 };
        case 'DECREASE':
            return { quantity: state.quantity > 1 ? state.quantity - 1 : 1 };
        case 'SET_INPUT':
            return { quantity: action.payload };
        default:
            throw new Error('Unknown action type');
    }
}  



//Buoc 2: Sử dụng useReducer trong component
function CapNhatSoLuong2() {
    const [state, dispatch] = useReducer(reducerQuantity, initialState);
    const handleInputChange = (e) => {
        const val = e.target.value;
        // Kiểm tra: Nếu là chuỗi rỗng HOẶC là số hợp lệ
        if (val === '' || (!isNaN(val) && Number.isInteger(Number(val)))) {
            dispatch({ type: 'SET_INPUT', payload: val });
        }
    };

    const handleBlur = () => {
        // Rà soát lại khi người dùng rời ô nhập (Blur event)
        // Nếu trống hoặc nhỏ hơn 1, tự động đưa về 1
        if (state.quantity === '' || Number(state.quantity) < 1) {
            dispatch({ type: 'SET_INPUT', payload: 1 });
        } else {
            // Đảm bảo lưu dưới dạng số thuần túy
            dispatch({ type: 'SET_INPUT', payload: Number(state.quantity) });
        }
    };
    return (
        <div>
            <div className="p-3">
                <h3>Exercise 1: Update Quantity with useReducer</h3>
                <InputGroup className="mb-3" style={{ maxWidth: '200px' }}> 
                    <Button variant="outline-secondary" onClick={() => dispatch({ type: 'DECREASE' })}>-</Button>   
                    <FormControl className="text-center" value={state.quantity} onChange={handleInputChange} onBlur={handleBlur} />
                    <Button variant="outline-secondary" onClick={() => dispatch({ type: 'INCREASE' })}>+</Button>   
                </InputGroup>   
            </div>
        </div>
    );
}
export default CapNhatSoLuong2;
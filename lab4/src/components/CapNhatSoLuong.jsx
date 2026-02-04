//CapNhatSoLuong.jsx để tăng giảm số lượng sản phẩm trong giỏ hàng
import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { InputGroup, FormControl } from 'react-bootstrap';
function CapNhatSoLuong() {
    const [quantity, setQuantity] = useState(1);
    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };
    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    return (
        <div>
                        <div className="p-3">
            <h3>Exercise 1: Update Quantity</h3>
            <InputGroup className="mb-3" style={{ maxWidth: '200px' }}>
                <Button variant="outline-secondary" onClick={handleDecrease}>-</Button>
                <FormControl className="text-center" value={quantity} readOnly />
                <Button variant="outline-secondary" onClick={handleIncrease}>+</Button>
            </InputGroup>
        </div>
        </div>
    );
}
export default CapNhatSoLuong;
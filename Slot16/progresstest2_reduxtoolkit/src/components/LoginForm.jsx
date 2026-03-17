import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';

import { useSelector, useDispatch } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import ModalConfirm from '../components/ModalConfirm';
import axios from 'axios'; 

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState(''); 
    const [errors, setErrors] = useState({}); // Local state for errors
    const [showModal, setShowModal] = useState(false); // State for modal visibility
    // Lấy navigate từ react-router-dom để chuyển hướng sau khi đăng nhập thành công
    const navigate = useNavigate();

    // Lấy state từ Redux
    const { loading, error } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const validateField = (name, value) => {
        const newErrors = { ...errors };
        if (name === 'username') {
            if (!value.trim()) {
                newErrors.username = 'Username is required';
            } else {
                delete newErrors.username;
            }
        }
        if (name === 'password') {
            if (!value) {
                newErrors.password = 'Password is required';
            } else if (value.length < 6) {
                newErrors.password = 'Password must be at least 6 characters';
            } else {
                delete newErrors.password;
            }
        }
        setErrors(newErrors);
    };

    const handleUsernameChange = (e) => {
        const value = e.target.value;
        setUsername(value);
        validateField('username', value);
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        validateField('password', value);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        
        //Xử lý lỗi cơ bản trước khi gọi API (ví dụ: kiểm tra rỗng)
        const newErrors = {};
        if (!username.trim()) newErrors.username = 'Username is required';
        if (!password) newErrors.password = 'Password is required';
        //Xử lý lỗi password yếu (ví dụ: ít nhất 6 ký tự)
        if (password && password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return; // Nếu có lỗi, không tiếp tục gọi API
        }

        // Gọi hàm login từ services. 
        // Lưu ý: Hàm này nên tự thực hiện dispatch LOGIN_START và LOGIN_SUCCESS/FAILURE nội bộ.
        dispatch(loginStart());
        try {
            const response = await axios.get('http://localhost:3001/users');
            const users = response.data;

            const user = users.find(
                (u) => u.username === username && u.password === password
            );

            if (user) {
                // Kiểm tra trạng thái tài khoản trước khi đăng nhập, nếu locked thì báo lỗi Access is denied.
                if (user.status === 'locked') {
                    dispatch(loginFailure('Access is denied. Your account is locked.'));
                    return;
                }
                const { password, ...safeUser } = user;
                dispatch(loginSuccess(safeUser));
                console.log('Login successful:', safeUser);
                // alert('Login successful!');
                //Thay vì hiển thị alert, chúng ta sẽ hiển thị modal xác nhận
                setShowModal(true);
                setTimeout(() => {
                    setShowModal(false);
                    navigate('/');
                }, 3000);
                
            } else {
                const errorMessage = 'Tài khoản hoặc mật khẩu không chính xác';
                dispatch(loginFailure(errorMessage));
                console.error('Login failed:', errorMessage);
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Không thể kết nối đến máy chủ';
            dispatch(loginFailure(errorMessage));
            console.error('Login failed:', errorMessage);
        }
    };

    const handleCancel = () => {
        setUsername('');
        setPassword('');
        setErrors({}); // Clear errors on cancel
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    <Card className="shadow-sm">
                        <Card.Header className="bg-white py-3">
                            <h3 className="text-center mb-0">Login</h3>
                        </Card.Header>
                        <Card.Body className="p-4">
                            
                            {/* Hiển thị thông báo lỗi nếu có từ global state hoặc local message */}
                            {error || errors.message ? <Alert variant="danger">{error || errors.message}</Alert> : null}

                            <Form onSubmit={handleLogin}>
                                <Form.Group controlId="identifier" className="mb-3">
                                    <Form.Label>Username or email</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter username or email"
                                        value={username}
                                        onChange={handleUsernameChange}
                                        required
                                        disabled={loading}
                                        isInvalid={!!errors.username}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.username}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="password" className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        value={password}
                                        onChange={handlePasswordChange}   
                                        placeholder="Enter password"
                                        required
                                        disabled={loading}
                                        isInvalid={!!errors.password}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <div className="d-flex gap-2 mt-4">
                                    <Button 
                                        variant="primary" 
                                        type="submit" 
                                        className="flex-fill"
                                        disabled={loading}
                                    >
                                        {loading ? 'Logging in...' : 'Login'}
                                    </Button>
                                    <Button 
                                        variant="secondary" 
                                        type="button" 
                                        className="flex-fill"
                                        onClick={handleCancel}
                                        disabled={loading}
                                    >
                                        Cancel
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* Modal xác nhận đăng nhập thành công */}
            <ModalConfirm 
                show={showModal}
                title="Login Successful"
                message="You have successfully logged in. Redirecting to dashboard..."
                onConfirm={() => setShowModal(false)} 
                onCancel={() => setShowModal(false)} 
            />
        </Container>
    );  
}   

export default LoginForm;
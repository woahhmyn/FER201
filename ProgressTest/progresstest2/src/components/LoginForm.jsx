import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

function LoginForm({ onSubmit, loading, externalError }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    // Hàm để reset form khi nhấn Cancel
    const handleCancel = () => {
        setUsername('');
        setPassword('');
        setErrors({});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Vẫn giữ logic validate cũ
        if (!username.trim()) {
            setErrors(p => ({ ...p, username: 'Username is required.' }));
            return;
        }
        if (password.length < 6) {
            setErrors(p => ({ ...p, password: 'Password must be at least 6 characters.' }));
            return;
        }
        onSubmit({ username, password });
    };

    return (
        <>
            {externalError && <Alert variant="danger" className="py-2">{externalError}</Alert>}

            <Form onSubmit={handleSubmit} noValidate>
                {/* Username field giữ nguyên */}
                <Form.Group className="mb-3">
                    <Form.Label className="fw-medium small">Username</Form.Label>
                    <Form.Control
                        type="text"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                            setErrors((p) => ({ ...p, username: '' }));
                        }}
                        isInvalid={!!errors.username}
                    />
                </Form.Group>

                {/* Password field */}
                <Form.Group className="mb-3">
                    <Form.Label className="fw-medium small">Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setErrors((p) => ({ ...p, password: '' }));
                        }}
                        isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                </Form.Group>

                <div className="d-flex gap-2">
                    <Button type="submit" variant="primary" className="flex-grow-1 fw-medium" disabled={loading}>
                        {loading ? 'Signing in...' : 'Login'}
                    </Button>

                    {password.length > 0 && password.length < 6 && (
                        <Button
                            type="button"
                            variant="outline-secondary"
                            onClick={handleCancel}
                            className="fw-medium"
                        >
                            Cancel
                        </Button>
                    )}
                </div>
            </Form>
        </>
    );
}

export default LoginForm;
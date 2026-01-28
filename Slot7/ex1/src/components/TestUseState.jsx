//Component dùng để test useState, có form gồm username và age. Nhấn nút Submit
// sẽ thay đổi giá trị hiển thị bên dưới trên label
// dùng card form gồm có heading title là Test useState Hook và 4 dòng 2 cột, 4 dòng gồm username, age, subumit, và label Hello,{username}, age
import React, { useState } from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';

export default function TestUseState() {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [displayAge, setDisplayAge] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisplayName(username);
        setDisplayAge(age);
    };

    return (
        <Card
            className="shadow-lg p-5 mx-auto"
            style={{ maxWidth: '750px', borderRadius: '18px' }}
        >
            <Card.Body>
                <Card.Title className="text-center mb-5 fs-3 fw-bold text-primary">
                    Test useState Hook
                </Card.Title>

                <Form onSubmit={handleSubmit}>
                    {/* Username */}
                    <Form.Group as={Row} className="mb-4 align-items-center" controlId="formUsername">
                        <Form.Label column sm={3} className="fw-semibold text-start">
                            Username
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter username"
                                className="rounded-pill px-3 py-2"
                            />
                        </Col>
                    </Form.Group>

                    {/* Age */}
                    <Form.Group as={Row} className="mb-4 align-items-center" controlId="formAge">
                        <Form.Label column sm={3} className="fw-semibold text-start">
                            Age
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control
                                type="number"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                placeholder="Enter age"
                                className="rounded-pill px-3 py-2"
                            />
                        </Col>
                    </Form.Group>

                    {/* Submit Button */}
                    <div className="text-center my-4">
                        <Button variant="primary" type="submit" className="rounded-pill px-5 py-2 fs-5">
                            Submit
                        </Button>
                    </div>

                    {/* Result */}
                    {displayName && (
    <div className="text-center mt-4">
        <span
            className="px-4 py-2 rounded-pill fw-bold fs-5"
            style={{
                backgroundColor: "#e6f4ea",
                color: "#198754",
                display: "inline-block"
            }}
        >
            Hello, {displayName}, you are {displayAge} years old
        </span>
    </div>
)}

                </Form>
            </Card.Body>
        </Card>
    );
}

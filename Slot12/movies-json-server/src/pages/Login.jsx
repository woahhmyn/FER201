import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Container, Form, Button } from "react-bootstrap";

function Login({ onLoginSuccess }) {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const ok = await login(username, password);

    if (ok) onLoginSuccess();
    else alert("Sai tài khoản hoặc mật khẩu");
  };

  return (
    <Container style={{ maxWidth: 400, marginTop: 100 }}>
      <h2 className="text-center">Login</h2>

      <Form onSubmit={handleSubmit}>
        <Form.Control
          placeholder="Username"
          className="mb-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Form.Control
          type="password"
          placeholder="Password"
          className="mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit" className="w-100">
          Login
        </Button>
      </Form>
    </Container>
  );
}export default Login;
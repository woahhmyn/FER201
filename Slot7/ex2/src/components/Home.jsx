import React from "react";
import { Container, Card } from "react-bootstrap";

function Home() {
  return (
    <Container fluid className="py-5 px-4 px-md-5">
      <div className="d-flex justify-content-center">
        <Card className="shadow-lg border-0 rounded-4" style={{ maxWidth: "800px", width: "100%" }}>
          <Card.Body className="p-5 text-center">
            <h1 className="fw-bold text-primary mb-3">Welcome to Lab 3-4</h1>
            <p className="text-muted fs-5 mb-0">
              Thực hành React Hooks: <strong>useState</strong> và <strong>useReducer</strong>  
              thông qua các bài tập quản lý dữ liệu và giao diện.
            </p>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default Home;

import React, { useEffect, useState, Suspense } from "react";
import { fetchUsers } from "../api/api";
import { Alert, Spinner, Row, Col, Card } from "react-bootstrap";

const User = React.lazy(() => import("../components/User"));

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);//lưu lỗi
  const [loading, setLoading] = useState(true);//trạng thái loading

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch {
        setError("Không thể tải dữ liệu người dùng. Kiểm tra kết nối mạng.");
      } finally {
        setLoading(false);
      }
    };
    loadUsers();
  }, []);

  return (
  <div
    style={{
      background: "#f6f7f9",
      minHeight: "100vh",
      padding: "40px 0"
    }}
  >
    <div className="container">
      <h2
        style={{
          textAlign: "center",
          fontWeight: 700,
          marginBottom: 40,
          letterSpacing: "1px"
        }}
      >
        Users Directory
      </h2>

      {loading && (
        <div style={{ textAlign: "center" }}>
          <Spinner animation="border" />
        </div>
      )}

      {error && (
        <Alert variant="danger" style={{ textAlign: "center" }}>
          {error}
        </Alert>
      )}

      {!loading && !error && (
        <Suspense fallback={<p style={{ textAlign: "center" }}>Loading Users...</p>}>
          <Row className="g-4">
            {users.map(user => (
              <Col md={6} lg={4} key={user.id}>
                <Card
                  style={{
                    background: "#fff",
                    borderRadius: 14,
                    border: "none",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                    transition: "transform 0.2s ease",
                    height: "100%"
                  }}
                >
                  <Card.Body style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontSize: 13,
                        color: "#6c757d",
                        marginBottom: 10
                      }}
                    >
                      User #{user.id}
                    </div>

                    <User user={user} />
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Suspense>
      )}
    </div>
  </div>
);
}

export default UsersPage;

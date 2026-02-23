import React, { useEffect, useState, Suspense } from "react";
import { fetchPosts } from "../api/api";
import { Alert, Spinner, Card } from "react-bootstrap";

const Post = React.lazy(() => import("../components/Post"));

function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);//lưu lỗi
  const [loading, setLoading] = useState(true);//trạng thái loading

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data.slice(0, 10));
      } catch {
        setError("Không thể tải bài viết. Kiểm tra kết nối mạng.");
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
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
        Latest Posts
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
        <Suspense fallback={<p style={{ textAlign: "center" }}>Loading Posts...</p>}>
          {posts.map(post => (
            <Card
              key={post.id}
              style={{
                background: "#fff",
                borderRadius: 14,
                border: "none",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                padding: 20,
                marginBottom: 20
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  color: "#6c757d",
                  marginBottom: 8
                }}
              >
                Post #{post.id}
              </div>

              <Post post={post} />
            </Card>
          ))}
        </Suspense>
      )}
    </div>
  </div>
);
}

export default PostsPage;

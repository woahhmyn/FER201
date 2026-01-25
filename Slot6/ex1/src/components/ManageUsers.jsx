import users from "../data/ListOfUsers";

export default function ManageUsers() {
  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: "Segoe UI", sans-serif;
        }


        .glass-card {
          width: 1000px;
          padding: 30px;
          border-radius: 20px;
          backdrop-filter: blur(18px);
          background: rgba(255, 255, 255, 0.18);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
          color: white;
        }

        h2 {
          margin-bottom: 24px;
          font-size: 28px;
          text-align: center;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 10px;
          table-layout: auto;
        }

        th, td {
          padding: 14px 12px;
          text-align: center;
        }

        th:nth-child(1) {
          width: 6%;
        }

        th:nth-child(2) {
          width: 10%;
        }

        th:nth-child(3) {
          width: 18%;
        }

        th:nth-child(4) {
          width: 12%;
        }

        th:nth-child(5) {
          width: 22%;
        }

        th:nth-child(6) {
          width: 32%;
        }

        td:nth-child(1),
        td:nth-child(2),
        td:nth-child(4) {
          text-align: center;
        }

        td:nth-child(3),
        td:nth-child(5) {
          text-align: left;
        }

        th {
          font-size: 13px;
          font-weight: 600;
          opacity: 0.9;
          border-bottom: 2px solid rgba(255, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.08);
          text-align: center;
        }

        td {
          font-size: 14px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          height: 55px;
          vertical-align: middle;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        tbody tr {
          transition: all 0.3s ease;
        }

        tbody tr:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: scale(1.01);
        }

        tbody tr:last-child td {
          border-bottom: none;
        }

        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .status {
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
          display: inline-block;
          text-align: center;
          min-width: 70px;
        }

        .active {
          background: rgba(72, 187, 120, 0.4);
          color: #a3e4d7;
        }

        .locked {
          background: rgba(245, 101, 101, 0.4);
          color: #f8b4b4;
        }

        .actions {
          display: flex;
          gap: 10px;
          justify-content: center;
        }

        .btn {
          padding: 8px 14px;
          border-radius: 6px;
          border: none;
          font-size: 12px;
          font-weight: 500;
          cursor: pointer;
          color: white;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .btn-edit {
          background: linear-gradient(135deg, #6a5af9, #8f7cf8);
        }

        .btn-edit:hover {
          box-shadow: 0 4px 12px rgba(106, 90, 249, 0.4);
          transform: translateY(-2px);
        }

        .btn-lock {
          background: rgba(255, 255, 255, 0.25);
        }

        .btn-lock:hover {
          background: rgba(255, 255, 255, 0.35);
          transform: translateY(-2px);
        }
      `}</style>

      <div className="page">
        <div className="glass-card">
          <h2>Manage Users</h2>

          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Avatar</th>
                <th>UserName</th>
                <th>Status</th>
                <th>Password</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {users.map((u) => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>
                    <img src={u.avatar} alt="avatar" className="avatar" />
                  </td>
                  <td>{u.username}</td>
                  <td>
                    <span
                      className={`status ${
                        u.status === "Active" ? "active" : "locked"
                      }`}
                    >
                      {u.status}
                    </span>
                  </td>
                  <td>{u.password}</td>
                  <td>
                    <div className="actions">
                      <button className="btn btn-edit">Edit</button>
                      <button className="btn btn-lock">Lock</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

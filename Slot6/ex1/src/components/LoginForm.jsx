export default function GlassLoginForm() {
  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: "Segoe UI", sans-serif;
        }

        

        .glass-card {
          width: 900px;
          height: 420px;
          display: flex;
          border-radius: 20px;
          backdrop-filter: blur(18px);
          background: rgba(255, 255, 255, 0.18);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
          overflow: hidden;
        }

        /* LEFT SIDE */
        .left {
          flex: 1;
          padding: 40px;
          color: white;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.15),
            rgba(255, 255, 255, 0.05)
          );
        }

        .left h1 {
          margin-top: 80px;
          font-size: 36px;
        }

        .left p {
          margin-top: 16px;
          line-height: 1.6;
          opacity: 0.85;
        }

        /* RIGHT SIDE */
        .right {
          flex: 1.3;
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          color: white;
        }

        .form-row {
          display: flex;
          gap: 20px;
          margin-bottom: 24px;
        }

        .form-group {
          flex: 1;
        }

        .form-group label {
          display: block;
          font-size: 13px;
          margin-bottom: 6px;
          opacity: 0.8;
        }

        .form-group input {
          width: 100%;
          padding: 12px 14px;
          border-radius: 10px;
          border: none;
          outline: none;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          font-size: 14px;
          box-sizing: border-box;
        }

        .form-group input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }

        .actions {
          display: flex;
          justify-content: flex-end;
          gap: 16px;
          margin-top: 30px;
        }

        .btn-cancel {
          padding: 10px 26px;
          border-radius: 10px;
          border: none;
          background: rgba(255, 255, 255, 0.25);
          color: white;
          cursor: pointer;
        }

        .btn-login {
          padding: 10px 30px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          font-weight: 600;
          color: white;
          background: linear-gradient(135deg, #6a5af9, #8f7cf8);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
        }
      `}</style>

      <div className="page">
        <div className="glass-card">
          {/* LEFT */}
          <div className="left">
            <h1>Welcome Back</h1>
            <p>
              Access your professional workspace and manage your workflow
              effortlessly.
            </p>
          </div>

          {/* RIGHT */}
          <div className="right">
            <div className="form-row">
              <div className="form-group">
                <label>USERNAME</label>
                <input type="text" placeholder="Enter username" />
              </div>

              <div className="form-group">
                <label>PASSWORD</label>
                <input type="password" placeholder="Enter password" />
              </div>
            </div>

            <div className="actions">
              <button className="btn-cancel">Cancel</button>
              <button className="btn-login">Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

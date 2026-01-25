export default function AppLayout({ children }) {
  return (
    <>
      <style>{`
        .app-page {
          min-height: calc(100vh - 56px); /* trừ navbar */
          display: flex;
          justify-content: center;
          padding-top: 40px;
          background: linear-gradient(135deg, #667eea, #764ba2);
        }
      `}</style>

      <div className="app-page">
        {children}
      </div>
    </>
  );
}

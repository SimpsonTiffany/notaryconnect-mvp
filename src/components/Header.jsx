import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      style={{
        padding: "20px",
        borderBottom: "1px solid #ddd",
        marginBottom: "24px",
      }}
    >
      <h2 style={{ margin: 0 }}>NotaryConnect</h2>

      <nav style={{ marginTop: "10px", display: "flex", gap: "16px" }}>
        <Link to="/">Home</Link>
        <Link to="/request">Request</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
    </header>
  );
}
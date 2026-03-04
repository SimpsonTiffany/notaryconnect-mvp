import { NavLink } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
    textDecoration: "none",
    fontWeight: isActive ? 700 : 500,
});

export default function Header() {
    return (
        <header
            style={{
                padding: "12px 16px",
                borderBottom: "1px solid #e5e5e5",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 16,
            }}
        >
            <div style={{ fontWeight: 800 }}>NotaryConnect</div>

            <nav style={{ display: "flex", gap: 14 }}>
                <NavLink to="/" style={linkStyle}>Home</NavLink>
                <NavLink to="/request" style={linkStyle}>Request</NavLink>
                <NavLink to="/dashboard" style={linkStyle}>Dashboard</NavLink>
            </nav>
        </header>
    );
}
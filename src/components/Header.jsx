import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";

const linkStyle = ({ isActive }) => ({
    textDecoration: "none",
    fontWeight: isActive ? 700 : 500,
});

export default function Header() {
    const { isAuthenticated, logout, userEmail } = useAuth();
    const navigate = useNavigate();

    function handleLogout() {
        logout();
        navigate("/login");
    }

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

            <nav style={{ display: "flex", gap: 14, alignItems: "center" }}>
                <NavLink to="/" style={linkStyle}>Home</NavLink>
                <NavLink to="/request" style={linkStyle}>Request</NavLink>

                {isAuthenticated && (
                    <NavLink to="/dashboard" style={linkStyle}>Dashboard</NavLink>
                )}

                {!isAuthenticated && (
                    <>
                        <NavLink to="/login" style={linkStyle}>Login</NavLink>
                        <NavLink to="/register" style={linkStyle}>Register</NavLink>
                    </>
                )}

                {isAuthenticated && (
                    <>
                        <span style={{ fontSize: 14, opacity: 0.8 }}>
                            {userEmail}
                        </span>
                        <button
                            onClick={handleLogout}
                            style={{
                                padding: "6px 10px",
                                cursor: "pointer",
                                fontWeight: 600,
                            }}
                        >
                            Logout
                        </button>
                    </>
                )}
            </nav>
        </header>
    );
}
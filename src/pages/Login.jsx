import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";

export default function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        try {
            login(email, password);
            setSuccess("Logged in successfully.");
            navigate("/dashboard");
        } catch (err) {
            setError(err?.message || "Login failed.");
        }
    };

    return (
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
            <h1>Login</h1>

            {error && <p style={{ color: "crimson" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}

            <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
                <label>
                    Email
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        required
                        style={{ width: "100%", padding: 10, marginTop: 6 }}
                    />
                </label>

                <label>
                    Password
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        required
                        minLength={8}
                        style={{ width: "100%", padding: 10, marginTop: 6 }}
                    />
                </label>

                <button type="submit" style={{ padding: 12, fontWeight: 700, cursor: "pointer" }}>
                    Login
                </button>
            </form>

            <p style={{ marginTop: 12 }}>
                Don’t have an account? <Link to="/register">Register</Link>
            </p>
        </div>
    );
}
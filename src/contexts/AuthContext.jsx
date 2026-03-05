import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext(null);

const STORAGE_KEY = "nc_auth"; // store minimal session info (demo)

function nowMs() {
    return Date.now();
}

// Demo-only "JWT" generator (no backend). Still shows token + expiry flow.
function createFakeJwt(email, expiresInMinutes) {
    const payload = {
        sub: email,
        exp: Math.floor((nowMs() + expiresInMinutes * 60_000) / 1000),
    };
    // Not a real JWT signature; for a frontend-only course demo this is fine.
    return btoa(JSON.stringify(payload));
}

function decodeFakeJwt(token) {
    try {
        return JSON.parse(atob(token));
    } catch {
        return null;
    }
}

export function AuthProvider({ children }) {
    const [token, setToken] = useState(null);
    const [userEmail, setUserEmail] = useState(null);
    const [expiresAtMs, setExpiresAtMs] = useState(null);

    // Load session (optional). Using sessionStorage is better than localStorage for tokens.
    useEffect(() => {
        const raw = sessionStorage.getItem(STORAGE_KEY);
        if (!raw) return;

        try {
            const saved = JSON.parse(raw);
            if (saved?.token) {
                const decoded = decodeFakeJwt(saved.token);
                const expMs = decoded?.exp ? decoded.exp * 1000 : null;

                if (expMs && expMs > nowMs()) {
                    setToken(saved.token);
                    setUserEmail(decoded.sub ?? null);
                    setExpiresAtMs(expMs);
                } else {
                    sessionStorage.removeItem(STORAGE_KEY);
                }
            }
        } catch {
            sessionStorage.removeItem(STORAGE_KEY);
        }
    }, []);

    // Auto logout on expiration
    useEffect(() => {
        if (!expiresAtMs) return;
        const msLeft = expiresAtMs - nowMs();
        if (msLeft <= 0) {
            logout();
            return;
        }
        const t = setTimeout(() => logout(), msLeft);
        return () => clearTimeout(t);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [expiresAtMs]);

    const isAuthenticated = !!token;

    function logout() {
        setToken(null);
        setUserEmail(null);
        setExpiresAtMs(null);
        sessionStorage.removeItem(STORAGE_KEY);
    }

    // Demo "register": store credentials in sessionStorage for the assignment (NOT production).
    function register(email, password) {
        const emailClean = email.trim().toLowerCase();
        if (!emailClean) throw new Error("Email is required.");
        if (!password || password.length < 8) throw new Error("Password must be at least 8 characters.");

        // Minimal XSS-safe handling: never render as HTML; only store normalized strings
        const usersRaw = sessionStorage.getItem("nc_users");
        const users = usersRaw ? JSON.parse(usersRaw) : {};
        if (users[emailClean]) throw new Error("Account already exists.");

        users[emailClean] = { password }; // demo only
        sessionStorage.setItem("nc_users", JSON.stringify(users));

        return true;
    }

    function login(email, password) {
        const emailClean = email.trim().toLowerCase();
        const usersRaw = sessionStorage.getItem("nc_users");
        const users = usersRaw ? JSON.parse(usersRaw) : {};

        if (!users[emailClean] || users[emailClean].password !== password) {
            throw new Error("Invalid email or password.");
        }

        const expiresIn = Number(import.meta.env.VITE_AUTH_TIMEOUT_MINUTES ?? 30);
        const newToken = createFakeJwt(emailClean, expiresIn);
        const decoded = decodeFakeJwt(newToken);
        const expMs = decoded.exp * 1000;

        setToken(newToken);
        setUserEmail(emailClean);
        setExpiresAtMs(expMs);

        sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ token: newToken }));
        return true;
    }

    const value = useMemo(
        () => ({
            isAuthenticated,
            userEmail,
            token,
            expiresAtMs,
            login,
            logout,
            register,
        }),
        [isAuthenticated, userEmail, token, expiresAtMs]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used within AuthProvider");
    return ctx;
}
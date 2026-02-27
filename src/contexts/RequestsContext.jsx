import { createContext, useContext, useMemo, useState } from "react";

const RequestsContext = createContext(null);

export function RequestsProvider({ children }) {
    const [requests, setRequests] = useState([]);

    const addRequest = (newRequest) => {
        setRequests((prev) => [newRequest, ...prev]);
    };

    const updateStatus = (id, status) => {
        setRequests((prev) =>
            prev.map((r) => (r.id === id ? { ...r, status } : r))
        );
    };

    const value = useMemo(
        () => ({ requests, addRequest, updateStatus }),
        [requests]
    );

    return (
        <RequestsContext.Provider value={value}>
            {children}
        </RequestsContext.Provider>
    );
}

export function useRequests() {
    const ctx = useContext(RequestsContext);
    if (!ctx) throw new Error("useRequests must be used inside RequestsProvider");
    return ctx;
}
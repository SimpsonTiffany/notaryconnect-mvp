import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useRequests } from "../contexts/RequestsContext.jsx";

export default function RequestDetail() {
    const { id } = useParams();
    const { requests, updateStatus } = useRequests();
    const [request, setRequest] = useState(null);

    useEffect(() => {
        const found = requests.find((r) => r.id === id);
        setRequest(found || null);
    }, [requests, id]);

    if (!request) {
        return (
            <>
                <h1>Request Details</h1>
                <p>Loading request…</p>
                <p>
                    If you refreshed the page, this MVP stores requests in memory only (no database yet).
                </p>
                <Link to="/dashboard">Go to Dashboard</Link>
            </>
        );
    }

    return (
        <>
            <h1>Request Details</h1>
            <p><strong>Status:</strong> {request.status}</p>
            <p><strong>Name:</strong> {request.name}</p>
            <p><strong>Document:</strong> {request.documentType}</p>
            <p><strong>Date/Time:</strong> {request.dateTime}</p>
            <p><strong>Address:</strong> {request.address}</p>

            <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
                <button onClick={() => updateStatus(request.id, "Confirmed")}>Confirm</button>
                <button onClick={() => updateStatus(request.id, "Cancelled")}>Cancel</button>
            </div>
        </>
    );
}
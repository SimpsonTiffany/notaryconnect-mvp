import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRequests } from "../contexts/RequestsContext.jsx";

export default function RequestForm() {
    const navigate = useNavigate();
    const { addRequest } = useRequests();

    const [name, setName] = useState("");
    const [documentType, setDocumentType] = useState("Affidavit");
    const [dateTime, setDateTime] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            const id = crypto.randomUUID();

            const newRequest = {
                id,
                name: name.trim(),
                documentType,
                dateTime,
                status: "Pending",
            };

            addRequest(newRequest);
            navigate(`/requests/${id}`);

        } catch (error) {
            console.error("Error submitting request:", error);
            alert("Something went wrong while submitting your request. Please try again.");
        }
    };


    return (
        <>
            <h1>Request Notary Service</h1>

            <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12, maxWidth: 520 }}>
                <label>
                    Full Name
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        style={{ width: "100%", padding: 10, marginTop: 6 }}
                    />
                </label>

                <label>
                    Document Type
                    <select
                        value={documentType}
                        onChange={(e) => setDocumentType(e.target.value)}
                        style={{ width: "100%", padding: 10, marginTop: 6 }}
                    >
                        <option>Affidavit</option>
                        <option>Loan Signing</option>
                        <option>School Form</option>
                        <option>Other</option>
                    </select>
                </label>

                <label>
                    Appointment Date/Time
                    <input
                        type="datetime-local"
                        value={dateTime}
                        onChange={(e) => setDateTime(e.target.value)}
                        required
                        style={{ width: "100%", padding: 10, marginTop: 6 }}
                    />
                </label>

                <button
                    type="submit"
                    style={{ padding: 12, fontWeight: 700, cursor: "pointer" }}
                >
                    Submit Request
                </button>
            </form>
        </>
    );
}
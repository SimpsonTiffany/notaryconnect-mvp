import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRequests } from "../contexts/RequestsContext.jsx";
import { searchAddresses } from "../services/geocode.js";

export default function RequestForm() {
  const navigate = useNavigate();
  const { addRequest } = useRequests();

  const [name, setName] = useState("");
  const [documentType, setDocumentType] = useState("Affidavit");
  const [dateTime, setDateTime] = useState("");

  const [addressQuery, setAddressQuery] = useState("");
  const [addressSelected, setAddressSelected] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [loadingAddr, setLoadingAddr] = useState(false);
  const [addrError, setAddrError] = useState("");

  // simple debounce
  useEffect(() => {
    const t = setTimeout(async () => {
      setAddrError("");
      setAddressSelected(null);

      if (addressQuery.trim().length < 3) {
        setSuggestions([]);
        return;
      }

      try {
        setLoadingAddr(true);
        const results = await searchAddresses(addressQuery);
        setSuggestions(results);
      } catch (e) {
        setAddrError("Could not load address suggestions.");
        setSuggestions([]);
      } finally {
        setLoadingAddr(false);
      }
    }, 400);

    return () => clearTimeout(t);
  }, [addressQuery]);

  const handlePick = (s) => {
    setAddressSelected(s);
    setAddressQuery(s.label);
    setSuggestions([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = crypto.randomUUID();

    const newRequest = {
      id,
      name: name.trim(),
      documentType,
      dateTime,
      status: "Pending",
      address: addressQuery.trim(),
      lat: addressSelected?.lat ?? null,
      lon: addressSelected?.lon ?? null,
    };

    addRequest(newRequest);
    navigate(`/requests/${id}`);
  };

  return (
    <>
      <h1>Request Notary Service</h1>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12, maxWidth: 620 }}>
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
            <option>Medical Document</option>
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

        <label>
          Address (API Autocomplete)
          <input
            value={addressQuery}
            onChange={(e) => setAddressQuery(e.target.value)}
            placeholder="Start typing an address…"
            required
            style={{ width: "100%", padding: 10, marginTop: 6 }}
          />
        </label>

        {loadingAddr && <p style={{ margin: 0 }}>Loading suggestions…</p>}
        {addrError && <p style={{ margin: 0, color: "crimson" }}>{addrError}</p>}

        {suggestions.length > 0 && (
          <div style={{ border: "1px solid #ddd", borderRadius: 6, padding: 8 }}>
            {suggestions.map((s) => (
              <button
                key={`${s.lat}-${s.lon}`}
                type="button"
                onClick={() => handlePick(s)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: 10,
                  border: "none",
                  background: "white",
                  cursor: "pointer",
                }}
              >
                {s.label}
              </button>
            ))}
          </div>
        )}

        <button type="submit" style={{ padding: 12, fontWeight: 700 }}>
          Submit Request
        </button>
      </form>
    </>
  );
}
import { useRequests } from "../contexts/RequestsContext.jsx";

export default function Dashboard() {
  const { requests } = useRequests();

  return (
    <>
      <h1>Dashboard</h1>
      <p>Total Requests: {requests.length}</p>

      {requests.length === 0 ? (
        <p>No requests yet.</p>
      ) : (
        <ul>
          {requests.map((r) => (
            <li key={r.id}>
              {r.name} — {r.status}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
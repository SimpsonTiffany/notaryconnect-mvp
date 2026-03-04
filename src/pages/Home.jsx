export default function Home() {
    return (
        <div style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
            <h1>NotaryConnect</h1>
            <p>Request mobile notary services and track appointments in one place.</p>

            <section style={{ marginTop: "40px" }}>
                <h2>How It Works</h2>

                <div style={{ display: "grid", gap: "20px", marginTop: "20px" }}>
                    <div>
                        <h3>1. Submit a Request</h3>
                        <p>
                            Fill out a simple form with your name, document type, and preferred
                            appointment time.
                        </p>
                    </div>

                    <div>
                        <h3>2. Track Your Appointment</h3>
                        <p>
                            After submitting a request, you can view and track the status of
                            your notary appointment.
                        </p>
                    </div>

                    <div>
                        <h3>3. Manage Requests</h3>
                        <p>
                            The dashboard allows the notary to review and manage incoming
                            requests efficiently.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RequestForm from "./RequestForm.jsx";
import { RequestsProvider } from "../contexts/RequestsContext.jsx";

test("RequestForm renders inputs", () => {
    render(
        <MemoryRouter>
            <RequestsProvider>
                <RequestForm />
            </RequestsProvider>
        </MemoryRouter>
    );

    expect(screen.getByText(/Request Notary Service/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Document Type/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Appointment Date\/Time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Address/i)).toBeInTheDocument();
});
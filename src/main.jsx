import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { RequestsProvider } from "./contexts/RequestsContext.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <RequestsProvider>
          <App />
        </RequestsProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const clientID = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={clientID}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

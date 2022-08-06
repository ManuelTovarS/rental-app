import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { RentalsProvider } from "./context/RentalContext";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RentalsProvider>
      <App />
    </RentalsProvider>
  </React.StrictMode>
);

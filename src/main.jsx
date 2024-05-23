import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";
import { BaseColourProvider } from "./contexts/baseColourContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <BaseColourProvider>
        <App />
      </BaseColourProvider>
    </BrowserRouter>
  </React.StrictMode>
);

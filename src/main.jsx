import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import AppProvide from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvide>
      <App />
    </AppProvide>
  </React.StrictMode>
);

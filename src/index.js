import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import "./style/customSelect.css";
import "./style/topScrollButton.css";
import "./style/homeButton.css";
import App from "./App";
import { AppProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);

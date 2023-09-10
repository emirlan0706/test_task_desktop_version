import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import dataContextProvider from "./context/dataContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <dataContextProvider>
      <App />
    </dataContextProvider>
  </React.StrictMode>
);

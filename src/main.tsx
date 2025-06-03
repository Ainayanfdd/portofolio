import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { HashRouter } from "react-router-dom"; // Import HashRouter
import App from "./App";

// ----------------------------------------------------------

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <HashRouter>
        {" "}
        {/* Change from BrowserRouter to HashRouter */}
        <App />
      </HashRouter>
    </HelmetProvider>
  </React.StrictMode>
);

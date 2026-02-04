import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />

      <Toaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: "#1A1A1A",
          color: "#D8D8D8",
          border: "2px solid #8B1E1E",
          borderRadius: "8px",
          padding: "16px 24px",
          fontWeight: "500",
          fontFamily: "sans-serif",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        },
        success: {
          iconTheme: {
            primary: "#8B1E1E",
            secondary: "#fff",
          },
        },
        error: {
          iconTheme: {
            primary: "#B23A3A",
            secondary: "#fff",
          },
        },
      }}
    />
    </BrowserRouter>
  </StrictMode>
);

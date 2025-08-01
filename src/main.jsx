import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "./context/CartContext.jsx";
import App from "./App.jsx";
import "./styles/globals.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#FFFFFF",
              color: "#212529",
              border: "1px solid #dee2e6",
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            },
            success: {
              iconTheme: {
                primary: "#198754",
                secondary: "#FFFFFF",
              },
            },
            error: {
              iconTheme: {
                primary: "#dc3545",
                secondary: "#FFFFFF",
              },
            },
          }}
        />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);

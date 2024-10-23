import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// const store = configureStore({
//   reducer:{

//   }
// })

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

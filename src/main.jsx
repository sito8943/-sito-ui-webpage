import React from "react";
import ReactDOM from "react-dom/client";

// app
import App from "./App.jsx";

// styles
import "./index.css";
import { ModeProvider, StyleProvider } from "@sito/ui";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ModeProvider>
    <StyleProvider>
      <App />
    </StyleProvider>
  </ModeProvider>
);

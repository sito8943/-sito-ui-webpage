// @sito/ui
import { ModeProvider, StyleProvider } from "@sito/ui";

import ReactDOM from "react-dom/client";

// app
import App from "./App.jsx";

// styles
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ModeProvider>
    <StyleProvider>
      <App />
    </StyleProvider>
  </ModeProvider>
);

// @sito/ui
import { ModeProvider, StyleProvider } from "@sito/ui";

import ReactDOM from "react-dom/client";

// translations
import "./i18.js";

// app
import App from "./App.jsx";

// styles
import "./index.css";

// font
import "@fontsource/roboto";
import "@fontsource/poppins";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ModeProvider>
    <StyleProvider>
      <App />
    </StyleProvider>
  </ModeProvider>
);

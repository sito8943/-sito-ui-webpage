// @sito/ui
import { ModeProvider, StyleProvider } from "@sito/ui";

import ReactDOM from "react-dom/client";

// translations
import "./i18.js";

// app
import App from "./App.jsx";

// styles
import "./index.css";

// animations
import "./assets/animations/scaleUp.css";
import "./assets/animations/expand.css";

// font
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/900.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ModeProvider>
    <StyleProvider>
      <App />
    </StyleProvider>
  </ModeProvider>
);

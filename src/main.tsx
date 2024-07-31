import CssBaseline from "@mui/material/CssBaseline";
import { createRoot } from "react-dom/client";
import "./assets/styles.scss";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    <CssBaseline />
    <App />
  </>
);

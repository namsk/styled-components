import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.jsx";
// import StyledPage from "./styled/01-StyledPage.jsx";
// import StyledPage from "./styled/PropsComponents.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

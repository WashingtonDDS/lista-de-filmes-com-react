import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/Filmes/index.tsx";
import "./css/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Filmes />
  </StrictMode>
);

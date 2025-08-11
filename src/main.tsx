import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers/Router";
AOS.init();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

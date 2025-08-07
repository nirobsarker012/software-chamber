import type React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
]);

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import RouteConfig from "./route-config";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouteConfig />
  </StrictMode>
);
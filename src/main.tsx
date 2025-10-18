import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

console.log("App mounting...");
const rootEl = document.getElementById("root")!;
const root = createRoot(rootEl);
root.render(<App />);
setTimeout(() => {
  rootEl.setAttribute("data-mounted", "true");
}, 0);
console.log("App mounted.");

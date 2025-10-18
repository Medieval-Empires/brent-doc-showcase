import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

console.log("App mounting...");
createRoot(document.getElementById("root")!).render(<App />);
console.log("App mounted.");

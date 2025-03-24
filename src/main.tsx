
// This file is only used for development with Vite
import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// Only render during development when not running via Remix
if (process.env.NODE_ENV === "development") {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    startTransition(() => {
      createRoot(rootElement).render(
        <StrictMode>
          <RemixBrowser />
        </StrictMode>
      );
    });
  }
}

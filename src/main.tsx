
import "./index.css";
import { createBrowserRouter, RouterProvider } from "@remix-run/react";
import { startTransition } from "react";
import { createRoot } from "react-dom/client";

// Import the entry point 
import { RemixBrowser } from "@remix-run/react";

startTransition(() => {
  createRoot(document.getElementById("root")!).render(
    <RemixBrowser />
  );
});

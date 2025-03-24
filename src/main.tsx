
import { startTransition } from "react";
import { createRoot } from "react-dom/client";
import { RemixBrowser } from "@remix-run/react";
import "./index.css";

startTransition(() => {
  createRoot(document.getElementById("root")!).render(
    <RemixBrowser />
  );
});


// This file is now obsolete as Remix handles routing and rendering
// It's kept for compatibility but no longer used as the main entry point

import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// This code is no longer executed as Remix takes over entry points
if (import.meta.env.DEV) {
  console.log("Development mode: main.tsx is not used as Remix takes over entry points");
  
  // Only render in development for backwards compatibility
  const root = document.getElementById("root");
  if (root) {
    createRoot(root).render(<App />);
  }
}

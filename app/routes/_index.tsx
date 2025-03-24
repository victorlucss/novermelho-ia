import * as React from "react";
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Novermelho Dashboard" },
    { name: "description", content: "Welcome to Novermelho Dashboard" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Novermelho Dashboard</h1>
      <Link to="/dashboard">Go to Dashboard</Link>
    </div>
  );
} 
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { Toaster } from "~/components/ui/sonner";
import { SidebarProvider } from "~/components/layout/SidebarProvider";
import { supabase } from "~/integrations/supabase/client";
import { redirect } from "@remix-run/node";
import styles from "./styles/global.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export async function loader({ request }: LoaderFunctionArgs) {
  const { data: { session } } = await supabase.auth.getSession();

  // If user is not authenticated and trying to access protected routes, redirect to login
  if (!session && !request.url.includes("/login")) {
    return redirect("/login");
  }

  // If user is authenticated and trying to access login page, redirect to dashboard
  if (session && request.url.includes("/login")) {
    return redirect("/");
  }

  return { session };
}

export default function App() {
  const { session } = useLoaderData<typeof loader>();

  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <SidebarProvider>
          <div className="relative flex min-h-screen flex-col">
            <Outlet />
            <Toaster />
          </div>
        </SidebarProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
} 
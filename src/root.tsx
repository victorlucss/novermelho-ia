
import { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { supabase } from "./integrations/supabase/client";
import { User, Session } from '@supabase/supabase-js';
import { cssBundleHref } from "@remix-run/css-bundle";
import styles from "./index.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const meta: MetaFunction = () => {
  return [
    { title: "NoVermelho - Dashboard de Gestão Financeira" },
    { name: "description", content: "Lovable Generated Project" },
    { name: "author", content: "Lovable" },
    { property: "og:title", content: "Lovable Generated Project" },
    { property: "og:description", content: "Lovable Generated Project" },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://lovable.dev/opengraph-image-p98pqg.png" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@lovable_dev" },
    { name: "twitter:image", content: "https://lovable.dev/opengraph-image-p98pqg.png" },
  ];
};

export default function App() {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Document>
          <Outlet />
        </Document>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <script src="https://cdn.gpteng.co/gptengineer.js" type="module"></script>
      </body>
    </html>
  );
}

function Document({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set dark theme
    document.documentElement.classList.add("dark");
    
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setIsLoading(false);
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Carregando...</h1>
        </div>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {children}
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  
  if (isRouteErrorResponse(error)) {
    return (
      <html lang="en" className="dark">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
          <title>{`${error.status} ${error.statusText}`}</title>
        </head>
        <body>
          <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
            <h1 className="text-4xl font-bold mb-4">
              {error.status} {error.statusText}
            </h1>
            <p className="text-lg mb-6">{error.data?.message || "Um erro inesperado ocorreu."}</p>
            <a href="/" className="text-primary hover:underline">
              Voltar para a página inicial
            </a>
          </div>
          <Scripts />
        </body>
      </html>
    );
  }

  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <title>Erro Inesperado</title>
      </head>
      <body>
        <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
          <h1 className="text-4xl font-bold mb-4">Erro Inesperado</h1>
          <p className="text-lg mb-6">Desculpe, algo deu errado.</p>
          <a href="/" className="text-primary hover:underline">
            Voltar para a página inicial
          </a>
        </div>
        <Scripts />
      </body>
    </html>
  );
}

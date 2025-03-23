
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "./integrations/supabase/client";
import { User, Session } from '@supabase/supabase-js';
import { AppLayout } from "./components/layout/AppLayout";
import { LoginPage } from "./components/auth/LoginPage";
import { DashboardPage } from "./components/dashboard/DashboardPage";
import { ExpensesPage } from "./components/expenses/ExpensesPage";
import { IncomePage } from "./components/income/IncomePage";
import { AnalyticsPage } from "./components/analytics/AnalyticsPage";
import { WalletPage } from "./components/wallet/WalletPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState("dark");

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
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route 
              path="/login" 
              element={user ? <Navigate to="/" replace /> : <LoginPage />} 
            />

            {/* Protected routes */}
            <Route 
              path="/"
              element={
                user ? (
                  <AppLayout>
                    <DashboardPage />
                  </AppLayout>
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />

            <Route 
              path="/despesas"
              element={
                user ? (
                  <AppLayout>
                    <ExpensesPage />
                  </AppLayout>
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />

            <Route 
              path="/receitas"
              element={
                user ? (
                  <AppLayout>
                    <IncomePage />
                  </AppLayout>
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />

            <Route 
              path="/analise"
              element={
                user ? (
                  <AppLayout>
                    <AnalyticsPage />
                  </AppLayout>
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />

            <Route 
              path="/carteiras"
              element={
                user ? (
                  <AppLayout>
                    <WalletPage />
                  </AppLayout>
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />

            {/* For demo purposes, we'll make the dashboard accessible */}
            <Route 
              path="/demo"
              element={
                <AppLayout>
                  <DashboardPage />
                </AppLayout>
              }
            />

            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

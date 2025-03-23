
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
  // For demonstration purposes, setting a dummy authentication state.
  // In a real app, this would be handled through Supabase authentication.
  const isAuthenticated = false;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/login" element={<LoginPage />} />

            {/* Protected routes */}
            <Route 
              path="/"
              element={
                isAuthenticated ? (
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
                isAuthenticated ? (
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
                isAuthenticated ? (
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
                isAuthenticated ? (
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
                isAuthenticated ? (
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

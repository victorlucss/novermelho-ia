
import React from "react";
import { Outlet, useLocation, Link, useNavigate } from "@remix-run/react";
import { ScrollArea } from "~/components/ui/scroll-area";
import { SidebarProvider } from "~/components/ui/sidebar";
import { MainNavigation } from "~/components/layout/MainNavigation";
import { MobileNavigation } from "~/components/layout/MobileNavigation";
import { useIsMobile } from "~/hooks/use-mobile";
import { supabase } from "~/integrations/supabase/client";
import { useEffect } from "react";

export default function AppLayout() {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check for authentication
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/login", { replace: true });
      }
    };

    checkAuth();
  }, [navigate, location]);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        {!isMobile && <MainNavigation />}
        <div className="flex-1 flex flex-col">
          <ScrollArea className="flex-1">
            <main className="flex-1 p-6 md:p-8 animate-fade-in">
              <Outlet />
            </main>
          </ScrollArea>
          {isMobile && <MobileNavigation />}
        </div>
      </div>
    </SidebarProvider>
  );
}

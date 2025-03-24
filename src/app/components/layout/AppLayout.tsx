import * as React from "react";
import { Toaster } from "~/components/ui/toaster";
import { Toaster as Sonner } from "~/components/ui/sonner";
import { ScrollArea } from "~/components/ui/scroll-area";
import { SidebarProvider } from "~/components/ui/sidebar";
import { MainNavigation } from "./MainNavigation";
import { MobileNavigation } from "./MobileNavigation";
import { useIsMobile } from "~/hooks/use-mobile";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  const isMobile = useIsMobile();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        {!isMobile && <MainNavigation />}
        <div className="flex-1 flex flex-col">
          <ScrollArea className="flex-1">
            <main className="flex-1 p-6 md:p-8 animate-fade-in">
              {children}
            </main>
          </ScrollArea>
          {isMobile && <MobileNavigation />}
        </div>
      </div>
      <Toaster />
      <Sonner position="top-right" />
    </SidebarProvider>
  );
};

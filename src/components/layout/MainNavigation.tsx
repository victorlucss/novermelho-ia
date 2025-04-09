
import { useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { 
  ChevronDown, 
  LayoutDashboard, 
  DollarSign, 
  PiggyBank, 
  CreditCard, 
  BarChart, 
  Book, 
  Settings, 
  Bell,
  Users,
  LogOut,
  UserCircle,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

export const MainNavigation = () => {
  const location = useLocation();
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({
    settings: false,
  });

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      toast({
        title: "Logout realizado com sucesso",
        description: "Até a próxima!",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Erro ao fazer logout",
        description: error.message || "Ocorreu um erro ao fazer logout",
      });
    }
  };

  const toggleSubmenu = (key: string) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const isLinkActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="space-y-1 py-2">
      <NavLink
        to="/"
        className={({ isActive }) =>
          cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 group transition-all relative",
            isActive
              ? "bg-accent/10 text-accent"
              : "text-sidebar-foreground hover:bg-accent/5"
          )
        }
      >
        <LayoutDashboard className="h-5 w-5" />
        <span>Dashboard</span>
      </NavLink>

      <NavLink
        to="/despesas"
        className={({ isActive }) =>
          cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 group transition-all relative",
            isActive
              ? "bg-accent/10 text-vermelho"
              : "text-sidebar-foreground hover:bg-accent/5"
          )
        }
      >
        <DollarSign className="h-5 w-5" />
        <span>Despesas</span>
      </NavLink>

      <NavLink
        to="/receitas"
        className={({ isActive }) =>
          cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 group transition-all relative",
            isActive
              ? "bg-accent/10 text-verde"
              : "text-sidebar-foreground hover:bg-accent/5"
          )
        }
      >
        <PiggyBank className="h-5 w-5" />
        <span>Receitas</span>
      </NavLink>

      <NavLink
        to="/carteiras"
        className={({ isActive }) =>
          cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 group transition-all relative",
            isActive
              ? "bg-accent/10 text-accent"
              : "text-sidebar-foreground hover:bg-accent/5"
          )
        }
      >
        <CreditCard className="h-5 w-5" />
        <span>Carteiras</span>
      </NavLink>

      <NavLink
        to="/analise"
        className={({ isActive }) =>
          cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 group transition-all relative",
            isActive
              ? "bg-accent/10 text-accent"
              : "text-sidebar-foreground hover:bg-accent/5"
          )
        }
      >
        <BarChart className="h-5 w-5" />
        <span>Análise</span>
      </NavLink>

      <NavLink
        to="/orcamentos"
        className={({ isActive }) =>
          cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 group transition-all relative",
            isActive
              ? "bg-accent/10 text-accent"
              : "text-sidebar-foreground hover:bg-accent/5"
          )
        }
      >
        <Book className="h-5 w-5" />
        <span>Orçamentos</span>
      </NavLink>
      
      <NavLink
        to="/despesas-compartilhadas"
        className={({ isActive }) =>
          cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 group transition-all relative",
            isActive
              ? "bg-accent/10 text-accent"
              : "text-sidebar-foreground hover:bg-accent/5"
          )
        }
      >
        <Users className="h-5 w-5" />
        <span>Compartilhadas</span>
      </NavLink>

      <div className="mt-6 border-t border-sidebar-border pt-6">
        <Collapsible
          open={openSubmenus.settings}
          onOpenChange={() => toggleSubmenu("settings")}
        >
          <CollapsibleTrigger
            className={cn(
              "flex w-full items-center justify-between rounded-lg px-3 py-2 transition-all",
              openSubmenus.settings
                ? "bg-accent/10 text-accent"
                : "text-sidebar-foreground hover:bg-accent/5"
            )}
          >
            <div className="flex items-center gap-3">
              <Settings className="h-5 w-5" />
              <span>Configurações</span>
            </div>
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform duration-200",
                openSubmenus.settings ? "rotate-180" : ""
              )}
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="pl-9 pr-2">
            <NavLink
              to="/perfil"
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-2 rounded-lg px-3 py-2 text-sm",
                  isActive
                    ? "bg-accent/10 text-accent"
                    : "text-sidebar-foreground hover:bg-accent/5"
                )
              }
            >
              <UserCircle className="h-4 w-4" />
              <span>Perfil</span>
            </NavLink>
            <NavLink
              to="/configuracoes/notificacoes"
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-2 rounded-lg px-3 py-2 text-sm",
                  isActive
                    ? "bg-accent/10 text-accent"
                    : "text-sidebar-foreground hover:bg-accent/5"
                )
              }
            >
              <Bell className="h-4 w-4" />
              <span>Notificações</span>
            </NavLink>
          </CollapsibleContent>
        </Collapsible>

        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sidebar-foreground hover:bg-accent/5 mt-2"
        >
          <LogOut className="h-5 w-5" />
          <span>Sair</span>
        </button>
      </div>
    </div>
  );
};

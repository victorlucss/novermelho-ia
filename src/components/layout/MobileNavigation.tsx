
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  DollarSign,
  PiggyBank,
  BarChart,
  CreditCard,
  Book,
  Users,
  Settings,
} from "lucide-react";

export const MobileNavigation = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex h-16 bg-card border-t shadow-lg">
      <NavLink
        to="/"
        className={({ isActive }) =>
          cn(
            "flex flex-1 flex-col items-center justify-center text-xs font-medium",
            isActive
              ? "text-accent"
              : "text-muted-foreground hover:text-foreground"
          )
        }
      >
        <LayoutDashboard className="h-5 w-5 mb-1" />
        <span>Dashboard</span>
      </NavLink>
      <NavLink
        to="/despesas"
        className={({ isActive }) =>
          cn(
            "flex flex-1 flex-col items-center justify-center text-xs font-medium",
            isActive
              ? "text-vermelho"
              : "text-muted-foreground hover:text-foreground"
          )
        }
      >
        <DollarSign className="h-5 w-5 mb-1" />
        <span>Despesas</span>
      </NavLink>
      <NavLink
        to="/receitas"
        className={({ isActive }) =>
          cn(
            "flex flex-1 flex-col items-center justify-center text-xs font-medium",
            isActive
              ? "text-verde"
              : "text-muted-foreground hover:text-foreground"
          )
        }
      >
        <PiggyBank className="h-5 w-5 mb-1" />
        <span>Receitas</span>
      </NavLink>
      <NavLink
        to="/analise"
        className={({ isActive }) =>
          cn(
            "flex flex-1 flex-col items-center justify-center text-xs font-medium",
            isActive
              ? "text-accent"
              : "text-muted-foreground hover:text-foreground"
          )
        }
      >
        <BarChart className="h-5 w-5 mb-1" />
        <span>Análise</span>
      </NavLink>
      <NavLink
        to="/carteiras"
        className={({ isActive }) =>
          cn(
            "flex flex-1 flex-col items-center justify-center text-xs font-medium",
            isActive
              ? "text-accent"
              : "text-muted-foreground hover:text-foreground"
          )
        }
      >
        <CreditCard className="h-5 w-5 mb-1" />
        <span>Carteiras</span>
      </NavLink>
      <NavLink
        to="/despesas-compartilhadas"
        className={({ isActive }) =>
          cn(
            "flex flex-1 flex-col items-center justify-center text-xs font-medium",
            isActive
              ? "text-accent"
              : "text-muted-foreground hover:text-foreground"
          )
        }
      >
        <Users className="h-5 w-5 mb-1" />
        <span>Compartilhar</span>
      </NavLink>
    </div>
  );
};

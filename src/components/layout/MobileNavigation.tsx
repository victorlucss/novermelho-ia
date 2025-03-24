
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Home,
  PieChart,
  CreditCard,
  PlusCircle,
  Wallet,
  LineChart,
  User,
} from "lucide-react";

export const MobileNavigation = () => {
  const location = useLocation();

  const menuItems = [
    {
      title: "Home",
      icon: Home,
      path: "/",
    },
    {
      title: "Análise",
      icon: PieChart,
      path: "/analise",
    },
    {
      title: "Orçamento",
      icon: LineChart,
      path: "/orcamentos",
    },
    {
      title: "Carteiras",
      icon: Wallet,
      path: "/carteiras",
    },
    {
      title: "Perfil",
      icon: User,
      path: "/perfil",
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t border-border bg-background py-2 px-4 animate-slide-in-up z-10">
      <nav className="flex justify-between items-center">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex flex-col items-center py-2 px-1",
              location.pathname === item.path
                ? "text-primary"
                : "text-muted-foreground"
            )}
          >
            <item.icon size={20} />
            <span className="text-xs mt-1">{item.title}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

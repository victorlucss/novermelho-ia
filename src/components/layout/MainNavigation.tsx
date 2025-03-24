
import React from "react";
import { Link, useLocation } from "@remix-run/react";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Home,
  PieChart,
  CreditCard,
  PlusCircle,
  Settings,
  Wallet,
  LineChart,
} from "lucide-react";
import { UserMenu } from "./UserMenu";

export const MainNavigation = () => {
  const location = useLocation();

  const menuItems = [
    {
      title: "Dashboard",
      icon: Home,
      path: "/",
    },
    {
      title: "Análise",
      icon: PieChart,
      path: "/analise",
    },
    {
      title: "Orçamentos",
      icon: LineChart,
      path: "/orcamentos",
    },
    {
      title: "Despesas",
      icon: CreditCard,
      path: "/despesas",
    },
    {
      title: "Receitas",
      icon: PlusCircle,
      path: "/receitas",
    },
    {
      title: "Carteiras",
      icon: Wallet,
      path: "/carteiras",
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-white font-semibold">NV</span>
          </div>
          <div className="font-semibold text-lg">NoVermelho</div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={item.path}
                      className={cn(
                        "flex items-center space-x-2 w-full",
                        location.pathname === item.path && "text-primary font-medium"
                      )}
                    >
                      <item.icon size={18} />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-border p-4">
        <UserMenu />
      </SidebarFooter>
    </Sidebar>
  );
};

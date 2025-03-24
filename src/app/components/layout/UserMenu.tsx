import * as React from "react";
import { Link, useNavigate } from "@remix-run/react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { LogOut, Settings, User } from "lucide-react";
import { supabase } from "~/integrations/supabase/client";
import { toast } from "sonner";

interface UserProfileType {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
}

export const UserMenu = () => {
  const [profile, setProfile] = React.useState<UserProfileType | null>(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // Get current user
        const { data: { user } } = await supabase.auth.getUser();

        if (!user) return;

        // Get user profile
        const { data, error } = await supabase
          .from('user_profiles')
          .select('id, full_name, avatar_url')
          .eq('id', user.id)
          .single();

        if (error) {
          console.error('Error fetching profile:', error);
        } else if (data) {
          setProfile(data);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        throw error;
      }

      toast.success("Logout realizado", {
        description: "Você foi desconectado com sucesso.",
      });

      navigate("/login");
    } catch (error: any) {
      console.error('Error logging out:', error);
      toast.error("Erro ao fazer logout", {
        description: error.message || "Tente novamente mais tarde.",
      });
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center space-x-2 rounded-full p-1 transition-colors hover:bg-secondary/10 focus:outline-none">
          <Avatar className="h-8 w-8">
            <AvatarImage src={profile?.avatar_url || ""} alt={profile?.full_name || "User"} />
            <AvatarFallback className="text-sm">
              {profile?.full_name?.substring(0, 2) || "U"}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium hidden md:inline-block">
            {profile?.full_name || "Usuário"}
          </span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to="/perfil" className="flex items-center cursor-pointer">
            <User className="h-4 w-4 mr-2" />
            Perfil
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/configuracoes" className="flex items-center cursor-pointer">
            <Settings className="h-4 w-4 mr-2" />
            Configurações
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={handleLogout}
          className="text-expense cursor-pointer"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

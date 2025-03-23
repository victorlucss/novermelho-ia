
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, Save } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

interface UserProfile {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
  financial_goal: string | null;
}

const FINANCIAL_GOALS = [
  { value: "save_money", label: "Economizar dinheiro" },
  { value: "pay_debts", label: "Quitar dívidas" },
  { value: "invest", label: "Investir" },
  { value: "buy_house", label: "Comprar uma casa" },
  { value: "buy_car", label: "Comprar um carro" },
  { value: "travel", label: "Viajar" },
  { value: "retirement", label: "Aposentadoria" },
  { value: "other", label: "Outro" },
];

export const ProfilePage = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [fullName, setFullName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [financialGoal, setFinancialGoal] = useState<string | null>(null);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setIsLoading(true);
        
        // Get current user
        const { data: { user } } = await supabase.auth.getUser();
        
        if (!user) {
          throw new Error("User not found");
        }
        
        // Get user profile
        const { data, error } = await supabase
          .from('user_profiles')
          .select('*')
          .eq('id', user.id)
          .single();
        
        if (error) {
          console.error('Error fetching profile:', error);
          toast.error("Erro ao carregar perfil", {
            description: error.message,
          });
        } else if (data) {
          setProfile(data);
          setFullName(data.full_name || "");
          setAvatarUrl(data.avatar_url || "");
          setFinancialGoal(data.financial_goal);
        }
      } catch (error) {
        console.error('Error:', error);
        toast.error("Erro ao carregar perfil");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setAvatarFile(file);
      setAvatarUrl(URL.createObjectURL(file));
    }
  };

  const handleSaveProfile = async () => {
    try {
      setIsSaving(true);
      
      if (!profile) return;
      
      let finalAvatarUrl = avatarUrl;

      // Upload avatar if file exists
      if (avatarFile) {
        const fileExt = avatarFile.name.split('.').pop();
        const fileName = `${profile.id}-${Math.random()}.${fileExt}`;
        
        // Check if storage bucket exists
        const { data: buckets } = await supabase.storage.listBuckets();
        const avatarsBucket = buckets?.find(b => b.name === 'avatars');
        
        if (!avatarsBucket) {
          // Create bucket if it doesn't exist
          await supabase.storage.createBucket('avatars', {
            public: true,
          });
        }
        
        // Upload the file
        const { data, error } = await supabase.storage
          .from('avatars')
          .upload(fileName, avatarFile);
          
        if (error) {
          throw error;
        }
        
        // Get public URL
        const { data: { publicUrl } } = supabase.storage
          .from('avatars')
          .getPublicUrl(fileName);
          
        finalAvatarUrl = publicUrl;
      }
      
      // Update profile
      const { error } = await supabase
        .from('user_profiles')
        .update({
          full_name: fullName,
          avatar_url: finalAvatarUrl,
          financial_goal: financialGoal,
          updated_at: new Date().toISOString(),
        })
        .eq('id', profile.id);
        
      if (error) {
        throw error;
      }
      
      toast.success("Perfil atualizado", {
        description: "Suas informações foram salvas com sucesso.",
      });
      
      // Go back to dashboard
      navigate('/');
      
    } catch (error: any) {
      console.error('Error saving profile:', error);
      toast.error("Erro ao salvar perfil", {
        description: error.message || "Tente novamente mais tarde.",
      });
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[70vh]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-16 md:pb-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Seu Perfil</h1>
        <p className="text-muted-foreground">
          Gerencie suas informações e preferências pessoais.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Informações Pessoais</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col items-center space-y-4 sm:items-start sm:flex-row sm:space-y-0 sm:space-x-6">
            <div className="relative group">
              <Avatar className="h-24 w-24 border-2 border-muted">
                <AvatarImage src={avatarUrl} alt={fullName} />
                <AvatarFallback className="text-xl">
                  {fullName?.substring(0, 2) || "U"}
                </AvatarFallback>
              </Avatar>
              <label className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-xs font-medium">Alterar</span>
                <input type="file" className="sr-only" onChange={handleAvatarChange} accept="image/*" />
              </label>
            </div>
            
            <div className="space-y-4 flex-1">
              <div className="space-y-2">
                <Label htmlFor="fullName">Nome Completo</Label>
                <Input
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Seu nome completo"
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="financialGoal">Objetivo Financeiro Principal</Label>
            <Select
              value={financialGoal || undefined}
              onValueChange={setFinancialGoal}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione seu objetivo financeiro" />
              </SelectTrigger>
              <SelectContent>
                {FINANCIAL_GOALS.map((goal) => (
                  <SelectItem key={goal.value} value={goal.value}>
                    {goal.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex justify-end">
            <Button onClick={handleSaveProfile} disabled={isSaving}>
              {isSaving ? (
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <Save className="h-4 w-4 mr-2" />
              )}
              Salvar Alterações
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Bell, Clock, Share2, Calendar, Info, Loader2, Save } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { UserNotificationSettings } from "@/types/supabase";

interface NotificationSettings {
  recurrentExpenses: boolean;
  sharedExpenses: boolean;
  budgetAlerts: boolean;
  weeklyReports: boolean;
}

export const NotificationsSettingsPage = () => {
  const [settings, setSettings] = useState<NotificationSettings>({
    recurrentExpenses: true,
    sharedExpenses: true,
    budgetAlerts: true,
    weeklyReports: false,
  });
  
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    const checkNotificationSupport = async () => {
      // Check if the browser supports notifications
      if ("Notification" in window) {
        setIsSupported(true);
        
        // Check if we already have permission
        if (Notification.permission === "granted") {
          // Do nothing, we're good
        } else if (Notification.permission !== "denied") {
          // We need to ask for permission
          await Notification.requestPermission();
        }
      }
    };
    
    const fetchSettings = async () => {
      try {
        setIsLoading(true);
        
        const { data: { user } } = await supabase.auth.getUser();
        
        if (!user) {
          toast({
            variant: "destructive",
            title: "Não autorizado",
            description: "Você precisa estar logado para acessar as configurações."
          });
          return;
        }
        
        // Get user notification settings
        const { data, error } = await supabase
          .from('user_notification_settings')
          .select('*')
          .eq('user_id', user.id)
          .single();
          
        if (error && error.code !== 'PGSQL_ERROR') {
          throw error;
        }
        
        // If settings exist, use them
        if (data) {
          const typedData = data as unknown as UserNotificationSettings;
          setSettings({
            recurrentExpenses: typedData.recurrent_expenses_alerts,
            sharedExpenses: typedData.shared_expenses_alerts,
            budgetAlerts: typedData.budget_alerts,
            weeklyReports: typedData.weekly_reports,
          });
        }
        
      } catch (error) {
        console.error('Error fetching notification settings:', error);
        toast({
          variant: "destructive",
          title: "Erro",
          description: "Não foi possível carregar as configurações de notificação."
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    checkNotificationSupport();
    fetchSettings();
  }, []);
  
  const saveSettings = async () => {
    try {
      setIsSaving(true);
      
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast({
          variant: "destructive",
          title: "Não autorizado",
          description: "Você precisa estar logado para salvar as configurações."
        });
        return;
      }
      
      // Check if settings exist for the user
      const { data: existingSettings, error: checkError } = await supabase
        .from('user_notification_settings')
        .select('id')
        .eq('user_id', user.id)
        .maybeSingle();
      
      if (checkError) throw checkError;
      
      if (existingSettings) {
        // Update existing settings
        const { error: updateError } = await supabase
          .from('user_notification_settings')
          .update({
            recurrent_expenses_alerts: settings.recurrentExpenses,
            shared_expenses_alerts: settings.sharedExpenses,
            budget_alerts: settings.budgetAlerts,
            weekly_reports: settings.weeklyReports,
            updated_at: new Date().toISOString(),
          })
          .eq('user_id', user.id);
          
        if (updateError) throw updateError;
      } else {
        // Insert new settings
        const { error: insertError } = await supabase
          .from('user_notification_settings')
          .insert({
            user_id: user.id,
            recurrent_expenses_alerts: settings.recurrentExpenses,
            shared_expenses_alerts: settings.sharedExpenses,
            budget_alerts: settings.budgetAlerts,
            weekly_reports: settings.weeklyReports,
          });
          
        if (insertError) throw insertError;
      }
      
      toast({
        title: "Configurações salvas",
        description: "Suas preferências de notificação foram atualizadas com sucesso."
      });
      
    } catch (error) {
      console.error('Error saving notification settings:', error);
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Não foi possível salvar as configurações de notificação."
      });
    } finally {
      setIsSaving(false);
    }
  };
  
  const handleToggle = (setting: keyof NotificationSettings) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };
  
  const requestNotificationPermission = async () => {
    if (!("Notification" in window)) {
      toast({
        variant: "destructive",
        title: "Não suportado",
        description: "Seu navegador não suporta notificações."
      });
      return;
    }
    
    try {
      const permission = await Notification.requestPermission();
      
      if (permission === "granted") {
        toast({
          title: "Permissão concedida",
          description: "Agora você receberá notificações."
        });
        
        // Show a test notification
        new Notification("NoVermelho - Notificações Ativadas", {
          body: "Você receberá notificações sobre suas despesas e orçamentos.",
          icon: "/favicon.ico"
        });
      } else {
        toast({
          variant: "destructive",
          title: "Permissão negada",
          description: "Você não receberá notificações. Você pode alterar isso nas configurações do navegador."
        });
      }
    } catch (error) {
      console.error('Error requesting notification permission:', error);
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Ocorreu um erro ao solicitar permissão para notificações."
      });
    }
  };

  return (
    <div className="space-y-8 pb-16 md:pb-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Configurações de Notificações</h1>
        <p className="text-muted-foreground">
          Gerencie como e quando você recebe notificações do NoVermelho
        </p>
      </div>
      
      {!isSupported && (
        <Alert variant="destructive" className="mb-6">
          <Info className="h-4 w-4" />
          <AlertTitle>Navegador não suportado</AlertTitle>
          <AlertDescription>
            Seu navegador não suporta notificações. Considere utilizar um navegador mais moderno.
          </AlertDescription>
        </Alert>
      )}
      
      {isSupported && Notification.permission !== "granted" && (
        <Alert className="mb-6">
          <Bell className="h-4 w-4" />
          <AlertTitle>Permissão necessária</AlertTitle>
          <AlertDescription className="flex justify-between items-center">
            <span>Para receber notificações, você precisa permitir que o NoVermelho envie notificações.</span>
            <Button size="sm" onClick={requestNotificationPermission}>
              Permitir notificações
            </Button>
          </AlertDescription>
        </Alert>
      )}
      
      {isLoading ? (
        <div className="flex justify-center items-center h-40">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      ) : (
        <>
          <Card>
            <CardHeader>
              <CardTitle>Alertas e Lembretes</CardTitle>
              <CardDescription>Configure quais notificações você deseja receber</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between space-x-2">
                <div className="space-y-0.5">
                  <Label className="text-base">Despesas Recorrentes</Label>
                  <div className="text-sm text-muted-foreground flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                    Receba alertas quando uma despesa recorrente estiver próxima do vencimento
                  </div>
                </div>
                <Switch
                  checked={settings.recurrentExpenses}
                  onCheckedChange={() => handleToggle('recurrentExpenses')}
                />
              </div>
              
              <div className="flex items-center justify-between space-x-2">
                <div className="space-y-0.5">
                  <Label className="text-base">Despesas Compartilhadas</Label>
                  <div className="text-sm text-muted-foreground flex items-center">
                    <Share2 className="h-4 w-4 mr-2 text-muted-foreground" />
                    Receba notificações quando alguém pagar uma despesa compartilhada
                  </div>
                </div>
                <Switch
                  checked={settings.sharedExpenses}
                  onCheckedChange={() => handleToggle('sharedExpenses')}
                />
              </div>
              
              <div className="flex items-center justify-between space-x-2">
                <div className="space-y-0.5">
                  <Label className="text-base">Alertas de Orçamento</Label>
                  <div className="text-sm text-muted-foreground flex items-center">
                    <Bell className="h-4 w-4 mr-2 text-muted-foreground" />
                    Seja notificado quando estiver próximo de atingir o limite de um orçamento
                  </div>
                </div>
                <Switch
                  checked={settings.budgetAlerts}
                  onCheckedChange={() => handleToggle('budgetAlerts')}
                />
              </div>
              
              <div className="flex items-center justify-between space-x-2">
                <div className="space-y-0.5">
                  <Label className="text-base">Relatórios Semanais</Label>
                  <div className="text-sm text-muted-foreground flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    Receba um resumo semanal de suas despesas e receitas
                  </div>
                </div>
                <Switch
                  checked={settings.weeklyReports}
                  onCheckedChange={() => handleToggle('weeklyReports')}
                />
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-end">
            <Button 
              onClick={saveSettings}
              disabled={isSaving || !isSupported || Notification.permission !== "granted"}
              className="bg-vermelho hover:bg-red-700"
            >
              {isSaving ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Salvando...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Salvar Configurações
                </>
              )}
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

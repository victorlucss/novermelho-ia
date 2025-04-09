
import { supabase } from "@/integrations/supabase/client";

export class NotificationService {
  private static instance: NotificationService;
  private permission: NotificationPermission = "default";
  
  private constructor() {
    this.initPermission();
  }
  
  public static getInstance(): NotificationService {
    if (!NotificationService.instance) {
      NotificationService.instance = new NotificationService();
    }
    return NotificationService.instance;
  }
  
  private async initPermission() {
    if (!("Notification" in window)) {
      console.log("This browser does not support notifications");
      return;
    }
    
    this.permission = Notification.permission;
    
    if (this.permission === "default") {
      const permission = await Notification.requestPermission();
      this.permission = permission;
    }
  }
  
  public async requestPermission(): Promise<NotificationPermission> {
    if (!("Notification" in window)) {
      console.log("This browser does not support notifications");
      return "denied";
    }
    
    const permission = await Notification.requestPermission();
    this.permission = permission;
    return permission;
  }
  
  public async checkForDueRecurrentExpenses() {
    if (this.permission !== "granted") {
      console.log("Notification permission not granted");
      return;
    }
    
    try {
      // Check if user has enabled recurrent expense notifications
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) return;
      
      const { data: settings } = await supabase
        .from('user_notification_settings')
        .select('recurrent_expenses_alerts')
        .eq('user_id', user.id)
        .single();
      
      if (!settings || !settings.recurrent_expenses_alerts) return;
      
      // Get today's date
      const today = new Date();
      const formattedDate = today.toISOString().split('T')[0];
      
      // Get recurrent expenses that are due today
      const { data: recurrentExpenses, error } = await supabase
        .from('transactions')
        .select('name, amount, category')
        .eq('type', 'expense')
        .eq('recurrent', true)
        .eq('date', formattedDate);
      
      if (error) {
        console.error('Error fetching recurrent expenses:', error);
        return;
      }
      
      // Send notification for each recurrent expense
      recurrentExpenses?.forEach(expense => {
        this.showNotification(
          'Despesa Recorrente',
          `${expense.name} (${expense.category}) - R$ ${expense.amount.toFixed(2)} vence hoje.`
        );
      });
      
    } catch (error) {
      console.error('Error checking for recurrent expenses:', error);
    }
  }
  
  public async checkForBudgetAlerts() {
    if (this.permission !== "granted") {
      console.log("Notification permission not granted");
      return;
    }
    
    try {
      // Check if user has enabled budget alerts
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) return;
      
      const { data: settings } = await supabase
        .from('user_notification_settings')
        .select('budget_alerts')
        .eq('user_id', user.id)
        .single();
      
      if (!settings || !settings.budget_alerts) return;
      
      // Get current month date range
      const today = new Date();
      const currentMonth = today.getMonth() + 1;
      const currentYear = today.getFullYear();
      const startDate = `${currentYear}-${currentMonth.toString().padStart(2, '0')}-01`;
      const lastDay = new Date(currentYear, currentMonth, 0).getDate();
      const endDate = `${currentYear}-${currentMonth.toString().padStart(2, '0')}-${lastDay}`;
      
      // Get all active budgets
      const { data: budgets, error: budgetsError } = await supabase
        .from('budgets')
        .select('id, name, category, amount')
        .eq('user_id', user.id)
        .lte('start_date', endDate)
        .gte('end_date', startDate);
      
      if (budgetsError) {
        console.error('Error fetching budgets:', budgetsError);
        return;
      }
      
      if (!budgets || budgets.length === 0) return;
      
      // For each budget, calculate spent amount
      for (const budget of budgets) {
        const { data: transactions, error: transactionsError } = await supabase
          .from('transactions')
          .select('amount')
          .eq('user_id', user.id)
          .eq('type', 'expense')
          .gte('date', startDate)
          .lte('date', endDate)
          .eq('category', budget.category);
        
        if (transactionsError) {
          console.error('Error fetching transactions:', transactionsError);
          continue;
        }
        
        // Calculate total spent
        const totalSpent = transactions?.reduce((sum, transaction) => sum + Number(transaction.amount), 0) || 0;
        
        // Check if spent amount is more than 80% of budget
        const percentSpent = (totalSpent / Number(budget.amount)) * 100;
        
        if (percentSpent >= 80 && percentSpent < 100) {
          this.showNotification(
            'Alerta de Orçamento',
            `Você já gastou ${percentSpent.toFixed(0)}% do seu orçamento para ${budget.name || budget.category}.`
          );
        } else if (percentSpent >= 100) {
          this.showNotification(
            'Alerta de Orçamento',
            `Você ultrapassou o orçamento para ${budget.name || budget.category}!`
          );
        }
      }
      
    } catch (error) {
      console.error('Error checking for budget alerts:', error);
    }
  }
  
  public showNotification(title: string, body: string, icon: string = '/favicon.ico') {
    if (this.permission !== "granted") {
      console.log("Notification permission not granted");
      return;
    }
    
    if (!("Notification" in window)) {
      console.log("This browser does not support notifications");
      return;
    }
    
    try {
      new Notification(title, {
        body,
        icon
      });
    } catch (error) {
      console.error('Error showing notification:', error);
    }
  }
}

export const notificationService = NotificationService.getInstance();

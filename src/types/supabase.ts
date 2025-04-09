
export interface UserNotificationSettings {
  id: string;
  user_id: string;
  recurrent_expenses_alerts: boolean;
  shared_expenses_alerts: boolean;
  budget_alerts: boolean;
  weekly_reports: boolean;
  created_at: string;
  updated_at: string;
}

export interface SharedExpense {
  id: string;
  name: string;
  amount: number;
  category: string;
  date: string;
  created_by: string;
  created_at: string;
  updated_at: string;
}

export interface SharedExpenseParticipant {
  id: string;
  shared_expense_id: string;
  user_id: string;
  paid: boolean;
  created_at: string;
  updated_at: string;
}

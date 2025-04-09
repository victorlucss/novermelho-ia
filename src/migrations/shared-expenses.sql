
-- Create shared expenses table
CREATE TABLE IF NOT EXISTS public.shared_expenses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  amount NUMERIC NOT NULL,
  category TEXT NOT NULL,
  date DATE NOT NULL,
  created_by UUID REFERENCES auth.users(id) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create shared expenses participants table
CREATE TABLE IF NOT EXISTS public.shared_expenses_participants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  shared_expense_id UUID REFERENCES public.shared_expenses(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  paid BOOLEAN DEFAULT false NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  UNIQUE(shared_expense_id, user_id)
);

-- Create notification settings table
CREATE TABLE IF NOT EXISTS public.user_notification_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) UNIQUE NOT NULL,
  recurrent_expenses_alerts BOOLEAN DEFAULT true NOT NULL,
  shared_expenses_alerts BOOLEAN DEFAULT true NOT NULL,
  budget_alerts BOOLEAN DEFAULT true NOT NULL,
  weekly_reports BOOLEAN DEFAULT false NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Add RLS policies for shared expenses
ALTER TABLE public.shared_expenses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view shared expenses they created"
  ON public.shared_expenses
  FOR SELECT
  USING (auth.uid() = created_by);
  
CREATE POLICY "Users can view shared expenses they participate in"
  ON public.shared_expenses
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.shared_expenses_participants
      WHERE shared_expense_id = id AND user_id = auth.uid()
    )
  );

CREATE POLICY "Users can insert their own shared expenses"
  ON public.shared_expenses
  FOR INSERT
  WITH CHECK (auth.uid() = created_by);

CREATE POLICY "Users can update their own shared expenses"
  ON public.shared_expenses
  FOR UPDATE
  USING (auth.uid() = created_by);

CREATE POLICY "Users can delete their own shared expenses"
  ON public.shared_expenses
  FOR DELETE
  USING (auth.uid() = created_by);

-- Add RLS policies for shared expenses participants
ALTER TABLE public.shared_expenses_participants ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view shared expenses participants where they participate"
  ON public.shared_expenses_participants
  FOR SELECT
  USING (
    user_id = auth.uid() OR
    EXISTS (
      SELECT 1 FROM public.shared_expenses_participants
      WHERE shared_expense_id = shared_expenses_participants.shared_expense_id
      AND user_id = auth.uid()
    )
  );

CREATE POLICY "Users can insert participants for their shared expenses"
  ON public.shared_expenses_participants
  FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.shared_expenses
      WHERE id = shared_expense_id AND created_by = auth.uid()
    )
  );

CREATE POLICY "Users can update their own participation"
  ON public.shared_expenses_participants
  FOR UPDATE
  USING (user_id = auth.uid());

CREATE POLICY "Users can delete participants from their shared expenses"
  ON public.shared_expenses_participants
  FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM public.shared_expenses
      WHERE id = shared_expense_id AND created_by = auth.uid()
    )
  );

-- Add RLS policies for notification settings
ALTER TABLE public.user_notification_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own notification settings"
  ON public.user_notification_settings
  FOR SELECT
  USING (user_id = auth.uid());

CREATE POLICY "Users can insert their own notification settings"
  ON public.user_notification_settings
  FOR INSERT
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update their own notification settings"
  ON public.user_notification_settings
  FOR UPDATE
  USING (user_id = auth.uid());

CREATE POLICY "Users can delete their own notification settings"
  ON public.user_notification_settings
  FOR DELETE
  USING (user_id = auth.uid());

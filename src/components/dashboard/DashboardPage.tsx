import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ExpenseLineChart } from "./ExpenseLineChart";
import { TransactionList } from "./TransactionList";
import { CalendarIcon, Plus, Loader2 } from "lucide-react";
import { AddTransactionDialog } from "./AddTransactionDialog";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";

export const DashboardPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [isAddTransactionOpen, setIsAddTransactionOpen] = useState(false);
  const [transactionType, setTransactionType] = useState<"despesa" | "receita">("despesa");
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [monthlyExpenses, setMonthlyExpenses] = useState(0);
  const [monthlyBalance, setMonthlyBalance] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [transactionFilter, setTransactionFilter] = useState<"all" | "expenses" | "income">("all");
  const [userProfile, setUserProfile] = useState<{ full_name?: string } | null>(null);

  const handleAddTransaction = (type: "despesa" | "receita") => {
    setTransactionType(type);
    setIsAddTransactionOpen(true);
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        
        if (user) {
          const { data } = await supabase
            .from('user_profiles')
            .select('full_name')
            .eq('id', user.id)
            .single();
            
          setUserProfile(data);
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };
    
    fetchUserProfile();
  }, []);

  useEffect(() => {
    const fetchMonthlySummary = async () => {
      try {
        setIsLoading(true);
        const currentMonth = format(selectedDate, 'MM');
        const currentYear = format(selectedDate, 'yyyy');
        const startDate = `${currentYear}-${currentMonth}-01`;
        const lastDay = new Date(parseInt(currentYear), parseInt(currentMonth), 0).getDate();
        const endDate = `${currentYear}-${currentMonth}-${lastDay}`;

        // Fetch income for the month
        const { data: incomeData, error: incomeError } = await supabase
          .from('transactions')
          .select('amount')
          .eq('type', 'income')
          .gte('date', startDate)
          .lte('date', endDate);

        // Fetch expenses for the month
        const { data: expenseData, error: expenseError } = await supabase
          .from('transactions')
          .select('amount')
          .eq('type', 'expense')
          .gte('date', startDate)
          .lte('date', endDate);

        if (incomeError) {
          console.error('Error fetching income data:', incomeError);
        } else {
          const totalIncome = incomeData?.reduce((sum, item) => sum + parseFloat(String(item.amount)), 0) || 0;
          setMonthlyIncome(totalIncome);
        }

        if (expenseError) {
          console.error('Error fetching expense data:', expenseError);
        } else {
          const totalExpenses = expenseData?.reduce((sum, item) => sum + parseFloat(String(item.amount)), 0) || 0;
          setMonthlyExpenses(totalExpenses);
        }

        // Calculate balance
        const income = incomeData?.reduce((sum, item) => sum + parseFloat(String(item.amount)), 0) || 0;
        const expenses = expenseData?.reduce((sum, item) => sum + parseFloat(String(item.amount)), 0) || 0;
        setMonthlyBalance(income - expenses);
      } catch (error) {
        console.error('Error calculating monthly summary:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMonthlySummary();
  }, [selectedDate, isAddTransactionOpen]);

  return (
    <div className="space-y-8 pb-16 md:pb-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Olá, {userProfile?.full_name || "Usuário"}</h1>
          <p className="text-muted-foreground">
            Acompanhe suas finanças e fique no controle.
          </p>
        </div>
        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-[14rem] justify-start text-left font-normal">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {format(selectedDate, "MMMM yyyy", { locale: ptBR })}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => date && setSelectedDate(date)}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Balanço Mensal</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Carregando...</span>
              </div>
            ) : (
              <>
                <div className={cn(
                  "text-2xl font-bold",
                  monthlyBalance >= 0 ? "text-success" : "text-expense"
                )}>
                  R$ {monthlyBalance.toFixed(2)}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {monthlyBalance >= 0 
                    ? "Você está com saldo positivo" 
                    : "Você está com saldo negativo"}
                </p>
              </>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Despesas</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Carregando...</span>
              </div>
            ) : (
              <>
                <div className="text-2xl font-bold text-expense">R$ {monthlyExpenses.toFixed(2)}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {selectedDate.getMonth() === new Date().getMonth() && selectedDate.getFullYear() === new Date().getFullYear()
                    ? "Mês atual"
                    : format(selectedDate, "MMMM yyyy", { locale: ptBR })}
                </p>
              </>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Receitas</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Carregando...</span>
              </div>
            ) : (
              <>
                <div className="text-2xl font-bold text-income">R$ {monthlyIncome.toFixed(2)}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {selectedDate.getMonth() === new Date().getMonth() && selectedDate.getFullYear() === new Date().getFullYear()
                    ? "Mês atual"
                    : format(selectedDate, "MMMM yyyy", { locale: ptBR })}
                </p>
              </>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        <Card className="col-span-7">
          <CardHeader>
            <CardTitle>Gastos Recentes</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <ExpenseLineChart />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Transações Recentes</CardTitle>
          <div className="flex space-x-2">
            <Select
              value={transactionFilter}
              onValueChange={(value: "all" | "expenses" | "income") => setTransactionFilter(value)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filtrar transações" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as transações</SelectItem>
                <SelectItem value="expenses">Apenas despesas</SelectItem>
                <SelectItem value="income">Apenas receitas</SelectItem>
              </SelectContent>
            </Select>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => handleAddTransaction("despesa")}
              className="text-expense border-expense/20 hover:bg-expense/10"
            >
              <Plus className="h-4 w-4 mr-1" />
              Despesa
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => handleAddTransaction("receita")}
              className="text-income border-income/20 hover:bg-income/10"
            >
              <Plus className="h-4 w-4 mr-1" />
              Receita
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <TransactionList type={transactionFilter} />
        </CardContent>
      </Card>

      <AddTransactionDialog 
        open={isAddTransactionOpen} 
        onOpenChange={setIsAddTransactionOpen}
        type={transactionType}
      />
    </div>
  );
};

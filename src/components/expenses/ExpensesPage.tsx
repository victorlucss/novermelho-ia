import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, Plus, ArrowDownCircle, Loader2 } from "lucide-react";
import { ExpenseByCategoryChart } from "../analytics/ExpenseByCategoryChart";
import { cn } from "@/lib/utils";
import { AddTransactionDialog } from "../dashboard/AddTransactionDialog";
import { TransactionTable } from "../analytics/TransactionTable";
import { supabase } from "@/integrations/supabase/client";

export const ExpensesPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [isAddExpenseOpen, setIsAddExpenseOpen] = useState(false);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [dailyAverage, setDailyAverage] = useState(0);
  const [recurrentExpenses, setRecurrentExpenses] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchExpenseSummary = async () => {
      try {
        setIsLoading(true);
        const currentMonth = format(selectedDate, 'MM');
        const currentYear = format(selectedDate, 'yyyy');
        const startDate = `${currentYear}-${currentMonth}-01`;
        const lastDay = new Date(parseInt(currentYear), parseInt(currentMonth), 0).getDate();
        const endDate = `${currentYear}-${currentMonth}-${lastDay}`;
        
        // Fetch all expenses for the month
        const { data: expenseData, error: expenseError } = await supabase
          .from('transactions')
          .select('amount, recurrent')
          .eq('type', 'expense')
          .gte('date', startDate)
          .lte('date', endDate);
        
        if (expenseError) {
          console.error('Error fetching expense data:', expenseError);
          return;
        }
        
        // Calculate total expenses
        const totalAmount = expenseData?.reduce((sum, item) => sum + parseFloat(String(item.amount)), 0) || 0;
        setTotalExpenses(totalAmount);
        
        // Calculate daily average
        setDailyAverage(totalAmount / lastDay);
        
        // Calculate recurrent expenses
        const recurrentAmount = expenseData
          ?.filter(item => item.recurrent)
          .reduce((sum, item) => sum + parseFloat(String(item.amount)), 0) || 0;
        setRecurrentExpenses(recurrentAmount);
        
      } catch (error) {
        console.error('Error calculating expense summary:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchExpenseSummary();
  }, [selectedDate, isAddExpenseOpen]);

  return (
    <div className="space-y-8 pb-16 md:pb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Despesas</h1>
          <p className="text-muted-foreground">
            Gerencie e acompanhe todas as suas despesas.
          </p>
        </div>
        <div className="flex items-center space-x-2">
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
          <Button 
            onClick={() => setIsAddExpenseOpen(true)}
            className="bg-vermelho hover:bg-vermelho/90"
          >
            <Plus className="h-4 w-4 mr-2" />
            Nova Despesa
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total do Mês</CardTitle>
            <ArrowDownCircle className="h-4 w-4 text-vermelho" />
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Carregando...</span>
              </div>
            ) : (
              <>
                <div className="text-2xl font-bold text-vermelho">R$ {totalExpenses.toFixed(2)}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {format(selectedDate, "MMMM yyyy", { locale: ptBR })}
                </p>
              </>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Média Diária</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Carregando...</span>
              </div>
            ) : (
              <>
                <div className="text-2xl font-bold">R$ {dailyAverage.toFixed(2)}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate()} dias no mês
                </p>
              </>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Despesas Recorrentes</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Carregando...</span>
              </div>
            ) : (
              <>
                <div className="text-2xl font-bold">R$ {recurrentExpenses.toFixed(2)}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {totalExpenses > 0 
                    ? `${((recurrentExpenses / totalExpenses) * 100).toFixed(0)}% do total de despesas`
                    : "0% do total de despesas"}
                </p>
              </>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Por Categoria</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ExpenseByCategoryChart selectedDate={selectedDate} />
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Todas as Despesas</CardTitle>
          </CardHeader>
          <CardContent>
            <TransactionTable type="expenses" />
          </CardContent>
        </Card>
      </div>

      <AddTransactionDialog 
        open={isAddExpenseOpen} 
        onOpenChange={setIsAddExpenseOpen}
        type="despesa"
      />
    </div>
  );
};

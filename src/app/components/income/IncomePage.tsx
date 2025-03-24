import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { CalendarIcon, Plus, ArrowUpCircle, Loader2 } from "lucide-react";
import { ExpenseByCategoryChart } from "../analytics/ExpenseByCategoryChart";
import { cn } from "~/lib/utils";
import { AddTransactionDialog } from "../dashboard/AddTransactionDialog";
import { TransactionTable } from "../analytics/TransactionTable";
import { supabase } from "~/integrations/supabase/client";

export const IncomePage = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [isAddIncomeOpen, setIsAddIncomeOpen] = useState(false);
  const [totalIncome, setTotalIncome] = useState(0);
  const [fixedIncome, setFixedIncome] = useState(0);
  const [extraIncome, setExtraIncome] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchIncomeSummary = async () => {
      try {
        setIsLoading(true);
        const currentMonth = format(selectedDate, 'MM');
        const currentYear = format(selectedDate, 'yyyy');
        const startDate = `${currentYear}-${currentMonth}-01`;
        const lastDay = new Date(parseInt(currentYear), parseInt(currentMonth), 0).getDate();
        const endDate = `${currentYear}-${currentMonth}-${lastDay}`;

        // Fetch all income for the month
        const { data: incomeData, error: incomeError } = await supabase
          .from('transactions')
          .select('amount, recurrent, category')
          .eq('type', 'income')
          .gte('date', startDate)
          .lte('date', endDate);

        if (incomeError) {
          console.error('Error fetching income data:', incomeError);
          return;
        }

        // Calculate total income
        const totalAmount = incomeData?.reduce((sum, item) => sum + parseFloat(String(item.amount)), 0) || 0;
        setTotalIncome(totalAmount);

        // Calculate fixed income (recurrent)
        const recurrentAmount = incomeData
          ?.filter(item => item.recurrent)
          .reduce((sum, item) => sum + parseFloat(String(item.amount)), 0) || 0;
        setFixedIncome(recurrentAmount);

        // Calculate extra income (non-recurrent)
        const extraAmount = incomeData
          ?.filter(item => !item.recurrent)
          .reduce((sum, item) => sum + parseFloat(String(item.amount)), 0) || 0;
        setExtraIncome(extraAmount);

      } catch (error) {
        console.error('Error calculating income summary:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchIncomeSummary();
  }, [selectedDate, isAddIncomeOpen]);

  return (
    <div className="space-y-8 pb-16 md:pb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Receitas</h1>
          <p className="text-muted-foreground">
            Gerencie e acompanhe todas as suas receitas.
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
            onClick={() => setIsAddIncomeOpen(true)}
            className="bg-verde hover:bg-verde/90"
          >
            <Plus className="h-4 w-4 mr-2" />
            Nova Receita
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total do Mês</CardTitle>
            <ArrowUpCircle className="h-4 w-4 text-verde" />
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Carregando...</span>
              </div>
            ) : (
              <>
                <div className="text-2xl font-bold text-verde">R$ {totalIncome.toFixed(2)}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {format(selectedDate, "MMMM yyyy", { locale: ptBR })}
                </p>
              </>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Receitas Fixas</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Carregando...</span>
              </div>
            ) : (
              <>
                <div className="text-2xl font-bold">R$ {fixedIncome.toFixed(2)}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {totalIncome > 0
                    ? `${((fixedIncome / totalIncome) * 100).toFixed(0)}% do total de receitas`
                    : "0% do total de receitas"}
                </p>
              </>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Receitas Extras</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Carregando...</span>
              </div>
            ) : (
              <>
                <div className="text-2xl font-bold">R$ {extraIncome.toFixed(2)}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {totalIncome > 0
                    ? `${((extraIncome / totalIncome) * 100).toFixed(0)}% do total de receitas`
                    : "0% do total de receitas"}
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
            <ExpenseByCategoryChart isIncome={true} selectedDate={selectedDate} />
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Todas as Receitas</CardTitle>
          </CardHeader>
          <CardContent>
            <TransactionTable type="income" />
          </CardContent>
        </Card>
      </div>

      <AddTransactionDialog
        open={isAddIncomeOpen}
        onOpenChange={setIsAddIncomeOpen}
        type="receita"
      />
    </div>
  );
};

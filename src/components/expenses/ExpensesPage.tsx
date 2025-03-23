
import React, { useState } from "react";
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
import { CalendarIcon, Plus, ArrowDownCircle } from "lucide-react";
import { ExpenseByCategoryChart } from "../analytics/ExpenseByCategoryChart";
import { cn } from "@/lib/utils";
import { AddTransactionDialog } from "../dashboard/AddTransactionDialog";
import { TransactionTable } from "../analytics/TransactionTable";

export const ExpensesPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [isAddExpenseOpen, setIsAddExpenseOpen] = useState(false);

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
            className="bg-vermelho hover:bg-vermelho-dark"
          >
            <Plus className="h-4 w-4 mr-2" />
            Nova Despesa
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="glass card-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total do Mês</CardTitle>
            <ArrowDownCircle className="h-4 w-4 text-vermelho" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-vermelho">R$ 3.750,00</div>
            <p className="text-xs text-muted-foreground mt-1">
              -5% em relação ao mês anterior
            </p>
          </CardContent>
        </Card>
        <Card className="glass card-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Média Diária</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 125,00</div>
            <p className="text-xs text-muted-foreground mt-1">
              31 dias no mês atual
            </p>
          </CardContent>
        </Card>
        <Card className="glass card-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Despesas Recorrentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 1.300,00</div>
            <p className="text-xs text-muted-foreground mt-1">
              35% do total de despesas
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="glass card-hover">
          <CardHeader>
            <CardTitle>Por Categoria</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ExpenseByCategoryChart />
          </CardContent>
        </Card>
        <Card className="glass card-hover md:col-span-2">
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

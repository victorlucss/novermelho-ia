
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
import { CalendarIcon, Plus, ArrowUpCircle } from "lucide-react";
import { ExpenseByCategoryChart } from "../analytics/ExpenseByCategoryChart";
import { cn } from "@/lib/utils";
import { AddTransactionDialog } from "../dashboard/AddTransactionDialog";
import { TransactionTable } from "../analytics/TransactionTable";

export const IncomePage = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [isAddIncomeOpen, setIsAddIncomeOpen] = useState(false);

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
            className="bg-verde hover:bg-verde-dark"
          >
            <Plus className="h-4 w-4 mr-2" />
            Nova Receita
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="glass card-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total do Mês</CardTitle>
            <ArrowUpCircle className="h-4 w-4 text-verde" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-verde">R$ 5.000,00</div>
            <p className="text-xs text-muted-foreground mt-1">
              +10% em relação ao mês anterior
            </p>
          </CardContent>
        </Card>
        <Card className="glass card-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Receitas Fixas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 5.000,00</div>
            <p className="text-xs text-muted-foreground mt-1">
              100% do total de receitas
            </p>
          </CardContent>
        </Card>
        <Card className="glass card-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Receitas Extras</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 0,00</div>
            <p className="text-xs text-muted-foreground mt-1">
              0% do total de receitas
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
            <ExpenseByCategoryChart isIncome={true} />
          </CardContent>
        </Card>
        <Card className="glass card-hover md:col-span-2">
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

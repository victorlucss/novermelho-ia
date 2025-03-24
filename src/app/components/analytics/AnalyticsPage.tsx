import React, { useState } from "react";
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
import { CalendarIcon } from "lucide-react";
import { ExpenseChart } from "./ExpenseChart";
import { ExpenseByCategoryChart } from "./ExpenseByCategoryChart";
import { IncomeChart } from "./IncomeChart";
import { TransactionTable } from "./TransactionTable";
import { cn } from "~/lib/utils";

export const AnalyticsPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  return (
    <div className="space-y-8 pb-16 md:pb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Análise Financeira</h1>
          <p className="text-muted-foreground">
            Visualize e analise seus gastos e receitas.
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
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="expenses">Despesas</TabsTrigger>
          <TabsTrigger value="income">Receitas</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="glass card-hover md:col-span-2">
              <CardHeader>
                <CardTitle>Balanço Mensal</CardTitle>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ExpenseChart />
              </CardContent>
            </Card>
            <Card className="glass card-hover">
              <CardHeader>
                <CardTitle>Despesas por Categoria</CardTitle>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ExpenseByCategoryChart />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="expenses">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="glass card-hover md:col-span-2">
              <CardHeader>
                <CardTitle>Evolução de Despesas</CardTitle>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ExpenseChart />
              </CardContent>
            </Card>
            <Card className="glass card-hover">
              <CardHeader>
                <CardTitle>Por Categoria</CardTitle>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ExpenseByCategoryChart />
              </CardContent>
            </Card>
            <Card className="glass card-hover md:col-span-3">
              <CardHeader>
                <CardTitle>Detalhamento de Despesas</CardTitle>
              </CardHeader>
              <CardContent>
                <TransactionTable type="expenses" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="income">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="glass card-hover md:col-span-2">
              <CardHeader>
                <CardTitle>Evolução de Receitas</CardTitle>
              </CardHeader>
              <CardContent className="h-[300px]">
                <IncomeChart />
              </CardContent>
            </Card>
            <Card className="glass card-hover">
              <CardHeader>
                <CardTitle>Receitas por Categoria</CardTitle>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ExpenseByCategoryChart isIncome={true} />
              </CardContent>
            </Card>
            <Card className="glass card-hover md:col-span-3">
              <CardHeader>
                <CardTitle>Detalhamento de Receitas</CardTitle>
              </CardHeader>
              <CardContent>
                <TransactionTable type="income" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

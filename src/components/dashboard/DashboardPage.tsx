
import React, { useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExpenseSummary } from "./ExpenseSummary";
import { TransactionList } from "./TransactionList";
import { WalletSummary } from "./WalletSummary";
import { CalendarIcon, Plus } from "lucide-react";
import { AddTransactionDialog } from "./AddTransactionDialog";
import { cn } from "@/lib/utils";

export const DashboardPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [isAddTransactionOpen, setIsAddTransactionOpen] = useState(false);
  const [transactionType, setTransactionType] = useState<"despesa" | "receita">("despesa");

  const handleAddTransaction = (type: "despesa" | "receita") => {
    setTransactionType(type);
    setIsAddTransactionOpen(true);
  };

  return (
    <div className="space-y-8 pb-16 md:pb-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Olá, Usuário</h1>
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
        <Card className="glass card-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Balanço Mensal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 1.250,00</div>
            <p className="text-xs text-muted-foreground mt-1">
              +20% em relação ao mês anterior
            </p>
          </CardContent>
        </Card>
        <Card className="glass card-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Despesas</CardTitle>
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
            <CardTitle className="text-sm font-medium">Total de Receitas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-verde">R$ 5.000,00</div>
            <p className="text-xs text-muted-foreground mt-1">
              +10% em relação ao mês anterior
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        <Card className="glass card-hover col-span-4">
          <CardHeader>
            <CardTitle>Resumo de Gastos</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <ExpenseSummary />
          </CardContent>
        </Card>
        <Card className="glass card-hover col-span-3">
          <CardHeader>
            <CardTitle>Carteiras</CardTitle>
          </CardHeader>
          <CardContent>
            <WalletSummary />
          </CardContent>
        </Card>
      </div>

      <Card className="glass card-hover">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Transações Recentes</CardTitle>
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => handleAddTransaction("despesa")}
              className="text-vermelho border-vermelho/20 hover:bg-vermelho/10"
            >
              <Plus className="h-4 w-4 mr-1" />
              Despesa
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => handleAddTransaction("receita")}
              className="text-verde border-verde/20 hover:bg-verde/10"
            >
              <Plus className="h-4 w-4 mr-1" />
              Receita
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList className="grid w-full grid-cols-3 mb-4">
              <TabsTrigger value="all">Todas</TabsTrigger>
              <TabsTrigger value="expenses">Despesas</TabsTrigger>
              <TabsTrigger value="income">Receitas</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <ScrollArea className="h-[300px]">
                <TransactionList type="all" />
              </ScrollArea>
            </TabsContent>
            <TabsContent value="expenses">
              <ScrollArea className="h-[300px]">
                <TransactionList type="expenses" />
              </ScrollArea>
            </TabsContent>
            <TabsContent value="income">
              <ScrollArea className="h-[300px]">
                <TransactionList type="income" />
              </ScrollArea>
            </TabsContent>
          </Tabs>
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

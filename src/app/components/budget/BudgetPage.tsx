
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Progress } from "~/components/ui/progress";
import { PlusCircle, Loader2, AlertTriangle } from "lucide-react";
import { toast } from "sonner";
import { AddBudgetDialog } from "./AddBudgetDialog";
import { supabase } from "~/integrations/supabase/client";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "~/lib/utils";

interface Budget {
  id: string;
  name: string;
  amount: number;
  start_date: string;
  end_date: string;
  category: string | null;
  created_at: string;
}

interface BudgetWithSpent extends Budget {
  spent: number;
  percentage: number;
}

export const BudgetPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [budgets, setBudgets] = useState<BudgetWithSpent[]>([]);
  const [isAddBudgetOpen, setIsAddBudgetOpen] = useState(false);

  const fetchBudgets = async () => {
    try {
      setIsLoading(true);

      // Fetch budgets
      const { data: budgetsData, error: budgetsError } = await supabase
        .from('budgets')
        .select('*')
        .order('created_at', { ascending: false });

      if (budgetsError) {
        console.error('Error fetching budgets:', budgetsError);
        toast.error("Erro ao carregar orçamentos");
        return;
      }

      // Calculate spent amount for each budget
      const budgetsWithSpent = await Promise.all(
        (budgetsData || []).map(async (budget) => {
          // Get transactions for this budget's category or for all categories if no category specified
          const query = supabase
            .from('transactions')
            .select('amount')
            .eq('type', 'expense')
            .gte('date', budget.start_date)
            .lte('date', budget.end_date);

          if (budget.category) {
            query.eq('category', budget.category);
          }

          const { data: transactions, error: transactionsError } = await query;

          if (transactionsError) {
            console.error('Error fetching transactions:', transactionsError);
            return {
              ...budget,
              spent: 0,
              percentage: 0
            };
          }

          const spent = transactions?.reduce((sum, tx) => sum + parseFloat(tx.amount.toString()), 0) || 0;
          const percentage = (spent / parseFloat(budget.amount.toString())) * 100;

          return {
            ...budget,
            spent,
            percentage
          };
        })
      );

      setBudgets(budgetsWithSpent);

    } catch (error) {
      console.error('Error:', error);
      toast.error("Erro ao carregar orçamentos");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBudgets();
  }, []);

  return (
    <div className="space-y-8 pb-16 md:pb-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Orçamentos</h1>
          <p className="text-muted-foreground">
            Defina limites de gastos e acompanhe seus orçamentos.
          </p>
        </div>
        <Button onClick={() => setIsAddBudgetOpen(true)}>
          <PlusCircle className="h-4 w-4 mr-2" />
          Novo Orçamento
        </Button>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : budgets.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <div className="rounded-full bg-muted p-4 mb-4">
              <AlertTriangle className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium mb-2">Nenhum orçamento definido</h3>
            <p className="text-center text-muted-foreground mb-6 max-w-md">
              Crie orçamentos para definir limites de gastos e acompanhar suas despesas em diferentes categorias.
            </p>
            <Button onClick={() => setIsAddBudgetOpen(true)}>
              <PlusCircle className="h-4 w-4 mr-2" />
              Criar Orçamento
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {budgets.map((budget) => (
            <Card key={budget.id} className="overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">{budget.name}</CardTitle>
                <div className="text-sm text-muted-foreground">
                  {format(new Date(budget.start_date), "dd MMM", { locale: ptBR })} -{" "}
                  {format(new Date(budget.end_date), "dd MMM yyyy", { locale: ptBR })}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">
                      {budget.category || "Todas as categorias"}
                    </span>
                    <span className="text-sm">
                      {Math.round(budget.percentage)}%
                    </span>
                  </div>
                  <Progress
                    value={budget.percentage}
                    className="h-2"
                    indicatorClassName={cn(
                      budget.percentage >= 100 ? "bg-expense" :
                        budget.percentage >= 75 ? "bg-warning" :
                          "bg-income"
                    )}
                  />
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-muted-foreground">Gasto</p>
                    <p className={cn(
                      "text-lg font-bold",
                      budget.percentage >= 100 ? "text-expense" : ""
                    )}>
                      R$ {budget.spent.toFixed(2)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Orçamento</p>
                    <p className="text-lg font-medium">
                      R$ {parseFloat(budget.amount.toString()).toFixed(2)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <AddBudgetDialog
        open={isAddBudgetOpen}
        onOpenChange={setIsAddBudgetOpen}
        onSuccess={fetchBudgets}
      />
    </div>
  );
};

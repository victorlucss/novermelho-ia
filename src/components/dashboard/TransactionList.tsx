
import React, { useEffect, useState } from "react";
import { 
  ShoppingBag, 
  Coffee, 
  Home, 
  Car,
  Wallet,
  Loader2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TransactionListProps {
  type: "all" | "expenses" | "income";
}

interface WalletType {
  id: string;
  name: string;
}

interface TransactionType {
  id: string;
  name: string;
  category: string;
  amount: number;
  date: string;
  type: string;
  wallet_id: string;
  wallet: WalletType | null;
  recurrent: boolean;
}

// Map categories to icons
const categoryIconMap: Record<string, any> = {
  "Moradia": Home,
  "Alimentação": ShoppingBag,
  "Transporte": Car,
  "Lazer": Coffee,
  "Saúde": Home,
  "Educação": Home,
  "Serviços": Home,
  "Outros": Home,
  "Salário": Wallet,
  "Freelance": Wallet,
  "Investimentos": Wallet,
  "Presentes": Wallet,
  "Renda": Wallet,
  "Renda Extra": Wallet,
};

export const TransactionList = ({ type }: TransactionListProps) => {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        setIsLoading(true);
        let query = supabase
          .from('transactions')
          .select('*, wallet:wallets(id, name)')
          .order('date', { ascending: false });

        if (type === "expenses") {
          query = query.eq('type', 'expense');
        } else if (type === "income") {
          query = query.eq('type', 'income');
        }

        const { data, error } = await query;
        
        if (error) {
          console.error('Error fetching transactions:', error);
        } else {
          console.log('Transactions:', data);
          setTransactions(data || []);
        }
      } catch (error) {
        console.error('Error fetching transactions:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTransactions();
  }, [type]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-8">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (transactions.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">
          {type === "expenses" 
            ? "Nenhuma despesa registrada" 
            : type === "income" 
              ? "Nenhuma receita registrada" 
              : "Nenhuma transação registrada"}
        </p>
      </div>
    );
  }

  return (
    <ScrollArea className="h-[300px]">
      <div className="space-y-4">
        {transactions.map((transaction) => {
          const IconComponent = categoryIconMap[transaction.category] || 
            (transaction.type === "expense" ? ShoppingBag : Wallet);
            
          return (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-4 rounded-lg border border-border transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center",
                    transaction.type === "expense" ? "bg-expense/10" : "bg-income/10"
                  )}
                >
                  <IconComponent 
                    className={cn(
                      "h-5 w-5",
                      transaction.type === "expense" ? "text-expense" : "text-income"
                    )} 
                  />
                </div>
                <div>
                  <p className="font-medium">{transaction.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {transaction.category} • {transaction.wallet?.name || "Carteira removida"}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p
                  className={cn(
                    "font-bold",
                    transaction.type === "expense" ? "text-expense" : "text-income"
                  )}
                >
                  {transaction.type === "expense" ? "-" : "+"}R$ {transaction.amount.toFixed(2)}
                </p>
                <p className="text-xs text-muted-foreground">
                  {new Date(transaction.date).toLocaleDateString("pt-BR")}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </ScrollArea>
  );
};

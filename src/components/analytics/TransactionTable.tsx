
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface TransactionTableProps {
  type: "expenses" | "income";
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

export const TransactionTable = ({ type }: TransactionTableProps) => {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from('transactions')
          .select('*, wallet:wallets(id, name)')
          .eq('type', type === 'expenses' ? 'expense' : 'income')
          .order('date', { ascending: false });
        
        if (error) {
          console.error(`Error fetching ${type}:`, error);
        } else {
          setTransactions(data || []);
        }
      } catch (error) {
        console.error(`Error fetching ${type}:`, error);
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
            : "Nenhuma receita registrada"}
        </p>
      </div>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Data</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Categoria</TableHead>
          <TableHead>Carteira</TableHead>
          <TableHead className="text-right">Valor</TableHead>
          <TableHead className="text-center">Recorrente</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell className="font-medium">
              {new Date(transaction.date).toLocaleDateString("pt-BR")}
            </TableCell>
            <TableCell>{transaction.name}</TableCell>
            <TableCell>{transaction.category}</TableCell>
            <TableCell>{transaction.wallet?.name || "Carteira removida"}</TableCell>
            <TableCell className="text-right font-medium">
              <span
                className={cn(
                  type === "expenses" ? "text-expense" : "text-income"
                )}
              >
                {type === "expenses" ? "-" : "+"}R${" "}
                {transaction.amount.toFixed(2)}
              </span>
            </TableCell>
            <TableCell className="text-center">
              {transaction.recurrent ? (
                <Badge
                  variant="outline"
                  className="bg-accent text-accent-foreground"
                >
                  Mensal
                </Badge>
              ) : (
                <span className="text-muted-foreground">-</span>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

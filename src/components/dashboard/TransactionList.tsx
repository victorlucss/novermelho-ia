
import React from "react";
import { 
  ArrowDownCircle, 
  ArrowUpCircle, 
  ShoppingBag, 
  Coffee, 
  Home, 
  Car,
  CreditCard,
  Wallet
} from "lucide-react";
import { cn } from "@/lib/utils";

interface TransactionListProps {
  type: "all" | "expenses" | "income";
}

const transactions = [
  {
    id: 1,
    name: "Aluguel",
    category: "Moradia",
    amount: 1200,
    date: "2023-10-01",
    type: "expense",
    wallet: "Nubank",
    icon: Home,
  },
  {
    id: 2,
    name: "Salário",
    category: "Renda",
    amount: 5000,
    date: "2023-10-05",
    type: "income",
    wallet: "Itaú",
    icon: Wallet,
  },
  {
    id: 3,
    name: "Supermercado",
    category: "Alimentação",
    amount: 350,
    date: "2023-10-08",
    type: "expense",
    wallet: "Nubank",
    icon: ShoppingBag,
  },
  {
    id: 4,
    name: "Café",
    category: "Alimentação",
    amount: 15,
    date: "2023-10-10",
    type: "expense",
    wallet: "Dinheiro",
    icon: Coffee,
  },
  {
    id: 5,
    name: "Combustível",
    category: "Transporte",
    amount: 200,
    date: "2023-10-12",
    type: "expense",
    wallet: "C6 Bank",
    icon: Car,
  },
  {
    id: 6,
    name: "Freelance",
    category: "Renda Extra",
    amount: 1200,
    date: "2023-10-15",
    type: "income",
    wallet: "Nubank",
    icon: Wallet,
  },
  {
    id: 7,
    name: "Internet",
    category: "Serviços",
    amount: 100,
    date: "2023-10-20",
    type: "expense",
    wallet: "C6 Bank",
    icon: Home,
  },
];

export const TransactionList = ({ type }: TransactionListProps) => {
  const filteredTransactions = transactions.filter((transaction) => {
    if (type === "all") return true;
    if (type === "expenses") return transaction.type === "expense";
    if (type === "income") return transaction.type === "income";
    return false;
  });

  return (
    <div className="space-y-4">
      {filteredTransactions.map((transaction) => (
        <div
          key={transaction.id}
          className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-accent/10 transition-colors"
        >
          <div className="flex items-center space-x-4">
            <div
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center",
                transaction.type === "expense" ? "bg-vermelho/10" : "bg-verde/10"
              )}
            >
              {transaction.type === "expense" ? (
                <transaction.icon className="h-5 w-5 text-vermelho" />
              ) : (
                <transaction.icon className="h-5 w-5 text-verde" />
              )}
            </div>
            <div>
              <p className="font-medium">{transaction.name}</p>
              <p className="text-sm text-muted-foreground">
                {transaction.category} • {transaction.wallet}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p
              className={cn(
                "font-bold",
                transaction.type === "expense" ? "text-vermelho" : "text-verde"
              )}
            >
              {transaction.type === "expense" ? "-" : "+"}R$ {transaction.amount.toFixed(2)}
            </p>
            <p className="text-xs text-muted-foreground">
              {new Date(transaction.date).toLocaleDateString("pt-BR")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

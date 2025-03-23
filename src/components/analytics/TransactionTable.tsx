
import React from "react";
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

interface TransactionTableProps {
  type: "expenses" | "income";
}

const expenseTransactions = [
  {
    id: 1,
    name: "Aluguel",
    category: "Moradia",
    amount: 1200,
    date: "2023-10-01",
    wallet: "Nubank",
    recurrent: true,
  },
  {
    id: 3,
    name: "Supermercado",
    category: "Alimentação",
    amount: 350,
    date: "2023-10-08",
    wallet: "Nubank",
    recurrent: false,
  },
  {
    id: 4,
    name: "Café",
    category: "Alimentação",
    amount: 15,
    date: "2023-10-10",
    wallet: "Dinheiro",
    recurrent: false,
  },
  {
    id: 5,
    name: "Combustível",
    category: "Transporte",
    amount: 200,
    date: "2023-10-12",
    wallet: "C6 Bank",
    recurrent: false,
  },
  {
    id: 7,
    name: "Internet",
    category: "Serviços",
    amount: 100,
    date: "2023-10-20",
    wallet: "C6 Bank",
    recurrent: true,
  },
];

const incomeTransactions = [
  {
    id: 2,
    name: "Salário",
    category: "Renda",
    amount: 5000,
    date: "2023-10-05",
    wallet: "Itaú",
    recurrent: true,
  },
  {
    id: 6,
    name: "Freelance",
    category: "Renda Extra",
    amount: 1200,
    date: "2023-10-15",
    wallet: "Nubank",
    recurrent: false,
  },
];

export const TransactionTable = ({ type }: TransactionTableProps) => {
  const transactions = type === "expenses" ? expenseTransactions : incomeTransactions;

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
            <TableCell>{transaction.wallet}</TableCell>
            <TableCell className="text-right font-medium">
              <span
                className={cn(
                  type === "expenses" ? "text-vermelho" : "text-verde"
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

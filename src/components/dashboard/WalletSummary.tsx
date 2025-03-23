
import React from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { PlusCircle, Wallet, CreditCard } from "lucide-react";

const wallets = [
  {
    id: 1,
    name: "Nubank",
    balance: 2500,
    limit: 5000,
    type: "credit-card",
    color: "#8A05BE",
  },
  {
    id: 2,
    name: "Itaú",
    balance: 3500,
    limit: 3500,
    type: "debit-card",
    color: "#EC7000",
  },
  {
    id: 3,
    name: "C6 Bank",
    balance: 1200,
    limit: 3000,
    type: "credit-card",
    color: "#222222",
  },
  {
    id: 4,
    name: "Dinheiro",
    balance: 350,
    limit: 350,
    type: "cash",
    color: "#2A9D8F",
  },
];

export const WalletSummary = () => {
  return (
    <div className="space-y-4">
      {wallets.map((wallet) => (
        <div
          key={wallet.id}
          className="border border-border rounded-lg p-4"
          style={{
            background: `linear-gradient(135deg, ${wallet.color}10, transparent)`,
          }}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              {wallet.type === "credit-card" ? (
                <CreditCard
                  className="h-5 w-5 mr-2"
                  style={{ color: wallet.color }}
                />
              ) : (
                <Wallet
                  className="h-5 w-5 mr-2"
                  style={{ color: wallet.color }}
                />
              )}
              <span className="font-medium">{wallet.name}</span>
            </div>
            <div className="text-right">
              <p className="font-bold">R$ {wallet.balance.toFixed(2)}</p>
              <p className="text-xs text-muted-foreground">
                {wallet.type === "credit-card"
                  ? `Limite: R$ ${wallet.limit.toFixed(2)}`
                  : "Saldo disponível"}
              </p>
            </div>
          </div>
          {wallet.type === "credit-card" && (
            <Progress
              value={(wallet.balance / wallet.limit) * 100}
              className="h-2"
              indicatorClassName={wallet.balance / wallet.limit > 0.7 ? "bg-vermelho" : ""}
            />
          )}
        </div>
      ))}
      <Button
        variant="outline"
        className="w-full border-dashed"
      >
        <PlusCircle className="h-4 w-4 mr-2" />
        Adicionar Carteira
      </Button>
    </div>
  );
};

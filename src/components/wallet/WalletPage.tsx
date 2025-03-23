
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle, CreditCard, Wallet, Trash2 } from "lucide-react";
import { AddWalletDialog } from "./AddWalletDialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

const wallets = [
  {
    id: 1,
    name: "Nubank",
    balance: 2500,
    limit: 5000,
    type: "credit-card",
    color: "#8A05BE",
    number: "**** **** **** 1234",
  },
  {
    id: 2,
    name: "Itaú",
    balance: 3500,
    limit: 3500,
    type: "debit-card",
    color: "#EC7000",
    number: "**** **** **** 5678",
  },
  {
    id: 3,
    name: "C6 Bank",
    balance: 1200,
    limit: 3000,
    type: "credit-card",
    color: "#222222",
    number: "**** **** **** 9012",
  },
  {
    id: 4,
    name: "Dinheiro",
    balance: 350,
    limit: 350,
    type: "cash",
    color: "#2A9D8F",
    number: "",
  },
];

export const WalletPage = () => {
  const [isAddWalletOpen, setIsAddWalletOpen] = useState(false);

  const handleDeleteWallet = (id: number) => {
    // Aqui seria a lógica para excluir carteira no Supabase
    toast({
      title: "Carteira excluída",
      description: "A carteira foi excluída com sucesso.",
    });
  };

  return (
    <div className="space-y-8 pb-16 md:pb-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Minhas Carteiras</h1>
          <p className="text-muted-foreground">
            Gerencie seus cartões e contas para controlar melhor seus gastos.
          </p>
        </div>
        <Button onClick={() => setIsAddWalletOpen(true)}>
          <PlusCircle className="h-4 w-4 mr-2" />
          Nova Carteira
        </Button>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="all">Todas</TabsTrigger>
          <TabsTrigger value="credit">Cartões de Crédito</TabsTrigger>
          <TabsTrigger value="debit">Cartões de Débito/Outros</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {wallets.map((wallet) => (
              <Card key={wallet.id} className="overflow-hidden card-hover">
                <div
                  className="h-2"
                  style={{ backgroundColor: wallet.color }}
                ></div>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-xl font-bold">{wallet.name}</CardTitle>
                  {wallet.type === "credit-card" || wallet.type === "debit-card" ? (
                    <CreditCard
                      className="h-5 w-5"
                      style={{ color: wallet.color }}
                    />
                  ) : (
                    <Wallet
                      className="h-5 w-5"
                      style={{ color: wallet.color }}
                    />
                  )}
                </CardHeader>
                <CardContent>
                  {wallet.number && (
                    <p className="text-sm text-muted-foreground mb-4">
                      {wallet.number}
                    </p>
                  )}
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-muted-foreground">Saldo</p>
                      <p className="text-2xl font-bold">
                        R$ {wallet.balance.toFixed(2)}
                      </p>
                    </div>
                    {wallet.type === "credit-card" && (
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Limite</p>
                        <p className="text-xl font-medium">
                          R$ {wallet.limit.toFixed(2)}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="mt-4 pt-4 border-t border-border flex justify-end">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteWallet(wallet.id)}
                      className="text-vermelho hover:text-vermelho hover:bg-vermelho/10"
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Excluir
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="credit" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {wallets
              .filter((wallet) => wallet.type === "credit-card")
              .map((wallet) => (
                <Card key={wallet.id} className="overflow-hidden card-hover">
                  <div
                    className="h-2"
                    style={{ backgroundColor: wallet.color }}
                  ></div>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-xl font-bold">{wallet.name}</CardTitle>
                    <CreditCard
                      className="h-5 w-5"
                      style={{ color: wallet.color }}
                    />
                  </CardHeader>
                  <CardContent>
                    {wallet.number && (
                      <p className="text-sm text-muted-foreground mb-4">
                        {wallet.number}
                      </p>
                    )}
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-muted-foreground">Saldo</p>
                        <p className="text-2xl font-bold">
                          R$ {wallet.balance.toFixed(2)}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Limite</p>
                        <p className="text-xl font-medium">
                          R$ {wallet.limit.toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-border flex justify-end">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteWallet(wallet.id)}
                        className="text-vermelho hover:text-vermelho hover:bg-vermelho/10"
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Excluir
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="debit" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {wallets
              .filter(
                (wallet) => wallet.type === "debit-card" || wallet.type === "cash"
              )
              .map((wallet) => (
                <Card key={wallet.id} className="overflow-hidden card-hover">
                  <div
                    className="h-2"
                    style={{ backgroundColor: wallet.color }}
                  ></div>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-xl font-bold">{wallet.name}</CardTitle>
                    {wallet.type === "debit-card" ? (
                      <CreditCard
                        className="h-5 w-5"
                        style={{ color: wallet.color }}
                      />
                    ) : (
                      <Wallet
                        className="h-5 w-5"
                        style={{ color: wallet.color }}
                      />
                    )}
                  </CardHeader>
                  <CardContent>
                    {wallet.number && (
                      <p className="text-sm text-muted-foreground mb-4">
                        {wallet.number}
                      </p>
                    )}
                    <div>
                      <p className="text-sm text-muted-foreground">Saldo</p>
                      <p className="text-2xl font-bold">
                        R$ {wallet.balance.toFixed(2)}
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-border flex justify-end">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteWallet(wallet.id)}
                        className="text-vermelho hover:text-vermelho hover:bg-vermelho/10"
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Excluir
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>

      <AddWalletDialog open={isAddWalletOpen} onOpenChange={setIsAddWalletOpen} />
    </div>
  );
};

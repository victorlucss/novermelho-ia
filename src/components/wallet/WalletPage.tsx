
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle, CreditCard, Wallet, Trash2, Loader2 } from "lucide-react";
import { AddWalletDialog } from "./AddWalletDialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface WalletType {
  id: string;
  name: string;
  balance: number;
  limit_amount: number | null;
  type: string;
  color: string;
  card_number: string | null;
}

export const WalletPage = () => {
  const [isAddWalletOpen, setIsAddWalletOpen] = useState(false);
  const [wallets, setWallets] = useState<WalletType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState<string | null>(null);

  const fetchWallets = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('wallets')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Error fetching wallets:', error);
        toast.error("Erro ao carregar carteiras", {
          description: error.message,
        });
      } else {
        setWallets(data || []);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error("Erro ao carregar carteiras");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWallets();
  }, []);

  const handleDeleteWallet = async (id: string) => {
    try {
      setIsDeleting(id);
      const { error } = await supabase
        .from('wallets')
        .delete()
        .eq('id', id);
      
      if (error) {
        console.error('Error deleting wallet:', error);
        toast.error("Erro ao excluir carteira", {
          description: error.message,
        });
      } else {
        setWallets(wallets.filter(wallet => wallet.id !== id));
        toast.success("Carteira excluída", {
          description: "A carteira foi excluída com sucesso.",
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error("Erro ao excluir carteira");
    } finally {
      setIsDeleting(null);
    }
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

      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      ) : (
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="all">Todas</TabsTrigger>
            <TabsTrigger value="credit">Cartões de Crédito</TabsTrigger>
            <TabsTrigger value="debit">Cartões de Débito/Outros</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            {wallets.length === 0 ? (
              <div className="text-center py-12 border border-dashed rounded-lg">
                <p className="text-muted-foreground mb-4">Nenhuma carteira cadastrada</p>
                <Button onClick={() => setIsAddWalletOpen(true)}>
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Adicionar Carteira
                </Button>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {wallets.map((wallet) => (
                  <Card key={wallet.id} className="overflow-hidden">
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
                      {wallet.card_number && (
                        <p className="text-sm text-muted-foreground mb-4">
                          {wallet.card_number}
                        </p>
                      )}
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-muted-foreground">Saldo</p>
                          <p className="text-2xl font-bold">
                            R$ {wallet.balance.toFixed(2)}
                          </p>
                        </div>
                        {wallet.type === "credit-card" && wallet.limit_amount !== null && (
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">Limite</p>
                            <p className="text-xl font-medium">
                              R$ {wallet.limit_amount.toFixed(2)}
                            </p>
                          </div>
                        )}
                      </div>
                      <div className="mt-4 pt-4 border-t border-border flex justify-end">
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-vermelho hover:text-vermelho hover:bg-vermelho/10"
                              disabled={isDeleting === wallet.id}
                            >
                              {isDeleting === wallet.id ? (
                                <Loader2 className="h-4 w-4 mr-1 animate-spin" />
                              ) : (
                                <Trash2 className="h-4 w-4 mr-1" />
                              )}
                              Excluir
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Excluir carteira</AlertDialogTitle>
                              <AlertDialogDescription>
                                Tem certeza que deseja excluir a carteira "{wallet.name}"? Esta ação não pode ser desfeita.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancelar</AlertDialogCancel>
                              <AlertDialogAction 
                                onClick={() => handleDeleteWallet(wallet.id)}
                                className="bg-vermelho hover:bg-vermelho/90"
                              >
                                Excluir
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="credit" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {wallets
                .filter((wallet) => wallet.type === "credit-card")
                .map((wallet) => (
                  <Card key={wallet.id} className="overflow-hidden">
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
                      {wallet.card_number && (
                        <p className="text-sm text-muted-foreground mb-4">
                          {wallet.card_number}
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
                            R$ {wallet.limit_amount?.toFixed(2) || "0.00"}
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-border flex justify-end">
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-vermelho hover:text-vermelho hover:bg-vermelho/10"
                              disabled={isDeleting === wallet.id}
                            >
                              {isDeleting === wallet.id ? (
                                <Loader2 className="h-4 w-4 mr-1 animate-spin" />
                              ) : (
                                <Trash2 className="h-4 w-4 mr-1" />
                              )}
                              Excluir
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Excluir carteira</AlertDialogTitle>
                              <AlertDialogDescription>
                                Tem certeza que deseja excluir a carteira "{wallet.name}"? Esta ação não pode ser desfeita.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancelar</AlertDialogCancel>
                              <AlertDialogAction 
                                onClick={() => handleDeleteWallet(wallet.id)}
                                className="bg-vermelho hover:bg-vermelho/90"
                              >
                                Excluir
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
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
                  <Card key={wallet.id} className="overflow-hidden">
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
                      {wallet.card_number && (
                        <p className="text-sm text-muted-foreground mb-4">
                          {wallet.card_number}
                        </p>
                      )}
                      <div>
                        <p className="text-sm text-muted-foreground">Saldo</p>
                        <p className="text-2xl font-bold">
                          R$ {wallet.balance.toFixed(2)}
                        </p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-border flex justify-end">
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-vermelho hover:text-vermelho hover:bg-vermelho/10"
                              disabled={isDeleting === wallet.id}
                            >
                              {isDeleting === wallet.id ? (
                                <Loader2 className="h-4 w-4 mr-1 animate-spin" />
                              ) : (
                                <Trash2 className="h-4 w-4 mr-1" />
                              )}
                              Excluir
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Excluir carteira</AlertDialogTitle>
                              <AlertDialogDescription>
                                Tem certeza que deseja excluir a carteira "{wallet.name}"? Esta ação não pode ser desfeita.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancelar</AlertDialogCancel>
                              <AlertDialogAction 
                                onClick={() => handleDeleteWallet(wallet.id)}
                                className="bg-vermelho hover:bg-vermelho/90"
                              >
                                Excluir
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      )}

      <AddWalletDialog 
        open={isAddWalletOpen} 
        onOpenChange={setIsAddWalletOpen} 
        onSuccess={fetchWallets}
      />
    </div>
  );
};

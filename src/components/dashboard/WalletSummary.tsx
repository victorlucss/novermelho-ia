
import React, { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { PlusCircle, Wallet, CreditCard, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

interface WalletType {
  id: string;
  name: string;
  balance: number;
  limit_amount: number | null;
  type: string;
  color: string;
  card_number: string | null;
}

export const WalletSummary = () => {
  const [wallets, setWallets] = useState<WalletType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWallets = async () => {
      try {
        const { data, error } = await supabase
          .from('wallets')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (error) {
          console.error('Error fetching wallets:', error);
        } else {
          setWallets(data || []);
        }
      } catch (error) {
        console.error('Error fetching wallets:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWallets();
  }, []);

  const handleAddWallet = () => {
    navigate('/carteiras');
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="border border-border rounded-lg p-4 animate-pulse">
          <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
          <div className="h-6 bg-muted rounded w-1/2"></div>
        </div>
        <div className="border border-border rounded-lg p-4 animate-pulse">
          <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
          <div className="h-6 bg-muted rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  if (wallets.length === 0) {
    return (
      <div className="space-y-4">
        <div className="border border-border rounded-lg p-6 text-center">
          <p className="text-muted-foreground mb-4">Nenhuma carteira cadastrada</p>
          <Button
            variant="outline"
            className="w-full border-dashed"
            onClick={handleAddWallet}
          >
            <PlusCircle className="h-4 w-4 mr-2" />
            Adicionar Carteira
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {wallets.slice(0, 4).map((wallet) => (
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
                  ? `Limite: R$ ${wallet.limit_amount?.toFixed(2) || 0}`
                  : "Saldo disponível"}
              </p>
            </div>
          </div>
          {wallet.type === "credit-card" && wallet.limit_amount && (
            <Progress
              value={(wallet.balance / wallet.limit_amount) * 100}
              className="h-2"
              indicatorClassName={(wallet.balance / wallet.limit_amount) > 0.7 ? "bg-vermelho" : ""}
            />
          )}
        </div>
      ))}
      
      {wallets.length > 0 && (
        <Button
          variant="outline"
          className="w-full border-dashed"
          onClick={handleAddWallet}
        >
          <PlusCircle className="h-4 w-4 mr-2" />
          Gerenciar Carteiras
        </Button>
      )}
    </div>
  );
};

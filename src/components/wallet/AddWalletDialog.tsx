
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface AddWalletDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

export const AddWalletDialog = ({
  open,
  onOpenChange,
  onSuccess
}: AddWalletDialogProps) => {
  const [walletType, setWalletType] = useState<
    "credit-card" | "debit-card" | "cash"
  >("credit-card");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [balance, setBalance] = useState("");
  const [limit, setLimit] = useState("");
  const [color, setColor] = useState("#E63946");

  const resetForm = () => {
    setWalletType("credit-card");
    setName("");
    setCardNumber("");
    setBalance("");
    setLimit("");
    setColor("#E63946");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase
        .from('wallets')
        .insert({
          name: name,
          balance: parseFloat(balance) || 0,
          limit_amount: walletType === "credit-card" ? (parseFloat(limit) || 0) : null,
          type: walletType,
          color: color,
          card_number: walletType !== "cash" ? cardNumber : null,
        })
        .select();
      
      if (error) {
        console.error('Error adding wallet:', error);
        toast.error("Erro ao adicionar carteira", {
          description: error.message,
        });
      } else {
        toast.success("Carteira adicionada", {
          description: "Sua nova carteira foi registrada com sucesso.",
        });
        resetForm();
        onOpenChange(false);
        if (onSuccess) onSuccess();
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error("Erro ao adicionar carteira");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] glass">
        <DialogHeader>
          <DialogTitle>Adicionar Nova Carteira</DialogTitle>
          <DialogDescription>
            Adicione informações sobre seu cartão ou conta.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Nome
              </Label>
              <Input
                id="name"
                placeholder="Ex: Nubank, Itaú, Dinheiro..."
                className="col-span-3"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="type" className="text-right">
                Tipo
              </Label>
              <Select
                value={walletType}
                onValueChange={(value) =>
                  setWalletType(value as "credit-card" | "debit-card" | "cash")
                }
                required
              >
                <SelectTrigger className="col-span-3" id="type">
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="credit-card">Cartão de Crédito</SelectItem>
                  <SelectItem value="debit-card">Cartão de Débito</SelectItem>
                  <SelectItem value="cash">Dinheiro / Outros</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {walletType !== "cash" && (
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="cardNumber" className="text-right">
                  Número
                </Label>
                <Input
                  id="cardNumber"
                  placeholder="**** **** **** ****"
                  className="col-span-3"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
              </div>
            )}

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="balance" className="text-right">
                Saldo (R$)
              </Label>
              <Input
                id="balance"
                type="number"
                placeholder="0,00"
                step="0.01"
                min="0"
                className="col-span-3"
                required
                value={balance}
                onChange={(e) => setBalance(e.target.value)}
              />
            </div>

            {walletType === "credit-card" && (
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="limit" className="text-right">
                  Limite (R$)
                </Label>
                <Input
                  id="limit"
                  type="number"
                  placeholder="0,00"
                  step="0.01"
                  min="0"
                  className="col-span-3"
                  required
                  value={limit}
                  onChange={(e) => setLimit(e.target.value)}
                />
              </div>
            )}

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="color" className="text-right">
                Cor
              </Label>
              <div className="col-span-3 flex space-x-2">
                <Input 
                  id="color" 
                  type="color" 
                  className="w-12 h-10 p-1" 
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />
                <Input
                  placeholder="Código de cor (Ex: #E63946)"
                  className="flex-1"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Salvando..." : "Salvar"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

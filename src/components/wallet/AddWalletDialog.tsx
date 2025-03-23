
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
import { toast } from "@/hooks/use-toast";

interface AddWalletDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AddWalletDialog = ({
  open,
  onOpenChange,
}: AddWalletDialogProps) => {
  const [walletType, setWalletType] = useState<
    "credit-card" | "debit-card" | "cash"
  >("credit-card");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Aqui seria a lógica para salvar a carteira no Supabase
    toast({
      title: "Carteira adicionada",
      description: "Sua nova carteira foi registrada com sucesso.",
    });
    
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] glass animate-scale-in">
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
                />
              </div>
            )}

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="color" className="text-right">
                Cor
              </Label>
              <div className="col-span-3 flex space-x-2">
                <Input id="color" type="color" className="w-12 h-10 p-1" defaultValue="#E63946" />
                <Input
                  placeholder="Código de cor (Ex: #E63946)"
                  className="flex-1"
                  defaultValue="#E63946"
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Salvar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

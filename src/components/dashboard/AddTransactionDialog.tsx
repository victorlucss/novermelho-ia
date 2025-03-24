
import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface AddTransactionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: "despesa" | "receita";
}

const expenseCategories = [
  "Moradia",
  "Alimentação",
  "Transporte",
  "Lazer",
  "Saúde",
  "Educação",
  "Serviços",
  "Outros",
];

const incomeCategories = [
  "Salário",
  "Freelance",
  "Investimentos",
  "Presentes",
  "Outros",
];

interface WalletOption {
  id: string;
  name: string;
}

export const AddTransactionDialog = ({
  open,
  onOpenChange,
  type,
}: AddTransactionDialogProps) => {
  const [date, setDate] = useState<Date>(new Date());
  const [isRecurrent, setIsRecurrent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [wallets, setWallets] = useState<WalletOption[]>([]);
  const [isLoadingWallets, setIsLoadingWallets] = useState(true);
  
  // Form state
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [walletId, setWalletId] = useState("");

  useEffect(() => {
    const fetchWallets = async () => {
      try {
        setIsLoadingWallets(true);
        const { data, error } = await supabase
          .from('wallets')
          .select('id, name')
          .order('name', { ascending: true });
        
        if (error) {
          console.error('Error fetching wallets:', error);
          toast({
            title: "Erro ao carregar carteiras",
            description: error.message,
            variant: "destructive",
          });
        } else {
          setWallets(data || []);
        }
      } catch (error) {
        console.error('Error fetching wallets:', error);
      } finally {
        setIsLoadingWallets(false);
      }
    };

    if (open) {
      fetchWallets();
      
      // Reset form
      setName("");
      setAmount("");
      setCategory("");
      setWalletId("");
      setDate(new Date());
      setIsRecurrent(false);
    }
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !amount || !category || !walletId) {
      toast({
        title: "Dados incompletos",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        throw new Error('User not authenticated');
      }

      const { data, error } = await supabase
        .from('transactions')
        .insert({
          name: name,
          amount: parseFloat(amount),
          category: category,
          date: format(date, 'yyyy-MM-dd'),
          type: type === "despesa" ? "expense" : "income",
          recurrent: isRecurrent,
          wallet_id: walletId,
          user_id: user.id
        })
        .select();
      
      if (error) {
        console.error('Error adding transaction:', error);
        toast({
          title: "Erro ao adicionar transação",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: `${type === "despesa" ? "Despesa" : "Receita"} adicionada`,
          description: "A transação foi registrada com sucesso.",
        });
        
        onOpenChange(false);
      }
    } catch (error) {
      console.error('Error adding transaction:', error);
      toast({
        title: "Erro ao adicionar transação",
        description: "Ocorreu um erro ao registrar a transação.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {type === "despesa" ? "Adicionar Despesa" : "Adicionar Receita"}
          </DialogTitle>
          <DialogDescription>
            Preencha os detalhes da {type === "despesa" ? "despesa" : "receita"} abaixo.
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
                placeholder={type === "despesa" ? "Aluguel, Mercado..." : "Salário, Freelance..."}
                className="col-span-3"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="value" className="text-right">
                Valor (R$)
              </Label>
              <Input
                id="value"
                type="number"
                placeholder="0,00"
                step="0.01"
                min="0"
                className="col-span-3"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Categoria
              </Label>
              <Select 
                value={category} 
                onValueChange={setCategory}
                required
              >
                <SelectTrigger className="col-span-3" id="category">
                  <SelectValue placeholder="Selecione uma categoria" />
                </SelectTrigger>
                <SelectContent>
                  {(type === "despesa" ? expenseCategories : incomeCategories).map(
                    (cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    )
                  )}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="wallet" className="text-right">
                Carteira
              </Label>
              {isLoadingWallets ? (
                <div className="col-span-3 flex items-center space-x-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Carregando carteiras...</span>
                </div>
              ) : (
                <Select
                  value={walletId}
                  onValueChange={setWalletId}
                  required
                >
                  <SelectTrigger className="col-span-3" id="wallet">
                    <SelectValue placeholder="Selecione uma carteira" />
                  </SelectTrigger>
                  <SelectContent>
                    {wallets.map((wallet) => (
                      <SelectItem key={wallet.id} value={wallet.id}>
                        {wallet.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="date" className="text-right">
                Data
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "col-span-3 w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP", { locale: ptBR }) : <span>Selecione uma data</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(date) => date && setDate(date)}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="recurrent" className="text-right">
                Recorrente
              </Label>
              <div className="flex items-center space-x-2 col-span-3">
                <Switch
                  id="recurrent"
                  checked={isRecurrent}
                  onCheckedChange={setIsRecurrent}
                />
                <Label htmlFor="recurrent" className="font-normal">
                  {isRecurrent ? "Sim" : "Não"}
                </Label>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              className={cn(
                type === "despesa" ? "bg-vermelho hover:bg-vermelho/90" : "bg-verde hover:bg-verde/90"
              )}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Salvando...
                </>
              ) : (
                "Salvar"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

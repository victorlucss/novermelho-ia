import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Search, Plus, Users, DollarSign, UserPlus, Loader2 } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { SharedExpense, SharedExpenseParticipant } from "@/types/supabase";

type User = {
  id: string;
  email: string;
  full_name?: string;
};

type SharedExpenseWithParticipants = {
  id: string;
  name: string;
  amount: number;
  category: string;
  date: string;
  created_by: string;
  participants: {
    user_id: string;
    email: string;
    full_name?: string;
    paid: boolean;
  }[];
};

export const SharedExpensesPage = () => {
  const [searchEmail, setSearchEmail] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [userResults, setUserResults] = useState<User[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
  const [sharedExpenses, setSharedExpenses] = useState<SharedExpenseWithParticipants[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAddExpenseOpen, setIsAddExpenseOpen] = useState(false);
  
  // New expense form state
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseCategory, setExpenseCategory] = useState("Outros");
  const [expenseDate, setExpenseDate] = useState(new Date().toISOString().split('T')[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch shared expenses
  useEffect(() => {
    const fetchSharedExpenses = async () => {
      try {
        setIsLoading(true);
        const { data: { user } } = await supabase.auth.getUser();
        
        if (!user) {
          toast({
            variant: "destructive",
            title: "Não autorizado",
            description: "Você precisa estar logado para ver despesas compartilhadas."
          });
          return;
        }
        
        // Get all shared expenses where the current user is a participant
        const { data, error } = await supabase
          .from('shared_expenses_participants')
          .select(`
            shared_expense:shared_expenses(
              id,
              name,
              amount,
              category,
              date,
              created_by,
              participants:shared_expenses_participants(
                user_id,
                paid,
                users:user_profiles(email, full_name)
              )
            )
          `)
          .eq('user_id', user.id);
          
        if (error) throw error;
        
        // Transform the data into the format we need
        const formattedExpenses: SharedExpenseWithParticipants[] = [];
        
        if (data) {
          data.forEach((item: any) => {
            if (item.shared_expense) {
              const expense = item.shared_expense;
              const participants = expense.participants?.map((participant: any) => ({
                user_id: participant.user_id,
                paid: participant.paid || false,
                email: participant.users?.email || '',
                full_name: participant.users?.full_name
              })) || [];
              
              formattedExpenses.push({
                id: expense.id,
                name: expense.name,
                amount: expense.amount,
                category: expense.category,
                date: expense.date,
                created_by: expense.created_by,
                participants
              });
            }
          });
        }
        
        setSharedExpenses(formattedExpenses);
      } catch (error) {
        console.error('Error fetching shared expenses:', error);
        toast({
          variant: "destructive",
          title: "Erro",
          description: "Não foi possível carregar as despesas compartilhadas."
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchSharedExpenses();
  }, []);

  // Search for users
  const handleUserSearch = async () => {
    if (!searchEmail || searchEmail.length < 3) return;
    
    try {
      setIsSearching(true);
      
      // Check if the email is already in selectedUsers
      if (selectedUsers.some(user => user.email.toLowerCase() === searchEmail.toLowerCase())) {
        toast({
          title: "Usuário já adicionado",
          description: "Este usuário já está na lista."
        });
        return;
      }
      
      // Search for user by email
      const { data, error } = await supabase
        .from('user_profiles')
        .select('id, email, full_name')
        .ilike('email', `%${searchEmail}%`)
        .limit(5);
        
      if (error) throw error;
      
      if (data) {
        setUserResults(data as User[]);
      }
    } catch (error) {
      console.error('Error searching for users:', error);
      toast({
        variant: "destructive",
        title: "Erro na busca",
        description: "Não foi possível buscar usuários."
      });
    } finally {
      setIsSearching(false);
    }
  };

  // Add user to selected users
  const addUserToSelection = (user: User) => {
    setSelectedUsers([...selectedUsers, user]);
    setUserResults([]);
    setSearchEmail("");
  };

  // Remove user from selected users
  const removeUserFromSelection = (userId: string) => {
    setSelectedUsers(selectedUsers.filter(user => user.id !== userId));
  };

  // Create shared expense
  const handleCreateSharedExpense = async () => {
    if (!expenseName || !expenseAmount || selectedUsers.length === 0) {
      toast({
        variant: "destructive",
        title: "Formulário incompleto",
        description: "Preencha todos os campos e adicione pelo menos um participante."
      });
      return;
    }

    try {
      setIsSubmitting(true);
      
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Usuário não autenticado");
      
      // Create the shared expense
      const { data: expenseData, error: expenseError } = await supabase
        .from('shared_expenses')
        .insert({
          name: expenseName,
          amount: parseFloat(expenseAmount),
          category: expenseCategory,
          date: expenseDate,
          created_by: user.id,
        })
        .select('id')
        .single();
        
      if (expenseError) throw expenseError;
      
      if (!expenseData) throw new Error("Falha ao criar despesa");
      
      // Add the current user as a participant
      const { data: userData } = await supabase
        .from('user_profiles')
        .select('email, full_name')
        .eq('id', user.id)
        .single();
      
      // Prepare participants data including the current user
      const participants = [
        {
          shared_expense_id: expenseData.id,
          user_id: user.id,
          paid: true, // Creator has already paid
        },
        ...selectedUsers.map(u => ({
          shared_expense_id: expenseData.id,
          user_id: u.id,
          paid: false,
        }))
      ];
      
      // Insert all participants
      const { error: participantsError } = await supabase
        .from('shared_expenses_participants')
        .insert(participants);
        
      if (participantsError) throw participantsError;
      
      toast({
        title: "Despesa compartilhada criada",
        description: "A despesa foi compartilhada com sucesso."
      });
      
      // Reset form
      setExpenseName("");
      setExpenseAmount("");
      setExpenseCategory("Outros");
      setExpenseDate(new Date().toISOString().split('T')[0]);
      setSelectedUsers([]);
      setIsAddExpenseOpen(false);
      
      // Refresh expenses list
      // For simplicity, we'll just add the new expense to the state
      const newExpense: SharedExpenseWithParticipants = {
        id: expenseData.id,
        name: expenseName,
        amount: parseFloat(expenseAmount),
        category: expenseCategory,
        date: expenseDate,
        created_by: user.id,
        participants: [
          {
            user_id: user.id,
            paid: true,
            email: userData?.email || user.email || '',
            full_name: userData?.full_name
          },
          ...selectedUsers.map(u => ({
            user_id: u.id,
            paid: false,
            email: u.email,
            full_name: u.full_name
          }))
        ]
      };
      
      setSharedExpenses([newExpense, ...sharedExpenses]);
      
    } catch (error) {
      console.error('Error creating shared expense:', error);
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Não foi possível criar a despesa compartilhada."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Mark expense as paid
  const markAsPaid = async (expenseId: string, userId: string) => {
    try {
      const { error } = await supabase
        .from('shared_expenses_participants')
        .update({ paid: true })
        .eq('shared_expense_id', expenseId)
        .eq('user_id', userId);
        
      if (error) throw error;
      
      // Update local state
      setSharedExpenses(sharedExpenses.map(expense => {
        if (expense.id === expenseId) {
          return {
            ...expense,
            participants: expense.participants.map(participant => {
              if (participant.user_id === userId) {
                return { ...participant, paid: true };
              }
              return participant;
            })
          };
        }
        return expense;
      }));
      
      toast({
        title: "Marcado como pago",
        description: "O pagamento foi confirmado com sucesso."
      });
      
    } catch (error) {
      console.error('Error marking expense as paid:', error);
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Não foi possível marcar como pago."
      });
    }
  };

  return (
    <div className="space-y-8 pb-16 md:pb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Despesas Compartilhadas</h1>
          <p className="text-muted-foreground">
            Gerencie despesas compartilhadas com amigos e familiares
          </p>
        </div>
        <Dialog open={isAddExpenseOpen} onOpenChange={setIsAddExpenseOpen}>
          <DialogTrigger asChild>
            <Button className="bg-vermelho hover:bg-red-700">
              <Plus className="h-4 w-4 mr-2" />
              Nova Despesa Compartilhada
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Criar Despesa Compartilhada</DialogTitle>
              <DialogDescription>
                Adicione uma nova despesa para compartilhar com outras pessoas.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome da despesa</Label>
                <Input 
                  id="name" 
                  placeholder="Almoço, Viagem, etc." 
                  value={expenseName}
                  onChange={(e) => setExpenseName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount">Valor (R$)</Label>
                <Input 
                  id="amount" 
                  type="number"
                  step="0.01"
                  min="0.01"
                  placeholder="0.00" 
                  value={expenseAmount}
                  onChange={(e) => setExpenseAmount(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Categoria</Label>
                <Select value={expenseCategory} onValueChange={setExpenseCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Alimentação">Alimentação</SelectItem>
                    <SelectItem value="Transporte">Transporte</SelectItem>
                    <SelectItem value="Moradia">Moradia</SelectItem>
                    <SelectItem value="Lazer">Lazer</SelectItem>
                    <SelectItem value="Viagem">Viagem</SelectItem>
                    <SelectItem value="Outros">Outros</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Data</Label>
                <Input 
                  id="date" 
                  type="date" 
                  value={expenseDate}
                  onChange={(e) => setExpenseDate(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Participantes</Label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Buscar por email"
                    value={searchEmail}
                    onChange={(e) => setSearchEmail(e.target.value)}
                    className="flex-1"
                  />
                  <Button 
                    type="button" 
                    size="icon" 
                    variant="outline" 
                    onClick={handleUserSearch}
                    disabled={isSearching || searchEmail.length < 3}
                  >
                    {isSearching ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
                  </Button>
                </div>
                {userResults.length > 0 && (
                  <div className="mt-2 border rounded-md">
                    {userResults.map(user => (
                      <div 
                        key={user.id} 
                        className="p-2 hover:bg-accent flex justify-between items-center cursor-pointer"
                        onClick={() => addUserToSelection(user)}
                      >
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>{(user.full_name || user.email).charAt(0).toUpperCase()}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">{user.full_name || 'Usuário'}</p>
                            <p className="text-xs text-muted-foreground">{user.email}</p>
                          </div>
                        </div>
                        <UserPlus className="h-4 w-4 text-muted-foreground" />
                      </div>
                    ))}
                  </div>
                )}
                {selectedUsers.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {selectedUsers.map(user => (
                      <Badge 
                        key={user.id} 
                        variant="secondary"
                        className="flex items-center gap-1 py-1"
                      >
                        {user.full_name || user.email}
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-4 w-4 ml-1 hover:bg-destructive/20 rounded-full p-0"
                          onClick={() => removeUserFromSelection(user.id)}
                        >
                          ×
                        </Button>
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddExpenseOpen(false)}>Cancelar</Button>
              <Button 
                className="bg-vermelho hover:bg-red-700"
                onClick={handleCreateSharedExpense}
                disabled={isSubmitting}
              >
                {isSubmitting ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Plus className="h-4 w-4 mr-2" />}
                Criar Despesa
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-40">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      ) : sharedExpenses.length === 0 ? (
        <Card className="text-center py-12">
          <CardContent>
            <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Sem despesas compartilhadas</h3>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">
              Você ainda não tem despesas compartilhadas. Crie uma nova despesa para compartilhar com amigos e familiares.
            </p>
            <Button 
              onClick={() => setIsAddExpenseOpen(true)}
              className="bg-vermelho hover:bg-red-700"
            >
              <Plus className="h-4 w-4 mr-2" />
              Nova Despesa Compartilhada
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sharedExpenses.map((expense) => (
            <Card key={expense.id} className="overflow-hidden glass card-hover">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{expense.name}</CardTitle>
                    <CardDescription>{expense.category} • {new Date(expense.date).toLocaleDateString('pt-BR')}</CardDescription>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-vermelho">R$ {expense.amount.toFixed(2)}</p>
                    <p className="text-xs text-muted-foreground">
                      R$ {(expense.amount / expense.participants.length).toFixed(2)} por pessoa
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <Label className="text-sm font-medium mb-2 block">Participantes</Label>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {expense.participants.map((participant) => (
                    <div key={participant.user_id} className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>
                            {(participant.full_name || participant.email).charAt(0).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{participant.full_name || 'Usuário'}</p>
                          <p className="text-xs text-muted-foreground">{participant.email}</p>
                        </div>
                      </div>
                      {participant.paid ? (
                        <Badge variant="outline" className="bg-success/10 text-success">Pago</Badge>
                      ) : (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="h-7 text-xs"
                          onClick={() => markAsPaid(expense.id, participant.user_id)}
                        >
                          Marcar como pago
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-2">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground w-full">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Detalhes da despesa
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

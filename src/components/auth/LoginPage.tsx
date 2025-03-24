import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { toast } from "@/hooks/use-toast";
import { AlertCircle, Mail, Lock, User, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLogin, setIsLogin] = useState(true);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      toast({
        title: "Login realizado com sucesso",
        description: "Bem-vindo de volta ao NoVermelho!",
      });

      navigate("/");
    } catch (error: any) {
      setError(error.message || "Falha ao fazer login. Tente novamente.");
      toast({
        variant: "destructive",
        title: "Erro de login",
        description: error.message || "Falha ao fazer login. Tente novamente.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (password !== confirmPassword) {
      setError("As senhas não coincidem");
      setIsLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) throw error;

      toast({
        title: "Cadastro realizado com sucesso",
        description: "Verifique seu email para confirmar sua conta.",
      });
    } catch (error: any) {
      setError(error.message || "Falha ao criar conta. Tente novamente.");
      toast({
        variant: "destructive",
        title: "Erro de cadastro",
        description: error.message || "Falha ao criar conta. Tente novamente.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setError(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-background via-accent/20 to-background bg-[url('/images/finance-pattern.svg')] bg-opacity-5">
      <div className="w-full max-w-md animate-fade-in-up">
        <Card className="glass border-0 shadow-2xl backdrop-blur-sm overflow-hidden">
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={toggleAuthMode}
              className="text-sm text-vermelho hover:text-red-700 flex items-center gap-1 transition-all duration-300"
            >
              {isLogin ? (
                <>
                  Criar conta <ChevronRight className="h-4 w-4" />
                </>
              ) : (
                <>
                  <ChevronLeft className="h-4 w-4" /> Voltar para login
                </>
              )}
            </button>
          </div>

          <CardHeader className="space-y-3 pt-10 pb-8">
            <div className="flex justify-center mb-8">
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-vermelho to-red-700 flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                <span className="text-white text-3xl font-bold">NV</span>
              </div>
            </div>
            <CardTitle className="text-3xl font-bold text-center text-vermelho">
              {isLogin ? "Bem-vindo de volta" : "Crie sua conta"}
            </CardTitle>
            <CardDescription className="text-center text-base px-6">
              {isLogin
                ? "Entre para gerenciar suas finanças com o NoVermelho"
                : "Comece a controlar suas despesas hoje mesmo"}
            </CardDescription>
          </CardHeader>

          {isLogin ? (
            <form onSubmit={handleSignIn}>
              <CardContent className="space-y-6 px-8">
                {error && (
                  <Alert variant="destructive" className="border-red-300 bg-red-50 text-red-800 animate-pulse">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <div className="space-y-3">
                  <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="pl-12 py-6 rounded-xl border-muted focus:border-vermelho focus:ring-vermelho transition-all text-base"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-sm font-medium">Senha</Label>
                    <a href="#" className="text-sm text-vermelho hover:text-red-700 transition-all">
                      Esqueceu a senha?
                    </a>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="pl-12 py-6 rounded-xl border-muted focus:border-vermelho focus:ring-vermelho transition-all text-base"
                    />
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex flex-col space-y-6 px-8 pb-10">
                <Button
                  type="submit"
                  className="w-full font-medium py-7 bg-vermelho hover:bg-red-700 text-white rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-base shadow-md hover:shadow-lg"
                  disabled={isLoading}
                >
                  {isLoading ? "Entrando..." : "Entrar na minha conta"}
                  {!isLoading && <ArrowRight className="h-5 w-5" />}
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  Ao continuar, você concorda com nossos{" "}
                  <a href="https://novermelho.vercel.app/terms" className="underline underline-offset-4 hover:text-vermelho transition-colors">
                    Termos de Serviço
                  </a>{" "}
                  e{" "}
                  <a href="https://novermelho.vercel.app/policy" className="underline underline-offset-4 hover:text-vermelho transition-colors">
                    Política de Privacidade
                  </a>
                  .
                </div>
              </CardFooter>
            </form>
          ) : (
            <form onSubmit={handleSignUp}>
              <CardContent className="space-y-6 px-8">
                {error && (
                  <Alert variant="destructive" className="border-red-300 bg-red-50 text-red-800 animate-pulse">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <div className="space-y-3">
                  <Label htmlFor="email-register" className="text-sm font-medium">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="email-register"
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="pl-12 py-6 rounded-xl border-muted focus:border-vermelho focus:ring-vermelho transition-all text-base"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="password-register" className="text-sm font-medium">Senha</Label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="password-register"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="pl-12 py-6 rounded-xl border-muted focus:border-vermelho focus:ring-vermelho transition-all text-base"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="confirm-password" className="text-sm font-medium">Confirmar Senha</Label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="••••••••"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className="pl-12 py-6 rounded-xl border-muted focus:border-vermelho focus:ring-vermelho transition-all text-base"
                    />
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex flex-col space-y-6 px-8 pb-10">
                <Button
                  type="submit"
                  className="w-full font-medium py-7 bg-vermelho hover:bg-red-700 text-white rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-base shadow-md hover:shadow-lg"
                  disabled={isLoading}
                >
                  {isLoading ? "Criando conta..." : "Criar minha conta"}
                  {!isLoading && <User className="h-5 w-5" />}
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  Ao continuar, você concorda com nossos{" "}
                  <a href="https://novermelho.vercel.app/terms" className="underline underline-offset-4 hover:text-vermelho transition-colors">
                    Termos de Serviço
                  </a>{" "}
                  e{" "}
                  <a href="https://novermelho.vercel.app/terms" className="underline underline-offset-4 hover:text-vermelho transition-colors">
                    Política de Privacidade
                  </a>
                  .
                </div>
              </CardFooter>
            </form>
          )}
        </Card>
      </div>
    </div>
  );
};

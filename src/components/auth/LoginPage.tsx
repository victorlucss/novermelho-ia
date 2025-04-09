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

type AuthMode = "login" | "signup" | "reset";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [authMode, setAuthMode] = useState<AuthMode>("login");
  const [resetSent, setResetSent] = useState(false);

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

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin,
        }
      });

      if (error) throw error;
      
      // Redirect happens automatically
    } catch (error: any) {
      setError(error.message || "Falha ao fazer login com Google. Tente novamente.");
      toast({
        variant: "destructive",
        title: "Erro de login",
        description: error.message || "Falha ao fazer login com Google. Tente novamente.",
      });
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

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) throw error;

      setResetSent(true);
      toast({
        title: "Email enviado",
        description: "Verifique sua caixa de entrada para redefinir sua senha.",
      });
    } catch (error: any) {
      setError(error.message || "Falha ao enviar email de recuperação. Tente novamente.");
      toast({
        variant: "destructive",
        title: "Erro de recuperação",
        description: error.message || "Falha ao enviar email de recuperação. Tente novamente.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-background via-accent/20 to-background bg-[url('/images/finance-pattern.svg')] bg-opacity-5">
      <div className="w-full max-w-md animate-fade-in-up">
        <Card className="glass border-0 shadow-2xl backdrop-blur-sm overflow-hidden">
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={() => {
                setAuthMode(authMode === "login" ? "signup" : "login");
                setError(null);
                setResetSent(false);
              }}
              className="text-sm text-vermelho hover:text-red-700 flex items-center gap-1 transition-all duration-300"
            >
              {authMode === "login" && (
                <>
                  Criar conta <ChevronRight className="h-4 w-4" />
                </>
              )}
              {authMode === "signup" && (
                <>
                  <ChevronLeft className="h-4 w-4" /> Voltar para login
                </>
              )}
              {authMode === "reset" && (
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
              {authMode === "login" && "Bem-vindo de volta"}
              {authMode === "signup" && "Crie sua conta"}
              {authMode === "reset" && "Recuperar senha"}
            </CardTitle>
            <CardDescription className="text-center text-base px-6">
              {authMode === "login" && "Entre para gerenciar suas finanças com o NoVermelho"}
              {authMode === "signup" && "Comece a controlar suas despesas hoje mesmo"}
              {authMode === "reset" && "Digite seu email para recuperar sua senha"}
            </CardDescription>
          </CardHeader>

          {authMode === "login" && (
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
                    <button 
                      type="button" 
                      onClick={() => {
                        setAuthMode("reset");
                        setError(null);
                      }}
                      className="text-sm text-vermelho hover:text-red-700 transition-all"
                    >
                      Esqueceu a senha?
                    </button>
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

                <div className="relative w-full py-2">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">ou</span>
                  </div>
                </div>

                <Button
                  type="button"
                  variant="outline"
                  onClick={handleGoogleSignIn}
                  className="w-full font-medium py-7 border-2 hover:bg-accent/10 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-base"
                  disabled={isLoading}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 488 512" className="h-5 w-5">
                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
                  </svg>
                  Entrar com Google
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
          )}

          {authMode === "signup" && (
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

                <div className="relative w-full py-2">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">ou</span>
                  </div>
                </div>

                <Button
                  type="button"
                  variant="outline"
                  onClick={handleGoogleSignIn}
                  className="w-full font-medium py-7 border-2 hover:bg-accent/10 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-base"
                  disabled={isLoading}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 488 512" className="h-5 w-5">
                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
                  </svg>
                  Entrar com Google
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
          )}

          {authMode === "reset" && (
            <form onSubmit={handlePasswordReset}>
              <CardContent className="space-y-6 px-8">
                {error && (
                  <Alert variant="destructive" className="border-red-300 bg-red-50 text-red-800 animate-pulse">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                {resetSent ? (
                  <Alert className="border-green-300 bg-green-50 text-green-800">
                    <AlertDescription>
                      Email de recuperação enviado. Verifique sua caixa de entrada (e também a pasta de spam).
                    </AlertDescription>
                  </Alert>
                ) : (
                  <div className="space-y-3">
                    <Label htmlFor="email-reset" className="text-sm font-medium">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="email-reset"
                        type="email"
                        placeholder="seu@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="pl-12 py-6 rounded-xl border-muted focus:border-vermelho focus:ring-vermelho transition-all text-base"
                      />
                    </div>
                  </div>
                )}
              </CardContent>

              <CardFooter className="flex flex-col space-y-6 px-8 pb-10">
                {!resetSent && (
                  <Button
                    type="submit"
                    className="w-full font-medium py-7 bg-vermelho hover:bg-red-700 text-white rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-base shadow-md hover:shadow-lg"
                    disabled={isLoading}
                  >
                    {isLoading ? "Enviando..." : "Enviar link de recuperação"}
                    {!isLoading && <ArrowRight className="h-5 w-5" />}
                  </Button>
                )}
              </CardFooter>
            </form>
          )}
        </Card>
      </div>
    </div>
  );
};

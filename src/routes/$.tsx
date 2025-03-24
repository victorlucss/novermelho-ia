
import { Link } from "@remix-run/react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
      <h1 className="text-4xl font-bold mb-4">404 - Página não encontrada</h1>
      <p className="text-lg mb-6">A página que você está procurando não existe.</p>
      <Link to="/" className="text-primary hover:underline">
        Voltar para a página inicial
      </Link>
    </div>
  );
}

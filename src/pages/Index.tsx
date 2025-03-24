
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "~/integrations/supabase/client";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate("/");
      } else {
        navigate("/login");
      }
    });
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Redirecionando...</h1>
        <p className="text-xl text-muted-foreground">Aguarde um momento</p>
      </div>
    </div>
  );
};

export default Index;

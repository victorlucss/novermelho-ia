
import { useEffect } from "react";
import { useNavigate } from "@remix-run/react";
import { LoginPage } from "@/components/auth/LoginPage";
import { supabase } from "@/integrations/supabase/client";

export default function Login() {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check for authentication
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate("/", { replace: true });
      }
    };
    
    checkAuth();
  }, [navigate]);
  
  return <LoginPage />;
}

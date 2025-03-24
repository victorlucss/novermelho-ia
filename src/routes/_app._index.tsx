
import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { DashboardPage } from "@/components/dashboard/DashboardPage";
import { supabase } from "@/integrations/supabase/client";

export default function Index() {
  return <DashboardPage />;
}

import { AppLayout } from "~/components/layout/AppLayout";
import { DashboardPage } from "~/components/dashboard/DashboardPage";

export default function IndexRoute() {
  return (
    <AppLayout>
      <DashboardPage />
    </AppLayout>
  );
} 
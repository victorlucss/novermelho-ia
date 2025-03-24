import * as React from "react";
import { AppLayout } from "~/components/layout/AppLayout";
import { DashboardPage } from "~/components/dashboard/DashboardPage";

export default function DashboardRoute() {
  return (
    <AppLayout>
      <DashboardPage />
    </AppLayout>
  );
} 
import { AppLayout } from "~/components/layout/AppLayout";
import { BudgetPage } from "~/components/budget/BudgetPage";

export default function BudgetRoute() {
  return (
    <AppLayout>
      <BudgetPage />
    </AppLayout>
  );
} 
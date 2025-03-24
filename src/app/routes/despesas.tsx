import { AppLayout } from "~/components/layout/AppLayout";
import { ExpensesPage } from "~/components/expenses/ExpensesPage";

export default function ExpensesRoute() {
  return (
    <AppLayout>
      <ExpensesPage />
    </AppLayout>
  );
} 
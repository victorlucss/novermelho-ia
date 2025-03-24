import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { format } from "date-fns";
import { supabase } from "~/integrations/supabase/client";
import { Loader2 } from "lucide-react";

interface ExpenseSummaryProps {
  selectedDate?: Date;
}

interface ExpenseCategoryData {
  name: string;
  value: number;
  color: string;
}

// Define colors for categories
const categoryColors: Record<string, string> = {
  "Moradia": "#E63946",
  "Alimentação": "#F1C0B9",
  "Transporte": "#A8DADC",
  "Lazer": "#457B9D",
  "Saúde": "#F3722C",
  "Educação": "#F8961E",
  "Serviços": "#577590",
  "Outros": "#1D3557"
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background p-3 border border-border rounded-md shadow-md">
        <p className="font-medium">{`${payload[0].name}`}</p>
        <p className="font-bold text-lg">{`R$ ${payload[0].value.toFixed(2)}`}</p>
      </div>
    );
  }

  return null;
};

export const ExpenseSummary = ({ selectedDate = new Date() }: ExpenseSummaryProps) => {
  const [data, setData] = useState<ExpenseCategoryData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchExpensesByCategory = async () => {
      try {
        setIsLoading(true);
        const currentMonth = format(selectedDate, 'MM');
        const currentYear = format(selectedDate, 'yyyy');
        const startDate = `${currentYear}-${currentMonth}-01`;
        const lastDay = new Date(parseInt(currentYear), parseInt(currentMonth), 0).getDate();
        const endDate = `${currentYear}-${currentMonth}-${lastDay}`;

        const { data, error } = await supabase
          .from('transactions')
          .select('category, amount')
          .eq('type', 'expense')
          .gte('date', startDate)
          .lte('date', endDate);

        if (error) {
          console.error('Error fetching expenses by category:', error);
          return;
        }

        // Group expenses by category
        const categoryMap = new Map<string, number>();

        data.forEach((transaction) => {
          const currentAmount = categoryMap.get(transaction.category) || 0;
          categoryMap.set(transaction.category, currentAmount + parseFloat(String(transaction.amount)));
        });

        // Convert map to array for chart
        const chartData = Array.from(categoryMap.entries()).map(([name, value]) => ({
          name,
          value,
          color: categoryColors[name] || "#1D3557" // Default color if category not in map
        }));

        setData(chartData.length > 0 ? chartData : [{ name: "Sem despesas", value: 1, color: "#ccc" }]);
      } catch (error) {
        console.error('Error calculating expenses by category:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchExpensesByCategory();
  }, [selectedDate]);

  if (isLoading) {
    return (
      <div className="w-full h-[300px] flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="w-full h-[300px] flex items-center justify-center">
        <p className="text-muted-foreground text-center">
          Nenhuma despesa registrada para o período selecionado.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-[300px] flex items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={5}
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend
            layout="vertical"
            verticalAlign="middle"
            align="right"
            wrapperStyle={{ paddingLeft: "10px" }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

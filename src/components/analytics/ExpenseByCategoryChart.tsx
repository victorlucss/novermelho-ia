
import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { format } from "date-fns";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

interface ExpenseByCategoryChartProps {
  isIncome?: boolean;
  selectedDate?: Date;
}

interface CategoryData {
  name: string;
  value: number;
  color: string;
}

// Define colors for categories
const expenseCategoryColors: Record<string, string> = {
  "Moradia": "#E63946",
  "Alimentação": "#F1C0B9",
  "Transporte": "#A8DADC",
  "Lazer": "#457B9D",
  "Saúde": "#F3722C",
  "Educação": "#F8961E",
  "Serviços": "#577590",
  "Outros": "#1D3557"
};

const incomeCategoryColors: Record<string, string> = {
  "Salário": "#2A9D8F",
  "Freelance": "#8AB17D",
  "Investimentos": "#BABB74",
  "Presentes": "#E9C46A",
  "Outros": "#F4A261"
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

export const ExpenseByCategoryChart = ({ 
  isIncome = false,
  selectedDate = new Date()
}: ExpenseByCategoryChartProps) => {
  const [data, setData] = useState<CategoryData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDataByCategory = async () => {
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
          .eq('type', isIncome ? 'income' : 'expense')
          .gte('date', startDate)
          .lte('date', endDate);
        
        if (error) {
          console.error(`Error fetching ${isIncome ? 'income' : 'expense'} by category:`, error);
          return;
        }

        // Group by category
        const categoryMap = new Map<string, number>();
        
        data.forEach((transaction) => {
          const currentAmount = categoryMap.get(transaction.category) || 0;
          categoryMap.set(transaction.category, currentAmount + parseFloat(transaction.amount));
        });
        
        // Convert map to array for chart
        const colors = isIncome ? incomeCategoryColors : expenseCategoryColors;
        const chartData = Array.from(categoryMap.entries()).map(([name, value]) => ({
          name,
          value,
          color: colors[name] || (isIncome ? "#2A9D8F" : "#1D3557") // Default color if category not in map
        }));
        
        setData(chartData.length > 0 ? chartData : [{ 
          name: isIncome ? "Sem receitas" : "Sem despesas", 
          value: 1, 
          color: "#ccc" 
        }]);
      } catch (error) {
        console.error(`Error calculating ${isIncome ? 'income' : 'expense'} by category:`, error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataByCategory();
  }, [isIncome, selectedDate]);

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (data.length === 0 || (data.length === 1 && (data[0].name === "Sem receitas" || data[0].name === "Sem despesas"))) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-muted-foreground text-center">
          {isIncome 
            ? "Nenhuma receita registrada para o período selecionado." 
            : "Nenhuma despesa registrada para o período selecionado."}
        </p>
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
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
  );
};

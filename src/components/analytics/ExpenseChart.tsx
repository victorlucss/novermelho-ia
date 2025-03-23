
import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { format, subMonths, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

interface ChartData {
  name: string;
  despesas: number;
  receitas: number;
  date: Date;
}

const monthNames = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 border border-border rounded-md bg-background shadow-md">
        <p className="font-medium text-sm text-muted-foreground">{label}</p>
        <p className="font-bold text-md text-verde">
          Receitas: R$ {payload[1].value.toFixed(2)}
        </p>
        <p className="font-bold text-md text-vermelho">
          Despesas: R$ {payload[0].value.toFixed(2)}
        </p>
        <p className="font-bold text-md">
          Saldo: R$ {(payload[1].value - payload[0].value).toFixed(2)}
        </p>
      </div>
    );
  }

  return null;
};

export const ExpenseChart = () => {
  const [data, setData] = useState<ChartData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTransactionHistory = async () => {
      try {
        setIsLoading(true);
        const today = new Date();
        const startDate = format(subMonths(today, 11), 'yyyy-MM-01'); // 12 months ago
        const endDate = format(today, 'yyyy-MM-dd');
        
        // Fetch all transactions for the last 12 months
        const { data: transactions, error } = await supabase
          .from('transactions')
          .select('amount, type, date')
          .gte('date', startDate)
          .lte('date', endDate)
          .order('date', { ascending: true });
        
        if (error) {
          console.error('Error fetching transaction history:', error);
          return;
        }

        // Group by month
        const monthlyData = new Map<string, { expenses: number, income: number }>();
        
        // Initialize all months
        for (let i = 0; i < 12; i++) {
          const date = subMonths(today, i);
          const monthYear = format(date, 'yyyy-MM');
          monthlyData.set(monthYear, { expenses: 0, income: 0 });
        }
        
        // Fill with actual data
        transactions.forEach((transaction) => {
          const monthYear = transaction.date.substring(0, 7); // YYYY-MM
          const currentData = monthlyData.get(monthYear) || { expenses: 0, income: 0 };
          
          if (transaction.type === 'expense') {
            currentData.expenses += parseFloat(transaction.amount);
          } else {
            currentData.income += parseFloat(transaction.amount);
          }
          
          monthlyData.set(monthYear, currentData);
        });
        
        // Convert to chart data format and sort by date
        const chartData = Array.from(monthlyData.entries())
          .map(([monthYear, values]) => ({
            name: monthNames[parseInt(monthYear.split('-')[1]) - 1],
            despesas: values.expenses,
            receitas: values.income,
            date: parseISO(`${monthYear}-01`)
          }))
          .sort((a, b) => a.date.getTime() - b.date.getTime());
        
        setData(chartData);
      } catch (error) {
        console.error('Error fetching transaction history:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTransactionHistory();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="despesas"
          stroke="#E63946"
          fill="#E63946"
          fillOpacity={0.2}
          activeDot={{ r: 6 }}
        />
        <Area
          type="monotone"
          dataKey="receitas"
          stroke="#2A9D8F"
          fill="#2A9D8F"
          fillOpacity={0.2}
          activeDot={{ r: 6 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

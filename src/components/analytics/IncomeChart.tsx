import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
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
  valor: number;
  date: Date;
}

const monthNames = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 border border-border rounded-md bg-background shadow-md">
        <p className="font-medium text-sm text-muted-foreground">{label}</p>
        <p className="font-bold text-md text-verde">
          Receita: R$ {payload[0].value.toFixed(2)}
        </p>
      </div>
    );
  }

  return null;
};

export const IncomeChart = () => {
  const [data, setData] = useState<ChartData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchIncomeHistory = async () => {
      try {
        setIsLoading(true);
        const today = new Date();
        const startDate = format(subMonths(today, 11), 'yyyy-MM-01');
        const endDate = format(today, 'yyyy-MM-dd');
        
        const { data: incomeData, error } = await supabase
          .from('transactions')
          .select('amount, date')
          .eq('type', 'income')
          .gte('date', startDate)
          .lte('date', endDate)
          .order('date', { ascending: true });
        
        if (error) {
          console.error('Error fetching income history:', error);
          return;
        }

        const monthlyData = new Map<string, number>();
        
        for (let i = 0; i < 12; i++) {
          const date = subMonths(today, i);
          const monthYear = format(date, 'yyyy-MM');
          monthlyData.set(monthYear, 0);
        }
        
        incomeData?.forEach((transaction) => {
          const monthYear = transaction.date.substring(0, 7);
          const currentAmount = monthlyData.get(monthYear) || 0;
          monthlyData.set(monthYear, currentAmount + Number(transaction.amount));
        });
        
        const chartData = Array.from(monthlyData.entries())
          .map(([monthYear, value]) => ({
            name: monthNames[parseInt(monthYear.split('-')[1]) - 1],
            valor: Number(value),
            date: parseISO(`${monthYear}-01`)
          }))
          .sort((a, b) => a.date.getTime() - b.date.getTime());
        
        setData(chartData);
      } catch (error) {
        console.error('Error fetching income history:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchIncomeHistory();
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
      <BarChart
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
        <Bar dataKey="valor" fill="#2A9D8F" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

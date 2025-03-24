import React, { useState, useEffect } from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { format, subDays, eachDayOfInterval } from "date-fns";
import { ptBR } from "date-fns/locale";

interface ExpenseDataPoint {
  date: string;
  value: number;
}

export const ExpenseLineChart = () => {
  const [data, setData] = useState<ExpenseDataPoint[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchExpenseData = async () => {
      try {
        setIsLoading(true);
        
        // Get expenses for the last 30 days
        const endDate = new Date();
        const startDate = subDays(endDate, 30);
        
        const { data: transactions, error } = await supabase
          .from('transactions')
          .select('amount, date')
          .eq('type', 'expense')
          .gte('date', format(startDate, 'yyyy-MM-dd'))
          .lte('date', format(endDate, 'yyyy-MM-dd'))
          .order('date');
          
        if (error) {
          console.error('Error fetching expense data:', error);
          return;
        }
        
        // Create an array of all dates in the interval
        const dateInterval = eachDayOfInterval({ start: startDate, end: endDate });
        
        // Initialize data with zero values for all dates
        const initialData = dateInterval.map(date => ({
          date: format(date, 'yyyy-MM-dd'),
          value: 0,
        }));
        
        // Aggregate transaction amounts by date
        const expensesByDate = transactions.reduce<Record<string, number>>((acc, transaction) => {
          const date = transaction.date;
          const amount = parseFloat(String(transaction.amount));
          
          if (!acc[date]) {
            acc[date] = 0;
          }
          
          acc[date] += amount;
          return acc;
        }, {});
        
        // Merge the data
        const chartData = initialData.map(item => ({
          date: item.date,
          value: expensesByDate[item.date] || 0,
        }));
        
        setData(chartData);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchExpenseData();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, 'dd/MM', { locale: ptBR });
  };

  const formatCurrency = (value: number) => {
    return `R$ ${value.toFixed(2)}`;
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-8">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#1F2933" />
        <XAxis 
          dataKey="date" 
          tickFormatter={formatDate} 
          tick={{ fill: '#A1B1C2' }}
          stroke="#1F2933"
        />
        <YAxis 
          tickFormatter={formatCurrency} 
          tick={{ fill: '#A1B1C2' }}
          stroke="#1F2933"
        />
        <Tooltip 
          formatter={(value: number) => [formatCurrency(value), 'Despesas']} 
          labelFormatter={formatDate}
          contentStyle={{ backgroundColor: '#161B22', borderColor: '#1F2933' }}
        />
        <Legend />
        <Line 
          type="monotone" 
          dataKey="value" 
          name="Despesas" 
          stroke="#EF4444" 
          strokeWidth={2}
          dot={{ strokeWidth: 2, r: 4 }}
          activeDot={{ r: 6, strokeWidth: 0 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

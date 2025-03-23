
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

interface ExpenseByCategoryChartProps {
  isIncome?: boolean;
}

const expenseData = [
  { name: "Moradia", value: 1500, color: "#E63946" },
  { name: "Alimentação", value: 800, color: "#F1C0B9" },
  { name: "Transporte", value: 450, color: "#A8DADC" },
  { name: "Lazer", value: 300, color: "#457B9D" },
  { name: "Outros", value: 700, color: "#1D3557" },
];

const incomeData = [
  { name: "Salário", value: 4000, color: "#2A9D8F" },
  { name: "Freelance", value: 800, color: "#8AB17D" },
  { name: "Investimentos", value: 200, color: "#BABB74" },
  { name: "Outros", value: 0, color: "#E9C46A" },
];

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

export const ExpenseByCategoryChart = ({ isIncome = false }: ExpenseByCategoryChartProps) => {
  const data = isIncome ? incomeData : expenseData;
  const COLORS = data.map(item => item.color);

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
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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

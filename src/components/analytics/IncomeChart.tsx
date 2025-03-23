
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    valor: 5000,
  },
  {
    name: "Fev",
    valor: 5000,
  },
  {
    name: "Mar",
    valor: 5200,
  },
  {
    name: "Abr",
    valor: 5200,
  },
  {
    name: "Mai",
    valor: 5300,
  },
  {
    name: "Jun",
    valor: 5300,
  },
  {
    name: "Jul",
    valor: 5400,
  },
  {
    name: "Ago",
    valor: 5400,
  },
  {
    name: "Set",
    valor: 5000,
  },
  {
    name: "Out",
    valor: 5000,
  },
  {
    name: "Nov",
    valor: 5200,
  },
  {
    name: "Dez",
    valor: 5500,
  },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass p-4 border border-border rounded-md">
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

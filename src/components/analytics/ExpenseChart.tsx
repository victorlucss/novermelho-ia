
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    despesas: 3500,
    receitas: 5000,
  },
  {
    name: "Fev",
    despesas: 3200,
    receitas: 5000,
  },
  {
    name: "Mar",
    despesas: 3800,
    receitas: 5200,
  },
  {
    name: "Abr",
    despesas: 4000,
    receitas: 5200,
  },
  {
    name: "Mai",
    despesas: 3900,
    receitas: 5300,
  },
  {
    name: "Jun",
    despesas: 3700,
    receitas: 5300,
  },
  {
    name: "Jul",
    despesas: 3600,
    receitas: 5400,
  },
  {
    name: "Ago",
    despesas: 3900,
    receitas: 5400,
  },
  {
    name: "Set",
    despesas: 3750,
    receitas: 5000,
  },
  {
    name: "Out",
    despesas: 3950,
    receitas: 5000,
  },
  {
    name: "Nov",
    despesas: 4100,
    receitas: 5200,
  },
  {
    name: "Dez",
    despesas: 4300,
    receitas: 5500,
  },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass p-4 border border-border rounded-md">
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

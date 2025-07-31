import React from "react";
import { useSelector } from "react-redux";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#ff4242ff","#FF8042"];

const ExpensePieChart = () => {
  const { items } = useSelector((state) => state.expenses);
  const expenseItems = items.filter(item => item.type !== "income");

  const categoryTotals = expenseItems.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + Number(item.amount);
    return acc;
  }, {});

  const data = Object.entries(categoryTotals).map(([name, value]) => ({ name, value }));

  return (
    <>
      <ResponsiveContainer width={250} height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={70}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

export default ExpensePieChart;


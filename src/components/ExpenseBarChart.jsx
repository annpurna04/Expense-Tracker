import React from "react";
import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const ExpenseBarChart = () => {
  const { items } = useSelector(
    (state) => state.expenses
  ); /*Gets the items array (list of expenses/income) from Redux store*/
  const expenseItems = items.filter((item) => item.type !== "income");

  const categoryTotals = expenseItems.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + Number(item.amount);
    return acc;
  }, {});

  const chartData = Object.entries(categoryTotals).map(
    ([category, amount]) => ({
      name: category,
      amount,
    })
  ); /*object into an array of objects that Recharts understand*/

  return (
    <div className="bar-chart-container">
      <ResponsiveContainer width="100%" height={280}>
        <BarChart
          layout="vertical"
          data={chartData}
          margin={{ top: 10, right: 5, left: 20, bottom: 11 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Bar dataKey="amount" fill="#82ca9d" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseBarChart;

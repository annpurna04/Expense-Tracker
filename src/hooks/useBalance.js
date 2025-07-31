import { useSelector } from "react-redux";

export const useBalance = () => {
  const { items } = useSelector((state) => state.expenses);
  const income = items
    .filter((e) => e.type === "income")
    .reduce((sum, e) => sum + Number(e.amount), 0);
  const expense = items
    .filter((e) => e.type !== "income")
    .reduce((sum, e) => sum + Number(e.amount), 0);
  const balance = income - expense;
  return { income, expense, balance };
};

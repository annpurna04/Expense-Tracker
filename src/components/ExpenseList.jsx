import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ExpenseItem from "./ExpenseItem";
import Pagination from "./Pagination";
/*Displays a paginated list of expenses that are filtered by search term and date range*/
const ExpenseList = ({ onEdit }) => { 
  const { items, searchTerm, dateRange } = useSelector((state) => state.expenses);
  const [page, setPage] = useState(1);
  const perPage = 4;

  const filtered = items
    .filter(exp => {
      const titleMatch = exp.title.toLowerCase().includes(searchTerm.toLowerCase());
      const amountMatch = exp.amount.toString().includes(searchTerm);
      const from = dateRange.from ? new Date(dateRange.from) : null;
      const to = dateRange.to ? new Date(dateRange.to) : null;
      const expDate = new Date(exp.date); /*Converts the expense's date into a Date object*/
      const dateMatch = (!from || expDate >= from) && (!to || expDate <= to);
      return (titleMatch || amountMatch) && dateMatch;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const totalPages = Math.ceil(filtered.length / perPage);

  useEffect(() => {
    if (page > totalPages && totalPages > 0) {
      setPage(totalPages);
    }
  }, [filtered.length, page, totalPages]);

  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <>
      {paginated.map((e) => (
        <ExpenseItem key={e.id} data={e} onEdit={onEdit} />
      ))}
      <Pagination currentPage={page} total={filtered.length} itemsPerPage={perPage} onPageChange={setPage} />
    </>
  );
};

export default ExpenseList;

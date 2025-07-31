import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addExpense, updateExpense } from "../utils/expenseSlice";
import { useBalance } from "../hooks/useBalance";
import ExpenseForm from "./ExpenseForm";
import IncomeForm from "./IncomeForm";
import ExpenseList from "./ExpenseList";
import SearchFilter from "./SearchFilter";
import ExpenseBarChart from "./ExpenseBarChart";
import ExpensePieChart from "./ExpensePieChart";

const AppContent = () => {
  const [editingExpense, setEditingExpense] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formHeading, setFormHeading] = useState("Add Expense");
  const [isIncomeForm, setIsIncomeForm] = useState(false);
  const [editingIncomeData, setEditingIncomeData] = useState(null);

  const dispatch = useDispatch();
  const { income, expense, balance } = useBalance();

  const handleSave = (expense) => {
    if (expense.id) {
      dispatch(updateExpense(expense));
    } else {
      dispatch(addExpense(expense));
    }
    resetFormState();
  };

  const resetFormState = () => {
    setEditingExpense(null);
    setEditingIncomeData(null);
    setShowForm(false);
  };

  const handleAddIncomeClick = () => {
    setFormHeading("Add Income");
    setIsIncomeForm(true);
    setShowForm(true);
    setEditingIncomeData(null);
  };

  const handleAddExpenseClick = () => {
    setEditingExpense({
      title: "",
      amount: "",
      category: "",
      date: "",
      type: "expense",
    });
    setFormHeading("Add Expense");
    setIsIncomeForm(false);
    setShowForm(true);
  };

  const handleEditTransaction = (transaction) => {
    if (transaction.type === "income") {
      setFormHeading("Edit Income");
      setIsIncomeForm(true);
      setEditingIncomeData(transaction);
    } else {
      setFormHeading("Edit Expense");
      setIsIncomeForm(false);
      setEditingExpense(transaction);
    }
    setShowForm(true);
  };

  useEffect(() => {
    if (!showForm) {
      resetFormState();
    }
  }, [showForm]);

  return (
    <div className="app-container">
      <h1 className="app-header">Expense Tracker</h1>

      <div className="top-boxes">
        <div className="top-box bg-green">
          <h3>
            Wallet Balance : <span className="bal"> ₹{balance}</span>
          </h3>
          <button className="btn-green" onClick={handleAddIncomeClick}>
            Add Income
          </button>
        </div>

        <div className="top-box bg-red">
          <h3>
            Expenses : <span className="exp">₹{expense}</span>
          </h3>
          <button className="btn-red" onClick={handleAddExpenseClick}>
            Add Expense
          </button>
        </div>

        <div className="top-box">
          <ExpensePieChart />
        </div>
      </div>

      <div className="middle-row">
        <div className="recent-title">Recent Transactions</div>
        <div className="search-container">
          <SearchFilter />
        </div>
        <div className="top-exp-title">Top Expenses</div>
      </div>

      <div className="main-content">
        <div className="left-side">
          <ExpenseList onEdit={handleEditTransaction} />
        </div>
        <div className="right-side">
          <ExpenseBarChart />
        </div>
      </div>

      {showForm && (
        <div className="popup-form">
          <div className="popup-card">
            <h3>{formHeading}</h3>
            {isIncomeForm ? (
              <IncomeForm
                editingIncomeData={editingIncomeData}
                onClose={resetFormState}
              />
            ) : (
              <ExpenseForm
                onSave={handleSave}
                existing={editingExpense}
                onCancel={resetFormState}
                formHeading={formHeading}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AppContent;

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense, updateExpense } from "../utils/expenseSlice";

const IncomeForm = ({ editingIncomeData, onClose }) => {
  const [incomeAmount, setIncomeAmount] = useState("");
  const [incomeError, setIncomeError] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (editingIncomeData) {
      setIncomeAmount(editingIncomeData.amount?.toString() || "");
    } else {
      setIncomeAmount("");
    }
  }, [editingIncomeData]);

  const handleSubmit = () => {
    const amount = parseFloat(incomeAmount);
    if (!amount || amount <= 0) {
      setIncomeError("Please enter a valid amount greater than 0.");
      return;
    }

    if (editingIncomeData) {
      dispatch(updateExpense({ ...editingIncomeData, amount }));
    } else {
      dispatch(
        addExpense({
          title: "Income",
          amount,
          category: "Income",
          date: new Date().toISOString(),
          type: "income",
        })
      );
    }

    setIncomeError("");
    onClose();
  };

  return (
    <>
      <input
        className="popup-input"
        type="number"
        placeholder="Enter income amount"
        value={incomeAmount}
        onChange={(e) => {
          setIncomeAmount(e.target.value);
          if (
            e.target.value &&
            !isNaN(e.target.value) &&
            Number(e.target.value) > 0
          ) {
            setIncomeError("");
          }
        }}
      />
      {incomeError && <p className="error-msg">{incomeError}</p>}

      <div className="form-buttons">
        <button className="btn-yellow" onClick={handleSubmit}>
          {editingIncomeData ? "Update Income" : "Add Balance"}
        </button>
        <button className="btn-white" onClick={onClose}>
          Cancel
        </button>
      </div>
    </>
  );
};

export default IncomeForm;

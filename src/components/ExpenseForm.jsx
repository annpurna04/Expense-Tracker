import React, { useState, useEffect } from "react";

const ExpenseForm = ({ onSave, existing, onCancel, formHeading }) => {
  const [title, setTitle] = useState(existing?.title || "");
  const [amount, setAmount] = useState(existing?.amount || "");
  const [category, setCategory] = useState(existing?.category || "");
  const [date, setDate] = useState(existing?.date?.slice(0, 10) || "");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setTitle(existing?.title || "");
    setAmount(existing?.amount?.toString() || "");
    setCategory(existing?.category || "");
    setDate(existing?.date?.slice(0, 10) || "");
  }, [existing]);

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!amount || isNaN(amount) || Number(amount) <= 0)
      newErrors.amount = "Enter a valid positive amount";
    if (!category) newErrors.category = "Select a category";
    if (!date) newErrors.date = "Date is required";
    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    onSave({
      id: existing?.id,
      title,
      amount,
      category,
      date,
      type: "expense",
    });
  };

  const clearError = (field) => {
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <div className="form-wrapper">
      <div className="form-row">
        <div className="form-field">
          <input
            type="text"
            placeholder="Expense Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              if (e.target.value.trim()) clearError("title");
            }}
            className="popup-input"
          />
          {errors.title && <div className="error-msg">{errors.title}</div>}
        </div>

        <div className="form-field">
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
              if (
                e.target.value &&
                !isNaN(e.target.value) &&
                Number(e.target.value) > 0
              )
                clearError("amount");
            }}
            className="popup-input"
          />
          {errors.amount && <div className="error-msg">{errors.amount}</div>}
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              if (e.target.value) clearError("category");
            }}
            className="popup-input"
          >
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Shopping">Shopping</option>
            <option value="Bills">Bills</option>
          </select>
          {errors.category && (
            <div className="error-msg">{errors.category}</div>
          )}
        </div>

        <div className="form-field">
          <input
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              if (e.target.value) clearError("date");
            }}
            className="popup-input"
          />
          {errors.date && <div className="error-msg">{errors.date}</div>}
        </div>
      </div>

      <div className="form-buttons">
        <button className="btn-yellow" onClick={handleSubmit}>
          {formHeading === "Edit Expense" ? "Update Expense" : "Add Expense"}
        </button>
        <button className="btn-white" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ExpenseForm;

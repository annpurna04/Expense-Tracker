import React from "react";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../utils/expenseSlice";
import { FaPencilAlt, FaRegTimesCircle } from "react-icons/fa";

const ExpenseItem = ({ data, onEdit }) => {
  const dispatch = useDispatch();
  return (
    <div className="expense-item">
      <div className="expense-details">
        <strong>{data.title}</strong>
        <small>₹{data.amount}</small>
        <br />
        <span className="expense-date">
          {
            new Date(
              data.date
            ).toLocaleDateString() 
          }
        </span>
      </div>
      <div className="expense-actions">
        <button className="edit-btn" onClick={() => onEdit(data)}>
          <FaPencilAlt />
        </button>
        <button
          className="delete-btn"
          onClick={() => dispatch(deleteExpense(data.id))}
        >
          <FaRegTimesCircle />
        </button>
      </div>
    </div>
  );
};

export default ExpenseItem;

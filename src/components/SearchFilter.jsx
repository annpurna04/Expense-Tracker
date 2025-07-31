import React from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../utils/expenseSlice";

const SearchFilter = () => {
  const dispatch = useDispatch();

  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="text"
        placeholder="Search name or amount..."
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      />
    </div>
  );
};

export default SearchFilter;


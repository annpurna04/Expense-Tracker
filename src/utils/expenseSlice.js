import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState= {
  items: [],
  searchTerm: "", 
  dateRange: { from: null, to: null },
};

const expenseSlice = createSlice({ 
  name: "expenses", 
  initialState,
  reducers: { 
    addExpense:(state, action) => {
      const newExpense = { id: uuid(), ...action.payload ,id: action.payload.id || uuid(),};
      state.items.unshift(newExpense);
    },
    updateExpense: (state, action) => { 
      const index = state.items.findIndex((e) => e.id === action.payload.id);
      if (index !== -1) state.items[index] = action.payload;
    },
    deleteExpense: (state, action) => {
      state.items = state.items.filter((e) => e.id !== action.payload);
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setDateRange: (state, action) => {
      state.dateRange = { ...state.dateRange, ...action.payload};
    },
  },
});

export const {
  addExpense,
  updateExpense,
  deleteExpense,
  setSearchTerm,
  setDateRange,
} = expenseSlice.actions;

export default expenseSlice.reducer;


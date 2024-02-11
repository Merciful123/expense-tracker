import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenses: [],
};

export const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push(action.payload);
    },
    updateExpense: (state, action) => {
      const { id, updatedExpense } = action.payload;
      const index = state.expenses.findIndex((expense) => expense.id === id);
      if (index !== -1) {
        state.expenses[index] = updatedExpense;
      }
    },
    deleteExpense: (state, action) => {
      const id = action.payload;
      state.expenses = state.expenses.filter((expense) => expense.id !== id);
    },
  },
});

export const { addExpense, updateExpense, deleteExpense } =
  expensesSlice.actions;

export const selectExpenses = (state) => state.expenses.expenses;

export default expensesSlice.reducer;

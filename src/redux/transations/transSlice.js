import { createSlice } from '@reduxjs/toolkit';

import {
  fetchTransactions,
  addTransaction,
  deleteTransaction,
  editTransaction,
  getTransactionCategories,
  getTransactionSummary,
} from './auth-operations';

const initialState = {
  transactions: [],
  categories: [],
  summary: null,
};

const transactionsSlice = createSlice({
  name: 'transition',
  initialState,
  extraReducers: builder => {
    builder
      // -------- fetchTransactions ---------
      .addCase(fetchTransactions.fulfilled, (state, { payload }) => {
        state.transactions = payload.transaction;
      })

      // ------- addTransaction -------
      .addCase(addTransaction.fulfilled, (state, { payload }) => {
        state.transactions = [...state.transactions, payload.transaction];
      })

      // -------- deleteTransaction --------
      .addCase(deleteTransaction.fulfilled, (state, { payload }) => {
        state.transactions = state.transactions.map(t => t.id !== payload);
      })

      // --- editTransaction ---
      .addCase(editTransaction.fulfilled, (state, { payload }) => {
        state.transactions = state.transactions.map(t =>
          t.id === payload.id ? payload : t
        );
      })

      // --- getTransactionCategories ---
      .addCase(getTransactionCategories.fulfilled, (state, { payload }) => {
        state.categories = payload;
      })

      // --- getTransactionSummary ---
      .addCase(getTransactionSummary.fulfilled, (state, { payload }) => {
        state.summary = payload;
      });
  },
});

export const transactionsReducer = transactionsSlice.reducer;

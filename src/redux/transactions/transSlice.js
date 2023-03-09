import { createSlice } from '@reduxjs/toolkit';

import {
  fetchTransactions,
  addTransaction,
  deleteTransaction,
  editTransaction,
  getTransactionCategories,
  getTransactionSummary,
} from './trans-operations';

import {
  loginRequest,
  logOutRequest,
  getUserInfoRequest,
} from 'redux/auth/auth-operations';

const initialState = {
  transactions: [],
  categories: [],
  summary: null,
  balance: 0,
  editTransaction: null,
};

const transactionsSlice = createSlice({
  name: 'transition',
  initialState,
  reducers: {
    setEditTransaction(state, { payload }) {
      state.editTransaction = payload;
    },
  },
  extraReducers: builder => {
    builder
      // -------- fetchTransactions ---------
      .addCase(fetchTransactions.fulfilled, (state, { payload }) => {
        state.transactions = payload;
      })

      // ------- addTransaction -------
      .addCase(addTransaction.fulfilled, (state, { payload }) => {
        state.transactions = [...state.transactions, payload];
        state.balance = payload.balanceAfter;
      })

      // -------- deleteTransaction --------
      .addCase(deleteTransaction.fulfilled, (state, { payload }) => {
        state.transactions = state.transactions.filter(
          t => t.id !== payload.id
        );
        state.balance = payload.balance;
      })

      // --- editTransaction ---
      .addCase(editTransaction.fulfilled, (state, { payload }) => {
        state.transactions = state.transactions.map(t =>
          t.id === payload.response.id ? payload.response : t
        );
        state.balance = payload.balance;
      })

      // --- getTransactionCategories ---
      .addCase(getTransactionCategories.fulfilled, (state, { payload }) => {
        state.categories = payload;
      })

      // --- getTransactionSummary ---
      .addCase(getTransactionSummary.fulfilled, (state, { payload }) => {
        state.summary = payload;
      })
      // --- logOutRequest ---
      .addCase(logOutRequest.fulfilled, () => ({ ...initialState }))
      // --- loginRequest ---
      .addCase(loginRequest.fulfilled, (state, { payload }) => {
        state.balance = payload.balance;
      })
      // --- getUserInfoRequest ---
      .addCase(getUserInfoRequest.fulfilled, (state, { payload }) => {
        state.balance = payload.balance;
      });
  },
});
export const { setEditTransaction } = transactionsSlice.actions;
export const transactionsReducer = transactionsSlice.reducer;

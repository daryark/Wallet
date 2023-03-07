import {createAsyncThunk} from '@reduxjs/toolkit';

import {TransactionCategoriesAPI, TransactionsAPI, TransactionSummaryAPI,} from 'services/api';

export const fetchTransactions = createAsyncThunk(
  'transactions/getTransactions',
  async (_, { rejectWithValue }) => {
    try {
      const { response } = await TransactionsAPI.getUserTransactions();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addTransaction = createAsyncThunk(
  'transactions/addTransition',
  async (formData, { rejectWithValue }) => {
    try {
      const { response } = await TransactionsAPI.createTransaction(formData);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransition',
  async (transitionId, { rejectWithValue }) => {
    try {
      await TransactionsAPI.removeTransaction(transitionId);
      return transitionId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editTransaction = createAsyncThunk(
  'transactions/editTransition',
  async ({ formData }, { rejectWithValue }) => {
    try {
      const { response } = await TransactionsAPI.updateTransaction(formData);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getTransactionCategories = createAsyncThunk(
  'transactions/getTransactionCategories',
  async (_, { rejectWithValue }) => {
    try {
      const { response } = await TransactionCategoriesAPI();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getTransactionSummary = createAsyncThunk(
  'transactions/getTransactionSummary',
  async (formData, { rejectWithValue }) => {
    try {
      return await TransactionSummaryAPI.getTransactionSummary(formData);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

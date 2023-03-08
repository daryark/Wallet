import { createSlice } from '@reduxjs/toolkit';

import { fetchCurrencyMonoBank } from './mono-operations';
const currencyFromStorage = JSON.parse(
  localStorage.getItem('currencyInTheMoment')
);

const initialState = {
  currency: [],
  isLoading: false,
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrencyFromLocalStorage(state, { payload }) {
      state.currency = payload;
    },
  },
  extraReducers: builder => {
    builder

      .addCase(fetchCurrencyMonoBank.fulfilled, (state, action) => {
        state.currency = action.payload;
      })
      .addCase(fetchCurrencyMonoBank.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCurrencyMonoBank.rejected, state => {
        state.isLoading = false;
        state.currency = currencyFromStorage;
      });
  },
});
export const { setCurrencyFromLocalStorage } = currencySlice.actions;

export const currencyReducer = currencySlice.reducer;

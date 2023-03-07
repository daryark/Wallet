import { createSlice } from '@reduxjs/toolkit';

import { fetchCurrencyMonoBank } from './mono-operations';

const initialState = {
  currency: [],
  isLoading: false,
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {},
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
      });
  },
});

export const currencyReducer = currencySlice.reducer;

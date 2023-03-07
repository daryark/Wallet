import { CurrencyMonoAPI } from 'services/api';
const { createAsyncThunk } = require('@reduxjs/toolkit');

export const fetchCurrencyMonoBank = createAsyncThunk(
  'mono/getCurrency',
  async (_, { rejectWithValue }) => {
    try {
      const responseCurrency = await CurrencyMonoAPI.getCurrencyMonoBank();
      const currency = responseCurrency.filter(
        cur =>
          cur.currencyCodeA === 840 ||
          (cur.currencyCodeA === 978 && cur.currencyCodeB !== 840)
      );

      localStorage.setItem('currencyInTheMoment', JSON.stringify(currency));

      return currency;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

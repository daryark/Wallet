import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { userReducer } from 'redux/auth/authSlice';
import { transactionsReducer } from 'redux/transactions/transSlice';

const rootReducer = combineReducers({
  userData: userReducer,
  transactionsData: transactionsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

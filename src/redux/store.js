import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { userReducer } from './auth/authSlice';
import { globalReducer } from './global/globalSlice';
import { modalReducer } from './modal/modalSlice';
import { transactionsReducer } from './transactions/transSlice';

const rootReducer = combineReducers({
  userData: userReducer,
  transactionsData: transactionsReducer,
  globalData: globalReducer,
  modal: modalReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

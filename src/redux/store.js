import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { userReducer } from './auth/authSlice';
import { globalReducer } from './global/globalSlice';
import { currencyReducer } from './monobank/monoSlice';
import { transactionsReducer } from './transactions/transSlice';

const persistedGlobalReducer = persistReducer(
  {
    key: 'theme/lang',
    version: 1,
    storage,
    whitelist: ['themeTitle', 'language'],
  },
  globalReducer
);

const rootReducer = combineReducers({
  userData: userReducer,
  transactionsData: transactionsReducer,
  globalData: persistedGlobalReducer,
  currencyData: currencyReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  loginRequest,
  registerRequest,
  logOutRequest,
  getUserInfoRequest,
} from 'redux/auth/auth-operations';

import {
  fetchTransactions,
  addTransaction,
  editTransaction,
  getTransactionCategories,
  getTransactionSummary,
} from 'redux/transactions/trans-operations';

const extraActions = [
  loginRequest,
  registerRequest,
  logOutRequest,
  getUserInfoRequest,
  fetchTransactions,
  addTransaction,
  editTransaction,
  getTransactionCategories,
  getTransactionSummary,
];
const getActions = type => extraActions.map(action => action[type]);

const initialGlobalState = {
  themeTitle: 'light',
  isModalOpen: false,
  isLoading: false,
  error: null,
  status: 'idle',
  isModalTeamOpen: false,
  isEditModalOpen: false,
  isLogoutModalOpen: false,
  language: false,
};

const globalSlice = createSlice({
  name: 'global',
  initialState: initialGlobalState,
  reducers: {
    isModalAddTransactionOpen(state) {
      state.isModalOpen = !state.isModalOpen;
    },
    toggleModalTeam(state) {
      state.isModalTeamOpen = !state.isModalTeamOpen;
    },
    toggleThemeTitle(state) {
      state.themeTitle = state.themeTitle === 'light' ? 'dark' : 'light';
    },
    toggleEditModal(state) {
      state.isEditModalOpen = !state.isEditModalOpen;
      console.log(state.isEditModalOpen);
    },
    toggleLogoutModalOpen(state) {
      state.isLogoutModalOpen = !state.isLogoutModalOpen;
    },
    changeLanguage(state, { payload }) {
      state.language = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addMatcher(isAnyOf(...getActions('pending')), pendingHandler)
      .addMatcher(isAnyOf(...getActions('fulfilled')), fulfilledHandler)
      .addMatcher(isAnyOf(...getActions('rejected')), errorHandler);
  },
});

function pendingHandler(state) {
  state.status = 'pending';
  state.isLoading = true;
  state.error = null;
}
function fulfilledHandler(state) {
  state.status = 'fulfilled';
  state.isLoading = false;
}

function errorHandler(state, { payload }) {
  state.status = 'rejected';
  state.isLoading = false;
  state.error = payload;
}
export const {
  isModalAddTransactionOpen,
  toggleModalTeam,
  toggleEditModal,
  toggleLogoutModalOpen,
} = globalSlice.actions;
export const { toggleThemeTitle, changeLanguage } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;

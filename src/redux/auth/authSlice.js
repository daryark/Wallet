import { createSlice } from '@reduxjs/toolkit';

import {
  loginRequest,
  registerRequest,
  logOutRequest,
  getUserInfoRequest,
} from './auth-operations';

const initialState = {
  user: {
    username: null,
    email: null,
  },
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder
      // -------- Login ---------
      .addCase(loginRequest.fulfilled, (state, { payload }) => {
        state.user.username = payload.username;
        state.user.email = payload.email;
        state.isLoggedIn = true;
      })

      // ------- Register -------
      .addCase(registerRequest.fulfilled, (state, { payload }) => {
        state.user.username = payload.username;
        state.user.email = payload.email;
        state.isLoggedIn = true;
      })

      // -------- Logout --------
      .addCase(logOutRequest.fulfilled, state => {
        state.user.username = null;
        state.user.email = null;

        state.isLoggedIn = false;
      })

      // --- Get current user info ---
      .addCase(getUserInfoRequest.fulfilled, (state, { payload }) => {
        state.user.username = payload.username;
        state.user.email = payload.email;
        state.isLoggedIn = true;
      });
  },
});

export const userReducer = userSlice.reducer;

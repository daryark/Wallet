import { createAsyncThunk } from '@reduxjs/toolkit';

import { AuthAPI, UsersAPI } from 'services/api';

export const registerRequest = createAsyncThunk(
  'user/registerRequest',
  async (formData, { rejectWithValue }) => {
    // formData = { username, email, password }

    try {
      const response = await AuthAPI.signUp(formData);
      const { token, user } = response;

      localStorage.setItem('token', token);

      // user = {"id": "string", "username": "string", "email": "string", "balance": 0}

      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginRequest = createAsyncThunk(
  'user/loginRequest',
  async (formData, { rejectWithValue }) => {
    // formData = { email, password }

    try {
      const response = await AuthAPI.signIn(formData);
      const { token, user } = response;

      localStorage.setItem('token', token);

      // user = {"id": "string", "username": "string", "email": "string", "balance": 0}

      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOutRequest = createAsyncThunk(
  'user/logOutRequest',
  async (_, { rejectWithValue }) => {
    try {
      const response = await AuthAPI.signOut();

      localStorage.removeItem('token');

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUserInfoRequest = createAsyncThunk(
  'user/getUserInfoRequest',
  async (_, { rejectWithValue }) => {
    try {
      const response = await UsersAPI.getUserInfo();
      // response = {"id": "string", "username": "string", "email": "string", "balance": 0}

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

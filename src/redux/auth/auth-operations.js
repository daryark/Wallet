import { createAsyncThunk } from '@reduxjs/toolkit';

import { AuthAPI, UsersAPI } from 'services/api';

export const registerRequest = createAsyncThunk(
  'user/registerRequest',
  async (formData, thunkAPI) => {
    // formData = { username, email, password }

    try {
      const response = await AuthAPI.signUp(formData);
      const { token, user } = response;

      localStorage.setItem('token', token);

      // user = {"id": "string", "username": "string", "email": "string", "balance": 0}

      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginRequest = createAsyncThunk(
  'user/loginRequest',
  async (formData, thunkAPI) => {
    // formData = { email, password }

    try {
      const response = await AuthAPI.signIn(formData);
      const { token, user } = response;

      localStorage.setItem('token', token);

      // user = {"id": "string", "username": "string", "email": "string", "balance": 0}

      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutRequest = createAsyncThunk(
  'user/logOutRequest',
  async (_, thunkAPI) => {
    try {
      const response = await AuthAPI.signOut();

      localStorage.removeItem('token');

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUserInfoRequest = createAsyncThunk(
  'user/getUserInfoRequest',
  async (_, thunkAPI) => {
    try {
      const response = await UsersAPI.getUserInfo();

      // response = {"id": "string", "username": "string", "email": "string", "balance": 0}

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

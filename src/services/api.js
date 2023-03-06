import axios from 'axios';

const API_BASE_URL = 'https://wallet.goit.ua';
// const API_BASE_URL = process.env.REACT_APP_API_DOMAIN;
const $publicHost = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const $privateHost = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const authInterceptor = config => {
  config.headers['Authorization'] = localStorage.getItem('token');
  return config;
};

$privateHost.interceptors.request.use(authInterceptor);

export const AuthAPI = {
  async signUp({ username, email, password }) {
    const { data } = await $publicHost.post(`/api/auth/sign-up`, {
      username,
      email,
      password,
    });
    return data;
  },

  async signIn({ email, password }) {
    const { data } = await $publicHost.post(`/api/auth/sign-in`, {
      email,
      password,
    });
    return data;
  },

  async signOut() {
    const { data } = await $privateHost.delete(`/api/auth/sign-out`);
    return data;
  },
};

export const UsersAPI = {
  async getUserInfo() {
    const { data } = await $privateHost.get(`/api/users/current`);
    return data;
  },
};

export const TransactionsAPI = {
  async getUserTransactions() {
    const { data } = await $privateHost.get(`/api/transactions`);
    return data;
  },

  async createTransaction({ user }) {
    const { data } = await $privateHost.post(`/api/transactions`, user);
    return data;
  },

  async updateTransaction({ id, ...user }) {
    const { data } = await $privateHost.patch(`/api/transactions/${id}`, user);
    return data;
  },

  async removeTransaction({ id }) {
    const { data } = await $privateHost.delete(`/api/transactions/${id}`);
    return data;
  },
};

export const TransactionCategoriesAPI = {
  async getTransactionCategories() {
    const { data } = await $privateHost.get(`/api/transaction-categories`);
    return data;
  },
};

export const TransactionSummaryAPI = {
  async getTransactionSummary({ month, year }) {
    //  {month, year} must be numbers!

    const { data } = await $privateHost.get(
      `/api/transactions-summary?month=${month}&year=${year}`
    );
    return data;
  },
};

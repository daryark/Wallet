export const selectTransactions = state => state.transactionsData.transactions;
export const selectCategories = state => state.transactionsData.categories;
export const selectSummary = state => state.transactionsData.summary;
export const selectEditTransaction = state =>
  state.transactionsData.editTransaction;
export const selectBalance = state => state.transactionsData.balance;
export const selectIsDeleting = state => state.transactionsData.isDeleting;

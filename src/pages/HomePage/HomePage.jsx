import { TransactionsList, TransactionsListMobile } from 'components';
import CurrencyPage from 'pages/CurrencyPage/CurrencyPage';
import React from 'react';

export default function HomePage() {
  return (
    <>
      <div>HomePage is showing</div>
      <TransactionsListMobile />
      <TransactionsList />
      <CurrencyPage />
    </>
  );
}

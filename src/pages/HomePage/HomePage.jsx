import { TransactionsList, TransactionsListMobile } from 'components';
import React from 'react';

export default function HomePage() {
  return (
    <>
      <div>HomePage is showing</div>
      <TransactionsListMobile />
      <TransactionsList />
    </>
  );
}

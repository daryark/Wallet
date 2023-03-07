import { TransactionsList, TransactionsListMobile } from 'components';
import WithAuthRedirect from 'HOC/WithAuthRedirect';
// import CurrencyPage from 'pages/CurrencyPage/CurrencyPage';
import React from 'react';

function HomePage() {
  return (
    <>
      <div>HomePage is showing</div>
      <TransactionsListMobile />
      <TransactionsList />
      {/* <CurrencyPage /> */}
    </>
  );
}
export default WithAuthRedirect(HomePage, '/login');

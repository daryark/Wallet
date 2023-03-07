import React from 'react';
import { TransactionsList, TransactionsListMobile } from 'components';

import WithAuthRedirect from 'HOC/WithAuthRedirect';
// import CurrencyPage from 'pages/CurrencyPage/CurrencyPage';


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

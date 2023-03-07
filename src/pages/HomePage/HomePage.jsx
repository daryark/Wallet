// import { TransactionsList } from 'components';
import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';
import React from 'react';
import { TransactionsList, TransactionsListMobile } from 'components';

import WithAuthRedirect from 'HOC/WithAuthRedirect';
// import CurrencyPage from 'pages/CurrencyPage/CurrencyPage';


function HomePage() {
  return (
    <>
      <div>HomePage is showing</div>
      {/* //<TransactionsList /> */}
      <ModalAddTransaction />
      <TransactionsListMobile />
      {/* <TransactionsList /> */}
      {/* <CurrencyPage /> */}
    </>
  );
}
export default WithAuthRedirect(HomePage, '/login');

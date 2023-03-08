
import { TransactionsList, TransactionsListMobile } from 'components';
import CurrencyPage from 'pages/CurrencyPage/CurrencyPage';
import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';

import React from 'react';
// import { TransactionsList, TransactionsListMobile } from 'components';

import WithAuthRedirect from 'HOC/WithAuthRedirect';
import ModalBackdrop from 'components/ModalBackdrop/ModalBackdrop';
// import CurrencyPage from 'pages/CurrencyPage/CurrencyPage';

function HomePage() {
  return (
    <>
      <div>HomePage is showing</div>
      <ModalBackdrop />
      <ModalAddTransaction />
      {/* <TransactionsListMobile /> */}
      <TransactionsList />
      <CurrencyPage />

    </>
  );
}
export default WithAuthRedirect(HomePage, '/login');

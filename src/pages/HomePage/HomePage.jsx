import { TransactionsList } from 'components';
import CurrencyPage from 'pages/CurrencyPage/CurrencyPage';
import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';
import { useSelector } from 'react-redux';
import React from 'react';
// import { TransactionsList, TransactionsListMobile } from 'components';
import { selectIsEditModalOpen } from 'redux/global/global-selectors';
import WithAuthRedirect from 'HOC/WithAuthRedirect';
import ModalBackdrop from 'components/ModalBackdrop/ModalBackdrop';
// import CurrencyPage from 'pages/CurrencyPage/CurrencyPage';
import { ModalEditTransaction } from 'components/ModalEditTransaction/ModalEditTransaction';
function HomePage() {
  const isEditModalOpen = useSelector(selectIsEditModalOpen);
  return (
    <>
      <div>HomePage is showing</div>
      <ModalBackdrop />
      <ModalAddTransaction />
      {isEditModalOpen && <ModalEditTransaction />}
      {/* <TransactionsListMobile /> */}
      <TransactionsList />
      <CurrencyPage />
    </>
  );
}
export default WithAuthRedirect(HomePage, '/login');

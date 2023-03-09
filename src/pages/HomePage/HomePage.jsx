import { useSelector } from 'react-redux';
import React from 'react';

import {
  ButtonUp,
  TransactionsListMobile,
  Balance,
  TransactionsList,
} from 'components';

import CurrencyPage from 'pages/CurrencyPage/CurrencyPage';
import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';

import { selectIsEditModalOpen } from 'redux/global/global-selectors';

import WithAuthRedirect from 'HOC/WithAuthRedirect';
import { Container } from 'components/common/common.styled';
import ModalBackdrop from 'components/ModalBackdrop/ModalBackdrop';

import { ModalEditTransaction } from 'components/ModalEditTransaction/ModalEditTransaction';
function HomePage() {
  const isEditModalOpen = useSelector(selectIsEditModalOpen);
  return (
    <Container>
      <ModalBackdrop />
      <ModalAddTransaction />
      {isEditModalOpen && <ModalEditTransaction />}

      <Balance />

      <TransactionsListMobile />
      <ButtonUp />

      {/* <TransactionsList /> */}
      <CurrencyPage />
    </Container>
  );
}
export default WithAuthRedirect(HomePage, '/login');

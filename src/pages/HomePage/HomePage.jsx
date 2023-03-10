import { useSelector } from 'react-redux';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

import {
  ButtonUp,
  TransactionsListMobile,
  Balance,
  TransactionsList,
} from 'components';

import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';

import { selectIsEditModalOpen } from 'redux/global/global-selectors';

import WithAuthRedirect from 'HOC/WithAuthRedirect';
import { AddTransactionBtn } from 'components/AddTransactionBtn/AddTransactionBtn';
import { Container } from 'components/common/common.styled';

import { ModalEditTransaction } from 'components/ModalEditTransaction/ModalEditTransaction';
function HomePage() {
  const isEditModalOpen = useSelector(selectIsEditModalOpen);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <Container>
      <ModalAddTransaction />
      {isEditModalOpen && <ModalEditTransaction />}
      <AddTransactionBtn />
      {isMobile && <Balance />}

      {isMobile ? <TransactionsListMobile /> : <TransactionsList />}
      <ButtonUp />
    </Container>
  );
}
export default WithAuthRedirect(HomePage, '/login');

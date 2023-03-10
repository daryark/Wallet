
import { useSelector } from 'react-redux';
import React from 'react';
import { useMediaQuery } from 'react-responsive';


import {
  AddTransactionBtn,
  TransactionsList,
  TransactionsListMobile,
} from 'components';

import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';

import { selectIsEditModalOpen } from 'redux/global/global-selectors';

import WithAuthRedirect from 'HOC/WithAuthRedirect';
import { Container } from 'components/common/common.styled';

import { ModalEditTransaction } from 'components/ModalEditTransaction/ModalEditTransaction';
function HomePage() {

  const isEditModalOpen = useSelector(selectIsEditModalOpen);
  const isMobile = useMediaQuery({ maxWidth: 767 });


  return (
    <Container>
      <ModalAddTransaction />
      <AddTransactionBtn />
      {isMobile && <Balance />}

      {isMobile ? <TransactionsListMobile /> : <TransactionsList />}
      <ButtonUp />
    </Container>
  );
}
export default WithAuthRedirect(HomePage, '/login');

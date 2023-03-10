import React from 'react';
import { useMediaQuery } from 'react-responsive';

import {
  AddTransactionBtn,
  Balance,
  ButtonUp,
  TransactionsList,
  TransactionsListMobile,
} from 'components';

import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';

import WithAuthRedirect from 'HOC/WithAuthRedirect';
import { Container } from 'components/common/common.styled';

function HomePage() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <Container>
      <ModalAddTransaction />
      <AddTransactionBtn />
      {isMobile && <Balance />}

      {isMobile ? <TransactionsListMobile /> : <TransactionsList />}
      {isMobile && <ButtonUp />}
    </Container>
  );
}
export default WithAuthRedirect(HomePage, '/login');

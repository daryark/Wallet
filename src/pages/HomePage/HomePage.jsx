// import { TransactionsList } from 'components';
import { ButtonUp, TransactionsListMobile } from 'components';
import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';
import React from 'react';
// import { TransactionsList, TransactionsListMobile } from 'components';

import WithAuthRedirect from 'HOC/WithAuthRedirect';
import { Container } from 'components/common/common.styled';
// import CurrencyPage from 'pages/CurrencyPage/CurrencyPage';

function HomePage() {
  return (
    <Container>
      {/* <TransactionsList /> */}
      {/* <CurrencyPage /> */}
      <TransactionsListMobile />

      <ModalAddTransaction />
      <ButtonUp />
    </Container>
  );
}
export default WithAuthRedirect(HomePage, '/login');

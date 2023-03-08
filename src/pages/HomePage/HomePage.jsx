import { ButtonUp, TransactionsListMobile } from 'components';
// import CurrencyPage from 'pages/CurrencyPage/CurrencyPage';
import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';

import WithAuthRedirect from 'HOC/WithAuthRedirect';
import { Container } from 'components/common/common.styled';
import ModalBackdrop from 'components/ModalBackdrop/ModalBackdrop';

function HomePage() {
  return (
    <Container>
      <ModalBackdrop />
      <ModalAddTransaction />

      <TransactionsListMobile />
      <ButtonUp />

      {/* <TransactionsList /> */}
      {/* <CurrencyPage /> */}
    </Container>
  );
}
export default WithAuthRedirect(HomePage, '/login');

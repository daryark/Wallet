import { LoaderModalAddTransactionStyled } from './LoaderModalAddTransaction.styled';

const LoaderModalAddTransaction = ({ transactionType, amount }) => {
  return (
    <LoaderModalAddTransactionStyled
      isIncome={transactionType === 'INCOME' ? true : false}
    >
      {transactionType === 'INCOME' && `+${amount}`}
      {transactionType === 'EXPENSE' && `-${amount}`}
    </LoaderModalAddTransactionStyled>
  );
};

export default LoaderModalAddTransaction;

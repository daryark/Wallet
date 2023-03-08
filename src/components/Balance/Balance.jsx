import { useSelector } from 'react-redux';
import { selectBalance } from 'redux/transactions/trans-selectors';
import { BalanceBox, BalanceSum } from './Balance.styled';

export const Balance = () => {
  const getBalance = useSelector(selectBalance);
  const balance = parseFloat(getBalance).toFixed(2);

  return (
    <BalanceBox>
      <p>Your balance</p>
      <BalanceSum>&#x20b4; {balance}</BalanceSum>
    </BalanceBox>
  );
};

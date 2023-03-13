import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectBalance } from 'redux/transactions/trans-selectors';
import { BalanceBox, BalanceSum } from './Balance.styled';

export const Balance = () => {
  const getBalance = useSelector(selectBalance);
  const balance = parseFloat(getBalance).toFixed(2);
  const { t } = useTranslation();

  return (
    <BalanceBox>
      <p>{t('balanceTitle')}</p>
      <BalanceSum>&#x20b4; {balance}</BalanceSum>
    </BalanceBox>
  );
};

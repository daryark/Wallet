import { useSelector } from 'react-redux';
import { selectBalance } from 'redux/transactions/trans-selectors';
import { BalanceBox, BalanceSum } from './Balance.styled';
import { useTranslation } from 'react-i18next';

export const Balance = () => {
  const getBalance = useSelector(selectBalance);
  const { t } = useTranslation();
  const balance = parseFloat(getBalance).toFixed(2);

  return (
    <BalanceBox>
      <p>{t('balanceTitle')}</p>
      <BalanceSum>&#x20b4; {balance}</BalanceSum>
    </BalanceBox>
  );
};

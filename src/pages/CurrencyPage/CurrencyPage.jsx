import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchCurrencyMonoBank } from 'redux/monobank/mono-operations';
import { selectCurrency } from 'redux/monobank/mono-selectors';
import { Loader } from './Loader';
import { ReactComponent as Mountain } from 'components/images/Mountain.svg';

import css from '../CurrencyPage/CurrencyPage.module.css';
import { StyledCurrencyThumb } from './styles';
import { setCurrencyFromLocalStorage } from 'redux/monobank/monoSlice';
import { selectIsLoading } from 'redux/global/global-selectors';
import WithAuthRedirect from 'HOC/WithAuthRedirect';
const oneHour = 3600000;

function CurrencyPage() {
  const dispatch = useDispatch();
  const currency = useSelector(selectCurrency);
  const loading = useSelector(selectIsLoading);

  useEffect(() => {
    const currencyFromStorage = JSON.parse(
      localStorage.getItem('currencyInTheMoment')
    );
    const dateLastFetching =
      currencyFromStorage &&
      Object.values(...currencyFromStorage).find((el, idx) => {
        return idx === 2;
      });

    const newDate = Number(new Date().getTime());

    const timeAfterLastFetch = newDate - dateLastFetching;
    if (timeAfterLastFetch >= oneHour) {
      dispatch(fetchCurrencyMonoBank());
    } else {
      setCurrencyFromLocalStorage(currencyFromStorage);
    }
  }, [dispatch]);

  return (
    <StyledCurrencyThumb>
      {/* <table className={css.currencyTable}>
        <thead>
          <tr className={css.currencyTr}>
            <th className={css.currencyHead}>Currency</th>
            <th className={css.currencyHead}>Purchase</th>
            <th className={css.currencyHead}>Sale</th>
          </tr>
        </thead>
        {loading ? (
          <Loader />
        ) : (
          <tbody className={css.currencyBody}>
            {currency.map(({ currencyCodeA, rateBuy, rateSell }) => {
              return (
                <tr key={currencyCodeA} className={css.currencyTrBody}>
                  <td className={css.currencyCeil}>
                    {currencyCodeA === 840 ? 'USD' : 'EUR'}
                  </td>
                  <td className={css.currencyCeil}>{rateBuy.toFixed(2)}</td>
                  <td className={css.currencyCeil}>{rateSell.toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        )}
      </table> */}
      <Mountain />
    </StyledCurrencyThumb>
  );
}

export default WithAuthRedirect(CurrencyPage, '/login');

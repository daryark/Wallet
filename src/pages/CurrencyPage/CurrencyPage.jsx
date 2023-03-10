import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import { Loader } from './Loader';
import { fetchCurrencyMonoBank } from 'redux/monobank/mono-operations';
import { selectCurrency } from 'redux/monobank/mono-selectors';

import { StyledCurrencyTable } from './currencyStyles';
import { ReactComponent as MountainDesk } from 'images/mountain/MountainDeskTop.svg';
import { ReactComponent as MountainMob } from 'images/mountain/MountainMob.svg';

import {
  StyledCurrencyThumb,
  StyledCurrencyThead,
  StyledBodyTr,
  StyledCurrencyTr,
} from './currencyStyles';

import { useTranslation } from 'react-i18next';

import { setCurrencyFromLocalStorage } from 'redux/monobank/monoSlice';
import { selectIsLoading } from 'redux/global/global-selectors';
import WithAuthRedirect from 'HOC/WithAuthRedirect';
const oneHour = 3600000;

function CurrencyPage() {
  const isMobile = useMediaQuery({ query: '(min-width: 370px)' });

  const dispatch = useDispatch();
  const { t } = useTranslation();
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
    <>
      <StyledCurrencyThumb>
        <StyledCurrencyTable>
          <StyledCurrencyThead>
            <StyledCurrencyTr>
              <th>{t('currency')}</th>
              <th>{t('currencyPurchase')}</th>
              <th>{t('currencySale')}</th>
            </StyledCurrencyTr>
          </StyledCurrencyThead>
          {loading ? (
            <tbody>
              <tr>
                <td>
                  <Loader />
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {currency.map(({ currencyCodeA, rateBuy, rateSell }) => {
                return (
                  <StyledBodyTr key={currencyCodeA}>
                    <td>{currencyCodeA === 840 ? 'USD' : 'EUR'}</td>
                    <td>{rateBuy.toFixed(2)}</td>
                    <td>{rateSell.toFixed(2)}</td>
                  </StyledBodyTr>
                );
              })}
            </tbody>
          )}
        </StyledCurrencyTable>

        {!isMobile ? <MountainDesk /> : <MountainMob />}
      </StyledCurrencyThumb>
    </>
  );
}

export default WithAuthRedirect(CurrencyPage, '/login');

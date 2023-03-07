import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchCurrencyMonoBank } from 'redux/monobank/mono-operations';
import { selectCurrency } from 'redux/monobank/mono-selectors';
import css from '../CurrencyPage/CurrencyPage.module.css';
import { setCurrencyFromLocalStorage } from 'redux/monobank/monoSlice';
const oneHour = 3600000;

export default function CurrencyPage() {
  const dispatch = useDispatch();
  const currency = useSelector(selectCurrency);

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
    <div className={css.thumb}>
      <table>
        <thead className={css.thead}>
          <tr>
            <th>Currency</th>
            <th>Purchase</th>
            <th>Sale</th>
          </tr>
        </thead>
        <tbody>
          {currency.map(({ currencyCodeA, date, rateBuy, rateSell }) => {
            return (
              <tr key={currencyCodeA}>
                <td>{currencyCodeA === 840 ? 'USD' : 'EUR'}</td>
                <td>{rateBuy}</td>
                <td>{rateSell}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

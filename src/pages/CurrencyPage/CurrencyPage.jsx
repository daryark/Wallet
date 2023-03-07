import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchCurrencyMonoBank } from 'redux/monobank/mono-operations';
import { selectCurrency } from 'redux/monobank/mono-selectors';

export default function CurrencyPage() {
  const dispatch = useDispatch();
  const currency = useSelector(selectCurrency);

  useEffect(() => {
    const currencyFromStorage = JSON.parse(
      localStorage.getItem('currencyInTheMoment')
    );
    const dateLastFetching = Object.values(...currencyFromStorage).find(
      (el, idx) => {
        return idx === 2;
      }
    );

    const newDate = Number(new Date().getTime());

    const shouldNewFetch = newDate - dateLastFetching;
    if (shouldNewFetch >= 86400000) return;

    dispatch(fetchCurrencyMonoBank());
  }, [dispatch]);

  return (
    <div>
      <table>
        <thead>
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

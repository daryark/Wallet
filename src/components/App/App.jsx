import Layout from 'components/Layout/Layout';
import { routes } from 'routes';
import React, { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const CurrencyPage = lazy(() => import('pages/CurrencyPage/CurrencyPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));

export function App() {
  return (
    <>
      <Routes>
        <Route path={routes.HOME} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={routes.CURRENCY_PAGE} element={<CurrencyPage />}></Route>
          <Route path={routes.REGISTER_PAGE} element={<RegisterPage />} />
          <Route path={routes.LOGIN_PAGE} element={<LoginPage />} />
          <Route path="*" element={<Navigate to={routes.HOME} />} />
        </Route>
      </Routes>
    </>
  );
}

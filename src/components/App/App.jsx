import React, { lazy, useEffect } from 'react';
import { Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from 'components/Layout/Layout';
import { routes } from 'routes';
import { getUserInfoRequest } from 'redux/auth/auth-operations';

// import RegisterPage from 'pages/RegisterPage/RegisterPage';
// import LoginPage from 'pages/LoginPage/LoginPage';
import { Loader } from 'components';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const CurrencyPage = lazy(() => import('pages/CurrencyPage/CurrencyPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const StatisticsPage = lazy(() =>
  import('pages/StatisticsPage/StatisticsPage')
);

// console.log(window.innerWidth);

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfoRequest());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={routes.HOME} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={routes.CURRENCY_PAGE} element={<CurrencyPage />}></Route>
          <Route path={routes.STATISTICS_PAGE} element={<StatisticsPage />} />
          <Route path="*" element={<Navigate to={routes.HOME} />} />
        </Route>
        <Route path={routes.REGISTER_PAGE} element={<RegisterPage />} />
        <Route path={routes.LOGIN_PAGE} element={<LoginPage />} />
      </Routes>
    </Suspense>
  );
}

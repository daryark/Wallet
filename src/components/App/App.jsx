import React, { lazy, useEffect } from 'react';
import { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { ThemeProvider } from 'styled-components';
import { selectTheme } from 'redux/global/global-selectors';
import { ReactComponent as EllipsePink } from 'assets/bg/Ellipse_pink_2.svg';
import { ReactComponent as EllipsePurple } from 'assets/bg/Ellipse_purple_2.svg';

import Layout from 'components/Layout/Layout';
import { routes } from 'routes';
import { getUserInfoRequest } from 'redux/auth/auth-operations';
// import RegisterPage from 'pages/RegisterPage/RegisterPage';
// import LoginPage from 'pages/LoginPage/LoginPage';

import { Loader } from 'components';
import { Toaster } from 'components/Toaster/Toaster';
import { theme } from 'styles/theme';
import { colors } from 'styles/colors';
import GlobalStyles from 'styles/GlobalStyles/GlobalStyles.styled';
import { Background } from 'components/Layout/Layout.styled';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const CurrencyPage = lazy(() => import('pages/CurrencyPage/CurrencyPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const StatisticsPage = lazy(() =>
  import('pages/StatisticsPage/StatisticsPage')
);

export function App() {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const themeTitle = useSelector(selectTheme);

  const normalizedTheme = { ...theme, ...colors[themeTitle] };

  useEffect(() => {
    dispatch(getUserInfoRequest());
  }, [dispatch]);

  return (
    <ThemeProvider theme={normalizedTheme}>
      <GlobalStyles />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={routes.HOME} element={<Layout />}>
            <Route index element={<HomePage />} />
            {isMobile && (
              <Route
                path={routes.CURRENCY_PAGE}
                element={<CurrencyPage />}
              ></Route>
            )}
            <Route path={routes.STATISTICS_PAGE} element={<StatisticsPage />} />
            <Route path="*" element={<Navigate to={routes.HOME} />} />
          </Route>
          <Route path={routes.REGISTER_PAGE} element={<RegisterPage />} />
          <Route path={routes.LOGIN_PAGE} element={<LoginPage />} />
        </Routes>
      </Suspense>
      <Background>
        <EllipsePink className="ellipse_pink" />
        <EllipsePurple className="ellipse_purple" />
        <div className="blur" />
      </Background>
      <Toaster />
    </ThemeProvider>
  );
}

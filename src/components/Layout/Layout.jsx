import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BsSun, BsMoon } from 'react-icons/bs';

import { Header, Loader, Sidebar } from 'components';

import { selectTheme } from 'redux/global/global-selectors';
import { toggleThemeTitle } from 'redux/global/globalSlice';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

import { theme } from 'styles/theme';
import { colors } from 'styles/colors';
import GlobalStyles from 'styles/GlobalStyles/GlobalStyles.styled';

export default function Layout() {
  const themeTitle = useSelector(selectTheme);
  const normalizedTheme = { ...theme, ...colors[themeTitle] };
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const handleThemeChange = e => {
    dispatch(toggleThemeTitle(themeTitle));
  };

  return (
    <ThemeProvider theme={normalizedTheme}>
      <GlobalStyles />
      {isLoggedIn && (
        <>
          <Header />
          <Sidebar />
          <button onClick={handleThemeChange}>
            {themeTitle === 'light' ? <BsMoon /> : <BsSun />}
          </button>
        </>
      )}
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </ThemeProvider>
  );
}

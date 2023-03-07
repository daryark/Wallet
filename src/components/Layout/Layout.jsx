import React, { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BsSun, BsMoon } from 'react-icons/bs';

import { Header, Loader } from 'components';

import { selectTheme } from 'redux/global/global-selectors';
import { theme } from 'styles/theme';
import { colors } from 'styles/colors';
import { toggleThemeTitle } from 'redux/global/globalSlice';

// import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

export default function Layout() {
  const themeTitle = useSelector(selectTheme);
  const normalizedTheme = { ...theme, ...colors[themeTitle] };
  const dispatch = useDispatch();

  const handleThemeChange = e => {
    dispatch(toggleThemeTitle(themeTitle));
  };

  return (
    <ThemeProvider theme={normalizedTheme}>
      {/* {isLoggedIn ? ( */}
      <>
        <Header />
        <nav>
          <button onClick={handleThemeChange}>
            {themeTitle === 'light' ? <BsMoon /> : <BsSun />}
          </button>
          <ul>
            <li>
              <NavLink to={'/home'}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'/statistics'}>Statistics</NavLink>
            </li>
          </ul>
        </nav>
      </>
      {/* ) : ( */}
      <ul>
        <li>
          <NavLink to={'/register'}>Sign Up</NavLink>
        </li>
        <li>
          <NavLink to={'/login'}>Sign In</NavLink>
        </li>
      </ul>
      {/* )} */}
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </ThemeProvider>
  );
}

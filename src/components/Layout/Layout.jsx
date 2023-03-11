import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BsSun, BsMoon } from 'react-icons/bs';

import { Footer, Header, Loader, Sidebar } from 'components';

import { selectTheme } from 'redux/global/global-selectors';
import { toggleThemeTitle } from 'redux/global/globalSlice';

import { theme } from 'styles/theme';
import { colors } from 'styles/colors';
import GlobalStyles from 'styles/GlobalStyles/GlobalStyles.styled';
import { ThemeButton } from './Layout.styled';
import { StyledMain } from 'components/common/FooterPusher.styled';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { Suspense } from 'react';

export default function Layout() {
  const themeTitle = useSelector(selectTheme);
  const normalizedTheme = { ...theme, ...colors[themeTitle] };

  const dispatch = useDispatch();

  const handleThemeChange = e => {
    dispatch(toggleThemeTitle(themeTitle));
  };

  return (
    <ThemeProvider theme={normalizedTheme}>
      <GlobalStyles />

      {/* <StyledFooterPusher> */}
      {selectIsLoggedIn && (
        <>
          <Header />
          <Sidebar />
          <ThemeButton onClick={handleThemeChange}>
            {themeTitle === 'light' ? <BsMoon /> : <BsSun />}
          </ThemeButton>
        </>
      )}
      <StyledMain>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </StyledMain>
      <Footer />
      {/* </StyledFooterPusher> */}

      {/* <div
        style={{
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          top: 0,
          backdropFilter: 'blur(25px)',
          zIndex: -1,
        }}
      />  */}
    </ThemeProvider>
  );
}

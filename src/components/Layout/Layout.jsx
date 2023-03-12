// import React, { Suspense } from 'react';
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
// import { Background, Container, ThemeButton } from './Layout.styled';
import {
  Background,
  Container,
  StyledMain,
  ThemeButton,
} from 'components/Layout/Layout.styled';
// import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { Suspense } from 'react';
import { ReactComponent as EllipsePink } from 'assets/bg/Ellipse_pink_2.svg';
import { ReactComponent as EllipsePurple } from 'assets/bg/Ellipse_purple_2.svg';

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
      <ThemeButton onClick={handleThemeChange}>
        {themeTitle === 'light' ? <BsMoon /> : <BsSun />}
      </ThemeButton>
      <Header />

      <Container>
        <Sidebar />
        <StyledMain>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </StyledMain>
      </Container>

      <Footer />

      <Background>
        <EllipsePink className="ellipse_pink" />
        <EllipsePurple className="ellipse_purple" />
        <div className="blur" />
      </Background>
    </ThemeProvider>
  );
}

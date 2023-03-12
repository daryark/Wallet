// import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer, Header, Loader, Sidebar } from 'components';

// import { Background, Container, ThemeButton } from './Layout.styled';
import { Container, StyledMain } from 'components/Layout/Layout.styled';
// import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { Suspense } from 'react';

export default function Layout() {
  return (
    // <ThemeProvider theme={normalizedTheme}>
    //   <GlobalStyles />
    <>
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

      {/* </ThemeProvider> */}
    </>
  );
}

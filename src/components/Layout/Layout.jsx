import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { Footer, Header, Loader, Sidebar } from 'components';

// import { Background, Container, ThemeButton } from './Layout.styled';
import { Container, StyledMain } from 'components/Layout/Layout.styled';
// import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { Suspense } from 'react';
import {
  selectIsEditModalOpen,
  selectIsLogoutModalOpen,
  selectIsModalTeamOpen,
} from 'redux/global/global-selectors';

export default function Layout() {
  const editModalOpen = useSelector(selectIsEditModalOpen);
  const teamModalOpen = useSelector(selectIsModalTeamOpen);
  const logoutModalOpen = useSelector(selectIsLogoutModalOpen);

  useEffect(() => {
    if (teamModalOpen || editModalOpen || logoutModalOpen) {
      document.body.style.overflow = 'hidden';
      return;
    }
    document.body.style.overflow = '';
    return;
  }, [editModalOpen, logoutModalOpen, teamModalOpen]);
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

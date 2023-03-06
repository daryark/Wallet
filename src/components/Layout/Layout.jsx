import React, { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Header } from 'components/Header/Header';

import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

export default function Layout() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      {isLoggedIn && <Header />}
      <header>
        <nav>
          <h1>
            <NavLink to={'/home'}>Wallet + logo</NavLink>
          </h1>

          {/* {isLoggedIn ? ( */}
          <>
            <div>
              <NavLink to={'/home'}>Home</NavLink>
              {/* different content on logged in user and no-logged in */}
              <NavLink to={'/diagram'}>Dashboard</NavLink>
              {/* <Logout /> //add logout component
                    //add currency page on media-mobile */}
            </div>
          </>
          {/* ) : ( */}
          <ul>
            <li>
              <NavLink to={'/home'}>Home</NavLink>
              {/* different content on logged in user and no-logged in */}
            </li>
            <li>
              <NavLink to={'/register'}>Sign Up</NavLink>
            </li>
            <li>
              <NavLink to={'/login'}>Sign In</NavLink>
            </li>
          </ul>
          {/* )} */}
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loader...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

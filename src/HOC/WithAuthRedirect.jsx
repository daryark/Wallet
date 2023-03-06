import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-rounpmter-dom';
import { selectIsLoggedIn } from 'redux/user/selectors';

function WithAuthRedirect(Component, navigateTo) {
  const ComponentWithRedirect = props => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return isLoggedIn ? <Component {...props} /> : <Navigate to={navigateTo} />;
  };
  return ComponentWithRedirect;
}

export default WithAuthRedirect;

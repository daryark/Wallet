/* eslint-disable no-undef */
import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { loginRequest, registerRequest } from 'redux/auth/auth-operations';
import { StyledGoogleRegister } from './GoogleRegister.styled';

export function GoogleRegister() {
  const [userData, setUserData] = useState(null);
  const dispatch = useDispatch();

  const path = window.location.pathname;

  function handleCallbackResponse(response) {
    const userObject = jwt_decode(response.credential);
    // console.log(userObject);

    setUserData(userObject);
  }

  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id:
        '50929806285-ip85ltqjcpursagh0h3homfepvn7pdn7.apps.googleusercontent.com',
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      // type: 'icon',
      theme: 'filled_blue',
      shape: 'circle',
      size: 'small',
      text: path === '/Wallet/register' ? 'signup_with' : 'signin_with',
    });
  }, [path]);

  useEffect(() => {
    //email field used kinda password because of no access to backend or ability to modify it
    //and need to pass some password (unique identifier of user success login/registration)to pass it to database
    const password = userData?.email.split('').reverse().join('');

    //change the pathname to : "/register"
    if (path === '/Wallet/register') {
      dispatch(
        registerRequest({
          email: userData?.email,
          password,
          username: userData?.name,
        })
      );
    }
    dispatch(
      loginRequest({
        email: userData?.email,
        password,
      })
    );
  }, [dispatch, path, userData]);

  return (
    <StyledGoogleRegister>
      <div id="signInDiv"></div>
    </StyledGoogleRegister>
  );
}

/* eslint-disable no-undef */
import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { loginRequest, registerRequest } from 'redux/auth/auth-operations';
import { StyledGoogleRegister } from './GoogleRegister.styled';

export function GoogleRegister() {
  const [userData, setUserData] = useState(null);
  const dispatch = useDispatch();

  function handleCallbackResponse(response) {
    const userObject = jwt_decode(response.credential);
    // console.log(userObject);

    setUserData(userObject);
  }

  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id:
        '161461164988-67rsmrpvfbu1oiafg1lro119oa1evv5k.apps.googleusercontent.com',
      callback: handleCallbackResponse,
    });

    // '665888736356-aq6fvfmau6mupt4nfbms5tfch0u2698i.apps.googleusercontent.com',

    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      // type: 'icon',
      theme: 'filled_blue',
      shape: 'circle',
      size: 'small',
    });
  }, []);

  useEffect(() => {
    const password = userData?.email.split('').reverse().join('');

    //change the pathname to : "/register"
    if (window.location.pathname === '/Wallet/register') {
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
  }, [dispatch, userData]);

  return (
    <StyledGoogleRegister>
      <div id="signInDiv"></div>
    </StyledGoogleRegister>
  );
}

/* eslint-disable no-undef */
import { useEffect } from 'react';
// import { FcGoogle } from 'react-icons/fc';
import { StyledGoogleRegister } from './GoogleRegister.styled';

export function GoogleRegister() {
  function handleCallbackResponse(response) {
    console.log('encoded JWT ID token' + response.credential);
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        '161461164988-67rsmrpvfbu1oiafg1lro119oa1evv5k.apps.googleusercontent.com',
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(
      document.getElementById('signInDiv')
      // {theme: "outline", size: "large" }
    );
  }, []);

  return (
    <StyledGoogleRegister>
      <div id="signInDiv"></div>
    </StyledGoogleRegister>
  );
}

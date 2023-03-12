// import { AuthContainer } from 'components/common/common.styled';
// import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
// import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

// export default function RegisterPage() {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!isLoggedIn) return;

//     navigate('/');
//   }, [isLoggedIn, navigate]);

//   return (
//     <AuthContainer>
//       <RegistrationForm />
//     </AuthContainer>
//   );
// }

import { AuthContainer } from 'components/common/common.styled';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import {
  BgContainer,
  LoginText,
  SectionLogin,
  SvgWrapper,
} from 'pages/LoginPage/LoginPage.styled';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { ImgRegister } from './RegisterPage.styled';

export default function RegisterPage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) return;

    navigate('/');
  }, [isLoggedIn, navigate]);

  return (
    <SectionLogin>
      <AuthContainer>
        <SvgWrapper>
          <BgContainer>
            <ImgRegister />
            <LoginText>Finance App</LoginText>
          </BgContainer>
          <RegistrationForm />
        </SvgWrapper>
      </AuthContainer>
    </SectionLogin>
  );
}

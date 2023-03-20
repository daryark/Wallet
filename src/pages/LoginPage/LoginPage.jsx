import { AuthContainer } from 'components/common/common.styled';
import LoginForm from 'components/LoginForm/LoginForm';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import {
  BgContainer,
  ImgLogin,
  LoginText,
  SectionLogin,
  SvgWrapper,
} from './LoginPage.styled';

export default function LoginPage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    if (!isLoggedIn) return;

    navigate('/');
  }, [isLoggedIn, navigate]);

  return (
    <>
      {isMobile ? (
        <LoginForm />
      ) : (
        <SectionLogin>
          <AuthContainer>
            <SvgWrapper>
              <BgContainer>
                <ImgLogin />
                <LoginText>Finance App</LoginText>
              </BgContainer>
              <LoginForm />
            </SvgWrapper>
          </AuthContainer>
        </SectionLogin>
      )}
    </>
  );
}

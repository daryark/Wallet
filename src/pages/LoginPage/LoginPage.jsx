import { Container } from 'components/common/common.styled';
import LoginForm from 'components/LoginForm/LoginForm';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

export default function LoginPage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) return;

    navigate('/');
  }, [isLoggedIn, navigate]);
  return (
    <Container>
      LoginPage
      <LoginForm />
    </Container>
  );
}

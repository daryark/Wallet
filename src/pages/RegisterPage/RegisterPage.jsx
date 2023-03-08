import { AuthContainer } from 'components/common/common.styled';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

export default function RegisterPage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) return;

    navigate('/');
  }, [isLoggedIn, navigate]);
  return (
    <AuthContainer>
      <RegistrationForm />
    </AuthContainer>
  );
}

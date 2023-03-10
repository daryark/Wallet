import AuthButton from 'components/AuthButton/AuthButton';
import AuthButtonActive from 'components/AuthButtonActive/AuthButtonActive';
import AuthField from 'components/AuthField/AuthField';

import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { registerRequest } from 'redux/auth/auth-operations';

import registerSchema from './registerSchema';

import { RegisterBox } from './RegistrationForm.styled';
import { MdEmail, MdLock, MdAccountBox } from 'react-icons/md';
import AuthLogo from 'components/AuthLogo/AuthLogo';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { selectError } from 'redux/global/global-selectors';

const initialValues = {
  email: '',
  password: '',
  confirmPass: '',
  name: '',
};

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector(selectError);

  useEffect(() => {
    toast.error(error);
  }, [error]);

  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    dispatch(registerRequest({ email, password, username: name }));
    resetForm();
  };

  const changeRoute = () => {
    const path = '/login';
    navigate(path);
  };

  return (
    <RegisterBox>
      <AuthLogo />
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <AuthField
            icon={MdEmail}
            type="email"
            name="email"
            placeholder="E-mail"
          />

          <AuthField
            icon={MdLock}
            type="password"
            name="password"
            placeholder="Password"
          />

          <AuthField
            icon={MdLock}
            type="password"
            name="confirmPass"
            placeholder="Confirm password"
          />

          <AuthField
            icon={MdAccountBox}
            type="text"
            name="name"
            placeholder="First name"
          />

          <AuthButtonActive text="Register" />
          <AuthButton text="Log in" path={'/login'} onClick={changeRoute} />
        </Form>
      </Formik>
    </RegisterBox>
  );
};

export default RegistrationForm;

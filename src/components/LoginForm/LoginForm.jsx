import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginRequest } from 'redux/auth/auth-operations';
import { LoginBox } from './LoginForm.styled';

import * as Yup from 'yup';
import AuthButtonActive from 'components/AuthButtonActive/AuthButtonActive';
import AuthButton from 'components/AuthButton/AuthButton';
import AuthField from 'components/AuthField/AuthField';

import { MdEmail, MdLock } from 'react-icons/md';
import AuthLogo from 'components/AuthLogo/AuthLogo';

const initialValues = {
  email: '',
  password: '',
};

const loginSchema = Yup.object().shape({
  email: Yup.string().email('E-mail is invalid').required('E-mail is required'),
  password: Yup.string().required('Password is required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(loginRequest({ email, password }));
    resetForm();
  };

  const changeRoute = () => {
    const path = '/register';
    navigate(path);
  };

  return (
    <LoginBox>
      <AuthLogo />
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
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
            style={{ marginBottom: '42px' }}
            type="password"
            name="password"
            placeholder="Password"
          />

          <AuthButtonActive text="Log in" />
          <AuthButton
            text="Register"
            path={'/register'}
            onClick={changeRoute}
          />
        </Form>
      </Formik>
    </LoginBox>
  );
};

export default LoginForm;

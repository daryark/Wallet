import AuthButton from 'components/AuthButton/AuthButton';
import AuthButtonActive from 'components/AuthButtonActive/AuthButtonActive';
import AuthField from 'components/AuthField/AuthField';

import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { registerRequest } from 'redux/auth/auth-operations';

import registerSchema from './registerSchema';
import { RegisterBox } from './RegistrationForm.styled';

const initialValues = {
  email: '',
  password: '',
  confirmPass: '',
  username: '',
};

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = ({ username, email, password }, { resetForm }) => {
    dispatch(registerRequest({ email, password, username }));
    resetForm();
  };

  const changeRoute = () => {
    const path = '/login';
    navigate(path);
  };

  return (
    <RegisterBox>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <AuthField type="email" name="email" placeholder="E-mail" />
          <AuthField type="password" name="password" placeholder="Password" />
          <AuthField
            type="password"
            name="confirmPass"
            placeholder="Confirm password"
          />

          <AuthField type="text" name="username" placeholder="First name" />

          <AuthButtonActive text="Register" />
          <AuthButton text="Log in" onClick={changeRoute} />
        </Form>
      </Formik>
    </RegisterBox>
  );
};

export default RegistrationForm;

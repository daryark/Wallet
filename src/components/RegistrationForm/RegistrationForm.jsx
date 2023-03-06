import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { registerRequest } from 'redux/auth/auth-operations';
import registerSchema from './registerSchema';

const initialValues = {
  email: '',
  password: '',
  confirmPass: '',
  name: '',
};

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = ({ email, password, name }, { resetForm }) => {
    dispatch(registerRequest({ email, password, name }));
    resetForm();
  };

  const changeRoute = () => {
    const path = '/login';
    navigate(path);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field type="email" name="email" placeholder="E-mail" />
          <Field type="password" name="password" placeholder="Password" />
          <Field
            type="password"
            name="confirmPass"
            placeholder="Confirm password"
          />

          <Field type="text" name="name" placeholder="First name" />

          <button text="Register"></button>
          <button text="Log in" onClick={changeRoute}></button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;

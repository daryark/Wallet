import PasswordStrengthIndicator from 'components/RegistrationForm/PasswordStrengthIndicator/PasswordStrengthIndicator';
import { useField } from 'formik';
import { useLocation } from 'react-router';
import { ErrorMessage, Input, InputBox, InputLabel } from './AuthField.styled';

const AuthField = ({ icon: Icon, ...props }) => {
  const [field, meta] = useField(props);
  const location = useLocation();

  return (
    <>
      <InputLabel>
        <InputBox>
          <Input {...field} {...props} />
          <Icon size={24} />
        </InputBox>
        {field.name === 'password' && location.pathname === '/register' && (
          <PasswordStrengthIndicator password={field.value} />
        )}
        {meta.touched && meta.error ? (
          <ErrorMessage className="error">{meta.error}</ErrorMessage>
        ) : null}
      </InputLabel>
    </>
  );
};

export default AuthField;

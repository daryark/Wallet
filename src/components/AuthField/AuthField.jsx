import { useField } from 'formik';
import { ErrorMessage, Input, InputBox, InputLabel } from './AuthField.styled';

const AuthField = ({ icon: Icon, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <InputLabel>
        <InputBox>
          <Input {...field} {...props} />
          <Icon />
        </InputBox>
        {meta.touched && meta.error ? (
          <ErrorMessage className="error">{meta.error}</ErrorMessage>
        ) : null}
      </InputLabel>
    </>
  );
};

export default AuthField;

// import { useLocation } from 'react-router-dom';
import { ErrorMessage, useField } from 'formik';
import { InputBox, StyledField } from './AuthField.styled';

const AuthField = ({ Icon, ...props }) => {
  //   const location = useLocation();
  const [field, meta] = useField(props);
  console.log(field);
  console.log(meta);
  return (
    <InputBox>
      {Icon && <Icon />}
      <StyledField {...field} {...props} autoComplete="off" />
      {/* {errors.email && touched.email ? <div>{errors.email}</div> : null}
      <ErrorMessage name="email" />
      <ErrorMessage component="div" name={field.name} /> */}
      <ErrorMessage component="div" name={field.name} />
      {/* <ErrorMessage name="email" /> */}
    </InputBox>
  );
};

export default AuthField;

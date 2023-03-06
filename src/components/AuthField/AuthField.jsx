// import { useLocation } from 'react-router-dom';
import { useField } from 'formik';
import { InputBox, StyledField } from './AuthField.styled';

const AuthField = ({ svg, ...props }) => {
  //   const location = useLocation();
  const [field] = useField(props);

  return (
    <InputBox>
      <StyledField {...field} {...props} autoComplete="off" />
      {/* <ErrorMessage
          component="div"
          name={field.name}
          
        /> */}
    </InputBox>
  );
};

export default AuthField;

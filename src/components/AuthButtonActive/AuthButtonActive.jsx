import { useFormik } from 'formik';
import { StyledAuthButtonActive } from './AuthButtonActive.styled';

const AuthButtonActive = ({ text }) => {
  const { isSubmitting } = useFormik({});

  return (
    <StyledAuthButtonActive type="submit" disabled={isSubmitting}>
      {text}
    </StyledAuthButtonActive>
  );
};

export default AuthButtonActive;

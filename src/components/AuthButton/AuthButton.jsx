import { StyledAuthButton } from './AuthButton.styled';

const AuthButton = ({ text, onClick }) => {
  return (
    <StyledAuthButton type="button" onClick={onClick}>
      {text}
    </StyledAuthButton>
  );
};

export default AuthButton;

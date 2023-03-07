import { NavLink } from 'react-router-dom';
import { StyledAuthButton } from './AuthButton.styled';

const AuthButton = ({ text, path, onClick }) => {
  return (
    <StyledAuthButton type="button" onClick={onClick}>
      <NavLink to={path}>{text}</NavLink>
    </StyledAuthButton>
  );
};

export default AuthButton;

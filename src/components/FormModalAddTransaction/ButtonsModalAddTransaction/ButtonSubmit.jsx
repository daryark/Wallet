import { ButtonSubmitStyled } from './FormButtons.styled';

const ButtonSubmit = ({ className, text }) => {
  return (
    <ButtonSubmitStyled type="submit" className={className}>
      {text}
    </ButtonSubmitStyled>
  );
};

export default ButtonSubmit;

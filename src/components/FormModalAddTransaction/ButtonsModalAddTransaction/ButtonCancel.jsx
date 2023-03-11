import { ButtonCancelStyled } from './FormButtons.styled';

const ButtonCancel = ({ handleCloseModal, text }) => {
  return (
    <ButtonCancelStyled
      type="button"
      className="cancel-btn"
      onClick={handleCloseModal}
    >
      {text}
    </ButtonCancelStyled>
  );
};

export default ButtonCancel;

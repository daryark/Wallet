import { isModalAddTransactionOpen } from 'redux/global/globalSlice';

import { BackdropStyled } from './ModalBackdrop.styled';

function ModalBackdrop({ children }) {
  return (
    <BackdropStyled onClick={isModalAddTransactionOpen}>
      {children}
    </BackdropStyled>
  );
}

export default ModalBackdrop;

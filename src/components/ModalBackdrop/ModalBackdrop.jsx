import { useDispatch } from 'react-redux';

import { BackdropStyled } from './ModalBackdrop.styled';

function ModalBackdrop({ children, randomModalClose }) {
  const dispatch = useDispatch();

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      dispatch(randomModalClose());
    }
  };

  return (
    <BackdropStyled onClick={handleBackdropClick}>{children}</BackdropStyled>
  );
}

export default ModalBackdrop;

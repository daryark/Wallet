import { useWindowSize } from 'hooks/useWindowSize';
import { useDispatch } from 'react-redux';

import { BackdropStyled } from './ModalBackdrop.styled';

function ModalBackdrop({ children, randomModalClose }) {
  const { isMobile } = useWindowSize();
  const dispatch = useDispatch();

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      dispatch(randomModalClose());
    }
  };

  return (
    <>
      {!isMobile ? (
        <BackdropStyled onClick={handleBackdropClick}>
          {children}
        </BackdropStyled>
      ) : (
        <>{children}</>
      )}
    </>
  );
}

export default ModalBackdrop;

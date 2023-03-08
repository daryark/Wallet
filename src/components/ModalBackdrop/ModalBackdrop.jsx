import { useDispatch, useSelector } from 'react-redux';
import MediaQuery from 'react-responsive';

import { selectIsModalOpen } from 'redux/global/global-selectors';
import { isModalAddTransactionOpen } from 'redux/global/globalSlice';

import { BackdropStyled } from './ModalBackdrop.styled';

function ModalBackdrop({ children }) {
  const isModalOpen = useSelector(selectIsModalOpen);

  const dispatch = useDispatch();

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      dispatch(isModalAddTransactionOpen());
    }
  };

  return (
    <MediaQuery minWidth={768}>
      {isModalOpen && (
        <BackdropStyled onClick={handleBackdropClick}>
          {children}
        </BackdropStyled>
      )}
    </MediaQuery>
  );
}

export default ModalBackdrop;
